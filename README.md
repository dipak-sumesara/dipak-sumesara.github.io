# Dipak Sumesara — Portfolio

A single static HTML page (inline JS, styled with Tailwind CSS) summarizing 8+ years of backend-heavy full-stack engineering: projects, experience, stack, and contact info.

## Structure

```
index.html       markup + the PROJECTS data/render script (inline JS, no framework)
src/input.css    Tailwind source: design tokens, custom animations, and @layer components
dist/styles.css  compiled Tailwind output, committed — index.html links directly to this,
                 so deploying still needs no build step
resume.pdf       downloadable résumé, linked from the "Download résumé" buttons
avatar.jpg       compressed profile photo (256×256) used in the hero
```

## Running locally

Just open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. `dist/styles.css` is already built and committed, so this works without installing anything.

## Editing styles

Styling is Tailwind CSS v4 (CLI, no PostCSS config needed). Color/font tokens live as CSS variables at the top of `src/input.css` (light values in `:root`, dark values swapped in under `prefers-color-scheme: dark`) and are consumed from HTML via arbitrary-value utilities like `bg-[var(--surface)]`. Repeated composite styles (`.btn`, `.chip`, `.project-card`, `.terminal`, etc.) are defined once in `src/input.css` under `@layer components` via `@apply`.

```
npm install
npm run watch:css   # rebuild dist/styles.css on save while editing
npm run build:css   # one-off minified build — run before committing
```

Commit the rebuilt `dist/styles.css` alongside any `src/input.css` or class-name changes; the deployed page never runs a build step itself.

## Deploying

Static host of your choice — GitHub Pages, Vercel, Netlify all work as-is, no build step (as long as `dist/styles.css` is up to date and committed).

**GitHub Pages:** repo Settings → Pages → source branch `main`, folder `/ (root)`. This repo is named `dipak-sumesara.github.io`, so GitHub serves it at the root user-page URL: `https://dipak-sumesara.github.io/` (no path suffix).

**Vercel:** import the repo, framework preset "Other," no build command, output directory `/`.

## Updating content

- **Projects** — edit the `PROJECTS` array near the top of the `<script>` block at the bottom of `index.html`. Each entry renders as a card automatically; no markup to touch. Any field value starting with `"ADD "` renders as a pending placeholder pill instead of a broken link or an invented number — replace those as real repos/benchmarks land.
- **Experience, stack, education, contact** — plain HTML further up the same file, grouped by section.
- **Résumé** — replace `resume.pdf` with an updated export (keep the filename, or update the two `href="./resume.pdf"` references if you rename it).
- **Avatar** — replace `avatar.jpg`; keep it roughly square and under ~300px on a side since it only ever displays at 64px.
