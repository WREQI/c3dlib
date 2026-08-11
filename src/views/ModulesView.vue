<template>
  <div class="modules-view">
    <div class="page-title">
      <h1>模块分析</h1>
      <p>深入了解 C3D Toolkit 四大核心模块及其子模块的功能与设计</p>
    </div>

    <!-- Filter tabs -->
    <div class="filter-bar">
      <button
        class="filter-btn"
        :class="{ active: activeFilter === 'all' }"
        @click="activeFilter = 'all'"
      >
        全部 <span class="filter-count">{{ totalModules }}</span>
      </button>
      <button
        v-for="mod in coreModules"
        :key="mod.id"
        class="filter-btn"
        :class="{ active: activeFilter === mod.id }"
        :style="{ '--filter-color': mod.color }"
        @click="activeFilter = mod.id"
      >
        <span class="filter-dot" :style="{ background: mod.color }"></span>
        {{ mod.name.replace('C3D ', '') }}
        <span class="filter-count">{{ countSubModules(mod) }}</span>
      </button>
    </div>

    <!-- Search -->
    <div class="search-bar">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
      </svg>
      <input type="text" v-model="searchQuery" placeholder="搜索模块名称或描述..." />
    </div>

    <!-- Module groups -->
    <div class="module-groups">
      <div
        v-for="mod in filteredModules"
        :key="mod.id"
        class="module-group"
      >
        <div class="group-header" :style="{ '--mod-color': mod.color }">
          <div class="group-title">
            <div class="group-icon" :style="{ background: mod.color + '15', color: mod.color }">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" v-html="moduleIcons[mod.icon]"></svg>
            </div>
            <div>
              <h2>{{ mod.name }}</h2>
              <p>{{ mod.chineseName }} · {{ mod.version }}</p>
            </div>
          </div>
          <router-link :to="`/module/${mod.id}`" class="group-link">
            查看详情
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </router-link>
        </div>

        <p class="group-desc">{{ mod.description }}</p>

        <div class="submodules-grid">
          <div
            v-for="sub in mod.subModules"
            :key="sub.id"
            class="submodule-card"
            @click="$router.push(`/module/${mod.id}/${sub.id}`)"
          >
            <h4>{{ sub.name }}</h4>
            <p class="sub-desc">{{ sub.description }}</p>
            <div class="sub-children" v-if="sub.children && sub.children.length" @click.stop>
              <router-link
                v-for="child in sub.children"
                :key="child.id"
                :to="`/module/${mod.id}/${child.id}`"
                class="child-tag"
              >
                {{ child.name }}
              </router-link>
            </div>
            <span v-else class="doc-link">
              进入学习 →
            </span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="filteredModules.length === 0" class="empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48">
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
      </svg>
      <p>未找到匹配的模块</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { coreModules } from '@/data/architecture.js'

const activeFilter = ref('all')
const searchQuery = ref('')

const moduleIcons = {
  cube: '<path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>',
  puzzle: '<path d="M12 2v4m0 12v4M2 12h4m12 0h4M7.5 7.5l2.83 2.83m3.34 3.34l2.83 2.83M16.5 7.5l-2.83 2.83m-3.34 3.34l-2.83 2.83"/>',
  exchange: '<path d="M17 1l4 4-4 4M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 01-4 4H3"/>',
  eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
}

const totalModules = computed(() => {
  return coreModules.reduce((sum, mod) => sum + countSubModules(mod), 0)
})

function countSubModules(mod) {
  let count = 0
  for (const sub of mod.subModules) {
    count++
    if (sub.children) count += sub.children.length
  }
  return count
}

const filteredModules = computed(() => {
  let result = coreModules
  if (activeFilter.value !== 'all') {
    result = result.filter(m => m.id === activeFilter.value)
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    result = result.map(mod => {
      const matchedSubs = mod.subModules.filter(sub => {
        if (sub.name.toLowerCase().includes(q) || sub.description?.toLowerCase().includes(q)) return true
        return sub.children?.some(c => c.name.toLowerCase().includes(q) || c.desc?.toLowerCase().includes(q))
      })
      return { ...mod, subModules: matchedSubs }
    }).filter(mod => mod.subModules.length > 0)
  }
  return result
})
</script>

<style scoped>
.page-title { margin-bottom: 28px; }
.page-title h1 { font-size: 1.75rem; margin-bottom: 8px; }
.page-title p { color: var(--text-tertiary); font-size: 14px; }

.filter-bar {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.filter-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-family: var(--font-sans);
}
.filter-btn:hover {
  border-color: var(--border-light);
  color: var(--text-primary);
}
.filter-btn.active {
  background: var(--filter-color, var(--accent-primary));
  border-color: var(--filter-color, var(--accent-primary));
  color: white;
}
.filter-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.filter-count {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 1px 6px;
  background: rgba(255,255,255,0.15);
  border-radius: 10px;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 12px 16px;
  margin-bottom: 32px;
  transition: all 0.2s;
}
.search-bar:focus-within {
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
}
.search-bar svg {
  width: 18px;
  height: 18px;
  color: var(--text-tertiary);
}
.search-bar input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--text-primary);
  font-size: 14px;
  font-family: var(--font-sans);
}
.search-bar input::placeholder {
  color: var(--text-tertiary);
}

.module-groups {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.module-group {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 28px;
  border-top: 3px solid var(--mod-color);
}
.group-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 16px;
  gap: 16px;
}
.group-title {
  display: flex;
  align-items: center;
  gap: 16px;
}
.group-icon {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.group-icon svg {
  width: 28px;
  height: 28px;
}
.group-title h2 {
  font-size: 1.3rem;
  margin-bottom: 4px;
}
.group-title p {
  font-size: 12px;
  color: var(--text-tertiary);
  margin: 0;
  font-family: var(--font-mono);
}
.group-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  font-size: 13px;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.2s;
  white-space: nowrap;
}
.group-link:hover {
  background: var(--mod-color);
  color: white;
}
.group-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 20px;
}

.submodules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 14px;
}
.submodule-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 16px;
  transition: all 0.2s;
  cursor: pointer;
}
.submodule-card:hover {
  border-color: var(--border-light);
  background: var(--bg-tertiary);
  transform: translateY(-2px);
}
.submodule-card h4 {
  font-size: 14px;
  margin-bottom: 6px;
  color: var(--text-primary);
}
.sub-desc {
  font-size: 12px;
  color: var(--text-tertiary);
  margin-bottom: 12px;
  line-height: 1.5;
}
.sub-children {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.child-tag {
  padding: 3px 8px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  font-size: 11px;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.2s;
}
.child-tag:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary-light);
}
.doc-link {
  font-size: 12px;
  color: var(--accent-primary-light);
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-tertiary);
}
.empty-state svg {
  margin-bottom: 16px;
  opacity: 0.5;
}
.empty-state p {
  font-size: 14px;
}
</style>
