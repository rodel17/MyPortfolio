# Rodel Agocoy — Portfolio

Vue 3 + Vite + Tailwind CSS portfolio, built from resume content.

## Run locally

```bash
npm install
npm run dev
```

## Edit content

All resume content lives in one place: `src/data/resume.js`.
Edit that file to change text, dates, or links — the components just render it.

## Add certification images

1. Put the image file in `public/certifications/` (e.g. `css-essentials.png`).
2. In `src/data/resume.js`, set that certification's `image` field to
   `/certifications/css-essentials.png`.
3. Save — the placeholder box is replaced with your image automatically.

## Deploy to GitHub Pages

1. In `vite.config.js`, set `base` to match your repo name:
   `base: '/your-repo-name/'` (skip this if deploying to a `username.github.io` user site).
2. Build and publish:
   ```bash
   npm install
   npm run deploy
   ```
   This runs `vite build` then pushes `dist/` to the `gh-pages` branch via the `gh-pages` package.
3. In the repo's Settings → Pages, set the source to the `gh-pages` branch.

## Stack

- Vue 3 (`<script setup>`)
- Vite
- Tailwind CSS
- IBM Plex Sans / IBM Plex Mono (Google Fonts)
