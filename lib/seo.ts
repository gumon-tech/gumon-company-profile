import type { Metadata } from "next";
import { supportedLocales } from "@/lib/i18n";

type BuildPageMetadataArgs = {
  title: string;
  description: string;
  path: string;
};

const SITE_NAME = "Gumon Technology";
const DEFAULT_OG_IMAGE = "/assets/social/og-share-en.png";
const DEFAULT_TWITTER_IMAGE = "/assets/social/twitter-share-en.png";

const BASE_KEYWORDS = [
  "Gumon Technology",
  "Open Platform",
  "Software Delivery",
  "Platform Engineering",
  "Developer Platform",
  "Technology Ecosystem",
];

export function buildPageMetadata({ title, description, path }: BuildPageMetadataArgs): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const languages = Object.fromEntries(
    supportedLocales.map((locale) => [locale, path === "/" ? `/${locale}` : `/${locale}${path}`]),
  );

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages,
    },
    keywords: BASE_KEYWORDS,
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url: path,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          alt: "Gumon Technology",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [DEFAULT_TWITTER_IMAGE],
    },
  };
}
