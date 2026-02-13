import type { Locale } from "@/lib/i18n";
import { translateDeep } from "@/lib/autoTranslate";

type MetadataCopy = {
  defaultTitle: string;
  titleTemplate: string;
  description: string;
  keywords: string[];
  openGraphDescription: string;
  twitterDescription: string;
};

type LayoutCopy = {
  siteName: string;
  siteTagline: string;
  contactButton: string;
  faqLabel: string;
  companyInfoLink: string;
  contactEmail: string;
  allRightsReserved: string;
  logoMarkAriaLabel: string;
  metadata: MetadataCopy;
};

export const layoutCopyByLocale: Record<"th" | "en", LayoutCopy> = {
  th: {
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "ติดต่อ",
    faqLabel: "คำถามที่พบบ่อย",
    companyInfoLink: "ข้อมูลบริษัท",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "สงวนลิขสิทธิ์",
    logoMarkAriaLabel: "โลโก้ Gumon",
    metadata: {
      defaultTitle: "Gumon Technology | Open Platform for Delivery Teams",
      titleTemplate: "%s | Gumon Technology",
      description: "Open technology platform for organizations that need faster software delivery, clearer standards, and sustainable scaling.",
      keywords: [
        "Gumon Technology",
        "Open Platform",
        "Platform Engineering",
        "Software Delivery",
        "Developer Platform",
        "Technology Ecosystem",
      ],
      openGraphDescription: "An open platform designed for practical delivery, connecting technology teams, partners, and business growth.",
      twitterDescription: "An open platform designed for practical delivery, connecting technology teams, partners, and business growth.",
    },
  },
  en: {
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "Contact",
    faqLabel: "FAQ",
    companyInfoLink: "Company Info",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "All rights reserved.",
    logoMarkAriaLabel: "Gumon mark",
    metadata: {
      defaultTitle: "Gumon Technology | Open Platform for Delivery Teams",
      titleTemplate: "%s | Gumon Technology",
      description: "Open technology platform for organizations that need faster software delivery, clearer standards, and sustainable scaling.",
      keywords: [
        "Gumon Technology",
        "Open Platform",
        "Platform Engineering",
        "Software Delivery",
        "Developer Platform",
        "Technology Ecosystem",
      ],
      openGraphDescription: "An open platform designed for practical delivery, connecting technology teams, partners, and business growth.",
      twitterDescription: "An open platform designed for practical delivery, connecting technology teams, partners, and business growth.",
    },
  },
};

export function getLayoutCopy(locale: Locale) {
  if (locale === "th") return layoutCopyByLocale.th;
  if (locale === "en") return layoutCopyByLocale.en;
  return translateDeep(locale, layoutCopyByLocale.en);
}

export const layoutCopy = layoutCopyByLocale.en;
