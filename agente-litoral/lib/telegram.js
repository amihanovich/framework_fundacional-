const BASE = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`;
const FILE_BASE = `https://api.telegram.org/file/bot${process.env.TELEGRAM_BOT_TOKEN}`;

export async function sendMessage(chatId, text) {
  await fetch(`${BASE}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'HTML'
    })
  });
}

export async function sendDocument(chatId, buffer, filename) {
  const form = new FormData();
  form.append('chat_id', String(chatId));
  form.append('document', new Blob([buffer]), filename);

  await fetch(`${BASE}/sendDocument`, {
    method: 'POST',
    body: form
  });
}

export async function sendChatAction(chatId, action = 'typing') {
  await fetch(`${BASE}/sendChatAction`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, action })
  });
}

export async function getFileUrl(fileId) {
  const res = await fetch(`${BASE}/getFile?file_id=${fileId}`);
  const data = await res.json();
  if (!data.ok) throw new Error(`Telegram getFile error: ${data.description}`);
  return `${FILE_BASE}/${data.result.file_path}`;
}

export async function downloadFile(fileId) {
  const url = await getFileUrl(fileId);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Error descargando archivo de Telegram: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

export async function downloadFromUrl(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Error descargando URL: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

export function getLargestPhotoFileId(photos) {
  return photos[photos.length - 1].file_id;
}
