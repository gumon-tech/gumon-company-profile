import type { Locale } from "@/lib/i18n";

type CompanyInfo = {
  legalName: string;
  registrationNumber: string;
  registeredAt: string;
  address: string;
};

export const companyInfoByLocale: Record<"th" | "en", CompanyInfo> = {
  th: {
    legalName: "บริษัท กุมอน เทคโนโลยี จำกัด",
    registrationNumber: "0405566007844",
    registeredAt: "December 21, 2023",
    address: "33/4 หมู่ 11 เดอะไนน์ทาวเวอร์ส อาคารเอ ชั้น 35 ถนนพระราม 9 แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพมหานคร 10310 ประเทศไทย",
  },
  en: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "December 21, 2023",
    address: "33/4 Moo 11, The Nine Towers, Tower A, Floor 35, Rama 9 Road, Huai Khwang, Bangkok 10310, Thailand",
  },
};

export function getCompanyInfo(locale?: Locale): CompanyInfo {
  return locale === "th" ? companyInfoByLocale.th : companyInfoByLocale.en;
}

export const companyInfo = companyInfoByLocale.en;
