// EXPORTS:
//   IMigrationStep,
//   ISupportedFormat,
//   IMigrationFAQ,
//   MIGRATION_STEPS,
//   SUPPORTED_FORMATS,
//   MIGRATION_FAQS

export interface IMigrationStep {
  id: number
  title: string
  description: string
  icon: string
}

export interface ISupportedFormat {
  name: string
  type: '3d' | '2d' | 'other'
  extension: string
}

export interface IMigrationFAQ {
  q: string
  a: string
}

export const MIGRATION_STEPS: IMigrationStep[] = [
  {
    id: 1,
    title: 'Assess Your Data',
    description:
      'Start by auditing your existing CAD data, identifying critical files, version history needs, and dependencies between parts, assemblies, and drawings.',
    icon: 'ClipboardList',
  },
  {
    id: 2,
    title: 'Plan the Migration',
    description:
      'Develop a migration plan including phasing, data validation criteria, training schedules, and rollout strategy for your team.',
    icon: 'ListOrdered',
  },
  {
    id: 3,
    title: 'Import Your Files',
    description:
      'Use Onshape import tools to batch-import your CAD files. Onshape supports all major formats and preserves feature tree data when possible.',
    icon: 'Upload',
  },
  {
    id: 4,
    title: 'Validate & Test',
    description:
      'Verify imported geometry, test critical assemblies and drawings, and validate that design intent has been preserved during migration.',
    icon: 'CheckSquare',
  },
  {
    id: 5,
    title: 'Train Your Team',
    description:
      'Equip your team with the knowledge and skills they need through structured training, mentorship, and hands-on practice projects.',
    icon: 'GraduationCap',
  },
  {
    id: 6,
    title: 'Go Live & Optimize',
    description:
      'Transition fully to Onshape, decommission legacy systems, and continuously optimize your workflows as your team grows more proficient.',
    icon: 'Rocket',
  },
]

export const SUPPORTED_FORMATS: ISupportedFormat[] = [
  { name: 'SOLIDWORKS', type: '3d', extension: '.sldprt / .sldasm / .slddrw' },
  { name: 'Autodesk Inventor', type: '3d', extension: '.ipt / .iam / .idw' },
  { name: 'PTC Creo / Pro/E', type: '3d', extension: '.prt / .asm / .drw' },
  { name: 'CATIA V5', type: '3d', extension: '.CATPart / .CATProduct / .CATDrawing' },
  { name: 'Siemens NX', type: '3d', extension: '.prt' },
  { name: 'STEP', type: '3d', extension: '.step / .stp' },
  { name: 'IGES', type: '3d', extension: '.igs / .iges' },
  { name: 'Parasolid', type: '3d', extension: '.x_t / .x_b' },
  { name: 'ACIS (SAT)', type: '3d', extension: '.sat / .sab' },
  { name: 'STL', type: '3d', extension: '.stl' },
  { name: 'OBJ', type: '3d', extension: '.obj' },
  { name: 'DWG / DXF', type: '2d', extension: '.dwg / .dxf' },
]

export const MIGRATION_FAQS: IMigrationFAQ[] = [
  {
    q: 'Can I import my existing CAD files into Onshape?',
    a: 'Yes, Onshape supports importing all major CAD formats including SOLIDWORKS, Inventor, Creo, CATIA, NX, STEP, IGES, Parasolid, and more. Imported geometry can be edited directly when the feature tree is preserved, or you can use the imported geometry as reference for new designs.',
  },
  {
    q: 'Will my feature history be preserved?',
    a: 'Onshape preserves feature tree information from SOLIDWORKS files whenever possible, allowing you to edit imported parts parametrically. For other formats, you can import solid geometry and use Onshape tools like Direct Editing and Feature Recognition to work with the data.',
  },
  {
    q: 'How long does a migration typically take?',
    a: 'Migration timelines vary depending on data volume, complexity, and team size. Many teams can get up and running on active projects within a few weeks. Full migration of historical data can be phased over months, with teams moving active projects first and archiving legacy data as needed.',
  },
  {
    q: 'Do we need to migrate all our legacy data at once?',
    a: 'No, most teams take a phased approach. Start by migrating active projects and designs you are currently working on. Legacy data can be migrated on-demand, or you can keep archived files in their original format for reference only. Onshape professional services can help develop the right strategy for your organization.',
  },
  {
    q: 'What training is available for our team?',
    a: 'Onshape offers comprehensive training including self-paced courses, live instructor-led classes, certification programs, and dedicated enterprise training. Our customer success team works with you to develop a training plan tailored to your team needs and timeline.',
  },
]
