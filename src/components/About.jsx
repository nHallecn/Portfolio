import './About.css'
import myPhoto from '../../Assets/njihalle.jpeg'

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-placeholder">
                <img src={myPhoto} alt="Halle" className="profile-img" />
              </div>
              <div className="image-decoration"></div>
              <div className="image-dots"></div>
            </div>
          </div>

          <div className="about-content">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Building the future, one line of code at a time</p>

            <div className="about-text">
              <p>
                I'm a passionate <strong>full-stack JavaScript developer</strong> with a deep interest in 
                artificial intelligence, fintech, and crypto technologies. My journey in tech is driven 
                by a desire to create intelligent solutions that make a real impact.
              </p>
              <p>
                Currently pursuing my <strong>HND in Software Engineering</strong>, I spend my time 
                building AI-powered applications, exploring automation tools, and developing fintech 
                solutions. I believe in learning by doing, which is why I'm constantly working on 
                real-world projects.
              </p>
              <p>
                My goal is to <strong>launch my own tech company</strong>, creating products that 
                leverage AI and blockchain to solve everyday problems. I'm particularly excited about 
                the intersection of AI agents, cryptocurrency, and financial technology.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>

            <a href="#" className="btn btn-primary" download>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
