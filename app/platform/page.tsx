import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";
import { resolveLocale, type Locale } from "@/lib/i18n";

type PlatformCopy = {
  title: string;
  description: string;
  crumb: string;
  kicker: string;
  heading: string;
  intro: string;
  layerLabel: string;
  openImage: string;
  imageCaption: string;
  coreKicker: string;
  coreHeading: string;
  principlesKicker: string;
  principlesHeading: string;
  developersCta: string;
  contactCta: string;
  architectureLayers: { title: string; body: string }[];
  coreServices: string[];
  platformPrinciples: string[];
};

const localizedMeta: Partial<Record<Locale, { title: string; description: string }>> = {
  th: {
    title: "Platform",
    description:
      "ภาพรวม Gumon Platform: สถาปัตยกรรม 3 ชั้น, core services และ workflow มาตรฐานสำหรับทีมที่ต้องการส่งมอบระบบแบบต่อเนื่อง",
  },
  en: {
    title: "Platform",
    description:
      "Gumon Platform overview: three-layer architecture, reusable core services, and delivery standards.",
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

const platformCopyByLocale: Record<"th" | "en", PlatformCopy> = {
  th: {
    title: "Platform",
    description:
      "ภาพรวม Gumon Platform: สถาปัตยกรรม 3 ชั้น, core services และ workflow มาตรฐานสำหรับทีมที่ต้องการส่งมอบระบบแบบต่อเนื่อง",
    crumb: "Platform",
    kicker: "Platform / Architecture",
    heading: "สถาปัตยกรรมที่ทำให้ทีมพัฒนาเริ่มเร็ว ส่งมอบไว และควบคุมมาตรฐานได้",
    intro:
      "Gumon Platform ถูกออกแบบเพื่อแก้ปัญหาโครงสร้างซ้ำซ้อนที่เกิดขึ้นในทุกโครงการ โดยทำให้ทีมเริ่มจากมาตรฐานตั้งต้นที่พร้อมใช้งานและขยายต่อได้ในระยะยาว",
    layerLabel: "Layer",
    openImage: "เปิดภาพ Architecture ขนาดเต็ม",
    imageCaption:
      "Architecture reference นี้ใช้เพื่อจัดแนวทางคิดร่วมกันระหว่างทีม ไม่ได้บังคับรูปแบบพัฒนาเพียงแบบเดียว แต่ช่วยลดความคลาดเคลื่อนในการออกแบบและส่งมอบ",
    coreKicker: "Core Services",
    coreHeading: "องค์ประกอบที่ทีมสามารถนำไปใช้ซ้ำได้ทันที",
    principlesKicker: "Platform Principles",
    principlesHeading: "หลักการออกแบบที่ทำให้ระบบไม่พังเมื่อทีมโต",
    developersCta: "ไปที่ Developer Path",
    contactCta: "คุยโจทย์กับทีม",
    architectureLayers: [
      { title: "Application Layer", body: "จัดการเวิร์กโฟลว์ธุรกิจและบริการฝั่งผู้ใช้งาน ให้ปรับเปลี่ยนได้เร็วโดยไม่ทำให้ระบบรวมเปราะบาง" },
      { title: "API Service Layer", body: "กำหนดสัญญา API และรูปแบบการเชื่อมต่อกลาง เพื่อให้หลายทีมทำงานร่วมกันได้อย่างคาดการณ์ได้" },
      { title: "Data Stream Layer", body: "รองรับข้อมูลเหตุการณ์ การประมวลผลแบบไม่รอคิว และการติดตามระบบสำหรับงานปริมาณสูง" },
    ],
    coreServices: [
      "Gumon Core สำหรับโครงสร้างเริ่มต้นของระบบ",
      "Auth / Access Control / Profile สำหรับอัตลักษณ์และสิทธิ์การเข้าถึง",
      "Notification / Schedule / Storage สำหรับบริการพื้นฐานที่ใช้ซ้ำได้",
      "CLI commands สำหรับเริ่มระบบ ตั้งค่า รันงาน และขยายระบบอย่างเป็นมาตรฐาน",
    ],
    platformPrinciples: [
      "Open core ใช้งานได้จริงและตรวจสอบได้",
      "มาตรฐานเดียวกันทั้งทีมพัฒนา ทีมปฏิบัติการ และทีมส่งมอบ",
      "ออกแบบเพื่อรองรับการเติบโตโดยลดงานตั้งค่าซ้ำ",
      "เอกสารและแนวปฏิบัติเป็นส่วนหนึ่งของผลิตภัณฑ์ ไม่ใช่ภาคผนวก",
    ],
  },
  en: {
    title: "Platform",
    description: "Gumon Platform overview: three-layer architecture, reusable core services, and delivery standards.",
    crumb: "Platform",
    kicker: "Platform / Architecture",
    heading: "Architecture that helps teams start faster, ship consistently, and keep standards under control",
    intro:
      "Gumon Platform is designed to reduce repeated structural setup across projects by giving teams a production-ready baseline they can extend over time.",
    layerLabel: "Layer",
    openImage: "Open full Architecture image",
    imageCaption:
      "This architecture reference aligns cross-team design decisions. It does not force a single implementation style, but reduces delivery drift.",
    coreKicker: "Core Services",
    coreHeading: "Reusable building blocks teams can adopt immediately",
    principlesKicker: "Platform Principles",
    principlesHeading: "Design principles that keep systems stable as teams scale",
    developersCta: "Go to Developer Path",
    contactCta: "Discuss with Team",
    architectureLayers: [
      { title: "Application Layer", body: "Handles business workflows and user-facing services with flexibility and low system fragility." },
      { title: "API Service Layer", body: "Defines shared API contracts and integration standards for predictable cross-team collaboration." },
      { title: "Data Stream Layer", body: "Supports high-throughput event streams, asynchronous processing, and observability." },
    ],
    coreServices: [
      "Gumon Core for baseline system structure",
      "Auth / Access Control / Profile for identity and authorization",
      "Notification / Schedule / Storage as reusable foundational services",
      "CLI commands for bootstrap, configuration, operations, and extension",
    ],
    platformPrinciples: [
      "Open core that is practical and auditable",
      "Shared standards across engineering, operations, and delivery teams",
      "Scale-ready architecture with minimal repetitive setup",
      "Documentation and practices are part of the product, not appendices",
    ],
  },
};

async function getLocaleFromParams(params?: Promise<{ locale?: string }>): Promise<Locale> {
  if (!params) return resolveLocale("th");
  const resolved = await params;
  return resolveLocale(resolved.locale);
}

function getCopy(locale: Locale): PlatformCopy {
  return locale === "th" ? platformCopyByLocale.th : platformCopyByLocale.en;
}

export async function generateMetadata({ params }: { params?: Promise<{ locale?: string }> }): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const localized = localizedMeta[locale] ?? localizedMeta.en ?? localizedMeta.th!;
  return buildPageMetadata({ title: localized.title, description: localized.description, path: "/platform" });
}

export default async function PlatformPage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocaleFromParams(params);
  const copy = getCopy(locale);
  const fallbackNotice = locale !== "th" && locale !== "en" ? fallbackNoticeByLocale[locale] : null;

  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: copy.crumb, path: "/platform" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">{copy.kicker}</p>
          <h1 className="ui-h1">{copy.heading}</h1>
          <p className="mt-6 max-w-3xl ui-p">{copy.intro}</p>
        </Reveal>

        {fallbackNotice ? <div className="mt-6 rounded-xl border border-line/45 bg-bg1/55 p-4 text-sm text-mist">{fallbackNotice}</div> : null}

        <div className="mt-10 grid lg:grid-cols-12 gap-5 lg:items-stretch">
          <div className="lg:col-span-8 card p-4 shadow-soft h-full">
            <div className="rounded-xl border border-line/40 bg-bg1 overflow-hidden">
              <Image
                src="/assets/from-gumon/gumon_arc.png"
                alt="Gumon platform architecture"
                width={1600}
                height={900}
                sizes="(min-width: 1024px) 760px, 94vw"
                priority
                className="w-full h-auto object-contain lg:h-[56vh] lg:object-cover lg:object-center"
              />
            </div>
            <div className="mt-3 px-1">
              <TrackedLink
                href="/assets/from-gumon/gumon_arc.png"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-xs md:text-sm text-ink underline underline-offset-4 decoration-accent hover:decoration-ink"
              >
                {copy.openImage}
              </TrackedLink>
            </div>
            <p className="mt-4 px-1 text-xs md:text-sm text-mist leading-relaxed">{copy.imageCaption}</p>
          </div>

          <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:h-full lg:grid-rows-3">
            {copy.architectureLayers.map((layer, index) => (
              <Reveal key={layer.title} delay={index * 70} className="h-full">
                <div className="route-card h-full">
                  <p className="ui-kicker">{copy.layerLabel}</p>
                  <h2 className="mt-3 ui-h3">{layer.title}</h2>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{layer.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-5">
          <div className="card p-7 shadow-soft">
            <p className="ui-kicker">{copy.coreKicker}</p>
            <h2 className="mt-3 ui-h2">{copy.coreHeading}</h2>
            <ul className="mt-5 grid gap-2 feature-list">
              {copy.coreServices.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <div className="card p-7 shadow-soft">
            <p className="ui-kicker">{copy.principlesKicker}</p>
            <h2 className="mt-3 ui-h2">{copy.principlesHeading}</h2>
            <ul className="mt-5 grid gap-2 feature-list">
              {copy.platformPrinciples.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <TrackedLink href="/developers" className="btn-primary">{copy.developersCta}</TrackedLink>
              <TrackedLink href="/contact" className="btn-secondary">{copy.contactCta}</TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
