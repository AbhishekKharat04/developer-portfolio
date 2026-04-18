import { useEffect, useState } from 'react'
import { featuredProjects as projects } from '../content/portfolioContent'

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length)
    }, 3200)

    return () => window.clearInterval(timer)
  }, [])

  const activeProject = projects[activeIndex]

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="projects-heading" data-animate>
          <h2 className="projects-title">Recent Projects</h2>
        </div>

        <div className="projects-feature" data-animate data-delay="1">
          <span className="projects-ghost projects-ghost-left" aria-hidden="true">
            {activeProject.ghost}
          </span>
          <span className="projects-ghost projects-ghost-right" aria-hidden="true">
            {activeProject.ghost}
          </span>

          <a
            href={activeProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="featured-project-stage"
          >
            <div className="featured-project-shot">
              <img src={activeProject.image} alt={activeProject.title} />
            </div>

            <div className="featured-project-meta">
              <div>
                <span className="featured-project-name">{activeProject.title}</span>
                <span className="deck-project-category">{activeProject.category}</span>
              </div>
              <div className="featured-project-tags">
                {activeProject.tags.map((tag) => (
                  <span key={tag} className="featured-project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        </div>

        <div className="project-deck-shell" data-animate data-delay="2">
          <span className="deck-ghost deck-ghost-left" aria-hidden="true">
            PROJECTS
          </span>
          <span className="deck-ghost deck-ghost-right" aria-hidden="true">
            PROJECTS
          </span>

          <div className="project-deck-stage">
            {projects.map((project, index) => {
              const offset = (index - activeIndex + projects.length) % projects.length
              const positionClass = offset === 0 ? 'is-center' : offset === 1 ? 'is-right' : 'is-left'

              return (
                <a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`deck-project-card ${positionClass}`}
                >
                  <div className="deck-project-image">
                    <img src={project.image} alt={project.title} />
                  </div>

                  <div className="deck-project-overlay" />

                  <div className="deck-project-meta">
                    <div>
                      <span className="deck-project-name">{project.title}</span>
                      <span className="deck-project-category">{project.category}</span>
                    </div>

                    <div className="deck-project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="deck-project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
