import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import { getCompanyInfo } from "@/lib/companyInfo";
import { buildPageMetadata } from "@/lib/seo";
import { resolveLocale, type Locale } from "@/lib/i18n";
import { pickLocalizedContent } from "@/lib/i18nContent";
import { getFallbackNotice } from "@/content/locales/fallbackNotice";
import { companyContent } from "@/content/locales/company";

async function getLocale(params?: Promise<{ locale?: string }>): Promise<Locale> {
  if (!params) return resolveLocale("th");
  const resolved = await params;
  return resolveLocale(resolved.locale);
}

export async function generateMetadata({ params }: { params?: Promise<{ locale?: string }> }): Promise<Metadata> {
  const locale = await getLocale(params);
  const copy = pickLocalizedContent(locale, companyContent);
  return buildPageMetadata({ title: copy.title, description: copy.description, path: "/company" });
}

export default async function CompanyPage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocale(params);
  const copy = pickLocalizedContent(locale, companyContent);
  const fallbackNotice = getFallbackNotice(locale);
  const companyInfo = getCompanyInfo(locale);

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
