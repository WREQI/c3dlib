import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: '概览', icon: 'home' }
  },
  {
    path: '/architecture',
    name: 'architecture',
    component: () => import('@/views/ArchitectureView.vue'),
    meta: { title: '架构图', icon: 'diagram' }
  },
  {
    path: '/modules',
    name: 'modules',
    component: () => import('@/views/ModulesView.vue'),
    meta: { title: '模块分析', icon: 'modules' }
  },
  {
    path: '/module/:id',
    name: 'module-detail',
    component: () => import('@/views/ModuleDetailView.vue'),
    meta: { title: '模块详情', icon: 'modules', hidden: true }
  },
  {
    path: '/module/:moduleId/:subId',
    name: 'submodule-detail',
    component: () => import('@/views/SubModuleDetailView.vue'),
    meta: { title: '子模块学习', icon: 'modules', hidden: true }
  },
  {
    path: '/api-docs',
    name: 'api-docs',
    component: () => import('@/views/ApiDocsView.vue'),
    meta: { title: 'API 文档', icon: 'code' }
  },
  {
    path: '/learning',
    name: 'learning',
    component: () => import('@/views/LearningView.vue'),
    meta: { title: '学习路径', icon: 'book' }
  },
  {
    path: '/learning/:stageId/:lessonId',
    name: 'lesson-detail',
    component: () => import('@/views/LessonDetailView.vue'),
    meta: { title: '学习单元', icon: 'book', hidden: true }
  },
  {
    path: '/resources',
    name: 'resources',
    component: () => import('@/views/ResourcesView.vue'),
    meta: { title: '资源中心', icon: 'resource' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} · C3D 架构探索者` : 'C3D 架构探索者'
})

export default router
