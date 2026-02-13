"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import TrackedLink from "@/components/TrackedLink";
import { stickyCtaEnabledRoutes } from "@/lib/navigation";
import { detectLocaleFromPathname, getUiCopy, stripLocalePrefix } from "@/lib/i18n";

export default function MobileStickyCta() {
  const pathname = usePathname();
  const locale = detectLocaleFromPathname(pathname);
  const copy = getUiCopy(locale);
  const normalizedPath = pathname ? stripLocalePrefix(pathname) : "";
  const enabled = Boolean(normalizedPath && stickyCtaEnabledRoutes.has(normalizedPath));

  useEffect(() => {
    const className = "mobile-has-sticky-cta";
    if (enabled) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
    return () => {
      document.body.classList.remove(className);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div className="mobile-sticky-cta lg:hidden">
      <TrackedLink href="/contact" className="btn-primary w-full">
        {copy.contactTeam}
      </TrackedLink>
    </div>
  );
}
