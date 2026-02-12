import Reveal from "@/components/Reveal";

export const metadata = { title: "Architecture" };

export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <Reveal><p className="ui-kicker">PLATFORM ARCHITECTURE</p></Reveal>
        <Reveal delay={70}><h1 className="ui-h1">Structure before scale</h1></Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-3xl ui-p">
            Gumon is a structured infrastructure foundation for modular systems — designed for consistency,
            repeatability, and ecosystem extensibility without core erosion.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 card p-6 shadow-soft">
            <div className="ui-kicker">LAYER MODEL</div>
            <h2 className="mt-3 ui-h3">Four logical layers</h2>
            <ol className="mt-5 space-y-4 text-sm md:text-base text-mist">
              <li><span className="text-ink font-semibold">1. Core Foundation</span> — structural conventions, service boundaries, version governance.</li>
              <li><span className="text-ink font-semibold">2. Service Modules</span> — independent components with clear interface contracts and minimal cross-dependency.</li>
              <li><span className="text-ink font-semibold">3. Developer Enablement</span> — CLI, scaffolding, workflow automation, onboarding clarity.</li>
              <li><span className="text-ink font-semibold">4. Ecosystem Extensions</span> — optional add-ons with compatibility declarations and no core modification.</li>
            </ol>
          </div>

          <div className="lg:col-span-5 card p-6 shadow-soft">
            <div className="ui-kicker">COMPATIBILITY (EXAMPLE)</div>
            <h2 className="mt-3 ui-h3">Declared boundaries</h2>
            <pre className="mt-4 codeblock">{`name: gumon-extension-example
requires:
  core: ">=1.4 <2.0"
interfaces:
  - auth.v1
  - events.v2
notes:
  - no core modifications
  - removable without breaking boot`}</pre>
            <p className="mt-4 ui-small">
              Extensions must declare compatible core versions and interface contracts.
            </p>
          </div>
        </div>

        <div className="mt-12 card p-6 shadow-soft">
          <div className="ui-kicker">ARCHITECTURAL PRINCIPLES</div>
          <h2 className="mt-3 ui-h3">Rules that keep the platform coherent</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            {[
              ["Separation of responsibility", "Each layer has clear ownership and modification boundaries."],
              ["Version discipline", "Breaking change is structural disruption and requires justification."],
              ["Operational neutrality", "Avoid vendor lock-in assumptions; remain portable across environments."],
              ["Repeatability", "If every project differs fundamentally in structure, platform value collapses."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl2 border border-line/20 bg-bg0/30 p-5">
                <div className="text-sm font-semibold">{t}</div>
                <p className="mt-2 text-sm text-mist leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
