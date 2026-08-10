<template>
  <div class="module-detail" v-if="module">
    <!-- Back button -->
    <button class="back-btn" @click="$router.back()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      返回
    </button>

    <!-- Module header -->
    <div class="module-header" :style="{ '--mod-color': module.color }">
      <div class="header-icon" :style="{ background: module.color + '15', color: module.color }">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" v-html="moduleIcons[module.icon]"></svg>
      </div>
      <div class="header-info">
        <div class="header-tags">
          <span class="badge badge-primary">{{ module.version }}</span>
          <span class="badge" :style="{ background: module.color + '15', color: module.color, borderColor: module.color + '40' }">
            {{ module.chineseName }}
          </span>
        </div>
        <h1>{{ module.name }}</h1>
        <p class="header-en">{{ module.nameEn }}</p>
      </div>
    </div>

    <!-- Description -->
    <div class="section-card">
      <h2 class="card-title">模块概述</h2>
      <p class="long-desc">{{ module.descriptionLong || module.description }}</p>
    </div>

    <!-- Key features -->
    <div class="section-card">
      <h2 class="card-title">核心特性</h2>
      <div class="features-grid">
        <div class="feature-item" v-for="(feature, i) in module.keyFeatures" :key="i">
          <span class="feature-check" :style="{ background: module.color + '15', color: module.color }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" width="14" height="14">
              <path d="M5 13l4 4L19 7"/>
            </svg>
          </span>
          <span>{{ feature }}</span>
        </div>
      </div>
    </div>

    <!-- Tech stack -->
    <div class="section-card">
      <h2 class="card-title">技术栈</h2>
      <div class="tech-tags">
        <span class="tech-tag" v-for="tech in module.techStack" :key="tech">{{ tech }}</span>
      </div>
    </div>

    <!-- Submodule tree -->
    <div class="section-card">
      <h2 class="card-title">子模块结构</h2>
      <div class="submodule-tree">
        <div v-for="sub in module.subModules" :key="sub.id" class="tree-branch">
          <div class="branch-header">
            <span class="branch-dot" :style="{ background: module.color }"></span>
            <h3>{{ sub.name }}</h3>
            <a :href="sub.docUrl" target="_blank" class="branch-doc">文档</a>
          </div>
          <p class="branch-desc">{{ sub.description }}</p>
          <div v-if="sub.children && sub.children.length" class="branch-children">
            <div v-for="child in sub.children" :key="child.id" class="child-item">
              <div class="child-info">
                <a :href="child.docUrl" target="_blank" class="child-name">{{ child.name }}</a>
                <p class="child-desc">{{ child.desc }}</p>
              </div>
              <a :href="child.docUrl" target="_blank" class="child-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick links -->
    <div class="section-card">
      <h2 class="card-title">快速入口</h2>
      <div class="quick-links">
        <a :href="module.docUrl" target="_blank" class="quick-link-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
            <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
          </svg>
          查看完整 API 文档
        </a>
        <router-link to="/api-docs" class="quick-link-btn secondary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
            <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7"/>
          </svg>
          浏览所有 API
        </router-link>
      </div>
    </div>
  </div>

  <div v-else class="not-found">
    <h2>模块未找到</h2>
    <router-link to="/modules" class="btn btn-primary">返回模块列表</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { findModule } from '@/data/architecture.js'

const route = useRoute()
const module = computed(() => findModule(route.params.id))

const moduleIcons = {
  cube: '<path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>',
  puzzle: '<path d="M12 2v4m0 12v4M2 12h4m12 0h4M7.5 7.5l2.83 2.83m3.34 3.34l2.83 2.83M16.5 7.5l-2.83 2.83m-3.34 3.34l-2.83 2.83"/>',
  exchange: '<path d="M17 1l4 4-4 4M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 01-4 4H3"/>',
  eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
}
</script>

<style scoped>
.back-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  font-size: 13px;
  cursor: pointer;
  margin-bottom: 24px;
  transition: all 0.2s;
  font-family: var(--font-sans);
}
.back-btn:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

.module-header {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 32px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  margin-bottom: 24px;
  border-left: 4px solid var(--mod-color);
}
.header-icon {
  width: 72px;
  height: 72px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.header-icon svg {
  width: 40px;
  height: 40px;
}
.header-info { flex: 1; }
.header-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}
.header-info h1 {
  font-size: 1.75rem;
  margin-bottom: 4px;
}
.header-en {
  font-size: 14px;
  color: var(--text-tertiary);
  margin: 0;
  font-style: italic;
}

.section-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 24px;
  margin-bottom: 20px;
}
.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.card-title::before {
  content: '';
  width: 3px;
  height: 18px;
  background: var(--mod-color, var(--accent-primary));
  border-radius: 2px;
}
.long-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  font-size: 13px;
  color: var(--text-secondary);
}
.feature-check {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.tech-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.tech-tag {
  padding: 8px 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 13px;
  font-family: var(--font-mono);
  color: var(--accent-cyan);
}

.submodule-tree {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.tree-branch {
  padding-left: 16px;
  border-left: 2px solid var(--border-color);
}
.branch-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
}
.branch-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-left: -22px;
}
.branch-header h3 {
  font-size: 15px;
  font-weight: 600;
}
.branch-doc {
  font-size: 11px;
  color: var(--text-tertiary);
  text-decoration: none;
  padding: 2px 8px;
  background: var(--bg-tertiary);
  border-radius: 10px;
  margin-left: auto;
}
.branch-doc:hover {
  color: var(--accent-primary-light);
}
.branch-desc {
  font-size: 13px;
  color: var(--text-tertiary);
  margin-bottom: 12px;
  margin-left: -8px;
}
.branch-children {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 8px;
}
.child-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 14px;
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  transition: all 0.2s;
}
.child-item:hover {
  background: var(--bg-tertiary);
}
.child-info { flex: 1; min-width: 0; }
.child-name {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
  text-decoration: none;
}
.child-name:hover {
  color: var(--accent-primary-light);
}
.child-desc {
  font-size: 12px;
  color: var(--text-tertiary);
  margin: 4px 0 0;
  line-height: 1.5;
}
.child-arrow {
  color: var(--text-tertiary);
  flex-shrink: 0;
}
.child-arrow:hover {
  color: var(--accent-primary-light);
}

.quick-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.quick-link-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: var(--accent-primary);
  color: white;
  border-radius: var(--radius-md);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}
.quick-link-btn:hover {
  background: var(--accent-primary-dark);
  transform: translateY(-1px);
}
.quick-link-btn.secondary {
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
}
.quick-link-btn.secondary:hover {
  background: var(--bg-elevated);
  color: var(--text-primary);
}

.not-found {
  text-align: center;
  padding: 80px 20px;
}
.not-found h2 {
  margin-bottom: 20px;
  color: var(--text-tertiary);
}

@media (max-width: 640px) {
  .module-header {
    flex-direction: column;
    text-align: center;
    padding: 24px;
  }
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
