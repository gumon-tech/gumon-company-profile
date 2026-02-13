import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Ecosystem",
  description:
    "ภาพรวมระบบนิเวศ Gumon ที่เชื่อม Platform, Partners และ Learning ให้เติบโตร่วมกันอย่างเป็นระบบ",
  path: "/ecosystem",
});

const ecosystemPillars = [
  {
    title: "Shared Standards",
    body: "ทุกฝ่ายทำงานบนกรอบมาตรฐานเดียวกัน เพื่อลด friction ระหว่างทีม",
  },
  {
    title: "Role Clarity",
    body: "กำหนดบทบาทชัดเจนระหว่างผู้พัฒนาแพลตฟอร์ม ผู้ส่งมอบ และศูนย์การเรียนรู้",
  },
  {
    title: "Partner Growth",
    body: "เปิดทางให้พาร์ตเนอร์ขยายการใช้งานและต่อยอดเชิงธุรกิจบนโครงเดียวกัน",
  },
  {
    title: "Field Feedback Loop",
    body: "นำบทเรียนจากงานภาคสนามกลับมายกระดับเครื่องมือและแนวทางกลาง",
  },
];

const selectedWorks = [
  { src: "/assets/field-impact/field-impact-01.jpg", tag: "Government", title: "Public Sector Collaboration" },
  { src: "/assets/field-impact/field-impact-04.jpg", tag: "Government", title: "NCSA Collaboration" },
  { src: "/assets/field-impact/field-impact-09.jpg", tag: "Education", title: "KMITL Classroom Session" },
  { src: "/assets/field-impact/field-impact-10.jpg", tag: "Education", title: "DigiTech Showcase" },
  { src: "/assets/field-impact/field-impact-13.jpg", tag: "Field Impact", title: "Healthcare Use Case" },
  { src: "/assets/field-impact/field-impact-15.jpg", tag: "Field Impact", title: "Industry Partner Activity" },
];

export default function Page() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Ecosystem", path: "/ecosystem" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">Solutions / Ecosystem</p>
          <h1 className="ui-h1">ระบบนิเวศที่ออกแบบให้ทุกฝ่ายเติบโตได้โดยไม่ทับบทบาทกัน</h1>
          <p className="mt-6 max-w-3xl ui-p">
            Gumon Ecosystem เชื่อมเทคโนโลยี การเรียนรู้ และเครือข่ายพาร์ตเนอร์ เพื่อให้การส่งมอบภาคสนามนำกลับมาพัฒนาระบบส่วนกลางได้อย่างต่อเนื่อง.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {ecosystemPillars.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="route-card h-full">
                <p className="ui-kicker">Ecosystem Pillar</p>
                <h2 className="mt-3 ui-h3">{item.title}</h2>
                <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">Field Impact</p>
          <h2 className="mt-3 ui-h2">ตัวอย่างงานภาคสนามที่สะท้อนการทำงานของ ecosystem</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedWorks.map((item, index) => (
              <Reveal key={item.src} delay={index * 40}>
                <figure className="card p-2 shadow-soft overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-bg0/60 border border-line/20">
                    <Image src={item.src} alt={item.title} fill className="h-full w-full object-cover" sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" />
                  </div>
                  <figcaption className="px-1 pt-3 pb-1">
                    <div className="text-[11px] tracking-[0.2em] uppercase text-mist">{item.tag}</div>
                    <div className="mt-1 text-sm font-medium leading-snug">{item.title}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">Next Action</p>
          <h2 className="mt-3 ui-h2">ต้องการร่วมขับเคลื่อนในระบบนิเวศ Gumon</h2>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/partners" className="btn-secondary">ดูแนวทางสำหรับพาร์ตเนอร์</Link>
            <Link href="/contact" className="btn-primary">เริ่มคุยกับทีมงาน</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
