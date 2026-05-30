# htmx-reading-time

> Package name: `htmx-reading-time` (repo: `realtime-text-readtime`)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen?logo=node.js&logoColor=white)](package.json)

Minimal live reading-time estimator built with **HTMX** and a tiny **Express** server.

Type in the textarea and the estimated read time updates on each keystroke — no React, no build step.

## Run locally

```bash
git clone git@github.com:PiyushMishra318/realtime-text-readtime.git
cd realtime-text-readtime
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy (Vercel)

```bash
npx vercel --prod
```

The Express app is exported for serverless via `api/index.js`.

## How it works

- `public/index.html` posts the textarea to `/readtime` via HTMX (`keyup` + 250ms debounce).
- `server.js` uses [`reading-time`](https://www.npmjs.com/package/reading-time) and returns a small HTML fragment.

## Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start the server |
| `npm test` | Run unit tests |

## License

MIT © 2026 [Piyush Mishra](https://github.com/PiyushMishra318)
