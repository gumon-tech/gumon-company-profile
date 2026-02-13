import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";
import { resolveLocale, type Locale } from "@/lib/i18n";

type Copy = {
  title: string;
  description: string;
  kicker: string;
  heading: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  foundationKicker: string;
  foundationHeading: string;
  rolesKicker: string;
  rolesHeading: string;
  worksKicker: string;
  worksHeading: string;
  worksLead: string;
  workflowKicker: string;
  workflowHeading: string;
  outcomesKicker: string;
  outcomesHeading: string;
  proofKicker: string;
  proofHeading: string;
  trustKicker: string;
  trustHeading: string;
  trustCta: string;
  consultCta: string;
  resourceCta: string;
  miniCasesKicker: string;
  miniCasesHeading: string;
  nextStepKicker: string;
  nextStepHeading: string;
  nextStepLead: string;
  signalPills: { label: string; value: string }[];
  trustStats: { label: string; value: string }[];
  foundations: { title: string; body: string }[];
  roles: { title: string; body: string; href: string; cta: string }[];
  workflow: { step: string; title: string; body: string }[];
  outcomes: { metric: string; value: string; detail: string }[];
  proofMetrics: { label: string; value: string; detail: string }[];
  miniCases: { title: string; problem: string; approach: string; outcome: string }[];
  fieldWorks: { title: string; category: string; image: string; detail: string }[];
};

const partners = [
  { name: "Asia Connect Corporation", country: "Thailand", website: "https://www.asiaconnectth.com", short: "AC", logo: "/assets/partners/asia-connect.png", logoScaleClass: "partner-logo-scale-98", logoFrameClass: "partner-logo-badge-circle" },
  { name: "AC Academys", country: "Thailand", website: "https://acacademys.com", short: "AC", logo: "/assets/partners/ac-academys.png", logoScaleClass: "partner-logo-scale-92", logoFrameClass: "partner-logo-badge-circle" },
  { name: "Olufy-X", country: "Thailand", website: "https://olufy.com", short: "OX", logo: "/assets/partners/olufy-x.png", logoScaleClass: "partner-logo-scale-90", logoFrameClass: "partner-logo-badge-circle" },
  { name: "Taitam-D", country: "United Kingdom", website: "https://taitam-d.com", short: "TD", logo: "/assets/partners/taitam-d.png", logoScaleClass: "partner-logo-scale-88", logoFrameClass: "partner-logo-badge-circle" },
];

const th: Copy = {
  title: "Open Platform for Delivery Teams",
  description: "Gumon Technology คือแพลตฟอร์มเทคโนโลยีสำหรับองค์กรที่ต้องการเริ่มโครงการได้เร็ว คุมมาตรฐานการพัฒนา และส่งมอบระบบได้ต่อเนื่อง",
  kicker: "OPEN PLATFORM ที่วัดผลได้จริง",
  heading: "ส่งมอบได้เร็วขึ้น ลดความเสี่ยงเชิงโครงสร้าง และพร้อมขยายระบบอย่างมั่นใจ",
  intro: "Gumon รวมมาตรฐานเทคโนโลยี เอกสาร และแนวปฏิบัติไว้บนแพลตฟอร์มเดียว ช่วยให้องค์กรเดินงานได้ไวขึ้น ควบคุมคุณภาพได้ต่อเนื่อง และวัดผลได้จริง",
  primaryCta: "ปรึกษาทีม Gumon",
  secondaryCta: "ดูผลลัพธ์การใช้งาน",
  foundationKicker: "Platform Foundation",
  foundationHeading: "โครงสร้าง 3 ชั้นที่ช่วยให้ทีมทำงานเร็วขึ้นโดยไม่เสียมาตรฐาน",
  rolesKicker: "Role Paths",
  rolesHeading: "เลือกแนวทางที่ตรงกับบทบาทของคุณ แล้วเริ่มงานได้ทันที",
  worksKicker: "Selected Field Works",
  worksHeading: "ภาพการทำงานร่วมกับหน่วยงานและพาร์ตเนอร์ในโครงการจริง",
  worksLead: "คัดภาพจากกิจกรรมภาคสนามที่สะท้อนแนวทางทำงานของ Gumon ตั้งแต่การวางมาตรฐาน การทำงานข้ามทีม ไปจนถึงการส่งมอบในสภาพแวดล้อมจริง",
  workflowKicker: "Delivery Workflow",
  workflowHeading: "แนวทางเริ่มต้น 3 ขั้นตอนสำหรับทำให้การส่งมอบเดินต่อได้จริง",
  outcomesKicker: "Outcome Snapshot",
  outcomesHeading: "ผลลัพธ์ที่ทีมผู้บริหารและทีมเทคโนโลยีต้องเห็นร่วมกัน",
  proofKicker: "Proof Metrics",
  proofHeading: "ตัวชี้วัดตั้งต้นที่ใช้ติดตามความพร้อมก่อนขยายโครงการ",
  trustKicker: "Trusted Partners",
  trustHeading: "เครือข่ายพาร์ตเนอร์มาตรฐานเดียวที่ส่งมอบได้จริง",
  trustCta: "ดูแนวทางการร่วมงาน",
  consultCta: "นัดคุยกับทีมงาน",
  resourceCta: "ดูข้อมูลเพิ่มเติม",
  miniCasesKicker: "Mini Cases",
  miniCasesHeading: "ตัวอย่างโจทย์ที่ใช้กรอบเดียวกันในการส่งมอบ",
  nextStepKicker: "Next Step",
  nextStepHeading: "พร้อมวางแผนเริ่มต้นให้โครงการเดินได้จริงในรอบถัดไปหรือยัง",
  nextStepLead: "ส่งข้อมูลทีมและระบบปัจจุบันของคุณมาได้เลย เราจะช่วยวางแนวทางเริ่มต้นที่เหมาะกับเป้าหมายธุรกิจ และข้อจำกัดขององค์กรคุณ",
  signalPills: [
    { label: "รูปแบบแพลตฟอร์ม", value: "Open Core" },
    { label: "สถาปัตยกรรม", value: "โครงสร้าง 3 ชั้น" },
    { label: "เครื่องมือ", value: "Gumon CLI + Docs" },
    { label: "การส่งมอบ", value: "ทำงานร่วมพาร์ตเนอร์" },
  ],
  trustStats: [
    { label: "Partner Organizations", value: `${partners.length}+` },
    { label: "Operating Countries", value: `${new Set(partners.map((item) => item.country)).size}` },
  ],
  foundations: [
    { title: "Application Layer", body: "ออกแบบงานธุรกิจให้ทีมพัฒนาแก้ไขและต่อยอดได้ต่อเนื่อง โดยไม่กระทบทั้งระบบ" },
    { title: "API Service Layer", body: "เชื่อมต่อบริการข้ามทีมด้วยมาตรฐานเดียวกัน ลดปัญหางานชนกันและแก้ยากปลายทาง" },
    { title: "Data Stream Layer", body: "รองรับข้อมูลที่ไหลต่อเนื่องสำหรับระบบที่ต้องโตเร็วและยังคงเสถียรภาพ" },
  ],
  roles: [
    { title: "ทีมพัฒนา", body: "เริ่มงานจากมาตรฐานตั้งต้นเดียวกัน ลดเวลาเตรียมระบบ และปล่อยงานได้สม่ำเสมอ", href: "/developers", cta: "ดูแนวทางสำหรับทีมพัฒนา" },
    { title: "พาร์ตเนอร์", body: "ต่อยอดเชิงพาณิชย์บนโครงสร้างเดียวกัน พร้อมบทบาทการส่งมอบที่ชัดเจน", href: "/partners", cta: "ดูแนวทางสำหรับพาร์ตเนอร์" },
    { title: "ผู้บริหาร", body: "เห็นภาพรวมแพลตฟอร์ม ความพร้อมทีม และแนวทางใช้งานให้เหมาะกับองค์กร", href: "/company", cta: "ดูภาพรวมองค์กร" },
  ],
  workflow: [
    { step: "01", title: "Assess Current Stack", body: "เก็บภาพรวมระบบเดิม ทีมที่เกี่ยวข้อง และคอขวดของรอบส่งมอบ เพื่อกำหนดจุดเริ่มที่คุ้มที่สุด" },
    { step: "02", title: "Align Platform Standards", body: "กำหนดมาตรฐานร่วมด้านโครงสร้าง API, pipeline, และเอกสาร เพื่อให้ทุกทีมทำงานบนฐานเดียวกัน" },
    { step: "03", title: "Launch Delivery Cadence", body: "วางรอบส่งมอบที่ตรวจสอบได้จริง พร้อมแผนขยายทีมและพาร์ตเนอร์ให้เติบโตบนมาตรฐานเดียวกัน" },
  ],
  outcomes: [
    { metric: "Lead Time Visibility", value: "End-to-End", detail: "เห็นคอขวดตลอดเส้นทางตั้งแต่เริ่มงานจนส่งมอบ" },
    { metric: "Delivery Governance", value: "Shared Standard", detail: "ควบคุมมาตรฐานร่วมข้ามทีมโดยไม่ลดความเร็วของการพัฒนา" },
    { metric: "Scale Readiness", value: "Partner-Ready", detail: "รองรับการร่วมงานกับพาร์ตเนอร์และทีมใหม่ได้อย่างเป็นระบบ" },
  ],
  proofMetrics: [
    { label: "First Response Target", value: "<= 1 Business Day", detail: "กำหนดรอบตอบกลับเบื้องต้นที่ชัดเจนสำหรับการเริ่มต้นโครงการ" },
    { label: "Platform Layers", value: "3", detail: "จัดโครงสร้างระบบเป็นชั้นงานที่ขยายต่อได้และคุมมาตรฐานง่าย" },
    { label: "Active Partners", value: `${partners.length}+`, detail: "มีเครือข่ายทีมส่งมอบที่ทำงานบนมาตรฐานเดียวกัน" },
  ],
  miniCases: [
    {
      title: "Government Services",
      problem: "มีหลายทีมพัฒนาแยกกัน ทำให้มาตรฐาน API และรอบส่งมอบไม่สม่ำเสมอ",
      approach: "กำหนดมาตรฐานตั้งต้นกลางและเกณฑ์คุณภาพร่วมก่อนเริ่มรอบพัฒนาใหม่",
      outcome: "ทีมเริ่มงานจากมาตรฐานเดียวกันและลดงานแก้ซ้ำปลายทาง",
    },
    {
      title: "Enterprise Internal Apps",
      problem: "ระบบภายในองค์กรเพิ่มขึ้นเร็ว แต่ pipeline และเอกสารไม่เชื่อมกัน",
      approach: "รวม workflow ฝั่งพัฒนา เอกสาร และรอบปล่อยงานไว้ในกรอบเดียว",
      outcome: "onboarding ทีมใหม่เร็วขึ้นและคาดการณ์รอบส่งมอบได้ชัดขึ้น",
    },
  ],
  fieldWorks: [
    { title: "Government Coordination Session", category: "Public Sector", image: "/assets/selected/government-defence-03.jpg", detail: "จัดเวิร์กชอปร่วมกับหน่วยงานเพื่อปรับแนวทางโครงสร้างระบบและการส่งมอบให้ตรวจสอบได้" },
    { title: "Healthcare Site Collaboration", category: "Healthcare", image: "/assets/selected/healthcare-cvmcra-01.png", detail: "ลงพื้นที่เก็บความต้องการและจัดลำดับการเชื่อมข้อมูลให้สอดคล้องกับการทำงานหน้างานจริง" },
    { title: "Education Program Support", category: "Education", image: "/assets/selected/education-kmitl-01.png", detail: "สนับสนุนทีมการศึกษาด้วยแนวทางแพลตฟอร์มและเอกสาร เพื่อยกระดับการพัฒนาระยะยาว" },
    { title: "Ecosystem Event Enablement", category: "Ecosystem", image: "/assets/selected/ecosystem-dks-01.png", detail: "ทำงานร่วมกับพาร์ตเนอร์ในระบบนิเวศเพื่อขยายการใช้งานแพลตฟอร์มในโครงการใหม่" },
    { title: "Delivery Readiness Review", category: "Operations", image: "/assets/field-impact/field-impact-15.jpg", detail: "ประเมินความพร้อมของทีมและกระบวนการส่งมอบก่อนเริ่มรอบพัฒนาจริง" },
    { title: "Cross-team Knowledge Transfer", category: "Knowledge", image: "/assets/field-impact/field-impact-10.jpg", detail: "ถ่ายทอดองค์ความรู้ข้ามทีมเพื่อลดความเสี่ยงจากการพึ่งพาบุคคลและเพิ่มความต่อเนื่องของงาน" },
  ],
};

const en: Copy = {
  title: "Open Platform for Delivery Teams",
  description: "Gumon Technology is a platform approach for organizations that need faster starts, stronger standards, and reliable delivery cadence.",
  kicker: "OPEN PLATFORM WITH PRACTICAL OUTCOMES",
  heading: "Deliver faster, reduce structural risk, and scale with confidence",
  intro: "Gumon combines standards, documentation, and delivery practices on one platform so organizations can move faster while keeping quality measurable.",
  primaryCta: "Consult Gumon Team",
  secondaryCta: "See Platform Outcomes",
  foundationKicker: "Platform Foundation",
  foundationHeading: "Three layers that improve speed without sacrificing standards",
  rolesKicker: "Role Paths",
  rolesHeading: "Choose the path that matches your role",
  worksKicker: "Selected Field Works",
  worksHeading: "Examples from real collaborations",
  worksLead: "Selected field activities that reflect Gumon's execution model, from standards alignment and cross-team collaboration to practical delivery contexts.",
  workflowKicker: "Delivery Workflow",
  workflowHeading: "A practical onboarding path",
  outcomesKicker: "Outcome Snapshot",
  outcomesHeading: "Expected organizational outcomes",
  proofKicker: "Proof Metrics",
  proofHeading: "Baseline indicators used to track delivery readiness before scale",
  trustKicker: "Trusted Partners",
  trustHeading: "Partner network aligned on shared standards",
  trustCta: "View Collaboration Model",
  consultCta: "Book a Consultation",
  resourceCta: "View More Resources",
  miniCasesKicker: "Mini Cases",
  miniCasesHeading: "Representative use cases delivered through the same framework",
  nextStepKicker: "Next Step",
  nextStepHeading: "Ready to plan your next practical delivery cycle?",
  nextStepLead: "Share your team context and current systems. We will propose a practical onboarding path aligned to your business goals and operational constraints.",
  signalPills: [
    { label: "Platform Model", value: "Open Core" },
    { label: "Architecture", value: "3-layer Design" },
    { label: "Tooling", value: "Gumon CLI + Docs" },
    { label: "Delivery", value: "Partner-aligned" },
  ],
  trustStats: [
    { label: "Partner Organizations", value: `${partners.length}+` },
    { label: "Operating Countries", value: `${new Set(partners.map((item) => item.country)).size}` },
  ],
  foundations: [
    { title: "Application Layer", body: "Business workflows designed for change without destabilizing the whole system." },
    { title: "API Service Layer", body: "Shared service contracts that make cross-team integration predictable." },
    { title: "Data Stream Layer", body: "Supports continuous data flow and operational resilience at scale." },
  ],
  roles: [
    { title: "Developers", body: "Start from a shared baseline and release with consistent cadence.", href: "/developers", cta: "Explore Developer Path" },
    { title: "Partners", body: "Scale commercial delivery on shared standards with clear role boundaries.", href: "/partners", cta: "Explore Partner Path" },
    { title: "Executives", body: "See platform readiness and adoption strategy aligned to business context.", href: "/company", cta: "View Company Overview" },
  ],
  workflow: [
    { step: "01", title: "Assess Current Stack", body: "Map current systems, teams, and delivery bottlenecks to identify the highest-value starting point." },
    { step: "02", title: "Align Platform Standards", body: "Define shared API, pipeline, and documentation standards so every team can operate on the same baseline." },
    { step: "03", title: "Launch Delivery Cadence", body: "Establish measurable release cycles with scale-ready planning for internal and partner teams." },
  ],
  outcomes: [
    { metric: "Lead Time Visibility", value: "End-to-End", detail: "Identify bottlenecks across the full delivery flow." },
    { metric: "Delivery Governance", value: "Shared Standard", detail: "Keep cross-team standards without slowing teams down." },
    { metric: "Scale Readiness", value: "Partner-Ready", detail: "Onboard partner teams under a consistent operating model." },
  ],
  proofMetrics: [
    { label: "First Response Target", value: "<= 1 Business Day", detail: "Defined initial response cycle for project onboarding requests." },
    { label: "Platform Layers", value: "3", detail: "Structured architecture designed for scale and maintainable standards." },
    { label: "Active Partners", value: `${partners.length}+`, detail: "Delivery teams operating under shared platform standards." },
  ],
  miniCases: [
    {
      title: "Government Services",
      problem: "Multiple teams worked in silos, creating inconsistent API standards and release cadence.",
      approach: "Established shared baseline standards and quality gates before the next delivery cycle.",
      outcome: "Teams started from one standard and reduced late-stage rework.",
    },
    {
      title: "Enterprise Internal Apps",
      problem: "Internal systems scaled quickly while pipelines and documentation stayed fragmented.",
      approach: "Unified development workflow, documentation, and release rhythm under one framework.",
      outcome: "New team onboarding accelerated and release timelines became more predictable.",
    },
  ],
  fieldWorks: [
    { title: "Government Coordination Session", category: "Public Sector", image: "/assets/selected/government-defence-03.jpg", detail: "Joint workshops on architecture alignment and delivery governance." },
    { title: "Healthcare Site Collaboration", category: "Healthcare", image: "/assets/selected/healthcare-cvmcra-01.png", detail: "On-site requirement capture and integration planning." },
    { title: "Education Program Support", category: "Education", image: "/assets/selected/education-kmitl-01.png", detail: "Platform guidance and documentation for long-term development capability." },
    { title: "Ecosystem Event Enablement", category: "Ecosystem", image: "/assets/selected/ecosystem-dks-01.png", detail: "Partner collaboration for new project onboarding." },
    { title: "Delivery Readiness Review", category: "Operations", image: "/assets/field-impact/field-impact-15.jpg", detail: "Team and process readiness assessment before execution cycles." },
    { title: "Cross-team Knowledge Transfer", category: "Knowledge", image: "/assets/field-impact/field-impact-10.jpg", detail: "Cross-team transfer to reduce key-person risk." },
  ],
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
  return buildPageMetadata({ title: copy.title, description: copy.description, path: "/" });
}

export default async function HomePage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocale(params);
  const copy = copyFor(locale);
  const fallbackNotice = locale !== "th" && locale !== "en" ? fallbackNoticeByLocale[locale] : null;

  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">{copy.kicker}</p>
          <h1 className="ui-h1">{copy.heading}</h1>
          <p className="mt-6 max-w-[34ch] sm:max-w-2xl lg:max-w-3xl ui-p">{copy.intro}</p>
        </Reveal>

        {fallbackNotice ? <div className="mt-6 rounded-xl border border-line/45 bg-bg1/55 p-4 text-sm text-mist">{fallbackNotice}</div> : null}

        <Reveal delay={80}>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <TrackedLink href="/contact" className="btn-primary">{copy.primaryCta}</TrackedLink>
            <TrackedLink href="/platform" className="btn-secondary-strong">{copy.secondaryCta}</TrackedLink>
          </div>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-3">
          {copy.signalPills.map((pill, index) => (
            <Reveal key={pill.label} delay={index * 60}>
              <div className="glass rounded-xl border border-line/35 px-4 py-3">
                <div className="text-[10px] tracking-[0.2em] uppercase text-mist">{pill.label}</div>
                <div className="mt-2 text-sm font-semibold text-ink">{pill.value}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 md:mt-14 card p-5 md:p-7 shadow-soft">
          <Reveal>
            <p className="ui-kicker">{copy.foundationKicker}</p>
            <h2 className="mt-3 ui-h2 max-w-4xl">{copy.foundationHeading}</h2>
          </Reveal>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {copy.foundations.map((block, index) => (
              <Reveal key={block.title} delay={index * 80}>
                <div className="route-card h-full">
                  <h3 className="ui-h3">{block.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{block.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="section-break">
          <Reveal>
            <p className="ui-kicker">{copy.rolesKicker}</p>
            <h2 className="mt-3 ui-h2 max-w-4xl">{copy.rolesHeading}</h2>
          </Reveal>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {copy.roles.map((card, index) => (
              <Reveal key={card.title} delay={index * 80}>
                <div className="route-card h-full">
                  <h3 className="ui-h3">{card.title}</h3>
                  <p className="mt-3 text-sm text-mist leading-relaxed">{card.body}</p>
                  <TrackedLink href={card.href} className="mt-5 inline-block text-sm text-ink underline underline-offset-4 decoration-accent hover:decoration-ink">{card.cta}</TrackedLink>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="section-break">
          <Reveal>
            <p className="ui-kicker">{copy.worksKicker}</p>
            <h2 className="mt-3 ui-h2 max-w-4xl">{copy.worksHeading}</h2>
            <p className="ui-lead">{copy.worksLead}</p>
          </Reveal>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {copy.fieldWorks.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <article className="card p-4 shadow-soft h-full">
                  <div className="overflow-hidden rounded-xl border border-line/30 bg-bg1/70">
                    <Image src={item.image} alt={item.title} width={1200} height={800} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 47vw, 92vw" loading="lazy" decoding="async" className="w-full h-48 object-cover" />
                  </div>
                  <div className="mt-4 text-[10px] tracking-[0.18em] uppercase text-accent">{item.category}</div>
                  <h3 className="mt-2 ui-h3">{item.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{item.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-14 card p-5 md:p-7 shadow-soft">
          <Reveal>
            <p className="ui-kicker">{copy.workflowKicker}</p>
            <h2 className="mt-3 ui-h2 max-w-4xl">{copy.workflowHeading}</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {copy.workflow.map((item, index) => (
              <Reveal key={item.step} delay={index * 80}>
                <div className="route-card h-full">
                  <div className="text-xs font-semibold tracking-[0.2em] text-accent">{item.step}</div>
                  <h3 className="mt-2 ui-h3">{item.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="section-break">
          <Reveal>
            <p className="ui-kicker">{copy.proofKicker}</p>
            <h2 className="mt-3 ui-h2 max-w-4xl">{copy.proofHeading}</h2>
          </Reveal>
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

        <div className="mt-16 md:mt-14 card p-5 md:p-7 shadow-soft">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="ui-kicker">{copy.trustKicker}</p>
              <h2 className="mt-2 ui-h2 max-w-4xl">{copy.trustHeading}</h2>
            </div>
            <TrackedLink href="/partners" className="btn-secondary-strong w-fit">{copy.trustCta}</TrackedLink>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <TrackedLink key={partner.name} href={partner.website} target="_blank" rel="noreferrer" className="partner-item">
                {partner.logo ? (
                  <div className={`partner-logo-badge ${partner.logoFrameClass ?? "partner-logo-badge-circle"}`}>
                    <Image src={partner.logo} alt={`${partner.name} logo`} width={112} height={40} sizes="112px" loading="lazy" decoding="async" className={`partner-logo ${partner.logoScaleClass}`} />
                  </div>
                ) : (
                  <div className="partner-logo-fallback" aria-label={`${partner.name} monogram`}>{partner.short}</div>
                )}
                <div>
                  <div className="text-sm font-medium leading-snug text-ink">{partner.name}</div>
                  <div className="text-xs text-mist mt-0.5">{partner.country}</div>
                </div>
              </TrackedLink>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {copy.trustStats.map((item) => (
              <div key={item.label} className="glass rounded-lg border border-line/35 px-3 py-2 text-xs text-mist">
                <span className="text-ink font-semibold">{item.value}</span> {item.label}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-14 card p-5 md:p-7 shadow-soft">
          <Reveal>
            <p className="ui-kicker">{copy.miniCasesKicker}</p>
            <h2 className="mt-3 ui-h2 max-w-4xl">{copy.miniCasesHeading}</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {copy.miniCases.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
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

        <div className="section-break">
          <Reveal>
            <p className="ui-kicker">{copy.outcomesKicker}</p>
            <h2 className="mt-3 ui-h2 max-w-4xl">{copy.outcomesHeading}</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {copy.outcomes.map((item, index) => (
              <Reveal key={item.metric} delay={index * 80}>
                <div className="glass rounded-xl border border-line/35 p-5 h-full">
                  <div className="text-xs text-mist uppercase tracking-[0.14em]">{item.metric}</div>
                  <div className="mt-2 text-xl font-semibold text-ink">{item.value}</div>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <div className="mt-16 md:mt-14 card p-5 md:p-7 shadow-soft">
            <p className="ui-kicker">{copy.nextStepKicker}</p>
            <h2 className="mt-3 ui-h2 max-w-4xl">{copy.nextStepHeading}</h2>
            <p className="ui-lead">{copy.nextStepLead}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <TrackedLink href="/contact" className="btn-primary">{copy.consultCta}</TrackedLink>
              <TrackedLink href="/resources" className="btn-secondary-strong">{copy.resourceCta}</TrackedLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
