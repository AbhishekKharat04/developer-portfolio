import { useEffect, useState } from 'react'

const links = [
  { label: 'Strengths', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#process' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="site-nav" aria-label="Primary">
      <div className={`nav-shell ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="nav-header-mobile">
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`nav-links ${isOpen ? 'is-open' : ''}`}>
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
