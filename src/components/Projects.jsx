import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'CashAccess',
      description: 'A fintech mobile application for mobile money transactions and digital payments. Enables seamless money transfers, bill payments, and financial management for users across different mobile money platforms.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Express', 'Payment APIs'],
      image: null,
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Training Management App',
      description: 'An internal enterprise system developed for Camrail to manage employee training programs, track certifications, schedule sessions, and generate comprehensive training reports.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'JWT Auth'],
      image: null,
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'AI RAG Assistant',
      description: 'An intelligent chatbot powered by Retrieval-Augmented Generation that can search through documents and provide accurate, context-aware responses. Built with vector embeddings for semantic search.',
      technologies: ['Python', 'OpenAI API', 'Pinecone', 'LangChain', 'React'],
      image: null,
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Full-Stack JS Web Apps',
      description: 'A collection of full-stack JavaScript web applications showcasing various functionalities including user authentication, real-time features, REST APIs, and modern UI/UX design patterns.',
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Socket.io'],
      image: null,
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Some of the projects I've worked on that showcase my skills and interests
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card glass ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <div className="project-image-placeholder">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21,15 16,10 5,21"/>
                  </svg>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.demoUrl} className="project-link" aria-label="View Demo">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15,3 21,3 21,9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                    <a href={project.githubUrl} className="project-link" aria-label="View Code">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
