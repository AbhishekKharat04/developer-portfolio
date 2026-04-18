import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/PortfolioHero'
import About from './components/ServicesSection'
import Projects from './components/ProjectsSection'
import Experience from './components/ProcessSection'
import Availability from './components/AvailabilitySection'
import Writing from './components/BlogSection'
import Contact from './components/ContactSection'
import Footer from './components/SiteFooter'

export default function App() {
  useEffect(() => {
    document.title = 'Abhishek Kharat | AI, Backend, and Full-Stack Projects'

    const description = 'Abhishek Kharat | engineering student building AI, backend, cloud-minded, and full-stack projects with a product-first lens.'
    let descriptionTag = document.querySelector('meta[name="description"]')

    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.setAttribute('name', 'description')
      document.head.appendChild(descriptionTag)
    }

    descriptionTag.setAttribute('content', description)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -10% 0px' },
    )

    document.querySelectorAll('[data-animate]').forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Availability />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
