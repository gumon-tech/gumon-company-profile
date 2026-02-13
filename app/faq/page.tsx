import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "FAQ",
  description:
    "คำถามที่พบบ่อยเกี่ยวกับ Gumon สำหรับนักพัฒนา พาร์ตเนอร์ และผู้ลงทุน",
  path: "/faq",
});

const faqGroups = [
  {
    title: "Developers",
    items: [
      {
        q: "ควรเริ่มจากเอกสารไหนก่อน",
        a: "เริ่มจาก Developer Documentation เพื่อดู quick start และ reference พื้นฐาน แล้วเสริมบริบทการใช้งานจาก Knowledge Base",
      },
      {
        q: "ต้องใช้ Gumon CLI ทุกโปรเจกต์หรือไม่",
        a: "ไม่บังคับ แต่แนะนำอย่างยิ่งสำหรับทีมที่ต้องการมาตรฐานการตั้งค่าและ onboarding ที่เร็วขึ้น",
      },
    ],
  },
  {
    title: "Partners",
    items: [
      {
        q: "Gumon รับงานส่งมอบปลายทางเองหรือไม่",
        a: "แนวทางหลักคือ Partner-only โดย Gumon โฟกัสแพลตฟอร์ม มาตรฐาน และ enablement",
      },
      {
        q: "พาร์ตเนอร์จะได้รับการสนับสนุนอะไร",
        a: "ได้ทั้งคู่มือมาตรฐาน แนวทาง support flow และเส้นทางยกระดับทีมผ่าน learning system",
      },
    ],
  },
  {
    title: "Investors",
    items: [
      {
        q: "สามารถขอข้อมูลเชิงลึกได้อย่างไร",
        a: "กด Request Investor Brief จากหน้า Investors หรือส่งคำขอผ่าน Contact พร้อมข้อมูลบริบทที่ต้องการประเมิน",
      },
      {
        q: "ทำไมหน้าเว็บสาธารณะจึงไม่มีตัวเลขทั้งหมด",
        a: "หน้าเว็บเป็น Public Summary ส่วนข้อมูลเชิงลึกจะเปิดตามระดับความเหมาะสมของกระบวนการประเมิน",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "FAQ", path: "/faq" }]} />
      <div className="ui-container">
        <p className="ui-kicker">Company / FAQ</p>
        <h1 className="ui-h1">คำถามที่พบบ่อยจากผู้ใช้งานแต่ละบทบาท</h1>
        <p className="mt-6 max-w-3xl ui-p">
          เราจัดกลุ่มคำถามตามเส้นทางผู้ใช้ เพื่อให้ค้นคำตอบได้เร็วขึ้นก่อนติดต่อทีมงาน.
        </p>

        <div className="mt-12 grid gap-6">
          {faqGroups.map((group) => (
            <div key={group.title} className="card p-7 shadow-soft">
              <h2 className="ui-h3">{group.title}</h2>
              <div className="mt-5 grid gap-4">
                {group.items.map((item) => (
                  <div key={item.q} className="route-card">
                    <h3 className="text-base font-semibold">{item.q}</h3>
                    <p className="mt-2 text-sm md:text-base text-mist leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">Need More Detail</p>
          <h2 className="mt-3 ui-h2">หากไม่พบคำตอบใน FAQ</h2>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn-primary">ไปหน้า Contact</Link>
            <a href="mailto:contact@gumon.io" className="btn-secondary">contact@gumon.io</a>
          </div>
          <p className="mt-4 text-xs text-mist">Last updated: February 13, 2026</p>
        </div>
      </div>
    </section>
  );
}
