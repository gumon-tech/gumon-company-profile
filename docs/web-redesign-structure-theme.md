# Gumon Web Redesign: New Structure + Dark Theme

## 1) Direction
- Rebuild website from zero with one clear identity: `Open Source Platform for real-world system delivery`
- Remove mixed intent pages and keep only pages that support decision and action
- Use dark visual language for technical credibility and strong brand distinction

## 2) New Information Architecture

### Primary Navigation
- `Platform`
- `Developers`
- `Partners`
- `Resources`
- `Company`
- `Contact` (primary CTA)

### Live Sitemap
- `/` Home
- `/platform`
- `/developers`
- `/partners`
- `/resources`
- `/company`
- `/contact`
- `/faq`
- `/privacy`
- `/terms`
- `/cookies`

### Removed from New Structure (Primary IA)
- `/ecosystem`
- `/learning`
- `/investors`
- `/solutions`
- `/team`
- all `/solutions/*`

### Legacy Migration Routes (Temporary)
- Routes ข้างต้นยังเปิดเป็น `Legacy Route Notice` เพื่อรองรับลิงก์เก่า
- ทุกหน้า legacy ตั้งค่า `robots: noindex, follow`
- หน้าเหล่านี้ไม่อยู่ใน `sitemap.xml` และไม่ใช้ใน navigation ใหม่

## 3) Page Blueprint

### Home (`/`)
- Hero: platform value + 2 CTA (`Platform`, `Developers`)
- Signal strip: Open Source, 3-layer architecture, CLI/Docs, partner-enabled delivery
- Architecture block: 3 layers
- Role paths: Developers / Partners / Executives
- Partner proof block
- Final CTA: Contact

### Platform (`/platform`)
- Architecture explanation (Application / API Service / Data Stream)
- Core services summary
- Platform principles
- CTA to Developers + Contact

### Developers (`/developers`)
- Build phases: Bootstrap / Integrate / Operate
- Engineering outcomes checklist
- Docs + Knowledge Base
- CTA to technical consultation

### Partners (`/partners`)
- Collaboration model and role boundary
- Readiness checklist
- Partner resources
- CTA to partnership contact

### Resources (`/resources`)
- Grouped hub: Developer / Business / Action resources
- Direct links to docs/wiki and core internal pages

### Company (`/company`)
- Company principles
- Operating model
- CTA to Platform + Contact

### Contact (`/contact`)
- Routing cards by intent
- Knowledge channels
- Direct contact channels

## 4) Content Rules
- One page = one core intent
- Every hero must state audience + outcome
- Thai-first copy with selective English domain terms
- No copy that implies Gumon is direct end-client delivery contractor

## 5) Theme System (Dark)

### Theme Name
`Midnight Foundry`

### Visual Language
- Background: deep navy-black
- Accent 1: electric cyan
- Accent 2: signal amber
- Style: high-contrast, technical, structured

### Tokens
- `--bg0: 8 11 18`
- `--bg1: 12 17 28`
- `--surf: 19 28 42`
- `--ink: 225 236 248`
- `--mist: 133 155 183`
- `--line: 58 78 107`
- `--accent: 60 225 214`
- `--accent2: 255 174 64`
