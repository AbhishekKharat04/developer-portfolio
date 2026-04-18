export type HeroContent = {
  ctaHref: string
  ctaLabel: string
  image: string
  kicker: string
  lead: string
  name: string
}

export type PortfolioProject = {
  category: string
  description: string
  ghost: string
  image: string
  linkLabel: string
  tags: string[]
  title: string
  url: string
}

export const heroContent: HeroContent = {
  image: '/images/hero-current.jpg',
  kicker: 'AI Engineer',
  lead: 'I build full-stack products, AI tools and automations that save your time and actually get shipped.',
  ctaHref: '#contact',
  ctaLabel: 'Start Your Project',
  name: 'Abhishek',
}

export const featuredProjects: PortfolioProject[] = [
  {
    title: 'Hood Reviews',
    category: 'Community product',
    tags: ['React', 'Firebase', 'Vercel'],
    description: 'A map-first review platform built for hyperlocal discovery and trusted neighborhood feedback.',
    image: '/images/project-hood-reviews.png',
    url: 'https://hood-reviews.vercel.app',
    ghost: 'REVIEWS',
    linkLabel: 'Visit live project',
  },
  {
    title: 'F.R.I.D.A.Y. AI Assistant',
    category: 'System automation AI',
    tags: ['GenAI', 'LLM Agents', 'Python'],
    description: 'A personalized desktop AI assistant that navigates the file system, coordinates tasks, and operates fully autonomously.',
    image: '/images/project-friday.png',
    url: 'https://github.com/AbhishekKharat04/Friday',
    ghost: 'AGENTS',
    linkLabel: 'View repository',
  },
  {
    title: 'AI Resume Screener',
    category: 'AI workflow',
    tags: ['LangChain', 'OpenAI', 'Streamlit'],
    description: 'An AI resume screening workflow focused on ranking, explainability, and practical recruiter outputs.',
    image: '/images/project-ai-resume.png',
    url: 'https://my-resume-screener-ap-ukehbgrtapvkhd4u9hxvj9.streamlit.app',
    ghost: 'LLM',
    linkLabel: 'View live application',
  },
  {
    title: 'Disaster Response Platform',
    category: 'Machine learning platform',
    tags: ['Data Pipelines', 'Python', 'ML'],
    description: 'A data pipeline platform built for global hackathons to categorize emergency messages using NLP to accelerate crisis response.',
    image: '/images/project-disaster.png',
    url: 'https://github.com/AbhishekKharat04/disaster_response_env',
    ghost: 'DATA',
    linkLabel: 'View repository',
  },
]
