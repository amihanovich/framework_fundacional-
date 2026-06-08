import Anthropic from '@anthropic-ai/sdk';
import { SYSTEM_PROMPT } from './context.js';
import { TOOLS } from './tools.js';
import * as drive from './drive.js';
import * as sheets from './sheets.js';
import * as search from './search.js';
import * as telegram from './telegram.js';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

function createToolExecutors(chatId) {
  return {
    search_files: async ({ query }) => {
      try {
        const files = await drive.searchFilesRecursive(query);
        if (files.length === 0) {
          return { files: [], message: `No se encontraron archivos para "${query}"` };
        }
        return { files };
      } catch (err) {
        return { error: err.message };
      }
    },

    get_file: async ({ file_id, file_name }) => {
      try {
        const buffer = await drive.getFile(file_id);
        const metadata = await drive.getFileMetadata(file_id);
        const filename = file_name || metadata.name;
        await telegram.sendDocument(chatId, buffer, filename);
        return { sent: true, file_name: filename };
      } catch (err) {
        return { error: err.message };
      }
    },

    save_document: async ({ file_url, stage, doc_type, amount, currency, suggested_name }) => {
      try {
        const buffer = await telegram.downloadFromUrl(file_url);

        // Determina la subcarpeta según el tipo
        const subfolder = doc_type === 'comprobante_pago' || doc_type === 'factura'
          ? '02 - Comprobantes de Pago'
          : doc_type === 'voucher_reserva'
            ? '01 - Reservas y Confirmaciones'
            : '03 - Info y Fact Sheets';

        // Genera nombre de archivo
        const ext = file_url.includes('.pdf') ? '.pdf' : '.jpg';
        const filename = suggested_name || `${stage} - ${doc_type}${ext}`;

        const mimeType = ext === '.pdf' ? 'application/pdf' : 'image/jpeg';
        const uploaded = await drive.uploadFile(buffer, filename, mimeType, subfolder);

        // Si tiene monto, actualiza el Sheet también
        if (amount && process.env.GOOGLE_SHEET_ID) {
          await sheets.updatePayment(stage, 'saldo', String(amount));
        }

        return { saved: true, file_id: uploaded.id, file_name: uploaded.name, folder: subfolder };
      } catch (err) {
        return { error: err.message };
      }
    },

    update_payment: async ({ stage, field, value }) => {
      try {
        if (!process.env.GOOGLE_SHEET_ID) {
          return { error: 'Google Sheet no configurado (GOOGLE_SHEET_ID vacío)' };
        }
        const result = await sheets.updatePayment(stage, field, value);
        return result;
      } catch (err) {
        return { error: err.message };
      }
    },

    web_search: async ({ query, location }) => {
      try {
        if (!process.env.BRAVE_API_KEY) {
          return { error: 'Brave Search no configurado (BRAVE_API_KEY vacío)' };
        }
        const results = await search.webSearch(query, location);
        return { results };
      } catch (err) {
        return { error: err.message };
      }
    }
  };
}

export async function callClaude({ messages, chatId }) {
  const executors = createToolExecutors(chatId);
  let currentMessages = [...messages];

  // Agentic loop: Claude puede usar múltiples tools antes de responder
  for (let turn = 0; turn < 10; turn++) {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      tools: TOOLS,
      messages: currentMessages
    });

    if (response.stop_reason === 'end_turn') {
      const textBlock = response.content.find(b => b.type === 'text');
      return textBlock?.text || '';
    }

    if (response.stop_reason === 'tool_use') {
      const toolUseBlocks = response.content.filter(b => b.type === 'tool_use');

      // Agrega la respuesta del asistente (con tool_use blocks)
      currentMessages.push({ role: 'assistant', content: response.content });

      // Ejecuta todas las tools en paralelo
      const toolResults = await Promise.all(
        toolUseBlocks.map(async (block) => {
          const executor = executors[block.name];
          let result;
          if (executor) {
            result = await executor(block.input);
          } else {
            result = { error: `Tool desconocida: ${block.name}` };
          }
          return {
            type: 'tool_result',
            tool_use_id: block.id,
            content: JSON.stringify(result)
          };
        })
      );

      currentMessages.push({ role: 'user', content: toolResults });
      continue;
    }

    // stop_reason inesperado
    const textBlock = response.content.find(b => b.type === 'text');
    return textBlock?.text || '';
  }

  return 'Lo siento, no pude completar la operación (demasiados pasos).';
}
