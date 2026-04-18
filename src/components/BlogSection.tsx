const featuredPost = {
  title: 'Python Dictionaries Explained with Real-Life Use Cases',
  date: 'Feb 16, 2026',
  url: 'https://medium.com/@abhikharat0424/python-dictionaries-explained-with-real-life-use-cases-32ddcc4795be',
  summary:
    'A beginner-friendly article that explains Python dictionaries through practical examples like phone books, student records, and basic application data.',
}

export default function BlogSection() {
  return (
    <section id="writing" className="section">
      <div className="container">
        <div className="writing-layout">
          <div className="writing-intro" data-animate>
            <p className="eyebrow">Writing</p>
            <h2 className="section-title">Writing in public helps the technical story.</h2>
            <p className="section-side-copy">
              I like keeping a small writing trail alongside the projects. It shows how I think, how
              I explain technical ideas, and how I learn in public instead of only behind the code.
            </p>
          </div>

          <a
            href={featuredPost.url}
            target="_blank"
            rel="noopener noreferrer"
            className="writing-feature"
            data-animate
            data-delay="1"
          >
            <span className="writing-badge">{featuredPost.date}</span>
            <h3 className="writing-title">{featuredPost.title}</h3>
            <p className="writing-copy">{featuredPost.summary}</p>
            <span className="writing-link">
              Read article
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
            </span>
          </a>

          <div className="writing-profile" data-animate data-delay="2">
            <span className="writing-badge">Medium profile</span>
            <h3 className="writing-title">More notes will live here over time.</h3>
            <p className="writing-copy">
              I am keeping this section compact for now because one relevant article is stronger than
              filler. As I write more about Python, AI, backend systems, and what I learn in
              engineering, this will grow with the portfolio.
            </p>

            <a
              href="https://medium.com/@abhikharat0424"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              Visit Medium
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
