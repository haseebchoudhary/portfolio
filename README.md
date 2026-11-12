# Haseeb Choudhary: portfolio

Vite + React. No other runtime dependencies. The hero diagram is plain SVG with a small 3D projection written in `src/components/ArchDiagram.jsx`.

## Run

```bash
npm install
npm run dev      # local development
npm run build    # production build in dist/
npm run preview  # serve the build locally
```

## Before you publish

1. Open `src/data/cv.js` and replace the placeholders: `email`, `whatsapp`, `whatsappDisplay`.
2. Put your CV at `public/cv.pdf`. Both "Download CV" buttons point to it.
3. In `index.html`, replace `https://your-domain.com` in the canonical and Open Graph tags.
4. Optional: add a 1200x630 `public/og.png` and an `og:image` meta tag for link previews.

## Editing content

Every piece of text lives in `src/data/cv.js`: hero copy, about, experience, education, skills and projects. Components only read from that file.

## Design tokens

Colours, type and spacing are CSS variables at the top of `src/styles.css`. Fonts are Archivo (display, variable width) and Newsreader (text), loaded from Google Fonts in `index.html`.

## Deploy

Vercel and Netlify both detect Vite. Build command `npm run build`, output directory `dist`.

## Notes

- GitHub activity is fetched in the browser from the public GitHub API (`haseebchoudhary`). Unauthenticated requests are rate limited, so the section falls back to a link if the request fails.
- Motion respects `prefers-reduced-motion`: the diagram stops rotating and packets are hidden.
