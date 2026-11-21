# Pompiko website

Public marketing and support site for **Pompiko** games (GitHub Pages).

- Public brand: **Pompiko** — *Little Games. Big Fun.*
- Legal operator: **Lumora Digital Ventures** (Malaysia)
- Support: **pompiko.support@gmail.com**

This repository contains **only** the static website. It has no game source, secrets, or private release docs.

## Public URLs

| Page | URL |
|---|---|
| Home | `https://lpkpuikee.github.io/pompiko-website/` |
| TapRush landing | `https://lpkpuikee.github.io/pompiko-website/taprush/` |
| TapRush Support | `https://lpkpuikee.github.io/pompiko-website/taprush/support/` |
| TapRush Privacy | `https://lpkpuikee.github.io/pompiko-website/taprush/privacy/` |

## Structure

```
/
  index.html                 # Pompiko studio home
  assets/                    # Shared CSS, fonts, images, screenshots
  taprush/
    index.html               # TapRush landing
    support/                 # TapRush support
    privacy/                 # TapRush privacy policy (published via Pages)
```

Design language follows the Privacy Policy page (soft lavender / off-white, purple accents, white cards).

## Local preview

```bash
npx --yes serve . -p 4173
```

Then open:

- http://localhost:4173/
- http://localhost:4173/taprush/
- http://localhost:4173/taprush/support/
- http://localhost:4173/taprush/privacy/

## Deploy

1. Settings → Pages → Source: **GitHub Actions**
2. Push to `main` (or run **Deploy website to GitHub Pages** via `workflow_dispatch`)

The workflow refuses to publish draft or placeholder privacy content (checks for DRAFT markers, `noindex`, and required policy title / support email).

**Do not push or deploy without explicit approval.**
