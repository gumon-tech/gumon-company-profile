"use client";

import { usePathname } from "next/navigation";
import TrackedLink from "@/components/TrackedLink";

const ctaEnabledRoutes = new Set([
  "/",
  "/platform",
  "/developers",
  "/partners",
  "/resources",
  "/company",
  "/team",
]);

export default function MobileStickyCta() {
  const pathname = usePathname();

  if (!pathname || !ctaEnabledRoutes.has(pathname)) {
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
