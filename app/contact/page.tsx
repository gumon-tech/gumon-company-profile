import type { Metadata } from "next";
import Image from "next/image";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import EmailContactCard from "@/components/EmailContactCard";
import { companyInfo } from "@/lib/companyInfo";
import { buildPageMetadata } from "@/lib/seo";
import { resolveLocale, type Locale } from "@/lib/i18n";
import { pickLocalizedContent } from "@/lib/i18nContent";
import { getFallbackNotice } from "@/content/locales/fallbackNotice";
import { contactContent, contactMeta, socialChannels } from "@/content/locales/contact";

async function getLocaleFromParams(params?: Promise<{ locale?: string }>): Promise<Locale> {
  if (!params) return resolveLocale("th");
  const resolved = await params;
  return resolveLocale(resolved.locale);
}

export async function generateMetadata({ params }: { params?: Promise<{ locale?: string }> }): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const localized = pickLocalizedContent(locale, contactMeta);
  return buildPageMetadata({ title: localized.title, description: localized.description, path: "/contact" });
}

export default async function ContactPage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocaleFromParams(params);
  const copy = pickLocalizedContent(locale, contactContent);
  const fallbackNotice = getFallbackNotice(locale);

  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: copy.crumb, path: "/contact" }]} />
      <div className="ui-container">
        <p className="ui-kicker">{copy.kicker}</p>
        <h1 className="ui-h1">{copy.heading}</h1>
        <p className="mt-6 max-w-2xl ui-p">{copy.intro}</p>

        {fallbackNotice ? <div className="mt-6 rounded-xl border border-line/45 bg-bg1/55 p-4 text-sm text-mist">{fallbackNotice}</div> : null}

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {copy.metrics.map((metric) => (
            <div key={metric.label} className="glass rounded-xl border border-line/35 p-4">
              <div className="text-[11px] tracking-[0.16em] uppercase text-mist">{metric.label}</div>
              <div className="mt-2 text-sm text-ink font-medium">{metric.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {copy.routes.map((item) => (
            <div key={item.title} className="route-card h-full">
              <h2 className="ui-h3">{item.title}</h2>
              <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
              <TrackedLink href={item.href} className="mt-5 inline-block text-sm text-ink underline underline-offset-4 decoration-accent hover:decoration-ink">
                {item.action}
              </TrackedLink>
            </div>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div id="contact-form" className="lg:col-span-7 card p-7 shadow-soft">
            <p className="ui-kicker">{copy.projectBriefKicker}</p>
            <h2 className="mt-3 ui-h2">{copy.projectBriefHeading}</h2>
            <p className="mt-3 text-sm text-mist leading-relaxed">{copy.projectBriefBody}</p>
            <ul className="mt-4 grid gap-2 text-sm text-mist">
              {copy.projectBriefItems.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-dashed border-line/45 bg-bg1/45 p-4 text-sm text-mist">{copy.projectBriefNote}</div>
            <div id="dsar-request" className="mt-4 rounded-xl border border-line/35 bg-bg1/55 p-4 text-sm text-mist scroll-mt-28">
              {copy.dsarIntro}{" "}
              <a href="mailto:data@gumon.io?subject=[DSAR]%20Data%20Subject%20Request" className="text-ink underline underline-offset-4 decoration-accent hover:decoration-ink transition">
                data@gumon.io
              </a>{" "}
              {copy.dsarSubjectPrefix} <span className="text-ink">[DSAR]</span>
            </div>
          </div>

          <div className="lg:col-span-5 card p-7 shadow-soft">
            <p className="ui-kicker">{copy.directContactKicker}</p>
            <h2 className="mt-3 ui-h3">{copy.directContactHeading}</h2>
            <div className="mt-4 grid gap-3 text-sm">
              <EmailContactCard email="contact@gumon.io" subject={copy.emailSubject} />
            </div>

            <div className="mt-6">
              <p className="ui-kicker">{copy.companyInfoKicker}</p>
              <div className="mt-3 card p-4 text-sm text-mist leading-relaxed">
                <div className="text-ink font-medium">{companyInfo.legalName}</div>
                <div className="mt-2">{companyInfo.address}</div>
                <div className="mt-2">{copy.registrationLabel} {companyInfo.registrationNumber}</div>
                <div>{copy.registeredAtLabel} {companyInfo.registeredAt}</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="ui-kicker">{copy.socialKicker}</p>
              <div className="mt-3 grid gap-3 text-sm">
                {socialChannels.map((item) => (
                  <TrackedLink key={item.name} href={item.href} target="_blank" rel="noreferrer" className="card p-4 hover:border-ink/30 transition flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full border border-line/40 bg-bg1 flex items-center justify-center">
                      <Image src={item.icon} alt={`${item.name} logo`} width={20} height={20} sizes="20px" loading="lazy" decoding="async" className="opacity-90 brightness-0 invert" />
                    </div>
                    <div>
                      <div className="text-[11px] tracking-[0.16em] uppercase text-mist">{item.name}</div>
                      <div className="mt-1 text-ink">{item.handle}</div>
                    </div>
                  </TrackedLink>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="ui-kicker">{copy.knowledgeKicker}</p>
              <div className="mt-3 flex flex-col gap-3">
                <TrackedLink href="https://docs.gumon.io/" target="_blank" rel="noreferrer" className="btn-secondary">{copy.docsLabel}</TrackedLink>
                <TrackedLink href="https://wiki.gumon.io/" target="_blank" rel="noreferrer" className="btn-secondary">{copy.kbLabel}</TrackedLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
