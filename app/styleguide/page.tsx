import Reveal from "@/components/Reveal";

export const metadata = { title: "Styleguide" };

export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <Reveal><p className="ui-kicker">SYSTEM</p></Reveal>
        <Reveal delay={70}><h1 className="ui-h1">Gumon UI Styleguide</h1></Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-3xl ui-p">
            Institutional platform primitives: calm authority, structural clarity, developer trust.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10">
          <div className="card p-6 shadow-soft">
            <div className="ui-kicker">TYPOGRAPHY</div>
            <h2 className="mt-3 ui-h2">Heading Level 2</h2>
            <h3 className="mt-4 ui-h3">Heading Level 3</h3>
            <p className="mt-4 ui-p">
              Body text sample — the platform voice is calm, direct, and verifiable. No hype. No sales language.
            </p>
            <p className="mt-3 ui-small">Small text for hints, policy notes, and secondary explanations.</p>
          </div>

          <div className="card p-6 shadow-soft">
            <div className="ui-kicker">BUTTONS</div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a className="glass rounded-xl2 px-5 py-3 shadow-soft hover:shadow-none transition text-ink" href="/manifesto">
                Primary (glass)
              </a>
              <a className="rounded-xl2 px-5 py-3 border border-line/25 text-mist hover:text-ink hover:border-ink/25 transition" href="/architecture">
                Secondary (outline)
              </a>
              <a className="text-ink underline underline-offset-4 decoration-accent hover:decoration-accent transition" href="/docs">
                Tertiary (link)
              </a>
            </div>
          </div>

          <div className="card p-6 shadow-soft">
            <div className="ui-kicker">CODE BLOCK</div>
            <pre className="mt-4 codeblock">{`gumon init my-system
gumon add service auth
gumon add service notify`}</pre>
          </div>

          <div className="card p-6 shadow-soft">
            <div className="ui-kicker">TABLE</div>
            <div className="mt-6 overflow-x-auto">
              <table className="min-w-[720px] w-full text-sm">
                <thead className="text-mist">
                  <tr className="border-b border-line/20">
                    <th className="py-3 text-left font-semibold">Layer</th>
                    <th className="py-3 text-left font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Core", "Standards, primitives, governance"],
                    ["Extensions", "Optional add-ons with declared compatibility"],
                    ["Delivery", "Partner-led solution execution"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-b border-line/10">
                      <td className="py-3">{row[0]}</td>
                      <td className="py-3 text-mist">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
