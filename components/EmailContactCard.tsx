"use client";

import CopyEmailButton from "@/components/CopyEmailButton";
import { type KeyboardEvent } from "react";
import { usePathname } from "next/navigation";
import { detectLocaleFromPathname, getUiCopy } from "@/lib/i18n";

export default function EmailContactCard({
  email,
  subject,
}: {
  email: string;
  subject: string;
}) {
  const pathname = usePathname();
  const locale = detectLocaleFromPathname(pathname);
  const copy = getUiCopy(locale);

  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  const openMail = () => {
    window.location.href = mailtoHref;
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openMail();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={openMail}
      onKeyDown={handleKeyDown}
      className="card p-4 hover:border-ink/30 transition cursor-pointer"
      aria-label={copy.sendEmailAria}
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-[11px] tracking-[0.16em] uppercase text-mist">Email</div>
          <div className="mt-1 text-ink">{email}</div>
        </div>
        <CopyEmailButton
          email={email}
          stopPropagation
          label={copy.copy}
          copiedLabel={copy.copied}
          className="shrink-0 rounded-full border border-line/55 bg-bg1/70 px-3 py-1.5 text-[11px] font-medium text-mist hover:text-ink hover:bg-surf/65 transition"
        />
      </div>
    </div>
  );
}
