# Gumon Analytics Dashboard Query Spec

Last updated: February 13, 2026

## Scope
- Events originate from `lib/analytics.ts`
- Emitted to GA4, GTM/DataLayer, Plausible, PostHog
- Required params: `event_name`, `event_category`, `event_label`, `event_location`, `event_href`

## Dashboard 1: Navigation Quality
- Events:
  - `site_nav_click`
  - `header_cta_click`
  - `footer_link_click`

KPI:
- `Navigation-to-Contact Rate = header_cta_click / site_nav_click`

## Dashboard 2: Home Journey
- Events:
  - `home_primary_cta_click`
  - `home_secondary_cta_click`
  - `home_audience_path_click`
  - `home_partner_section_click`
  - `home_nextstep_click`

KPIs:
- `Role Path CTR = home_audience_path_click / home sessions`
- `Home Contact Progression = home_nextstep_click(label=nextstep-contact) / home sessions`

## Dashboard 3: Platform + Technical Enablement
- Events:
  - `platform_nextstep_click`
  - `developers_resource_click`
  - `developers_platform_reference_click`
  - `developers_contact_click`
  - `header_quicklink_click`

KPI:
- `Docs Entry Rate = (developers_resource_click + header_quicklink_click) / developers sessions`

## Dashboard 4: Partner Enablement
- Events:
  - `partners_knowledge_base_click`
  - `partners_docs_click`
  - `partners_resources_click`
  - `partners_contact_click`

KPI:
- `Partner Lead Intent = partners_contact_click / partners sessions`

## Dashboard 5: Contact Routing + Lead Submission
- Events:
  - `contact_route_click`
  - `contact_docs_click`
  - `contact_channel_click`
  - `contact_form_submit`

KPIs:
- `Direct Contact Intent = contact_channel_click / contact sessions`
- `Form Submission Rate = contact_form_submit / contact sessions`

## BigQuery Query Template
```sql
SELECT
  event_date,
  event_name,
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'event_label') AS event_label,
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'event_location') AS event_location,
  COUNT(*) AS event_count
FROM `YOUR_PROJECT.YOUR_DATASET.events_*`
WHERE event_name IN (
  'site_nav_click',
  'header_cta_click',
  'footer_link_click',
  'home_primary_cta_click',
  'home_secondary_cta_click',
  'home_audience_path_click',
  'home_partner_section_click',
  'home_partner_outbound_click',
  'home_nextstep_click',
  'platform_nextstep_click',
  'developers_resource_click',
  'developers_platform_reference_click',
  'developers_contact_click',
  'header_quicklink_click',
  'partners_knowledge_base_click',
  'partners_docs_click',
  'partners_resources_click',
  'partners_contact_click',
  'contact_route_click',
  'contact_docs_click',
  'contact_channel_click',
  'contact_form_submit'
)
GROUP BY event_date, event_name, event_label, event_location
ORDER BY event_date DESC, event_count DESC;
```
