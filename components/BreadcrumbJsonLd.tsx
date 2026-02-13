import React from "react";

type Crumb = {
  name: string;
  path: string;
};

export default function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://web.gumon.dev";
  const normalizedBase = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;

  const allItems: Crumb[] = [{ name: "Home", path: "/" }, ...items];

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${normalizedBase}${item.path === "/" ? "" : item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
