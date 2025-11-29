import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <span className="logo-text">NHC</span>
              <span className="logo-dot"></span>
            </a>
            <p className="footer-tagline">
              Building intelligent digital solutions
            </p>
          </div>

          <nav className="footer-nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="footer-bottom">
            <p className="copyright">
              &copy; {currentYear} NJI HALLE CHO NKWENTI. All rights reserved.
            </p>
            <p className="footer-credit">
              Designed & Built with 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="heart-icon">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
