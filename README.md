# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Contact form → Telegram

This project includes a contact form that submits to a Telegram chat via a bot.

1) Create a bot with BotFather and obtain the token.
2) Add the bot to your group/channel and promote if needed. Send a test message so the chat gets an update.
3) Set environment variables (copy `.env.example` to `.env`):

```
NUXT_TELEGRAM_BOT_TOKEN=123456:ABC...
NUXT_TELEGRAM_CHAT_ID=-1001234567890
```

4) Restart the dev server after setting env vars.

Notes:
- Server endpoint: `POST /api/contact` expects `{ name, phone, comment? }`.
- Basic validation occurs on both client and server.
- On success, a notice appears in the UI and the message is sent via Telegram Bot API.
