import { useState, useEffect, useRef } from "react";

// ============================================================
//  EDIT YOUR DATA HERE — everything you need to update is
//  in this one CONFIG object. Touch nothing else unless you
//  want to change layout or design.
// ============================================================


// ============================================================
//  STYLES
// ============================================================


// ============================================================
//  HOOK: scroll reveal
// ============================================================


// ============================================================
//  SMALL COMPONENTS
// ============================================================



// ============================================================
//  SECTIONS
// ============================================================


function Hero() {
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section className="hero" id="hero">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-glow2" />
      <div className="hero-content">
        {CONFIG.availableForWork && (
          <div className="hero-badge fade-up">
            <span className="badge-dot" />
            Available for freelance work
          </div>
        )}
        <h1 className="hero-h1 fade-up delay-1">
          {CONFIG.name}
          <span className="line-outline">{CONFIG.tagline}</span>
          <span className="line-accent"> {CONFIG.subTagline}</span>
        </h1>
        <p className="hero-sub fade-up delay-2">
          Building <strong>scalable digital products</strong> for Africa and the world.
          Based in {CONFIG.location} — crafting solutions in fintech, logistics, and AI
          that close the gap between Africa and global technology.
        </p>
        <div className="hero-actions fade-up delay-3">
          <button className="btn-primary" onClick={() => scroll("projects")}>View my work ↓</button>
          <button className="btn-secondary" onClick={() => scroll("contact")}>Get in touch</button>
        </div>
        <div className="hero-stats fade-up delay-4">
          {CONFIG.stats.map((s) => (
            <div key={s.label}>
              <div className="stat-num">{s.num.replace(/[+xM]/, "")}<span>{s.num.match(/[+xM]/)?.[0]}</span></div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <p className="section-label reveal">What I build with</p>
      <h2 className="section-title reveal">My stack</h2>
      <p className="section-desc reveal">From frontend interfaces to backend APIs and AI integrations — I build end-to-end.</p>
      <div className="skills-grid reveal">
        {CONFIG.skills.map((s) => (
          <div className="skill-card" key={s.title}>
            <span className="skill-icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <div className="skill-tags">
              {s.tags.map((t) => <Tag key={t.label} label={t.label} color={t.color} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <p className="section-label reveal">What I'm building</p>
      <h2 className="section-title reveal">Projects</h2>
      <p className="section-desc reveal">Real problems, real products — from MVPs to startup ideas targeting the African market.</p>
      <div className="projects-grid reveal">
        {CONFIG.projects.map((p) => (
          <div className="project-card" key={p.num} onClick={() => p.link !== "#" && window.open(p.link, "_blank")}>
            <div className="project-num">
              {p.num} — <StatusBadge status={p.status} color={p.statusColor} />
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="project-footer">
              <div className="p-stack">
                {p.stack.map((t) => <Tag key={t.label} label={t.label} color={t.color} />)}
              </div>
              <span className="p-arrow">↗</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section section-alt" id="about">
      <p className="section-label reveal">The person behind the code</p>
      <h2 className="section-title reveal">About me</h2>
      <div className="about-grid">
        <div className="about-text reveal">
          {CONFIG.bio.map((para, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
          ))}
        </div>
        <div className="timeline reveal">
          {CONFIG.timeline.map((t) => (
            <div className="tl-item" key={t.year}>
              <div className="tl-year">{t.year}</div>
              <div className={`tl-dot${t.dim ? " dim" : ""}`} />
              <div className="tl-body">
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section" id="contact">
      <p className="section-label reveal">Let's work together</p>
      <h2 className="section-title reveal">Get in touch</h2>
      <p className="section-desc reveal">
        Open to freelance projects, collaborations, and conversations about building in Africa.
      </p>
      <div className="contact-inner reveal">
        <div className="contact-links">
          {CONFIG.contact.map((c) => (
            <a className="contact-link" key={c.label} href={c.href} target="_blank" rel="noreferrer">
              <div className="cl-left">
                <div className="cl-icon">{c.icon}</div>
                <div>
                  <div className="cl-name">{c.label}</div>
                  <div className="cl-handle">{c.handle}</div>
                </div>
              </div>
              <span className="cl-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="footer">
      <p>© 2025 <span>{CONFIG.name}</span> — Full-Stack Developer, {CONFIG.location}</p>
      <div className="footer-links">
        {["hero", "projects", "contact"].map((s) => (
          <a key={s} onClick={() => scroll(s)}>{s === "hero" ? "Top" : s.charAt(0).toUpperCase() + s.slice(1)}</a>
        ))}
      </div>
    </footer>
  );
}

// ============================================================
//  ROOT APP
// ============================================================
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  useReveal();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <style>{css}</style>
      <Nav scrolled={scrolled} />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
