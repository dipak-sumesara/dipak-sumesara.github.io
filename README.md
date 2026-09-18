# Dipak Sumesara — Portfolio

A single self-contained static HTML page (inline CSS/JS, no build step, no framework) summarizing 8+ years of backend-heavy full-stack engineering: projects, experience, stack, and contact info.

## Structure

```
index.html    the entire site (HTML/CSS/JS inline, no dependencies beyond Google Fonts)
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

- **Projects** — edit the `PROJECTS` array near the top of the `<script>` block at the bottom of `index.html`. Each entry renders as a card automatically; no markup to touch. Any field value starting with `"ADD "` renders as a pending placeholder pill instead of a broken link or an invented number — replace those as real repos/benchmarks land.
- **Experience, stack, education, contact** — plain HTML further up the same file, grouped by section.
- **Résumé** — replace `resume.pdf` with an updated export (keep the filename, or update the two `href="./resume.pdf"` references if you rename it).
- **Avatar** — replace `avatar.jpg`; keep it roughly square and under ~300px on a side since it only ever displays at 64px.
