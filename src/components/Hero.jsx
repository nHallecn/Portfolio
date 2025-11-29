import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-particles">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i} 
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        <div className="hero-grid"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-badge animate-fade-in">
          <span className="badge-dot"></span>
          Open to opportunities
        </div>

        <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.1s' }}>
          NJI HALLE CHO NKWENTI
        </h1>

        <p className="hero-role animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Full-Stack JavaScript Developer | AI & Automation Builder
        </p>

        <p className="hero-description animate-fade-in" style={{ animationDelay: '0.3s' }}>
          I build intelligent digital solutions using JavaScript, AI systems, and automation. 
          Currently working on fintech, AI agents, and crypto-driven tools while completing my HND & degree.
        </p>

        <div className="hero-buttons animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a href="#projects" className="btn btn-primary">
            View My Work
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>

        <div className="hero-scroll animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a href="#about" className="scroll-indicator">
            <span>Scroll to explore</span>
            <div className="scroll-mouse">
              <div className="scroll-wheel"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
