import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import { companyInfo } from "@/lib/companyInfo";
import { buildPageMetadata } from "@/lib/seo";
import { resolveLocale, type Locale } from "@/lib/i18n";

type CaseItem = { title: string; problem: string; approach: string; outcome: string };
type Copy = {
  title: string;
  description: string;
  crumb: string;
  kicker: string;
  heading: string;
  intro: string;
  principlesKicker: string;
  principlesHeading: string;
  principles: { title: string; body: string }[];
  strategicKicker: string;
  strategicHeading: string;
  strategicItems: { title: string; body: string }[];
  proofKicker: string;
  proofHeading: string;
  proofMetrics: { label: string; value: string; detail: string }[];
  modelKicker: string;
  modelHeading: string;
  modelItems: string[];
  boundariesKicker: string;
  boundariesHeading: string;
  isTitle: string;
  isNotTitle: string;
  isItems: string[];
  isNotItems: string[];
  casesKicker: string;
  casesHeading: string;
  cases: CaseItem[];
  legalKicker: string;
  legalHeading: string;
  companyLabel: string;
  addressLabel: string;
  regLabel: string;
  dateLabel: string;
  platformCta: string;
  teamCta: string;
  contactCta: string;
};

const th: Copy = {
  title: "Company",
  description: "รู้จัก Gumon Technology แนวคิดขององค์กร และวิธีขับเคลื่อนแพลตฟอร์มเทคโนโลยีสำหรับงานส่งมอบจริง",
  crumb: "Company",
  kicker: "Company / Overview",
  heading: "Gumon Technology สร้างโครงสร้างพื้นฐานซอฟต์แวร์ที่ทีมใช้งานได้จริงในงานประจำวัน",
  intro: "เราเป็นองค์กรเทคโนโลยีที่โฟกัส platform engineering และมาตรฐานการทำงานร่วมกัน เพื่อให้ทีมพัฒนาและทีมธุรกิจเดินไปในทิศทางเดียวกันได้เร็วขึ้น",
  principlesKicker: "Principle",
  principlesHeading: "หลักการที่ใช้ตัดสินใจเชิงระบบ",
  principles: [
    { title: "Open Source by Default", body: "แกนหลักของแพลตฟอร์มต้องเปิดและตรวจสอบได้ เพื่อให้ทีมใช้งานต่อได้อย่างมั่นใจในระยะยาว" },
    { title: "Platform over Projects", body: "เราลงทุนกับโครงสร้างที่ใช้ซ้ำได้ ไม่เน้นแก้ปัญหาเฉพาะกิจรายโปรเจกต์" },
    { title: "Partner-Driven Delivery", body: "การส่งมอบปลายทางขับเคลื่อนโดยเครือข่ายพาร์ตเนอร์ เพื่อขยายงานได้อย่างยั่งยืน" },
    { title: "Evidence-Led Execution", body: "ทุกการปรับปรุงอ้างอิงจากข้อมูลหน้างาน ความเห็นจากผู้ใช้งาน และผลลัพธ์ที่ตรวจสอบได้" },
  ],
  strategicKicker: "Strategic Intent",
  strategicHeading: "วิสัยทัศน์และพันธกิจ",
  strategicItems: [
    { title: "Vision", body: "ยกระดับการพัฒนาซอฟต์แวร์ให้เริ่มต้นได้เร็ว ส่งมอบได้ต่อเนื่อง และไม่ติดกับผู้ขายรายเดียวด้วยแนวทางแบบเปิด" },
    { title: "Mission", body: "พัฒนาแพลตฟอร์ม มาตรฐาน และองค์ความรู้ที่ทีมเทคโนโลยีและพาร์ตเนอร์นำไปใช้งานจริงได้ในอุตสาหกรรมที่หลากหลาย" },
  ],
  proofKicker: "Proof Metrics",
  proofHeading: "ตัวชี้วัดเชิงโครงสร้างที่ใช้ยืนยันความพร้อมในการขยายผล",
  proofMetrics: [
    { label: "Core Principles", value: "4", detail: "กรอบการตัดสินใจหลักที่ใช้ร่วมกันทั้งองค์กร" },
    { label: "Operating Tracks", value: "3", detail: "บทบาทหลักที่เชื่อมงานวิศวกรรมกับการส่งมอบ" },
    { label: "Delivery Model", value: "Platform + Partner", detail: "แยกบทบาทชัดเจนระหว่างทีมแพลตฟอร์มและทีมส่งมอบ" },
  ],
  modelKicker: "Operating Model",
  modelHeading: "วิธีทำงานขององค์กรที่ออกแบบมาเพื่อขยายผลได้จริง",
  modelItems: [
    "Platform Team: พัฒนา core architecture, standards และ tooling",
    "Enablement System: ขับเคลื่อน docs, playbooks และองค์ความรู้สำหรับทีมใช้งาน",
    "Partner Network: ส่งมอบเชิงพาณิชย์และขยายผลในตลาดจริง",
  ],
  boundariesKicker: "What Gumon Is / Is Not",
  boundariesHeading: "ขอบเขตบทบาทที่ชัดเจนเพื่อรักษาความเชื่อมั่นของ ecosystem",
  isTitle: "What Gumon Is",
  isNotTitle: "What Gumon Is Not",
  isItems: [
    "องค์กรแพลตฟอร์มเทคโนโลยีแบบเปิด (Open-first Platform Organization)",
    "ผู้พัฒนาโครงสร้างกลาง มาตรฐาน และเครื่องมือที่ใช้ซ้ำได้",
    "ผู้สนับสนุน ecosystem ผ่านเอกสาร แนวปฏิบัติ และการทำงานร่วมกับพาร์ตเนอร์",
  ],
  isNotItems: [
    "Software House ที่รับพัฒนาโครงการปลายทางเป็นหลัก",
    "ผู้แข่งขันกับพาร์ตเนอร์ในงานส่งมอบเชิงพาณิชย์",
    "แพลตฟอร์มที่ปิดแกนหลักหรือบังคับจ่ายเงินเพื่อใช้งานความสามารถจำเป็น",
  ],
  casesKicker: "Mini Cases",
  casesHeading: "ตัวอย่างการตัดสินใจเชิงระบบที่ช่วยให้ส่งมอบได้ต่อเนื่อง",
  cases: [
    {
      title: "Standardized Delivery Setup",
      problem: "แต่ละโครงการตั้งต้นระบบใหม่ ทำให้ใช้เวลานำส่งนานและเกิดงานซ้ำ",
      approach: "ลงทุนกับมาตรฐานตั้งต้นกลางและแนวปฏิบัติที่ใช้ซ้ำได้ในหลายรูปแบบโครงการ",
      outcome: "ทีมสามารถเริ่มงานจากแนวทางเดียวกันและขยายโครงการได้ง่ายขึ้น",
    },
    {
      title: "Partner-Enabled Expansion",
      problem: "การขยายส่งมอบด้วยหลายทีมเสี่ยงต่อคุณภาพและความสม่ำเสมอ",
      approach: "สร้าง quality gates และชุดเอกสารที่พาร์ตเนอร์ใช้ร่วมกับทีมกลาง",
      outcome: "เพิ่มความมั่นใจในการส่งมอบและคุมมาตรฐานได้เมื่อจำนวนงานโตขึ้น",
    },
  ],
  legalKicker: "Legal Information",
  legalHeading: "ข้อมูลนิติบุคคล",
  companyLabel: "ชื่อบริษัท",
  addressLabel: "ที่อยู่จดทะเบียน",
  regLabel: "เลขทะเบียนนิติบุคคล",
  dateLabel: "วันที่จดทะเบียน",
  platformCta: "ดู Platform",
  teamCta: "รู้จักทีม",
  contactCta: "คุยกับทีม",
};

const en: Copy = {
  title: "Company",
  description: "Learn about Gumon Technology, its principles, and platform-first operating model.",
  crumb: "Company",
  kicker: "Company / Overview",
  heading: "Gumon Technology builds practical software foundations for delivery teams",
  intro: "We are a technology organization focused on platform engineering and shared execution standards so engineering and business teams can move in the same direction faster.",
  principlesKicker: "Principle",
  principlesHeading: "Decision principles behind the platform",
  principles: [
    { title: "Open Source by Default", body: "The platform core must remain open and auditable for long-term confidence." },
    { title: "Platform over Projects", body: "We invest in reusable structures instead of one-off project fixes." },
    { title: "Partner-Driven Delivery", body: "Commercial delivery is scaled through partner networks." },
    { title: "Evidence-Led Execution", body: "Improvements are grounded in operational evidence and measurable outcomes." },
  ],
  strategicKicker: "Strategic Intent",
  strategicHeading: "Vision and mission",
  strategicItems: [
    { title: "Vision", body: "Advance software delivery so teams can start faster, ship continuously, and avoid vendor lock-in through an open approach." },
    { title: "Mission", body: "Build platform standards and practical knowledge that technology teams and partners can apply across industries." },
  ],
  proofKicker: "Proof Metrics",
  proofHeading: "Structural indicators used to validate readiness for scale",
  proofMetrics: [
    { label: "Core Principles", value: "4", detail: "Shared decision framework across the organization." },
    { label: "Operating Tracks", value: "3", detail: "Execution tracks linking engineering and delivery operations." },
    { label: "Delivery Model", value: "Platform + Partner", detail: "Clear role separation between platform and commercial delivery." },
  ],
  modelKicker: "Operating Model",
  modelHeading: "Execution model designed for practical scale",
  modelItems: [
    "Platform Team: builds core architecture, standards, and tooling",
    "Enablement System: drives docs, playbooks, and operational knowledge",
    "Partner Network: delivers commercial outcomes and market expansion",
  ],
  boundariesKicker: "What Gumon Is / Is Not",
  boundariesHeading: "Clear scope boundaries to preserve ecosystem trust",
  isTitle: "What Gumon Is",
  isNotTitle: "What Gumon Is Not",
  isItems: [
    "An open-first platform organization",
    "A builder of shared standards and reusable tooling",
    "An ecosystem enabler through practical documentation and partner collaboration",
  ],
  isNotItems: [
    "A traditional software house focused on custom end delivery",
    "A competitor to partners in commercial delivery",
    "A closed platform that locks required capabilities behind forced payment",
  ],
  casesKicker: "Mini Cases",
  casesHeading: "System-level decisions that improved delivery continuity",
  cases: [
    {
      title: "Standardized Delivery Setup",
      problem: "Projects repeatedly started from scratch, causing delays and duplicated work.",
      approach: "Invested in shared baselines and reusable operational playbooks.",
      outcome: "Teams started from a common baseline and scaled delivery more predictably.",
    },
    {
      title: "Partner-Enabled Expansion",
      problem: "Multi-team expansion introduced quality and consistency risk.",
      approach: "Defined quality gates and shared partner documentation.",
      outcome: "Delivery confidence improved as workload scaled.",
    },
  ],
  legalKicker: "Legal Information",
  legalHeading: "Company Registration Details",
  companyLabel: "Company",
  addressLabel: "Registered Address",
  regLabel: "Registration Number",
  dateLabel: "Registered Date",
  platformCta: "View Platform",
  teamCta: "Meet Team",
  contactCta: "Talk to Team",
};

const fallbackNoticeByLocale: Partial<Record<Locale, string>> = {
  "zh-CN": "当前语言版本正在本地化中。以下内容暂以英文提供。",
  ja: "現在この言語版はローカライズ中です。以下は英語版です。",
  ko: "현재 해당 언어 버전은 현지화 중입니다. 아래 내용은 영어로 제공됩니다。",
  es: "Esta versión del idioma está en localización. El contenido se muestra en inglés temporalmente.",
  fr: "Cette version est en cours de localisation. Le contenu ci-dessous est temporairement en anglais.",
  de: "Diese Sprachversion wird derzeit lokalisiert. Der folgende Inhalt wird vorübergehend auf Englisch angezeigt.",
  "pt-BR": "Esta versão de idioma está em localização. O conteúdo abaixo é exibido temporariamente em inglês.",
  ar: "هذه النسخة اللغوية قيد التوطين حالياً. يتم عرض المحتوى أدناه باللغة الإنجليزية مؤقتاً.",
};

function copyFor(locale: Locale): Copy {
  return locale === "th" ? th : en;
}

async function getLocale(params?: Promise<{ locale?: string }>): Promise<Locale> {
  if (!params) return resolveLocale("th");
  const resolved = await params;
  return resolveLocale(resolved.locale);
}

export async function generateMetadata({ params }: { params?: Promise<{ locale?: string }> }): Promise<Metadata> {
  const locale = await getLocale(params);
  const copy = copyFor(locale);
  return buildPageMetadata({ title: copy.title, description: copy.description, path: "/company" });
}

export default async function CompanyPage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocale(params);
  const copy = copyFor(locale);
  const fallbackNotice = locale !== "th" && locale !== "en" ? fallbackNoticeByLocale[locale] : null;

  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: copy.crumb, path: "/company" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">{copy.kicker}</p>
          <h1 className="ui-h1">{copy.heading}</h1>
          <p className="mt-6 max-w-3xl ui-p">{copy.intro}</p>
        </Reveal>

        {fallbackNotice ? <div className="mt-6 rounded-xl border border-line/45 bg-bg1/55 p-4 text-sm text-mist">{fallbackNotice}</div> : null}

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {copy.principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="route-card h-full">
                <p className="ui-kicker">{copy.principlesKicker}</p>
                <h2 className="mt-3 ui-h3">{item.title}</h2>
                <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {copy.strategicItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="card p-7 shadow-soft h-full">
                <p className="ui-kicker">{copy.strategicKicker}</p>
                <h2 className="mt-3 ui-h3">{item.title}</h2>
                <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <p className="ui-kicker">{copy.proofKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.proofHeading}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {copy.proofMetrics.map((item, index) => (
              <Reveal key={item.label} delay={index * 70}>
                <div className="glass rounded-xl border border-line/35 p-5 h-full">
                  <div className="text-xs text-mist uppercase tracking-[0.14em]">{item.label}</div>
                  <div className="mt-2 text-2xl font-semibold text-ink">{item.value}</div>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">{copy.modelKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.modelHeading}</h2>
          <ul className="mt-5 grid gap-2 feature-list">
            {copy.modelItems.map((item) => <li key={item}>- {item}</li>)}
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <TrackedLink href="/platform" className="btn-primary">{copy.platformCta}</TrackedLink>
            <TrackedLink href="/team" className="btn-secondary">{copy.teamCta}</TrackedLink>
            <TrackedLink href="/contact" className="btn-secondary">{copy.contactCta}</TrackedLink>
          </div>
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">{copy.boundariesKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.boundariesHeading}</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="route-card h-full">
              <h3 className="ui-h3">{copy.isTitle}</h3>
              <ul className="mt-3 grid gap-2 feature-list">{copy.isItems.map((item) => <li key={item}>- {item}</li>)}</ul>
            </div>
            <div className="route-card h-full">
              <h3 className="ui-h3">{copy.isNotTitle}</h3>
              <ul className="mt-3 grid gap-2 feature-list">{copy.isNotItems.map((item) => <li key={item}>- {item}</li>)}</ul>
            </div>
          </div>
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">{copy.casesKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.casesHeading}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {copy.cases.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="route-card h-full">
                  <div className="text-xs tracking-[0.16em] uppercase text-mist">{item.title}</div>
                  <p className="mt-3 text-sm text-mist leading-relaxed"><span className="text-ink">Problem:</span> {item.problem}</p>
                  <p className="mt-2 text-sm text-mist leading-relaxed"><span className="text-ink">Approach:</span> {item.approach}</p>
                  <p className="mt-2 text-sm text-mist leading-relaxed"><span className="text-ink">Outcome:</span> {item.outcome}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div id="legal-information" className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">{copy.legalKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.legalHeading}</h2>
          <div className="mt-5 grid gap-3 text-sm text-mist leading-relaxed">
            <div><span className="text-ink font-medium">{copy.companyLabel}:</span> {companyInfo.legalName}</div>
            <div><span className="text-ink font-medium">{copy.addressLabel}:</span> {companyInfo.address}</div>
            <div><span className="text-ink font-medium">{copy.regLabel}:</span> {companyInfo.registrationNumber}</div>
            <div><span className="text-ink font-medium">{copy.dateLabel}:</span> {companyInfo.registeredAt}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
