import * as telegram from '../lib/telegram.js';
import { callClaude } from '../lib/claude.js';

export default async function handler(req, res) {
  // Solo acepta POST
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  // Verifica el secret del webhook si está configurado
  const secret = req.headers['x-telegram-bot-api-secret-token'];
  if (process.env.WEBHOOK_SECRET && secret !== process.env.WEBHOOK_SECRET) {
    return res.status(401).send('Unauthorized');
  }

  const update = req.body;
  const message = update?.message;

  if (!message) {
    return res.status(200).send('OK');
  }

  const chatId = message.chat.id;

  try {
    if (message.text) {
      await handleTextMessage(message, chatId);
    } else if (message.photo || message.document) {
      await handleFileMessage(message, chatId);
    }
  } catch (err) {
    console.error('Error procesando update:', err);
    await telegram.sendMessage(chatId, '❌ Ocurrió un error. Intentá de nuevo.');
  }

  return res.status(200).send('OK');
}

async function handleTextMessage(message, chatId) {
  await telegram.sendChatAction(chatId, 'typing');

  const response = await callClaude({
    chatId,
    messages: [{ role: 'user', content: message.text }]
  });

  await telegram.sendMessage(chatId, response);
}

async function handleFileMessage(message, chatId) {
  await telegram.sendChatAction(chatId, 'upload_document');

  let fileId;
  let isImage = false;
  let mimeType = 'application/octet-stream';

  if (message.photo) {
    // Toma la foto de mayor resolución
    fileId = telegram.getLargestPhotoFileId(message.photo);
    isImage = true;
    mimeType = 'image/jpeg';
  } else if (message.document) {
    fileId = message.document.file_id;
    mimeType = message.document.mime_type || 'application/octet-stream';
    isImage = mimeType.startsWith('image/');
  }

  // Descarga el archivo y obtiene la URL autenticada
  const fileUrl = await telegram.getFileUrl(fileId);
  const buffer = await telegram.downloadFromUrl(fileUrl);
  const base64 = buffer.toString('base64');

  let claudeMessages;

  if (isImage) {
    // Pasa la imagen a Claude para análisis visual
    claudeMessages = [{
      role: 'user',
      content: [
        {
          type: 'image',
          source: { type: 'base64', media_type: mimeType, data: base64 }
        },
        {
          type: 'text',
          text: message.caption
            || 'Procesá este comprobante, identificá de qué etapa es y guardalo en Drive en la carpeta correspondiente. Confirmame qué guardaste.'
        },
        {
          type: 'text',
          text: `URL del archivo (para usar con save_document): ${fileUrl}`
        }
      ]
    }];
  } else if (mimeType === 'application/pdf') {
    // PDFs: pasa como documento
    claudeMessages = [{
      role: 'user',
      content: [
        {
          type: 'document',
          source: { type: 'base64', media_type: 'application/pdf', data: base64 }
        },
        {
          type: 'text',
          text: message.caption
            || 'Procesá este documento, identificá de qué etapa es y guardalo en Drive en la carpeta correspondiente.'
        },
        {
          type: 'text',
          text: `URL del archivo (para usar con save_document): ${fileUrl}`
        }
      ]
    }];
  } else {
    // Otro tipo de archivo: solo guarda sin análisis
    claudeMessages = [{
      role: 'user',
      content: message.caption
        || `Recibí un archivo (${mimeType}). URL: ${fileUrl}. Guardalo en Drive como "otro" documento.`
    }];
  }

  const response = await callClaude({ chatId, messages: claudeMessages });
  await telegram.sendMessage(chatId, response);
}
