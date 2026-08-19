import type { Locale } from "@/lib/i18n";

type CompanyInfo = {
  legalName: string;
  registrationNumber: string;
  registeredAt: string;
  address: string;
};

export const companyInfoByLocale: Record<Locale, CompanyInfo> = {
  th: {
    legalName: "บริษัท กุมอน เทคโนโลยี จำกัด",
    registrationNumber: "0405566007844",
    registeredAt: "21 ธันวาคม 2023",
    address: "10/17 หมู่ 1 ตำบลบางโฉลง อำเภอบางพลี จังหวัดสมุทรปราการ 10540 ประเทศไทย",
  },
  en: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "December 21, 2023",
    address: "10/17 Moo 1, Bang Chalong, Bang Phli, Samut Prakan 10540, Thailand",
  },
  "zh-CN": {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "2023年12月21日",
    address: "10/17 Moo 1, Bang Chalong, Bang Phli, Samut Prakan 10540, Thailand",
  },
  "zh-TW": {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "2023年12月21日",
    address: "10/17 Moo 1, Bang Chalong, Bang Phli, Samut Prakan 10540, Thailand",
  },
  ja: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "2023年12月21日",
    address: "10/17 Moo 1, Bang Chalong, Bang Phli, Samut Prakan 10540, Thailand",
  },
  ko: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "2023년 12월 21일",
    address: "10/17 Moo 1, Bang Chalong, Bang Phli, Samut Prakan 10540, Thailand",
  },
  vi: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 tháng 12, 2023",
    address: "10/17 Moo 1, Bang Chalong, Bang Phli, Samut Prakan 10540, Thailand",
  },
  id: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 Desember 2023",
    address: "10/17 Moo 1, Bang Chalong, Bang Phli, Samut Prakan 10540, Thailand",
  },
  ms: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 Disember 2023",
    address: "10/17 Moo 1, Bang Chalong, Bang Phli, Samut Prakan 10540, Thailand",
  },
  hi: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 दिसंबर 2023",
    address: "10/17 Moo 1, Bang Chalong, Bang Phli, Samut Prakan 10540, Thailand",
  },
  ar: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 ديسمبر 2023",
    address: "10/17 Moo 1, Bang Chalong, Bang Phli, Samut Prakan 10540, Thailand",
  },
  he: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 בדצמבר 2023",
    address: "10/17 Moo 1, Bang Chalong, Bang Phli, Samut Prakan 10540, Thailand",
  },
  es: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 de diciembre de 2023",
    address: "10/17 Moo 1, Bang Chalong, Bang Phli, Samut Prakan 10540, Thailand",
  },
  "pt-BR": {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 de dezembro de 2023",
    address: "10/17 Moo 1, Bang Chalong, Bang Phli, Samut Prakan 10540, Thailand",
  },
  fr: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 décembre 2023",
    address: "10/17 Moo 1, Bang Chalong, Bang Phli, Samut Prakan 10540, Thailand",
  },
  de: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21. Dezember 2023",
    address: "10/17 Moo 1, Bang Chalong, Bang Phli, Samut Prakan 10540, Thailand",
  },
  it: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 dicembre 2023",
    address: "10/17 Moo 1, Bang Chalong, Bang Phli, Samut Prakan 10540, Thailand",
  },
  nl: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 december 2023",
    address: "10/17 Moo 1, Bang Chalong, Bang Phli, Samut Prakan 10540, Thailand",
  },
  pl: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 grudnia 2023",
    address: "10/17 Moo 1, Bang Chalong, Bang Phli, Samut Prakan 10540, Thailand",
  },
  tr: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 Aralık 2023",
    address: "10/17 Moo 1, Bang Chalong, Bang Phli, Samut Prakan 10540, Thailand",
  },
  ru: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 декабря 2023 года",
    address: "10/17 Moo 1, Bang Chalong, Bang Phli, Samut Prakan 10540, Thailand",
  },
  uk: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 грудня 2023 року",
    address: "10/17 Moo 1, Bang Chalong, Bang Phli, Samut Prakan 10540, Thailand",
  },
  sv: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 december 2023",
    address: "10/17 Moo 1, Bang Chalong, Bang Phli, Samut Prakan 10540, Thailand",
  },
};

export function getCompanyInfo(locale?: Locale): CompanyInfo {
  if (!locale) return companyInfoByLocale.en;
  return companyInfoByLocale[locale] ?? companyInfoByLocale.en;
}

export const companyInfo = companyInfoByLocale.en;
