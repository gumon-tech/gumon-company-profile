import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Resources",
  description:
    "ศูนย์รวมเอกสารและลิงก์สำคัญสำหรับทีมพัฒนา พาร์ตเนอร์ และผู้บริหารที่ต้องการใช้งาน Gumon อย่างเป็นระบบ",
  path: "/resources",
});

const resourceGroups = [
  {
    title: "Developer Resources",
    items: [
      ["Developer Documentation", "คู่มือ setup, API reference และ command usage", "https://docs.gumon.io/", true],
      ["Knowledge Base", "playbooks และแนวทางปฏิบัติการเชิงเทคนิค", "https://wiki.gumon.io/", true],
    ],
  },
  {
    title: "Business Resources",
    items: [
      ["Partner Collaboration", "แนวทางร่วมงานและขอบเขตการส่งมอบ", "/partners", false],
      ["Company Overview", "หลักการองค์กรและ operating model", "/company", false],
    ],
  },
  {
    title: "Action",
    items: [
      ["Platform Overview", "เริ่มเข้าใจสถาปัตยกรรมและองค์ประกอบหลัก", "/platform", false],
      ["Contact Team", "ส่งโจทย์เพื่อเริ่มวางเส้นทางใช้งาน", "/contact", false],
    ],
  },
] as const;

export default function ResourcesPage() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Resources", path: "/resources" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">Resources / Hub</p>
          <h1 className="ui-h1">ศูนย์รวมทรัพยากรที่ทีมใช้งานจริงบ่อยที่สุด</h1>
          <p className="mt-6 max-w-3xl ui-p">
            หน้านี้จัดกลุ่มข้อมูลตามวัตถุประสงค์การใช้งาน เพื่อลดเวลาค้นหาเอกสารและเส้นทางที่ควรเริ่มก่อน.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-3 gap-5">
          {resourceGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 80}>
              <div className="card p-6 shadow-soft h-full">
                <p className="ui-kicker">{group.title}</p>
                <div className="mt-4 grid gap-3">
                  {group.items.map(([title, body, href, external]) =>
                    external ? (
                      <a key={title} href={href} target="_blank" rel="noreferrer" className="route-card block">
                        <h2 className="ui-h3">{title}</h2>
                        <p className="mt-2 text-sm text-mist leading-relaxed">{body}</p>
                      </a>
                    ) : (
                      <Link key={title} href={href} className="route-card block">
                        <h2 className="ui-h3">{title}</h2>
                        <p className="mt-2 text-sm text-mist leading-relaxed">{body}</p>
                      </Link>
                    )
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
