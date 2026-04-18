const steps = [
  {
    step: '2026',
    title: 'Innomatics Research Labs internship',
    description:
      'Built practical Python confidence in an internship setting and connected core programming concepts to real application work and learning-by-building.',
  },
  {
    step: 'B.E.',
    title: 'Automation and Robotics engineering',
    description:
      'Currently pursuing a B.E. in Automation and Robotics with an engineering foundation that naturally supports systems thinking, automation, and applied AI interests.',
  },
  {
    step: 'AI',
    title: 'AI, backend, and cloud direction',
    description:
      'My strongest direction is AI-assisted products, Python backends, APIs, data flow, and the cloud-minded engineering habits that make those systems reliable.',
  },
  {
    step: 'SHIP',
    title: 'Proof through shipped projects',
    description:
      'For an early-career profile, the best signal is still real work: community product builds, FastAPI backend projects, and AI workflow experiments that are visible and usable.',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="process-layout">
          <div data-animate>
            <p className="eyebrow">Experience</p>
            <h2 className="section-title">Experience, education, and career direction.</h2>
            <p className="section-side-copy">
              A quick view of what I have done so far, what I am studying right now, and the kind of
              engineering work I want to grow into next.
            </p>

            <div className="process-note">
              I am still early in the journey, so I lead with honesty: strong learning velocity,
              visible projects, and a clear focus on AI, backend, cloud, and product engineering.
            </div>
          </div>

          <div className="process-grid">
            {steps.map((step, index) => (
              <article key={step.title} className="process-card" data-animate data-delay={String(index + 1)}>
                <span className="process-step">{step.step}</span>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-copy">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
