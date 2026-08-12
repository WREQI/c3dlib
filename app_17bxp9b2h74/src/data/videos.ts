// EXPORTS:
//   IVideo,
//   MOCK_VIDEOS,
//   VIDEO_CATEGORIES,
//   IVideoCategory

export interface IVideoCategory {
  id: string
  label: string
}

export const VIDEO_CATEGORIES: IVideoCategory[] = [
  { id: 'all', label: 'All' },
  { id: 'demos', label: 'Product Demos' },
  { id: 'tutorials', label: 'Tutorials' },
  { id: 'webinars', label: 'Webinars' },
  { id: 'customer-stories', label: 'Customer Stories' },
]

export interface IVideo {
  id: string
  title: string
  category: string
  duration: string
  thumbnailUrl: string
  description: string
  presenter?: string
  featured?: boolean
}

export const MOCK_VIDEOS: IVideo[] = [
  {
    id: '1',
    title: 'Onshape Product Overview: See What\'s Possible',
    category: 'demos',
    duration: '5:32',
    thumbnailUrl: '',
    description: 'A comprehensive overview of Onshape\'s cloud-native CAD & PDM platform and how it transforms product development.',
    featured: true,
    presenter: 'Onshape Team',
  },
  {
    id: '2',
    title: 'Getting Started with Onshape - Full Tutorial',
    category: 'tutorials',
    duration: '28:15',
    thumbnailUrl: '',
    description: 'Learn the basics of Onshape from creating your first document to designing your first part.',
    presenter: 'Sarah Miller',
  },
  {
    id: '3',
    title: 'Branching & Merging: Design Like a Pro',
    category: 'tutorials',
    duration: '14:22',
    thumbnailUrl: '',
    description: 'Master the fundamentals of design branching and merging for collaborative engineering workflows.',
    presenter: 'Michael Torres',
  },
  {
    id: '4',
    title: 'The Future of CAD: AI + Generative Design',
    category: 'webinars',
    duration: '47:08',
    thumbnailUrl: '',
    description: 'Explore how AI and generative design are shaping the future of mechanical engineering and product development.',
    presenter: 'Dr. Alex Chen',
  },
  {
    id: '5',
    title: 'SkyFork Aerospace Customer Story',
    category: 'customer-stories',
    duration: '6:45',
    thumbnailUrl: '',
    description: 'See how SkyFork Aerospace uses Onshape to accelerate UAV development with distributed engineering teams.',
    presenter: 'SkyFork Team',
  },
  {
    id: '6',
    title: 'Assembly Design in Onshape Demo',
    category: 'demos',
    duration: '8:10',
    thumbnailUrl: '',
    description: 'Explore Onshape\'s powerful assembly design capabilities including mates, in-context design, and large assemblies.',
    presenter: 'Ryan Walker',
  },
  {
    id: '7',
    title: 'Sheet Metal Design Fundamentals',
    category: 'tutorials',
    duration: '18:30',
    thumbnailUrl: '',
    description: 'Learn how to design sheet metal parts with automatic flat pattern development and bend calculations.',
    presenter: 'Sarah Miller',
  },
  {
    id: '8',
    title: 'Release Management Best Practices',
    category: 'webinars',
    duration: '52:40',
    thumbnailUrl: '',
    description: 'A deep dive into setting up and managing release workflows for engineering teams of all sizes.',
    presenter: 'Jennifer Liu',
  },
  {
    id: '9',
    title: 'NovaHome Goods: From Concept to Shelf',
    category: 'customer-stories',
    duration: '4:55',
    thumbnailUrl: '',
    description: 'How NovaHome Goods reduced product development cycles from 12 weeks to 7 weeks with Onshape.',
    presenter: 'NovaHome Team',
  },
  {
    id: '10',
    title: 'Surfacing Tools Deep Dive',
    category: 'demos',
    duration: '12:20',
    thumbnailUrl: '',
    description: 'Explore Onshape\'s advanced surfacing tools for creating complex freeform geometry.',
    presenter: 'Alex Chen',
  },
  {
    id: '11',
    title: 'Configurations & Design Tables Tutorial',
    category: 'tutorials',
    duration: '22:15',
    thumbnailUrl: '',
    description: 'Create families of parts and assemblies efficiently using configurations and design tables.',
    presenter: 'Michael Torres',
  },
  {
    id: '12',
    title: 'Enterprise Data Governance',
    category: 'webinars',
    duration: '58:30',
    thumbnailUrl: '',
    description: 'Strategies for managing CAD data at scale across large distributed engineering organizations.',
    presenter: 'David Park',
  },
]
