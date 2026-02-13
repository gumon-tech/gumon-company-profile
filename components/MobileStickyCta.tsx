"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import TrackedLink from "@/components/TrackedLink";
import { stickyCtaEnabledRoutes } from "@/lib/navigation";

export default function MobileStickyCta() {
  const pathname = usePathname();
  const enabled = Boolean(pathname && stickyCtaEnabledRoutes.has(pathname));

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
        คุยกับทีมเทคนิค
      </TrackedLink>
    </div>
  );
}
