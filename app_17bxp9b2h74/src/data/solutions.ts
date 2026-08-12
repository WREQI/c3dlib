// EXPORTS:
//   ISolutionPageData,
//   SOLUTION_PAGES_DATA,
//   getSolutionPageData

export interface ISolutionChallenge {
  icon: string
  title: string
  desc: string
}

export interface ISolutionFeature {
  icon: string
  title: string
  desc: string
}

export interface ISolutionCustomer {
  logo: string
  company: string
  industry: string
  desc: string
  quote: string
}

export interface ISolutionPageData {
  id: string
  slug: string
  path: string
  heroTitle: string
  heroSubtitle: string
  heroBgColor: string
  heroAccentColor: string
  challengesTitle: string
  challenges: ISolutionChallenge[]
  howOnshapeTitle: string
  howOnshapeFeatures: ISolutionFeature[]
  customersTitle: string
  customers: ISolutionCustomer[]
  ctaTitle: string
  ctaSubtitle: string
  ctaButtonText: string
}

export const SOLUTION_PAGES_DATA: ISolutionPageData[] = [
  {
    id: 'aerospace',
    slug: 'aerospace',
    path: '/solutions/aerospace',
    heroTitle: 'Aerospace & Defense',
    heroSubtitle:
      'Accelerate innovation in aerospace and defense with cloud-native product development.',
    heroBgColor: '#0a1628',
    heroAccentColor: '#00a651',
    challengesTitle: 'Challenges in Aerospace & Defense',
    challenges: [
      { icon: 'ShieldCheck', title: 'Strict Compliance Requirements', desc: 'Navigate complex regulatory environments including ITAR, EAR, and AS9100 with robust data management and audit trails.' },
      { icon: 'Network', title: 'Complex Supply Chains', desc: 'Coordinate design across multiple tiers of suppliers and partners while maintaining control over sensitive intellectual property.' },
      { icon: 'Zap', title: 'Rapid Iteration Pressure', desc: 'Reduce development cycles and get new products to market faster with streamlined engineering workflows.' },
    ],
    howOnshapeTitle: 'How Onshape Helps',
    howOnshapeFeatures: [
      { icon: 'Lock', title: 'Data Security & Compliance', desc: 'Enterprise-grade security with role-based access, complete audit trails, and ITAR-compliant cloud infrastructure.' },
      { icon: 'Users', title: 'Collaborative Design', desc: 'Real-time multi-user editing enables distributed engineering teams to work together seamlessly from anywhere.' },
      { icon: 'GitBranch', title: 'Version Control', desc: 'Built-in version management with branching and merging ensures complete traceability of every design change.' },
      { icon: 'Share2', title: 'Supply Chain Collaboration', desc: 'Securely share designs with suppliers and partners with controlled access and full visibility into who accessed what.' },
    ],
    customersTitle: 'Aerospace Companies Trust Onshape',
    customers: [
      { logo: 'SkyFork', company: 'SkyFork Aerospace', industry: 'UAV Systems', desc: 'SkyFork reduced design cycle time by 40% by migrating from desktop CAD to Onshape\'s cloud-native platform.', quote: 'Onshape gave our distributed engineering team the ability to collaborate in real-time — something we could never achieve with file-based CAD.' },
      { logo: 'NovaDrone', company: 'NovaDrone Technologies', industry: 'Drone Manufacturing', desc: 'NovaDrone accelerated their drone development program by leveraging Onshape\'s built-in PDM and release management.', quote: 'The audit trail and version history features were critical for our quality management and certification process.' },
      { logo: 'AeroComposites', company: 'AeroComposites Inc.', industry: 'Composite Structures', desc: 'AeroComposites streamlined their composite structure design workflow and improved collaboration across engineering and manufacturing teams.', quote: 'Real-time collaboration meant our composite engineers and structural analysts could work together without file version headaches.' },
    ],
    ctaTitle: 'Start your free trial today',
    ctaSubtitle: 'Experience the power of cloud-native CAD & PDM for aerospace and defense product development.',
    ctaButtonText: 'TRY IT FREE',
  },
  {
    id: 'automotive',
    slug: 'automotive',
    path: '/solutions/automotive',
    heroTitle: 'Automotive',
    heroSubtitle:
      'Speed up automotive product development with real-time collaboration and built-in data management.',
    heroBgColor: '#1c1917',
    heroAccentColor: '#00a651',
    challengesTitle: 'Challenges in Automotive Development',
    challenges: [
      { icon: 'Zap', title: 'Rapid Iteration Demands', desc: 'Shorter model cycles and increasing customization pressure require faster design iteration and more engineering changes.' },
      { icon: 'Users', title: 'Multi-Team Collaboration', desc: 'Coordinate across mechanical, electrical, manufacturing, and quality teams working on the same vehicle programs.' },
      { icon: 'Factory', title: 'Supply Chain Integration', desc: 'Align design with tier-1 and tier-2 suppliers to reduce tooling costs and speed time-to-production.' },
    ],
    howOnshapeTitle: 'How Onshape Helps',
    howOnshapeFeatures: [
      { icon: 'GitBranch', title: 'Concurrent Engineering', desc: 'Multiple engineers can work on different aspects of a design simultaneously with branching and real-time co-editing.' },
      { icon: 'ClipboardCheck', title: 'Design Change Management', desc: 'Formal release workflows and engineering change notices keep all stakeholders aligned on design updates.' },
      { icon: 'Share2', title: 'Supplier Collaboration', desc: 'Securely share CAD data with suppliers, get feedback, and track revisions without sending files back and forth.' },
      { icon: 'BarChart3', title: 'Cost Control', desc: 'Eliminate PDM administration costs, reduce IT overhead, and pay only for active users with SaaS subscription pricing.' },
    ],
    customersTitle: 'Automotive Companies Trust Onshape',
    customers: [
      { logo: 'Volt Motors', company: 'Volt Motors', industry: 'Electric Vehicles', desc: 'Volt Motors accelerated their EV platform development by 35% using Onshape for collaborative mechanical design.', quote: 'The ability to have all our chassis and powertrain engineers working on the same document simultaneously was a game-changer.' },
      { logo: 'AutoDrive', company: 'AutoDrive Systems', industry: 'ADAS & Autonomy', desc: 'AutoDrive streamlined their sensor integration design process, reducing hardware iterations from 6 to 3.', quote: 'Branching and merging let us explore multiple sensor configurations in parallel without risking the main design.' },
      { logo: 'GearForge', company: 'GearForge Performance', industry: 'Aftermarket Parts', desc: 'GearForge cut their new product development time in half and doubled the number of SKUs they launch per year.', quote: 'Built-in data management means we spend more time designing and less time managing files and PDM checkouts.' },
    ],
    ctaTitle: 'Transform your automotive development',
    ctaSubtitle: 'See how leading automotive teams use Onshape to accelerate innovation and improve collaboration.',
    ctaButtonText: 'START FREE TRIAL',
  },
  {
    id: 'consumer-products',
    slug: 'consumer-products',
    path: '/solutions/consumer-products',
    heroTitle: 'Consumer Products',
    heroSubtitle:
      'Bring innovative consumer products to market faster with cloud-native CAD.',
    heroBgColor: '#0d2818',
    heroAccentColor: '#00a651',
    challengesTitle: 'Challenges in Consumer Products',
    challenges: [
      { icon: 'Clock', title: 'Short Product Lifecycles', desc: 'Rapidly changing consumer trends mean product teams must design, test, and launch in ever-shrinking timeframes.' },
      { icon: 'RefreshCw', title: 'Frequent Design Iterations', desc: 'Multiple rounds of industrial design, engineering refinement, and user testing can create version chaos.' },
      { icon: 'Layers', title: 'Multi-Category Management', desc: 'Managing diverse product lines across categories with shared components and design systems is complex.' },
    ],
    howOnshapeTitle: 'How Onshape Helps',
    howOnshapeFeatures: [
      { icon: 'Zap', title: 'Rapid Prototyping', desc: 'Go from concept to production-ready design faster with intuitive tools and real-time design review capabilities.' },
      { icon: 'GitCompare', title: 'Multi-Concept Comparison', desc: 'Explore multiple design directions simultaneously with branches, then compare and select the best option.' },
      { icon: 'Copy', title: 'Design Reuse', desc: 'Leverage standard parts, configurable components, and design libraries to speed up new product development.' },
      { icon: 'Users', title: 'Cross-Functional Collaboration', desc: 'Industrial designers, mechanical engineers, marketing, and manufacturing all work from the same data source.' },
    ],
    customersTitle: 'Consumer Product Companies Trust Onshape',
    customers: [
      { logo: 'NovaHome', company: 'NovaHome Goods', industry: 'Home & Kitchen', desc: 'NovaHome reduced their new product development cycle from 12 weeks to 7 weeks using Onshape.', quote: 'Our industrial designers and mechanical engineers can now iterate together in real-time instead of passing files back and forth.' },
      { logo: 'FitPulse', company: 'FitPulse Sports', industry: 'Fitness Equipment', desc: 'FitPulse launched 3x more new products per year after switching to Onshape\'s collaborative design platform.', quote: 'Configurations and design reuse let us quickly adapt existing designs for new product variations.' },
      { logo: 'PixelPlay', company: 'PixelPlay Toys', industry: 'Toys & Games', desc: 'PixelPlay improved collaboration between their design studio and manufacturing partners in Asia.', quote: 'Secure sharing means our factory partners always have the latest version — no more wrong revision tooling.' },
    ],
    ctaTitle: 'Bring products to market faster',
    ctaSubtitle: 'Join consumer product teams that use Onshape to innovate faster and launch sooner.',
    ctaButtonText: 'TRY ONSHAPE FREE',
  },
  {
    id: 'education',
    slug: 'education',
    path: '/solutions/education',
    heroTitle: 'Education',
    heroSubtitle:
      'Empower the next generation of engineers with cloud-native CAD software.',
    heroBgColor: '#0c1a33',
    heroAccentColor: '#00a651',
    challengesTitle: 'Challenges in Engineering Education',
    challenges: [
      { icon: 'HardDrive', title: 'Software Installation Burden', desc: 'Traditional desktop CAD requires complex installation, licensing, and lab management — creating barriers for students and IT departments alike.' },
      { icon: 'Users', title: 'Limited Student Collaboration', desc: 'File-based CAD makes group projects difficult, with students emailing files back and forth and struggling to merge their work.' },
      { icon: 'Globe', title: 'Remote Learning Demands', desc: 'Hybrid and online learning require tools that work anywhere, on any device, without compromising the educational experience.' },
    ],
    howOnshapeTitle: 'How Onshape Helps Educators',
    howOnshapeFeatures: [
      { icon: 'GraduationCap', title: 'Free Education Edition', desc: 'Full-featured Onshape Professional free for students, educators, and educational institutions — no license codes required.' },
      { icon: 'Cloud', title: 'Cloud-Native Access', desc: 'Works in any modern browser on any computer — Mac, PC, or Chromebook. Nothing to install, nothing to maintain.' },
      { icon: 'Users', title: 'Real-Time Collaborative Learning', desc: 'Students work together in the same document just like Google Docs, making group projects seamless and teaching more effective.' },
      { icon: 'BookOpen', title: 'Rich Curriculum Resources', desc: 'Access free lesson plans, curriculum guides, tutorials, and the Onshape Learning Center to support your teaching.' },
    ],
    customersTitle: 'Educators & Institutions Trust Onshape',
    customers: [
      { logo: 'StateTechU', company: 'State Technical University', industry: 'Mechanical Engineering', desc: 'State Tech University integrated Onshape into their freshman engineering curriculum, reaching 800+ students per semester.', quote: 'No more lab installs, no more license servers. Every student has access from day one — it has transformed how we teach CAD.' },
      { logo: 'DesignAcademy', company: 'Design Academy Online', industry: 'Online Education', desc: 'Design Academy Online built their entire remote learning program around Onshape, tripling enrollment in two years.', quote: 'The collaborative features let our students work together on group projects even when they are on different continents.' },
      { logo: 'CommunityCollege', company: 'Northgate Community College', industry: 'Community College', desc: 'Northgate CC brought CAD education to non-traditional students who could not access expensive software or lab computers.', quote: 'Students can work on assignments from their home computers — even Chromebooks. Accessibility has been a game-changer for our program.' },
    ],
    ctaTitle: 'Start teaching with Onshape today',
    ctaSubtitle: 'Free for educators and students. Full professional features, nothing to install.',
    ctaButtonText: 'GET EDUCATION ACCESS',
  },
  {
    id: 'electronics',
    slug: 'electronics',
    path: '/solutions/electronics',
    heroTitle: 'Electronics',
    heroSubtitle:
      'Streamline ECAD-MCAD collaboration for electronic product development.',
    heroBgColor: '#1a1530',
    heroAccentColor: '#00a651',
    challengesTitle: 'Challenges in Electronics Design',
    challenges: [
      { icon: 'PlugZap', title: 'ECAD / MCAD Silos', desc: 'Electrical and mechanical engineers often work in disconnected tools with manual data transfer, causing delays and errors.' },
      { icon: 'RefreshCw', title: 'Rapid Design Iteration', desc: 'Electronics projects require tight iteration cycles with frequent board spins and enclosure design changes.' },
      { icon: 'Box', title: 'Enclosure & PCB Fit', desc: 'Ensuring PCB components fit within mechanical enclosures is error-prone and often discovered too late in the process.' },
    ],
    howOnshapeTitle: 'How Onshape Helps Electronics Teams',
    howOnshapeFeatures: [
      { icon: 'CircuitBoard', title: 'ECAD / MCAD Collaboration', desc: 'Bring electrical and mechanical teams together in a single collaborative environment with shared data and live co-editing.' },
      { icon: 'Cpu', title: 'PCB Integration', desc: 'Import and work with PCB board outlines and component data to ensure accurate enclosure and mounting design.' },
      { icon: 'Users', title: 'Cross-Functional Teams', desc: 'Mechanical, electrical, industrial design, and manufacturing all work from the same source of truth.' },
      { icon: 'GitBranch', title: 'Design Change Management', desc: 'Branching and version control let teams explore design alternatives safely and manage changes systematically.' },
    ],
    customersTitle: 'Electronics Companies Trust Onshape',
    customers: [
      { logo: 'CircuitFlow', company: 'CircuitFlow Technologies', industry: 'Consumer Electronics', desc: 'CircuitFlow cut their enclosure re-spins by 60% by tightly integrating mechanical and electrical design workflows.', quote: 'Having ECAD and MCAD data in one collaborative environment eliminated so many back-and-forth emails and file transfers.' },
      { logo: 'VoltTech', company: 'VoltTech Devices', industry: 'Power Electronics', desc: 'VoltTech accelerated their power converter development by 40% using Onshape for integrated mechanical and thermal design.', quote: 'Real-time collaboration between our mechanical and electrical teams meant issues got resolved in minutes instead of days.' },
      { logo: 'NexusIoT', company: 'Nexus IoT Labs', industry: 'IoT Devices', desc: 'Nexus IoT launched their first product line in record time by using Onshape for their complete enclosure and PCB design process.', quote: 'The ability to iterate quickly on both the enclosure and the board layout simultaneously was critical to our launch timeline.' },
    ],
    ctaTitle: 'Unite your electronics design team',
    ctaSubtitle: 'Bring mechanical and electrical engineering together with cloud-native collaborative design.',
    ctaButtonText: 'START FREE TRIAL',
  },
  {
    id: 'energy',
    slug: 'energy',
    path: '/solutions/energy',
    heroTitle: 'Energy',
    heroSubtitle:
      'Accelerate innovation in energy and utilities with cloud-native design tools.',
    heroBgColor: '#1a2f1a',
    heroAccentColor: '#00a651',
    challengesTitle: 'Challenges in the Energy Industry',
    challenges: [
      { icon: 'Layers', title: 'Large-Scale Project Management', desc: 'Energy and utility projects involve massive assemblies and complex project structures that strain traditional CAD and PDM systems.' },
      { icon: 'Users', title: 'Multi-Team Coordination', desc: 'Engineering, construction, procurement, and operations teams must all align — often across multiple locations and partners.' },
      { icon: 'ShieldCheck', title: 'Stringent Compliance', desc: 'Regulatory requirements demand complete traceability, rigorous documentation, and controlled change processes.' },
    ],
    howOnshapeTitle: 'How Onshape Helps Energy Teams',
    howOnshapeFeatures: [
      { icon: 'Layers', title: 'Large Assembly Performance', desc: 'Work with assemblies containing thousands of parts smoothly, with intelligent load-on-demand and cloud-native architecture.' },
      { icon: 'Database', title: 'Project Data Management', desc: 'Built-in PDM eliminates file chaos with automatic versioning, complete history, and organized workspaces.' },
      { icon: 'Share2', title: 'Supply Chain Collaboration', desc: 'Securely share design data with contractors, vendors, and engineering partners with granular access control.' },
      { icon: 'Lock', title: 'Security & Compliance', desc: 'Enterprise-grade security, complete audit trails, and release management support compliance with industry regulations.' },
    ],
    customersTitle: 'Energy Companies Trust Onshape',
    customers: [
      { logo: 'GreenEnergySys', company: 'GreenEnergy Systems', industry: 'Renewable Energy', desc: 'GreenEnergy accelerated their renewable energy equipment development and improved collaboration across international teams.', quote: 'Onshape lets our international teams collaborate across time zones as if they were in the same room.' },
      { logo: 'PowerGrid', company: 'PowerGrid Innovations', industry: 'Power Distribution', desc: 'PowerGrid streamlined their substation equipment design process and reduced engineering documentation errors dramatically.', quote: 'The built-in data management and audit trail features have been invaluable for our regulatory compliance efforts.' },
      { logo: 'HydroFlow', company: 'HydroFlow Engineering', industry: 'Hydroelectric', desc: 'HydroFlow improved cross-discipline collaboration between structural, mechanical, and electrical teams on hydroelectric projects.', quote: 'Everyone working in the same data environment has eliminated version control issues and dramatically reduced rework.' },
    ],
    ctaTitle: 'Power your energy projects forward',
    ctaSubtitle: 'See how leading energy companies use Onshape to accelerate innovation and manage complex projects.',
    ctaButtonText: 'TRY ONSHAPE FREE',
  },
  {
    id: 'government',
    slug: 'government',
    path: '/solutions/government',
    heroTitle: 'Government',
    heroSubtitle:
      'Secure, cloud-native product development for government agencies.',
    heroBgColor: '#1c1c2e',
    heroAccentColor: '#00a651',
    challengesTitle: 'Challenges in Government',
    challenges: [
      { icon: 'ShieldAlert', title: 'High Security Requirements', desc: 'Government agencies have some of the strictest security requirements, demanding robust access controls and data protection.' },
      { icon: 'Building2', title: 'Cross-Department Collaboration', desc: 'Projects span multiple agencies, departments, and contractors — making coordination and data sharing complex.' },
      { icon: 'Lock', title: 'Data Security & Sovereignty', desc: 'Sensitive government data requires the highest levels of protection, access control, and data residency options.' },
    ],
    howOnshapeTitle: 'How Onshape Serves Government',
    howOnshapeFeatures: [
      { icon: 'ShieldCheck', title: 'Government-Grade Security', desc: 'Enterprise-grade security with encryption at rest and in transit, advanced threat protection, and regular security assessments.' },
      { icon: 'KeyRound', title: 'Granular Access Controls', desc: 'Fine-grained permissions with role-based access control for documents, workspaces, and entire organizations.' },
      { icon: 'Activity', title: 'Complete Audit Trails', desc: 'Every action is logged with who did what, when — providing complete traceability for compliance and investigations.' },
      { icon: 'Award', title: 'Compliance Certifications', desc: 'Comprehensive compliance program including SOC 2, ISO 27001, and support for government security requirements.' },
    ],
    customersTitle: 'Government Agencies Trust Onshape',
    customers: [
      { logo: 'GovResearch', company: 'Federal Research Lab', industry: 'Research & Development', desc: 'A federal research lab modernized their engineering design workflow with Onshape while maintaining strict security requirements.', quote: 'We needed the collaborative benefits of cloud CAD without compromising security — Onshape delivered on both.' },
      { logo: 'PublicWorks', company: 'State Public Works Agency', industry: 'Public Infrastructure', desc: 'A state public works agency improved inter-department collaboration on infrastructure projects while maintaining data control.', quote: 'Secure sharing with controlled access has transformed how we work with our partner agencies and contractors.' },
      { logo: 'DefenseTech', company: 'Defense Technology Office', industry: 'Defense Technology', desc: 'A defense technology office accelerated their prototyping programs using Onshape\'s collaborative design environment.', quote: 'The ability to have distributed teams collaborate in real-time while maintaining complete audit trails is exactly what we needed.' },
    ],
    ctaTitle: 'Secure government-grade design tools',
    ctaSubtitle: 'Cloud-native CAD & PDM with the security and compliance government agencies require.',
    ctaButtonText: 'REQUEST A DEMO',
  },
  {
    id: 'machine-design',
    slug: 'machine-design',
    path: '/solutions/machine-design',
    heroTitle: 'Machine Design',
    heroSubtitle:
      'Design complex machinery faster with built-in data management and collaboration.',
    heroBgColor: '#1f1f1f',
    heroAccentColor: '#00a651',
    challengesTitle: 'Challenges in Machine Design',
    challenges: [
      { icon: 'Cog', title: 'Large Assembly Performance', desc: 'Complex machinery with thousands of parts can bring traditional CAD systems to their knees, wasting engineering time.' },
      { icon: 'RefreshCw', title: 'Design Change Chaos', desc: 'Managing design changes across large assemblies with multiple engineers is error-prone and difficult to track.' },
      { icon: 'Factory', title: 'Supply Chain Alignment', desc: 'Getting suppliers and manufacturing partners the right version of designs at the right time is a constant challenge.' },
    ],
    howOnshapeTitle: 'How Onshape Helps Machine Designers',
    howOnshapeFeatures: [
      { icon: 'Cog', title: 'High-Performance Assemblies', desc: 'Work fluidly with assemblies of thousands of parts, thanks to cloud-native architecture and intelligent loading.' },
      { icon: 'GitBranch', title: 'Version Control Built-In', desc: 'Every change is automatically tracked and versioned. Always know who changed what, and revert anytime.' },
      { icon: 'List', title: 'Integrated BOMs', desc: 'Generate accurate, up-to-date bills of materials directly from your assembly design — always in sync.' },
      { icon: 'Share2', title: 'Supplier Collaboration', desc: 'Share designs securely with suppliers and contract manufacturers. Always the right version, no email attachments.' },
    ],
    customersTitle: 'Machine Builders Trust Onshape',
    customers: [
      { logo: 'IndDynamics', company: 'Industrial Dynamics', industry: 'Industrial Machinery', desc: 'Industrial Dynamics modernized their custom machinery design process and improved customer response times dramatically.', quote: 'We now respond to customer RFPs in days instead of weeks — a huge competitive advantage for our business.' },
      { logo: 'PrecisionAutomation', company: 'Precision Automation Co.', industry: 'Automation Equipment', desc: 'Precision Automation reduced their machine design cycle by 35% and improved collaboration between mechanical and electrical teams.', quote: 'Real-time co-editing and built-in version control eliminated so many of the headaches that used to slow us down.' },
      { logo: 'PackagingMach', company: 'Packaging Machinery Group', industry: 'Packaging Machinery', desc: 'Packaging Machinery Group increased the number of custom machines they deliver per year by 40% with Onshape.', quote: 'The ability to reuse designs across projects and collaborate in real-time has been transformative for our throughput.' },
    ],
    ctaTitle: 'Build better machines faster',
    ctaSubtitle: 'See how machine builders use Onshape to design faster, collaborate better, and manage complex projects.',
    ctaButtonText: 'START YOUR FREE TRIAL',
  },
  {
    id: 'medical-devices',
    slug: 'medical-devices',
    path: '/solutions/medical-devices',
    heroTitle: 'Medical Devices',
    heroSubtitle:
      'Accelerate medical device development with secure, compliant cloud-native CAD.',
    heroBgColor: '#0f1f2f',
    heroAccentColor: '#00a651',
    challengesTitle: 'Challenges in Medical Device Development',
    challenges: [
      { icon: 'HeartPulse', title: 'Strict Regulatory Compliance', desc: 'FDA, ISO 13485, and other regulations demand rigorous design controls, documentation, and process discipline.' },
      { icon: 'ClipboardCheck', title: 'Design Controls Required', desc: 'Medical device development requires formal design controls including design history files (DHF) and device master records (DMR).' },
      { icon: 'FileSearch', title: 'Full Traceability', desc: 'Every design decision, change, and approval must be documented and traceable throughout the product lifecycle.' },
    ],
    howOnshapeTitle: 'How Onshape Helps Medical Device Teams',
    howOnshapeFeatures: [
      { icon: 'ClipboardCheck', title: 'Design Controls', desc: 'Formal release management and approval workflows support design control requirements for regulatory submissions.' },
      { icon: 'Activity', title: 'Comprehensive Audit Trails', desc: 'Complete history of every design change, including who made it, when, and why — supporting DHF requirements.' },
      { icon: 'ShieldCheck', title: 'Compliance-Ready', desc: 'Built-in processes and controls that help teams meet FDA, ISO, and other regulatory requirements more efficiently.' },
      { icon: 'Lock', title: 'Data Security', desc: 'Enterprise-grade security, access controls, and data protection appropriate for sensitive medical device IP.' },
    ],
    customersTitle: 'Medical Device Companies Trust Onshape',
    customers: [
      { logo: 'PrecisionMed', company: 'Precision MedTech', industry: 'Medical Devices', desc: 'Precision MedTech streamlined their FDA-regulated design process with Onshape\'s audit trails and release management.', quote: 'The complete audit trail and formal release workflows made our FDA submission process remarkably smooth.' },
      { logo: 'SurgicalInnov', company: 'Surgical Innovations', industry: 'Surgical Instruments', desc: 'Surgical Innovations accelerated their surgical instrument development while maintaining rigorous design controls and documentation.', quote: 'We can move faster without sacrificing compliance — that is the holy grail for medical device development.' },
      { logo: 'Diagnostix', company: 'Diagnostix Labs', industry: 'Diagnostic Equipment', desc: 'Diagnostix improved cross-functional collaboration between R&D, quality, and manufacturing for diagnostic device development.', quote: 'Having all disciplines working in the same data environment has dramatically reduced miscommunication and rework.' },
    ],
    ctaTitle: 'Accelerate medical device development',
    ctaSubtitle: 'Secure, compliant cloud-native CAD that helps you bring safe, effective devices to market faster.',
    ctaButtonText: 'REQUEST A DEMO',
  },
  {
    id: 'robotics',
    slug: 'robotics',
    path: '/solutions/robotics',
    heroTitle: 'Robotics',
    heroSubtitle:
      'Build the future of robotics with collaborative, cloud-native design tools.',
    heroBgColor: '#151830',
    heroAccentColor: '#00a651',
    challengesTitle: 'Challenges in Robotics Development',
    challenges: [
      { icon: 'Bot', title: 'Multi-Disciplinary Teams', desc: 'Robotics combines mechanical, electrical, software, and controls engineering — all needing to work together seamlessly.' },
      { icon: 'Zap', title: 'Rapid Iteration Needs', desc: 'Robotics development is experimental by nature, requiring fast design-build-test cycles with many iterations.' },
      { icon: 'Puzzle', title: 'Complex System Integration', desc: 'Integrating mechanical structures, actuators, sensors, electronics, and software into working systems is enormously complex.' },
    ],
    howOnshapeTitle: 'How Onshape Helps Robotics Teams',
    howOnshapeFeatures: [
      { icon: 'Users', title: 'Cross-Discipline Collaboration', desc: 'Mechanical, electrical, and software engineers all work from the same design data with real-time co-editing.' },
      { icon: 'FlaskConical', title: 'Rapid Prototyping', desc: 'Quickly iterate on designs with intuitive modeling tools and instant versioning. Test more ideas, faster.' },
      { icon: 'GitBranch', title: 'Version & Branch Management', desc: 'Try design experiments in branches without risk. Compare alternatives and merge when ready.' },
      { icon: 'Cog', title: 'System-Level Design', desc: 'Design complex robotic systems with large assemblies, configurable components, and structured design organization.' },
    ],
    customersTitle: 'Robotics Companies Trust Onshape',
    customers: [
      { logo: 'RoboTechLabs', company: 'RoboTech Labs', industry: 'Industrial Robotics', desc: 'RoboTech Labs cut their robot development cycle time in half by using Onshape across their multi-disciplinary engineering team.', quote: 'Having mechanical, electrical, and controls all working from the same design data has been transformative for our team.' },
      { logo: 'AutoBot', company: 'AutoBot Systems', industry: 'Autonomous Vehicles', desc: 'AutoBot accelerated their autonomous delivery robot program by iterating faster on both hardware and enclosure design.', quote: 'Branching and merging let us explore multiple design directions in parallel — perfect for the experimental nature of robotics.' },
      { logo: 'MedRobot', company: 'MedRobotics', industry: 'Medical Robotics', desc: 'MedRobotics used Onshape to develop their surgical robot prototype while maintaining the traceability required for medical devices.', quote: 'The combination of powerful CAD, collaboration, and complete audit trail is perfect for medical robotics development.' },
    ],
    ctaTitle: 'Build the future of robotics faster',
    ctaSubtitle: 'Collaborative, cloud-native CAD for robotics teams who move fast and iterate constantly.',
    ctaButtonText: 'TRY IT FREE',
  },
  {
    id: 'startups',
    slug: 'startups',
    path: '/solutions/startups',
    heroTitle: 'Startups',
    heroSubtitle:
      'Launch your product faster with affordable, scalable cloud-native CAD.',
    heroBgColor: '#1a2410',
    heroAccentColor: '#00a651',
    challengesTitle: 'Challenges for Hardware Startups',
    challenges: [
      { icon: 'Wallet', title: 'Tight Budgets', desc: 'Startups need maximum value from every dollar. Traditional CAD licensing with upfront costs and PDM infrastructure is hard to justify.' },
      { icon: 'Users', title: 'Small, Lean Teams', desc: 'Small teams wear many hats and need tools that just work — no IT overhead, no administration, no learning curve.' },
      { icon: 'Rocket', title: 'Speed is Everything', desc: 'Startups must iterate fast, pivot quickly, and get to market before funding runs out. Slow tools mean missed opportunities.' },
    ],
    howOnshapeTitle: 'How Onshape Helps Startups',
    howOnshapeFeatures: [
      { icon: 'Wallet', title: 'Affordable Startup Pricing', desc: 'Low-cost startup plans and the Onshape Startup Program give early-stage companies professional tools at startup-friendly prices.' },
      { icon: 'TrendingUp', title: 'Scale as You Grow', desc: 'Start with one engineer and add seats as your team grows. SaaS pricing means you only pay for what you use.' },
      { icon: 'Zap', title: 'Rapid Iteration', desc: 'Real-time collaboration, branching, and built-in PDM let small teams move fast and iterate like bigger ones.' },
      { icon: 'Users', title: 'Team Collaboration', desc: 'Everyone works from the same design data. No file sharing, no version confusion, no lost work.' },
    ],
    customersTitle: 'Startups Build with Onshape',
    customers: [
      { logo: 'LaunchPad', company: 'LaunchPad Robotics', industry: 'Robotics Startup', desc: 'LaunchPad Robotics went from idea to working prototype in just 8 weeks using Onshape with their small founding team.', quote: 'We started with two engineers and a laptop. Onshape gave us professional-grade tools from day one, no IT setup required.' },
      { logo: 'BrightIdeas', company: 'Bright Ideas Lab', industry: 'Consumer Product Startup', desc: 'Bright Ideas Lab launched their first product on Kickstarter in record time, raising 5x their funding goal.', quote: 'Onshape let our tiny team punch way above our weight. We designed, prototyped, and launched in months, not years.' },
      { logo: 'GreenTechStart', company: 'GreenTech Startup', industry: 'CleanTech Startup', desc: 'GreenTech scaled from 3 to 30 engineers in a year while maintaining design integrity and collaboration quality.', quote: 'Onshape scaled with us seamlessly. We never had to think about infrastructure or PDM — we just designed.' },
    ],
    ctaTitle: 'Build your startup with Onshape',
    ctaSubtitle: 'Professional CAD & PDM at startup-friendly prices. Scale from 1 to 100 engineers seamlessly.',
    ctaButtonText: 'EXPLORE STARTUP PLANS',
  },
]

export function getSolutionPageData(slug: string): ISolutionPageData | undefined {
  return SOLUTION_PAGES_DATA.find((p) => p.slug === slug)
}
