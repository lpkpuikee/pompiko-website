# Pompiko website

Public marketing and support site for **Pompiko** games (GitHub Pages).

- Public brand: **Pompiko** — *Little Games. Big Fun.*
- Legal operator: **Lumora Digital Ventures** (Malaysia)
- Support: **pompiko.support@gmail.com**

This repository contains **only** the static website. It has no game source, secrets, or private release docs.

## Public URLs

| Page | URL |
|---|---|
| Home (Marketing) | `https://lpkpuikee.github.io/pompiko-website/` |
| TapRush Support (ASC) | `https://lpkpuikee.github.io/pompiko-website/taprush/support/` |
| Privacy | *Not published yet* — draft stays in repo; Pages serves a “coming soon” stub |

## Structure (multi-game ready)

```
/
  index.html                 # Pompiko studio home
  assets/                    # Shared CSS, fonts, images
  taprush/
    support/                 # TapRush support (published)
    privacy/                 # Draft privacy (kept; excluded from deploy)
    privacy-coming-soon.html # Stub copied to privacy/ on deploy
  # Future games: <game>/support/, <game>/privacy/
```

## Local preview

```bash
npx --yes serve . -p 4173
```

## Deploy

1. Settings → Pages → Source: **GitHub Actions**
2. Push to `main` (or run **Deploy website to GitHub Pages** via `workflow_dispatch`)

The workflow excludes draft privacy content and publishes a clear “not a privacy policy” placeholder instead.
