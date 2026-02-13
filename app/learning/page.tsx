import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Learning",
  description:
    "เส้นทางเรียนรู้และการรับรองเพื่อยกระดับทักษะทีมพัฒนาและทีมส่งมอบบนมาตรฐาน Gumon",
  path: "/learning",
});

const learningTracks = [
  {
    title: "Developer Track",
    body: "เหมาะกับทีม dev ที่ต้องการเร่ง onboarding และลดเวลาทดลองผิดลองถูก",
  },
  {
    title: "Architecture Track",
    body: "เหมาะกับ technical leads ที่ต้องกำหนดมาตรฐานการออกแบบระบบหลายบริการ",
  },
  {
    title: "Delivery Track",
    body: "เหมาะกับทีม implementation ที่ต้องคุมคุณภาพการส่งมอบข้ามหลายโครงการ",
  },
  {
    title: "Organization Track",
    body: "เหมาะกับผู้บริหารที่ต้องการยกระดับทักษะทีมในภาพรวมองค์กร",
  },
];

const outcomes = [
  "ทีมมีภาษาร่วมในการวาง architecture และ release",
  "ลดช่องว่างทักษะระหว่างทีมพัฒนาและทีมส่งมอบ",
  "เพิ่มความสม่ำเสมอของคุณภาพงานในทุกโครงการ",
  "สร้าง readiness สำหรับการขยายระบบในระยะถัดไป",
];

export default function Page() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Learning", path: "/learning" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">Solutions / Learning</p>
          <h1 className="ui-h1">ยกระดับความสามารถทีมให้พร้อมใช้งานจริง</h1>
          <p className="mt-6 max-w-3xl ui-p">
            DKS Center เป็นโครงสร้างการเรียนรู้ของ ecosystem ที่ช่วยให้ทีมพัฒนาและทีมส่งมอบทำงานบนมาตรฐานเดียวกันตั้งแต่ระดับพื้นฐานถึงระดับปฏิบัติการ.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {learningTracks.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="route-card h-full">
                <p className="ui-kicker">Learning Track</p>
                <h2 className="mt-3 ui-h3">{item.title}</h2>
                <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">Outcomes</p>
          <h2 className="mt-3 ui-h2">สิ่งที่องค์กรได้รับจากระบบเรียนรู้แบบเป็นขั้นตอน</h2>
          <ul className="mt-5 grid gap-2 feature-list">
            {outcomes.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="https://dkscenter.gumon.io" target="_blank" rel="noreferrer" className="btn-primary">
              ไปที่ DKS Center
            </a>
            <a href="https://dkscenter.gumon.io" target="_blank" rel="noreferrer" className="btn-secondary">
              ดูโปรแกรมอบรม
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
