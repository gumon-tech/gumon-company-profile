# Release Note: IA + Content Rebuild (Dark-Tech)

Date: February 13, 2026  
Owner: Web Team

## 1) What Changed
เว็บไซต์ถูกรีบิลด์ใหม่ทั้งโครงสร้างและคอนเทนต์ โดยตัดหน้า legacy ออกและคงเฉพาะ flow ที่ใช้งานจริงในเชิง platform adoption

## 2) New Live Routes
- `/`
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

## 3) Legacy Routes (Migration Mode)
- `/ecosystem`
- `/learning`
- `/investors`
- `/solutions`
- `/team`
- all `/solutions/*`

หมายเหตุ:
- เส้นทางข้างต้นยัง online เป็นหน้า `Legacy Route Notice`
- ตั้งค่า `noindex, follow` ทุกหน้าเพื่อคง UX จากลิงก์เก่า โดยไม่ให้ index แข่งกับโครงใหม่
- ไม่รวมใน `sitemap.xml`

## 4) Navigation (Header)
- Platform
- Developers
- Partners
- Resources
- Company
- Contact (CTA)

## 5) Tracking Event Set (Current)
### Home
- `home_primary_cta_click`
- `home_secondary_cta_click`
- `home_audience_path_click`
- `home_partner_outbound_click`
- `home_nextstep_click`

### Global
- `site_nav_click`
- `header_cta_click`
- `header_quicklink_click`
- `footer_link_click`

### Developers
- `developers_resource_click`
- `developers_platform_reference_click`
- `developers_contact_click`

### Partners
- `partners_knowledge_base_click`
- `partners_docs_click`
- `partners_contact_click`
- `partners_resources_click`

### Contact
- `contact_route_click`
- `contact_docs_click`
- `contact_channel_click`

## 6) Impact to Analytics
- Dashboard/queries ที่ผูกกับ routes หรือ events เก่าต้องยกเลิก
- ต้องใช้ชุด metric ใหม่ตามเอกสาร:
  - `docs/kpi-tracking-plan.md`
  - `docs/analytics-dashboard-query-spec.md`

## 7) UTM Landing Policy (New)
อนุญาตเฉพาะ landing pages ชุดใหม่:
- `/platform`
- `/developers`
- `/partners`
- `/resources`
- `/company`
- `/contact`

อ้างอิง: `docs/utm-convention-spec.md`

## 8) QA Checklist Before Release
- [ ] ทุกลิงก์ใน header/footer ไป route ที่ยังมีอยู่
- [ ] ไม่มี internal link ไป routes ที่ถูกลบ
- [ ] GA4 Realtime เห็น events จาก Home/Developers/Partners/Contact
- [ ] Sitemap มีเฉพาะ route ใหม่
- [ ] หน้า legacy route มี meta robots เป็น `noindex,follow`
- [ ] Build static export ผ่าน

## 9) Rollback Note
หากต้อง rollback ให้ย้อน commit ต่อไปนี้ตามลำดับย้อนกลับ:
1. `e7c862a` (`refactor: standardize legacy route notices and set noindex metadata`)
2. `bff1b6d` (`ux: add legacy route migration pages and align FAQ with new IA`)
3. `440f33a` (`docs: add IA migration release note and handover checklist`)
4. `2d0281e` (`docs-tracking-update: align docs and KPI specs with new IA`)
5. `5b47a05` (`new-ia-content: rebuild core pages and remove legacy routes`)
