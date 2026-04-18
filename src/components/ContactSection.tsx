const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abhishek-robotics/' },
  { name: 'GitHub', url: 'https://github.com/AbhishekKharat04' },
  { name: 'Hugging Face', url: 'https://huggingface.co/AbhishekKharat11' },
  { name: 'Medium', url: 'https://medium.com/@abhikharat0424' },
  { name: 'Resume', url: '/Abhishek_Kharat_Resume.pdf' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-shell" data-animate="scale">
          <div className="contact-main">
            <p className="eyebrow">Contact</p>
            <h2 className="contact-title">Let&apos;s talk about internships, roles, or a smart build.</h2>
            <p className="body-copy">
              If you are hiring for AI, backend, cloud, or product engineering potential, I would
              love to connect. I am also open to a small number of website or portfolio builds while
              I grow real client experience.
            </p>

            <div className="hero-actions">
              <a href="mailto:abhikharat0424@gmail.com" className="primary-button">
                abhikharat0424@gmail.com
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
            </div>
          </div>

          <div className="contact-sidebar">
            <div className="contact-card">
              <span className="contact-label">Focus</span>
              <p>AI systems, backend engineering, cloud-minded development, automation, and polished product work.</p>
            </div>

            <div className="contact-card">
              <span className="contact-label">Find me</span>
              <div className="social-grid">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span>{social.name}</span>
                    <span aria-hidden="true">/</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-card">
              <span className="contact-label">Availability</span>
              <p className="contact-email">Open to internships, entry-level engineering roles, and selective freelance builds.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
