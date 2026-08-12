// EXPORTS: IHomeContent, MOCK_HOME_CONTENT
export interface IHomeContent {
  id: string
  // Webinar 通知条
  webinarLabel: string
  webinarText: string
  webinarLinkText: string
  webinarLinkUrl: string
  // Hero 区
  heroTitle: string
  heroDescription: string
  heroVideoLinkText: string
  heroCtaButtonText: string
  heroSubtext: string
  heroImageUrl: string
  // 特色功能卡片
  featureCards: Array<{
    id: string
    icon: 'chip' | 'rocket'
    title: string
    description: string
    linkText: string
    linkUrl: string
  }>
  // SOLIDWORKS 迁移区
  solidworksTitle: string
  solidworksSubtitle: string
  solidworksFeatures: Array<{
    id: string
    icon: 'check' | 'flow' | 'cloud-lock' | 'windows' | 'clock-doc'
    title: string
    description: string
  }>
  solidworksCtaText: string
  solidworksCtaUrl: string
  // 行业应用区
  industriesTitle: string
  // 导航栏 CTA
  navCtaText: string
}

export const MOCK_HOME_CONTENT: IHomeContent = {
  id: '1',
  webinarLabel: 'WEBINAR',
  webinarText: 'Join us live on August 13th for The Big AI + CAD Webinar',
  webinarLinkText: 'Register Now →',
  webinarLinkUrl: '#webinar',
  heroTitle: 'The Fastest Growing CAD & PDM System Worldwide',
  heroDescription: "Only Onshape runs on any device, never crashes or loses data, and streamlines collaboration with branching & merging. See Onshape in action —",
  heroVideoLinkText: 'Quick video',
  heroCtaButtonText: 'SIGN UP FREE',
  heroSubtext: 'Sign up and get up to 6 months of Onshape Professional free. No credit card required.',
  heroImageUrl: '/spark/app/app_17bxp9b2h74/runtime/api/v1/storage/object/bucket_aadkpm7vsumds_static/static%2Faadkpmysuaubu_ve_miaoda',
  featureCards: [
    {
      id: '1',
      icon: 'chip',
      title: 'THE ONSHAPE ALTIUM CONNECTOR IS HERE!',
      description: 'Seamlessly integrate electronic and mechanical design workflows.',
      linkText: 'Learn More →',
      linkUrl: '/features/assemblies'
    },
    {
      id: '2',
      icon: 'rocket',
      title: 'THE ONSHAPE STARTUP PROGRAM',
      description: 'Get free access to professional CAD tools for your startup team.',
      linkText: 'Apply Now →',
      linkUrl: '/features/configurations'
    }
  ],
  solidworksTitle: 'See why SOLIDWORKS users are switching to Onshape',
  solidworksSubtitle: "Desktop CAD is slowing teams down with crashes, bottlenecks, and outdated workflows. Onshape delivers the reliability, speed, and modern cloud architecture today's engineering teams expect.",
  solidworksFeatures: [
    {
      id: '1',
      icon: 'check',
      title: 'NO CRASHES, NO CORRUPTED FILES.',
      description: 'Cloud-native architecture eliminates data loss and file corruption.'
    },
    {
      id: '2',
      icon: 'flow',
      title: 'PDM THAT ACTUALLY HELPS, NOT HINDERS.',
      description: 'Built-in data management with version control and branching.'
    },
    {
      id: '3',
      icon: 'cloud-lock',
      title: 'DESIGNED FOR DISTRIBUTED TEAMS.',
      description: 'Collaborate in real-time from anywhere, on any device.'
    },
    {
      id: '4',
      icon: 'windows',
      title: 'ALWAYS UPDATED, ALWAYS ON THE LATEST VERSION.',
      description: 'Automatic updates ensure everyone uses the same version.'
    },
    {
      id: '5',
      icon: 'clock-doc',
      title: 'COMPLETE AUDIT TRAIL WITH INFINITE UNDO.',
      description: 'Track every change and revert to any point in history.'
    }
  ],
  solidworksCtaText: 'LEARN WHY DESIGNERS ARE SWITCHING TO ONSHAPE →',
  solidworksCtaUrl: '#switch',
  industriesTitle: 'Powering innovation in every industry',
  navCtaText: 'SIGN UP NOW'
}