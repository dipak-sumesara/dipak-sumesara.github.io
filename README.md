# Dipak Sumesara — Portfolio (Tailwind branch)

A single self-contained static HTML page (Tailwind CSS via the Play CDN, no build step, no framework) summarizing 8+ years of backend-heavy full-stack engineering: projects, experience, stack, and contact info.

This branch (`tailwind-redesign`) rebuilds the site's visuals with Tailwind utility classes end to end, on an "amber terminal" theme (warm paper light mode, warm near-black dark mode, single amber accent) with a manual dark/light toggle on top of automatic OS-preference detection, a bento-style featured project card, a connected timeline for experience, and scroll-reveal animation that respects `prefers-reduced-motion`.

**Heads up:** it loads Tailwind from `cdn.tailwindcss.com` (the "Play CDN"), which compiles utility classes in the browser at runtime — perfect for a no-build static file, but it does print a "should not be used in production" console warning and costs a small amount of first-paint latency compared to a compiled stylesheet. If that ever matters, swap it for the Tailwind CLI/PostCSS build (`npx tailwindcss -i input.css -o styles.css --minify`) and link the generated file instead — everything else in this file stays the same.

## Structure

```
index.html    the entire site (Tailwind config + custom CSS vars inline, no dependencies beyond Google Fonts + Tailwind Play CDN)
resume.pdf    downloadable résumé, linked from the "Download résumé" buttons
avatar.jpg    compressed profile photo (256×256) used in the hero
```

## Running locally

Just open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying

Static host of your choice — GitHub Pages, Vercel, Netlify all work as-is, no build step.

**GitHub Pages:** repo Settings → Pages → source branch `main`, folder `/ (root)`. This repo is named `dipak-sumesara.github.io`, so GitHub serves it at the root user-page URL: `https://dipak-sumesara.github.io/` (no path suffix).

**Vercel:** import the repo, framework preset "Other," no build command, output directory `/`.

## Updating content

- **Projects** — edit the `PROJECTS` array near the top of the `<script>` block at the bottom of `index.html`. Each entry renders as a card automatically (the first one renders full-width as the featured card); no markup to touch. Any field value starting with `"ADD "` renders as a pending placeholder pill instead of a broken link or an invented number — replace those as real repos/benchmarks land.
- **Experience, stack, education, contact** — plain HTML further up the same file, grouped by section, styled with Tailwind utility classes.
- **Theme colors** — edit the `--bg`/`--surface`/`--accent`/etc. CSS variables in the `<style>` block (light theme under `:root`, dark theme under `.dark`); the `tailwind.config` script above it maps them into Tailwind's color utilities, so every `bg-accent`, `text-dim`, etc. class picks up a change automatically.
- **Résumé** — replace `resume.pdf` with an updated export (keep the filename, or update the two `href="./resume.pdf"` references if you rename it).
- **Avatar** — replace `avatar.jpg`; keep it roughly square and under ~300px on a side since it only ever displays at 64–72px.
