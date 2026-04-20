import CONFIG from "../data/siteData.js";

export default function Hero() {
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
          Based in {CONFIG.location}, crafting solutions in fintech, logistics, and AI
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

