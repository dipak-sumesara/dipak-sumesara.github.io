# Dipak Sumesara — Portfolio

A single-page portfolio site summarizing 8+ years of backend-heavy full-stack engineering experience: impact metrics, a full work history, and a stack breakdown by layer.

## Structure

```
index.html        the entire site (HTML/CSS/JS, no build step)
assets/profile.jpg  profile photo used in the hero section
```

## Running locally

Just open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying with GitHub Pages

1. Push this repo to GitHub.
2. In the repo settings, go to **Pages** → set the source branch to `main` and the folder to `/ (root)`.
3. The site will be live at `https://<username>.github.io/<repo-name>/`.

## Updating content

All copy lives directly in `index.html` — experience entries, stack chips, and contact links are plain HTML, no CMS or data file involved.
