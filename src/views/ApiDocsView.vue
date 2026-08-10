<template>
  <div class="api-docs-view">
    <div class="page-title">
      <h1>API 文档</h1>
      <p>完整的 C3D Toolkit C++ API 参考文档，包含近4000个类、函数和类型</p>
    </div>

    <!-- Quick navigation -->
    <div class="api-nav">
      <div class="nav-group">
        <span class="nav-label">快速导航</span>
        <div class="nav-links">
          <a href="/api-docs/index.html" target="docFrame" class="nav-link active" @click="setActive('index')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            首页
          </a>
          <a href="/api-docs/modules.html" target="docFrame" class="nav-link" @click="setActive('modules')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
            模块
          </a>
          <a href="/api-docs/annotated.html" target="docFrame" class="nav-link" @click="setActive('classes')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
            类列表
          </a>
          <a href="/api-docs/classes.html" target="docFrame" class="nav-link" @click="setActive('hierarchy')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/></svg>
            类继承
          </a>
          <a href="/api-docs/files.html" target="docFrame" class="nav-link" @click="setActive('files')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
            头文件
          </a>
          <a href="/api-docs/functions.html" target="docFrame" class="nav-link" @click="setActive('functions')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
            函数
          </a>
        </div>
      </div>
      <div class="nav-group">
        <span class="nav-label">核心模块</span>
        <div class="nav-links">
          <a v-for="mod in coreModules" :key="mod.id" :href="mod.docUrl" target="docFrame" class="nav-link" :style="{ '--link-color': mod.color }" @click="setActive(mod.id)">
            <span class="link-dot" :style="{ background: mod.color }"></span>
            {{ mod.name.replace('C3D ', '') }}
          </a>
        </div>
      </div>
    </div>

    <!-- Doc iframe -->
    <div class="doc-container">
      <div class="doc-toolbar">
        <div class="doc-url" id="docUrlDisplay">/api-docs/index.html</div>
        <div class="doc-actions">
          <button class="doc-btn" @click="refreshDoc" title="刷新">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <path d="M23 4v6h-6M1 20v-6h6"/>
              <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
            </svg>
          </button>
          <button class="doc-btn" @click="openInNewTab" title="新标签页打开">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <path d="M15 3h6v6M10 14L21 3"/>
            </svg>
          </button>
        </div>
      </div>
      <iframe
        ref="docFrame"
        name="docFrame"
        src="/api-docs/index.html"
        class="doc-iframe"
        @load="onIframeLoad"
      ></iframe>
    </div>

    <!-- Stats -->
    <div class="api-stats">
      <div class="stat-item">
        <span class="stat-num">~4000</span>
        <span class="stat-text">文档页面</span>
      </div>
      <div class="stat-item">
        <span class="stat-num">78+</span>
        <span class="stat-text">功能模块</span>
      </div>
      <div class="stat-item">
        <span class="stat-num">C++</span>
        <span class="stat-text">开发语言</span>
      </div>
      <div class="stat-item">
        <span class="stat-num">Doxygen</span>
        <span class="stat-text">文档生成</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { coreModules } from '@/data/architecture.js'

const docFrame = ref(null)
const activeNav = ref('index')

const setActive = (id) => {
  activeNav.value = id
}

const refreshDoc = () => {
  if (docFrame.value) {
    docFrame.value.src = docFrame.value.src
  }
}

const openInNewTab = () => {
  if (docFrame.value) {
    window.open(docFrame.value.src, '_blank')
  }
}

const onIframeLoad = () => {
  try {
    const url = docFrame.value?.contentWindow?.location?.pathname
    if (url) {
      document.getElementById('docUrlDisplay').textContent = url
    }
  } catch (e) {
    // 跨域无法访问，忽略
  }
}
</script>

<style scoped>
.page-title { margin-bottom: 24px; }
.page-title h1 { font-size: 1.75rem; margin-bottom: 8px; }
.page-title p { color: var(--text-tertiary); font-size: 14px; }

.api-nav {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
}
.nav-group {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.nav-label {
  font-size: 12px;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  min-width: 70px;
}
.nav-links {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 12px;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
}
.nav-link:hover {
  border-color: var(--link-color, var(--border-light));
  color: var(--text-primary);
}
.nav-link.active {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  color: white;
}
.link-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.doc-container {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 24px;
}
.doc-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
}
.doc-url {
  font-size: 12px;
  font-family: var(--font-mono);
  color: var(--text-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}
.doc-actions {
  display: flex;
  gap: 6px;
}
.doc-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  color: var(--text-tertiary);
  cursor: pointer;
  transition: all 0.2s;
}
.doc-btn:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}
.doc-iframe {
  width: 100%;
  height: 70vh;
  min-height: 500px;
  border: none;
  background: white;
}

.api-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
}
.stat-num {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: var(--font-mono);
  color: var(--accent-primary-light);
  margin-bottom: 4px;
}
.stat-text {
  font-size: 12px;
  color: var(--text-tertiary);
}

@media (max-width: 768px) {
  .api-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  .nav-group {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>
