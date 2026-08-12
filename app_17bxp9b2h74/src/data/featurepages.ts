// EXPORTS:
//   IFeaturePageData,
//   FEATURE_PAGES_DATA,
//   getFeaturePageData

export interface IFeatureKeyFeatures {
  icon: string
  title: string
  desc: string
}

export interface IFeatureExploreResource {
  icon: string
  title: string
  type: string
  duration: string
  desc: string
}

export interface IFeaturePageData {
  id: string
  slug: string
  heroTitle: string
  heroSubtitle: string
  heroBgColor: string
  overviewTitle: string
  overviewDescription: string
  keyFeatures: IFeatureKeyFeatures[]
  exploreResources: IFeatureExploreResource[]
  isBeta?: boolean
}

export const FEATURE_PAGES_DATA: IFeaturePageData[] = [
  {
    id: 'parts-modeling',
    slug: 'parts-modeling',
    heroTitle: 'Part Design',
    heroSubtitle:
      'Onshape delivers collaborative parametric modeling methods for solid, surface, frame, and sheet metal part designs.',
    heroBgColor: '#0a1628',
    overviewTitle: 'What is a parametric design?',
    overviewDescription: `Parametric design is a process that enables the expression of parameters and rule-defining relationships among design elements. It's widely used in engineering and design, allowing for the rapid generation and modification of complex geometries and structures. This design method hinges on the principle that changing a parameter updates the design automatically, thereby enhancing efficiency and versatility in the design process.

Onshape's Part Studio is a unique environment where multiple parts can be designed in context together. Unlike traditional CAD systems where each part lives in a separate file, Onshape allows you to design parts in the same space, referencing each other's geometry for top-down design control. Change one dimension and all related parts update automatically.`,
    keyFeatures: [
      { icon: 'Box', title: 'Solid Modeling', desc: 'Create complex 3D geometry with robust solid modeling tools including extrude, revolve, sweep, and loft features.' },
      { icon: 'Layers', title: 'Surface Modeling', desc: 'Build advanced surface geometry with NURBS-based tools for complex organic shapes and industrial design.' },
      { icon: 'Hexagon', title: 'Sheet Metal', desc: 'Design sheet metal parts with built-in bend calculations, K-factors, and automatic flat pattern generation.' },
      { icon: 'Cylinder', title: 'Frame Design', desc: 'Create structural frames using standard steel profiles with automatic miter, butt, and trim connections.' },
      { icon: 'Wrench', title: 'Parametric Features', desc: 'Drive designs with configurable parameters and equations for rapid design iterations and variants.' },
      { icon: 'Ruler', title: 'Feature Script', desc: "Automate repetitive design tasks with custom features using Onshape's FeatureScript programming language." },
    ],
    exploreResources: [
      { icon: 'Video', title: 'Getting Started with Part Studio', type: 'Video Tutorial', duration: '12 min', desc: 'Learn the basics of parametric part design in Onshape Part Studio.' },
      { icon: 'BookOpen', title: 'Part Modeling Tech Tips', type: 'Blog Series', duration: '10 articles', desc: 'A curated collection of tips and techniques for efficient part modeling.' },
      { icon: 'Play', title: 'Advanced Surfacing Techniques', type: 'Webinar', duration: '45 min', desc: 'Master complex surfacing for industrial design and consumer products.' },
      { icon: 'Box', title: 'FeatureScript Fundamentals', type: 'Course', duration: '3 hours', desc: 'Write custom features to automate your design workflows in Onshape.' },
    ],
  },
  {
    id: 'assemblies',
    slug: 'assemblies',
    heroTitle: 'Assembly Design',
    heroSubtitle:
      "Design assemblies of any size with Onshape's unique bottom-up and top-down design approaches.",
    heroBgColor: '#0d2818',
    overviewTitle: 'What is assembly modeling?',
    overviewDescription: `Assembly modeling is the process of bringing multiple parts together to create a complete product. In Onshape, assemblies are built directly in the same document as the parts, enabling seamless design changes that propagate everywhere automatically.

Onshape supports both bottom-up and top-down design methodologies. Build parts first and then assemble them, or design in-context by referencing existing assembly geometry to create new parts. With real-time collaboration, multiple engineers can work on the same assembly simultaneously without file conflicts or version control headaches.`,
    keyFeatures: [
      { icon: 'Layers', title: 'Large Assemblies', desc: 'Work with assemblies containing thousands of parts with smooth performance and intelligent load-on-demand.' },
      { icon: 'GitBranch', title: 'In-Context Design', desc: 'Design parts in the context of the assembly with references that automatically update as design changes.' },
      { icon: 'Link', title: 'Assembly Mates', desc: 'Use advanced mate types including revolute, slider, cylindrical, ball, and fastener mates to constrain components.' },
      { icon: 'Maximize2', title: 'Exploded Views', desc: 'Create exploded views automatically or manually for documentation, presentations, and assembly instructions.' },
      { icon: 'AlertTriangle', title: 'Interference Detection', desc: 'Detect interferences between parts in real-time to catch design issues early in the development process.' },
      { icon: 'List', title: 'Bill of Materials', desc: 'Generate accurate, automatically updating bills of materials directly from your assembly data.' },
    ],
    exploreResources: [
      { icon: 'Video', title: 'Assembly Design Basics', type: 'Video Tutorial', duration: '15 min', desc: 'Learn core assembly concepts including mates, patterns, and in-context design.' },
      { icon: 'BookOpen', title: 'Top-Down Design Guide', type: 'Technical Guide', duration: '8 chapters', desc: 'Master the top-down design methodology for complex product development.' },
      { icon: 'Play', title: 'Large Assembly Performance', type: 'Webinar', duration: '60 min', desc: 'Optimization techniques for working with assemblies containing thousands of parts.' },
      { icon: 'Layers', title: 'Advanced Mating Techniques', type: 'Course', duration: '2.5 hours', desc: 'Deep dive into advanced mate types, motion analysis, and assembly validation.' },
    ],
  },
  {
    id: 'drawings',
    slug: 'drawings',
    heroTitle: 'Drawings',
    heroSubtitle:
      'Create detailed 2D drawings directly from your 3D models with fully associative drawing capabilities.',
    heroBgColor: '#1a1a2e',
    overviewTitle: 'What is drawing creation?',
    overviewDescription: `Drawing creation is the process of generating detailed 2D technical documentation from 3D models for manufacturing, quality inspection, and archival purposes. Onshape's drawing environment is fully integrated and associative — when your 3D model changes, all drawing views, dimensions, and annotations update automatically.

Onshape supports multiple sheet sizes, custom drawing templates, and comprehensive dimensioning tools. With multi-sheet drawings, exploded isometric views, section views, detail views, and automatically generated bills of materials, you have everything needed to create production-ready engineering drawings entirely in the cloud.`,
    keyFeatures: [
      { icon: 'FileText', title: 'Fully Associative Drawings', desc: 'All drawing views, dimensions, and annotations update automatically when the 3D model changes.' },
      { icon: 'LayoutGrid', title: 'Multi-View Projections', desc: 'Create standard orthographic views, isometric views, section views, detail views, and auxiliary views.' },
      { icon: 'Ruler', title: 'Dimensioning Tools', desc: 'Comprehensive linear, radial, angular, ordinate, and baseline dimensioning with full control over styles.' },
      { icon: 'Target', title: 'GD&T Annotations', desc: 'Add geometric dimensioning and tolerancing symbols per ASME Y14.5 standards to your drawings.' },
      { icon: 'List', title: 'Bill of Materials', desc: 'Insert automatically updating BOM tables directly into drawings, linked to assembly data.' },
      { icon: 'Download', title: 'DWG / DXF Export', desc: 'Export drawings to standard formats including DWG, DXF, PDF, and STEP for downstream manufacturing.' },
    ],
    exploreResources: [
      { icon: 'Video', title: 'Getting Started with Drawings', type: 'Video Tutorial', duration: '18 min', desc: 'Create your first fully associative 2D drawing from a 3D part model.' },
      { icon: 'BookOpen', title: 'Drawing Best Practices', type: 'Blog Series', duration: '6 articles', desc: 'Industry-standard techniques for creating clean, professional engineering drawings.' },
      { icon: 'Play', title: 'Advanced Drawing Techniques', type: 'Webinar', duration: '50 min', desc: 'Custom templates, sheet formats, and advanced annotation strategies.' },
      { icon: 'FileText', title: 'GD&T in Onshape', type: 'Course', duration: '2 hours', desc: 'Learn to apply geometric dimensioning and tolerancing correctly in Onshape drawings.' },
    ],
  },
  {
    id: 'sheet-metal',
    slug: 'sheet-metal',
    heroTitle: 'Sheet Metal Design',
    heroSubtitle:
      'Design sheet metal parts with specialized tools for flanges, bends, and flat pattern development.',
    heroBgColor: '#1e293b',
    overviewTitle: 'What is sheet metal design?',
    overviewDescription: `Sheet metal design involves creating parts manufactured from thin metal sheets through cutting, bending, and forming processes. Onshape provides dedicated sheet metal features that simplify the design of flanges, bends, reliefs, and automatically generate accurate flat patterns for manufacturing.

Onshape's sheet metal tools natively support K-factor calculations, bend deductions, and bend allowances. Design in the folded state and automatically get an accurate flat pattern. With multi-body sheet metal support, you can design entire sheet metal assemblies in a single Part Studio and manage material and gauge specifications through configurable sheet metal rules.`,
    keyFeatures: [
      { icon: 'Layers', title: 'Sheet Metal Features', desc: 'Create walls, flanges, hems, joggles, louvers, and other sheet metal specific features with dedicated tools.' },
      { icon: 'Maximize2', title: 'Auto Flat Pattern', desc: 'Automatically generate accurate flat patterns with bend deductions calculated from sheet metal rules.' },
      { icon: 'Calculator', title: 'Bend Deduction Calculation', desc: 'Configure K-factors, bend allowances, or bend deduction tables for precise flat pattern development.' },
      { icon: 'Stacks', title: 'Multi-Body Sheet Metal', desc: 'Design multiple sheet metal parts in a single Part Studio with in-context references between components.' },
      { icon: 'CornerDownRight', title: 'Convert to Sheet Metal', desc: 'Convert imported solid models or regular part geometry to sheet metal with automatic rip and bend recognition.' },
      { icon: 'Settings', title: 'Sheet Metal Rules', desc: 'Define and apply sheet metal rules controlling material thickness, bend radius, K-factor, and relief types.' },
    ],
    exploreResources: [
      { icon: 'Video', title: 'Sheet Metal Fundamentals', type: 'Video Tutorial', duration: '14 min', desc: 'Learn the basics of sheet metal part design and flat pattern generation.' },
      { icon: 'BookOpen', title: 'Sheet Metal Tech Tips', type: 'Blog Series', duration: '8 articles', desc: 'Pro tips for efficient sheet metal design and manufacturing preparation.' },
      { icon: 'Play', title: 'Advanced Sheet Metal', type: 'Webinar', duration: '55 min', desc: 'Complex sheet metal forms, multi-body design, and advanced flattening techniques.' },
      { icon: 'Layers', title: 'Sheet Metal with Configurations', type: 'Course', duration: '2 hours', desc: 'Design families of sheet metal parts efficiently using configurations and rules.' },
    ],
  },
  {
    id: 'frames',
    slug: 'frames',
    heroTitle: 'Frame Design',
    heroSubtitle:
      'Create structural frames and weldments quickly with specialized frame design tools.',
    heroBgColor: '#1c1917',
    overviewTitle: 'What is frame design?',
    overviewDescription: `Frame design involves creating structural frameworks and weldments using standard steel, aluminum, or other structural profiles. Onshape's frame design tools allow you to quickly generate structural members from 2D or 3D sketches, automatically mitering or trimming intersections.

With a comprehensive library of standard structural profiles including angles, channels, I-beams, tubing, and custom shapes, you can quickly build machine frames, conveyor structures, racking systems, and more. Additional weldment features like gussets, end caps, and weld beads help complete your structural designs with manufacturing-ready detail.`,
    keyFeatures: [
      { icon: 'Frame', title: 'Structural Members', desc: 'Create frame members from sketches using standard steel, aluminum, and custom structural profiles.' },
      { icon: 'Triangle', title: 'Gussets', desc: 'Add triangular or rectangular gusset plates to reinforce frame joints and increase structural rigidity.' },
      { icon: 'Square', title: 'End Caps', desc: 'Close off the ends of structural tubing and pipe profiles with flat or formed end caps.' },
      { icon: 'Flame', title: 'Weld Beads', desc: 'Add weld beads and weld symbols to document weld specifications and manufacturing requirements.' },
      { icon: 'Scissors', title: 'Trim & Extend', desc: 'Automatically trim, miter, butt, and extend frame members at intersections for clean joints.' },
      { icon: 'Library', title: 'Profile Library', desc: 'Access standard ANSI, ISO, DIN structural profiles or create custom library entries for your organization.' },
    ],
    exploreResources: [
      { icon: 'Video', title: 'Frame Design Quick Start', type: 'Video Tutorial', duration: '11 min', desc: 'Build your first structural frame using sketches and standard steel profiles.' },
      { icon: 'BookOpen', title: 'Weldment Design Guide', type: 'Technical Guide', duration: '5 chapters', desc: 'Best practices for frame and weldment design in manufacturing environments.' },
      { icon: 'Play', title: 'Advanced Frame Design', type: 'Webinar', duration: '45 min', desc: 'Complex frame structures, custom profiles, and automated cut list generation.' },
      { icon: 'Frame', title: 'Custom Profile Libraries', type: 'Course', duration: '1.5 hours', desc: 'Create and manage company-specific structural profile libraries for your team.' },
    ],
  },
  {
    id: 'configurations',
    slug: 'configurations',
    heroTitle: 'Configurations',
    heroSubtitle:
      'Create multiple variations of parts and assemblies within a single document.',
    heroBgColor: '#0c1a33',
    overviewTitle: 'What are configurations?',
    overviewDescription: `Configurations allow you to create multiple variations of a part or assembly within a single Onshape document. Instead of maintaining separate files for each size or version of a design, configurations let you control dimensions, features, materials, suppression states, and more — all in one place.

Onshape configurations support both manual configuration lists and generated configuration tables. Use the design table interface to rapidly create hundreds of part or assembly variants, and switch between them instantly. Configurations propagate through assemblies and drawings, ensuring that your entire product documentation stays in sync with your design intent.`,
    keyFeatures: [
      { icon: 'Box', title: 'Part Configurations', desc: 'Configure dimensions, features, materials, colors, and more to create variations of your parts.' },
      { icon: 'Layers', title: 'Assembly Configurations', desc: 'Create assembly variations with different component configurations, suppression states, and mate values.' },
      { icon: 'Table', title: 'Configuration Table', desc: 'Use a spreadsheet-style interface to generate and manage hundreds of configurations efficiently.' },
      { icon: 'ListOrdered', title: 'Series Part Design Table', desc: 'Drive entire families of parts from a single design using standardized parameter tables.' },
      { icon: 'ToggleLeft', title: 'Configuration Switching', desc: 'Switch between configurations instantly in parts, assemblies, and drawings with a single click.' },
      { icon: 'Send', title: 'Configuration Release', desc: 'Release specific configurations through your release management process independently.' },
    ],
    exploreResources: [
      { icon: 'Video', title: 'Introduction to Configurations', type: 'Video Tutorial', duration: '13 min', desc: 'Learn the basics of creating and using configurations in parts and assemblies.' },
      { icon: 'BookOpen', title: 'Configuration Best Practices', type: 'Blog Series', duration: '7 articles', desc: 'Strategies for organizing complex product families with configurations.' },
      { icon: 'Play', title: 'Advanced Configuration Techniques', type: 'Webinar', duration: '55 min', desc: 'Configuration tables, derived configurations, and complex assembly variants.' },
      { icon: 'Table', title: 'Configurable Products Masterclass', type: 'Course', duration: '3 hours', desc: 'Build complete configurable product lines from parts through assemblies to drawings.' },
    ],
  },
  {
    id: 'surfacing',
    slug: 'surfacing',
    heroTitle: 'Surfacing',
    heroSubtitle:
      'Create complex freeform geometry with advanced surface modeling tools.',
    heroBgColor: '#181628',
    overviewTitle: 'What is surface modeling?',
    overviewDescription: `Surface modeling is a technique for creating complex freeform geometry using NURBS (Non-Uniform Rational B-Spline) surfaces. Unlike solid modeling which works with closed volumes, surface modeling works with infinitely thin sheets of geometry, allowing for the creation of highly complex organic shapes required in industrial design, consumer products, and automotive styling.

Onshape surfacing tools include loft, sweep, boundary, fill, and offset surfaces, along with advanced trim, extend, and knit operations. You can mix surface and solid modeling techniques seamlessly — building surfaces for complex aesthetic shapes and then thickening or stitching them into solid geometry for manufacturing.`,
    keyFeatures: [
      { icon: 'Wand2', title: 'Freeform Surfaces', desc: 'Create smooth, organic freeform shapes using control point editing and curve-based surface generation.' },
      { icon: 'Layers3', title: 'Loft Surfaces', desc: 'Generate surfaces by blending between multiple cross-section profiles with full control over tangency.' },
      { icon: 'Spline', title: 'Sweep Surfaces', desc: 'Sweep profiles along 2D or 3D paths with guide curves and twist control for complex forms.' },
      { icon: 'Scissors', title: 'Surface Trim', desc: 'Trim surfaces using other surfaces, planes, or sketched curves to create precise boundaries.' },
      { icon: 'SquareStack', title: 'Thicken Surface', desc: 'Convert surface geometry to solid parts by adding wall thickness with inward, outward, or symmetric options.' },
      { icon: 'RefreshCw', title: 'Surface to Solid Conversion', desc: 'Knit and stitch multiple surfaces together into watertight solid geometry for manufacturing.' },
    ],
    exploreResources: [
      { icon: 'Video', title: 'Surfacing Fundamentals', type: 'Video Tutorial', duration: '16 min', desc: 'Learn core surfacing concepts and tools for creating complex geometry.' },
      { icon: 'BookOpen', title: 'Industrial Design Workflows', type: 'Blog Series', duration: '5 articles', desc: 'How to approach consumer product design using surfacing techniques.' },
      { icon: 'Play', title: 'Advanced Surfacing Masterclass', type: 'Webinar', duration: '75 min', desc: 'Complex organic shapes, curvature analysis, and surface quality evaluation.' },
      { icon: 'Wand2', title: 'Aesthetic Design with Onshape', type: 'Course', duration: '4 hours', desc: 'Complete workflow from sketch ideation to production-ready surfaced geometry.' },
    ],
  },
  {
    id: 'data-management',
    slug: 'data-management',
    heroTitle: 'Data Management',
    heroSubtitle:
      'Built-in PDM with a single source of truth for all your design data.',
    heroBgColor: '#141e30',
    overviewTitle: 'What is product data management?',
    overviewDescription: `Product Data Management (PDM) is the process of organizing and controlling product-related data throughout its lifecycle. Onshape includes built-in PDM capabilities as a core part of the platform, eliminating the need for separate data management systems and the file management overhead that plagues traditional desktop CAD.

With Onshape's database-driven architecture, there are no files to check in or out, no duplicate copies, and no version conflicts. Every design change is tracked automatically, and all team members always work with the latest version. Granular permissions ensure the right people have the right access, while powerful search makes finding any design element instant.`,
    keyFeatures: [
      { icon: 'Database', title: 'Single Source of Truth', desc: 'Eliminate file chaos with a centralized database where everyone works on the same version of the design.' },
      { icon: 'GitBranch', title: 'Version Control', desc: 'Track every change automatically with full version history and the ability to revert to any previous state.' },
      { icon: 'Lock', title: 'Access Permissions', desc: 'Manage fine-grained access controls with owner, editor, commenter, and viewer roles for every document.' },
      { icon: 'Search', title: 'Powerful Search', desc: 'Find any part, feature, drawing, or document instantly with full-text search across your entire workspace.' },
      { icon: 'Share2', title: 'Secure Sharing', desc: 'Share designs with internal teams or external partners with controlled access and expiration dates.' },
      { icon: 'Activity', title: 'Audit Trail', desc: 'Complete history of who changed what, when, and why with comprehensive audit logs for compliance.' },
    ],
    exploreResources: [
      { icon: 'Video', title: 'PDM Fundamentals', type: 'Video Tutorial', duration: '14 min', desc: 'Learn how built-in PDM eliminates file management headaches in Onshape.' },
      { icon: 'BookOpen', title: 'Data Management Best Practices', type: 'Blog Series', duration: '7 articles', desc: 'Organize your CAD data effectively with proven Onshape workflows.' },
      { icon: 'Play', title: 'Enterprise Data Governance', type: 'Webinar', duration: '50 min', desc: 'Strategies for managing design data at scale across distributed teams.' },
      { icon: 'Database', title: 'PDM Administration Masterclass', type: 'Course', duration: '2.5 hours', desc: 'Deep dive into permissions, sharing, workspace organization, and data governance.' },
    ],
  },
  {
    id: 'branching-merging',
    slug: 'branching-merging',
    heroTitle: 'Branching & Merging',
    heroSubtitle:
      'Manage design changes with Git-like branching and merging capabilities.',
    heroBgColor: '#0f1b2d',
    overviewTitle: 'What is branching and merging?',
    overviewDescription: `Branching and merging is a version control paradigm borrowed from software development that allows multiple designers to work on different aspects of a design simultaneously without interfering with each other. Onshape brings this powerful capability to mechanical CAD for the first time, fundamentally changing how teams collaborate on design.

Create branches to explore design alternatives, fix bugs, or develop new features without affecting the main design. When ready, merge your changes back into the main branch with visual diffing and conflict resolution. Branching enables true parallel engineering, reduces design bottlenecks, and gives teams the freedom to innovate without risk.`,
    keyFeatures: [
      { icon: 'GitBranch', title: 'Design Branches', desc: 'Create independent branches of your design to explore alternatives or develop new features safely.' },
      { icon: 'Users', title: 'Parallel Design', desc: 'Multiple engineers can work on different branches simultaneously, dramatically increasing team throughput.' },
      { icon: 'GitMerge', title: 'Change Merging', desc: 'Merge completed work from branches back into the main design with full control over what gets merged.' },
      { icon: 'GitCompare', title: 'Version Comparison', desc: 'Visually compare any two versions or branches to see exactly what changed and by whom.' },
      { icon: 'AlertCircle', title: 'Conflict Resolution', desc: 'Intelligent conflict detection and resolution tools help teams resolve overlapping changes.' },
      { icon: 'History', title: 'Complete History', desc: 'Full history of all branches, merges, and changes provides complete traceability of every design iteration.' },
    ],
    exploreResources: [
      { icon: 'Video', title: 'Introduction to Branching', type: 'Video Tutorial', duration: '12 min', desc: 'Learn the basics of creating and managing design branches in Onshape.' },
      { icon: 'BookOpen', title: 'Git for CAD Engineers', type: 'Blog Series', duration: '6 articles', desc: 'Understanding version control concepts and how they apply to mechanical design.' },
      { icon: 'Play', title: 'Advanced Branching Workflows', type: 'Webinar', duration: '60 min', desc: 'Production-grade branching strategies for engineering teams of all sizes.' },
      { icon: 'GitMerge', title: 'Collaborative Design Masterclass', type: 'Course', duration: '3 hours', desc: 'Master branching, merging, and parallel engineering for maximum team productivity.' },
    ],
  },
  {
    id: 'release-management',
    slug: 'release-management',
    heroTitle: 'Release Management',
    heroSubtitle:
      'Control your product development lifecycle with formal release workflows.',
    heroBgColor: '#1a1f1a',
    overviewTitle: 'What is release management?',
    overviewDescription: `Release management is the process of formally approving, releasing, and revising product designs for manufacturing. Onshape provides configurable release workflows that enforce your company's engineering change processes, ensuring that released data is controlled, traceable, and trustworthy.

Define custom release workflows that match your organization's approval processes. Set up revision schemes, approver roles, and release conditions. When designs are ready for production, submit them through the formal release process where designated approvers review and approve. Released revisions are locked and immutable, providing a reliable baseline for manufacturing and quality.`,
    keyFeatures: [
      { icon: 'ClipboardCheck', title: 'Release Workflows', desc: 'Define custom release workflows with configurable states, transitions, and approval requirements.' },
      { icon: 'CheckSquare', title: 'Approval Process', desc: 'Designate approvers and set up multi-level approval chains to ensure proper review before release.' },
      { icon: 'Hash', title: 'Revision Control', desc: 'Automatic revision numbering with support for numeric, alphabetic, and custom revision schemes.' },
      { icon: 'Bell', title: 'Release Notifications', desc: 'Automatic notifications keep all stakeholders informed when designs are submitted, approved, or released.' },
      { icon: 'Megaphone', title: 'Change Notices', desc: 'Engineering change notices (ECNs) formally communicate design changes to downstream stakeholders.' },
      { icon: 'ShieldCheck', title: 'Compliance Auditing', desc: 'Complete audit trail of all release activities for regulatory compliance and quality management.' },
    ],
    exploreResources: [
      { icon: 'Video', title: 'Release Management Basics', type: 'Video Tutorial', duration: '15 min', desc: 'Set up your first release workflow and learn the release process in Onshape.' },
      { icon: 'BookOpen', title: 'Release Management Guide', type: 'Technical Guide', duration: '6 chapters', desc: 'Best practices for setting up and managing release processes for engineering teams.' },
      { icon: 'Play', title: 'Enterprise Release Management', type: 'Webinar', duration: '55 min', desc: 'Advanced release configurations for complex organizations with multiple approval levels.' },
      { icon: 'ClipboardCheck', title: 'Quality & Compliance Workshop', type: 'Course', duration: '2 hours', desc: 'Implementing release management for ISO, FDA, and other regulated environments.' },
    ],
  },
  {
    id: 'bill-of-materials',
    slug: 'bill-of-materials',
    heroTitle: 'Bill of Materials',
    heroSubtitle:
      "Generate accurate, up-to-date BOMs directly from your 3D models.",
    heroBgColor: '#1f1a1a',
    overviewTitle: 'What is a bill of materials?',
    overviewDescription: `A Bill of Materials (BOM) is a comprehensive list of all the parts, assemblies, materials, and components required to manufacture a product. Onshape automatically generates accurate BOMs directly from your 3D assembly data, ensuring that your engineering BOM is always in sync with your design.

Onshape BOMs support multiple levels, custom properties, and configurable formatting. Export BOMs to CSV, Excel, or push them directly to your ERP or PLM system. With associativity built in, any design change automatically updates the BOM, eliminating the manual data entry errors that are so common with spreadsheet-based BOM management.`,
    keyFeatures: [
      { icon: 'ListChecks', title: 'Automatic BOM Generation', desc: 'Generate accurate, up-to-date bills of materials directly from your assembly design with one click.' },
      { icon: 'Layers', title: 'Multi-Level BOM', desc: 'View BOMs at any level of the assembly hierarchy, from top-level to individual components.' },
      { icon: 'Tags', title: 'Custom Properties', desc: 'Add custom properties like part numbers, materials, finishes, suppliers, and cost data to BOM lines.' },
      { icon: 'Download', title: 'BOM Export', desc: 'Export BOMs to CSV, Excel, or send directly to ERP, PLM, and manufacturing systems.' },
      { icon: 'GitCompare', title: 'BOM Comparison', desc: 'Compare BOMs between versions or configurations to see exactly what parts changed.' },
      { icon: 'Barcode', title: 'Part Numbering', desc: 'Automatic part number generation with configurable schemes and categorization for all your components.' },
    ],
    exploreResources: [
      { icon: 'Video', title: 'BOM Fundamentals', type: 'Video Tutorial', duration: '13 min', desc: 'Learn how to generate and customize bills of materials in Onshape.' },
      { icon: 'BookOpen', title: 'BOM Best Practices', type: 'Blog Series', duration: '5 articles', desc: 'Tips for setting up BOMs that work for both engineering and manufacturing.' },
      { icon: 'Play', title: 'BOMs & Manufacturing', type: 'Webinar', duration: '45 min', desc: 'Bridging the gap between engineering BOMs and manufacturing BOMs.' },
      { icon: 'ListChecks', title: 'Advanced BOM Management', type: 'Course', duration: '2 hours', desc: 'Custom properties, numbered schemes, and ERP/PLM integration strategies.' },
    ],
  },
  {
    id: 'collaboration',
    slug: 'collaboration',
    heroTitle: 'Collaboration',
    heroSubtitle:
      'Work together in real-time with built-in collaboration tools.',
    heroBgColor: '#0d2020',
    overviewTitle: 'What is real-time collaboration?',
    overviewDescription: `Real-time collaboration in CAD means multiple designers, engineers, and stakeholders can work in the same document simultaneously, seeing each other's changes live. Onshape's cloud-native architecture enables true multi-user editing — similar to Google Docs but for mechanical design — fundamentally changing how product development teams work together.

Comment directly on geometry, parts, or features with threaded discussions that stay attached to the design. Share designs with anyone via a link, control exactly what they can see and do, and get notified when changes happen. Version history and branch comparison make it easy to understand what changed, who changed it, and why.`,
    keyFeatures: [
      { icon: 'Users', title: 'Real-Time Co-Editing', desc: 'Multiple users can edit the same document simultaneously with live cursor presence and instant updates.' },
      { icon: 'MessageSquare', title: 'Comments & Annotations', desc: 'Threaded comments attached directly to geometry, features, or parts keep design discussions organized.' },
      { icon: 'Share2', title: 'Design Sharing', desc: 'Share designs with internal teams or external partners via link with controlled access permissions.' },
      { icon: 'GitCompare', title: 'Version Compare', desc: 'Visually compare any two versions to see exactly what changed, when, and by whom.' },
      { icon: 'Bell', title: 'Notifications', desc: 'Stay informed with in-app and email notifications for comments, changes, approvals, and mentions.' },
      { icon: 'Lock', title: 'Permission Control', desc: 'Granular access controls from view-only to full edit, with document-level and workspace-level roles.' },
    ],
    exploreResources: [
      { icon: 'Video', title: 'Collaboration Quick Start', type: 'Video Tutorial', duration: '10 min', desc: 'Learn the basics of real-time collaboration and design sharing in Onshape.' },
      { icon: 'BookOpen', title: 'Remote Team Playbook', type: 'Blog Series', duration: '7 articles', desc: 'How to build effective distributed engineering teams with Onshape.' },
      { icon: 'Play', title: 'Enterprise Collaboration', type: 'Webinar', duration: '50 min', desc: 'Best practices for large organizations with cross-functional design teams.' },
      { icon: 'Users', title: 'Team Collaboration Masterclass', type: 'Course', duration: '2.5 hours', desc: 'Deep dive into comments, sharing, notifications, permissions, and collaboration workflows.' },
    ],
  },
  {
    id: 'integrations',
    slug: 'integrations',
    heroTitle: 'Integrations',
    heroSubtitle:
      'Connect Onshape with your favorite tools and services.',
    heroBgColor: '#161426',
    overviewTitle: 'What are integrations?',
    overviewDescription: `Integrations connect Onshape with other software tools in your product development ecosystem, allowing data to flow seamlessly between systems. Onshape provides a comprehensive REST API, a growing App Store of third-party applications, and native integrations with leading CAM, CAE, PLM, and project management tools.

Extend Onshape's capabilities by installing apps from the Onshape App Store — everything from simulation and CAM to rendering and cost estimation. Build custom integrations using the fully-documented REST API, or connect with enterprise systems using single sign-on (SSO) and standard protocols. Onshape's open platform ensures it fits into your existing toolchain rather than forcing you to replace it.`,
    keyFeatures: [
      { icon: 'Code2', title: 'REST API', desc: 'Comprehensive REST API for building custom integrations, automations, and extensions for your workflows.' },
      { icon: 'ShoppingBag', title: 'App Store', desc: 'Browse and install hundreds of third-party applications directly from the Onshape App Store.' },
      { icon: 'Cog', title: 'CAM Integrations', desc: 'Connect with leading CAM software including Mastercam, HSMWorks, FeatureCAM, and more for machining.' },
      { icon: 'Cpu', title: 'CAE / Simulation', desc: 'Integrate with simulation tools including ANSYS, SIMULIA, and COMSOL for structural, thermal, and CFD analysis.' },
      { icon: 'Layers', title: 'PLM Integrations', desc: 'Connect with enterprise PLM systems including Arena, Propel, and other product lifecycle management platforms.' },
      { icon: 'KeyRound', title: 'Single Sign-On', desc: 'Enterprise SSO support including SAML, Okta, Azure AD, and Google Workspace for secure access management.' },
    ],
    exploreResources: [
      { icon: 'Video', title: 'Introduction to Integrations', type: 'Video Tutorial', duration: '12 min', desc: 'Overview of the Onshape App Store, API capabilities, and integration options.' },
      { icon: 'BookOpen', title: 'Integration Guide', type: 'Technical Guide', duration: '8 chapters', desc: 'Comprehensive guide to planning and implementing Onshape integrations.' },
      { icon: 'Play', title: 'App Store Deep Dive', type: 'Webinar', duration: '55 min', desc: 'Explore the most popular apps in the Onshape App Store and how they extend functionality.' },
      { icon: 'Code2', title: 'Onshape API Developer Course', type: 'Course', duration: '4 hours', desc: 'Learn to build custom integrations and applications using the Onshape REST API.' },
    ],
  },
  {
    id: 'security',
    slug: 'security',
    heroTitle: 'Security',
    heroSubtitle:
      "Enterprise-grade security built into every aspect of Onshape's cloud-native platform.",
    heroBgColor: '#0a1f1a',
    overviewTitle: 'How does Onshape keep your data secure?',
    overviewDescription: `Security is not an afterthought at Onshape — it is built into the foundation of our cloud-native platform. From the data center level to the application level, every layer of Onshape has been designed with security as a top priority. Our enterprise-grade security program ensures your intellectual property is protected at all times.

Onshape uses multiple layers of security including encryption in transit and at rest, granular access controls, comprehensive audit logging, and regular third-party security assessments. With SOC 2 Type II compliance, ISO 27001 certification, and a dedicated security team, Onshape provides the level of protection that enterprise organizations demand for their most sensitive design data.`,
    keyFeatures: [
      { icon: 'Lock', title: 'Data Encryption', desc: 'All data is encrypted in transit using TLS 1.2+ and at rest using AES-256, ensuring your designs are always protected.' },
      { icon: 'KeyRound', title: 'Access Control', desc: 'Fine-grained role-based access controls let you manage exactly who can view, edit, comment on, or share each document.' },
      { icon: 'ShieldCheck', title: 'Single Sign-On (SSO)', desc: 'Enterprise single sign-on support including SAML 2.0, Okta, Azure AD, and Google Workspace integration.' },
      { icon: 'Activity', title: 'Audit Logging', desc: 'Comprehensive audit logs capture every user action, providing complete traceability for compliance and security reviews.' },
      { icon: 'Award', title: 'Compliance Certifications', desc: 'SOC 2 Type II, ISO 27001, and GDPR compliant with regular third-party audits and penetration testing.' },
      { icon: 'Database', title: 'Secure Data Backup', desc: 'Automated, geographically redundant backups with point-in-time recovery capabilities ensure data durability and availability.' },
    ],
    exploreResources: [
      { icon: 'ShieldCheck', title: 'Security Whitepaper', type: 'Whitepaper', duration: '28 pages', desc: 'Comprehensive overview of Onshape security architecture, practices, and certifications.' },
      { icon: 'BookOpen', title: 'Enterprise Security Guide', type: 'Technical Guide', duration: '6 chapters', desc: 'Detailed information on data protection, access controls, and compliance for enterprise IT teams.' },
      { icon: 'Play', title: 'Security Deep Dive Webinar', type: 'Webinar', duration: '50 min', desc: 'Inside look at Onshape security architecture with our Chief Information Security Officer.' },
      { icon: 'Lock', title: 'Admin Security Essentials', type: 'Course', duration: '2 hours', desc: 'Configure and manage security settings for your Onshape enterprise deployment.' },
    ],
  },
  {
    id: 'support',
    slug: 'support',
    heroTitle: 'Support',
    heroSubtitle:
      'Get the help you need with direct, in-product support from real engineers.',
    heroBgColor: '#151f30',
    overviewTitle: 'What support options are available?',
    overviewDescription: `Onshape provides multiple channels of support to ensure you get the help you need when you need it. Our support team consists of experienced engineers and CAD professionals who understand design workflows and can resolve issues quickly and effectively.

From in-product chat support with real engineers to a comprehensive knowledge base, active community forums, and extensive video tutorials, you have access to the resources you need to be successful with Onshape. Enterprise plans include priority support with dedicated account managers and faster response times for critical issues.`,
    keyFeatures: [
      { icon: 'MessageSquare', title: 'In-Product Support', desc: 'Get help directly within Onshape via live chat with our support team of experienced engineers and CAD specialists.' },
      { icon: 'BookOpen', title: 'Knowledge Base', desc: 'Search thousands of help articles, troubleshooting guides, and technical documentation covering every aspect of Onshape.' },
      { icon: 'Users', title: 'Community Forums', desc: 'Join the active Onshape community to ask questions, share tips, and learn from other users and experts.' },
      { icon: 'Video', title: 'Video Tutorials', desc: 'Hundreds of video tutorials covering everything from getting started to advanced modeling techniques.' },
      { icon: 'FileText', title: 'Technical Documentation', desc: 'Comprehensive technical documentation with detailed feature descriptions, API references, and best practices.' },
      { icon: 'GraduationCap', title: 'Training Courses', desc: 'Structured training courses and certification programs to help your team master Onshape quickly.' },
    ],
    exploreResources: [
      { icon: 'MessageSquare', title: 'Support Center Overview', type: 'Getting Started', duration: '5 min read', desc: 'Learn how to get the most out of Onshape support resources and when to use each channel.' },
      { icon: 'BookOpen', title: 'Knowledge Base Quick Guide', type: 'Guide', duration: '3 chapters', desc: 'How to effectively search and use the Onshape knowledge base for self-service support.' },
      { icon: 'Play', title: 'Support Best Practices', type: 'Webinar', duration: '40 min', desc: 'Tips for working effectively with support, troubleshooting common issues, and escalating when needed.' },
      { icon: 'Users', title: 'Community Power User Program', type: 'Community', duration: 'Self-paced', desc: 'Become an Onshape community power user and help other designers succeed.' },
    ],
  },
  {
    id: 'analytics',
    slug: 'analytics',
    heroTitle: 'Analytics',
    heroSubtitle:
      'Gain insights into your product development process with built-in analytics dashboards.',
    heroBgColor: '#0c1f2f',
    overviewTitle: 'What can you learn from design analytics?',
    overviewDescription: `Design analytics provide visibility into how your product development process is actually functioning. Onshape analytics dashboards give engineering managers and team leads actionable insights into project progress, team productivity, design activity, and collaboration patterns — helping you optimize workflows and identify bottlenecks.

Track key metrics like document activity, user engagement, feature usage, and design cycle times. Understand which projects are on track, identify teams that need additional resources, and measure the impact of process changes. With custom reports and data export capabilities, you can integrate design analytics with your existing business intelligence tools.`,
    keyFeatures: [
      { icon: 'BarChart2', title: 'Project Dashboards', desc: 'High-level dashboards showing project status, active documents, user activity, and design milestones at a glance.' },
      { icon: 'Activity', title: 'User Activity Analysis', desc: 'Track individual and team activity levels including time spent, documents accessed, and features created.' },
      { icon: 'Target', title: 'Design Metrics Tracking', desc: 'Measure key design metrics including part count growth, revision frequency, and release cycle times.' },
      { icon: 'Users', title: 'Team Collaboration Insights', desc: 'Understand how teams collaborate with metrics on comments, sharing, co-editing sessions, and review activity.' },
      { icon: 'FileBarChart', title: 'Custom Reports', desc: 'Build custom analytics reports focused on the metrics that matter most to your organization.' },
      { icon: 'Download', title: 'Data Export', desc: 'Export analytics data to CSV or integrate with your BI tools via API for deeper analysis.' },
    ],
    exploreResources: [
      { icon: 'BarChart2', title: 'Analytics Getting Started', type: 'Video Tutorial', duration: '15 min', desc: 'Learn your way around Onshape analytics dashboards and key metrics.' },
      { icon: 'BookOpen', title: 'Engineering Metrics Playbook', type: 'E-Book', duration: '32 pages', desc: 'Which metrics engineering managers should track and how to use them effectively.' },
      { icon: 'Play', title: 'Data-Driven Design Teams', type: 'Webinar', duration: '55 min', desc: 'How leading engineering teams use analytics to improve productivity and quality.' },
      { icon: 'Target', title: 'Advanced Analytics Workshop', type: 'Course', duration: '2 hours', desc: 'Build custom dashboards, reports, and integrations for enterprise analytics use cases.' },
    ],
  },
  {
    id: 'simulation',
    slug: 'simulation',
    heroTitle: 'Simulation',
    heroSubtitle:
      'Test your designs virtually with built-in finite element analysis tools.',
    heroBgColor: '#1a1f30',
    overviewTitle: 'What is simulation in CAD?',
    overviewDescription: `Simulation in CAD uses finite element analysis (FEA) to virtually test how designs will perform under real-world conditions. By simulating stresses, deflections, vibrations, and thermal effects digitally, engineers can identify potential issues early, reduce the number of physical prototypes needed, and get products to market faster.

Onshape simulation tools are fully integrated into the design environment, allowing you to set up, run, and review analyses without leaving your design workspace. With direct associativity, design changes automatically propagate to simulation studies, making iterative design optimization fast and seamless. From structural stress to modal analysis to thermal studies, Onshape provides the simulation capabilities you need to build better products.`,
    keyFeatures: [
      { icon: 'Triangle', title: 'Structural Stress Analysis', desc: 'Simulate static loads and stresses to identify weak points, optimize material usage, and ensure structural integrity.' },
      { icon: 'Vibrate', title: 'Modal Analysis', desc: 'Calculate natural frequencies and mode shapes to avoid resonance issues and optimize dynamic performance.' },
      { icon: 'Flame', title: 'Thermal Analysis', desc: 'Simulate heat transfer and temperature distributions in your designs to manage thermal performance.' },
      { icon: 'Box', title: 'Material Library', desc: 'Access a comprehensive library of engineering materials with accurate physical and mechanical properties.' },
      { icon: 'Grid3x3', title: 'Mesh Control', desc: 'Fine-tune finite element mesh density and quality for accurate results where you need them most.' },
      { icon: 'Eye', title: 'Results Visualization', desc: 'Interactive 3D visualization of simulation results including stress contours, displacement plots, and animation.' },
    ],
    exploreResources: [
      { icon: 'Triangle', title: 'Simulation Fundamentals', type: 'Video Tutorial', duration: '14 min', desc: 'Introduction to finite element analysis and setting up your first simulation study in Onshape.' },
      { icon: 'BookOpen', title: 'FEA Best Practices Guide', type: 'Technical Guide', duration: '7 chapters', desc: 'Essential best practices for accurate and reliable finite element analysis results.' },
      { icon: 'Play', title: 'Design Optimization with Simulation', type: 'Webinar', duration: '60 min', desc: 'How to use simulation to iterate faster and optimize designs for weight, strength, and cost.' },
      { icon: 'Activity', title: 'Advanced Simulation Techniques', type: 'Course', duration: '3 hours', desc: 'Advanced FEA topics including contact analysis, nonlinear materials, and dynamic simulation.' },
    ],
  },
  {
    id: 'cam',
    slug: 'cam',
    heroTitle: 'CAM',
    heroSubtitle:
      'Generate toolpaths directly from your 3D models with integrated CAM capabilities.',
    heroBgColor: '#1f1a12',
    overviewTitle: 'What is CAM in Onshape?',
    overviewDescription: `Computer-Aided Manufacturing (CAM) is the process of generating toolpaths and machining instructions directly from 3D CAD models. Onshape CAM integrates machining capabilities directly into the design environment, eliminating the need to transfer files between separate CAD and CAM systems and ensuring designs and toolpaths are always in sync.

With support for 2.5-axis through 5-axis milling, turning, and multi-tasking machines, Onshape CAM provides comprehensive machining capabilities for a wide range of manufacturing requirements. Toolpath simulation lets you verify machining operations before sending them to the shop floor, reducing scrap and setup time. An extensive library of post-processors ensures compatibility with virtually any CNC machine.`,
    keyFeatures: [
      { icon: 'Layers', title: '2.5-Axis Milling', desc: 'Generate 2.5-axis milling toolpaths including facing, pocketing, contouring, drilling, and tapping operations.' },
      { icon: 'Box', title: '3-Axis Milling', desc: 'Create 3-axis toolpaths for complex surface machining including parallel, scallop, and pencil milling strategies.' },
      { icon: 'Circle', title: 'Turning Operations', desc: 'Program turning operations including roughing, finishing, grooving, threading, and part-off for lathe machines.' },
      { icon: 'Cog', title: 'Multi-Axis Machining', desc: 'Advanced 4-axis and 5-axis machining strategies for complex aerospace, medical, and mold applications.' },
      { icon: 'Play', title: 'Toolpath Simulation', desc: 'Verify toolpaths with full machine simulation including collision detection and material removal visualization.' },
      { icon: 'FileOutput', title: 'Post Processors', desc: 'Hundreds of pre-built post-processors for all major CNC machine brands and controllers.' },
    ],
    exploreResources: [
      { icon: 'Cog', title: 'CAM Getting Started', type: 'Video Tutorial', duration: '16 min', desc: 'Create your first toolpaths and learn the CAM workflow in Onshape.' },
      { icon: 'BookOpen', title: 'Machinist Handbook', type: 'Technical Guide', duration: '9 chapters', desc: 'Comprehensive guide to CNC programming best practices and machining strategies.' },
      { icon: 'Play', title: 'From CAD to Chip', type: 'Webinar', duration: '55 min', desc: 'End-to-end workflow from design to machining with integrated CAD/CAM in Onshape.' },
      { icon: 'Wrench', title: 'Advanced CAM Masterclass', type: 'Course', duration: '4 hours', desc: 'Multi-axis machining, custom tool libraries, post-processor customization, and shop floor collaboration.' },
    ],
  },
  {
    id: 'rendering',
    slug: 'rendering',
    heroTitle: 'Rendering',
    heroSubtitle:
      'Create photorealistic images and animations of your designs directly in the cloud.',
    heroBgColor: '#1a1525',
    overviewTitle: 'What is cloud rendering?',
    overviewDescription: `Cloud rendering generates photorealistic images and animations of 3D models using cloud-based computing resources instead of local workstations. Onshape rendering allows you to create stunning visualizations of your designs for marketing materials, design reviews, customer presentations, and e-commerce — all without expensive graphics hardware.

Built on physically-based rendering technology, Onshape rendering produces studio-quality images with accurate materials, lighting, and reflections. Choose from a library of realistic materials, set up lighting and environments, and generate high-quality renders in the cloud. With batch rendering and animation support, you can create entire visual product lines without ever leaving your browser.`,
    keyFeatures: [
      { icon: 'Image', title: 'Photorealistic Rendering', desc: 'Generate high-quality, physically-based rendered images with accurate lighting, shadows, and reflections.' },
      { icon: 'Palette', title: 'Material Library', desc: 'Access hundreds of realistic materials including metals, plastics, glass, wood, fabrics, and more.' },
      { icon: 'Sun', title: 'Lighting Setup', desc: 'Control lighting with HDRI environments, area lights, studio lighting setups, and custom light rigs.' },
      { icon: 'Mountain', title: 'Environment Backgrounds', desc: 'Place your designs in realistic environments ranging from studio backdrops to outdoor scenes.' },
      { icon: 'Film', title: 'Animation Rendering', desc: 'Create smooth 3D animations of your designs including turntables, exploded views, and motion studies.' },
      { icon: 'Layers', title: 'Batch Rendering', desc: 'Render multiple configurations, views, or entire product lines simultaneously in the cloud.' },
    ],
    exploreResources: [
      { icon: 'Image', title: 'Rendering Quick Start', type: 'Video Tutorial', duration: '12 min', desc: 'Create your first photorealistic render from an Onshape part or assembly.' },
      { icon: 'BookOpen', title: 'Product Visualization Guide', type: 'E-Book', duration: '24 pages', desc: 'Tips and techniques for creating professional product renders for marketing and e-commerce.' },
      { icon: 'Play', title: 'Advanced Rendering Workshop', type: 'Webinar', duration: '45 min', desc: 'Studio lighting, material realism, and creating renderings that sell your products.' },
      { icon: 'Palette', title: 'Visual Design & Rendering', type: 'Course', duration: '3 hours', desc: 'Complete workflow from CAD model to final rendered image suitable for professional product marketing.' },
    ],
  },
  {
    id: 'pcb-studio',
    slug: 'pcb-studio',
    heroTitle: 'PCB Studio',
    heroSubtitle:
      'Design printed circuit boards alongside your mechanical designs in one system.',
    heroBgColor: '#0f1f1f',
    overviewTitle: 'What is PCB Studio?',
    overviewDescription: `PCB Studio brings electronic design directly into the Onshape platform, enabling true MCAD/ECAD co-design. Mechanical and electrical engineers can work together in the same environment, eliminating the friction and errors caused by transferring data between disconnected CAD and EDA tools.

Design schematics and PCB layouts natively within Onshape, with real-time collaboration across engineering disciplines. MCAD/ECAD cross-probing ensures that mechanical enclosures, mounting features, and connector locations always align with the PCB design. With DRC checking, component libraries, and manufacturing export capabilities, PCB Studio provides a complete electronic design solution integrated with your mechanical design workflow.`,
    keyFeatures: [
      { icon: 'CircuitBoard', title: 'Schematic Design', desc: 'Create electronic schematics with an intuitive editor, comprehensive component libraries, and hierarchical design support.' },
      { icon: 'LayoutGrid', title: 'PCB Layout', desc: 'Design printed circuit boards with auto-routing support, differential pairs, and design rule checking.' },
      { icon: 'Package', title: 'Component Library', desc: 'Access thousands of standard component footprints and symbols, or create and manage custom libraries.' },
      { icon: 'ShieldCheck', title: 'DRC Checking', desc: 'Automated design rule checking verifies clearance, trace width, and manufacturing constraints in real time.' },
      { icon: 'GitCompare', title: 'MCAD/ECAD Co-Design', desc: 'Seamless integration between PCB design and mechanical CAD with cross-probing and design synchronization.' },
      { icon: 'Download', title: 'Manufacturing Export', desc: 'Generate Gerber files, drill data, BOMs, and pick-and-place files for PCB manufacturing.' },
    ],
    exploreResources: [
      { icon: 'CircuitBoard', title: 'PCB Studio Introduction', type: 'Video Tutorial', duration: '15 min', desc: 'Overview of PCB Studio capabilities and the MCAD/ECAD co-design workflow in Onshape.' },
      { icon: 'BookOpen', title: 'MCAD/ECAD Integration Guide', type: 'Technical Guide', duration: '5 chapters', desc: 'Best practices for mechanical and electrical engineering collaboration using PCB Studio.' },
      { icon: 'Play', title: 'PCB Design for Mechanical Engineers', type: 'Webinar', duration: '50 min', desc: 'How mechanical engineers can use PCB Studio to accelerate enclosure and mounting design.' },
      { icon: 'Cpu', title: 'PCB Design Fundamentals', type: 'Course', duration: '3.5 hours', desc: 'Learn schematic capture, PCB layout, and manufacturing output using Onshape PCB Studio.' },
    ],
  },
  {
    id: 'ai-advisor',
    slug: 'ai-advisor',
    heroTitle: 'AI Advisor',
    heroSubtitle:
      'Get intelligent design assistance powered by artificial intelligence.',
    heroBgColor: '#171a2e',
    overviewTitle: 'What can AI Advisor do for you?',
    overviewDescription: `AI Advisor is Onshape's artificial intelligence-powered design assistant that helps engineers work faster, design better, and learn more effectively. By combining machine learning with deep knowledge of CAD best practices and engineering principles, AI Advisor provides intelligent assistance throughout the design process.

From suggesting design improvements and detecting potential errors to answering questions about features and techniques, AI Advisor acts as your always-available design partner. Trained on millions of successful designs and engineering best practices, AI Advisor can help you optimize your designs, avoid common mistakes, and discover more efficient ways to accomplish your design goals.`,
    keyFeatures: [
      { icon: 'Lightbulb', title: 'Design Suggestions', desc: 'Get intelligent suggestions for alternative design approaches, feature selection, and modeling strategies as you work.' },
      { icon: 'Eye', title: 'Feature Recognition', desc: 'AI-powered feature recognition converts imported geometry into editable features by analyzing design intent.' },
      { icon: 'AlertTriangle', title: 'Error Detection', desc: 'Proactively identify design issues, manufacturability concerns, and potential performance problems before they become costly.' },
      { icon: 'TrendingUp', title: 'Optimization Recommendations', desc: 'Receive AI-driven recommendations for optimizing designs for weight, strength, cost, and manufacturability.' },
      { icon: 'MessageCircle', title: 'Knowledge Q&A', desc: 'Ask natural language questions about Onshape features, techniques, and best practices — get instant answers.' },
      { icon: 'Wand2', title: 'Automated Modeling', desc: 'Generate geometry from natural language descriptions and automate repetitive design tasks with AI assistance.' },
    ],
    exploreResources: [
      { icon: 'Lightbulb', title: 'AI Advisor Overview', type: 'Video Tutorial', duration: '10 min', desc: 'Introduction to AI Advisor capabilities and how it can accelerate your design workflow.' },
      { icon: 'BookOpen', title: 'AI-Assisted Design Guide', type: 'E-Book', duration: '18 pages', desc: 'How to effectively use AI assistance in your design process while maintaining engineering judgment.' },
      { icon: 'Play', title: 'The Future of AI in CAD', type: 'Webinar', duration: '60 min', desc: 'Exploring how artificial intelligence is transforming product design and engineering workflows.' },
      { icon: 'Wand2', title: 'AI-Enhanced Design Workshop', type: 'Course', duration: '2.5 hours', desc: 'Practical techniques for leveraging AI Advisor to boost your design productivity and quality.' },
    ],
  },
  {
    id: 'onshape-labs',
    slug: 'onshape-labs',
    heroTitle: 'Onshape Labs',
    heroSubtitle:
      'Try out experimental features and help shape the future of cloud-native CAD.',
    heroBgColor: '#1a1520',
    overviewTitle: 'What is Onshape Labs?',
    overviewDescription: `Onshape Labs is where experimental and cutting-edge features are made available for early testing and feedback. By participating in Onshape Labs, you get early access to new capabilities before they are officially released, and you have a direct channel to influence product direction through structured feedback.

Onshape Labs features range from new modeling tools and simulation capabilities to AI-assisted design features and collaboration enhancements. Each experimental feature includes detailed documentation, usage guidance, and a feedback mechanism so you can report issues, suggest improvements, and share how the feature fits into your workflow. Your input directly helps shape the future of cloud-native product development.`,
    keyFeatures: [
      { icon: 'Wand2', title: 'FeatureScript', desc: "Onshape's powerful programming language for creating custom features, automating design tasks, and extending CAD capabilities." },
      { icon: 'Cog', title: 'Custom Features', desc: 'Build and share custom parametric features that behave exactly like native Onshape features in your design workflow.' },
      { icon: 'FlaskConical', title: 'Experimental Features', desc: 'Early access to cutting-edge features still in development, so you can test new capabilities before general availability.' },
      { icon: 'Sparkles', title: 'Preview Capabilities', desc: 'Try upcoming features in preview mode to understand what is coming and provide feedback on direction and usability.' },
      { icon: 'MessageSquare', title: 'Feedback Program', desc: 'Direct channel to share feedback, report bugs, and suggest improvements with the Onshape product and engineering teams.' },
      { icon: 'Lightbulb', title: 'Community Innovation', desc: 'Join a community of innovators pushing the boundaries of what is possible with cloud-native CAD technology.' },
    ],
    exploreResources: [
      { icon: 'FlaskConical', title: 'Labs Getting Started', type: 'Guide', duration: '10 min read', desc: 'How to access Onshape Labs, enable experimental features, and provide effective feedback.' },
      { icon: 'Wand2', title: 'FeatureScript Fundamentals', type: 'Course', duration: '3 hours', desc: "Learn Onshape's programming language for building custom features and automating design." },
      { icon: 'Play', title: 'What is New in Labs', type: 'Webinar', duration: '45 min', desc: 'Monthly overview of the latest experimental features available in Onshape Labs.' },
      { icon: 'Lightbulb', title: 'Innovation Community', type: 'Community', duration: 'Self-paced', desc: 'Join the Onshape Labs community of innovators shaping the future of CAD.' },
    ],
  },
  {
    id: 'model-based-definition',
    slug: 'model-based-definition',
    heroTitle: 'Model Based Definition (MBD)',
    heroSubtitle:
      'Add manufacturing information directly to your 3D models with MBD tools.',
    heroBgColor: '#1a1f1f',
    overviewTitle: 'What is Model Based Definition?',
    overviewDescription: `Model-Based Definition (MBD) is the practice of documenting product and manufacturing information directly on 3D models rather than relying on 2D drawings. By embedding dimensions, tolerances, annotations, and other manufacturing requirements into the 3D model itself, MBD creates a single, authoritative digital definition of the product.

Onshape provides comprehensive MBD capabilities including geometric dimensioning and tolerancing (GD&T), surface finish annotations, notes, and other product manufacturing information (PMI). With MBD in Onshape, your 3D model becomes the complete digital product definition, reducing reliance on 2D drawings, minimizing interpretation errors, and enabling downstream applications like CAM and CMM inspection to use the same authoritative data.`,
    keyFeatures: [
      { icon: 'Target', title: 'GD&T Annotations', desc: 'Add geometric dimensioning and tolerancing symbols per ASME Y14.5 and ISO standards directly to 3D geometry.' },
      { icon: 'Ruler', title: 'Dimensions & Tolerances', desc: 'Apply dimensions with tolerance values directly on the 3D model, including linear, angular, radial, and pattern dimensions.' },
      { icon: 'Waves', title: 'Surface Finish', desc: 'Define surface roughness and finish requirements with standard symbol annotations on part and assembly surfaces.' },
      { icon: 'FileText', title: 'Notes & Annotations', desc: 'Add manufacturing notes, inspection requirements, and other annotations attached directly to relevant geometry.' },
      { icon: 'Database', title: 'PMI Data', desc: 'Product and Manufacturing Information (PMI) is stored semantically, enabling downstream software to read and use the data.' },
      { icon: 'Download', title: 'STEP AP242 Export', desc: 'Export MBD data in STEP AP242 format for exchange with CAM, CMM, and other downstream manufacturing systems.' },
    ],
    exploreResources: [
      { icon: 'Target', title: 'MBD Fundamentals', type: 'Video Tutorial', duration: '14 min', desc: 'Introduction to model-based definition concepts and adding GD&T to your 3D models.' },
      { icon: 'BookOpen', title: 'MBD Implementation Guide', type: 'Whitepaper', duration: '22 pages', desc: 'How to transition from drawing-based to model-based definition in your organization.' },
      { icon: 'Play', title: 'MBD for Manufacturing', type: 'Webinar', duration: '55 min', desc: 'How model-based definition streamlines communication between engineering and manufacturing.' },
      { icon: 'Ruler', title: 'GD&T in Onshape', type: 'Course', duration: '2.5 hours', desc: 'Comprehensive course on applying geometric dimensioning and tolerancing correctly using Onshape MBD tools.' },
    ],
  },
  {
    id: 'custom-features',
    slug: 'custom-features',
    heroTitle: 'Custom Features',
    heroSubtitle:
      'Create your own custom features using FeatureScript programming language.',
    heroBgColor: '#161d28',
    overviewTitle: 'What are Custom Features?',
    overviewDescription: `Custom Features allow you to extend Onshape by building your own parametric features using the FeatureScript programming language. Whether you need to automate a repetitive design task, standardize a company-specific feature, or implement specialized manufacturing geometry, Custom Features give you the power to shape the CAD environment to match your exact workflow.

Custom Features behave exactly like native Onshape features — they appear in the feature list, have edit dialogs with your custom parameters, update automatically when referenced geometry changes, and work with configurations and versioning. You can keep custom features private to your team, share them within your organization, or publish them to the broader Onshape community through the Feature Library.`,
    keyFeatures: [
      { icon: 'Code2', title: 'FeatureScript Language', desc: "Onshape's purpose-built programming language for defining custom parametric features with full access to the geometric kernel." },
      { icon: 'Library', title: 'Custom Feature Library', desc: 'Organize and manage custom features in reusable libraries that can be shared across teams and documents.' },
      { icon: 'Sliders', title: 'Feature Parameterization', desc: 'Define custom parameters, inputs, and options that users can configure when adding your custom feature to a design.' },
      { icon: 'GitBranch', title: 'Version Management', desc: 'Version-controlled custom features ensure backward compatibility and let you update features without breaking existing designs.' },
      { icon: 'Users', title: 'Community Sharing', desc: 'Browse and install community-built custom features, or share your own with the Onshape user community.' },
      { icon: 'Bug', title: 'Debugging Tools', desc: 'Integrated development environment with a debugger, console output, and testing tools for building robust custom features.' },
    ],
    exploreResources: [
      { icon: 'Code2', title: 'FeatureScript Quick Start', type: 'Video Tutorial', duration: '12 min', desc: 'Write your first custom feature using FeatureScript and the Onshape integrated development environment.' },
      { icon: 'BookOpen', title: 'Custom Features Guide', type: 'Technical Guide', duration: '8 chapters', desc: 'Best practices for designing, implementing, and deploying custom features in your organization.' },
      { icon: 'Play', title: 'Advanced FeatureScript', type: 'Webinar', duration: '60 min', desc: 'Advanced techniques for building complex custom features, patterns, and automated design tools.' },
      { icon: 'Wand2', title: 'FeatureScript Masterclass', type: 'Course', duration: '5 hours', desc: 'Deep dive into FeatureScript programming, from language fundamentals to production-grade custom feature development.' },
    ],
  },
  {
    id: 'onshape-vision',
    slug: 'onshape-vision',
    heroTitle: 'Onshape Vision',
    heroSubtitle:
      'View and interact with your 3D models in augmented reality on Apple Vision Pro.',
    heroBgColor: '#1c1a2a',
    overviewTitle: 'What is Onshape Vision?',
    overviewDescription: `Onshape Vision brings your 3D CAD models into spatial computing on Apple Vision Pro, allowing you to view, inspect, and interact with your designs at full scale in augmented reality. Step inside your assemblies, walk around your products, and experience your designs at true-to-life size — all from the same cloud-native data you work with every day.

With Onshape Vision, design reviews become immersive experiences. Place 3D models in real environments to see how they fit, collaborate with teammates in shared AR spaces, and present designs to stakeholders with unprecedented clarity. By blending digital models with the physical world, Onshape Vision helps teams understand design intent, identify issues earlier, and make better decisions faster.`,
    keyFeatures: [
      { icon: 'Eye', title: 'AR Model Viewing', desc: 'View your Onshape 3D models in augmented reality at true scale, placed in your physical environment on Apple Vision Pro.' },
      { icon: 'Hand', title: 'Spatial Interaction', desc: 'Interact with models using natural spatial gestures — pinch, zoom, rotate, and walk around designs in 3D space.' },
      { icon: 'HandMetal', title: 'Gesture Controls', desc: 'Navigate assemblies, explode views, show/hide components, and access measurement tools with intuitive hand gestures.' },
      { icon: 'Users', title: 'Multi-Person Collaboration', desc: "Share AR design review sessions with multiple participants, seeing each other's presence and annotations in real time." },
      { icon: 'Maximize2', title: 'True-Scale Display', desc: 'Experience your designs at full, real-world size to understand proportions, ergonomics, and spatial relationships.' },
      { icon: 'Presentation', title: 'Immersive Design Reviews', desc: 'Conduct design reviews in augmented reality with spatial annotations, measurement tools, and shared viewpoints.' },
    ],
    exploreResources: [
      { icon: 'Eye', title: 'Onshape Vision Overview', type: 'Video', duration: '6 min', desc: 'See Onshape Vision in action and explore the possibilities of AR for product design and review.' },
      { icon: 'BookOpen', title: 'Getting Started Guide', type: 'Setup Guide', duration: '4 chapters', desc: 'Step-by-step guide to setting up and using Onshape Vision with Apple Vision Pro.' },
      { icon: 'Play', title: 'Design Reviews Reimagined', type: 'Webinar', duration: '40 min', desc: 'How augmented reality is transforming design reviews, stakeholder communication, and collaborative engineering.' },
      { icon: 'Users', title: 'Spatial Collaboration Workshop', type: 'Course', duration: '1.5 hours', desc: 'Best practices for running effective multi-person AR design review sessions with distributed teams.' },
    ],
  },
  {
    id: 'onshape-government',
    slug: 'onshape-government',
    heroTitle: 'Onshape Government',
    heroSubtitle:
      'Secure cloud-native CAD and PDM for government agencies and contractors.',
    heroBgColor: '#0c1825',
    overviewTitle: 'What is Onshape for Government?',
    overviewDescription: `Onshape Government delivers the power of cloud-native CAD and product data management to federal, state, and local government agencies and their contractors — with the security, compliance, and control required for public sector environments. Built on the same modern SaaS platform, Onshape Government adds specialized security controls, compliance certifications, and support capabilities tailored to government needs.

With FedRAMP authorization, secure cloud infrastructure hosted in the United States, and dedicated government support, Onshape Government enables agencies and contractors to modernize their design and engineering workflows while meeting the strictest security and compliance requirements. From defense and aerospace to public works and research, government teams can collaborate in real time without compromising on security.`,
    keyFeatures: [
      { icon: 'ShieldCheck', title: 'FedRAMP Authorization', desc: 'Achieved FedRAMP Moderate authorization, providing the security assurance required for federal government use.' },
      { icon: 'Lock', title: 'Secure Cloud Environment', desc: 'U.S.-hosted cloud infrastructure with enhanced security controls, data residency, and operational protections.' },
      { icon: 'KeyRound', title: 'Access Control', desc: 'Granular role-based access controls, multi-factor authentication, and identity management integrations.' },
      { icon: 'ClipboardList', title: 'Audit & Traceability', desc: 'Comprehensive audit logging, complete change history, and full traceability of all design activities and access.' },
      { icon: 'FileCheck', title: 'Compliance Support', desc: 'Support for NIST, DFARS, ITAR, and other government regulatory requirements with documentation and evidence.' },
      { icon: 'Headphones', title: 'Government Dedicated Support', desc: 'Dedicated support team with security-cleared personnel and government-specific service level agreements.' },
    ],
    exploreResources: [
      { icon: 'ShieldCheck', title: 'Government Security Brief', type: 'Whitepaper', duration: '18 pages', desc: 'Overview of Onshape Government security architecture, certifications, and compliance capabilities.' },
      { icon: 'BookOpen', title: 'FedRAMP FAQ', type: 'Guide', duration: '5 chapters', desc: 'Answers to the most common questions about FedRAMP authorization and government cloud security.' },
      { icon: 'Play', title: 'Modernizing Government Engineering', type: 'Webinar', duration: '50 min', desc: 'How government agencies and contractors are modernizing design workflows with secure cloud CAD.' },
      { icon: 'Building', title: 'Government Deployment Workshop', type: 'Course', duration: '2 hours', desc: 'Planning and implementing Onshape Government for agencies and contractors with complex compliance requirements.' },
    ],
  },
  {
    id: 'arena-plm-connection',
    slug: 'arena-plm-connection',
    heroTitle: 'Arena PLM Connection',
    heroSubtitle:
      'Seamlessly connect your CAD data with Arena PLM for complete product lifecycle management.',
    heroBgColor: '#1a1510',
    overviewTitle: 'What is the Arena PLM Connection?',
    overviewDescription: `The Arena PLM Connection integrates Onshape's cloud-native CAD platform with Arena product lifecycle management (PLM) solution, creating a seamless digital thread from design through manufacturing and supply chain. With bidirectional synchronization between engineering and product lifecycle data, teams always work with current, accurate information across the entire product development process.

Engineers work natively in Onshape while product managers, manufacturing engineers, quality teams, and supply chain partners work in Arena — and the connection ensures that BOMs, revisions, and design changes flow automatically between systems. Eliminate manual data entry, reduce errors from duplicate data maintenance, and accelerate time-to-market with a connected CAD-to-PLM-to-manufacturing workflow.`,
    keyFeatures: [
      { icon: 'RefreshCw', title: 'Bidirectional Sync', desc: 'Automatic bidirectional data synchronization keeps CAD and PLM data aligned without manual exports and imports.' },
      { icon: 'ListChecks', title: 'BOM Management', desc: 'Synchronize bills of materials, including custom properties, between Onshape and Arena automatically on release.' },
      { icon: 'GitBranch', title: 'Change Management', desc: 'Streamline engineering change processes with connected ECO/ECN workflows spanning CAD and PLM systems.' },
      { icon: 'FileText', title: 'Document Management', desc: 'Link design documents, specifications, and supporting files between Onshape and Arena for unified access.' },
      { icon: 'Truck', title: 'Supplier Management', desc: 'Connect supplier information and component sourcing data from Arena with CAD component libraries in Onshape.' },
      { icon: 'ClipboardCheck', title: 'Compliance Tracking', desc: 'Track regulatory compliance, environmental requirements, and quality standards across design and product lifecycle data.' },
    ],
    exploreResources: [
      { icon: 'Link', title: 'Arena Integration Overview', type: 'Video', duration: '8 min', desc: 'See how Onshape and Arena work together to create a seamless CAD-to-PLM digital thread.' },
      { icon: 'BookOpen', title: 'Implementation Guide', type: 'Setup Guide', duration: '6 chapters', desc: 'Step-by-step guide to configuring and deploying the Arena PLM Connection for your team.' },
      { icon: 'Play', title: 'Connected CAD & PLM Webinar', type: 'Webinar', duration: '55 min', desc: 'How integrated CAD and PLM accelerates product development and eliminates data silos.' },
      { icon: 'Database', title: 'PLM Integration Masterclass', type: 'Course', duration: '2.5 hours', desc: 'Deep dive into configuring BOM sync, change processes, and data mapping between Onshape and Arena.' },
    ],
  },
  {
    id: 'windchill-plm-connection',
    slug: 'windchill-plm-connection',
    heroTitle: 'Windchill PLM Connection (BETA)',
    heroSubtitle:
      'Connect Onshape with PTC Windchill PLM for enterprise product lifecycle management.',
    heroBgColor: '#151a2a',
    isBeta: true,
    overviewTitle: 'What is the Windchill PLM Connection?',
    overviewDescription: `The Windchill PLM Connection brings together Onshape's cloud-native CAD platform with PTC Windchill, the enterprise PLM solution used by leading manufacturing companies worldwide. Currently available in Beta, this integration enables bidirectional data flow between engineering design and enterprise product lifecycle management, creating a single source of truth across your product development organization.

With the Windchill PLM Connection, engineers work natively in Onshape while product lifecycle data, BOMs, and change processes are managed in Windchill. The connection automates the transfer of design data and metadata, eliminates manual data entry, and ensures that everyone across engineering, manufacturing, quality, and supply chain works from the same up-to-date product definition.`,
    keyFeatures: [
      { icon: 'RefreshCw', title: 'Bidirectional Data Sync', desc: 'Automatic bidirectional synchronization keeps CAD design data and Windchill PLM data aligned without manual exports and imports.' },
      { icon: 'ListChecks', title: 'BOM Management', desc: 'Synchronize bills of materials, including CAD structures, custom properties, and metadata between Onshape and Windchill.' },
      { icon: 'GitBranch', title: 'Change Process Integration', desc: 'Connect Onshape release and change management with Windchill change notices and engineering change workflows.' },
      { icon: 'FileText', title: 'Document Management', desc: 'Link design files, specifications, and supporting documentation between Onshape and Windchill document management.' },
      { icon: 'Building2', title: 'Enterprise-Grade Integration', desc: 'Built for large organizations with complex PLM environments, including support for Windchill PDMLink and project-link.' },
      { icon: 'FlaskConical', title: 'Beta Program', desc: 'Join the Beta program to get early access, provide direct feedback, and shape the future of the Windchill integration.' },
    ],
    exploreResources: [
      { icon: 'Link', title: 'Windchill Integration Overview', type: 'Video', duration: '10 min', desc: 'See how Onshape and PTC Windchill work together for enterprise CAD-PLM integration.' },
      { icon: 'BookOpen', title: 'Beta Getting Started Guide', type: 'Guide', duration: '5 chapters', desc: 'Step-by-step guide for Beta participants to set up and configure the Windchill PLM Connection.' },
      { icon: 'Play', title: 'Enterprise CAD-PLM Webinar', type: 'Webinar', duration: '60 min', desc: 'How integrated cloud CAD and enterprise PLM accelerates product development at scale.' },
      { icon: 'FlaskConical', title: 'Join the Beta Program', type: 'Program', duration: 'Limited seats', desc: 'Apply to join the Windchill PLM Connection Beta and get early access plus direct support.' },
    ],
  },
]

export function getFeaturePageData(slug: string): IFeaturePageData | undefined {
  return FEATURE_PAGES_DATA.find((p) => p.slug === slug)
}
