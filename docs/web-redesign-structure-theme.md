# Gumon Web Redesign: Structure + Theme

## 1) Redesign Goal
- Make decision paths clearer for 3 core audiences: `Developers`, `Partners`, `Investors`.
- Reduce mixed intent on each page by assigning one primary objective per page.
- Shift visual tone from "dark-tech" to "trusted platform company" for enterprise/public-sector credibility.

## 2) New Information Architecture

### Primary Navigation (Top)
- `Platform`
- `Solutions`
- `Audience`
- `Company`
- `Resources`
- `Contact` (highlighted CTA)

### Secondary Navigation (inside sections)
- Platform: `Architecture`, `Core Services`, `Delivery Model`, `Security & Governance`
- Solutions: `Government`, `Healthcare`, `Education`, `Enterprise Modernization`
- Audience: `Developers`, `Partners`, `Investors`
- Company: `About`, `Team`, `Partner Network`, `FAQ`

### Sitemap (recommended)
- `/` Home
- `/platform`
- `/platform/architecture`
- `/platform/core-services`
- `/platform/delivery-model`
- `/solutions`
- `/solutions/government`
- `/solutions/healthcare`
- `/solutions/education`
- `/solutions/enterprise`
- `/developers`
- `/partners`
- `/investors`
- `/company`
- `/team`
- `/resources`
- `/contact`
- `/faq`
- `/privacy`
- `/terms`
- `/cookies`

## 3) Page Structure Blueprint

### Home (`/`)
- Hero: value proposition + 2 CTA (`Explore Platform`, `Talk to Team`)
- Trust strip: partner logos + key institutional references
- 3 role entry cards: developers/partners/investors
- Solution preview blocks (industry-based)
- Final CTA band: contact

### Platform (`/platform`)
- Platform overview narrative
- Architecture snapshot (3-layer)
- Core services and integration model
- Delivery lifecycle (build -> operate -> improve)
- CTA: `Go to Developers`

### Solutions (`/solutions`)
- Industry cards with business outcomes
- Each industry page includes:
  - context/problem
  - implementation model
  - measurable outcomes
  - reference visuals
  - CTA to contact

### Audience Pages
- `Developers`: quick-start path, docs, standards, tooling
- `Partners`: model, readiness, enablement, engagement process
- `Investors`: growth framework, governance, request brief

### Company (`/company`)
- Positioning + principles
- Operating model (platform company + partner network)
- Team preview
- Governance and trust points

## 4) Content Rules (to keep consistency)
- One page = one primary CTA.
- Hero must include: `who this page is for` + `business/technical outcome`.
- Use proof on every page: partner, process, metric, or field reference.
- Keep Thai as primary language, English only for domain terms.

## 5) Recommended Theme

### Theme Name
`Institutional Horizon`

### Why this fits Gumon
- Supports enterprise/public-sector trust better than a full dark UI.
- Keeps technical identity via slate + olive accents (compatible with current logo system).
- Improves readability for long-form Thai content.

### Visual Direction
- Base: light neutral canvas
- Accent: olive/teal for product confidence
- Support accent: warm amber for highlights and CTA emphasis
- Feel: clean, structured, evidence-driven (not startup flashy)

### Theme Tokens (proposed)
- `--bg0: 246 248 246` (page background)
- `--bg1: 255 255 253` (surface)
- `--surf: 239 243 241` (sub-surface)
- `--ink: 22 33 33` (text)
- `--mist: 88 106 105` (secondary text)
- `--line: 193 206 204` (borders)
- `--accent: 88 140 124` (primary accent)
- `--accent2: 204 145 77` (secondary accent)

### Typography
- Heading: `Space Grotesk` (already used)
- Body Thai/EN: `Sarabun` (already used)
- Scale:
  - H1: 44-60
  - H2: 30-40
  - H3: 20-24
  - Body: 16-18

### Motion
- Keep reveal animation but reduce blur and distance.
- Prefer sectional transitions over decorative motion.

## 6) Component Priority for Implementation
1. Global shell (`layout`, navbar grouping, footer quick links)
2. Home page modules (hero, trust strip, role entry)
3. Platform + Solutions templates
4. Audience pages with unified section order
5. Resources and Contact simplification

## 7) Rollout Plan
- Phase 1: IA + navigation + homepage structure
- Phase 2: Platform/Solutions and audience pages
- Phase 3: content proof blocks, FAQ, legal, SEO metadata refinement

## 8) Success Criteria
- Users reach role pages faster from Home.
- Contact intent rate increases from high-intent pages.
- Time-to-understand (first 30-60 sec) improves by clearer section hierarchy.
