import Reveal from "@/components/Reveal";

export const metadata = { title: "Manifesto" };

export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <Reveal><p className="ui-kicker">PLATFORM MANIFESTO</p></Reveal>
        <Reveal delay={70}><h1 className="ui-h1">Open Infrastructure Platform Manifesto</h1></Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-3xl ui-p">
            Gumon Technology builds open software infrastructure foundations — designed for modular systems,
            repeatable workflows, and partner-led ecosystems.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6">
          {[
            ["Why we exist", "Modern systems are modular. Most teams are not structurally prepared. Gumon reduces structural friction through open foundations and disciplined architecture."],
            ["What we build", "Open infrastructure: standards, primitives, developer tooling, and extension models — not one-off applications."],
            ["Open-first integrity", "Open is structural. Core capabilities must remain accessible, inspectable, and reusable without commercial coercion."],
            ["Platform-first, not service-first", "Gumon does not compete with its ecosystem. We define standards; partners deliver value."],
            ["Structure before scale", "Speed without structure becomes debt. Governance and version discipline preserve coherence over time."],
            ["Documentation is architecture", "Clarity is part of the infrastructure. Onboarding and docs determine adoption durability."],
            ["Ecosystem economics", "Platform value grows through reuse, extensions, and empowered partners — while keeping core open."],
            ["What we are not", "Not a software house. Not a consulting firm. Not a closed vendor. Gumon is an open infrastructure platform builder."],
          ].map(([title, desc]) => (
            <div key={title} className="card p-6 shadow-soft">
              <div className="text-[11px] tracking-[0.28em] uppercase text-accent">Principle</div>
              <h2 className="mt-3 ui-h3">{title}</h2>
              <p className="mt-3 text-sm md:text-base text-mist leading-relaxed max-w-4xl">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
