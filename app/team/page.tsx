import Reveal from "@/components/Reveal";
import Image from "next/image";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Team",
  description: "ทีมงาน Gumon Technology ที่ร่วมกันขับเคลื่อนแพลตฟอร์มและระบบนิเวศ",
  path: "/team",
});

const team = [
  { name: "Komphet Meesab", role: "Chief Executive Officer", photo: "https://gumon.io/images/team/komphet.jpg", focus: "center 20%" },
  { name: "Panitchai Chaenglek", role: "Head of Research and Development Division", photo: "https://gumon.io/images/team/o.jpg", focus: "center 18%" },
  { name: "Kritsada Suriyachan", role: "Head of Technology Solutions Division", photo: "https://gumon.io/images/team/newDev.jpg", focus: "center 22%" },
  { name: "Niti Kosutao", role: "Backend Developer", photo: "https://gumon.io/images/team/drink.png", focus: "center 16%" },
  { name: "Apirat Jamnongrat", role: "Frontend Developer", photo: "https://gumon.io/images/team/palm.jpg", focus: "center 16%" },
  { name: "Pongsathon Tungkanakul", role: "Frontend Developer", photo: "https://gumon.io/images/team/peach.jpg", focus: "center 16%" },
  { name: "Poomchanok Sangprasert", role: "Frontend Developer", photo: "https://gumon.io/images/team/Pea.jfif", focus: "center 18%" },
  { name: "Sorawit Poemponsri", role: "UX/UI Designer", photo: "https://gumon.io/images/team/F.jpg", focus: "center 16%" },
  { name: "Sittipong Sainum", role: "Digital Communications Officer", photo: "https://gumon.io/images/team/ken.jpg", focus: "center 16%" },
  { name: "Suvapat Pimklang", role: "Mobile Developer", photo: "https://gumon.io/images/team/Stamp.jpg", focus: "center 17%" },
  { name: "Witsawachit Wangklang", role: "Project Manager", photo: "https://gumon.io/images/team/Mark.jpg", focus: "center 14%" },
  { name: "Noppon Changchai", role: "Media Staff", photo: "https://gumon.io/images/team/Nop.jpg", focus: "center 14%" },
  { name: "Pramin Wangwun", role: "Fullstack Developer", photo: "https://gumon.io/images/team/Owen.png", focus: "center 14%" },
  { name: "Thanathorn Chulay", role: "Fullstack Developer", photo: "https://gumon.io/images/team/Petch.png", focus: "center 12%" },
  { name: "Parichat Hongsa", role: "Fullstack Developer", photo: "https://gumon.io/images/team/Donut.png", focus: "center 16%" },
  { name: "Irin Maysasittiroj", role: "Fullstack Developer", photo: "https://gumon.io/images/team/View.png", focus: "center 15%" },
  { name: "Nuntakarn Paonariang", role: "Business Analyst", photo: "https://gumon.io/images/team/Pure.png", focus: "center 14%" },
  { name: "Suriya Thanee", role: "Media Staff", photo: "https://gumon.io/images/team/Pjent.png", focus: "center 15%" },
  { name: "Wichayoot Wongsason", role: "Media Staff", photo: "https://gumon.io/images/team/Shi-ryu.jpg", focus: "center 14%" },
];

export default function Page() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Team", path: "/team" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">Company / Team</p>
          <h1 className="ui-h1">ทีมข้ามสาขาที่รวมพลังด้านเทคโนโลยีและการส่งมอบ</h1>
          <p className="mt-6 max-w-3xl ui-p">
            ทีม Gumon ผสานความเชี่ยวชาญด้าน Engineering, UX/UI, Product, Business Analysis และ Communications
            เพื่อพัฒนาแพลตฟอร์มให้ใช้งานได้จริงในบริบทองค์กร.
          </p>
        </Reveal>

        <div className="mt-8 grid sm:grid-cols-3 lg:grid-cols-4 gap-3">
          <div className="card p-4">
            <div className="text-[11px] tracking-[0.16em] uppercase text-mist">Team Size</div>
            <div className="mt-2 text-2xl font-semibold">{team.length} Members</div>
          </div>
          <div className="card p-4">
            <div className="text-[11px] tracking-[0.16em] uppercase text-mist">Core Areas</div>
            <div className="mt-2 text-sm">Engineering, Delivery, Product, Media</div>
          </div>
          <div className="card p-4 sm:col-span-1 lg:col-span-2">
            <div className="text-[11px] tracking-[0.16em] uppercase text-mist">Working Model</div>
            <div className="mt-2 text-sm">Cross-functional collaboration เพื่อขับเคลื่อนทั้ง Platform และ Ecosystem</div>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 35}>
              <article className="card p-4 shadow-soft h-full">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-bg0/60 border border-line/20">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="h-full w-full object-cover"
                    style={{ objectPosition: member.focus }}
                    sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 28vw, (min-width: 640px) 45vw, 90vw"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h2 className="mt-4 text-base font-semibold leading-snug">{member.name}</h2>
                <p className="mt-1 text-sm text-mist leading-relaxed">{member.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
