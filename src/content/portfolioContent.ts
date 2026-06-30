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
  image: '/images/hero-lufy.jpg',
  kicker: 'AI Engineer',
  lead: 'I build full-stack products, AI tools and automations that save your time and actually get shipped.',
  ctaHref: '#contact',
  ctaLabel: 'Start Your Project',
  name: 'Abhishek',
}

export const featuredProjects: PortfolioProject[] = [
  {
    title: 'AI Tribunal',
    category: 'Adversarial Legal RL Env',
    tags: ['PyTorch', 'Gymnasium', 'Hugging Face', 'Python'],
    description: 'A custom Gymnasium reinforcement learning environment to model multi-agent strategic interactions, hidden information, and deception detection.',
    image: '/images/project-ai-tribunal.png',
    url: 'https://huggingface.co/spaces/AbhishekKharat11/ai-tribunal-env',
    ghost: 'RL',
    linkLabel: 'View Hugging Face Space',
  },
  {
    title: 'OrbitWatch',
    category: 'Space Debris Tracking Agent',
    tags: ['FastAPI', 'SGP4', 'OpenAI API', 'Redis', 'Python'],
    description: 'A space situational awareness platform utilizing SGP4 orbital propagation algorithms to calculate real-time conjunction risk, featuring an OpenAI-powered natural-language briefing engine.',
    image: '/images/project-orbitwatch.png',
    url: 'https://orbitwatch-five.vercel.app',
    ghost: 'AGENTS',
    linkLabel: 'Visit live dashboard',
  },
  {
    title: 'ShipSage',
    category: 'AI-Assisted DevOps readiness',
    tags: ['watsonx Granite', 'Docker', 'Kubernetes', 'Terraform', 'Python'],
    description: 'A DevOps copilot that analyzes codebase structures and utilizes IBM watsonx Granite LLM to generate production-ready Dockerfiles, Kubernetes manifests, and infrastructure code.',
    image: '/images/project-shipsage.png',
    url: 'https://shipsage.onrender.com',
    ghost: 'DEVOPS',
    linkLabel: 'Visit live dashboard',
  },
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
