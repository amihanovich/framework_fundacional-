import { google } from 'googleapis';

// Estructura esperada del Sheet:
// Columna A: Etapa (ej: "E04 - Tacuapú")
// Columna B: Alojamiento
// Columna C: Total ARS
// Columna D: Total USD
// Columna E: Seña pagada
// Columna F: Saldo pendiente
// Columna G: Pagado completo (TRUE/FALSE)
// Columna H: Nota

const FIELD_COLUMNS = {
  pagado: 'G',
  saldo: 'F',
  nota: 'H'
};

function getAuth() {
  const serviceAccount = JSON.parse(
    Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT, 'base64').toString('utf-8')
  );
  return new google.auth.GoogleAuth({
    credentials: serviceAccount,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });
}

function getSheets() {
  return google.sheets({ version: 'v4', auth: getAuth() });
}

export async function updatePayment(stage, field, value) {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) throw new Error('GOOGLE_SHEET_ID no configurado');

  const sheets = getSheets();
  const col = FIELD_COLUMNS[field];
  if (!col) throw new Error(`Campo inválido: ${field}`);

  // Lee la columna A para encontrar la fila de la etapa
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: 'Pagos!A:A'
  });

  const rows = res.data.values || [];
  let rowIndex = -1;

  for (let i = 0; i < rows.length; i++) {
    if (rows[i][0] && rows[i][0].toLowerCase().includes(stage.toLowerCase())) {
      rowIndex = i + 1; // 1-based
      break;
    }
  }

  if (rowIndex === -1) {
    // Si no encuentra la fila, agrega una nueva
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Pagos!A:H',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[stage, '', '', '', '', '', '', '']]
      }
    });

    const res2 = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: 'Pagos!A:A'
    });
    rowIndex = (res2.data.values || []).length;
  }

  await sheets.spreadsheets.values.update({
    spreadsheetId: sheetId,
    range: `Pagos!${col}${rowIndex}`,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [[value]] }
  });

  return { updated: true, stage, field, value, row: rowIndex };
}

export async function getPaymentStatus() {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) return null;

  const sheets = getSheets();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: 'Pagos!A:H'
  });

  return res.data.values || [];
}
