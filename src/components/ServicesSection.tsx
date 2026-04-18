const services = [
  {
    icon: '▦',
    title: 'AI systems and agents',
    description:
      'LLM-assisted tools, document flows, research pipelines, and automation systems designed around a real business task.',
  },
  {
    icon: '</>',
    title: 'Fast full-stack builds',
    description:
      'React frontends, FastAPI services, data modeling, and deployment paths that keep the whole product moving together.',
  },
  {
    icon: '✦',
    title: 'Polished frontend experiences',
    description:
      'Interfaces with stronger hierarchy, smoother interaction, and cleaner visual systems so the work looks as good as it performs.',
  },
  {
    icon: '◌',
    title: 'MVPs that ship cleanly',
    description:
      'From concept to launch, I like projects where strategy, engineering, and speed all matter at the same time.',
  },
]

const tools = [
  'Python',
  'TypeScript',
  'React',
  'FastAPI',
  'Firebase',
  'PostgreSQL',
  'LangChain',
  'GSAP',
  'Docker',
  'Tailwind CSS',
  'Vite',
  'REST APIs',
  'Prompt Design',
  'n8n',
  'GitHub Actions',
  'Vercel',
  'OpenAI API',
  'Supabase',
  'JWT Auth',
  'SQL',
  'UI Motion',
  'Netlify',
]

export default function ServicesSection() {
  const iconLabels = ['AI', 'FS', 'UI', 'MVP']
  const repeatedTools = [...tools, ...tools, ...tools]

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="services-header">
          <div data-animate>
            <h2 className="services-title">What I build best</h2>
          </div>

          <a
            href="/Abhishek_Kharat_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="services-cta"
            data-animate
            data-delay="1"
          >
            <span>View Resume</span>
            <span className="services-cta-icon" aria-hidden="true">
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
        </div>

        <div className="service-grid service-grid-reference">
          {services.map((service, index) => (
            <article key={service.title} className="service-card" data-animate data-delay={String(index + 1)}>
              <span className="service-icon">{iconLabels[index] ?? service.icon}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-copy">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="tech-marquee-shell" data-animate data-delay="2">
          <div className="tech-marquee-track">
            {repeatedTools.map((tool, index) => (
              <span key={`${tool}-${index}`} className="tech-chip">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
