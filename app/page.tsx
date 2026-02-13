import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Image from "next/image";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Home",
  description:
    "Gumon Technology คือ Open Platform สำหรับองค์กรที่ต้องการเร่งความเร็วการส่งมอบ โดยคงมาตรฐานร่วมและขยายระบบได้อย่างมั่นคง",
  path: "/",
});

const audiencePaths = [
  {
    title: "Developers",
    body: "เริ่มโครงการได้เร็วด้วยโครงสร้างมาตรฐาน, CLI, และแนวปฏิบัติที่พร้อมใช้จริง",
    href: "/developers",
    cta: "ดูเส้นทางนักพัฒนา",
  },
  {
    title: "Partners",
    body: "ต่อยอดงานส่งมอบเชิงพาณิชย์บนแพลตฟอร์มเดียวกัน โดยมีบทบาทและขอบเขตที่ชัดเจน",
    href: "/partners",
    cta: "ดูเส้นทางพาร์ตเนอร์",
  },
  {
    title: "Investors",
    body: "ดูกรอบการเติบโตเชิงโครงสร้างและหลักการกำกับการขยายระยะกลางถึงระยะยาว",
    href: "/investors",
    cta: "ดูข้อมูลนักลงทุน",
  },
];

const solutionPillars = [
  {
    title: "Platform Foundation",
    body: "โครงสร้าง 3 ชั้นที่ช่วยให้ทีมพัฒนาออกแบบ API, Data, และ Application บนมาตรฐานเดียวกัน",
    href: "/platform",
  },
  {
    title: "Ecosystem Design",
    body: "ระบบนิเวศที่แยกบทบาทชัดเจน ระหว่างแพลตฟอร์ม การเรียนรู้ และการส่งมอบเชิงธุรกิจ",
    href: "/ecosystem",
  },
  {
    title: "Capability Building",
    body: "เส้นทางเรียนรู้และการรับรองสำหรับทีมที่ต้องการยกระดับคุณภาพการส่งมอบอย่างเป็นระบบ",
    href: "/learning",
  },
];

const partners = [
  { name: "Asia Connect Corporation", country: "Thailand", website: "https://www.asiaconnectth.com", short: "AC", logo: "/assets/partners/asia-connect.png" },
  { name: "AC Academys", country: "Thailand", website: "https://acacademys.com", short: "AC", logo: "/assets/partners/ac-academys.png" },
  { name: "Olufy-X", country: "Thailand", website: "https://olufy.com", short: "OX", logo: "/assets/partners/olufy-x.png" },
  { name: "Taitam-D", country: "United Kingdom", website: "https://taitam-d.com", short: "TD", logo: "/assets/partners/taitam-d.png" },
];

export default function Page() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">Open Platform for Real-World Delivery</p>
          <h1 className="ui-h1">โครงสร้างเว็บไซต์ใหม่ของ Gumon เริ่มจากผู้ใช้และผลลัพธ์ที่ต้องการ</h1>
          <p className="mt-6 max-w-3xl ui-p">
            เราปรับเว็บไซต์ให้สื่อสารชัดขึ้นใน 3 มิติ: Solution ที่ Gumon พัฒนา,
            Audience ที่ต้องการข้อมูลเฉพาะบทบาท, และ Company ที่ใช้สร้างความน่าเชื่อถือร่วมกัน.
          </p>
        </Reveal>

        <Reveal delay={90}>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/platform" className="btn-primary">เริ่มจากภาพรวมแพลตฟอร์ม</Link>
            <Link href="/contact" className="btn-secondary">คุยกับทีมงาน</Link>
          </div>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-12 gap-6">
          <Reveal className="lg:col-span-8" delay={120}>
            <div className="card p-7 shadow-soft h-full">
              <p className="ui-kicker">Website Structure</p>
              <h2 className="mt-3 ui-h2">Information Architecture ที่จัดใหม่ให้ค้นหาเร็วขึ้น</h2>
              <div className="mt-5 grid sm:grid-cols-3 gap-4 text-sm">
                <div className="card p-4">
                  <div className="text-[11px] tracking-[0.18em] uppercase text-mist">Solutions</div>
                  <div className="mt-2">Platform, Ecosystem, Learning</div>
                </div>
                <div className="card p-4">
                  <div className="text-[11px] tracking-[0.18em] uppercase text-mist">Audience</div>
                  <div className="mt-2">Developers, Partners, Investors</div>
                </div>
                <div className="card p-4">
                  <div className="text-[11px] tracking-[0.18em] uppercase text-mist">Company</div>
                  <div className="mt-2">Company, Team, Resources, Contact</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-4" delay={180}>
            <div className="card p-7 shadow-soft h-full">
              <p className="ui-kicker">เริ่มจากเส้นทางที่ใช่</p>
              <h2 className="mt-3 ui-h3">เลือกตามบทบาทของคุณ</h2>
              <div className="mt-4 grid gap-2 text-sm">
                <Link href="/developers" className="text-mist hover:text-ink transition">Developers →</Link>
                <Link href="/partners" className="text-mist hover:text-ink transition">Partners →</Link>
                <Link href="/investors" className="text-mist hover:text-ink transition">Investors →</Link>
                <Link href="/resources" className="text-mist hover:text-ink transition">Resources →</Link>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14">
          <Reveal>
            <p className="ui-kicker">Audience Paths</p>
            <h2 className="mt-3 ui-h2">เนื้อหาแยกตามบทบาทเพื่อให้ตัดสินใจได้เร็ว</h2>
          </Reveal>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {audiencePaths.map((path, index) => (
              <Reveal key={path.title} delay={index * 80}>
                <div className="route-card h-full">
                  <h3 className="ui-h3">{path.title}</h3>
                  <p className="mt-3 text-sm text-mist leading-relaxed">{path.body}</p>
                  <Link
                    href={path.href}
                    className="mt-5 inline-block text-sm text-ink underline underline-offset-4 decoration-accent hover:decoration-ink"
                  >
                    {path.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 card p-7 shadow-soft">
          <Reveal>
            <p className="ui-kicker">Solutions</p>
            <h2 className="mt-3 ui-h2">สามแกนหลักที่เว็บไซต์พาไปได้ชัดเจนขึ้น</h2>
          </Reveal>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {solutionPillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 80}>
                <Link href={pillar.href} className="route-card block h-full">
                  <h3 className="ui-h3">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{pillar.body}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 card p-7 shadow-soft">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="ui-kicker">Trusted Network</p>
              <h2 className="mt-2 ui-h2">เครือข่ายพาร์ตเนอร์ที่ร่วมส่งมอบกับ Gumon</h2>
            </div>
            <Link href="/partners" className="btn-secondary w-fit">ดูรายละเอียดพาร์ตเนอร์</Link>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <div key={partner.name} className="partner-item">
                <div className="partner-logo-wrap">
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={112}
                      height={40}
                      className="partner-logo"
                    />
                  ) : (
                    <div className="partner-logo-fallback" aria-label={`${partner.name} monogram`}>{partner.short}</div>
                  )}
                </div>
                <div>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium leading-snug underline underline-offset-4 decoration-accent hover:decoration-ink transition"
                  >
                    {partner.name}
                  </a>
                  <div className="text-xs text-mist mt-0.5">{partner.country}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <div className="mt-14 card p-7 shadow-soft">
            <p className="ui-kicker">Next Step</p>
            <h2 className="mt-3 ui-h2">หากต้องการเริ่มใช้งานจริง ทีมพร้อมช่วยวางเส้นทาง</h2>
            <p className="mt-3 text-sm md:text-base text-mist leading-relaxed max-w-3xl">
              ไม่ว่าคุณกำลังเริ่มโครงการใหม่ ขยายทีมพัฒนา หรือกำลังประเมินเชิงกลยุทธ์
              เราช่วยจัดเส้นทางเริ่มต้นตามบริบทองค์กรให้ได้.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary">คุยกับทีม Gumon</Link>
              <Link href="/resources" className="btn-secondary">ดูทรัพยากรทั้งหมด</Link>
              <Link href="/faq" className="btn-secondary">ดูคำถามที่พบบ่อย</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
