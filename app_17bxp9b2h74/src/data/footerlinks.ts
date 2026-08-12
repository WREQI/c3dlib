// EXPORTS: IFooterLinkGroup, MOCK_FOOTER_LINK_GROUPS
export interface IFooterLink {
  id: string
  label: string
  href: string
}

export interface IFooterLinkGroup {
  id: string
  title: string
  links: IFooterLink[]
}

export const MOCK_FOOTER_LINK_GROUPS: IFooterLinkGroup[] = [
  {
    id: '1',
    title: 'Product',
    links: [
      { id: '1-1', label: 'Features', href: '#' },
      { id: '1-2', label: 'Pricing', href: '#' },
      { id: '1-3', label: 'Industries', href: '#' },
      { id: '1-4', label: 'Integrations', href: '#' },
      { id: '1-5', label: 'API', href: '#' },
    ],
  },
  {
    id: '2',
    title: 'Resources',
    links: [
      { id: '2-1', label: 'Learning Center', href: '#' },
      { id: '2-2', label: 'Blog', href: '#' },
      { id: '2-3', label: 'Webinars', href: '#' },
      { id: '2-4', label: 'Help Center', href: '#' },
      { id: '2-5', label: 'Community', href: '#' },
    ],
  },
  {
    id: '3',
    title: 'Company',
    links: [
      { id: '3-1', label: 'About Us', href: '#' },
      { id: '3-2', label: 'Careers', href: '#' },
      { id: '3-3', label: 'News', href: '#' },
      { id: '3-4', label: 'Contact', href: '#' },
      { id: '3-5', label: 'Partners', href: '#' },
    ],
  },
  {
    id: '4',
    title: 'Connect',
    links: [
      { id: '4-1', label: 'LinkedIn', href: '#' },
      { id: '4-2', label: 'Twitter', href: '#' },
      { id: '4-3', label: 'Facebook', href: '#' },
      { id: '4-4', label: 'YouTube', href: '#' },
      { id: '4-5', label: 'Instagram', href: '#' },
    ],
  },
]