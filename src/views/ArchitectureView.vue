<template>
  <div class="architecture-view">
    <div class="page-title">
      <h1>系统架构图</h1>
      <p>可视化展示 C3D Toolkit 的分层架构与模块依赖关系，点击模块查看详情</p>
    </div>

    <!-- View Tabs -->
    <div class="view-tabs">
      <button
        v-for="tab in viewTabs"
        :key="tab.id"
        class="tab-btn"
        :class="{ active: activeView === tab.id }"
        @click="activeView = tab.id"
      >
        <span v-html="tab.icon"></span>
        {{ tab.name }}
      </button>
    </div>

    <!-- Layered Architecture View -->
    <div v-if="activeView === 'layered'" class="layered-view">
      <div class="arch-diagram">
        <div
          v-for="(layer, lIndex) in architectureLayers"
          :key="layer.id"
          class="arch-layer"
          :style="{ '--layer-color': layer.color }"
        >
          <div class="layer-label">
            <span class="layer-num">L{{ lIndex + 1 }}</span>
            <div>
              <h3>{{ layer.name }}</h3>
              <p>{{ layer.description }}</p>
            </div>
          </div>
          <div class="layer-modules">
            <div
              v-for="item in layer.items"
              :key="item"
              class="arch-module-box"
              :class="{ clickable: getModuleByItem(item) }"
              @click="handleModuleClick(item)"
            >
              <span class="module-dot" :style="{ background: layer.color }"></span>
              {{ item }}
            </div>
          </div>
        </div>
      </div>

      <!-- Dependency explanation -->
      <div class="dependency-info card">
        <h3>数据流与依赖关系</h3>
        <div class="dep-flow">
          <div class="dep-step">
            <span class="dep-num">1</span>
            <div>
              <h4>应用调用 API</h4>
              <p>上层应用通过 C++ 类库接口调用四大核心模块的功能</p>
            </div>
          </div>
          <div class="dep-arrow">→</div>
          <div class="dep-step">
            <span class="dep-num">2</span>
            <div>
              <h4>核心模块协作</h4>
              <p>Modeler 提供几何数据，Solver 求解约束，Converter 处理格式，Vision 负责渲染</p>
            </div>
          </div>
          <div class="dep-arrow">→</div>
          <div class="dep-step">
            <span class="dep-num">3</span>
            <div>
              <h4>基础层支撑</h4>
              <p>所有模块依赖统一的数学库、容器、智能指针和序列化基础设施</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Module Relationship View -->
    <div v-if="activeView === 'relationship'" class="relationship-view">
      <div class="rel-diagram">
        <!-- Central hub -->
        <div class="rel-center">
          <div class="rel-center-icon">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" stroke="url(#centerGrad)" stroke-width="2"/>
              <defs>
                <linearGradient id="centerGrad" x1="4" y1="2" x2="28" y2="30">
                  <stop stop-color="#3b82f6"/><stop offset="1" stop-color="#06b6d4"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h3>C3D Model</h3>
          <p>核心数据模型</p>
        </div>

        <!-- Four modules around -->
        <div
          v-for="(mod, index) in coreModules"
          :key="mod.id"
          class="rel-node"
          :class="'pos-' + index"
          :style="{ '--mod-color': mod.color }"
          @click="$router.push(`/module/${mod.id}`)"
        >
          <div class="rel-node-icon" :style="{ background: mod.color + '20', color: mod.color }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" v-html="moduleIcons[mod.icon]"></svg>
          </div>
          <h4>{{ mod.name }}</h4>
          <p>{{ mod.chineseName }}</p>
        </div>

        <!-- Connection lines (SVG) -->
        <svg class="rel-connections" viewBox="0 0 600 500" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.6"/>
              <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.1"/>
            </linearGradient>
          </defs>
          <line x1="300" y1="250" x2="150" y2="120" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.5"/>
          <line x1="300" y1="250" x2="450" y2="120" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.5"/>
          <line x1="300" y1="250" x2="150" y2="380" stroke="#10b981" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.5"/>
          <line x1="300" y1="250" x2="450" y2="380" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.5"/>
        </svg>
      </div>

      <div class="rel-legend">
        <div class="legend-item" v-for="mod in coreModules" :key="mod.id">
          <span class="legend-dot" :style="{ background: mod.color }"></span>
          <span>{{ mod.name }} - {{ mod.chineseName }}</span>
        </div>
      </div>
    </div>

    <!-- Data Flow View -->
    <div v-if="activeView === 'dataflow'" class="dataflow-view">
      <div class="flow-container">
        <div class="flow-stage" v-for="(stage, index) in dataFlowStages" :key="stage.id">
          <div class="stage-header" :style="{ '--stage-color': stage.color }">
            <span class="stage-num">{{ index + 1 }}</span>
            <h3>{{ stage.name }}</h3>
          </div>
          <div class="stage-content">
            <p>{{ stage.description }}</p>
            <div class="stage-components">
              <span class="stage-comp" v-for="comp in stage.components" :key="comp" :style="{ borderColor: stage.color + '50' }">
                {{ comp }}
              </span>
            </div>
          </div>
          <div v-if="index < dataFlowStages.length - 1" class="stage-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { coreModules, architectureLayers } from '@/data/architecture.js'

const router = useRouter()
const activeView = ref('layered')

const viewTabs = [
  { id: 'layered', name: '分层架构', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><rect x="3" y="3" width="18" height="5"/><rect x="3" y="10" width="18" height="5"/><rect x="3" y="17" width="18" height="5"/></svg>' },
  { id: 'relationship', name: '模块关系', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 7l3 3M17 7l-3 3M7 17l3-3M17 17l-3-3"/></svg>' },
  { id: 'dataflow', name: '数据流', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M4 7h16M4 12h16M4 17h16"/><path d="M8 3v4M16 9v4M8 15v4"/></svg>' }
]

const moduleIcons = {
  cube: '<path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>',
  puzzle: '<path d="M12 2v4m0 12v4M2 12h4m12 0h4M7.5 7.5l2.83 2.83m3.34 3.34l2.83 2.83M16.5 7.5l-2.83 2.83m-3.34 3.34l-2.83 2.83"/>',
  exchange: '<path d="M17 1l4 4-4 4M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 01-4 4H3"/>',
  eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
}

const dataFlowStages = [
  {
    id: 'input',
    name: '数据输入',
    color: '#3b82f6',
    description: '通过 API 接收建模指令或从外部文件导入几何数据',
    components: ['Modeler API', 'Converter 导入', 'STEP/IGES 解析', '参数化指令']
  },
  {
    id: 'modeling',
    name: '几何建模',
    color: '#8b5cf6',
    description: 'C3D Modeler 执行布尔运算、扫掠、放样等操作，构建 B-Rep 模型',
    components: ['B-Rep 拓扑', 'NURBS 曲面', '布尔运算', '特征操作']
  },
  {
    id: 'solving',
    name: '约束求解',
    color: '#10b981',
    description: 'C3D Solver 求解几何约束，确保参数化关系得到满足',
    components: ['2D 草图约束', '3D 装配约束', '数值迭代求解', '冲突诊断']
  },
  {
    id: 'computation',
    name: '几何计算',
    color: '#f59e0b',
    description: '进行三角剖分、惯性计算、碰撞检测等派生计算',
    components: ['三角剖分', '质量属性', '碰撞检测', '投影映射']
  },
  {
    id: 'output',
    name: '输出与渲染',
    color: '#ec4899',
    description: '通过 Vision 渲染显示，或通过 Converter 导出为各种格式',
    components: ['Vision 渲染', '场景图管理', '格式导出', 'STL/STEP 输出']
  }
]

const getModuleByItem = (item) => {
  return coreModules.find(m => item.includes(m.name.replace('C3D ', '')))
}

const handleModuleClick = (item) => {
  const mod = getModuleByItem(item)
  if (mod) router.push(`/module/${mod.id}`)
}
</script>

<style scoped>
.page-title {
  margin-bottom: 32px;
}
.page-title h1 {
  font-size: 1.75rem;
  margin-bottom: 8px;
}
.page-title p {
  color: var(--text-tertiary);
  font-size: 14px;
}

.view-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  background: var(--bg-secondary);
  padding: 6px;
  border-radius: var(--radius-md);
  width: fit-content;
}
.tab-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border-radius: var(--radius-sm);
  transition: all 0.2s;
  font-family: var(--font-sans);
}
.tab-btn:hover {
  color: var(--text-primary);
}
.tab-btn.active {
  background: var(--accent-primary);
  color: white;
}

/* Layered View */
.layered-view {
  animation: fadeIn 0.3s ease;
}
.arch-diagram {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.arch-layer {
  display: flex;
  align-items: stretch;
  gap: 24px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-left: 4px solid var(--layer-color);
  border-radius: var(--radius-lg);
  padding: 20px 24px;
  position: relative;
}
.arch-layer + .arch-layer {
  margin-top: 8px;
}
.layer-label {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 200px;
  flex-shrink: 0;
}
.layer-num {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--layer-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}
.layer-label h3 {
  font-size: 1rem;
  margin-bottom: 2px;
}
.layer-label p {
  font-size: 12px;
  color: var(--text-tertiary);
  margin: 0;
}
.layer-modules {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-content: center;
}
.arch-module-box {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 13px;
  color: var(--text-secondary);
  transition: all 0.2s;
}
.arch-module-box.clickable {
  cursor: pointer;
}
.arch-module-box.clickable:hover {
  background: var(--bg-elevated);
  color: var(--text-primary);
  border-color: var(--layer-color);
}
.module-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.dependency-info {
  margin-top: 32px;
}
.dependency-info h3 {
  margin-bottom: 20px;
  font-size: 1.1rem;
}
.dep-flow {
  display: flex;
  align-items: stretch;
  gap: 12px;
}
.dep-step {
  flex: 1;
  display: flex;
  gap: 12px;
  padding: 16px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
}
.dep-num {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--accent-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  flex-shrink: 0;
}
.dep-step h4 {
  font-size: 14px;
  margin-bottom: 4px;
}
.dep-step p {
  font-size: 12px;
  color: var(--text-tertiary);
  margin: 0;
  line-height: 1.5;
}
.dep-arrow {
  display: flex;
  align-items: center;
  color: var(--text-tertiary);
  font-size: 20px;
}

/* Relationship View */
.relationship-view {
  animation: fadeIn 0.3s ease;
}
.rel-diagram {
  position: relative;
  width: 100%;
  max-width: 700px;
  height: 520px;
  margin: 0 auto 32px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  overflow: hidden;
}
.rel-connections {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.rel-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
}
.rel-center-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 12px;
  animation: float 3s ease-in-out infinite;
}
.rel-center-icon svg {
  width: 100%;
  height: 100%;
}
.rel-center h3 {
  font-size: 1.1rem;
  margin-bottom: 4px;
}
.rel-center p {
  font-size: 12px;
  color: var(--text-tertiary);
  margin: 0;
}
.rel-node {
  position: absolute;
  width: 160px;
  padding: 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 2;
}
.rel-node:hover {
  border-color: var(--mod-color);
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}
.rel-node.pos-0 { top: 40px; left: 60px; }
.rel-node.pos-1 { top: 40px; right: 60px; }
.rel-node.pos-2 { bottom: 40px; left: 60px; }
.rel-node.pos-3 { bottom: 40px; right: 60px; }
.rel-node-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;
}
.rel-node-icon svg {
  width: 24px;
  height: 24px;
}
.rel-node h4 {
  font-size: 14px;
  margin-bottom: 2px;
}
.rel-node p {
  font-size: 11px;
  color: var(--text-tertiary);
  margin: 0;
}
.rel-legend {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-secondary);
}
.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

/* Dataflow View */
.dataflow-view {
  animation: fadeIn 0.3s ease;
}
.flow-container {
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 800px;
  margin: 0 auto;
}
.flow-stage {
  position: relative;
}
.stage-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}
.stage-num {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--stage-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
}
.stage-header h3 {
  font-size: 1.05rem;
}
.stage-content {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-left: 3px solid var(--stage-color);
  border-radius: var(--radius-lg);
  padding: 16px 20px;
  margin-left: 16px;
}
.stage-content p {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 12px;
}
.stage-components {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.stage-comp {
  padding: 4px 10px;
  border: 1px solid;
  border-radius: 12px;
  font-size: 12px;
  color: var(--text-secondary);
  background: var(--bg-tertiary);
}
.stage-arrow {
  display: flex;
  justify-content: center;
  padding: 8px 0;
  color: var(--text-tertiary);
  margin-left: 16px;
}
.stage-arrow svg {
  width: 20px;
  height: 20px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@media (max-width: 768px) {
  .arch-layer {
    flex-direction: column;
    gap: 12px;
  }
  .layer-label {
    min-width: auto;
  }
  .dep-flow {
    flex-direction: column;
  }
  .dep-arrow {
    transform: rotate(90deg);
    justify-content: center;
  }
  .rel-diagram {
    height: auto;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .rel-center, .rel-node {
    position: relative;
    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;
    transform: none !important;
  }
  .rel-connections {
    display: none;
  }
}
</style>
