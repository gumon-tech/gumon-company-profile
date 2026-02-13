import Link from "next/link";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Resources",
  description:
    "ศูนย์รวมทรัพยากรสำหรับการตัดสินใจและการเริ่มใช้งาน Gumon ตามบทบาทที่แตกต่างกัน",
  path: "/resources",
});

const resourceGroups = [
  {
    title: "Technical",
    items: [
      ["Developer Documentation", "คู่มือเทคนิคและการเริ่มต้นใช้งาน", "https://docs.gumon.io/", true],
      ["Knowledge Base", "แนวทางปฏิบัติการและบริบทการใช้งานจริง", "https://wiki.gumon.io/", true],
    ],
  },
  {
    title: "Business",
    items: [
      ["Partners", "แนวทางทำงานร่วมกันสำหรับทีมส่งมอบ", "/partners", false],
      ["Investors", "ภาพรวมกรอบการเติบโตเชิงกลยุทธ์", "/investors", false],
    ],
  },
  {
    title: "Company",
    items: [
      ["Company", "วิสัยทัศน์ บทบาท และแนวคิดการดำเนินงาน", "/company", false],
      ["Contact", "ช่องทางติดต่อและการส่งต่อคำถามตามทีม", "/contact", false],
    ],
  },
] as const;

export default function Page() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Resources", path: "/resources" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">Company / Resources</p>
          <h1 className="ui-h1">Resource Hub สำหรับทุกบทบาทในระบบนิเวศ Gumon</h1>
          <p className="mt-6 max-w-3xl ui-p">
            รวมลิงก์และข้อมูลสำคัญที่ใช้งานจริงบ่อยที่สุด เพื่อให้ทีมเทคนิค ทีมส่งมอบ และผู้บริหาร เข้าถึงข้อมูลที่ต้องใช้ได้ทันที.
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
                      <a
                        key={title}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="route-card block"
                      >
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

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">Need Help</p>
          <h2 className="mt-3 ui-h2">หากไม่แน่ใจว่าจะเริ่มจากหน้าไหน</h2>
          <p className="mt-3 text-sm md:text-base text-mist leading-relaxed max-w-3xl">
            เริ่มจากหน้า Audience ที่ตรงกับบทบาทของคุณ (Developers, Partners หรือ Investors)
            แล้วระบบนำทางจะพาไปยังข้อมูลที่เหมาะที่สุด.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/developers" className="btn-secondary">Developers</Link>
            <Link href="/partners" className="btn-secondary">Partners</Link>
            <Link href="/investors" className="btn-secondary">Investors</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
