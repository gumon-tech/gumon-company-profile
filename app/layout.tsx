import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
import { companyInfo } from "@/lib/companyInfo";
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
    "แพลตฟอร์มเทคโนโลยีแบบเปิดสำหรับองค์กรที่ต้องการส่งมอบซอฟต์แวร์ได้เร็วขึ้น มาตรฐานชัดเจน และขยายระบบได้อย่างยั่งยืน",
  alternates: {
    canonical: "/",
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
      "Open Platform ที่ออกแบบเพื่อการส่งมอบจริง เชื่อมทีมเทคโนโลยี พาร์ตเนอร์ และการเติบโตเชิงธุรกิจเข้าด้วยกัน",
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
      "Open Platform ที่ออกแบบเพื่อการส่งมอบจริง เชื่อมทีมเทคโนโลยี พาร์ตเนอร์ และการเติบโตเชิงธุรกิจเข้าด้วยกัน",
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
          streetAddress: "33/4 หมู่ 11 เดอะไนน์ทาวเวอร์ ตึก A ชั้น 35 พระราม 9",
          addressLocality: "ห้วยขวาง",
          addressRegion: "กรุงเทพมหานคร",
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
    <html lang="th" className={`${sarabun.variable} ${spaceGrotesk.variable}`}>
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
            <Link href="/" className="flex items-center gap-3">
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
            </Link>

            <nav className="hidden xl:flex items-center gap-4 text-sm text-ink/90">
              {primaryNavItems.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} />
              ))}
            </nav>

            <MobileMenu />

            <div className="hidden xl:flex items-center gap-2">
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
              <Link href="/" className="text-sm font-semibold hover:text-ink/90 transition">
                Gumon Technology
              </Link>
              <p className="mt-3 text-sm text-mist leading-relaxed max-w-[32ch]">
                Open Platform สำหรับองค์กรที่ต้องการส่งมอบงานเทคโนโลยีได้เร็วขึ้น พร้อมมาตรฐานที่ขยายได้ในระยะยาว
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
                <Link href="/" className="hover:text-ink transition">
                  Gumon Technology
                </Link>
                . All rights reserved.
                <div className="mt-1">
                  {companyInfo.legalName} | เลขทะเบียนนิติบุคคล {companyInfo.registrationNumber}
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
