import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Image from "next/image";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Platform",
  description:
    "ภาพรวม Open Platform ของ Gumon ตั้งแต่สถาปัตยกรรมแกนกลางจนถึงเครื่องมือที่ช่วยทีมส่งมอบได้เร็วขึ้น",
  path: "/platform",
});

const architectureLayers = [
  {
    title: "Application Layer",
    body: "ชั้นแอปพลิเคชันสำหรับ business workflows ที่ต้องการความเร็วในการปรับปรุงและปล่อยใช้งาน",
  },
  {
    title: "API Service Layer",
    body: "ชั้นบริการกลางที่กำหนดสัญญาการเชื่อมต่อชัดเจน ลดปัญหาการพัฒนาแยกทีม",
  },
  {
    title: "Data Stream Layer",
    body: "ชั้นข้อมูลและเหตุการณ์สำหรับระบบที่ต้องรองรับปริมาณงานต่อเนื่องและการขยายเชิงบริการ",
  },
];

const coreCapabilities = [
  "Service Discovery และ API Gateway สำหรับการเชื่อมระบบแบบมีมาตรฐาน",
  "Authentication and Authorization ที่พร้อมใช้งานในหลายบริการ",
  "Event-driven components สำหรับ workflow ที่ต้องตอบสนองแบบ near real-time",
  "Starter templates และ Gumon CLI สำหรับลดงานตั้งค่าซ้ำ",
];

const outcomes = [
  "ลดเวลาเริ่มโครงการและ onboarding ทีมใหม่",
  "รักษาคุณภาพงานส่งมอบในหลายโปรเจกต์ด้วย convention เดียวกัน",
  "เพิ่มความพร้อมในการขยายระบบจาก monolith ไป multi-service",
];

export default function Page() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Platform", path: "/platform" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">Solutions / Platform</p>
          <h1 className="ui-h1">แพลตฟอร์มที่ออกแบบเพื่อ Delivery ในโลกจริง</h1>
          <p className="mt-6 max-w-3xl ui-p">
            โครงสร้าง Gumon Platform ช่วยให้ทีมเริ่มไว ควบคุมคุณภาพได้ และขยายงานได้โดยไม่เพิ่มความซับซ้อนเกินจำเป็น.
          </p>
        </Reveal>

        <div className="mt-10 card p-4 shadow-soft">
          <Image
            src="/assets/from-gumon/gumon_arc.png"
            alt="Gumon architecture reference"
            width={1600}
            height={900}
            className="w-full h-auto rounded-xl border border-line/30 bg-white"
          />
          <p className="mt-4 px-1 text-xs md:text-sm text-mist leading-relaxed">
            Reference Architecture แสดงกรอบการแยกชั้นระบบที่แนะนำ ไม่ได้บังคับตายตัว แต่ใช้เป็น baseline สำหรับออกแบบโครงการให้คุยกันรู้เรื่องตั้งแต่ต้น.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {architectureLayers.map((layer, index) => (
            <Reveal key={layer.title} delay={index * 70}>
              <div className="route-card h-full">
                <p className="ui-kicker">Architecture Layer</p>
                <h2 className="mt-3 ui-h3">{layer.title}</h2>
                <p className="mt-2 text-sm text-mist leading-relaxed">{layer.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-5">
          <div className="card p-7 shadow-soft">
            <p className="ui-kicker">Core Capabilities</p>
            <h2 className="mt-3 ui-h2">องค์ประกอบแกนกลางที่ช่วยให้ทีมเริ่มเร็ว</h2>
            <ul className="mt-5 grid gap-2 feature-list">
              {coreCapabilities.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <div className="card p-7 shadow-soft">
            <p className="ui-kicker">Delivery Outcomes</p>
            <h2 className="mt-3 ui-h2">ผลลัพธ์ที่องค์กรต้องการจากการใช้แพลตฟอร์ม</h2>
            <ul className="mt-5 grid gap-2 feature-list">
              {outcomes.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/developers" className="btn-primary">เริ่มจากเส้นทางนักพัฒนา</Link>
              <Link href="/contact" className="btn-secondary">คุยโจทย์โครงการกับทีม</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
