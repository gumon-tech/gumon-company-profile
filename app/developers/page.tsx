import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import { buildPageMetadata } from "@/lib/seo";
import { resolveLocale, type Locale } from "@/lib/i18n";

type DevelopersCopy = {
  title: string;
  description: string;
  crumb: string;
  kicker: string;
  heading: string;
  intro: string;
  phaseLabel: string;
  focusKicker: string;
  focusHeading: string;
  resourcesKicker: string;
  resourcesHeading: string;
  nextKicker: string;
  nextHeading: string;
  nextBody: string;
  platformCta: string;
  contactCta: string;
  phases: { title: string; body: string }[];
  technicalFocus: string[];
  resourceCards: { title: string; body: string; href: string }[];
};

const localizedMeta: Partial<Record<Locale, { title: string; description: string }>> = {
  th: {
    title: "Developers",
    description: "เส้นทางสำหรับทีมพัฒนาที่ต้องการเริ่มโครงการบนมาตรฐานเดียวกันและปล่อยระบบได้เร็วขึ้น",
  },
  en: {
    title: "Developers",
    description: "A delivery path for engineering teams that need faster starts and consistent standards.",
  },
};

const fallbackNoticeByLocale: Partial<Record<Locale, string>> = {
  "zh-CN": "当前语言版本正在本地化中。以下内容暂以英文提供。",
  ja: "現在この言語版はローカライズ中です。以下は英語版です。",
  ko: "현재 해당 언어 버전은 현지화 중입니다. 아래 내용은 영어로 제공됩니다.",
  es: "Esta versión del idioma está en localización. El contenido se muestra en inglés temporalmente.",
  fr: "Cette version est en cours de localisation. Le contenu ci-dessous est temporairement en anglais.",
  de: "Diese Sprachversion wird derzeit lokalisiert. Der folgende Inhalt wird vorübergehend auf Englisch angezeigt.",
  "pt-BR": "Esta versão de idioma está em localização. O conteúdo abaixo é exibido temporariamente em inglês.",
  ar: "هذه النسخة اللغوية قيد التوطين حالياً. يتم عرض المحتوى أدناه باللغة الإنجليزية مؤقتاً.",
};

const developersCopyByLocale: Record<"th" | "en", DevelopersCopy> = {
  th: {
    title: "Developers",
    description: "เส้นทางสำหรับทีมพัฒนาที่ต้องการเริ่มโครงการบนมาตรฐานเดียวกันและปล่อยระบบได้เร็วขึ้น",
    crumb: "Developers",
    kicker: "Developers / Build Path",
    heading: "เส้นทางสำหรับทีมพัฒนาที่ต้องการสร้างระบบให้เร็วและคุมมาตรฐานได้ตั้งแต่ต้น",
    intro:
      "หน้านี้รวมเส้นทางทำงานสำหรับทีมพัฒนาที่ต้องการย้ายจากการเริ่มใหม่ทุกครั้ง ไปสู่การพัฒนาบนมาตรฐานตั้งต้นเดียวกันเพื่อให้ส่งมอบซ้ำได้จริง",
    phaseLabel: "Phase",
    focusKicker: "Engineering Focus",
    focusHeading: "สิ่งที่ทีมพัฒนาควรได้จากแพลตฟอร์ม",
    resourcesKicker: "Core Resources",
    resourcesHeading: "เริ่มจากเครื่องมือที่ทีมใช้จริง",
    nextKicker: "Next Step",
    nextHeading: "ต้องการประเมินระบบเดิมก่อนเริ่มย้ายโครงสร้าง",
    nextBody:
      "หากทีมมีระบบเดิมอยู่แล้วและต้องการวางแผนย้ายระบบแบบค่อยเป็นค่อยไป สามารถส่งข้อมูลระบบปัจจุบันมาเพื่อประเมินมาตรฐานตั้งต้นที่เหมาะสม",
    platformCta: "ดู Platform Overview",
    contactCta: "คุยกับทีมเทคนิค",
    phases: [
      { title: "Bootstrap", body: "เริ่มระบบจากแม่แบบมาตรฐาน กำหนดค่ากลาง และวางมาตรฐานตั้งต้นของทีม" },
      { title: "Integrate", body: "เชื่อมบริการผ่านสัญญาเชื่อมต่อที่ชัดเจน พร้อมตรวจคุณภาพก่อนรวมงาน" },
      { title: "Operate", body: "ปล่อยงานอย่างสม่ำเสมอ พร้อมระบบติดตามและวงจรข้อเสนอแนะสำหรับรอบถัดไป" },
    ],
    technicalFocus: [
      "ลดเวลาเตรียมโครงการใหม่ด้วยมาตรฐานเดียวกันทั้งทีม",
      "ลดความเสี่ยงจากการเชื่อมต่อบริการที่ไม่สอดคล้องกัน",
      "ทำให้ทีมใหม่เริ่มงานได้เร็วขึ้นโดยไม่ต้องพึ่งความรู้เฉพาะบุคคล",
      "สร้างรอบการปล่อยงานที่คาดการณ์ได้ในสภาพแวดล้อมจริง",
    ],
    resourceCards: [
      { title: "Developer Docs", body: "คู่มือเริ่มต้น คำสั่งสำคัญ และเอกสารอ้างอิงเชิงเทคนิค", href: "https://docs.gumon.io/" },
      { title: "Knowledge Base", body: "แนวปฏิบัติและแนวทางแก้ปัญหาเชิงปฏิบัติการ", href: "https://wiki.gumon.io/" },
      { title: "Gumon Work", body: "Project/Task management สำหรับทีมพัฒนาและทีมส่งมอบ", href: "https://work.gumon.io/" },
      { title: "GitHub", body: "source code, templates และตัวอย่างโปรเจกต์สำหรับทีมพัฒนา", href: "https://github.com/gumon-tech" },
    ],
  },
  en: {
    title: "Developers",
    description: "A delivery path for engineering teams that need faster starts and consistent standards.",
    crumb: "Developers",
    kicker: "Developers / Build Path",
    heading: "A practical path for engineering teams to deliver faster with consistent standards",
    intro:
      "This page outlines an execution path for teams moving from repeated project bootstrapping to a shared baseline that supports repeatable delivery.",
    phaseLabel: "Phase",
    focusKicker: "Engineering Focus",
    focusHeading: "What teams should gain from the platform",
    resourcesKicker: "Core Resources",
    resourcesHeading: "Start with tools teams use in real delivery",
    nextKicker: "Next Step",
    nextHeading: "Need a baseline assessment before migration",
    nextBody:
      "If your team already operates legacy systems and needs phased migration planning, send your current context and we can assess a suitable baseline.",
    platformCta: "View Platform Overview",
    contactCta: "Talk to Technical Team",
    phases: [
      { title: "Bootstrap", body: "Start from a standard template, set shared defaults, and define an initial engineering baseline." },
      { title: "Integrate", body: "Integrate services through explicit contracts and quality checks before merge." },
      { title: "Operate", body: "Release consistently with observability and feedback loops for the next cycle." },
    ],
    technicalFocus: [
      "Reduce setup time for new projects with shared standards.",
      "Lower integration risk across inconsistent services.",
      "Speed up onboarding without relying on individual tribal knowledge.",
      "Establish predictable release cadence in production-like environments.",
    ],
    resourceCards: [
      { title: "Developer Docs", body: "Quickstart guides, critical commands, and technical references.", href: "https://docs.gumon.io/" },
      { title: "Knowledge Base", body: "Operational playbooks and practical troubleshooting guidance.", href: "https://wiki.gumon.io/" },
      { title: "Gumon Work", body: "Project and task management for development and delivery teams.", href: "https://work.gumon.io/" },
      { title: "GitHub", body: "Source code, templates, and project examples for engineering teams.", href: "https://github.com/gumon-tech" },
    ],
  },
};

async function getLocaleFromParams(params?: Promise<{ locale?: string }>): Promise<Locale> {
  if (!params) return resolveLocale("th");
  const resolved = await params;
  return resolveLocale(resolved.locale);
}

function getCopy(locale: Locale): DevelopersCopy {
  return locale === "th" ? developersCopyByLocale.th : developersCopyByLocale.en;
}

export async function generateMetadata({ params }: { params?: Promise<{ locale?: string }> }): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const localized = localizedMeta[locale] ?? localizedMeta.en ?? localizedMeta.th!;
  return buildPageMetadata({ title: localized.title, description: localized.description, path: "/developers" });
}

export default async function DevelopersPage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocaleFromParams(params);
  const copy = getCopy(locale);
  const fallbackNotice = locale !== "th" && locale !== "en" ? fallbackNoticeByLocale[locale] : null;

  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: copy.crumb, path: "/developers" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">{copy.kicker}</p>
          <h1 className="ui-h1">{copy.heading}</h1>
          <p className="mt-6 max-w-3xl ui-p">{copy.intro}</p>
        </Reveal>

        {fallbackNotice ? <div className="mt-6 rounded-xl border border-line/45 bg-bg1/55 p-4 text-sm text-mist">{fallbackNotice}</div> : null}

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {copy.phases.map((phase, index) => (
            <Reveal key={phase.title} delay={index * 70}>
              <div className="route-card h-full">
                <p className="ui-kicker">{copy.phaseLabel}</p>
                <h2 className="mt-3 ui-h3">{phase.title}</h2>
                <p className="mt-2 text-sm text-mist leading-relaxed">{phase.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">{copy.focusKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.focusHeading}</h2>
          <ul className="mt-5 grid gap-2 feature-list">
            {copy.technicalFocus.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 card p-7 shadow-soft">
            <p className="ui-kicker">{copy.resourcesKicker}</p>
            <h2 className="mt-3 ui-h3 md:text-2xl">{copy.resourcesHeading}</h2>
            <div className="mt-5 grid md:grid-cols-2 2xl:grid-cols-4 gap-4">
              {copy.resourceCards.map((item) => (
                <TrackedLink key={item.href} href={item.href} target="_blank" rel="noreferrer" className="route-card block h-full">
                  <h3 className="ui-h3">{item.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
                </TrackedLink>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 card p-7 shadow-soft">
            <p className="ui-kicker">{copy.nextKicker}</p>
            <h2 className="mt-3 ui-h3">{copy.nextHeading}</h2>
            <p className="mt-3 text-sm text-mist leading-relaxed">{copy.nextBody}</p>
            <div className="mt-6 flex flex-col gap-3">
              <TrackedLink href="/platform" className="btn-secondary">{copy.platformCta}</TrackedLink>
              <TrackedLink href="/contact" className="btn-primary">{copy.contactCta}</TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
