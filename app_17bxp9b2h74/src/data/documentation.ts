// EXPORTS:
//   IDocCategory,
//   DOC_CATEGORIES,
//   IPopularDoc,
//   POPULAR_DOCS,
//   IDocSection,
//   DOC_SECTIONS,
//   IApiDoc,
//   API_DOCS

export interface IDocCategory {
  id: string
  title: string
  count: number
  icon: string
}

export const DOC_CATEGORIES: IDocCategory[] = [
  { id: 'parts', title: 'Part Modeling', count: 48, icon: 'Box' },
  { id: 'assemblies', title: 'Assembly Design', count: 36, icon: 'Layers' },
  { id: 'drawings', title: 'Drawings & Detailing', count: 28, icon: 'FileText' },
  { id: 'sheet-metal', title: 'Sheet Metal', count: 22, icon: 'Layers' },
  { id: 'configurations', title: 'Configurations', count: 18, icon: 'Settings' },
  { id: 'surfacing', title: 'Surfacing', count: 24, icon: 'Wand2' },
  { id: 'pdm', title: 'Data Management', count: 32, icon: 'Database' },
  { id: 'release', title: 'Release Management', count: 20, icon: 'ClipboardCheck' },
  { id: 'api', title: 'API & Developers', count: 56, icon: 'Code2' },
  { id: 'administration', title: 'Administration', count: 30, icon: 'Users' },
]

export interface IPopularDoc {
  id: string
  title: string
  category: string
  description: string
}

export const POPULAR_DOCS: IPopularDoc[] = [
  { id: '1', title: 'Getting Started Guide', category: 'Getting Started', description: 'Your complete guide to setting up and using Onshape for the first time.' },
  { id: '2', title: 'Part Studio Basics', category: 'Part Modeling', description: 'Learn the fundamentals of part design in Onshape Part Studio.' },
  { id: '3', title: 'Mate Types & Reference', category: 'Assemblies', description: 'Complete reference for all mate types and how to use them effectively.' },
  { id: '4', title: 'Drawing Views Reference', category: 'Drawings', description: 'All drawing view types explained with examples and best practices.' },
  { id: '5', title: 'Branching & Merging Overview', category: 'Data Management', description: 'Understanding version control concepts and workflows in Onshape.' },
  { id: '6', title: 'Configurations Overview', category: 'Configurations', description: 'Everything you need to know about creating and using configurations.' },
  { id: '7', title: 'REST API Getting Started', category: 'API & Developers', description: 'Introduction to the Onshape REST API with code examples and authentication guide.' },
  { id: '8', title: 'Release Management Setup', category: 'Release Management', description: 'How to configure release workflows and approval processes for your team.' },
]

export interface IDocSection {
  id: string
  title: string
  icon: string
  items: Array<{ title: string; desc: string }>
}

export const DOC_SECTIONS: IDocSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: 'Rocket',
    items: [
      { title: 'Creating Your Account', desc: 'Set up your Onshape account and get started in minutes.' },
      { title: 'Exploring the Interface', desc: 'Tour the Onshape workspace and understand the layout.' },
      { title: 'Your First Document', desc: 'Create your first document and learn basic navigation.' },
      { title: 'Basic Sketching', desc: 'Learn sketch tools, constraints, and dimensions.' },
    ],
  },
  {
    id: 'part-modeling',
    title: 'Part Modeling',
    icon: 'Box',
    items: [
      { title: 'Extrude & Revolve', desc: 'The fundamentals of creating solid geometry from sketches.' },
      { title: 'Sweep & Loft', desc: 'Create complex shapes by sweeping or lofting between profiles.' },
      { title: 'Multi-Body Parts', desc: 'Design multiple parts in a single Part Studio with shared references.' },
      { title: 'Part Studio Features', desc: 'Complete reference for all Part Studio features and tools.' },
    ],
  },
  {
    id: 'assemblies',
    title: 'Assemblies',
    icon: 'Layers',
    items: [
      { title: 'Assembly Basics', desc: 'Learn the assembly environment and how to insert and mate parts.' },
      { title: 'Mate Types', desc: 'Complete reference for all mate types with usage examples.' },
      { title: 'In-Context Design', desc: 'Design parts in the context of an assembly with live references.' },
      { title: 'Assembly Patterns', desc: 'Use linear, circular, and feature patterns to replicate components.' },
    ],
  },
  {
    id: 'drawings',
    title: 'Drawings',
    icon: 'FileText',
    items: [
      { title: 'Drawing Fundamentals', desc: 'Create your first drawing with views, dimensions, and annotations.' },
      { title: 'Drawing Views', desc: 'All view types explained: orthographic, isometric, section, detail, and auxiliary.' },
      { title: 'Dimensions & Annotations', desc: 'Complete guide to dimensioning tools, styles, and annotation standards.' },
      { title: 'GD&T Symbols', desc: 'How to apply geometric dimensioning and tolerancing per ASME Y14.5.' },
    ],
  },
]

export interface IApiDoc {
  id: string
  title: string
  category: string
  method: string
  endpoint: string
  description: string
}

export const API_DOCS: IApiDoc[] = [
  { id: 'api-1', title: 'Document API', category: 'Core', method: 'GET', endpoint: '/api/documents', description: 'Retrieve documents and document metadata from your workspace.' },
  { id: 'api-2', title: 'Element API', category: 'Core', method: 'GET', endpoint: '/api/documents/{did}/elements', description: 'List and access elements (Part Studios, assemblies, etc.) within a document.' },
  { id: 'api-3', title: 'Part Studio Features', category: 'Part Design', method: 'POST', endpoint: '/api/partstudios/{did}/{eid}/features', description: 'Add, modify, or delete features in a Part Studio.' },
  { id: 'api-4', title: 'Assembly Mates', category: 'Assemblies', method: 'GET', endpoint: '/api/assemblies/{did}/{eid}/mates', description: 'Get mate definitions and occurrences in an assembly.' },
  { id: 'api-5', title: 'Webhooks', category: 'Events', method: 'POST', endpoint: '/api/webhooks', description: 'Register webhooks to receive real-time event notifications from Onshape.' },
  { id: 'api-6', title: 'User API', category: 'Users', method: 'GET', endpoint: '/api/users/sessioninfo', description: 'Get information about the currently authenticated user session.' },
]
