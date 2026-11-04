# Shop (starter)

A super simple shop. Products live in **Sanity** (our CMS), **our API** reads them from Sanity, and the **shop page** reads from our API.

```
Sanity Studio  →  /api/products  →  Shop page
                  /api/checkout  ←  "Buy" button
```

## Setup (one time)

1. Make a free Sanity project at https://www.sanity.io/manage and copy its **Project ID**.
2. Copy `.env.example` to `.env.local` and paste in the Project ID.
3. Install and load the sample products:

```bash
npm install
npx sanity login
npx sanity dataset import seed.ndjson production
npm run dev
```

4. Open http://localhost:3000/studio. The first time, Sanity will ask you to add `http://localhost:3000` as a CORS origin. Click the link and say yes (with credentials).

## Your job: build the API

The shop page and Sanity are already set up. The shop is empty because **the API doesn't exist yet.** Build these in `app/api/`:

1. `app/api/products/route.js`: `GET`, returns every product (use `PRODUCTS_QUERY`)
2. `app/api/products/[slug]/route.js`: `GET`, returns one product, or 404 if it's not found (use `PRODUCT_QUERY`)
3. `app/api/checkout/route.js`: `POST`, takes `{ slug, quantity }` and returns the total. Look up the price from Sanity yourself!

Hint: `client` is in `@/sanity/client` and the queries are in `@/sanity/queries`.

## Routes (when you're done)

| Route | What it does |
| --- | --- |
| `/` | the shop |
| `/studio` | Sanity Studio: edit products here |
| `/docs` | API docs: test every route with **Try it out** |
| `GET /api/products` | every product as JSON |
| `GET /api/products/husky-mug` | one product |
| `POST /api/checkout` | body `{ "slug": "husky-mug", "quantity": 2 }` → order total |

## Things to show

- Change a price in Studio → hit **Publish** → refresh the shop. No code change!
- Upload an image for a product in Studio.
- Turn off **In stock?** → the button becomes "Sold out" and checkout refuses it.
- Try the GROQ queries from `sanity/queries.js` in Studio's **Vision** tab.
- Checkout looks up the price itself, so a hacker can't send `"price": 0`.

## Where the Sanity stuff lives

- `sanity/schemas/product.js`: what a product looks like (the fields in Studio)
- `sanity/queries.js`: GROQ queries
- `sanity/client.js`: how our code talks to Sanity
- `sanity.config.js` + `app/studio/`: puts Studio inside our site at `/studio`

## API docs (`/docs`)

`/docs` is **Swagger UI**, the same "try it out" page FastAPI gives you. It reads `public/openapi.json`, which describes each route. FastAPI writes that file for you; here we write it by hand. If you add a route, add it to `openapi.json` too.
