<template>
  <header class="header">
    <div class="header-left">
      <button class="menu-btn" @click="$emit('toggle-sidebar')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
      <div class="breadcrumb">
        <span class="breadcrumb-root">C3D Toolkit</span>
        <span class="breadcrumb-sep">/</span>
        <span class="breadcrumb-current">{{ currentTitle }}</span>
      </div>
    </div>
    <div class="header-right">
      <div class="header-search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
        <input type="text" placeholder="搜索模块、类、API..." @keyup.enter="handleSearch" v-model="searchQuery"/>
        <kbd>/</kbd>
      </div>
      <a href="https://c3dlabs.ru" target="_blank" class="header-link" title="官方网站">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
          <path d="M15 3h6v6M10 14L21 3"/>
        </svg>
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

defineEmits(['toggle-sidebar'])

const route = useRoute()
const router = useRouter()
const searchQuery = ref('')

const currentTitle = computed(() => route.meta.title || '概览')

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/api-docs', query: { q: searchQuery.value } })
    searchQuery.value = ''
  }
}
</script>

<style scoped>
.header {
  height: 64px;
  background: rgba(17, 24, 39, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  position: sticky;
  top: 0;
  z-index: 50;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}
.menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  border-radius: var(--radius-sm);
  transition: all 0.2s;
}
.menu-btn:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}
.menu-btn svg {
  width: 20px;
  height: 20px;
}
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}
.breadcrumb-root {
  color: var(--text-tertiary);
}
.breadcrumb-sep {
  color: var(--border-light);
}
.breadcrumb-current {
  color: var(--text-primary);
  font-weight: 500;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.header-search {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 8px 12px;
  width: 280px;
  transition: all 0.2s;
}
.header-search:focus-within {
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.header-search svg {
  width: 16px;
  height: 16px;
  color: var(--text-tertiary);
  flex-shrink: 0;
}
.header-search input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--text-primary);
  font-size: 13px;
  font-family: var(--font-sans);
}
.header-search input::placeholder {
  color: var(--text-tertiary);
}
.header-search kbd {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 2px 6px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-light);
  border-radius: 4px;
  color: var(--text-tertiary);
}
.header-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: var(--text-tertiary);
  border-radius: var(--radius-sm);
  transition: all 0.2s;
}
.header-link:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}
.header-link svg {
  width: 18px;
  height: 18px;
}
@media (max-width: 768px) {
  .header-search {
    display: none;
  }
}
</style>
