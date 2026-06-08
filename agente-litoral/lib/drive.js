import { google } from 'googleapis';

function getAuth() {
  const serviceAccount = JSON.parse(
    Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT, 'base64').toString('utf-8')
  );
  return new google.auth.GoogleAuth({
    credentials: serviceAccount,
    scopes: ['https://www.googleapis.com/auth/drive']
  });
}

function getDrive() {
  return google.drive({ version: 'v3', auth: getAuth() });
}

export async function searchFiles(query) {
  const drive = getDrive();
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

  const res = await drive.files.list({
    q: `name contains '${query.replace(/'/g, "\\'")}' and '${folderId}' in parents and trashed = false`,
    fields: 'files(id, name, mimeType, createdTime)',
    orderBy: 'name'
  });

  return res.data.files || [];
}

export async function searchFilesRecursive(query) {
  const drive = getDrive();
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

  // Busca en toda la estructura del Drive, no solo en la raíz
  const res = await drive.files.list({
    q: `name contains '${query.replace(/'/g, "\\'")}' and trashed = false`,
    fields: 'files(id, name, mimeType, createdTime, parents)',
    orderBy: 'name',
    spaces: 'drive'
  });

  return res.data.files || [];
}

export async function getFile(fileId) {
  const drive = getDrive();

  const res = await drive.files.get(
    { fileId, alt: 'media' },
    { responseType: 'arraybuffer' }
  );

  return Buffer.from(res.data);
}

export async function getFileMetadata(fileId) {
  const drive = getDrive();
  const res = await drive.files.get({
    fileId,
    fields: 'id, name, mimeType'
  });
  return res.data;
}

export async function uploadFile(buffer, filename, mimeType, subfolder) {
  const drive = getDrive();
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

  // Determina o crea la subcarpeta destino
  let targetFolderId = folderId;
  if (subfolder) {
    targetFolderId = await getOrCreateSubfolder(drive, folderId, subfolder);
  }

  const res = await drive.files.create({
    requestBody: {
      name: filename,
      parents: [targetFolderId]
    },
    media: {
      mimeType: mimeType || 'application/octet-stream',
      body: bufferToStream(buffer)
    },
    fields: 'id, name'
  });

  return res.data;
}

async function getOrCreateSubfolder(drive, parentId, folderName) {
  const res = await drive.files.list({
    q: `name = '${folderName.replace(/'/g, "\\'")}' and '${parentId}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
    fields: 'files(id)'
  });

  if (res.data.files.length > 0) {
    return res.data.files[0].id;
  }

  const folder = await drive.files.create({
    requestBody: {
      name: folderName,
      mimeType: 'application/vnd.google-apps.folder',
      parents: [parentId]
    },
    fields: 'id'
  });

  return folder.data.id;
}

import { Readable } from 'stream';

function bufferToStream(buffer) {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
}
