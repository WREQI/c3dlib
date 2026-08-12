// EXPORTS: IWhyOnshapeContent, MOCK_WHY_ONSHAPE_CONTENT
export interface IWhyOnshapeContent {
  id: string
  heroTitle: string
  heroDescription: string
  heroVideoImageUrl: string
  trustTitle: string
  features: Array<{
    id: string
    title: string
    description: string
    linkText: string
    linkUrl: string
    imageUrl: string
  }>
}

export const MOCK_WHY_ONSHAPE_CONTENT: IWhyOnshapeContent = {
  id: '1',
  heroTitle: 'Why Onshape?',
  heroDescription: 'Accelerate product development with the power of cloud computing, real-time collaboration tools, and a built-in PDM system – all for the same price as CAD.',
  heroVideoImageUrl: '/spark/app/app_17bxp9b2h74/runtime/api/v1/storage/object/bucket_aadkpm7vsumds_static/static%2Faadkpm3hidwds_ve_miaoda',
  trustTitle: 'Why do millions of users trust Onshape for their design needs?',
  features: [
    {
      id: '1',
      title: 'Cloud Native CAD',
      description: 'Unlike traditional desktop CAD, Onshape runs entirely in the cloud. No installation, no updates, no crashes. Access your designs from any device, anywhere, anytime. Our cloud-native architecture delivers unmatched performance, reliability, and collaboration capabilities that legacy CAD systems simply cannot match.',
      linkText: 'LEARN MORE →',
      linkUrl: '#',
      imageUrl: '/spark/app/app_17bxp9b2h74/runtime/api/v1/storage/object/bucket_aadkpm7vsumds_static/static%2Faadkpmwucm6fu_ve_miaoda',
    },
  ],
}
