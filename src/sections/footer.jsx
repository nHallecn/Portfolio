import CONFIG from "../data/siteData.js";

export default 

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