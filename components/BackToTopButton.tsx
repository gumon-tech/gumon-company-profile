"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { detectLocaleFromPathname, getUiCopy } from "@/lib/i18n";

const SHOW_AFTER_Y = 480;

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const locale = detectLocaleFromPathname(pathname);
  const copy = getUiCopy(locale);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      setVisible(window.scrollY > SHOW_AFTER_Y);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label={copy.backToTop}
      onClick={handleClick}
      className={[
        "back-to-top",
        visible ? "back-to-top-show" : "back-to-top-hide",
      ].join(" ")}
    >
      ↑ {copy.backToTop}
    </button>
  );
}
