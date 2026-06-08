#!/usr/bin/env node
// Registra el webhook de Telegram apuntando a tu URL de Vercel.
// Uso: VERCEL_URL=https://tu-proyecto.vercel.app node scripts/setup-webhook.js

const token = process.env.TELEGRAM_BOT_TOKEN;
const secret = process.env.WEBHOOK_SECRET;
const vercelUrl = process.env.VERCEL_URL;

if (!token || !vercelUrl) {
  console.error('Necesitás TELEGRAM_BOT_TOKEN y VERCEL_URL como variables de entorno.');
  process.exit(1);
}

const webhookUrl = `${vercelUrl}/api/webhook`;

const params = new URLSearchParams({ url: webhookUrl });
if (secret) params.append('secret_token', secret);

const url = `https://api.telegram.org/bot${token}/setWebhook?${params}`;

fetch(url, { method: 'POST' })
  .then(r => r.json())
  .then(data => {
    if (data.ok) {
      console.log('✅ Webhook registrado:', webhookUrl);
    } else {
      console.error('❌ Error:', data.description);
    }
  })
  .catch(err => console.error('❌ Error de red:', err.message));
