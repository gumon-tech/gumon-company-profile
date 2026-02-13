import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import { Sarabun, Space_Grotesk } from "next/font/google";
import NavLink from "@/components/NavLink";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import TrackedLink from "@/components/TrackedLink";
import MobileStickyCta from "@/components/MobileStickyCta";
import ToolsMenu from "@/components/ToolsMenu";
import HeaderScrollBehavior from "@/components/HeaderScrollBehavior";
import MobileMenu from "@/components/MobileMenu";
import BackToTopButton from "@/components/BackToTopButton";
import AnalyticsBootstrap from "@/components/AnalyticsBootstrap";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import FooterTagline from "@/components/FooterTagline";
import FooterLegalLine from "@/components/FooterLegalLine";
import LocaleDocumentAttributes from "@/components/LocaleDocumentAttributes";
import AutoLocaleRedirect from "@/components/AutoLocaleRedirect";
import { layoutCopy } from "@/content/locales/layout";
import { footerSectionLabels } from "@/content/locales/navigation";
import { companyInfo } from "@/lib/companyInfo";
import { defaultLocale, supportedLocales } from "@/lib/i18n";
import { getLocaleMeta } from "@/lib/localeMeta";
import {
  communityLinks,
  legalLinks,
  primaryNavItems,
  supportLinks,
  workToolLinks,
} from "@/lib/navigation";

const sarabun = Sarabun({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sarabun",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://gumon.io"),
  title: {
    default: layoutCopy.metadata.defaultTitle,
    template: layoutCopy.metadata.titleTemplate,
  },
  icons: {
    icon: "/assets/logo/gumon-mark.png",
    shortcut: "/assets/logo/gumon-mark.png",
    apple: "/assets/logo/gumon-mark.png",
  },
  description: layoutCopy.metadata.description,
  alternates: {
    canonical: "/",
    languages: Object.fromEntries(supportedLocales.map((locale) => [locale, `/${locale}`])),
  },
  keywords: [...layoutCopy.metadata.keywords],
  openGraph: {
    type: "website",
    siteName: layoutCopy.siteName,
    title: layoutCopy.siteName,
    description: layoutCopy.metadata.openGraphDescription,
    url: "/",
    images: [
      {
        url: "/assets/social/og-share-en.png",
        alt: "Gumon Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: layoutCopy.siteName,
    description: layoutCopy.metadata.twitterDescription,
    images: ["/assets/social/og-share-en.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const defaultLocaleMeta = getLocaleMeta(defaultLocale);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gumon.io";
  const normalizedSiteUrl = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
  const shareUrl = `${normalizedSiteUrl}/en`;
  const shareMessage = "Open Platform for Delivery Teams. Deliver faster with clear standards and predictable outcomes.";
  const encodedShareUrl = encodeURIComponent(shareUrl);
  const encodedShareMessage = encodeURIComponent(shareMessage);
  const encodedShareText = encodeURIComponent(`${shareMessage} ${shareUrl}`);
  const encodedFacebookQuote = encodeURIComponent(shareMessage);
  type SocialShareLink = {
    href: string;
    label: string;
    icon?: string;
    iconClassName?: string;
    symbol?: string;
  };
  const socialShareLinks: SocialShareLink[] = [
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl}&quote=${encodedFacebookQuote}`,
      icon: "/assets/social/facebook.svg",
      label: "Share on Facebook",
      iconClassName: "brightness-0 invert",
    },
    {
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedShareUrl}`,
      icon: "/assets/social/linkedin.svg",
      label: "Share on LinkedIn",
      iconClassName: "brightness-0 invert",
    },
    {
      href: `https://social-plugins.line.me/lineit/share?url=${encodedShareUrl}`,
      icon: "/assets/social/line.svg",
      label: "Share on LINE",
      iconClassName: "brightness-0 invert",
    },
    {
      href: `https://api.whatsapp.com/send?text=${encodedShareText}`,
      icon: "/assets/social/whatsapp.svg",
      label: "Share on WhatsApp",
      iconClassName: "brightness-0 invert",
    },
    {
      href: `https://twitter.com/intent/tweet?text=${encodedShareMessage}&url=${encodedShareUrl}`,
      label: "Share on X",
      symbol: "X",
    },
    {
      href: `https://t.me/share/url?url=${encodedShareUrl}&text=${encodedShareMessage}`,
      label: "Share on Telegram",
      symbol: "TG",
    },
  ];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: layoutCopy.siteName,
        legalName: companyInfo.legalName,
        url: siteUrl,
        logo: `${siteUrl}/assets/logo/gumon-white.png`,
        taxID: companyInfo.registrationNumber,
        address: {
          "@type": "PostalAddress",
          streetAddress: "33/4 Moo 11, The Nine Towers, Tower A, Floor 35, Rama 9 Road",
          addressLocality: "Huai Khwang",
          addressRegion: "Bangkok",
          postalCode: "10310",
          addressCountry: "TH",
        },
        sameAs: [
          "https://www.linkedin.com/company/gumon",
          "https://facebook.com/gumon.tech",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "contact@gumon.io",
            telephone: "+66 61 472 2055",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: layoutCopy.siteName,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "th-TH",
      },
    ],
  };

  return (
    <html
      lang={defaultLocaleMeta.htmlLang}
      dir={defaultLocaleMeta.dir}
      className={`${sarabun.variable} ${spaceGrotesk.variable}`}
    >
      <body data-mode="institutional">
        <AutoLocaleRedirect />
        <LocaleDocumentAttributes />
        <HeaderScrollBehavior />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <div className="bg-veil" />
        <div className="grid-overlay" />

        <header className="site-header sticky top-0 z-[90] border-b border-line/60 bg-bg0/92 shadow-[0_10px_24px_rgba(3,6,12,0.45)] supports-[backdrop-filter]:bg-bg0/84 supports-[backdrop-filter]:backdrop-blur-xl">
          <div className="ui-container h-16 lg:h-[72px] flex items-center justify-between gap-3">
            <TrackedLink href="/" className="flex items-center gap-3">
              <span className="logo-swap" aria-label={layoutCopy.logoMarkAriaLabel}>
                <Image src="/assets/logo/gumon-white.png" alt="Gumon" width={36} height={36} sizes="36px" className="logo-inst" />
                <Image src="/assets/logo/gumon-slate.png" alt="Gumon" width={36} height={36} sizes="36px" className="logo-field" />
                <Image src="/assets/logo/gumon-olive.png" alt="Gumon" width={36} height={36} sizes="36px" className="logo-lab" />
              </span>
              <div className="leading-tight">
                <div className="text-[13px] sm:text-sm font-semibold">{layoutCopy.siteName}</div>
                <div className="hidden lg:block text-[10px] tracking-[0.24em] uppercase text-mist">
                  {layoutCopy.siteTagline}
                </div>
              </div>
            </TrackedLink>

            <nav className="hidden xl:flex items-center gap-4 text-sm text-ink/90">
              {primaryNavItems.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} />
              ))}
            </nav>

            <MobileMenu />

            <div className="hidden xl:flex items-center gap-2">
              <LanguageSwitcher />
              <ToolsMenu />
              <TrackedLink href="/contact" className="btn-primary">
                {layoutCopy.contactButton}
              </TrackedLink>
            </div>
          </div>
        </header>

        <main>{children}</main>
        <BackToTopButton />
        <MobileStickyCta />

        <footer className="border-t border-line/20">
          <div className="ui-container py-12 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <TrackedLink href="/" className="text-sm font-semibold hover:text-ink/90 transition">
                {layoutCopy.siteName}
              </TrackedLink>
              <p className="mt-3 text-sm text-mist leading-relaxed max-w-[32ch]">
                <FooterTagline />
              </p>
            </div>

            <div className="lg:col-span-9 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 xl:gap-8 text-sm">
              <div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-mist">{footerSectionLabels.platform}</div>
                <div className="mt-3 grid gap-2">
                  {primaryNavItems.slice(0, 2).map((item) => (
                    <TrackedLink key={item.href} href={item.href} className="text-mist hover:text-ink transition">
                      {item.label}
                    </TrackedLink>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-mist">{footerSectionLabels.audience}</div>
                <div className="mt-3 grid gap-2">
                  {primaryNavItems.slice(2, 4).map((item) => (
                    <TrackedLink key={item.href} href={item.href} className="text-mist hover:text-ink transition">
                      {item.label}
                    </TrackedLink>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-mist">{footerSectionLabels.company}</div>
                <div className="mt-3 grid gap-2">
                  {primaryNavItems.slice(4).map((item) => (
                    <TrackedLink key={item.href} href={item.href} className="text-mist hover:text-ink transition">
                      {item.label}
                    </TrackedLink>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-mist">{footerSectionLabels.tools}</div>
                <div className="mt-3 grid gap-2">
                  {workToolLinks.map((item) => (
                    <TrackedLink key={item.href} href={item.href} target="_blank" rel="noreferrer" className="text-mist hover:text-ink transition">
                      {item.label}
                    </TrackedLink>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-mist">{footerSectionLabels.community}</div>
                <div className="mt-3 grid gap-2">
                  {communityLinks.map((item) => (
                    <TrackedLink key={item.href} href={item.href} target="_blank" rel="noreferrer" className="text-mist hover:text-ink transition">
                      {item.label}
                    </TrackedLink>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-mist">{footerSectionLabels.support}</div>
                <div className="mt-3 grid gap-2">
                  {supportLinks.map((item) => (
                    <TrackedLink key={item.href} href={item.href} className="text-mist hover:text-ink transition">
                      {item.label}
                    </TrackedLink>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-12 hr" />

            <div className="lg:col-span-12 grid gap-4 text-xs text-mist md:grid-cols-[minmax(260px,1fr)_minmax(0,2fr)] md:items-end">
              <div>
                © {new Date().getFullYear()}{" "}
                <TrackedLink href="/" className="hover:text-ink transition">
                  {layoutCopy.siteName}
                </TrackedLink>
                . {layoutCopy.allRightsReserved}
                <div className="mt-1">
                  <FooterLegalLine />
                </div>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <div className="flex flex-wrap items-center gap-2 md:justify-end">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-mist">Share</span>
                  {socialShareLinks.map((item) => (
                    <TrackedLink
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line/70 bg-bg0/90 hover:border-ink/40 hover:bg-bg1 transition"
                    >
                      {item.icon ? (
                        <Image
                          src={item.icon}
                          alt=""
                          width={17}
                          height={17}
                          aria-hidden
                          className={item.iconClassName}
                        />
                      ) : (
                        <span className="text-[11px] font-semibold tracking-[0.04em] text-ink/90" aria-hidden>
                          {item.symbol}
                        </span>
                      )}
                    </TrackedLink>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:justify-end">
                  <TrackedLink href="/faq" className="hover:text-ink transition">{layoutCopy.faqLabel}</TrackedLink>
                  <TrackedLink href="/company#legal-information" className="hover:text-ink transition">{layoutCopy.companyInfoLink}</TrackedLink>
                  {legalLinks.map((item) => (
                    <TrackedLink key={item.href} href={item.href} className="hover:text-ink transition">
                      {item.label}
                    </TrackedLink>
                  ))}
                  <TrackedLink href="mailto:contact@gumon.io" className="hover:text-ink transition">{layoutCopy.contactEmail}</TrackedLink>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <CookieConsentBanner />
        <AnalyticsBootstrap />
      </body>
    </html>
  );
}
