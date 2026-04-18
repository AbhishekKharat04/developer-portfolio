import { heroContent } from '../content/portfolioContent'

export default function PortfolioHero() {
  return (
    <section id="hero" className="hero hero-reference">
      <div className="hero-backdrop" aria-hidden="true">
        <img src={heroContent.image} alt="" className="hero-backdrop-image" />
      </div>

      <div className="hero-tint hero-tint-warm" aria-hidden="true" />
      <div className="hero-tint hero-tint-depth" aria-hidden="true" />

      <div className="container hero-frame">
        <div className="hero-copy-panel" data-animate>
          <p className="hero-kicker">{heroContent.kicker}</p>

          <p className="hero-lead">{heroContent.lead}</p>

          <a href={heroContent.ctaHref} className="hero-cta">
            <span>{heroContent.ctaLabel}</span>
            <span className="hero-cta-icon" aria-hidden="true">
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

        <div className="hero-name-stack" data-animate data-delay="2">
          <span className="hero-name-shadow" aria-hidden="true">
            {heroContent.name}
          </span>
          <span className="hero-name-primary">{heroContent.name}</span>
        </div>
      </div>
    </section>
  )
}
