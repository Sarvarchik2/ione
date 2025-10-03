import { H3Event, defineEventHandler, readBody } from 'h3'

interface ContactPayload {
  name: string
  phone: string
  comment?: string
}

function validatePhone(phone: string) {
  // Keep digits and '+' at start; basic length check (7-20)
  const cleaned = phone.trim()
  const isValid = /^\+?[0-9\s\-()]{7,20}$/.test(cleaned)
  return isValid
}

export default defineEventHandler(async (event: H3Event) => {
  if (event.node.req.method !== 'POST') {
    event.node.res.statusCode = 405
    return { ok: false, error: 'Method Not Allowed' }
  }

  const body = (await readBody(event)) as Partial<ContactPayload>

  const name = (body?.name ?? '').toString().trim()
  const phone = (body?.phone ?? '').toString().trim()
  const comment = (body?.comment ?? '').toString().trim()

  const errors: Record<string, string> = {}
  if (!name) errors.name = 'Введите имя'
  if (!phone) errors.phone = 'Введите номер телефона'
  else if (!validatePhone(phone)) errors.phone = 'Некорректный телефон'

  if (Object.keys(errors).length) {
    event.node.res.statusCode = 400
    return { ok: false, errors }
  }

  const config = useRuntimeConfig()
  const token = config.telegramBotToken
  const chatId = config.telegramChatId

  const missing: string[] = []
  if (!token) missing.push('NUXT_TELEGRAM_BOT_TOKEN')
  if (!chatId) missing.push('NUXT_TELEGRAM_CHAT_ID')
  if (missing.length) {
    console.error('Telegram config missing:', missing.join(', '))
    event.node.res.statusCode = 500
    return { ok: false, error: `Server misconfiguration: missing ${missing.join(', ')}` }
  }

  const text = [
    '📩 Новая заявка с сайта',
    `👤 Имя: ${name}`,
    `📞 Телефон: ${phone}`,
    comment ? `💬 Комментарий: ${comment}` : null,
    `🕒 Время: ${new Date().toLocaleString('ru-RU')}`,
  ].filter(Boolean).join('\n')

  try {
    const resp = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text })
    })

    const data = await resp.json()
    if (!resp.ok || !data.ok) {
      console.error('Telegram send failed', data)
      event.node.res.statusCode = 502
      return { ok: false, error: 'Не удалось отправить сообщение' }
    }

    return { ok: true }
  } catch (e) {
    console.error('Telegram error', e)
    event.node.res.statusCode = 502
    return { ok: false, error: 'Ошибка отправки' }
  }
})
