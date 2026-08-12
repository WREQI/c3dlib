// EXPORTS: IFeaturePageContent, MOCK_PARTS_MODELING_CONTENT
export interface IFeaturePageContent {
  id: string
  heroTitle: string
  heroSubtitle: string
  heroImageUrl: string
  tabs: Array<{ id: string; label: string }>
  defaultTab: string
  overviewTitle: string
  overviewDescription: string
  screenshotUrl: string
}

export const MOCK_PARTS_MODELING_CONTENT: IFeaturePageContent = {
  id: 'parts-modeling',
  heroTitle: 'Part Design',
  heroSubtitle: 'Onshape delivers collaborative parametric modeling methods for solid, surface, frame, and sheet metal part designs.',
  heroImageUrl: '/spark/app/app_17bxp9b2h74/runtime/api/v1/storage/object/bucket_aadkpm7vsumds_static/static%2Faadkpmzixfsaw_ve_miaoda',
  tabs: [
    { id: 'overview', label: 'OVERVIEW' },
    { id: 'features', label: 'KEY FEATURES' },
    { id: 'explore', label: 'EXPLORE MORE' },
    { id: 'faq', label: 'FAQ' },
  ],
  defaultTab: 'overview',
  overviewTitle: 'What is a parametric design?',
  overviewDescription: `Parametric design is a process that enables the expression of parameters and rule-defining relationships among design elements. It's widely used in engineering and design, allowing for the rapid generation and modification of complex geometries and structures. This design method hinges on the principle that changing a parameter updates the design automatically, thereby enhancing efficiency and versatility in the design process. This is taken a step further with the Onshape "Part Studio" approach, where part relationships can be made in a cohesive and flexible manner.

Onshape's Part Studio is a unique environment where multiple parts can be designed in context together. Unlike traditional CAD systems where each part lives in a separate file, Onshape allows you to design parts in the same space, referencing each other's geometry for top-down design control. Change one dimension and all related parts update automatically.`,
  screenshotUrl: '/spark/app/app_17bxp9b2h74/runtime/api/v1/storage/object/bucket_aadkpm7vsumds_static/static%2Faadkpmwucm6fu_ve_miaoda',
}
