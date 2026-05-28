# CodeSense

CodeSense is a React + Vite app that explains code using Groq (streaming responses). It includes:

- Simple + Technical explanation modes
- Language selector + token estimate
- Copy-to-clipboard for explanations
- Light/Dark theme toggle (Tailwind v4 + CSS variables)

## Setup

Install deps:

```bash
npm install
```

Create an environment file (do **not** commit it):

```bash
# .env
VITE_GROQ_API_KEY=your_key_here
```

Run locally:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## Customize

- Author footer + social links: `src/config/author.js`
