<template>
  <div class="learning-view">
    <div class="page-title">
      <h1>学习路径</h1>
      <p>从几何建模基础到 C3D Toolkit 高级特性，循序渐进的学习指南</p>
    </div>

    <!-- Progress overview -->
    <div class="progress-overview card">
      <div class="progress-header">
        <h3>学习进度总览</h3>
        <span class="progress-text">{{ completedStages }}/{{ learningStages.length }} 阶段</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
      </div>
      <div class="progress-stages">
        <div
          v-for="(stage, i) in learningStages"
          :key="stage.id"
          class="progress-dot"
          :class="{ done: i < completedStages, current: i === completedStages }"
          @click="scrollToStage(stage.id)"
        >
          <span>{{ i + 1 }}</span>
        </div>
      </div>
    </div>

    <!-- Learning stages -->
    <div class="stages-container">
      <div
        v-for="(stage, index) in learningStages"
        :key="stage.id"
        :id="stage.id"
        class="stage-card"
        :style="{ '--stage-color': stage.color }"
      >
        <div class="stage-left">
          <div class="stage-number" :style="{ background: stage.color }">{{ index + 1 }}</div>
          <div class="stage-connector" v-if="index < learningStages.length - 1"></div>
        </div>
        <div class="stage-content">
          <div class="stage-header">
            <h2>{{ stage.title }}</h2>
            <span class="stage-duration">{{ stage.duration }}</span>
          </div>
          <p class="stage-desc">{{ stage.description }}</p>

          <div class="stage-topics">
            <h4>核心知识点</h4>
            <div class="topics-grid">
              <div v-for="topic in stage.topics" :key="topic" class="topic-item">
                <span class="topic-dot" :style="{ background: stage.color }"></span>
                {{ topic }}
              </div>
            </div>
          </div>

          <div class="stage-resources" v-if="stage.resources && stage.resources.length">
            <h4>推荐资源</h4>
            <div class="resource-links">
              <a
                v-for="res in stage.resources"
                :key="res.name"
                :href="res.url"
                :target="res.external ? '_blank' : '_self'"
                class="resource-link"
              >
                <span class="resource-icon" v-html="res.icon"></span>
                <span class="resource-name">{{ res.name }}</span>
                <span class="resource-type">{{ res.type }}</span>
              </a>
            </div>
          </div>

          <div class="stage-output">
            <span class="output-label">学习产出</span>
            <span class="output-text">{{ stage.output }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Learning tips -->
    <div class="tips-section card">
      <h3>学习建议</h3>
      <div class="tips-grid">
        <div class="tip-item">
          <div class="tip-icon">💡</div>
          <h4>理论与实践结合</h4>
          <p>几何建模内核概念抽象，建议配合实际 CAD 软件操作来理解 B-Rep、布尔运算等概念。</p>
        </div>
        <div class="tip-item">
          <div class="tip-icon">📐</div>
          <h4>数学基础先行</h4>
          <p>NURBS、计算几何等需要线性代数和微积分基础，建议先巩固数学再深入内核。</p>
        </div>
        <div class="tip-item">
          <div class="tip-icon">🔍</div>
          <h4>对比学习</h4>
          <p>可对比 OpenCASCADE、Parasolid 等其他几何内核，理解不同架构设计的取舍。</p>
        </div>
        <div class="tip-item">
          <div class="tip-icon">🧪</div>
          <h4>动手实验</h4>
          <p>如有 C3D SDK 授权，通过编写简单建模程序来理解 API 设计和数据结构。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const completedStages = ref(0)

const progressPercent = computed(() => (completedStages.value / learningStages.length) * 100)

const scrollToStage = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const docIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>'
const apiIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>'
const pdfIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>'
const linkIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>'

const learningStages = [
  {
    id: 'stage-1',
    title: '几何建模基础',
    duration: '1-2 周',
    color: '#3b82f6',
    description: '建立对几何建模内核的基本认知，理解 CAD 软件背后的核心概念。',
    topics: [
      '什么是几何建模内核（Geometric Kernel）',
      '边界表示法 B-Rep 与 CSG 的区别',
      '拓扑结构：体-壳-面-环-边-顶点',
      '参数化建模与直接建模',
      '几何精度与容差建模'
    ],
    resources: [
      { name: 'C3D Modeler 模块概览', url: '/module/modeler', type: '架构分析', icon: docIcon },
      { name: '拓扑对象 API', url: '/api-docs/group___topology___items.html', type: 'API 文档', icon: apiIcon, external: true }
    ],
    output: '能够解释 B-Rep 模型的拓扑层级结构'
  },
  {
    id: 'stage-2',
    title: '曲线与曲面数学',
    duration: '2-3 周',
    color: '#8b5cf6',
    description: '深入理解几何内核的数学基础，掌握参数化曲线曲面的表示方法。',
    topics: [
      '参数曲线与参数曲面概念',
      '贝塞尔曲线与 B 样条曲线',
      'NURBS 曲线与曲面原理',
      '常见解析曲面（平面、圆柱、圆锥、球面）',
      '曲面求交与投影算法'
    ],
    resources: [
      { name: '3D 曲线模块', url: '/api-docs/group___curves__3_d.html', type: 'API 文档', icon: apiIcon, external: true },
      { name: '曲面模块', url: '/api-docs/group___surfaces.html', type: 'API 文档', icon: apiIcon, external: true }
    ],
    output: '理解 NURBS 的控制点、权因子与节点向量'
  },
  {
    id: 'stage-3',
    title: '实体建模算法',
    duration: '2-3 周',
    color: '#10b981',
    description: '学习实体建模的核心操作算法，理解布尔运算、扫掠、放样等的实现原理。',
    topics: [
      '布尔运算（并、交、差）原理',
      '扫掠（Sweep）与旋转（Revolve）',
      '放样（Loft）与混合（Blend）',
      '圆角与倒角算法',
      '抽壳与偏置操作'
    ],
    resources: [
      { name: '实体建模 API', url: '/api-docs/group___solid___modeling.html', type: 'API 文档', icon: apiIcon, external: true },
      { name: '基础算法模块', url: '/api-docs/group___base___algorithms.html', type: 'API 文档', icon: apiIcon, external: true }
    ],
    output: '能够描述布尔运算的基本流程'
  },
  {
    id: 'stage-4',
    title: '约束求解引擎',
    duration: '1-2 周',
    color: '#f59e0b',
    description: '理解参数化设计中的约束求解机制，掌握草图约束与装配约束的原理。',
    topics: [
      '几何约束的类型与表示',
      '约束图与自由度分析',
      '数值求解方法（牛顿迭代）',
      '过约束与欠约束检测',
      '2D 草图约束与 3D 装配约束'
    ],
    resources: [
      { name: 'C3D Solver 概览', url: '/module/solver', type: '架构分析', icon: docIcon },
      { name: '2D 约束 API', url: '/api-docs/group___constraints2_d___a_p_i.html', type: 'API 文档', icon: apiIcon, external: true }
    ],
    output: '理解约束求解器的工作流程'
  },
  {
    id: 'stage-5',
    title: '数据交换与格式',
    duration: '1-2 周',
    color: '#ec4899',
    description: '学习 CAD 数据交换标准，理解不同格式之间的转换机制。',
    topics: [
      'STEP 标准（AP203/AP214/AP242）',
      'IGES 格式结构',
      'Parasolid 与 ACIS 专有格式',
      '三角网格格式（STL/VRML）',
      '数据转换中的精度与容错'
    ],
    resources: [
      { name: 'C3D Converter 概览', url: '/module/converter', type: '架构分析', icon: docIcon },
      { name: 'STEP 转换器', url: '/api-docs/group___s_t_e_p___exchange.html', type: 'API 文档', icon: apiIcon, external: true }
    ],
    output: '了解主流 CAD 格式的特点与适用场景'
  },
  {
    id: 'stage-6',
    title: '可视化与渲染',
    duration: '1-2 周',
    color: '#06b6d4',
    description: '学习 3D 可视化引擎的架构，理解从精确几何到渲染图元的转换过程。',
    topics: [
      '场景图（Scene Graph）设计',
      'B-Rep 到三角网格的离散化',
      '多渲染模式（线框/消隐/着色）',
      '相机控制与交互操作',
      '拾取与选择机制'
    ],
    resources: [
      { name: 'C3D Vision 概览', url: '/module/vision', type: '架构分析', icon: docIcon },
      { name: '场景图 API', url: '/api-docs/group___vision___scene_graph.html', type: 'API 文档', icon: apiIcon, external: true }
    ],
    output: '理解几何内核与渲染引擎的协作方式'
  },
  {
    id: 'stage-7',
    title: '高级主题与架构',
    duration: '持续学习',
    color: '#64748b',
    description: '深入 C3D Toolkit 的架构设计，探索高级特性与性能优化。',
    topics: [
      '智能指针与内存管理',
      '序列化与持久化机制',
      '多线程与并行计算',
      '碰撞检测与距离计算',
      '质量属性与惯性计算',
      '与其他内核的架构对比'
    ],
    resources: [
      { name: '基础工具库', url: '/api-docs/group___base___tools.html', type: 'API 文档', icon: apiIcon, external: true },
      { name: '官方英文手册', url: '/pdf/2023-02-C3D_Manual_English.pdf', type: 'PDF 手册', icon: pdfIcon, external: true }
    ],
    output: '形成对几何内核架构的系统性理解'
  }
]
</script>

<style scoped>
.page-title { margin-bottom: 28px; }
.page-title h1 { font-size: 1.75rem; margin-bottom: 8px; }
.page-title p { color: var(--text-tertiary); font-size: 14px; }

.progress-overview {
  margin-bottom: 32px;
}
.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.progress-header h3 { font-size: 1rem; }
.progress-text {
  font-size: 13px;
  color: var(--text-tertiary);
  font-family: var(--font-mono);
}
.progress-bar {
  height: 6px;
  background: var(--bg-tertiary);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 16px;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-cyan));
  border-radius: 3px;
  transition: width 0.5s ease;
}
.progress-stages {
  display: flex;
  justify-content: space-between;
}
.progress-dot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--bg-tertiary);
  border: 2px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-tertiary);
  cursor: pointer;
  transition: all 0.3s;
}
.progress-dot.done {
  background: var(--accent-green);
  border-color: var(--accent-green);
  color: white;
}
.progress-dot.current {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  color: white;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
}

.stages-container {
  position: relative;
  margin-bottom: 32px;
}
.stage-card {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
.stage-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}
.stage-number {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
.stage-connector {
  width: 2px;
  flex: 1;
  background: var(--border-color);
  margin: 8px 0;
  min-height: 20px;
}
.stage-content {
  flex: 1;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 24px;
  border-left: 3px solid var(--stage-color);
}
.stage-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.stage-header h2 {
  font-size: 1.2rem;
}
.stage-duration {
  font-size: 12px;
  padding: 4px 10px;
  background: var(--stage-color);
  color: white;
  border-radius: 12px;
  font-weight: 500;
}
.stage-desc {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 16px;
  line-height: 1.6;
}
.stage-topics {
  margin-bottom: 16px;
}
.stage-topics h4, .stage-resources h4 {
  font-size: 13px;
  color: var(--text-tertiary);
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.topics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}
.topic-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-secondary);
}
.topic-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}
.resource-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}
.resource-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 13px;
  transition: all 0.2s;
}
.resource-link:hover {
  border-color: var(--stage-color);
  color: var(--text-primary);
}
.resource-icon {
  color: var(--stage-color);
  display: flex;
}
.resource-type {
  font-size: 11px;
  padding: 2px 6px;
  background: var(--bg-tertiary);
  border-radius: 8px;
  color: var(--text-tertiary);
}
.stage-output {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: var(--radius-md);
}
.output-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--accent-green);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.output-text {
  font-size: 13px;
  color: var(--text-secondary);
}

.tips-section h3 {
  font-size: 1.1rem;
  margin-bottom: 20px;
}
.tips-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.tip-item {
  padding: 16px;
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
}
.tip-icon {
  font-size: 24px;
  margin-bottom: 8px;
}
.tip-item h4 {
  font-size: 14px;
  margin-bottom: 6px;
}
.tip-item p {
  font-size: 12px;
  color: var(--text-tertiary);
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .topics-grid, .tips-grid {
    grid-template-columns: 1fr;
  }
  .stage-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>
