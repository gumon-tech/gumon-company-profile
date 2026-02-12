import Reveal from "@/components/Reveal";

export const metadata = { title: "Docs" };

export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <Reveal><p className="ui-kicker">DOCUMENTATION</p></Reveal>
        <Reveal delay={70}><h1 className="ui-h1">Documentation is infrastructure</h1></Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-3xl ui-p">
            Clear onboarding, version policy, and compatibility declarations are structural assets. If teams cannot
            start consistently, the platform cannot scale.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="card p-6 shadow-soft">
            <div className="ui-kicker">PRIMARY</div>
            <h2 className="mt-3 ui-h3">Gumon Wiki</h2>
            <p className="mt-3 text-sm md:text-base text-mist leading-relaxed">
              Technical documentation, platform notes, and research references.
            </p>
            <a
              className="mt-5 inline-block text-sm text-ink underline underline-offset-4 decoration-accent hover:decoration-accent transition"
              href="https://wiki.gumon.io/"
              target="_blank"
              rel="noreferrer"
            >
              Open wiki →
            </a>
          </div>

          <div className="card p-6 shadow-soft">
            <div className="ui-kicker">SECONDARY</div>
            <h2 className="mt-3 ui-h3">Repository & Releases</h2>
            <p className="mt-3 text-sm md:text-base text-mist leading-relaxed">
              Source code, changelogs, and release discipline (where applicable).
            </p>
            <a
              className="mt-5 inline-block text-sm text-ink underline underline-offset-4 decoration-accent hover:decoration-accent transition"
              href="https://github.com/gumon-tech"
              target="_blank"
              rel="noreferrer"
            >
              Visit GitHub →
            </a>
          </div>
        </div>

        <div className="mt-12 card p-6 shadow-soft">
          <div className="ui-kicker">QUICK START (ILLUSTRATIVE)</div>
          <pre className="mt-3 codeblock">{`# install tooling
npm i -g gumon-cli

# initialize
gumon init my-system

# add modules
gumon add service auth
gumon add service notify`}</pre>
          <p className="mt-4 ui-small">
            Replace with the canonical commands from wiki once finalized.
          </p>
        </div>
      </div>
    </section>
  );
}
