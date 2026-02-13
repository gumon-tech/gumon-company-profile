"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { detectLocaleFromPathname, localizePath } from "@/lib/i18n";

type TrackedLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:");
}

export default function TrackedLink({
  href,
  className,
  children,
  target,
  rel,
}: TrackedLinkProps) {
  const pathname = usePathname();
  const locale = detectLocaleFromPathname(pathname);

  if (isExternalHref(href) || target === "_blank") {
    return (
      <a href={href} target={target} rel={rel} className={className}>
        {children}
      </a>
    );
  }

  const localizedHref = href.startsWith("/") ? localizePath(href, locale) : href;

  return (
    <Link href={localizedHref} className={className}>
      {children}
    </Link>
  );
}
