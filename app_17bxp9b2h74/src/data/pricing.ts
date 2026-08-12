// EXPORTS: IPricingPlan, MOCK_PRICING_PLANS, IPricingContent, MOCK_PRICING_CONTENT
export interface IPricingPlan {
  id: string
  name: string
  tagline: string
  price: string
  priceSubtitle?: string
  buttonText: string
  buttonVariant: 'outline' | 'solid'
  isRecommended?: boolean
  features: string[]
  promotionText?: string
  footerNote: string
}

export interface IPricingContent {
  id: string
  heroTitle: string
  heroSubtitle: string
  currencies: string[]
  defaultCurrency: string
  salesContactText: string
  salesContactUrl: string
  compareButtonText: string
}

export const MOCK_PRICING_CONTENT: IPricingContent = {
  id: '1',
  heroTitle: 'Onshape Plans and Pricing',
  heroSubtitle: 'Choose a plan to start developing products in the Cloud today.',
  currencies: ['USD', 'EUR', 'GBP', 'JPY'],
  defaultCurrency: 'USD',
  salesContactText: 'Contact the Sales Team',
  salesContactUrl: '#',
  compareButtonText: 'COMPARE PLANS',
}

export const MOCK_PRICING_PLANS: IPricingPlan[] = [
  {
    id: 'free',
    name: 'Free Plan',
    tagline: 'BEST FOR PERSONAL PROJECTS',
    price: '$0',
    buttonText: 'SIGN UP FREE',
    buttonVariant: 'outline',
    features: [
      'Unlimited public storage',
      'CAD tools',
      'Real-time collaboration',
      'Version control',
      'Mobile apps',
      'Online training',
    ],
    footerNote: 'For non-commercial use only. All Onshape Documents are accessible to the public.',
  },
  {
    id: 'standard',
    name: 'Standard Plan',
    tagline: 'BEST FOR INDIVIDUALS',
    price: '$1,500',
    priceSubtitle: 'per user per year',
    buttonText: 'LEARN MORE',
    buttonVariant: 'outline',
    features: [
      'All the features of Free',
      'Unlimited private storage',
      'Direct, In Product Support',
    ],
    footerNote: 'Professional CAD for commercial use with built-in data management delivered online with 24/7 reliability.',
  },
  {
    id: 'professional',
    name: 'Professional Plan',
    tagline: 'BUILT FOR TEAMS',
    price: '$2,500',
    priceSubtitle: 'per user per year',
    buttonText: 'TRY FOR FREE',
    buttonVariant: 'solid',
    isRecommended: true,
    features: [
      'All the features of Standard',
      'Company-managed data',
      'Release management',
      'Advanced PDM',
      'Simulation',
      'Rendering',
      'ECAD/MCAD exchange',
      'CAM',
    ],
    promotionText: "No credit card required. Qualified pros can try Onshape Professional free for up to 6 months with the Discovery Program.",
    footerNote: 'Advanced CAD and PDM for teams that want to improve productivity and collaboration.',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'SCALABLE, CONFIGURABLE SOLUTIONS',
    price: 'Contact us for custom pricing.',
    buttonText: 'CONTACT SALES',
    buttonVariant: 'outline',
    features: [
      'All the features of Professional',
      'Custom Release Management',
      'Analytics and Dashboards',
      'Arena PLM Connection',
      'Advanced Admin and Security (SSO)',
      'Guest access (full and lighter user licensing)',
      'Priority Support',
    ],
    footerNote: 'Enterprise-grade CAD and PDM for large companies that need better transparency and faster innovation amongst teams.',
  },
]
