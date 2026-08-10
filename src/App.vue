<template>
  <div class="app-shell">
    <Sidebar :collapsed="sidebarCollapsed" @toggle="sidebarCollapsed = !sidebarCollapsed" />
    <div class="main-area" :class="{ collapsed: sidebarCollapsed }">
      <Header @toggle-sidebar="sidebarCollapsed = !sidebarCollapsed" />
      <main class="page-content">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
      <footer class="app-footer">
        <span>C3D Toolkit 架构探索者 · 基于 Vue 3 + Vite 构建</span>
        <span class="footer-version">Kernel 118065 / Vision 2.16.3.1835</span>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import Header from '@/components/layout/Header.vue'

const sidebarCollapsed = ref(false)
</script>

<style scoped>
.app-shell {
  display: flex;
  min-height: 100vh;
  background: var(--bg-primary);
}
.main-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 260px;
  transition: margin-left 0.3s ease;
  min-width: 0;
}
.main-area.collapsed {
  margin-left: 64px;
}
.page-content {
  flex: 1;
  padding: 32px 40px;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
}
.app-footer {
  padding: 20px 40px;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: var(--text-tertiary);
}
.footer-version {
  font-family: var(--font-mono);
  font-size: 12px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
@media (max-width: 768px) {
  .main-area {
    margin-left: 0;
  }
  .page-content {
    padding: 20px 16px;
  }
  .app-footer {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}
</style>
