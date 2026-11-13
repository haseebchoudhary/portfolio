# Haseeb Choudhary: portfolio

Vite + React portfolio with tasteskill layout: dark software theme, WebGL contour ground in the hero, and a 3D-projected Rails architecture diagram.

## Run

```bash
npm install
npm run dev
npm run build
npm run preview   # serves at /portfolio/ (matches GitHub Pages)
```

## Content

All copy lives in `src/data/cv.js`.

## Assets

- **LexiQamus gallery:** seven JPGs in `public/projects/lexiqamus-*.jpg` (see `src/data/cv.js`).
- **CV:** `public/cv.pdf` for Download CV links.
- **About photo:** stand-in desk image in `public/taste/img/` (credit line in footer).

## Design kit

Vendored under `src/taste/`: `motion.css`, `effects/fx.js`, and `contour-lines` shader. Deal history is in `.taste-skill/`.

## Deploy

`npm run deploy` builds and pushes `dist/` to the `gh-pages` branch (base path `/portfolio/`).
