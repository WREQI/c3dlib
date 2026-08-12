// EXPORTS:
//   IAppIntegration,
//   APP_CATEGORIES,
//   APP_INTEGRATIONS,
//   FEATURED_APPS

export interface IAppIntegration {
  id: string
  name: string
  category: string
  description: string
  type: string
  featured?: boolean
}

export const APP_CATEGORIES = [
  { id: 'all', label: 'All Apps' },
  { id: 'cam', label: 'CAM' },
  { id: 'cae', label: 'CAE / Simulation' },
  { id: 'data-management', label: 'Data Management' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'project-management', label: 'Project Management' },
  { id: 'rendering', label: 'Rendering' },
  { id: 'plm', label: 'PLM / ERP' },
]

export const APP_INTEGRATIONS: IAppIntegration[] = [
  {
    id: '1',
    name: 'Mastercam',
    category: 'cam',
    description:
      'Industry-leading CAM software for 2-axis through 5-axis milling, turning, and multi-tasking machines.',
    type: 'CAM',
    featured: true,
  },
  {
    id: '2',
    name: 'ANSYS Discovery',
    category: 'cae',
    description:
      'Real-time simulation for structural, thermal, and fluid analysis directly from your Onshape designs.',
    type: 'CAE',
    featured: true,
  },
  {
    id: '3',
    name: 'Arena PLM',
    category: 'plm',
    description:
      'Seamless CAD-PLM integration connecting Onshape design data with Arena product lifecycle management.',
    type: 'PLM',
    featured: true,
  },
  {
    id: '4',
    name: 'KeyShot',
    category: 'rendering',
    description:
      'Photorealistic 3D rendering and animation with one-click import of Onshape assemblies and parts.',
    type: 'Rendering',
    featured: true,
  },
  {
    id: '5',
    name: 'SIMULIA',
    category: 'cae',
    description:
      'Advanced finite element analysis for structural, thermal, and nonlinear simulation studies.',
    type: 'CAE',
  },
  {
    id: '6',
    name: 'HSMWorks',
    category: 'cam',
    description:
      'Integrated CAM solution for 2.5-axis, 3-axis, and 5-axis milling with proven toolpath strategies.',
    type: 'CAM',
  },
  {
    id: '7',
    name: 'COMSOL',
    category: 'cae',
    description:
      'Multiphysics simulation for coupled electrical, mechanical, fluid, and chemical phenomena.',
    type: 'CAE',
  },
  {
    id: '8',
    name: 'Propel PLM',
    category: 'plm',
    description:
      'Modern, cloud-native PLM with bidirectional sync of BOMs, revisions, and change processes.',
    type: 'PLM',
  },
  {
    id: '9',
    name: 'Paperless Parts',
    category: 'manufacturing',
    description:
      'Automated quoting and manufacturability analysis for CNC machining and sheet metal parts.',
    type: 'Manufacturing',
  },
  {
    id: '10',
    name: 'OpenBOM',
    category: 'data-management',
    description:
      'Cloud-based bill of materials management with real-time synchronization to Onshape designs.',
    type: 'Data Management',
  },
  {
    id: '11',
    name: 'Jira Integration',
    category: 'project-management',
    description:
      'Connect Onshape design data with Jira issues for end-to-end product development traceability.',
    type: 'Project Management',
  },
  {
    id: '12',
    name: 'OctoRender',
    category: 'rendering',
    description:
      'Cloud-based photorealistic rendering service with GPU acceleration and batch rendering support.',
    type: 'Rendering',
  },
]

export const FEATURED_APPS = APP_INTEGRATIONS.filter((a) => a.featured)
