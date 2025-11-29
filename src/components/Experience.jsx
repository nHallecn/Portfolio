import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Software Development Intern',
      organization: 'Camrail',
      location: 'Douala, Cameroon',
      period: '2024',
      description: 'Developed internal management systems, including a Training Management Application. Gained hands-on experience in enterprise software development and agile methodologies.',
      skills: ['React', 'Node.js', 'PostgreSQL', 'Agile']
    },
    {
      type: 'work',
      title: 'Freelance Developer & Tech Entrepreneur',
      organization: 'Self-Employed',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Building fintech solutions, AI-powered applications, and automation tools. Exploring forex trading strategies and crypto-driven technologies.',
      skills: ['Full-Stack Dev', 'AI/ML', 'Fintech', 'Crypto']
    }
  ]

  const education = [
    {
      degree: 'Bachelor\'s Degree in Software Engineering',
      institution: 'University',
      period: 'Expected 2027',
      status: 'In Progress',
      description: 'Pursuing advanced studies in software engineering, focusing on AI systems, distributed computing, and modern development practices.'
    },
    {
      degree: 'HND in Software Engineering',
      institution: 'Higher National Diploma',
      period: 'Expected 2026',
      status: 'In Progress',
      description: 'Currently Level 2 student, building strong foundations in programming, database management, and software development methodologies.'
    }
  ]

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="experience-header">
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey and academic background
          </p>
        </div>

        <div className="experience-grid">
          <div className="experience-column">
            <h3 className="column-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
              Work Experience
            </h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content glass">
                    <div className="timeline-header">
                      <h4 className="timeline-title">{exp.title}</h4>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    <p className="timeline-org">{exp.organization} - {exp.location}</p>
                    <p className="timeline-description">{exp.description}</p>
                    <div className="timeline-skills">
                      {exp.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-badge">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-column">
            <h3 className="column-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              Education
            </h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content glass">
                    <div className="timeline-header">
                      <h4 className="timeline-title">{edu.degree}</h4>
                      <span className="timeline-period">{edu.period}</span>
                    </div>
                    <p className="timeline-org">{edu.institution}</p>
                    <span className="status-badge">{edu.status}</span>
                    <p className="timeline-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
