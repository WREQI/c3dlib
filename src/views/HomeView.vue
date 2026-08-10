<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-grid"></div>
        <div class="hero-glow"></div>
      </div>
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          几何建模内核 · 技术架构深度解析
        </div>
        <h1 class="hero-title">
          探索 <span class="text-gradient">C3D Toolkit</span><br/>
          的技术架构与设计哲学
        </h1>
        <p class="hero-desc">
          C3D Toolkit 是由俄罗斯 C3D Labs 开发的商用几何建模内核，包含建模、约束求解、数据转换、可视化四大核心模块。
          本平台帮助你系统性地理解其架构设计、模块划分与核心技术。
        </p>
        <div class="hero-actions">
          <router-link to="/architecture" class="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg>
            查看架构图
          </router-link>
          <router-link to="/modules" class="btn btn-ghost">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
              <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
            </svg>
            浏览模块
          </router-link>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="stats-section">
      <div class="stats-grid">
        <div class="stat-card" v-for="stat in stats" :key="stat.label">
          <div class="stat-value" :style="{ color: stat.color }">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
          <div class="stat-icon" :style="{ background: stat.color + '15', color: stat.color }" v-html="stat.icon"></div>
        </div>
      </div>
    </section>

    <!-- Core Modules -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">四大核心模块</h2>
        <router-link to="/modules" class="view-all">查看全部 →</router-link>
      </div>
      <div class="modules-grid">
        <router-link
          v-for="mod in coreModules"
          :key="mod.id"
          :to="`/module/${mod.id}`"
          class="module-card"
          :style="{ '--module-color': mod.color }"
        >
          <div class="module-icon" :style="{ background: mod.color + '15', color: mod.color }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" v-html="moduleIcons[mod.icon]"></svg>
          </div>
          <h3 class="module-name">{{ mod.name }}</h3>
          <p class="module-chinese">{{ mod.chineseName }}</p>
          <p class="module-desc">{{ mod.description }}</p>
          <div class="module-tags">
            <span class="tag" v-for="tech in mod.techStack.slice(0, 3)" :key="tech">{{ tech }}</span>
          </div>
          <div class="module-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </router-link>
      </div>
    </section>

    <!-- Architecture Overview -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">分层架构</h2>
      </div>
      <div class="layers-container">
        <div
          v-for="(layer, index) in architectureLayers"
          :key="layer.id"
          class="layer-row"
          :style="{ '--layer-color': layer.color, '--delay': index * 0.1 + 's' }"
        >
          <div class="layer-header">
            <div class="layer-badge" :style="{ background: layer.color }">{{ index + 1 }}</div>
            <div>
              <h3 class="layer-name">{{ layer.name }}</h3>
              <p class="layer-desc">{{ layer.description }}</p>
            </div>
          </div>
          <div class="layer-items">
            <span class="layer-item" v-for="item in layer.items" :key="item" :style="{ borderColor: layer.color + '40', color: layer.color }">
              {{ item }}
            </span>
          </div>
        </div>
        <div class="layer-connector" v-for="i in 3" :key="'conn-' + i"></div>
      </div>
    </section>

    <!-- Quick Links -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">快速开始</h2>
      </div>
      <div class="grid-3">
        <router-link to="/learning" class="quick-card">
          <div class="quick-icon" style="background: rgba(59,130,246,0.15); color: #3b82f6;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
          </div>
          <h4>学习路径</h4>
          <p>从基础概念到高级特性，循序渐进掌握 C3D 架构</p>
        </router-link>
        <router-link to="/api-docs" class="quick-card">
          <div class="quick-icon" style="background: rgba(139,92,246,0.15); color: #8b5cf6;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
              <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
          </div>
          <h4>API 文档</h4>
          <p>完整的 C++ API 参考文档，近4000个类与函数</p>
        </router-link>
        <router-link to="/resources" class="quick-card">
          <div class="quick-icon" style="background: rgba(16,185,129,0.15); color: #10b981;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
              <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
            </svg>
          </div>
          <h4>资源中心</h4>
          <p>官方手册、示例代码、技术文章等学习资源</p>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { coreModules, architectureLayers } from '@/data/architecture.js'

const stats = [
  { value: '4', label: '核心模块', color: '#3b82f6', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>' },
  { value: '78+', label: '功能子模块', color: '#8b5cf6', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>' },
  { value: '7', label: 'CAD格式支持', color: '#10b981', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/></svg>' },
  { value: '~4000', label: 'API 文档页', color: '#f59e0b', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>' }
]

const moduleIcons = {
  cube: '<path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>',
  puzzle: '<path d="M12 2v4m0 12v4M2 12h4m12 0h4M7.5 7.5l2.83 2.83m3.34 3.34l2.83 2.83M16.5 7.5l-2.83 2.83m-3.34 3.34l-2.83 2.83"/>',
  exchange: '<path d="M17 1l4 4-4 4M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 01-4 4H3"/>',
  eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
}
</script>

<style scoped>
.home-view {
  margin: -32px -40px 0;
  padding: 0;
}
@media (max-width: 768px) {
  .home-view { margin: -20px -16px 0; }
}

/* Hero */
.hero {
  position: relative;
  padding: 80px 40px 60px;
  overflow: hidden;
  border-bottom: 1px solid var(--border-color);
}
.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
}
.hero-glow {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 600px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 60%);
  pointer-events: none;
}
.hero-content {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.25);
  border-radius: 20px;
  font-size: 13px;
  color: var(--accent-primary-light);
  margin-bottom: 24px;
}
.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-green);
  animation: pulse 2s infinite;
}
.hero-title {
  font-size: 2.75rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}
.hero-desc {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 32px;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}
.hero-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Stats */
.stats-section {
  padding: 40px;
  border-bottom: 1px solid var(--border-color);
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.stat-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 24px;
  overflow: hidden;
}
.stat-value {
  font-size: 2.25rem;
  font-weight: 700;
  font-family: var(--font-mono);
  margin-bottom: 4px;
}
.stat-label {
  font-size: 13px;
  color: var(--text-tertiary);
}
.stat-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Modules */
.section {
  padding: 48px 40px;
}
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 12px;
}
.section-title::before {
  content: '';
  width: 4px;
  height: 24px;
  background: linear-gradient(180deg, var(--accent-primary), var(--accent-cyan));
  border-radius: 2px;
}
.view-all {
  font-size: 14px;
  color: var(--accent-primary-light);
  text-decoration: none;
}
.modules-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.module-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 28px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  overflow: hidden;
}
.module-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--module-color);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}
.module-card:hover {
  border-color: var(--module-color);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}
.module-card:hover::before {
  transform: scaleX(1);
}
.module-icon {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}
.module-icon svg {
  width: 28px;
  height: 28px;
}
.module-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 4px;
}
.module-chinese {
  font-size: 13px;
  color: var(--module-color);
  margin-bottom: 12px;
  font-weight: 500;
}
.module-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 16px;
}
.module-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.tag {
  padding: 3px 10px;
  background: var(--bg-tertiary);
  border-radius: 12px;
  font-size: 11px;
  color: var(--text-tertiary);
  font-family: var(--font-mono);
}
.module-arrow {
  position: absolute;
  bottom: 24px;
  right: 24px;
  color: var(--text-tertiary);
  opacity: 0;
  transform: translateX(-8px);
  transition: all 0.3s;
}
.module-card:hover .module-arrow {
  opacity: 1;
  transform: translateX(0);
  color: var(--module-color);
}

/* Layers */
.layers-container {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
}
.layer-row {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-left: 4px solid var(--layer-color);
  border-radius: var(--radius-lg);
  padding: 20px 24px;
  margin-bottom: 12px;
  animation: fadeInUp 0.5s ease both;
  animation-delay: var(--delay);
}
.layer-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
}
.layer-badge {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}
.layer-name {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 2px;
}
.layer-desc {
  font-size: 13px;
  color: var(--text-tertiary);
  margin: 0;
}
.layer-items {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding-left: 48px;
}
.layer-item {
  padding: 5px 12px;
  border: 1px solid;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.02);
}

/* Quick Cards */
.quick-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 24px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;
}
.quick-card:hover {
  border-color: var(--border-accent);
  transform: translateY(-2px);
}
.quick-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}
.quick-card h4 {
  font-size: 1rem;
  margin-bottom: 8px;
}
.quick-card p {
  font-size: 13px;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.6;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

@media (max-width: 1024px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .modules-grid { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .hero { padding: 48px 20px 40px; }
  .hero-title { font-size: 1.75rem; }
  .section { padding: 32px 20px; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
