"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setOn(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setOn(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = {
    "--revealDelay": `${delay}ms`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={["reveal", on ? "reveal-on" : "reveal-off", className].join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}
