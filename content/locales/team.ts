import type { Locale } from "@/lib/i18n";

export const teamMembers = [
  { name: "Komphet Meesab", role: "Chief Executive Officer", image: "/images/team/komphet-meesab.jpg", crop: "50% 12%" },
  { name: "Panitchai Chaenglek", role: "Head of Research and Development Division", image: "/images/team/panitchai-chaenglek.jpg", crop: "50% 12%" },
  { name: "Kritsada Suriyachan", role: "Head of Technology Solutions Division", image: "/images/team/kritsada-suriyachan.jpg", crop: "50% 10%" },
  { name: "Niti Kosutao", role: "Backend Developer", image: "/images/team/niti-kosutao.jpg", crop: "50% 12%" },
  { name: "Apirat Jamnongrat", role: "Frontend Developer", image: "/images/team/apirat-jamnongrat.jpg", crop: "50% 14%" },
  { name: "Pongsathon Tungkanakul", role: "Frontend Developer", image: "/images/team/pongsathon-tungkanakul.jpg", crop: "50% 14%" },
  { name: "Poomchanok Sangprasert", role: "Frontend Developer", image: "/images/team/poomchanok-sangprasert.jpg", crop: "50% 14%" },
  { name: "Sorawit Poemponsri", role: "UX/UI Designer", image: "/images/team/sorawit-poemponsri.jpg", crop: "50% 12%" },
  { name: "Sittipong Sainum", role: "Digital and Technology Social Network Officer", image: "/images/team/sittipong-sainum.jpg", crop: "50% 12%" },
  { name: "Suvapat Pimklang", role: "Mobile Developer", image: "/images/team/suvapat-pimklang.jpg", crop: "50% 12%" },
  { name: "Witsawachit Wangklang", role: "Project Manager", image: "/images/team/witsawachit-wangklang.jpg", crop: "50% 12%" },
  { name: "Noppon Changchai", role: "Media Staff", image: "/images/team/noppon-changchai.jpg", crop: "50% 12%" },
  { name: "Pramin Wangwun", role: "Fullstack Developer", image: "/images/team/pramin-wangwun.jpg", crop: "50% 10%" },
  { name: "Thanathorn Chulay", role: "Fullstack Developer", image: "/images/team/thanathorn-chulay.jpg", crop: "50% 10%" },
  { name: "Parichat Hongsa", role: "Fullstack Developer", image: "/images/team/parichat-hongsa.jpg", crop: "50% 10%" },
  { name: "Irin Maysasittiroj", role: "Fullstack Developer", image: "/images/team/irin-maysasittiroj.jpg", crop: "50% 10%" },
  { name: "Nuntakarn Paonariang", role: "Business Analyst", image: "/images/team/nuntakarn-paonariang.jpg", crop: "50% 10%" },
  { name: "Suriya Thanee", role: "Media Staff", image: "/images/team/suriya-thanee.jpg", crop: "50% 10%" },
  { name: "Wichayoot Wongsason", role: "Media Staff", image: "/images/team/wichayoot-wongsason.jpg", crop: "50% 10%" },
];

export type TeamCopy = {
  title: string;
  description: string;
  crumb: string;
  kicker: string;
  heading: string;
  intro: string;
  nextKicker: string;
  nextHeading: string;
  nextBody: string;
  contactCta: string;
  companyCta: string;
};

export const teamContent: Partial<Record<Locale, TeamCopy>> = {
  th: {
    title: "Team",
    description: "ทีมงาน Gumon Technology จากสายงานเทคโนโลยี ดีไซน์ และการส่งมอบที่ร่วมกันสร้าง Open Platform",
    crumb: "Team",
    kicker: "Company / Team",
    heading: "ทีม Gumon Technology",
    intro: "ทีมงานจากหลายบทบาทที่ร่วมกันขับเคลื่อนงานวิจัย การพัฒนาแพลตฟอร์ม และการส่งมอบเทคโนโลยีให้เกิดผลจริง",
    nextKicker: "Next Step",
    nextHeading: "ต้องการคุยเรื่องการร่วมงานกับทีม Gumon",
    nextBody: "หากคุณต้องการหารือเรื่องการวางโรดแมปแพลตฟอร์ม การส่งมอบผ่านพาร์ตเนอร์ หรือความร่วมมือเชิงเทคโนโลยี สามารถส่งข้อมูลโครงการของคุณมาได้โดยตรง",
    contactCta: "ติดต่อทีมงาน",
    companyCta: "ดูภาพรวมบริษัท",
  },
  en: {
    title: "Team",
    description: "Meet the Gumon Technology team across engineering, design, and delivery disciplines.",
    crumb: "Team",
    kicker: "Company / Team",
    heading: "Gumon Technology Team",
    intro: "A multidisciplinary team working together across research, platform engineering, and real-world delivery execution.",
    nextKicker: "Next Step",
    nextHeading: "Interested in working with the Gumon team",
    nextBody: "If you want to discuss platform roadmap planning, partner-led delivery, or technology collaboration, share your project context and we will follow up.",
    contactCta: "Contact Team",
    companyCta: "View Company Overview",
  },
};
