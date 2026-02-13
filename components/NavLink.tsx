"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

export default function NavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const pathname = usePathname();
  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname?.startsWith(href);

  return (
    <Link
      href={href}
      onClick={() =>
        trackEvent({
          name: "site_nav_click",
          category: "navigation",
          label: `header-${label.toLowerCase().replace(/\s+/g, "-")}`,
          location: "header.nav.desktop",
          href,
        })
      }
      aria-current={isActive ? "page" : undefined}
      className={[
        "relative hover:text-ink transition-colors",
        isActive ? "text-ink" : "text-mist",
      ].join(" ")}
    >
      {label}
      <span
        style={{ backgroundColor: "rgb(var(--accent))" }}
        className={[
          "absolute -bottom-3 left-0 h-[2px] w-full rounded-full transition-opacity",
          isActive ? "opacity-70" : "opacity-0",
        ].join(" ")}
      />
    </Link>
  );
}
