// EXPORTS:
//   ICourse,
//   MOCK_COURSES,
//   COURSE_LEVELS,
//   ICourseLevel,
//   ICertification,
//   MOCK_CERTIFICATIONS,
//   ILearningPath,
//   MOCK_LEARNING_PATHS

export interface ICourseLevel {
  id: string
  label: string
}

export const COURSE_LEVELS: ICourseLevel[] = [
  { id: 'all', label: 'All Levels' },
  { id: 'beginner', label: 'Beginner' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Advanced' },
]

export interface ICourse {
  id: string
  title: string
  level: string
  duration: string
  lessons: number
  instructor: string
  description: string
  imageUrl: string
  category: string
  rating: number
}

export const MOCK_COURSES: ICourse[] = [
  {
    id: '1',
    title: 'Onshape Fundamentals',
    level: 'beginner',
    duration: '2 hours',
    lessons: 12,
    instructor: 'Sarah Miller',
    description: 'A complete introduction to Onshape for new users. Learn the interface, part design basics, and how to navigate documents.',
    imageUrl: '',
    category: 'Part Design',
    rating: 4.9,
  },
  {
    id: '2',
    title: 'Assembly Design Essentials',
    level: 'beginner',
    duration: '2.5 hours',
    lessons: 15,
    instructor: 'Ryan Walker',
    description: 'Learn core assembly concepts including mates, patterns, in-context design, and assembly configurations.',
    imageUrl: '',
    category: 'Assemblies',
    rating: 4.8,
  },
  {
    id: '3',
    title: 'Drawing Creation in Onshape',
    level: 'intermediate',
    duration: '3 hours',
    lessons: 18,
    instructor: 'Jennifer Liu',
    description: 'Create detailed, production-ready 2D drawings from 3D models. Covers views, dimensions, GD&T, and annotations.',
    imageUrl: '',
    category: 'Drawings',
    rating: 4.7,
  },
  {
    id: '4',
    title: 'Advanced Part Modeling',
    level: 'intermediate',
    duration: '4 hours',
    lessons: 20,
    instructor: 'Alex Chen',
    description: 'Dive deeper into part modeling with advanced features, patterns, multi-body design, and configurations.',
    imageUrl: '',
    category: 'Part Design',
    rating: 4.9,
  },
  {
    id: '5',
    title: 'Surfacing Techniques',
    level: 'advanced',
    duration: '5 hours',
    lessons: 22,
    instructor: 'Dr. Alex Chen',
    description: 'Master surface modeling for industrial design, consumer products, and complex freeform geometry.',
    imageUrl: '',
    category: 'Surfacing',
    rating: 4.8,
  },
  {
    id: '6',
    title: 'Sheet Metal Design',
    level: 'intermediate',
    duration: '3.5 hours',
    lessons: 16,
    instructor: 'Michael Torres',
    description: 'Design sheet metal parts with confidence. Covers features, flat patterns, bend calculations, and sheet metal rules.',
    imageUrl: '',
    category: 'Sheet Metal',
    rating: 4.7,
  },
  {
    id: '7',
    title: 'FeatureScript Programming',
    level: 'advanced',
    duration: '6 hours',
    lessons: 24,
    instructor: 'Dr. Alex Chen',
    description: 'Learn to write custom features using the FeatureScript programming language. From basics to advanced automation.',
    imageUrl: '',
    category: 'FeatureScript',
    rating: 4.9,
  },
  {
    id: '8',
    title: 'Frame & Weldment Design',
    level: 'intermediate',
    duration: '3 hours',
    lessons: 14,
    instructor: 'David Park',
    description: 'Create structural frames and weldments quickly using specialized frame design tools and standard profiles.',
    imageUrl: '',
    category: 'Frame Design',
    rating: 4.6,
  },
  {
    id: '9',
    title: 'Data Administration for Enterprise',
    level: 'advanced',
    duration: '4.5 hours',
    lessons: 19,
    instructor: 'Jennifer Liu',
    description: 'Manage users, permissions, workspaces, and data organization for enterprise Onshape deployments.',
    imageUrl: '',
    category: 'Administration',
    rating: 4.8,
  },
]

export interface ICertification {
  id: string
  title: string
  level: string
  duration: string
  description: string
  prerequisites: string[]
}

export const MOCK_CERTIFICATIONS: ICertification[] = [
  {
    id: 'cert-1',
    title: 'Onshape Certified Associate (OCA)',
    level: 'Beginner',
    duration: '2 hours exam',
    description: 'Entry-level certification validating fundamental Onshape skills including part modeling, assemblies, and drawings.',
    prerequisites: ['Completion of Onshape Fundamentals course', '3+ months of Onshape experience', 'Basic understanding of mechanical design'],
  },
  {
    id: 'cert-2',
    title: 'Onshape Certified Professional (OCP)',
    level: 'Intermediate',
    duration: '3 hours exam',
    description: 'Professional-level certification demonstrating advanced part modeling, assembly design, and drawing proficiency.',
    prerequisites: ['Onshape Certified Associate certification', '12+ months of Onshape experience', 'Completion of Advanced Part Modeling course'],
  },
  {
    id: 'cert-3',
    title: 'Onshape Certified Enterprise Admin (OCEA)',
    level: 'Advanced',
    duration: '2.5 hours exam',
    description: 'Administrator certification for enterprise deployments including user management, security, and data governance.',
    prerequisites: ['2+ years of Onshape administration experience', 'Experience with enterprise deployments', 'Completion of Data Administration course'],
  },
]

export interface ILearningPath {
  id: string
  title: string
  description: string
  duration: string
  courses: number
  level: string
}

export const MOCK_LEARNING_PATHS: ILearningPath[] = [
  {
    id: 'lp-1',
    title: 'Complete Beginner Path',
    description: 'Go from zero to productive with Onshape in this structured learning path for new users.',
    duration: '10 hours',
    courses: 5,
    level: 'Beginner',
  },
  {
    id: 'lp-2',
    title: 'Mechanical Designer Path',
    description: 'Master the core skills every mechanical designer needs — parts, assemblies, drawings, and configurations.',
    duration: '20 hours',
    courses: 8,
    level: 'Intermediate',
  },
  {
    id: 'lp-3',
    title: 'Enterprise Admin Path',
    description: 'Everything you need to manage Onshape for your organization — users, permissions, workspaces, and governance.',
    duration: '12 hours',
    courses: 4,
    level: 'Advanced',
  },
]
