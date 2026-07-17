import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dai818 — Ideas, code & quiet curiosity",
  description:
    "The personal homepage of Dai818 — a small corner for code, experiments, and ideas.",
};

export default function Home() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Dai818 home">
          <span>DAI</span><i>/</i><span>818</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="https://github.com/Dai818" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> Personal index · 2026</div>
            <h1 id="hero-title">
              <span>Ideas, code</span>
              <span className="serif">&amp; quiet curiosity.</span>
            </h1>
            <p className="hero-intro">
              Hello, I’m <strong>Dai818</strong>. I explore ideas through code—building small
              experiments, learning in public, and turning curiosity into useful things.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">See what I’m exploring <span>↓</span></a>
              <a className="button button-ghost" href="https://github.com/Dai818" target="_blank" rel="noreferrer">Follow on GitHub</a>
            </div>
          </div>

          <aside className="identity-card" aria-label="Dai818 profile card">
            <div className="orb orb-coral" />
            <div className="orb orb-blue" />
            <div className="portrait-frame">
              <img src="https://avatars.githubusercontent.com/Dai818?v=4" alt="Dai818 GitHub avatar" />
            </div>
            <div className="identity-meta">
              <div><span className="meta-label">ONLINE AS</span><strong>@Dai818</strong></div>
              <span className="status-pill"><span /> Exploring</span>
            </div>
          </aside>
        </section>

        <section className="ticker" aria-label="Interests">
          <div><span>RESEARCH</span><i>✦</i><span>PYTHON</span><i>✦</i><span>MACHINE LEARNING</span><i>✦</i><span>OPEN SOURCE</span><i>✦</i><span>CREATIVE CODE</span></div>
        </section>

        <section className="about-grid" id="about">
          <div className="section-heading">
            <span className="section-number">01</span>
            <h2>A small corner<br />of the internet.</h2>
          </div>
          <div className="about-copy">
            <p className="lead">This page is a living index—not a polished résumé.</p>
            <p>It collects the projects, questions, and experiments I want to keep close. The thread connecting them is simple: understand deeply, make carefully, and leave things a little clearer than I found them.</p>
            <div className="stats">
              <div className="stat"><strong>01</strong><span>public repository</span></div>
              <div className="stat"><strong>06</strong><span>starred projects</span></div>
              <div className="stat accent"><strong>∞</strong><span>questions left</span></div>
            </div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-kicker"><span className="section-number">02</span><span>SELECTED TRACE</span></div>
          <article className="project-card">
            <div className="project-index">01 / 01</div>
            <div className="project-main">
              <div className="project-tags"><span>PYTHON</span><span>OPEN SOURCE</span></div>
              <h2>DELT</h2>
              <p>A public Python project in my GitHub workspace—one small trace of what I’m learning and exploring.</p>
            </div>
            <a className="project-link" href="https://github.com/Dai818/DELT" target="_blank" rel="noreferrer" aria-label="View DELT on GitHub">↗</a>
          </article>
        </section>

        <section className="principles" aria-labelledby="principles-title">
          <div className="section-heading compact"><span className="section-number">03</span><h2 id="principles-title">A working<br />philosophy.</h2></div>
          <div className="principle-list">
            <article><span>01</span><div><h3>Explore widely.</h3><p>Follow the interesting question before the obvious answer.</p></div></article>
            <article><span>02</span><div><h3>Build carefully.</h3><p>Make the small details feel intentional and human.</p></div></article>
            <article><span>03</span><div><h3>Share openly.</h3><p>Leave a useful trail for the next curious person.</p></div></article>
          </div>
        </section>

        <section className="contact-band">
          <div><span>Want to see what comes next?</span><h2>Let’s stay curious.</h2></div>
          <a href="https://github.com/Dai818" target="_blank" rel="noreferrer">Find me on GitHub <span>↗</span></a>
        </section>
      </main>

      <footer><span>© 2026 DAI818</span><span>MADE WITH CURIOSITY</span><a href="#top">BACK TO TOP ↑</a></footer>
    </div>
  );
}
