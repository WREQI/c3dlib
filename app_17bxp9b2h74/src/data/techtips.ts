// EXPORTS:
//   ITechTip,
//   MOCK_TECH_TIPS,
//   TECH_TIP_CATEGORIES,
//   ITechTipCategory

export interface ITechTipCategory {
  id: string
  label: string
}

export const TECH_TIP_CATEGORIES: ITechTipCategory[] = [
  { id: 'all', label: 'All Categories' },
  { id: 'parts', label: 'Part Modeling' },
  { id: 'assemblies', label: 'Assemblies' },
  { id: 'drawings', label: 'Drawings' },
  { id: 'sheet-metal', label: 'Sheet Metal' },
  { id: 'configurations', label: 'Configurations' },
  { id: 'collaboration', label: 'Collaboration' },
  { id: 'data-management', label: 'Data Management' },
]

export interface ITechTip {
  id: string
  title: string
  category: string
  description: string
  readTime: string
  author: string
  date: string
  imageUrl: string
  featured?: boolean
  views?: string
}

export const MOCK_TECH_TIPS: ITechTip[] = [
  {
    id: '1',
    title: '10 Keyboard Shortcuts That Speed Up Part Modeling',
    category: 'parts',
    description: 'Master these essential keyboard shortcuts to dramatically increase your speed in Part Studio.',
    readTime: '3 min',
    author: 'Sarah Miller',
    date: 'August 8, 2026',
    imageUrl: '',
    featured: true,
    views: '12.5K',
  },
  {
    id: '2',
    title: 'How to Use Mate Connectors Effectively',
    category: 'assemblies',
    description: 'Everything you need to know about mate connectors and how they make assembly design faster.',
    readTime: '4 min',
    author: 'Ryan Walker',
    date: 'August 5, 2026',
    imageUrl: '',
    views: '9.2K',
  },
  {
    id: '3',
    title: 'Creating Custom Drawing Templates',
    category: 'drawings',
    description: 'Step-by-step guide to creating and using custom drawing templates with your company standards.',
    readTime: '5 min',
    author: 'Jennifer Liu',
    date: 'August 1, 2026',
    imageUrl: '',
    views: '8.1K',
  },
  {
    id: '4',
    title: 'Sheet Metal Bend Deduction: When to Use Which Method',
    category: 'sheet-metal',
    description: 'Understanding K-factors, bend allowances, and bend deduction tables for accurate flat patterns.',
    readTime: '6 min',
    author: 'Michael Torres',
    date: 'July 28, 2026',
    imageUrl: '',
    views: '7.6K',
  },
  {
    id: '5',
    title: '5 Ways to Use Configurations Like a Pro',
    category: 'configurations',
    description: 'Advanced configuration techniques for creating families of parts and assemblies efficiently.',
    readTime: '4 min',
    author: 'Alex Chen',
    date: 'July 25, 2026',
    imageUrl: '',
    views: '11.3K',
  },
  {
    id: '6',
    title: 'Best Practices for Real-Time Collaboration',
    category: 'collaboration',
    description: 'How to get the most out of multi-user editing and comments in team design environments.',
    readTime: '3 min',
    author: 'David Park',
    date: 'July 22, 2026',
    imageUrl: '',
    views: '6.8K',
  },
  {
    id: '7',
    title: 'Organizing Your Workspace for Maximum Efficiency',
    category: 'data-management',
    description: 'Tips for structuring documents, folders, and labels so you can find everything quickly.',
    readTime: '5 min',
    author: 'Jennifer Liu',
    date: 'July 18, 2026',
    imageUrl: '',
    views: '10.1K',
  },
  {
    id: '8',
    title: 'Using Split Features for Complex Geometry',
    category: 'parts',
    description: 'How to leverage split and boolean operations for creating complex multi-body geometry.',
    readTime: '4 min',
    author: 'Alex Chen',
    date: 'July 15, 2026',
    imageUrl: '',
    views: '8.4K',
  },
  {
    id: '9',
    title: 'Assembly Patterns: Linear, Circular, and Custom',
    category: 'assemblies',
    description: 'Master all three pattern types in assemblies to quickly replicate components.',
    readTime: '3 min',
    author: 'Ryan Walker',
    date: 'July 12, 2026',
    imageUrl: '',
    views: '7.9K',
  },
  {
    id: '10',
    title: 'GD&T Symbols: Which, When, and How',
    category: 'drawings',
    description: 'A practical guide to applying geometric dimensioning and tolerancing in Onshape drawings.',
    readTime: '7 min',
    author: 'Jennifer Liu',
    date: 'July 8, 2026',
    imageUrl: '',
    views: '9.5K',
  },
  {
    id: '11',
    title: 'Converting Solids to Sheet Metal',
    category: 'sheet-metal',
    description: 'How to quickly convert imported solid geometry to sheet metal parts with automatic bend recognition.',
    readTime: '4 min',
    author: 'Michael Torres',
    date: 'July 5, 2026',
    imageUrl: '',
    views: '6.2K',
  },
  {
    id: '12',
    title: 'Using Design Tables for Rapid Configuration Creation',
    category: 'configurations',
    description: 'Generate hundreds of configurations in minutes using the spreadsheet-style design table interface.',
    readTime: '5 min',
    author: 'Alex Chen',
    date: 'July 1, 2026',
    imageUrl: '',
    views: '8.7K',
  },
]
