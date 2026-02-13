import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";
import { resolveLocale, type Locale } from "@/lib/i18n";
import { pickLocalizedContent } from "@/lib/i18nContent";
import { getFallbackNotice } from "@/content/locales/fallbackNotice";
import { homeContent, partners } from "@/content/locales/home";

async function getLocale(params?: Promise<{ locale?: string }>): Promise<Locale> {
  if (!params) return resolveLocale("th");
  const resolved = await params;
  return resolveLocale(resolved.locale);
}

export async function generateMetadata({ params }: { params?: Promise<{ locale?: string }> }): Promise<Metadata> {
  const locale = await getLocale(params);
  const copy = pickLocalizedContent(locale, homeContent);
  return buildPageMetadata({ title: copy.title, description: copy.description, path: "/" });
}

export default async function HomePage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocale(params);
  const copy = pickLocalizedContent(locale, homeContent);
  const fallbackNotice = getFallbackNotice(locale);

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
