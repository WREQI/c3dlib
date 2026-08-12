// EXPORTS:
//   ICaseStudy,
//   MOCK_CASE_STUDIES,
//   CASE_INDUSTRIES

export interface ICaseStudyIndustry {
  id: string
  label: string
}

export const CASE_INDUSTRIES: ICaseStudyIndustry[] = [
  { id: 'all', label: 'All Industries' },
  { id: 'aerospace', label: 'Aerospace & Defense' },
  { id: 'automotive', label: 'Automotive' },
  { id: 'consumer', label: 'Consumer Products' },
  { id: 'education', label: 'Education' },
  { id: 'electronics', label: 'Electronics' },
  { id: 'energy', label: 'Energy' },
  { id: 'medical', label: 'Medical Devices' },
  { id: 'machinery', label: 'Industrial Machinery' },
]

export interface ICaseStudy {
  id: string
  company: string
  industry: string
  tag: string
  description: string
  quote: string
  authorName: string
  authorRole: string
  imageUrl: string
  featured?: boolean
  stats: Array<{ value: string; label: string }>
}

export const MOCK_CASE_STUDIES: ICaseStudy[] = [
  {
    id: '1',
    company: 'SkyFork Aerospace',
    industry: 'aerospace',
    tag: 'Aerospace & Defense',
    description:
      'SkyFork Aerospace reduced their UAV development cycle by 40% by migrating from desktop CAD to Onshape\'s cloud-native platform with built-in data management.',
    quote:
      'Onshape gave our distributed engineering team the ability to collaborate in real-time — something we could never achieve with file-based CAD.',
    authorName: 'Robert Martinez',
    authorRole: 'Director of Engineering, SkyFork Aerospace',
    imageUrl: '',
    featured: true,
    stats: [
      { value: '40%', label: 'Faster Development' },
      { value: '80%', label: 'Time Saved on PDM' },
      { value: '3x', label: 'More Iterations' },
    ],
  },
  {
    id: '2',
    company: 'Volt Motors',
    industry: 'automotive',
    tag: 'Automotive',
    description:
      'Volt Motors accelerated their EV platform development by 35% and streamlined cross-team collaboration using Onshape.',
    quote:
      'Real-time co-editing and branching let our chassis and powertrain teams work together without file conflicts.',
    authorName: 'Dr. Nina Patel',
    authorRole: 'Chief Engineer, Volt Motors',
    imageUrl: '',
    stats: [
      { value: '35%', label: 'Faster Development' },
      { value: '0', label: 'PDM Administrators' },
      { value: '24/7', label: 'Anywhere Access' },
    ],
  },
  {
    id: '3',
    company: 'NovaHome Goods',
    industry: 'consumer',
    tag: 'Consumer Products',
    description:
      'NovaHome Goods reduced new product development cycle from 12 weeks to 7 weeks after adopting Onshape.',
    quote:
      'Our industrial designers and mechanical engineers can now iterate together in real-time.',
    authorName: 'Amanda Foster',
    authorRole: 'VP of Product Design, NovaHome',
    imageUrl: '',
    stats: [
      { value: '42%', label: 'Faster Time-to-Market' },
      { value: '2x', label: 'Products per Year' },
      { value: '$0', label: 'IT Overhead' },
    ],
  },
  {
    id: '4',
    company: 'Precision MedTech',
    industry: 'medical',
    tag: 'Medical Devices',
    description:
      'Precision MedTech streamlined their FDA-regulated design process with Onshape\'s audit trails and release management.',
    quote:
      'The complete audit trail and formal release workflows made our FDA submission process remarkably smooth.',
    authorName: 'Dr. James Wilson',
    authorRole: 'VP of R&D, Precision MedTech',
    imageUrl: '',
    stats: [
      { value: '60%', label: 'Faster Audits' },
      { value: '100%', label: 'Audit Pass Rate' },
      { value: '50%', label: 'Documentation Time' },
    ],
  },
  {
    id: '5',
    company: 'GreenEnergy Systems',
    industry: 'energy',
    tag: 'Energy',
    description:
      'GreenEnergy Systems accelerated their renewable energy equipment development with collaborative design tools.',
    quote:
      'Onshape lets our international teams collaborate across time zones as if they were in the same room.',
    authorName: 'Thomas Berg',
    authorRole: 'Engineering Director, GreenEnergy',
    imageUrl: '',
    stats: [
      { value: '30%', label: 'Faster Design Cycles' },
      { value: '5', label: 'Countries Collaborating' },
      { value: '100%', label: 'Version Control' },
    ],
  },
  {
    id: '6',
    company: 'NovaDrone Technologies',
    industry: 'aerospace',
    tag: 'Aerospace & Defense',
    description:
      'NovaDrone accelerated their drone development program by leveraging Onshape\'s built-in PDM and release management.',
    quote:
      'The audit trail and version history features were critical for our quality management and certification process.',
    authorName: 'Lisa Chen',
    authorRole: 'Head of Quality, NovaDrone',
    imageUrl: '',
    stats: [
      { value: '45%', label: 'Quality Improvements' },
      { value: '3x', label: 'Certification Speed' },
      { value: '0', label: 'File Corruptions' },
    ],
  },
  {
    id: '7',
    company: 'FitPulse Sports',
    industry: 'consumer',
    tag: 'Consumer Products',
    description:
      'FitPulse Sports tripled their new product launch rate after switching to Onshape\'s collaborative design platform.',
    quote:
      'Configurations and design reuse let us quickly adapt existing designs for new product variations.',
    authorName: 'Marcus Reed',
    authorRole: 'Product Design Lead, FitPulse',
    imageUrl: '',
    stats: [
      { value: '3x', label: 'New Products/Year' },
      { value: '60%', label: 'Design Reuse Rate' },
      { value: '25%', label: 'Cost Reduction' },
    ],
  },
  {
    id: '8',
    company: 'AutoDrive Systems',
    industry: 'automotive',
    tag: 'Automotive',
    description:
      'AutoDrive streamlined their sensor integration design process, reducing hardware iterations from 6 to 3.',
    quote:
      'Branching and merging let us explore multiple sensor configurations in parallel without risking the main design.',
    authorName: 'Sofia Rodriguez',
    authorRole: 'Senior Mechanical Engineer, AutoDrive',
    imageUrl: '',
    stats: [
      { value: '50%', label: 'Fewer Iterations' },
      { value: '40%', label: 'Time Saved' },
      { value: '7', label: 'Active Branches' },
    ],
  },
  {
    id: '9',
    company: 'Industrial Dynamics',
    industry: 'machinery',
    tag: 'Industrial Machinery',
    description:
      'Industrial Dynamics modernized their custom machinery design process and improved customer response times.',
    quote:
      'We now respond to customer RFPs in days instead of weeks, which has been a huge competitive advantage.',
    authorName: 'Kenji Tanaka',
    authorRole: 'Engineering Manager, Industrial Dynamics',
    imageUrl: '',
    stats: [
      { value: '65%', label: 'Faster RFP Response' },
      { value: '40%', label: 'More Projects' },
      { value: '20%', label: 'Margin Increase' },
    ],
  },
]
