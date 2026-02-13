import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Company",
  description:
    "รู้จัก Gumon Technology ผ่านหลักการ Open-first, Partner-only และ Platform-first",
  path: "/company",
});

const companyPrinciples = [
  {
    title: "Open-first",
    body: "ความสามารถแกนหลักต้องเข้าถึงได้ ตรวจสอบได้ และพัฒนาเพิ่มได้",
  },
  {
    title: "Partner-only",
    body: "Gumon ไม่แข่งขันในงานส่งมอบปลายทางที่ทับซ้อนพาร์ตเนอร์",
  },
  {
    title: "Platform-first",
    body: "โฟกัสการลงทุนกับโครงสร้างระยะยาวที่เพิ่ม productivity ให้ทั้ง ecosystem",
  },
  {
    title: "Readiness-driven",
    body: "ขยายตามความพร้อมของแพลตฟอร์มและเครือข่าย ไม่เร่งเกิน capacity ที่รองรับ",
  },
];

const highlights = [
  { src: "/assets/field-impact/field-impact-01.jpg", tag: "Government", title: "Public Sector Collaboration" },
  { src: "/assets/field-impact/field-impact-06.jpg", tag: "Education", title: "DKS Technical Program" },
  { src: "/assets/field-impact/field-impact-11.jpg", tag: "Field Impact", title: "Healthcare On-site" },
];

export default function Page() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Company", path: "/company" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">Company / About</p>
          <h1 className="ui-h1">Gumon Technology คือแพลตฟอร์มคอมพานีที่เติบโตผ่านเครือข่ายพาร์ตเนอร์</h1>
          <p className="mt-6 max-w-3xl ui-p">
            เราออกแบบบทบาทองค์กรให้ชัดเจน เพื่อให้การพัฒนาเทคโนโลยี การส่งมอบเชิงพาณิชย์ และการยกระดับทักษะเดินไปด้วยกันอย่างยั่งยืน.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {companyPrinciples.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="route-card h-full">
                <p className="ui-kicker">Principle</p>
                <h2 className="mt-3 ui-h3">{item.title}</h2>
                <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">Selected Highlights</p>
          <h2 className="mt-3 ui-h2">ตัวอย่างบริบทงานที่ Gumon มีส่วนร่วมใน ecosystem</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((item) => (
              <figure key={item.src} className="card p-2 shadow-soft overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-bg0/60 border border-line/20">
                  <Image src={item.src} alt={item.title} fill className="h-full w-full object-cover" sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" />
                </div>
                <figcaption className="px-1 pt-3 pb-1">
                  <div className="text-[11px] tracking-[0.2em] uppercase text-mist">{item.tag}</div>
                  <div className="mt-1 text-sm font-medium leading-snug">{item.title}</div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/team" className="btn-secondary">ดูทีมงาน</Link>
            <Link href="/contact" className="btn-primary">คุยกับทีม Gumon</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
