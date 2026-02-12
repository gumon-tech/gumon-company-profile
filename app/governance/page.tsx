import Reveal from "@/components/Reveal";

export const metadata = { title: "Governance" };

const sections = [
  {
    title: "Open-first integrity",
    body:
      "Core infrastructure remains usable, inspectable, and reusable. Essential capability is not gated behind commercial dependency.",
  },
  {
    title: "Core vs Extension boundary",
    body:
      "We enforce structural separation: Core defines standards and essential primitives; extensions add optional value without modifying core or destabilizing compatibility.",
  },
  {
    title: "Partner-only commercial model",
    body:
      "Gumon does not deliver end-client projects or compete in solution verticals. Partners execute downstream delivery and commercialization.",
  },
  {
    title: "Version discipline",
    body:
      "Compatibility declarations, transparent deprecation, and migration guidance are mandatory. Infrastructure must remain predictable.",
  },
  {
    title: "Ecosystem fairness",
    body:
      "Extension listing standards and validation criteria are transparent. No hidden prioritization or internal favoritism.",
  },
];

export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <Reveal><p className="ui-kicker">GOVERNANCE & BOUNDARY CHARTER</p></Reveal>
        <Reveal delay={70}><h1 className="ui-h1">Governance that protects ecosystem trust</h1></Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-3xl ui-p">
            Open platforms fail when boundaries blur. Governance is structural integrity — protecting core stability,
            partner confidence, and long-term coherence.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6">
          {sections.map((s) => (
            <div key={s.title} className="card p-6 shadow-soft">
              <div className="text-[11px] tracking-[0.28em] uppercase text-accent">Policy</div>
              <h2 className="mt-3 ui-h3">{s.title}</h2>
              <p className="mt-3 text-sm md:text-base text-mist leading-relaxed max-w-4xl">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 card p-6 shadow-soft">
          <div className="ui-kicker">BOUNDARY MODEL</div>
          <h2 className="mt-3 ui-h3">Core, extensions, and execution responsibilities</h2>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-[720px] w-full text-sm">
              <thead className="text-mist">
                <tr className="border-b border-line/20">
                  <th className="py-3 text-left font-semibold">Layer</th>
                  <th className="py-3 text-left font-semibold">Owned by</th>
                  <th className="py-3 text-left font-semibold">Must remain</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Core", "Gumon", "Open, stable, versioned, non-fragmented"],
                  ["Extensions", "Ecosystem", "Optional, removable, compatibility-declared"],
                  ["Services", "Partners", "Operational enablement without core dependency"],
                  ["Delivery", "Partners", "End-client execution (Gumon does not compete)"],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-line/10">
                    <td className="py-3">{row[0]}</td>
                    <td className="py-3 text-mist">{row[1]}</td>
                    <td className="py-3 text-mist">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 ui-small">
            Governance is minimal but firm: stable standards, transparent decisions, and enforced boundaries.
          </p>
        </div>
      </div>
    </section>
  );
}
