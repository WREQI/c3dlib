// EXPORTS:
//   IBlogPost,
//   MOCK_BLOG_POSTS,
//   BLOG_CATEGORIES,
//   IBlogCategory

export interface IBlogCategory {
  id: string
  label: string
}

export const BLOG_CATEGORIES: IBlogCategory[] = [
  { id: 'all', label: 'All' },
  { id: 'updates', label: 'Product Updates' },
  { id: 'tech-tips', label: 'Tech Tips' },
  { id: 'industry', label: 'Industry News' },
  { id: 'customer-stories', label: 'Customer Stories' },
]

export interface IBlogPost {
  id: string
  slug?: string
  title: string
  excerpt: string
  category: string
  author: string
  authorAvatar: string
  date: string
  readTime: string
  imageUrl: string
  featured?: boolean
}

export const MOCK_BLOG_POSTS: IBlogPost[] = [
  {
    id: '1',
    slug: 'cloud-cad-vs-desktop-cad',
    title: 'Onshape August 2026 Update: New Surfacing Tools Released',
    excerpt: 'The latest Onshape update brings powerful new surfacing capabilities including boundary surfaces, curve editing, and improved loft controls.',
    category: 'updates',
    author: 'Alex Chen',
    authorAvatar: 'avatarImg1',
    date: 'August 5, 2026',
    readTime: '4 min read',
    imageUrl: '',
    featured: true,
  },
  {
    id: '2',
    title: 'Tech Tip: 10 Ways to Speed Up Your Part Modeling Workflow',
    excerpt: 'Learn proven techniques to accelerate your part design process in Onshape Part Studio, from keyboard shortcuts to FeatureScript automation.',
    category: 'tech-tips',
    author: 'Sarah Miller',
    authorAvatar: 'avatarImg2',
    date: 'August 1, 2026',
    readTime: '6 min read',
    imageUrl: '',
  },
  {
    id: '3',
    title: 'How SkyFork Aerospace Cut Development Time by 40%',
    excerpt: 'See how SkyFork Aerospace used Onshape\'s collaborative platform to dramatically reduce their UAV development cycle.',
    category: 'customer-stories',
    author: 'David Park',
    authorAvatar: 'avatarImg3',
    date: 'July 28, 2026',
    readTime: '5 min read',
    imageUrl: '',
  },
  {
    id: '4',
    title: 'Industry Report: Cloud CAD Adoption Accelerates in 2026',
    excerpt: 'New research shows 62% of engineering organizations plan to move to cloud-native CAD within the next two years.',
    category: 'industry',
    author: 'Jennifer Liu',
    authorAvatar: 'avatarImg4',
    date: 'July 25, 2026',
    readTime: '7 min read',
    imageUrl: '',
  },
  {
    id: '5',
    title: 'FeatureScript 101: Build Your First Custom Feature',
    excerpt: 'A step-by-step guide to creating custom features in Onshape using the FeatureScript programming language.',
    category: 'tech-tips',
    author: 'Michael Torres',
    authorAvatar: 'avatarImg5',
    date: 'July 22, 2026',
    readTime: '8 min read',
    imageUrl: '',
  },
  {
    id: '6',
    title: 'Onshape Integrates with Mastercam for Seamless CAM Workflow',
    excerpt: 'The new Mastercam integration lets Onshape users send designs directly to Mastercam for CNC toolpath generation.',
    category: 'updates',
    author: 'Ryan Walker',
    authorAvatar: 'avatarImg6',
    date: 'July 18, 2026',
    readTime: '3 min read',
    imageUrl: '',
  },
  {
    id: '7',
    title: 'How FitPulse Doubled Their New Product Launch Rate',
    excerpt: 'FitPulse Sports shares their journey from desktop CAD to cloud-native design and the impact on their product pipeline.',
    category: 'customer-stories',
    author: 'Emily Johnson',
    authorAvatar: 'avatarImg7',
    date: 'July 15, 2026',
    readTime: '6 min read',
    imageUrl: '',
  },
  {
    id: '8',
    title: 'The Future of Product Development: AI + CAD',
    excerpt: 'Exploring how generative AI and machine learning are transforming the way engineers design products.',
    category: 'industry',
    author: 'Alex Chen',
    authorAvatar: 'avatarImg1',
    date: 'July 10, 2026',
    readTime: '9 min read',
    imageUrl: '',
  },
  {
    id: '9',
    title: 'Assembly Modeling Best Practices for Large Designs',
    excerpt: 'Expert tips for building and managing large assemblies in Onshape while maintaining performance.',
    category: 'tech-tips',
    author: 'Sarah Miller',
    authorAvatar: 'avatarImg2',
    date: 'July 5, 2026',
    readTime: '7 min read',
    imageUrl: '',
  },
  {
    id: '10',
    title: 'Onshape July 2026 Update: Release Management Enhancements',
    excerpt: 'This month\'s update includes major improvements to release workflows, approval chains, and change notices.',
    category: 'updates',
    author: 'Ryan Walker',
    authorAvatar: 'avatarImg6',
    date: 'July 1, 2026',
    readTime: '5 min read',
    imageUrl: '',
  },
  {
    id: '11',
    title: 'NovaHome Goods: From Concept to Shelf in 7 Weeks',
    excerpt: 'Learn how NovaHome Goods streamlined their product development process with cloud-native design tools.',
    category: 'customer-stories',
    author: 'David Park',
    authorAvatar: 'avatarImg3',
    date: 'June 28, 2026',
    readTime: '5 min read',
    imageUrl: '',
  },
  {
    id: '12',
    title: '5 Reasons Why PDM is Holding Your Team Back',
    excerpt: 'Traditional PDM systems create unnecessary overhead. Here\'s how modern teams are replacing them.',
    category: 'industry',
    author: 'Jennifer Liu',
    authorAvatar: 'avatarImg4',
    date: 'June 20, 2026',
    readTime: '6 min read',
    imageUrl: '',
  },
]
