# anmolsharma.com

Personal portfolio for Anmol Sharma — private equity analyst, CFA Level II candidate, MBA (Finance) at Drexel University.

Built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Structure

- `lib/data.ts` — all site content (profile, experience, education, skills, and the five project case studies). Edit this file to update copy.
- `app/page.tsx` — single-scroll home page (hero, work grid, experience, skills, contact).
- `app/work/[slug]/page.tsx` — statically generated case-study pages.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
npm start
```

Deploys cleanly to Vercel or any Node host.
