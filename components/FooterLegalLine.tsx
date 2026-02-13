"use client";

import { usePathname } from "next/navigation";
import { detectLocaleFromPathname } from "@/lib/i18n";
import { getCompanyInfo } from "@/lib/companyInfo";

export default function FooterLegalLine() {
  const pathname = usePathname();
  const locale = detectLocaleFromPathname(pathname);
  const companyInfo = getCompanyInfo(locale);

  if (locale === "th") {
    return (
      <>
        {companyInfo.legalName} | เลขทะเบียนนิติบุคคล {companyInfo.registrationNumber}
      </>
    );
  }

  return (
    <>
      {companyInfo.legalName} | Registration No. {companyInfo.registrationNumber}
    </>
  );
}
