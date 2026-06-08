export const TOOLS = [
  {
    name: 'search_files',
    description: 'Busca comprobantes, vouchers o documentos del viaje en Google Drive',
    input_schema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Nombre del alojamiento, tipo de documento, o etapa del viaje (ej: "Tacuapi", "Yvy", "comprobante")'
        }
      },
      required: ['query']
    }
  },
  {
    name: 'get_file',
    description: 'Obtiene y envía un archivo (PDF, imagen) al usuario. Usar cuando pidan "dame el comprobante de X" o "mostrame el voucher de Y". Primero usá search_files para encontrar el file_id.',
    input_schema: {
      type: 'object',
      properties: {
        file_id: {
          type: 'string',
          description: 'ID del archivo en Google Drive'
        },
        file_name: {
          type: 'string',
          description: 'Nombre para mostrar al enviar'
        }
      },
      required: ['file_id', 'file_name']
    }
  },
  {
    name: 'save_document',
    description: 'Guarda un comprobante o documento recibido por Telegram en la carpeta correcta de Drive y actualiza el Sheet de pagos',
    input_schema: {
      type: 'object',
      properties: {
        file_url: {
          type: 'string',
          description: 'URL del archivo en Telegram para descargar'
        },
        stage: {
          type: 'string',
          description: 'Etapa del viaje (ej: "E04 - Tacuapú", "E06 - Yacutinga")'
        },
        doc_type: {
          type: 'string',
          enum: ['comprobante_pago', 'voucher_reserva', 'factura', 'otro']
        },
        amount: {
          type: 'number',
          description: 'Monto si es comprobante de pago'
        },
        currency: {
          type: 'string',
          enum: ['ARS', 'USD']
        },
        suggested_name: {
          type: 'string',
          description: 'Nombre sugerido para el archivo en Drive (ej: "E04 - Tacuapi - Seña Prex.pdf")'
        }
      },
      required: ['file_url', 'stage', 'doc_type']
    }
  },
  {
    name: 'update_payment',
    description: 'Actualiza el monto pagado o saldo pendiente de un alojamiento en el registro de pagos de Google Sheets',
    input_schema: {
      type: 'object',
      properties: {
        stage: {
          type: 'string',
          description: 'Etapa del viaje (ej: "E04 - Tacuapú", "E06 - Yacutinga")'
        },
        field: {
          type: 'string',
          enum: ['pagado', 'saldo', 'nota'],
          description: 'Campo a actualizar'
        },
        value: {
          type: 'string',
          description: 'Nuevo valor'
        }
      },
      required: ['stage', 'field', 'value']
    }
  },
  {
    name: 'web_search',
    description: 'Busca información actualizada sobre tours, actividades, condiciones de ruta o cualquier info turística de las etapas del viaje',
    input_schema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Búsqueda a realizar'
        },
        location: {
          type: 'string',
          description: 'Lugar específico si aplica (ej: "Iberá", "Puerto Iguazú", "Yacutinga")'
        }
      },
      required: ['query']
    }
  }
];
