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

## Content + KPI planning docs
- `docs/content-matrix.md`: audience/goal/message/CTA structure per page
- `docs/kpi-tracking-plan.md`: event taxonomy and KPI formulas
- `docs/analytics-dashboard-query-spec.md`: GA4/BigQuery/PostHog query templates
- `docs/utm-convention-spec.md`: campaign UTM naming and governance
- `docs/monthly-growth-report-template.md`: monthly KPI/funnel reporting template

## GitHub Pages
1) Repo Settings → Pages → Source: GitHub Actions
2) Ensure CNAME is set (file `public/CNAME` already)

## Logo variants
- `public/assets/logo/gumon-mark.png` (primary, white)
- `public/assets/logo/gumon-slate.png`, `gumon-olive.png`, `gumon-black.png`, `gumon-rose.png`, `gumon-white.png`

## Brand modes
- Institutional (default): /, /ecosystem, /contact
- Field / Execution: /deployments
- Research / Lab: /research
- Mode is applied globally via `components/ModeSync.tsx` so header/footer adopt the correct identity.
