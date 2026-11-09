# cartrust24-website

Marketing website for **CARTRUST24 Kfz-Gutachten UG (haftungsbeschränkt)** —
unabhängige Kfz-Sachverständige in Hamburg.

- Production: https://cartrust24.de
- Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind 4 tokens, Geist + Newsreader + JetBrains Mono via `next/font`
- Deployment: GitHub Pages (static export to `out/`, workflow `.github/workflows/pages.yml`)

## Local development

```bash
npm install
npm run dev
```

Then visit http://localhost:3000.

## Build

```bash
npm run build   # static export to out/
npm run lint    # ESLint
```

## Routes

| Path | Purpose |
|------|---------|
| `/` | Landing page (hero, leistungen, ablauf, team, testimonials, FAQ teaser) |
| `/leistung` | Leistungen — Haftpflicht/Kasko/Bagatell toggle, full leistungskatalog, servicegebiet |
| `/expertise` | Team — Walid Mohtasebzada & Elias Azizi, werte, transparenz-hinweis |
| `/kontakt` | Telefon/WhatsApp/E-Mail Kanäle + Öffnungszeiten |
| `/faq` | 12 FAQ Antworten in 4 Kapiteln |
| `/impressum`, `/datenschutz` | Rechtliches |

## Media

Images and videos live in `public/images/`. Reference them via
`assetUrl("filename.ext")` from `src/lib/assets.ts`.
