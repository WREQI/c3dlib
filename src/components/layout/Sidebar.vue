<template>
  <aside class="sidebar" :class="{ collapsed }">
    <div class="sidebar-logo">
      <div class="logo-icon">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" stroke="url(#logoGrad)" stroke-width="2"/>
          <path d="M16 2V16M16 16L4 9M16 16L28 9M16 16V30" stroke="url(#logoGrad)" stroke-width="1.5" opacity="0.6"/>
          <defs>
            <linearGradient id="logoGrad" x1="4" y1="2" x2="28" y2="30">
              <stop stop-color="#3b82f6"/>
              <stop offset="1" stop-color="#06b6d4"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div v-if="!collapsed" class="logo-text">
        <span class="logo-title">C3D Explorer</span>
        <span class="logo-subtitle">架构分析平台</span>
      </div>
    </div>

    <nav class="sidebar-nav">
      <router-link
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        class="nav-item"
        :class="{ active: isActive(item.path) }"
      >
        <span class="nav-icon" v-html="item.icon"></span>
        <span v-if="!collapsed" class="nav-label">{{ item.label }}</span>
      </router-link>
    </nav>

    <div class="sidebar-footer">
      <button class="collapse-btn" @click="$emit('toggle')">
        <svg :class="{ rotated: collapsed }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
        <span v-if="!collapsed">收起菜单</span>
      </button>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

defineProps({
  collapsed: Boolean
})
defineEmits(['toggle'])

const route = useRoute()

const navItems = [
  { path: '/', label: '概览', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>' },
  { path: '/architecture', label: '架构图', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>' },
  { path: '/modules', label: '模块分析', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>' },
  { path: '/api-docs', label: 'API 文档', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>' },
  { path: '/sandbox', label: '内核沙箱', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>' },
  { path: '/learning', label: '学习路径', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>' },
  { path: '/resources', label: '资源中心', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/></svg>' }
]

const isActive = (path) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path) || route.path.startsWith('/module') && path === '/modules'
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100vh;
  background: var(--bg-secondary);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  z-index: 100;
  transition: width 0.3s ease;
  overflow: hidden;
}
.sidebar.collapsed {
  width: 64px;
}
.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px;
  border-bottom: 1px solid var(--border-color);
  min-height: 64px;
}
.logo-icon {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
}
.logo-icon svg {
  width: 100%;
  height: 100%;
}
.logo-text {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
}
.logo-title {
  font-size: 16px;
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.logo-subtitle {
  font-size: 11px;
  color: var(--text-tertiary);
}
.sidebar-nav {
  flex: 1;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  white-space: nowrap;
  text-decoration: none;
}
.nav-item:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}
.nav-item.active {
  background: rgba(59, 130, 246, 0.12);
  color: var(--accent-primary-light);
}
.nav-item.active .nav-icon {
  color: var(--accent-primary-light);
}
.nav-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-icon svg {
  width: 100%;
  height: 100%;
}
.sidebar-footer {
  padding: 12px;
  border-top: 1px solid var(--border-color);
}
.collapse-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 12px;
  background: transparent;
  border: none;
  color: var(--text-tertiary);
  font-size: 13px;
  cursor: pointer;
  border-radius: var(--radius-md);
  transition: all 0.2s;
  white-space: nowrap;
}
.collapse-btn:hover {
  background: var(--bg-tertiary);
  color: var(--text-secondary);
}
.collapse-btn svg {
  width: 18px;
  height: 18px;
  transition: transform 0.3s;
}
.collapse-btn svg.rotated {
  transform: rotate(180deg);
}
@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
  }
  .sidebar.mobile-open {
    transform: translateX(0);
  }
}
</style>
