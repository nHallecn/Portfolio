import CONFIG from "../data/siteData.js";
import StatusBadge from "../components/statusBadge.jsx";
import Tag from "../components/tag.jsx";

export default function Projects() {
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