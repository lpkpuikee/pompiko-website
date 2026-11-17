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
| TapRush Privacy | `https://lpkpuikee.github.io/pompiko-website/taprush/privacy/` |

## Structure (multi-game ready)

```
/
  index.html                 # Pompiko studio home
  assets/                    # Shared CSS, fonts, images
  taprush/
    support/                 # TapRush support
    privacy/                 # TapRush privacy policy (published via Pages)
  # Future games: <game>/support/, <game>/privacy/
```

## Local preview

```bash
npx --yes serve . -p 4173
```

## Deploy

1. Settings → Pages → Source: **GitHub Actions**
2. Push to `main` (or run **Deploy website to GitHub Pages** via `workflow_dispatch`)

The workflow refuses to publish draft or placeholder privacy content (checks for DRAFT markers, `noindex`, and required policy title / support email).
