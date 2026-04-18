export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <div>
          <h3 className="footer-brand">Abhishek Kharat.</h3>
          <p className="footer-note">Engineering student building toward AI, backend, cloud, and product roles.</p>
        </div>

        <div className="footer-links">
          {[
            ['Strengths', '#services'],
            ['Projects', '#projects'],
            ['Experience', '#process'],
            ['Open To', '#availability'],
            ['Writing', '#writing'],
            ['Contact', '#contact'],
          ].map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </div>

        <p className="footer-meta">Copyright {year}. Built with React, iteration, and a lot of late-night tweaking.</p>
      </div>
    </footer>
  )
}
