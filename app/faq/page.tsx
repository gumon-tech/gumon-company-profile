import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "FAQ",
  description:
    "คำถามที่พบบ่อยเกี่ยวกับการใช้งาน Gumon สำหรับทีมพัฒนา พาร์ตเนอร์ และผู้บริหาร",
  path: "/faq",
});

const faqGroups = [
  {
    title: "Developers",
    items: [
      {
        q: "ควรเริ่มจากเอกสารไหนก่อน",
        a: "เริ่มจาก Developer Documentation แล้วต่อด้วย Knowledge Base เพื่อดูแนวทางปฏิบัติที่ใช้ในงานจริง",
      },
      {
        q: "ทีมที่มีระบบเดิมอยู่แล้วเริ่มยังไง",
        a: "เริ่มจากประเมิน baseline ปัจจุบัน แล้ววาง migration path แบบค่อยเป็นค่อยไปผ่านหน้า Developers",
      },
    ],
  },
  {
    title: "Partners",
    items: [
      {
        q: "Gumon รับงานส่งมอบลูกค้าปลายทางโดยตรงหรือไม่",
        a: "แนวทางหลักคือ Partner-enabled delivery โดย Gumon โฟกัส platform, standards และ tooling",
      },
      {
        q: "พาร์ตเนอร์จะได้การสนับสนุนอะไร",
        a: "ได้ทั้ง technical references, knowledge base และแนวทาง operational playbook สำหรับงานส่งมอบ",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        q: "ทำไมเว็บใหม่ตัดหน้าบางส่วนออก",
        a: "เพื่อให้เส้นทางตัดสินใจสั้นลงและชัดขึ้น โดยยึดเฉพาะหน้าที่จำเป็นต่อการเริ่มใช้งานจริง",
      },
      {
        q: "หากเข้าลิงก์เก่าจะเกิดอะไรขึ้น",
        a: "ระบบจะพาไปหน้า legacy notice และแนะนำเส้นทางใหม่ที่เกี่ยวข้อง",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "FAQ", path: "/faq" }]} />
      <div className="ui-container">
        <p className="ui-kicker">FAQ</p>
        <h1 className="ui-h1">คำถามที่พบบ่อยเกี่ยวกับเว็บไซต์และการเริ่มใช้งาน Gumon</h1>
        <p className="mt-6 max-w-3xl ui-p">รวบรวมคำถามจากทีมพัฒนา พาร์ตเนอร์ และผู้ใช้งานที่กำลังเริ่มต้นบนโครงสร้างใหม่</p>

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
          <h2 className="mt-3 ui-h2">หากไม่พบคำตอบที่ต้องการ</h2>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn-primary">ไปหน้า Contact</Link>
            <a href="mailto:contact@gumon.io" className="btn-secondary">contact@gumon.io</a>
          </div>
        </div>
      </div>
    </section>
  );
}
