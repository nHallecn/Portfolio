

export default function Nav({ scrolled }) {
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <span className="nav-logo" onClick={() => scroll("hero")}>
        {CONFIG.initials}<span>.</span>
      </span>
      <ul className="nav-links">
        {["skills", "projects", "about", "contact"].map((s) => (
          <li key={s}><a onClick={() => scroll(s)}>{s}</a></li>
        ))}
      </ul>
      <span className="nav-cta" onClick={() => scroll("contact")}>Hire me →</span>
    </nav>
  );
}