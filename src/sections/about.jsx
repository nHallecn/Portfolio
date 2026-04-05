import CONFIG from "../data/siteData.js";

export default function About() {
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