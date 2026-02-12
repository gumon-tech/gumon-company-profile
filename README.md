# Gumon Technology — Company Profile Site (Static)

- Next.js (App Router) + Static Export (`output: "export"`)
- GitHub Pages deployment via Actions
- Custom domain: `web.gumon.dev`

## Local dev
```bash
npm install
npm run dev
```

## Build static export
```bash
npm run build
# output: /out
```

## GitHub Pages
1) Repo Settings → Pages → Source: GitHub Actions
2) Ensure CNAME is set (file `public/CNAME` already)

## Logo variants
- `public/assets/logo/gumon-mark.png` (primary, white)
- `public/assets/logo/gumon-slate.png`, `gumon-olive.png`, `gumon-black.png`, `gumon-rose.png`, `gumon-white.png`
