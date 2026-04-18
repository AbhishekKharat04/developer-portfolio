const items = [
  'AI systems',
  'FastAPI APIs',
  'React interfaces',
  'Automation workflows',
  'Full-stack delivery',
  'Product thinking',
  'LangChain tooling',
  'Realtime apps',
  'TypeScript builds',
  'Responsive UI',
]

export default function CapabilityBand() {
  const repeated = [...items, ...items]

  return (
    <div className="feature-band">
      <div className="marquee-wrap">
        <div className="marquee-track">
          {repeated.map((item, index) => (
            <div key={`${item}-${index}`} className="marquee-pill">
              <span className="marquee-dot" aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
