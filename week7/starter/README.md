# Shop — Week 7

Week 6’s shop, with the product APIs already built.

## Setup

You need a Sanity project id in `.env.local`:

```bash
cp .env.example .env.local
# paste NEXT_PUBLIC_SANITY_PROJECT_ID=...

npm install
npx sanity login
npx sanity dataset import seed.ndjson production --replace
npm run dev
```

Open:
- http://localhost:3000 — shop
- http://localhost:3000/studio — Sanity Studio
