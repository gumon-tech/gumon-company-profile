import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";
import { resolveLocale, type Locale } from "@/lib/i18n";
import { pickLocalizedContent } from "@/lib/i18nContent";
import { getFallbackNotice } from "@/content/locales/fallbackNotice";
import { platformContent, platformMeta } from "@/content/locales/platform";

async function getLocaleFromParams(params?: Promise<{ locale?: string }>): Promise<Locale> {
  if (!params) return resolveLocale("th");
  const resolved = await params;
  return resolveLocale(resolved.locale);
}

export async function generateMetadata({ params }: { params?: Promise<{ locale?: string }> }): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const localized = pickLocalizedContent(locale, platformMeta);
  return buildPageMetadata({ title: localized.title, description: localized.description, path: "/platform" });
}

export default async function PlatformPage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocaleFromParams(params);
  const copy = pickLocalizedContent(locale, platformContent);
  const fallbackNotice = getFallbackNotice(locale);

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
              <TrackedLink href="/assets/from-gumon/gumon_arc.png" target="_blank" rel="noreferrer" className="inline-flex items-center text-xs md:text-sm text-ink underline underline-offset-4 decoration-accent hover:decoration-ink">
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
