const options = [
  {
    badge: 'Best fit',
    title: 'AI / ML internship',
    description:
      'Best for teams that want a Python-first builder who can learn quickly, work across systems, and contribute to applied AI work with real execution energy.',
    points: ['Python and API comfort', 'LLM workflow interest', 'Fast learner with project proof'],
  },
  {
    badge: 'Most aligned',
    title: 'Backend / cloud role',
    description:
      'A strong fit for backend-heavy teams that value clean APIs, data modeling, debugging discipline, and someone who can grow into cloud responsibility fast.',
    points: ['FastAPI and PostgreSQL work', 'Systems thinking from engineering', 'Deployment-minded approach'],
    featured: true,
  },
  {
    badge: 'Selective',
    title: 'Website builds for clients',
    description:
      'I have not freelanced yet, but I do want to start. So I keep this as an honest future-facing section for a small number of landing pages or portfolio builds.',
    points: ['No fake client claims', 'Good fit for smaller site builds', 'Useful if someone wants to work with me early'],
  },
]

export default function AvailabilitySection() {
  return (
    <section id="availability" className="section">
      <div className="container">
        <div className="split-intro">
          <div data-animate>
            <p className="eyebrow">Open To</p>
            <h2 className="section-title">Open to internships, early-career roles, and selective builds.</h2>
          </div>

          <div className="section-side-copy" data-animate data-delay="1">
            Right now I am most interested in internships and early-career engineering roles, while
            still leaving room for a small number of thoughtful website builds as I grow into
            freelance work the honest way.
          </div>
        </div>

        <div className="offer-grid">
          {options.map((option, index) => (
            <article
              key={option.title}
              className={`offer-card ${option.featured ? 'is-featured' : ''}`}
              data-animate
              data-delay={String(index + 1)}
            >
              <span className="offer-badge">{option.badge}</span>
              <h3 className="offer-title">{option.title}</h3>
              <p className="offer-description">{option.description}</p>

              <ul className="offer-list">
                {option.points.map((point) => (
                  <li key={point}>
                    <span className="offer-check" aria-hidden="true">
                      +
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="offer-link">
                Let&apos;s talk
                <span className="button-icon" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
