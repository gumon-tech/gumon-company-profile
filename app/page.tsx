import Link from "next/link";

const pillars = [
  {
    title: "Event-Driven Microservices",
    desc: "Systems engineered for scale, resilience, and real-world operations.",
  },
  {
    title: "Secure Distributed Systems",
    desc: "Encrypted data layer, key-based access control, and defense-in-depth design.",
  },
  {
    title: "Offline-First Synchronization",
    desc: "Edge + cloud hybrid deployments with robust offline recovery behavior.",
  },
  {
    title: "Institutional Deployment",
    desc: "Healthcare, government, and enterprise environments where reliability matters.",
  },
];

export default function Page() {
  return (
    <>
      <section className="ui-section">
        <div className="ui-container">
          <p className="ui-kicker">SOVEREIGN INFRASTRUCTURE • THAILAND → GLOBAL</p>
          <h1 className="ui-h1">
            Engineering secure digital infrastructure
            <br className="hidden md:block" />
            for institutions that cannot fail.
          </h1>
          <p className="mt-6 max-w-2xl ui-p">
            Gumon Technology designs and controls secure event-driven microservices systems
            for healthcare, government, and enterprise environments—operating through a
            partner-led ecosystem while governing core IP.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/deployments"
              className="glass rounded-xl2 px-5 py-3 shadow-glow hover:shadow-none transition"
            >
              Explore Deployments
            </Link>
            <Link
              href="/ecosystem"
              className="rounded-xl2 px-5 py-3 border border-line text-mist hover:text-ink hover:border-ink/30 transition"
            >
              View Ecosystem Model
            </Link>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {pillars.map((p) => (
              <div key={p.title} className="glass rounded-xl2 p-6 shadow-glow">
                <div className="text-[11px] tracking-[0.28em] uppercase text-olive">
                  Pillar
                </div>
                <div className="mt-3 text-lg font-semibold">{p.title}</div>
                <p className="mt-2 text-sm text-mist leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 glass rounded-xl2 p-6 shadow-glow overflow-hidden relative">
              <div className="absolute inset-0 opacity-35">
                <img
                  src="/assets/selected/healthcare-cvmcra-01.png"
                  alt="Deployment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative">
                <p className="ui-kicker">PROOF OF EXECUTION</p>
                <h2 className="mt-3 ui-h2">Deployed in institutional environments.</h2>
                <p className="mt-3 text-sm md:text-base text-mist leading-relaxed max-w-xl">
                  Multi-site kiosk attendance systems, offline+online synchronization, backend mini ERP,
                  and remote operations—built for real constraints and uptime expectations.
                </p>
                <Link
                  href="/deployments"
                  className="mt-6 inline-block text-sm text-ink underline underline-offset-4 decoration-olive/50 hover:decoration-olive transition"
                >
                  See deployments →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 glass rounded-xl2 p-6 shadow-glow overflow-hidden relative">
              <div className="absolute inset-0 opacity-30">
                <img
                  src="/assets/selected/government-ncsa-01.png"
                  alt="NCSA"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative">
                <p className="ui-kicker">TRUST & AUTHORITY</p>
                <h2 className="mt-3 ui-h2">Government-level engagement.</h2>
                <p className="mt-3 text-sm md:text-base text-mist leading-relaxed">
                  Institutional cybersecurity engagement framed as engineering research and secure
                  architecture—built for clarity, not noise.
                </p>
                <Link
                  href="/research"
                  className="mt-6 inline-block text-sm text-ink underline underline-offset-4 decoration-olive/50 hover:decoration-olive transition"
                >
                  Explore research →
                </Link>
              </div>
            </div>
          </div>
        <div className="mt-16 glass rounded-xl2 p-7 shadow-glow overflow-hidden relative">
  <div className="absolute inset-0 opacity-25">
    <img
      src="/assets/selected/ecosystem-dks-02.png"
      alt="Texture"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="relative grid lg:grid-cols-12 gap-6 items-start">
    <div className="lg:col-span-7">
      <p className="ui-kicker">IDENTITY</p>
      <h2 className="mt-3 ui-h2">Serious work. Real personality.</h2>
      <p className="mt-3 text-sm md:text-base text-mist leading-relaxed max-w-2xl">
        We build infrastructure for environments where failure is not an option.
        But the people behind it are sharp, direct, and relentless about execution.
        If you know us, you know how hard we push standards—quietly.
      </p>
      <div className="mt-6 text-xs text-mist leading-relaxed max-w-xl">
        The mark represents watchfulness and control—an always-on posture for secure distributed systems.
      </div>
    </div>
    <div className="lg:col-span-5">
      <div className="grid grid-cols-5 gap-3 items-center justify-items-center">
        <img className="h-10 w-auto opacity-90" src="/assets/logo/gumon-slate.png" alt="Gumon mark slate" />
        <img className="h-10 w-auto opacity-90" src="/assets/logo/gumon-olive.png" alt="Gumon mark olive" />
        <img className="h-10 w-auto opacity-90" src="/assets/logo/gumon-black.png" alt="Gumon mark black" />
        <img className="h-10 w-auto opacity-90" src="/assets/logo/gumon-rose.png" alt="Gumon mark rose" />
        <div className="rounded-lg border border-line bg-bg1 p-2">
          <img className="h-10 w-auto" src="/assets/logo/gumon-white.png" alt="Gumon mark white" />
        </div>
      </div>
      <div className="mt-5 text-xs text-mist leading-relaxed">
        Color variants are used as context signals (not decoration): institutional, field, and research modes.
      </div>
    </div>
  </div>
</div>

</div>
      </section>
    </>
  );
}
