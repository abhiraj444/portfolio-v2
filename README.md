# Abhinav Raj — Portfolio

Live: https://abhiraj444.github.io/portfolio-v2/

A single static page. No server, no build step, no tracking.

## What's here

Eight shipped products, each linking to a live deployment and its source repo,
led by a dated shipping log of the 14-month, 13-repo iteration behind the
Clinical Journal & AI Studio (content-explainer.vercel.app).

## Run locally

Open `index.html` in a browser. That's it.

## Deploy (GitHub Pages)

1. Push this repo to GitHub (`main` branch).
2. Repo **Settings → Pages → Source**: select `Deploy from a branch`, branch `main`, folder `/ (root)`.
3. Save. The site goes live at `https://abhiraj444.github.io/portfolio-v2/`
   within a minute or two.

## Files

- `index.html` — all content and structure
- `styles.css` — design system (dark ledger theme, mobile-first)
- `app.js` — click-to-load live previews
- `assets/og.png` — Open Graph image (typography only, no product screenshots)
- `assets/favicon.svg`

## Notes

- Live previews load only on click; sites that block framing fall back to the
  "Open the live app" button.
- Every claim on the page traces to a repo README, in-repo documentation, or a
  verified live deployment (see `lineages.md` in the project workspace).
