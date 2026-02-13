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
import { companyInfo } from "@/lib/companyInfo";
import { supportedLocales } from "@/lib/i18n";
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
    default: "Gumon Technology | Open Platform for Delivery Teams",
    template: "%s | Gumon Technology",
  },
  icons: {
    icon: "/assets/logo/gumon-mark.png",
    shortcut: "/assets/logo/gumon-mark.png",
    apple: "/assets/logo/gumon-mark.png",
  },
  description:
    "Open technology platform for organizations that need faster software delivery, clearer standards, and sustainable scaling.",
  alternates: {
    canonical: "/",
    languages: Object.fromEntries(supportedLocales.map((locale) => [locale, `/${locale}`])),
  },
  keywords: [
    "Gumon Technology",
    "Open Platform",
    "Platform Engineering",
    "Software Delivery",
    "Developer Platform",
    "Technology Ecosystem",
  ],
  openGraph: {
    type: "website",
    siteName: "Gumon Technology",
    title: "Gumon Technology",
    description:
      "An open platform designed for practical delivery, connecting technology teams, partners, and business growth.",
    url: "/",
    images: [
      {
        url: "/assets/from-gumon/gumon_arc.png",
        alt: "Gumon Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gumon Technology",
    description:
      "An open platform designed for practical delivery, connecting technology teams, partners, and business growth.",
    images: ["/assets/from-gumon/gumon_arc.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gumon.io";
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Gumon Technology",
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
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Gumon Technology",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "th-TH",
      },
    ],
  };

  return (
    <html lang="en" className={`${sarabun.variable} ${spaceGrotesk.variable}`}>
      <body data-mode="institutional">
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
              <span className="logo-swap" aria-label="Gumon mark">
                <Image src="/assets/logo/gumon-white.png" alt="Gumon" width={36} height={36} sizes="36px" className="logo-inst" />
                <Image src="/assets/logo/gumon-slate.png" alt="Gumon" width={36} height={36} sizes="36px" className="logo-field" />
                <Image src="/assets/logo/gumon-olive.png" alt="Gumon" width={36} height={36} sizes="36px" className="logo-lab" />
              </span>
              <div className="leading-tight">
                <div className="text-[13px] sm:text-sm font-semibold">Gumon Technology</div>
                <div className="hidden lg:block text-[10px] tracking-[0.24em] uppercase text-mist">
                  Open Source Platform Systems
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
                Contact
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
                Gumon Technology
              </TrackedLink>
              <p className="mt-3 text-sm text-mist leading-relaxed max-w-[32ch]">
                <FooterTagline />
              </p>
            </div>

            <div className="lg:col-span-9 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 xl:gap-8 text-sm">
              <div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-mist">Platform</div>
                <div className="mt-3 grid gap-2">
                  {primaryNavItems.slice(0, 2).map((item) => (
                    <TrackedLink key={item.href} href={item.href} className="text-mist hover:text-ink transition">
                      {item.label}
                    </TrackedLink>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-mist">Audience</div>
                <div className="mt-3 grid gap-2">
                  {primaryNavItems.slice(2, 4).map((item) => (
                    <TrackedLink key={item.href} href={item.href} className="text-mist hover:text-ink transition">
                      {item.label}
                    </TrackedLink>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-mist">Company</div>
                <div className="mt-3 grid gap-2">
                  {primaryNavItems.slice(4).map((item) => (
                    <TrackedLink key={item.href} href={item.href} className="text-mist hover:text-ink transition">
                      {item.label}
                    </TrackedLink>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-mist">Tools</div>
                <div className="mt-3 grid gap-2">
                  {workToolLinks.map((item) => (
                    <TrackedLink key={item.href} href={item.href} target="_blank" rel="noreferrer" className="text-mist hover:text-ink transition">
                      {item.label}
                    </TrackedLink>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-mist">Community</div>
                <div className="mt-3 grid gap-2">
                  {communityLinks.map((item) => (
                    <TrackedLink key={item.href} href={item.href} target="_blank" rel="noreferrer" className="text-mist hover:text-ink transition">
                      {item.label}
                    </TrackedLink>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-mist">Support</div>
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

            <div className="lg:col-span-12 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-mist">
              <div>
                © {new Date().getFullYear()}{" "}
                <TrackedLink href="/" className="hover:text-ink transition">
                  Gumon Technology
                </TrackedLink>
                . All rights reserved.
                <div className="mt-1">
                  <FooterLegalLine />
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <TrackedLink href="/faq" className="hover:text-ink transition">FAQ</TrackedLink>
                <TrackedLink href="/company#legal-information" className="hover:text-ink transition">Company Info</TrackedLink>
                {legalLinks.map((item) => (
                  <TrackedLink key={item.href} href={item.href} className="hover:text-ink transition">
                    {item.label}
                  </TrackedLink>
                ))}
                <TrackedLink href="mailto:contact@gumon.io" className="hover:text-ink transition">contact@gumon.io</TrackedLink>
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
