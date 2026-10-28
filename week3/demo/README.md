# Say No (finished demo)

Create a file named `.env.local` in this folder containing:

```
NAAS_URL=https://naas.isalman.dev
```

Then run:

```bash
npm install
npm run dev
```

Open http://localhost:3000

Routes:
- `/` home
- `/ask` (fetches a reason from the browser)
- `/api/no` (our own API endpoint)
