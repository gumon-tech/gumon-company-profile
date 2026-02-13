import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import TeamDirectory from "@/components/TeamDirectory";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Team",
  description:
    "ทีมงาน Gumon Technology จากสายงานเทคโนโลยี ดีไซน์ และการส่งมอบที่ร่วมกันสร้าง Open Platform",
  path: "/team",
});

const teamMembers = [
  { name: "Komphet Meesab", role: "Chief Executive Officer", image: "https://gumon.io/images/team/komphet.jpg", crop: "50% 12%" },
  { name: "Panitchai Chaenglek", role: "Head of Research and Development Division", image: "https://gumon.io/images/team/o.jpg", crop: "50% 12%" },
  { name: "Kritsada Suriyachan", role: "Head of Technology Solutions Division", image: "https://gumon.io/images/team/newDev.jpg", crop: "50% 10%" },
  { name: "Niti Kosutao", role: "Backend Developer", image: "https://gumon.io/images/team/drink.png", crop: "50% 12%" },
  { name: "Apirat Jamnongrat", role: "Frontend Developer", image: "https://gumon.io/images/team/palm.jpg", crop: "50% 14%" },
  { name: "Pongsathon Tungkanakul", role: "Frontend Developer", image: "https://gumon.io/images/team/peach.jpg", crop: "50% 14%" },
  { name: "Poomchanok Sangprasert", role: "Frontend Developer", image: "https://gumon.io/images/team/Pea.jfif", crop: "50% 14%" },
  { name: "Sorawit Poemponsri", role: "UX/UI Designer", image: "https://gumon.io/images/team/F.jpg", crop: "50% 12%" },
  { name: "Sittipong Sainum", role: "Digital and Technology Social Network Officer", image: "https://gumon.io/images/team/ken.jpg", crop: "50% 12%" },
  { name: "Suvapat Pimklang", role: "Mobile Developer", image: "https://gumon.io/images/team/Stamp.jpg", crop: "50% 12%" },
  { name: "Witsawachit Wangklang", role: "Project Manager", image: "https://gumon.io/images/team/Mark.jpg", crop: "50% 12%" },
  { name: "Noppon Changchai", role: "Media Staff", image: "https://gumon.io/images/team/Nop.jpg", crop: "50% 12%" },
  { name: "Pramin Wangwun", role: "Fullstack Developer", image: "https://gumon.io/images/team/Owen.png", crop: "50% 10%" },
  { name: "Thanathorn Chulay", role: "Fullstack Developer", image: "https://gumon.io/images/team/Petch.png", crop: "50% 10%" },
  { name: "Parichat Hongsa", role: "Fullstack Developer", image: "https://gumon.io/images/team/Donut.png", crop: "50% 10%" },
  { name: "Irin Maysasittiroj", role: "Fullstack Developer", image: "https://gumon.io/images/team/View.png", crop: "50% 10%" },
  { name: "Nuntakarn Paonariang", role: "Business Analyst", image: "https://gumon.io/images/team/Pure.png", crop: "50% 10%" },
  { name: "Suriya Thanee", role: "Media Staff", image: "https://gumon.io/images/team/Pjent.png", crop: "50% 10%" },
  { name: "Wichayoot Wongsason", role: "Media Staff", image: "https://gumon.io/images/team/Shi-ryu.jpg", crop: "50% 10%" },
];

export default function TeamPage() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Team", path: "/team" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">Company / Team</p>
          <h1 className="ui-h1">ทีม Gumon Technology</h1>
          <p className="mt-6 max-w-3xl ui-p">
            ทีมงานจากหลายบทบาทที่ร่วมกันขับเคลื่อนงานวิจัย การพัฒนาแพลตฟอร์ม และการส่งมอบเทคโนโลยีให้เกิดผลจริง.
          </p>
        </Reveal>

        <TeamDirectory members={teamMembers} />

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">Next Step</p>
          <h2 className="mt-3 ui-h2">ต้องการคุยเรื่องการร่วมงานกับทีม Gumon</h2>
          <p className="mt-3 text-sm text-mist leading-relaxed max-w-3xl">
            หากคุณต้องการหารือเรื่องการวางโรดแมปแพลตฟอร์ม การส่งมอบผ่านพาร์ตเนอร์ หรือความร่วมมือเชิงเทคโนโลยี
            สามารถส่งข้อมูลโครงการของคุณมาได้โดยตรง.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <TrackedLink href="/contact" className="btn-primary">
              ติดต่อทีมงาน
            </TrackedLink>
            <TrackedLink href="/company" className="btn-secondary">
              ดูภาพรวมบริษัท
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
