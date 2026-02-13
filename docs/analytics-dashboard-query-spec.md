# Gumon Analytics Dashboard Query Spec

Last updated: February 13, 2026

## Scope
- Source events are generated from `lib/analytics.ts` and emitted through:
  - GA4 (`window.gtag`)
  - GTM/DataLayer (`window.dataLayer`)
  - Plausible (`window.plausible`)
  - PostHog (`window.posthog`)
- Required event params:
  - `event_name`
  - `event_category`
  - `event_label`
  - `event_location`
  - `event_href`

## Dashboard 1: Navigation Quality
- Objective: Evaluate whether new IA improves user routing.
- Primary events:
  - `site_nav_click`
  - `header_cta_click`
  - `footer_link_click`

### GA4 Explore Setup
- Breakdown dimensions:
  - `event_name`
  - `event_label`
  - `event_location`
  - `page_location`
- Metrics:
  - `Event count`
  - `Active users`
- Filters:
  - `event_name` in (`site_nav_click`, `header_cta_click`, `footer_link_click`)

### KPI Formula
- `Navigation-to-Contact Rate`:
  - `header_cta_click / site_nav_click`

## Dashboard 2: Solutions Funnel
- Objective: Track discovery -> detail -> contact intent across solution pages.
- Primary events:
  - `solutions_card_click`
  - `solutions_related_click`
  - `solutions_detail_cta_click`
  - `solutions_cta_click`

### GA4 Explore Setup
- Breakdown dimensions:
  - `event_name`
  - `event_label`
  - `event_location`
- Metrics:
  - `Event count`
  - `Sessions`
- Filters:
  - `event_name` in (`solutions_card_click`, `solutions_related_click`, `solutions_detail_cta_click`, `solutions_cta_click`)

### KPI Formulas
- `Solutions Detail Entry Rate`:
  - `solutions_card_click / sessions on /solutions`
- `Solutions Contact Intent Rate`:
  - (`solutions_detail_cta_click` where label contains `-contact` + `solutions_cta_click` where label = `solutions-hub-contact`) / `solutions_card_click`
- `Cross-Solution Exploration Rate`:
  - `solutions_related_click / solutions_card_click`

## Dashboard 3: Docs Consumption by Intent
- Objective: Measure technical enablement intent from global and role pages.
- Primary events:
  - `developers_resource_click`
  - `partners_knowledge_base_click`
  - `header_quicklink_click`

### GA4 Explore Setup
- Breakdown dimensions:
  - `event_label`
  - `event_location`
- Metrics:
  - `Event count`
  - `Users`
- Filters:
  - `event_name` in (`developers_resource_click`, `partners_knowledge_base_click`, `header_quicklink_click`)

### KPI Formula
- `Docs Entry Rate`:
  - (`developers_resource_click` + `partners_knowledge_base_click` + `header_quicklink_click`) / relevant page sessions

## BigQuery Query Templates (GA4 Export)

## 1) Daily Event Volume by Label
```sql
SELECT
  event_date,
  event_name,
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'event_label') AS event_label,
  COUNT(*) AS event_count
FROM `YOUR_PROJECT.YOUR_DATASET.events_*`
WHERE event_name IN (
  'site_nav_click',
  'header_cta_click',
  'footer_link_click',
  'solutions_card_click',
  'solutions_related_click',
  'solutions_detail_cta_click',
  'solutions_cta_click'
)
GROUP BY event_date, event_name, event_label
ORDER BY event_date DESC, event_count DESC;
```

## 2) Solutions Contact Intent by Industry
```sql
WITH base AS (
  SELECT
    event_name,
    (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'event_label') AS event_label
  FROM `YOUR_PROJECT.YOUR_DATASET.events_*`
  WHERE event_name IN ('solutions_card_click', 'solutions_detail_cta_click', 'solutions_cta_click')
)
SELECT
  REGEXP_EXTRACT(event_label, r'solutions-([a-z]+)') AS solution_slug,
  SUM(CASE WHEN event_name = 'solutions_card_click' THEN 1 ELSE 0 END) AS card_clicks,
  SUM(CASE WHEN event_name = 'solutions_detail_cta_click' AND event_label LIKE '%-contact' THEN 1 ELSE 0 END) AS detail_contact_clicks,
  SAFE_DIVIDE(
    SUM(CASE WHEN event_name = 'solutions_detail_cta_click' AND event_label LIKE '%-contact' THEN 1 ELSE 0 END),
    SUM(CASE WHEN event_name = 'solutions_card_click' THEN 1 ELSE 0 END)
  ) AS detail_contact_rate
FROM base
GROUP BY solution_slug
ORDER BY card_clicks DESC;
```

## PostHog Insights Presets
- Insight: `Solutions Contact Intent`
  - Event: `solutions_detail_cta_click`
  - Filter property: `label` contains `-contact`
  - Breakdown: `label`
- Insight: `Navigation Mix`
  - Events: `site_nav_click`, `header_cta_click`, `footer_link_click`
  - Breakdown: `location`
- Insight: `Docs Entry Sources`
  - Events: `developers_resource_click`, `partners_knowledge_base_click`, `header_quicklink_click`
  - Breakdown: `label`

## GTM / DataLayer Validation Checklist
- Confirm every tracked click pushes event object with:
  - `event: "gumon_interaction"`
  - `event_name`, `event_category`, `event_label`, `event_location`, `event_href`
- Validate on:
  - Desktop header nav + quick links
  - Mobile nav
  - Footer links
  - Solutions hub cards
  - Solutions detail related cards + next-step CTAs
