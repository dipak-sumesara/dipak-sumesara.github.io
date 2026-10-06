# Dipak Sumesara — Portfolio

Personal site built with **Next.js (App Router)**, **Tailwind CSS v4**, **Framer Motion**, and **lucide-react**, exported as static HTML and served from GitHub Pages at <https://dipak-sumesara.github.io/>.

## Structure

```
app/
  layout.tsx          fonts, metadata/OG tags, no-flash theme script
  page.tsx            section order
  globals.css         design tokens (light in :root, dark in .dark) + component classes
components/
  Nav.tsx             sticky nav, active-section pill, scroll progress, mobile menu
  ThemeToggle.tsx     light/dark switch, persisted to localStorage
  Footer.tsx
  sections/           Hero · Bento · CaseStudies · Timeline · Contact
  ui/                 Reveal, BentoCard, CountUp, SectionHeading, BrandIcons
lib/content.ts        every word on the site — edit this, not the components
public/
  avatar.jpg          profile photo (hero portrait, favicon, OG image)
  resume.pdf          linked from every "Résumé" button
```

## Running locally

```
npm install
npm run dev         # http://localhost:3000
npm run build       # static export to out/
npm start           # serve out/ to preview the production build
```

## Updating content

- **Résumé changes** — replace `public/resume.pdf`, then mirror the changes in `lib/content.ts` (experience, metrics, case studies, skills). Components render whatever is there.
- **Avatar** — replace `public/avatar.jpg`. A larger, roughly 4:5 photo (≥ 800px tall) will look sharper in the hero portrait than the current 256×256 image.
- **Colors / fonts** — tokens at the top of `app/globals.css`; fonts are loaded in `app/layout.tsx`.

## Deploying

`.github/workflows/deploy.yml` builds and publishes `out/` on every push to `main`.

One-time setup: repo **Settings → Pages → Build and deployment → Source: GitHub Actions** (the old site deployed from the branch root, which won't work for a Next.js build).

## Notes

- `framer-motion` is pinned to 13.5.1: 14.0.0 leaves `initial → animate` entrance animations stuck at their initial state after hydration, which hides the whole hero.
