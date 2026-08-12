// EXPORTS:
//   ISpotlightArticle,
//   SPOTLIGHT_CATEGORIES,
//   SPOTLIGHT_ARTICLES,
//   FEATURED_SPOTLIGHT

export interface ISpotlightArticle {
  id: string
  title: string
  category: string
  date: string
  excerpt: string
  readTime: string
  author: string
  featured?: boolean
}

export const SPOTLIGHT_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'trends', label: 'Design Trends' },
  { id: 'survey', label: 'Industry Surveys' },
  { id: 'best-practices', label: 'Best Practices' },
  { id: 'research', label: 'Research' },
]

export const SPOTLIGHT_ARTICLES: ISpotlightArticle[] = [
  {
    id: '1',
    title: 'The State of Cloud CAD 2025',
    category: 'survey',
    date: 'June 15, 2025',
    excerpt:
      'Our annual industry survey reveals how product development teams are adopting cloud-native CAD and what benefits they are seeing.',
    readTime: '8 min read',
    author: 'Onshape Research Team',
    featured: true,
  },
  {
    id: '2',
    title: 'Design Trends Shaping 2025',
    category: 'trends',
    date: 'May 28, 2025',
    excerpt:
      'Exploring the biggest design trends this year, from AI-assisted engineering to generative design and sustainable manufacturing.',
    readTime: '6 min read',
    author: 'Sarah Chen',
  },
  {
    id: '3',
    title: 'Remote Engineering: Two Years In',
    category: 'research',
    date: 'May 10, 2025',
    excerpt:
      'How distributed engineering teams have evolved and what tools are making remote collaboration more effective than ever.',
    readTime: '7 min read',
    author: 'James Miller',
  },
  {
    id: '4',
    title: 'Best Practices for Design Reviews',
    category: 'best-practices',
    date: 'April 22, 2025',
    excerpt:
      'Proven frameworks for running effective design reviews that catch issues early and align cross-functional teams.',
    readTime: '5 min read',
    author: 'Maria Garcia',
  },
  {
    id: '5',
    title: 'The Rise of AI in Engineering',
    category: 'trends',
    date: 'April 5, 2025',
    excerpt:
      'How artificial intelligence and machine learning are transforming every stage of the product development lifecycle.',
    readTime: '9 min read',
    author: 'David Park',
  },
  {
    id: '6',
    title: 'Hardware Startup Survey Results',
    category: 'survey',
    date: 'March 18, 2025',
    excerpt:
      'What 500+ hardware startups told us about their biggest engineering challenges, toolchains, and growth plans.',
    readTime: '10 min read',
    author: 'Onshape Research Team',
  },
  {
    id: '7',
    title: 'Sustainable Design Principles',
    category: 'best-practices',
    date: 'March 2, 2025',
    excerpt:
      'Designing for sustainability: how to reduce material usage, optimize for manufacturing, and extend product lifecycles.',
    readTime: '6 min read',
    author: 'Emma Wilson',
  },
  {
    id: '8',
    title: 'Collaboration Benchmarks Report',
    category: 'research',
    date: 'February 14, 2025',
    excerpt:
      'Measuring the impact of real-time collaboration on engineering team productivity, iteration speed, and design quality.',
    readTime: '12 min read',
    author: 'Onshape Research Team',
  },
]

export const FEATURED_SPOTLIGHT =
  SPOTLIGHT_ARTICLES.find((a) => a.featured) || SPOTLIGHT_ARTICLES[0]
