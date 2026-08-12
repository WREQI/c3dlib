// EXPORTS:
//   IResourceItem,
//   RESOURCE_CATEGORIES,
//   RESOURCE_ITEMS,
//   FEATURED_RESOURCES

export interface IResourceItem {
  id: string
  title: string
  type: 'tutorial' | 'webinar' | 'whitepaper' | 'case-study' | 'tech-tip' | 'guide'
  category: string
  duration: string
  description: string
  featured?: boolean
}

export const RESOURCE_CATEGORIES = [
  { id: 'all', label: 'All Resources' },
  { id: 'tutorial', label: 'Tutorials' },
  { id: 'webinar', label: 'Webinars' },
  { id: 'whitepaper', label: 'Whitepapers' },
  { id: 'case-study', label: 'Case Studies' },
  { id: 'tech-tip', label: 'Tech Tips' },
]

export const RESOURCE_ITEMS: IResourceItem[] = [
  {
    id: '1',
    title: 'Getting Started with Onshape',
    type: 'tutorial',
    category: 'tutorial',
    duration: '30 min',
    description: 'Learn the fundamentals of Onshape, from navigating the interface to creating your first part.',
    featured: true,
  },
  {
    id: '2',
    title: 'The Future of Cloud CAD',
    type: 'webinar',
    category: 'webinar',
    duration: '45 min',
    description: 'Discover how cloud-native CAD is transforming product development teams of all sizes.',
    featured: true,
  },
  {
    id: '3',
    title: 'Enterprise Security Whitepaper',
    type: 'whitepaper',
    category: 'whitepaper',
    duration: '28 pages',
    description: 'Comprehensive overview of Onshape security architecture, compliance, and data protection.',
    featured: true,
  },
  {
    id: '4',
    title: 'Koller Engineering Case Study',
    type: 'case-study',
    category: 'case-study',
    duration: '8 min read',
    description: 'How Koller Engineering reduced design cycles by 40% after migrating to Onshape.',
  },
  {
    id: '5',
    title: '10 Tips for Better Assemblies',
    type: 'tech-tip',
    category: 'tech-tip',
    duration: '5 min read',
    description: 'Proven techniques for building faster, more reliable assemblies in Onshape.',
  },
  {
    id: '6',
    title: 'Part Modeling Masterclass',
    type: 'tutorial',
    category: 'tutorial',
    duration: '2 hours',
    description: 'Advanced part modeling techniques including surfacing, configurations, and FeatureScript.',
  },
  {
    id: '7',
    title: 'PDM Best Practices',
    type: 'webinar',
    category: 'webinar',
    duration: '55 min',
    description: 'How to organize and manage your CAD data effectively with built-in PDM.',
  },
  {
    id: '8',
    title: 'ROI of Cloud CAD',
    type: 'whitepaper',
    category: 'whitepaper',
    duration: '16 pages',
    description: 'Calculating the real return on investment for switching from desktop CAD to Onshape.',
  },
  {
    id: '9',
    title: 'Sheet Metal Design Guide',
    type: 'guide',
    category: 'tech-tip',
    duration: '12 min read',
    description: 'Complete guide to sheet metal design including bend calculations and flat patterns.',
  },
]

export const FEATURED_RESOURCES = RESOURCE_ITEMS.filter((r) => r.featured)
