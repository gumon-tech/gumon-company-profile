import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";
import { resolveLocale, type Locale } from "@/lib/i18n";
import { pickLocalizedContent } from "@/lib/i18nContent";
import { getFallbackNotice } from "@/content/locales/fallbackNotice";
import { partnerNetwork, partnersContent } from "@/content/locales/partners";

async function getLocale(params?: Promise<{ locale?: string }>): Promise<Locale> {
  if (!params) return resolveLocale("th");
  const resolved = await params;
  return resolveLocale(resolved.locale);
}

export async function generateMetadata({ params }: { params?: Promise<{ locale?: string }> }): Promise<Metadata> {
  const locale = await getLocale(params);
  const copy = pickLocalizedContent(locale, partnersContent);
  return buildPageMetadata({ title: copy.title, description: copy.description, path: "/partners" });
}

export default async function PartnersPage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocale(params);
  const copy = pickLocalizedContent(locale, partnersContent);
  const fallbackNotice = getFallbackNotice(locale);

  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: copy.crumb, path: "/partners" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">{copy.kicker}</p>
          <h1 className="ui-h1">{copy.heading}</h1>
          <p className="mt-6 max-w-3xl ui-p">{copy.intro}</p>
        </Reveal>

        {fallbackNotice ? <div className="mt-6 rounded-xl border border-line/45 bg-bg1/55 p-4 text-sm text-mist">{fallbackNotice}</div> : null}

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {copy.modelBlocks.map((block, index) => (
            <Reveal key={block.title} delay={index * 70}>
              <div className="route-card h-full">
                <p className="ui-kicker">{copy.modelLabel}</p>
                <h2 className="mt-3 ui-h3">{block.title}</h2>
                <p className="mt-2 text-sm text-mist leading-relaxed">{block.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">{copy.readinessKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.readinessHeading}</h2>
          <ul className="mt-5 grid gap-2 feature-list">{copy.readiness.map((item) => <li key={item}>- {item}</li>)}</ul>
        </div>

        <div className="mt-12">
          <p className="ui-kicker">{copy.governanceKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.governanceHeading}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {copy.governance.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="route-card h-full">
                  <h3 className="ui-h3">{item.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="ui-kicker">{copy.trustKicker}</p>
              <h2 className="mt-2 ui-h2">{copy.trustHeading}</h2>
            </div>
            <TrackedLink href="/company" className="btn-secondary w-fit">{copy.companyCta}</TrackedLink>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-3">
            {copy.trustSignals.map((item) => (
              <div key={item.label} className="glass rounded-xl border border-line/35 px-4 py-4">
                <div className="text-[10px] tracking-[0.18em] uppercase text-mist">{item.label}</div>
                <div className="mt-2 text-xl font-semibold text-ink">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {partnerNetwork.map((partner) => (
              <TrackedLink key={partner.name} href={partner.website} target="_blank" rel="noreferrer" className="partner-item">
                <div className={`partner-logo-badge ${partner.logoFrameClass ?? "partner-logo-badge-circle"}`}>
                  <Image src={partner.logo} alt={`${partner.name} logo`} width={112} height={40} sizes="112px" loading="lazy" decoding="async" className={`partner-logo ${partner.logoScaleClass}`} />
                </div>
                <div>
                  <div className="text-sm font-medium leading-snug text-ink">{partner.name}</div>
                  <div className="text-xs text-mist mt-0.5">{partner.country}</div>
                </div>
              </TrackedLink>
            ))}
          </div>
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">{copy.casesKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.casesHeading}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {copy.cases.map((item) => (
              <div key={item.title} className="route-card h-full">
                <div className="text-xs tracking-[0.16em] uppercase text-mist">{item.title}</div>
                <p className="mt-3 text-sm text-mist leading-relaxed"><span className="text-ink">Problem:</span> {item.problem}</p>
                <p className="mt-2 text-sm text-mist leading-relaxed"><span className="text-ink">Approach:</span> {item.approach}</p>
                <p className="mt-2 text-sm text-mist leading-relaxed"><span className="text-ink">Outcome:</span> {item.outcome}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 card p-7 shadow-soft">
            <p className="ui-kicker">{copy.resourcesKicker}</p>
            <h2 className="mt-3 ui-h3 md:text-2xl">{copy.resourcesHeading}</h2>
            <div className="mt-5 grid md:grid-cols-2 2xl:grid-cols-4 gap-4">
              <TrackedLink href="https://wiki.gumon.io/" target="_blank" rel="noreferrer" className="route-card block h-full"><h3 className="ui-h3">Knowledge Base</h3><p className="mt-2 text-sm text-mist leading-relaxed">Delivery guidance and operational references.</p></TrackedLink>
              <TrackedLink href="https://docs.gumon.io/" target="_blank" rel="noreferrer" className="route-card block h-full"><h3 className="ui-h3">Technical Docs</h3><p className="mt-2 text-sm text-mist leading-relaxed">Technical references for engineering teams.</p></TrackedLink>
              <TrackedLink href="https://work.gumon.io/" target="_blank" rel="noreferrer" className="route-card block h-full"><h3 className="ui-h3">Gumon Work</h3><p className="mt-2 text-sm text-mist leading-relaxed">Project and task tracking for aligned execution.</p></TrackedLink>
              <TrackedLink href="https://dkscenter.gumon.io/th" target="_blank" rel="noreferrer" className="route-card block h-full"><h3 className="ui-h3">Partner Training</h3><p className="mt-2 text-sm text-mist leading-relaxed">Courses and workshops for partner enablement.</p></TrackedLink>
            </div>
          </div>

          <div className="lg:col-span-5 card p-7 shadow-soft">
            <p className="ui-kicker">{copy.nextKicker}</p>
            <h2 className="mt-3 ui-h3">{copy.nextHeading}</h2>
            <p className="mt-3 text-sm text-mist leading-relaxed">{copy.nextBody}</p>
            <div className="mt-6 flex flex-col gap-3">
              <TrackedLink href="/contact" className="btn-primary">{copy.contactCta}</TrackedLink>
              <TrackedLink href="/resources" className="btn-secondary">{copy.resourceCta}</TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
