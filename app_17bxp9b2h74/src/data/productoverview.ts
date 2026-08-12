// EXPORTS:
//   IProductOverviewSection,
//   IProductOverviewCard,
//   PRODUCT_OVERVIEW_DATA

export interface IProductOverviewCard {
  title: string
  description: string
  icon: string
  path?: string
  accent?: string
}

export interface IProductOverviewSection {
  id: string
  title: string
  subtitle: string
  cards: IProductOverviewCard[]
  gridCols?: string
}

export const PRODUCT_OVERVIEW_DATA: IProductOverviewSection[] = [
  {
    id: 'cad',
    title: '3D CAD',
    subtitle:
      'Powerful parametric modeling tools for parts, assemblies, drawings, and more.',
    gridCols: 'md:grid-cols-2 lg:grid-cols-3',
    cards: [
      {
        title: 'Part Design',
        description:
          'Parametric solid, surface, and sheet metal modeling in a unique multi-part environment.',
        icon: 'Box',
        path: '/features/parts-modeling',
      },
      {
        title: 'Assemblies',
        description:
          'Bottom-up and top-down assembly design with real-time collaboration and version control.',
        icon: 'Layers',
        path: '/features/assemblies',
      },
      {
        title: 'Drawings',
        description:
          'Fully associative 2D drawing creation with GD&T, dimensions, and multiple sheet support.',
        icon: 'FileText',
        path: '/features/drawings',
      },
      {
        title: 'Sheet Metal',
        description:
          'Native sheet metal tools with K-factor, flat patterns, and configurable bend tables.',
        icon: 'Layers3',
        path: '/features/sheet-metal',
      },
      {
        title: 'Frame Design',
        description:
          'Structural frame and weldment design with standard profiles and automatic mitering.',
        icon: 'Frame',
        path: '/features/frame-design',
      },
      {
        title: 'Configurations',
        description:
          'Manage multiple design variations with parametric configurations and variables.',
        icon: 'Sliders',
        path: '/features/configurations',
      },
    ],
  },
  {
    id: 'pdm',
    title: 'Built-in PDM',
    subtitle:
      'Enterprise-grade product data management is built right into the platform.',
    gridCols: 'md:grid-cols-2 lg:grid-cols-4',
    cards: [
      {
        title: 'Version Control',
        description:
          'Every change is automatically tracked with a complete history and branch/merge support.',
        icon: 'History',
        path: '/features/data-management',
      },
      {
        title: 'Release Management',
        description:
          'Formal release processes with approvals, revisioning, and change notifications.',
        icon: 'ClipboardCheck',
        path: '/features/data-management',
      },
      {
        title: 'Access Control',
        description:
          'Granular role-based permissions ensure the right people have the right access.',
        icon: 'Lock',
        path: '/features/security',
      },
      {
        title: 'Bill of Materials',
        description:
          'Automatic BOM generation, indented and flat views, and export options.',
        icon: 'ListChecks',
        path: '/features/data-management',
      },
    ],
  },
  {
    id: 'plm',
    title: 'PLM Integrations',
    subtitle:
      'Connect Onshape with your existing PLM systems for a complete digital thread.',
    gridCols: 'md:grid-cols-2',
    cards: [
      {
        title: 'Arena PLM Connection',
        description:
          'Seamless integration with Arena cloud PLM for complete product lifecycle management.',
        icon: 'Link',
        path: '/features/arena-plm-connection',
      },
      {
        title: 'Windchill PLM Connection',
        description:
          'Enterprise-grade integration with PTC Windchill PLM (Beta) for large organizations.',
        icon: 'Building2',
        path: '/features/windchill-plm-connection',
      },
    ],
  },
  {
    id: 'collaboration',
    title: 'Real-Time Collaboration',
    subtitle:
      'Work together with your team and stakeholders like never before.',
    gridCols: 'md:grid-cols-2',
    cards: [
      {
        title: 'Simultaneous Editing',
        description:
          'Multiple designers can work in the same document at the same time, just like Google Docs.',
        icon: 'Users',
        path: '/features/collaboration',
      },
      {
        title: 'Sharing & Comments',
        description:
          'Share designs with anyone, leave comments directly on geometry, and resolve issues faster.',
        icon: 'MessageSquare',
        path: '/features/collaboration',
      },
    ],
  },
  {
    id: 'admin',
    title: 'Administration & Security',
    subtitle:
      'Enterprise-grade security, administration, and compliance tools.',
    gridCols: 'md:grid-cols-2 lg:grid-cols-4',
    cards: [
      {
        title: 'Security',
        description:
          'SOC 2 Type II, ISO 27001, and enterprise-grade encryption for your data.',
        icon: 'ShieldCheck',
        path: '/features/security',
      },
      {
        title: 'Analytics',
        description:
          'Track usage, adoption, and design activity with built-in analytics dashboards.',
        icon: 'BarChart2',
        path: '/features/analytics',
      },
      {
        title: 'Integrations',
        description:
          'SSO, REST API, and hundreds of app integrations for your existing toolchain.',
        icon: 'Puzzle',
        path: '/resources/apps-integrations',
      },
      {
        title: 'AI Advisor',
        description:
          'AI-powered design assistant that helps you work faster and design better.',
        icon: 'Sparkles',
        path: '/features/ai-advisor',
      },
    ],
  },
  {
    id: 'more-than-cad',
    title: 'More Than Just CAD',
    subtitle:
      'Onshape goes beyond traditional CAD with advanced capabilities and modern tools.',
    gridCols: 'md:grid-cols-2 lg:grid-cols-5',
    cards: [
      {
        title: 'Simulation',
        description:
          'Finite element analysis and simulation tools for structural testing.',
        icon: 'Waves',
      },
      {
        title: 'Model Based Definition',
        description:
          'Add GD&T and PMI directly to 3D models with MBD capabilities.',
        icon: 'Target',
        path: '/features/model-based-definition',
      },
      {
        title: 'Custom Features',
        description:
          'Create your own features using the FeatureScript programming language.',
        icon: 'Code2',
        path: '/features/custom-features',
      },
      {
        title: 'Onshape Labs',
        description:
          'Try experimental features and help shape the future of cloud CAD.',
        icon: 'FlaskConical',
        path: '/features/onshape-labs',
      },
      {
        title: 'PCB Studio',
        description:
          'Design printed circuit boards natively within the Onshape platform.',
        icon: 'CircuitBoard',
        path: '/features/pcb-studio',
      },
      {
        title: 'Onshape Vision',
        description:
          'View and interact with 3D models in augmented reality on Apple Vision Pro.',
        icon: 'Eye',
        path: '/features/onshape-vision',
      },
      {
        title: 'Surface Modeling',
        description:
          'Advanced surface modeling tools for complex organic geometries.',
        icon: 'Spline',
        path: '/features/parts-modeling',
      },
      {
        title: 'API & SDK',
        description:
          'Build custom integrations and automations with our fully-documented REST API.',
        icon: 'Terminal',
        path: '/resources/apps-integrations',
      },
      {
        title: 'Onshape Go',
        description:
          'Access your designs anywhere with our fully-featured mobile app.',
        icon: 'Smartphone',
      },
      {
        title: 'Onshape Government',
        description:
          'Secure cloud CAD and PDM for government agencies and contractors.',
        icon: 'Building',
        path: '/features/onshape-government',
      },
    ],
  },
]
