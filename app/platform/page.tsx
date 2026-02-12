import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = { title: "Platform" };

export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <Reveal><p className="ui-kicker">PLATFORM OVERVIEW</p></Reveal>
        <Reveal delay={70}><h1 className="ui-h1">Foundations teams can reuse</h1></Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-3xl ui-p">
            Gumon provides structured foundations that reduce repeated setup and integration overhead —
            while preserving core stability through explicit governance.
          </p>
        </Reveal>

        <div className="mt-12 card p-6 shadow-soft">
          <div className="ui-kicker">WHERE TO START</div>
          <div className="mt-5 grid md:grid-cols-3 gap-4">
            {[
              ["Manifesto", "Understand the platform intent and boundaries.", "/manifesto"],
              ["Architecture", "Review the layer model and compatibility discipline.", "/architecture"],
              ["Governance", "See how we protect core integrity and ecosystem trust.", "/governance"],
            ].map(([t, d, href]) => (
              <Link key={t} href={href} className="rounded-xl2 border border-line/20 bg-bg0/25 p-5 hover:border-ink/25 transition">
                <div className="text-sm font-semibold">{t}</div>
                <p className="mt-2 text-sm text-mist leading-relaxed">{d}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
