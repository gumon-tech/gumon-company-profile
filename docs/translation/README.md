# Translation Readiness

This folder defines the working standards before full multilingual translation.

## Scope

- Source freeze snapshot for locale content (`source-freeze.json`)
- Term glossary and naming rules (`glossary.md`)
- Language rollout strategy (`language-rollout.md`)
- Translation style guide (`style-guide.md`)
- QA checklist for localization and UI (`qa-checklist.md`)

## Commands

- Freeze source content: `npm run i18n:freeze`
- Run readiness checks: `npm run check:i18n`
- Generate machine translations for all supported locales: `npm run i18n:translate-all`

## Current policy

- Fully localized locales: `th`, `en`
- Additional locales render fallback notice while translation is in progress.
- Auto-translation map is generated in `content/locales/auto-translation-map.json` and applied from English source copy.
