// EXPORTS:
//   IEvent,
//   MOCK_EVENTS,
//   EVENT_CATEGORIES,
//   IEventCategory

export interface IEventCategory {
  id: string
  label: string
}

export const EVENT_CATEGORIES: IEventCategory[] = [
  { id: 'all', label: 'All Events' },
  { id: 'webinars', label: 'Webinars' },
  { id: 'workshops', label: 'Workshops' },
  { id: 'conferences', label: 'Conferences' },
  { id: 'ondemand', label: 'On-demand' },
]

export interface IEvent {
  id: string
  title: string
  type: string
  date: string
  time: string
  duration: string
  description: string
  presenter: string
  imageUrl: string
  status: 'upcoming' | 'live' | 'ondemand'
  featured?: boolean
}

export const MOCK_EVENTS: IEvent[] = [
  {
    id: '1',
    title: 'Advanced Surfacing for Industrial Design',
    type: 'webinars',
    date: 'August 20, 2026',
    time: '10:00 AM PT',
    duration: '60 min',
    description: 'Master advanced surfacing techniques for industrial design and consumer products with our senior application engineers.',
    presenter: 'Dr. Alex Chen',
    imageUrl: '',
    status: 'upcoming',
    featured: true,
  },
  {
    id: '2',
    title: 'Hands-On Workshop: Getting Started with Onshape',
    type: 'workshops',
    date: 'August 25, 2026',
    time: '9:00 AM PT',
    duration: '2 hours',
    description: 'A hands-on workshop for new users. Learn to create parts, assemblies, and drawings in Onshape.',
    presenter: 'Sarah Miller',
    imageUrl: '',
    status: 'upcoming',
  },
  {
    id: '3',
    title: 'Onshape World 2026 Keynote',
    type: 'conferences',
    date: 'September 10, 2026',
    time: '9:00 AM PT',
    duration: '90 min',
    description: 'Join our CEO for the opening keynote at Onshape World 2026, featuring product announcements and vision.',
    presenter: 'Onshape Executive Team',
    imageUrl: '',
    status: 'upcoming',
  },
  {
    id: '4',
    title: 'Release Management Best Practices',
    type: 'webinars',
    date: 'September 5, 2026',
    time: '11:00 AM PT',
    duration: '45 min',
    description: 'Learn how to set up and manage effective release workflows for engineering teams of all sizes.',
    presenter: 'Jennifer Liu',
    imageUrl: '',
    status: 'upcoming',
  },
  {
    id: '5',
    title: 'Data Management for Enterprise Teams',
    type: 'webinars',
    date: 'August 15, 2026',
    time: '10:00 AM PT',
    duration: '50 min',
    description: 'Strategies for managing CAD data at scale across large distributed engineering organizations.',
    presenter: 'David Park',
    imageUrl: '',
    status: 'ondemand',
  },
  {
    id: '6',
    title: 'Workshop: Sheet Metal Deep Dive',
    type: 'workshops',
    date: 'September 15, 2026',
    time: '10:00 AM PT',
    duration: '3 hours',
    description: 'An in-depth workshop covering advanced sheet metal design, flat patterns, and bend calculations.',
    presenter: 'Michael Torres',
    imageUrl: '',
    status: 'upcoming',
  },
  {
    id: '7',
    title: 'Customer Success Summit',
    type: 'conferences',
    date: 'October 5, 2026',
    time: '9:00 AM PT',
    duration: 'Full Day',
    description: 'A full-day event featuring customer success stories, best practices, and product roadmap updates.',
    presenter: 'Onshape Customer Team',
    imageUrl: '',
    status: 'upcoming',
  },
  {
    id: '8',
    title: 'Onshape API Developer Workshop',
    type: 'workshops',
    date: 'September 22, 2026',
    time: '1:00 PM PT',
    duration: '3 hours',
    description: 'Build custom integrations and applications using the Onshape REST API. Hands-on coding workshop.',
    presenter: 'Developer Experience Team',
    imageUrl: '',
    status: 'upcoming',
  },
  {
    id: '9',
    title: 'Introduction to Configurations (On-demand)',
    type: 'ondemand',
    date: 'Available now',
    time: 'Self-paced',
    duration: '35 min',
    description: 'Learn the basics of creating and using configurations in parts and assemblies. Watch anytime.',
    presenter: 'Sarah Miller',
    imageUrl: '',
    status: 'ondemand',
  },
  {
    id: '10',
    title: 'Large Assembly Performance (On-demand)',
    type: 'ondemand',
    date: 'Available now',
    time: 'Self-paced',
    duration: '45 min',
    description: 'Optimization techniques for working with assemblies containing thousands of parts.',
    presenter: 'Ryan Walker',
    imageUrl: '',
    status: 'ondemand',
  },
  {
    id: '11',
    title: 'MEDC 2026 Onshape Technical Session',
    type: 'conferences',
    date: 'October 12, 2026',
    time: '2:00 PM PT',
    duration: '60 min',
    description: 'Join us at the Mechanical Engineering Design Conference for a deep dive into cloud-native CAD.',
    presenter: 'Engineering Team',
    imageUrl: '',
    status: 'upcoming',
  },
  {
    id: '12',
    title: 'Branching & Merging Fundamentals',
    type: 'webinars',
    date: 'August 28, 2026',
    time: '10:00 AM PT',
    duration: '40 min',
    description: 'Learn core version control concepts and how to apply branching and merging in your design workflow.',
    presenter: 'Michael Torres',
    imageUrl: '',
    status: 'upcoming',
  },
]
