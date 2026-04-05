import CONFIG from "../data/siteData.js";

export default function Contact() {
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