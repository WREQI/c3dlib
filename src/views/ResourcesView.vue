<template>
  <div class="resources-view">
    <div class="page-title">
      <h1>资源中心</h1>
      <p>C3D Toolkit 相关的官方手册、技术文档、学习资源和参考链接</p>
    </div>

    <!-- PDF Manuals -->
    <section class="resource-section">
      <h2 class="section-heading">官方手册</h2>
      <div class="manuals-grid">
        <a href="/pdf/2023-02-C3D_Manual_English.pdf" target="_blank" class="manual-card">
          <div class="manual-icon en">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <path d="M14 2v6h6"/>
              <path d="M9 13h6M9 17h4"/>
            </svg>
          </div>
          <div class="manual-info">
            <h3>C3D Toolkit Manual (English)</h3>
            <p>2023年2月版 · 英文官方手册</p>
            <div class="manual-meta">
              <span class="meta-tag">PDF</span>
              <span class="meta-size">~32 MB</span>
            </div>
          </div>
          <div class="manual-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </a>

        <a href="/pdf/2024-10-C3D_Manual_Russian.pdf" target="_blank" class="manual-card">
          <div class="manual-icon ru">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <path d="M14 2v6h6"/>
              <path d="M9 13h6M9 17h4"/>
            </svg>
          </div>
          <div class="manual-info">
            <h3>C3D Toolkit Manual (Русский)</h3>
            <p>2024年10月版 · 俄文官方手册（最新）</p>
            <div class="manual-meta">
              <span class="meta-tag">PDF</span>
              <span class="meta-size">~31 MB</span>
              <span class="meta-tag latest">最新</span>
            </div>
          </div>
          <div class="manual-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </a>
      </div>
    </section>

    <!-- API Documentation -->
    <section class="resource-section">
      <h2 class="section-heading">API 文档</h2>
      <div class="grid-3">
        <router-link to="/api-docs" class="resource-card">
          <div class="rc-icon" style="background: rgba(59,130,246,0.15); color: #3b82f6;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
              <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
          </div>
          <h4>完整 API 参考</h4>
          <p>近4000个类、函数、类型的完整 C++ API 文档</p>
        </router-link>
        <a href="/api-docs/modules.html" target="_blank" class="resource-card">
          <div class="rc-icon" style="background: rgba(139,92,246,0.15); color: #8b5cf6;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
              <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
            </svg>
          </div>
          <h4>模块分组文档</h4>
          <p>按功能模块组织的 API 文档，78+ 功能子模块</p>
        </a>
        <a href="/api-docs/annotated.html" target="_blank" class="resource-card">
          <div class="rc-icon" style="background: rgba(16,185,129,0.15); color: #10b981;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
              <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
            </svg>
          </div>
          <h4>类列表</h4>
          <p>按字母顺序排列的所有类与结构体</p>
        </a>
      </div>
    </section>

    <!-- Core Module Deep Dive -->
    <section class="resource-section">
      <h2 class="section-heading">核心模块深度分析</h2>
      <div class="modules-row">
        <router-link v-for="mod in coreModules" :key="mod.id" :to="`/module/${mod.id}`" class="module-mini-card" :style="{ '--mod-color': mod.color }">
          <div class="mm-icon" :style="{ background: mod.color + '15', color: mod.color }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" v-html="moduleIcons[mod.icon]"></svg>
          </div>
          <div>
            <h4>{{ mod.name }}</h4>
            <p>{{ mod.chineseName }}</p>
          </div>
        </router-link>
      </div>
    </section>

    <!-- External Resources -->
    <section class="resource-section">
      <h2 class="section-heading">外部参考资源</h2>
      <div class="external-list">
        <a href="https://c3dlabs.ru" target="_blank" class="external-item">
          <div class="ext-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
            </svg>
          </div>
          <div class="ext-info">
            <h4>C3D Labs 官方网站</h4>
            <p>c3dlabs.ru - 产品介绍、新闻、技术博客</p>
          </div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" class="ext-arrow">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>
        <a href="https://en.wikipedia.org/wiki/C3D_Toolkit" target="_blank" class="external-item">
          <div class="ext-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
              <path d="M12 2h8a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h4"/>
              <path d="M8 12h8M8 8h8M8 16h5"/>
            </svg>
          </div>
          <div class="ext-info">
            <h4>Wikipedia - C3D Toolkit</h4>
            <p>英文维基百科条目，了解 C3D 的历史与定位</p>
          </div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" class="ext-arrow">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>
        <a href="https://en.wikipedia.org/wiki/Boundary_representation" target="_blank" class="external-item">
          <div class="ext-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
              <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
            </svg>
          </div>
          <div class="ext-info">
            <h4>边界表示法 (B-Rep)</h4>
            <p>理解几何内核核心数据结构的维基百科条目</p>
          </div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" class="ext-arrow">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>
        <a href="https://en.wikipedia.org/wiki/Non-uniform_rational_B-spline" target="_blank" class="external-item">
          <div class="ext-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
              <path d="M3 17l6-6 4 4 8-8"/>
              <path d="M21 7v6h-6"/>
            </svg>
          </div>
          <div class="ext-info">
            <h4>NURBS 数学基础</h4>
            <p>非均匀有理 B 样条曲线曲面的数学原理</p>
          </div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" class="ext-arrow">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>
      </div>
    </section>

    <!-- Related Technologies -->
    <section class="resource-section">
      <h2 class="section-heading">相关技术与对比</h2>
      <div class="tech-compare">
        <div class="compare-item">
          <h4>同类几何内核</h4>
          <div class="compare-tags">
            <span class="ctag">Parasolid (Siemens)</span>
            <span class="ctag">ACIS (Dassault)</span>
            <span class="ctag">OpenCASCADE (开源)</span>
            <span class="ctag">CGAL (计算几何)</span>
          </div>
        </div>
        <div class="compare-item">
          <h4>CAD 格式标准</h4>
          <div class="compare-tags">
            <span class="ctag">STEP (ISO 10303)</span>
            <span class="ctag">IGES</span>
            <span class="ctag">STL</span>
            <span class="ctag">glTF</span>
            <span class="ctag">BREP</span>
          </div>
        </div>
        <div class="compare-item">
          <h4>可视化技术</h4>
          <div class="compare-tags">
            <span class="ctag">OpenGL</span>
            <span class="ctag">WebGL / Three.js</span>
            <span class="ctag">Vulkan</span>
            <span class="ctag">Metal</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { coreModules } from '@/data/architecture.js'

const moduleIcons = {
  cube: '<path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>',
  puzzle: '<path d="M12 2v4m0 12v4M2 12h4m12 0h4M7.5 7.5l2.83 2.83m3.34 3.34l2.83 2.83M16.5 7.5l-2.83 2.83m-3.34 3.34l-2.83 2.83"/>',
  exchange: '<path d="M17 1l4 4-4 4M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 01-4 4H3"/>',
  eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
}
</script>

<style scoped>
.page-title { margin-bottom: 32px; }
.page-title h1 { font-size: 1.75rem; margin-bottom: 8px; }
.page-title p { color: var(--text-tertiary); font-size: 14px; }

.resource-section {
  margin-bottom: 40px;
}
.section-heading {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.section-heading::before {
  content: '';
  width: 3px;
  height: 20px;
  background: linear-gradient(180deg, var(--accent-primary), var(--accent-cyan));
  border-radius: 2px;
}

/* Manuals */
.manuals-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.manual-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;
}
.manual-card:hover {
  border-color: var(--border-accent);
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}
.manual-icon {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.manual-icon.en {
  background: rgba(59, 130, 246, 0.15);
  color: #3b82f6;
}
.manual-icon.ru {
  background: rgba(139, 92, 246, 0.15);
  color: #8b5cf6;
}
.manual-info {
  flex: 1;
  min-width: 0;
}
.manual-info h3 {
  font-size: 15px;
  margin-bottom: 4px;
}
.manual-info p {
  font-size: 12px;
  color: var(--text-tertiary);
  margin-bottom: 8px;
}
.manual-meta {
  display: flex;
  gap: 6px;
  align-items: center;
}
.meta-tag {
  padding: 2px 8px;
  background: var(--bg-tertiary);
  border-radius: 10px;
  font-size: 11px;
  color: var(--text-secondary);
  font-family: var(--font-mono);
}
.meta-tag.latest {
  background: rgba(16, 185, 129, 0.15);
  color: var(--accent-green);
}
.meta-size {
  font-size: 11px;
  color: var(--text-tertiary);
}
.manual-arrow {
  color: var(--text-tertiary);
  flex-shrink: 0;
  transition: all 0.2s;
}
.manual-card:hover .manual-arrow {
  color: var(--accent-primary-light);
  transform: translateX(4px);
}

/* Resource cards */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.resource-card {
  padding: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;
}
.resource-card:hover {
  border-color: var(--border-accent);
  transform: translateY(-2px);
}
.rc-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}
.resource-card h4 {
  font-size: 14px;
  margin-bottom: 6px;
}
.resource-card p {
  font-size: 12px;
  color: var(--text-tertiary);
  margin: 0;
  line-height: 1.5;
}

/* Module mini cards */
.modules-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
.module-mini-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: inherit;
  transition: all 0.2s;
  border-left: 3px solid var(--mod-color);
}
.module-mini-card:hover {
  background: var(--bg-card-hover);
  transform: translateX(4px);
}
.mm-icon {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.mm-icon svg {
  width: 20px;
  height: 20px;
}
.module-mini-card h4 {
  font-size: 13px;
  margin-bottom: 2px;
}
.module-mini-card p {
  font-size: 11px;
  color: var(--text-tertiary);
  margin: 0;
}

/* External list */
.external-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.external-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: inherit;
  transition: all 0.2s;
}
.external-item:hover {
  border-color: var(--border-light);
  background: var(--bg-card-hover);
}
.ext-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.ext-info {
  flex: 1;
}
.ext-info h4 {
  font-size: 14px;
  margin-bottom: 2px;
}
.ext-info p {
  font-size: 12px;
  color: var(--text-tertiary);
  margin: 0;
}
.ext-arrow {
  color: var(--text-tertiary);
  flex-shrink: 0;
  transition: all 0.2s;
}
.external-item:hover .ext-arrow {
  color: var(--accent-primary-light);
  transform: translate(2px, -2px);
}

/* Tech compare */
.tech-compare {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.compare-item {
  padding: 16px 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
}
.compare-item h4 {
  font-size: 13px;
  color: var(--text-tertiary);
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.compare-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.ctag {
  padding: 5px 12px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  font-size: 12px;
  color: var(--text-secondary);
  font-family: var(--font-mono);
}

@media (max-width: 1024px) {
  .manuals-grid, .grid-3, .modules-row {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .manuals-grid, .grid-3, .modules-row {
    grid-template-columns: 1fr;
  }
  .manual-card {
    flex-direction: column;
    text-align: center;
  }
}
</style>
