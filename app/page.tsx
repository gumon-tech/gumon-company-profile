import Reveal from "@/components/Reveal";
import Link from "next/link";

const blocks = [
  {
    title: "Open Standards",
    desc: "A shared structural language for modular systems — predictable boundaries, repeatable patterns.",
  },
  {
    title: "Reusable Foundations",
    desc: "Core services and primitives that reduce repeated setup and integration overhead.",
  },
  {
    title: "Developer Enablement",
    desc: "Tooling and workflows designed to make onboarding and delivery consistent across teams.",
  },
  {
    title: "Ecosystem Extensibility",
    desc: "Clear extension rules so partners can build value without eroding core integrity.",
  },
];

export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">OPEN INFRASTRUCTURE • PLATFORM FIRST • PARTNER LED</p>
        </Reveal>

        <Reveal delay={70}>
          <h1 className="ui-h1">
            Open software infrastructure
            <br className="hidden md:block" />
            for modular systems.
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-6 max-w-2xl ui-p">
            Gumon Technology builds open infrastructure foundations — standards, primitives, and developer tooling —
            so teams and partners can ship modular systems with structural consistency.
          </p>
        </Reveal>

        <Reveal delay={210}>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/manifesto"
              className="glass rounded-xl2 px-5 py-3 shadow-soft hover:shadow-none transition text-ink"
            >
              Read the Manifesto
            </Link>
            <Link
              href="/architecture"
              className="rounded-xl2 px-5 py-3 border border-line/25 text-mist hover:text-ink hover:border-ink/25 transition"
            >
              Explore Architecture
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {blocks.map((b) => (
            <div key={b.title} className="card p-6 shadow-soft">
              <div className="text-[11px] tracking-[0.28em] uppercase text-accent">Capability</div>
              <div className="mt-3 text-lg font-semibold">{b.title}</div>
              <p className="mt-2 text-sm text-mist leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 card p-6 shadow-soft overflow-hidden relative">
            <div className="relative">
              <p className="ui-kicker">PLATFORM DISCIPLINE</p>
              <h2 className="mt-3 ui-h2">Governance and boundaries are part of the product.</h2>
              <p className="mt-3 text-sm md:text-base text-mist leading-relaxed max-w-xl">
                Open platforms fail when boundaries blur. Gumon enforces core vs extension separation,
                version discipline, and partner-first execution rules to keep ecosystems stable over time.
              </p>
              <Link
                href="/governance"
                className="mt-6 inline-block text-sm text-ink underline underline-offset-4 decoration-accent hover:decoration-accent transition"
              >
                Read governance charter →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 card p-6 shadow-soft overflow-hidden relative">
            <div className="relative">
              <p className="ui-kicker">DOCUMENTATION AS INFRASTRUCTURE</p>
              <h2 className="mt-3 ui-h2">Clarity scales adoption.</h2>
              <p className="mt-3 text-sm md:text-base text-mist leading-relaxed">
                Documentation, onboarding, and compatibility declarations are treated as structural assets —
                not afterthoughts. If teams cannot start consistently, the platform cannot scale.
              </p>
              <Link
                href="/docs"
                className="mt-6 inline-block text-sm text-ink underline underline-offset-4 decoration-accent hover:decoration-accent transition"
              >
                Go to docs →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 card p-7 shadow-soft">
          <div className="grid lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7">
              <p className="ui-kicker">ECOSYSTEM MODEL</p>
              <h2 className="mt-3 ui-h2">Platform builder. Partner-led execution.</h2>
              <p className="mt-3 text-sm md:text-base text-mist leading-relaxed max-w-2xl">
                Gumon builds the foundation. Partners build solutions and deliver value. This separation protects
                ecosystem trust and prevents platform drift into downstream competition.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/ecosystem"
                  className="glass rounded-xl2 px-5 py-3 shadow-soft hover:shadow-none transition text-ink"
                >
                  Explore Ecosystem
                </Link>
                <Link
                  href="/partners"
                  className="rounded-xl2 px-5 py-3 border border-line/25 text-mist hover:text-ink hover:border-ink/25 transition"
                >
                  Partner with Gumon
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="text-[11px] tracking-[0.28em] uppercase text-mist">Quick start (illustrative)</div>
              <pre className="mt-3 codeblock">
{`# install gumon tooling
npm i -g gumon-cli

# initialize a structured workspace
gumon init my-system

# add a service module
gumon add service auth`}
              </pre>
              <div className="mt-3 ui-small">
                Examples shown for illustration. Implementation details live in documentation.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
