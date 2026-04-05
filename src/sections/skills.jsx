import CONFIG from "../data/siteData.js";
import Tag from "../components/tag.jsx";

export default function Skills() {
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