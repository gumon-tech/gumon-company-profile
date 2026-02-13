# Gumon UTM Convention Spec

Last updated: February 13, 2026

## Objective
- Standardize campaign tagging for traffic entering `/solutions` and `/solutions/*`.
- Ensure analytics attribution is consistent across GA4, GTM/DataLayer, and PostHog.

## Required UTM Parameters
- `utm_source`: traffic source platform
- `utm_medium`: channel type
- `utm_campaign`: campaign name
- `utm_content`: creative or placement identifier

## Optional Parameters
- `utm_term`: keyword or audience segment
- `utm_id`: paid campaign ID from ad platform

## Naming Rules
- Use lowercase only.
- Use hyphen `-` to separate words.
- Avoid spaces, Thai characters, and special symbols in UTM values.
- Keep values stable for the full campaign lifecycle.

## Allowed Values (Recommended)

### utm_source
- `linkedin`
- `facebook`
- `line`
- `google`
- `youtube`
- `newsletter`
- `partner-site`

### utm_medium
- `paid-social`
- `organic-social`
- `cpc`
- `email`
- `referral`
- `display`

### utm_campaign (pattern)
- `{year}{quarter}-{objective}-{audience}-{theme}`
- Example: `2026q1-demandgen-partner-government-modernization`

### utm_content (pattern)
- `{asset-type}-{variant}-{placement}`
- Example: `carousel-v2-feed-a`

### utm_term (pattern, optional)
- `{keyword-or-segment}`
- Example: `gov-it-director`

## Landing Page Policy
- Solutions hub campaigns must land on:
  - `/solutions` (broad campaign)
  - `/solutions/government`
  - `/solutions/healthcare`
  - `/solutions/education`
  - `/solutions/enterprise`
- Deep-link to subpages when campaign message is industry-specific.

## URL Examples
- Hub campaign:
  - `https://web.gumon.dev/solutions?utm_source=linkedin&utm_medium=paid-social&utm_campaign=2026q1-demandgen-partner-solutions-hub&utm_content=singleimage-v1-feed-a`
- Government campaign:
  - `https://web.gumon.dev/solutions/government?utm_source=facebook&utm_medium=paid-social&utm_campaign=2026q1-demandgen-gov-government-modernization&utm_content=video-v3-reels-b&utm_term=public-digital-service`
- Email campaign:
  - `https://web.gumon.dev/solutions/enterprise?utm_source=newsletter&utm_medium=email&utm_campaign=2026q1-nurture-investor-enterprise-readiness&utm_content=cta-primary-top`

## QA Checklist Before Launch
- URL contains all required UTMs.
- Landing path matches message intent.
- UTM values follow naming pattern.
- Final URL resolves correctly on mobile and desktop.
- One test click verified in GA4 Realtime and GTM Preview.

## Governance
- Marketing owns `utm_source`, `utm_medium`, `utm_campaign`.
- Content/performance team owns `utm_content`, `utm_term`.
- Analytics owner validates naming and deduplicates collisions.

## Common Mistakes to Avoid
- Mixing uppercase and lowercase in the same campaign.
- Reusing one `utm_campaign` value for unrelated objectives.
- Sending industry-specific ads to `/solutions` instead of subpages.
- Omitting `utm_content`, which blocks creative-level performance comparison.
