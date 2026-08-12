// EXPORTS:
//   ICadNavItem,
//   ICadDocument,
//   ICadMenuItem,
//   IAccountMenuItem,
//   ITrashItem,
//   ISharedItem,
//   IExploreCategory,
//   IExploreModel,
//   CAD_NAV_ITEMS,
//   MOCK_MY_DOCUMENTS,
//   MOCK_RECENT_DOCS,
//   MOCK_CREATED_DOCS,
//   MOCK_SHARED_DOCS,
//   MOCK_TRASH_ITEMS,
//   MOCK_PUBLIC_DOCUMENTS,
//   CREATE_MENU_ITEMS,
//   USER_MENU_ITEMS,
//   ACCOUNT_MENU_ITEMS,
//   EXPLORE_CATEGORIES,
//   EXPLORE_MODELS,
//   EXPLORE_TUTORIALS,
//   EXPLORE_GUIDES

export interface ICadNavItem {
  id: string
  label: string
  icon: string
  path?: string
  expandable?: boolean
}

export interface ICadDocument {
  id: string
  name: string
  thumbnail?: string
  modified: string
  modifiedBy: string
  ownedBy: string
  label?: string
  copies?: number
  links?: number
  likes?: number
  isFolder?: boolean
  created?: string
  timeGroup?: string
}

export interface ICadMenuItem {
  label: string
  icon?: string
  action?: string
  divider?: boolean
}

export interface IAccountMenuItem {
  id: string
  label: string
  icon: string
}

export interface ITrashItem extends ICadDocument {
  deletedAt: string
}

export interface ISharedItem extends ICadDocument {
  sharedBy: string
  permission: 'Read only' | 'Can edit' | 'Admin'
  sharedOn: string
}

export interface IExploreCategory {
  id: string
  name: string
  count: number
}

export interface IExploreModel {
  id: string
  title: string
  author: string
  copies: number
  category: string
}

export const CAD_NAV_ITEMS: ICadNavItem[] = [
  { id: 'explore', label: 'Explore Onshape', icon: 'Lightbulb', path: '/cad/explore' },
  { id: 'owned', label: 'Owned by me', icon: 'User', path: '/cad/documents' },
  { id: 'recent', label: 'Recently opened', icon: 'Clock', path: '/cad/documents/recently-opened' },
  { id: 'created', label: 'Created by me', icon: 'FileText', path: '/cad/documents/created-by-me' },
  { id: 'shared', label: 'Shared with me', icon: 'Users', path: '/cad/documents/shared-with-me' },
  { id: 'labels', label: 'Labels', icon: 'Tags', expandable: true },
  { id: 'public', label: 'Public', icon: 'Globe', path: '/cad/documents/public' },
  { id: 'trash', label: 'Trash', icon: 'Trash2', path: '/cad/documents/trash' },
];

export const CREATE_MENU_ITEMS: ICadMenuItem[] = [
  { label: 'Document...', icon: 'FileText', action: 'document' },
  { label: 'Folder...', icon: 'Folder', action: 'folder' },
  { label: 'Import files...', icon: 'Upload', action: 'import' },
  { label: 'Import from', icon: 'CloudUpload', action: 'import-from' },
  { label: 'Label...', icon: 'Tag', action: 'label' },
];

export const USER_MENU_ITEMS: ICadMenuItem[] = [
  { label: 'My account', icon: 'User', action: 'account' },
  { label: 'View support tickets', icon: 'Headphones', action: 'support' },
  { label: 'App Store dev portal', icon: 'Store', action: 'appstore' },
  { label: 'View in dark mode (beta)', icon: 'Moon', action: 'darkmode' },
  { label: '', divider: true },
  { label: 'Sign out', icon: 'LogOut', action: 'signout' },
];

export const ACCOUNT_MENU_ITEMS: IAccountMenuItem[] = [
  { id: 'profile', label: 'Profile', icon: 'User' },
  { id: 'security', label: 'Security', icon: 'Lock' },
  { id: 'notifications', label: 'Notifications', icon: 'Bell' },
  { id: 'appearance', label: 'Appearance', icon: 'Palette' },
  { id: 'subscription', label: 'Subscription', icon: 'CreditCard' },
  { id: 'billing', label: 'Billing', icon: 'Receipt' },
  { id: 'api-keys', label: 'API Keys', icon: 'Key' },
];

export const MOCK_MY_DOCUMENTS: ICadDocument[] = [
  { id: 'doc-1', name: 'Untitled document', modified: '3:24 PM Today', modifiedBy: 'me', ownedBy: 'me', label: 'Main', created: 'Today 3:20 PM' },
  { id: 'folder-1', name: 'My Projects', modified: 'Yesterday', modifiedBy: 'me', ownedBy: 'me', isFolder: true, created: '2 weeks ago' },
  { id: 'doc-2', name: 'Bracket Assembly', modified: 'Yesterday', modifiedBy: 'me', ownedBy: 'me', label: 'Main', created: '3 days ago' },
];

export const MOCK_RECENT_DOCS: ICadDocument[] = [
  { id: 'recent-1', name: 'Untitled document', modified: '3:24 PM', modifiedBy: 'me', ownedBy: 'me', label: 'Main', timeGroup: 'Today' },
  { id: 'recent-2', name: 'Bracket Assembly', modified: '10:15 AM', modifiedBy: 'me', ownedBy: 'me', label: 'Main', timeGroup: 'Today' },
  { id: 'recent-3', name: 'Gear Housing v2', modified: '4:42 PM', modifiedBy: 'me', ownedBy: 'me', label: 'Main', timeGroup: 'Yesterday' },
  { id: 'recent-4', name: 'Shaft Coupling', modified: '9:00 AM', modifiedBy: 'me', ownedBy: 'me', label: 'Main', timeGroup: 'Yesterday' },
  { id: 'recent-5', name: 'Motor Mount', modified: 'Mon 3:20 PM', modifiedBy: 'me', ownedBy: 'me', label: 'Main', timeGroup: 'Last Week' },
  { id: 'recent-6', name: 'Piston Assembly', modified: 'Tue 11:00 AM', modifiedBy: 'me', ownedBy: 'me', label: 'Main', timeGroup: 'Last Week' },
  { id: 'recent-7', name: 'Bearing Housing', modified: 'Wed 2:30 PM', modifiedBy: 'me', ownedBy: 'me', label: 'Main', timeGroup: 'Last Week' },
];

export const MOCK_CREATED_DOCS: ICadDocument[] = [
  { id: 'c1', name: 'Untitled document', created: 'Today 3:20 PM', modified: '3:24 PM Today', modifiedBy: 'me', ownedBy: 'me', label: 'Main' },
  { id: 'c2', name: 'Bracket Assembly', created: 'Yesterday 2:00 PM', modified: 'Yesterday 4:30 PM', modifiedBy: 'me', ownedBy: 'me', label: 'Main' },
  { id: 'c3', name: 'Gear Housing v2', created: '3 days ago', modified: '2 days ago', modifiedBy: 'me', ownedBy: 'me', label: 'Main' },
  { id: 'c4', name: 'Shaft Coupling', created: '1 week ago', modified: '3 days ago', modifiedBy: 'me', ownedBy: 'me', label: 'Main' },
  { id: 'c5', name: 'Motor Mount', created: '2 weeks ago', modified: 'Last Week', modifiedBy: 'me', ownedBy: 'me', label: 'Main' },
  { id: 'c6', name: 'Piston Assembly', created: '1 month ago', modified: 'Last Week', modifiedBy: 'me', ownedBy: 'me', label: 'Main' },
];

export const MOCK_SHARED_DOCS: ISharedItem[] = [
  { id: 's1', name: 'Team Design Review', sharedBy: 'Sarah Chen', permission: 'Can edit', sharedOn: 'Today', modified: '10:30 AM Today', modifiedBy: 'Sarah Chen', ownedBy: 'Sarah Chen', label: 'Main' },
  { id: 's2', name: 'Project Alpha - Final', sharedBy: 'Mike Johnson', permission: 'Read only', sharedOn: 'Yesterday', modified: 'Yesterday 3:00 PM', modifiedBy: 'Mike Johnson', ownedBy: 'Mike Johnson', label: 'Main' },
  { id: 's3', name: 'Manufacturing Drawing Pack', sharedBy: 'Engineering Team', permission: 'Read only', sharedOn: '2 days ago', modified: '2 days ago', modifiedBy: 'Engineering Team', ownedBy: 'Engineering Team', label: 'Main' },
  { id: 's4', name: 'Client Presentation Model', sharedBy: 'Alex Rivera', permission: 'Can edit', sharedOn: '3 days ago', modified: '3 days ago', modifiedBy: 'Alex Rivera', ownedBy: 'Alex Rivera', label: 'Main' },
  { id: 's5', name: 'Supply Chain Review', sharedBy: 'Procurement Dept', permission: 'Read only', sharedOn: '1 week ago', modified: '1 week ago', modifiedBy: 'Procurement Dept', ownedBy: 'Procurement Dept', label: 'Main' },
  { id: 's6', name: 'Assembly Line Layout', sharedBy: 'Sarah Chen', permission: 'Admin', sharedOn: '2 weeks ago', modified: 'Last Week', modifiedBy: 'Sarah Chen', ownedBy: 'Sarah Chen', label: 'Main' },
];

export const MOCK_TRASH_ITEMS: ITrashItem[] = [
  { id: 't1', name: 'Old Concept Sketch', deletedAt: 'Today 9:00 AM', modified: 'Yesterday', modifiedBy: 'me', ownedBy: 'me', label: 'Main' },
  { id: 't2', name: 'Test Document', deletedAt: 'Yesterday 4:30 PM', modified: 'Yesterday', modifiedBy: 'me', ownedBy: 'me', label: 'Main' },
  { id: 't3', name: 'Duplicate Part', deletedAt: '2 days ago', modified: '3 days ago', modifiedBy: 'me', ownedBy: 'me', label: 'Main' },
  { id: 't4', name: 'Deprecated Assembly v1', deletedAt: 'Last Week', modified: '2 weeks ago', modifiedBy: 'me', ownedBy: 'me', label: 'Main' },
];

export const MOCK_PUBLIC_DOCUMENTS: ICadDocument[] = [
  { id: 'p1', name: 'Mitra UV Station', modified: '3:29 PM Today', modifiedBy: 'Joe', ownedBy: 'Joe', copies: 0, links: 0, likes: 0, label: 'Main' },
  { id: 'p2', name: 'Project APEX - REV A', modified: '3:29 PM Today', modifiedBy: 'Abdullah Al-khathran', ownedBy: 'Abdullah Al-khathran', copies: 0, links: 0, likes: 0, label: 'Main' },
  { id: 'p3', name: 'Barril', modified: '3:29 PM Today', modifiedBy: 'Cenagas', ownedBy: 'Cenagas', copies: 0, links: 0, likes: 0, label: 'Main' },
  { id: 'p4', name: '何婉蕊', modified: '3:29 PM Today', modifiedBy: '陈景辉', ownedBy: '陈景辉', copies: 0, links: 0, likes: 0, label: 'Main' },
  { id: 'p5', name: 'current job', modified: '3:29 PM Today', modifiedBy: 'peter bagshaw', ownedBy: 'peter bagshaw', copies: 0, links: 1, likes: 0, label: 'Main' },
  { id: 'p6', name: 'SC Civic Intake V2', modified: '3:29 PM Today', modifiedBy: 'Zayne Admiraal', ownedBy: 'Zayne Admiraal', copies: 1, links: 1, likes: 0, label: 'Main' },
  { id: 'p7', name: 'Prefab wall test', modified: '3:29 PM Today', modifiedBy: 'The Architype', ownedBy: 'The Architype', copies: 0, links: 0, likes: 0, label: 'Main' },
  { id: 'p8', name: 'Untitled document', modified: '3:29 PM Today', modifiedBy: 'Ahmed Farooq', ownedBy: 'Ahmed Farooq', copies: 0, links: 0, likes: 0, label: 'Main' },
  { id: 'p9', name: '5 Ma X 16 4', modified: '3:29 PM Today', modifiedBy: 'JAL', ownedBy: 'JAL', copies: 7, links: 0, likes: 0, label: 'Main' },
  { id: 'p10', name: 'Untitled document', modified: '3:29 PM Today', modifiedBy: 'John Michael Palces', ownedBy: 'John Michael Palces', copies: 0, links: 0, likes: 0, label: 'Main' },
  { id: 'p11', name: 'Untitled document', modified: '3:29 PM Today', modifiedBy: 'Roland Nolfer Gulleban', ownedBy: 'Roland Nolfer Gulleban', copies: 0, links: 0, likes: 0, label: 'Main' },
  { id: 'p12', name: 'Flipshop Screw Driver Set', modified: '3:29 PM Today', modifiedBy: 'Philip (Flip) Kromer', ownedBy: 'Philip (Flip) Kromer', copies: 0, links: 17, likes: 0, label: 'Main' },
  { id: 'p13', name: 'System', modified: '3:29 PM Today', modifiedBy: 'Christian Hagemann', ownedBy: 'Christian Hagemann', copies: 0, links: 0, likes: 0, label: 'Main' },
  { id: 'p14', name: 'Resin Tray', modified: '3:29 PM Today', modifiedBy: 'Nathan Peckenpaugh', ownedBy: 'Nathan Peckenpaugh', copies: 0, links: 0, likes: 0, label: 'Main' },
  { id: 'p15', name: 'beugel tandwielen', modified: '3:29 PM Today', modifiedBy: 'AchajusMagnus', ownedBy: 'AchajusMagnus', copies: 0, links: 0, likes: 0, label: 'Main' },
  { id: 'p16', name: 'Untitled document', modified: '3:29 PM Today', modifiedBy: 'kip', ownedBy: 'kip', copies: 0, links: 0, likes: 0, label: 'Main' },
  { id: 'p17', name: 'Untitled document 3', modified: '3:29 PM Today', modifiedBy: 'Aref Armanian', ownedBy: 'Aref Armanian', copies: 0, links: 0, likes: 0, label: 'Main' },
  { id: 'p18', name: '李八佑', modified: '3:29 PM Today', modifiedBy: '陈景辉', ownedBy: '陈景辉', copies: 0, links: 0, likes: 0, label: 'Main' },
  { id: 'p19', name: 'grasdse', modified: '3:29 PM Today', modifiedBy: 'lucas stoltzfus', ownedBy: 'lucas stoltzfus', copies: 0, links: 0, likes: 0, label: 'Main' },
  { id: 'p20', name: 'Clamp Assembly', modified: '3:29 PM Today', modifiedBy: 'demo user', ownedBy: 'demo user', copies: 3, links: 2, likes: 1, label: 'Main' },
];

export const EXPLORE_CATEGORIES: IExploreCategory[] = [
  { id: 'all', name: 'All Models', count: 1250 },
  { id: 'mechanical', name: 'Mechanical', count: 482 },
  { id: 'aerospace', name: 'Aerospace', count: 156 },
  { id: 'automotive', name: 'Automotive', count: 201 },
  { id: 'electronics', name: 'Electronics', count: 134 },
  { id: 'consumer', name: 'Consumer Products', count: 178 },
  { id: 'education', name: 'Education', count: 99 },
];

export const EXPLORE_MODELS: IExploreModel[] = [
  { id: 'em1', title: 'Shell & Tube Heat Exchanger', author: 'Onshape Labs', copies: 1245, category: 'mechanical' },
  { id: 'em2', title: 'Rocker Arm Assembly', author: 'Engineering Dept', copies: 892, category: 'automotive' },
  { id: 'em3', title: 'Centrifugal Pump', author: 'Fluid Dynamics Co', copies: 654, category: 'mechanical' },
  { id: 'em4', title: 'Drone Frame v3', author: 'AeroLab', copies: 421, category: 'aerospace' },
  { id: 'em5', title: 'Raspberry Pi Case', author: 'Maker Community', copies: 2103, category: 'electronics' },
  { id: 'em6', title: 'Bicycle Crankset', author: 'CycleTech', copies: 378, category: 'consumer' },
  { id: 'em7', title: 'Gear Reducer Box', author: 'Machine Design 101', copies: 1567, category: 'education' },
  { id: 'em8', title: 'Turbine Blade Set', author: 'Power Gen Inc', copies: 234, category: 'aerospace' },
];

export const EXPLORE_TUTORIALS = [
  { id: 't1', title: 'Getting Started with Part Studios', duration: '12 min', level: 'Beginner' },
  { id: 't2', title: 'Assemblies and Mates', duration: '18 min', level: 'Intermediate' },
  { id: 't3', title: 'Drawing Fundamentals', duration: '15 min', level: 'Beginner' },
  { id: 't4', title: 'Advanced Sheet Metal', duration: '22 min', level: 'Advanced' },
  { id: 't5', title: 'Configuration Studio', duration: '10 min', level: 'Intermediate' },
  { id: 't6', title: 'FeatureScript Introduction', duration: '25 min', level: 'Advanced' },
];

export const EXPLORE_GUIDES = [
  { id: 'g1', title: 'Onshape Quick Start Guide', desc: 'Learn the basics in under 10 minutes' },
  { id: 'g2', title: 'Migrating from SOLIDWORKS', desc: 'Everything you need to switch smoothly' },
  { id: 'g3', title: 'Collaboration Best Practices', desc: 'Work better together in the cloud' },
];
