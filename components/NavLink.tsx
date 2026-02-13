"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  detectLocaleFromPathname,
  localizePath,
  stripLocalePrefix,
} from "@/lib/i18n";

export default function NavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const pathname = usePathname();
  const locale = detectLocaleFromPathname(pathname);
  const currentPath = stripLocalePrefix(pathname || "/");
  const localizedHref = localizePath(href, locale);
  const isActive =
    href === "/"
      ? currentPath === "/"
      : currentPath.startsWith(href);

  return (
    <Link
      href={localizedHref}
      aria-current={isActive ? "page" : undefined}
      className={[
        "relative hover:text-ink transition-colors",
        isActive ? "text-ink" : "text-ink/78",
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
