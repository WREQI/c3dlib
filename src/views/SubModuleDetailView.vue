<template>
  <div class="submodule-detail" v-if="subModule">
    <!-- 面包屑 -->
    <div class="breadcrumb">
      <router-link to="/modules" class="breadcrumb-link">模块分析</router-link>
      <span class="breadcrumb-sep">/</span>
      <router-link :to="`/module/${module.id}`" class="breadcrumb-link">{{ module.name }}</router-link>
      <span class="breadcrumb-sep" v-if="subModule.grandparent">/</span>
      <span class="breadcrumb-current" v-if="subModule.grandparent">{{ subModule.grandparent.name }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ subModule.name }}</span>
    </div>

    <!-- 头部 -->
    <div class="detail-header" :style="{ '--mod-color': module.color }">
      <div class="header-main">
        <h1>{{ subModule.name }}</h1>
        <p class="header-desc">{{ subModule.description || subModule.desc }}</p>
        <div class="header-meta">
          <span class="meta-tag" :style="{ background: module.color + '15', color: module.color, borderColor: module.color + '40' }">
            {{ module.chineseName }}
          </span>
          <span class="meta-tag" :class="'status-' + implementationStatus">
            {{ statusText }}
          </span>
        </div>
      </div>
    </div>

    <!-- 学习要点 -->
    <div class="section-card">
      <h2 class="card-title">学习要点</h2>
      <div class="learning-points">
        <div class="point-item" v-for="(point, i) in learningPoints" :key="i">
          <span class="point-num">{{ i + 1 }}</span>
          <div class="point-content">
            <h4>{{ point.title }}</h4>
            <p>{{ point.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 核心类与实现进度 -->
    <div class="section-card">
      <h2 class="card-title">核心类与实现进度</h2>
      <div v-if="coreClasses.length" class="class-list">
        <div v-for="cls in coreClasses" :key="cls.name" class="class-item">
          <div class="class-info">
            <code class="class-name">{{ cls.name }}</code>
            <p class="class-desc">{{ cls.desc }}</p>
          </div>
          <div class="class-status">
            <span v-if="cls.implemented" class="status-badge implemented">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" width="12" height="12"><path d="M5 13l4 4L19 7"/></svg>
              已实现
            </span>
            <span v-else class="status-badge pending">待实现</span>
          </div>
        </div>
      </div>
      <div v-else class="empty-classes">
        <p>该子模块的核心类清单正在整理中</p>
        <p class="hint">可参考底部原始 API 文档了解完整类列表</p>
      </div>
    </div>

    <!-- 相关子模块 -->
    <div class="section-card" v-if="relatedSubModules.length">
      <h2 class="card-title">相关子模块</h2>
      <div class="related-grid">
        <router-link
          v-for="rel in relatedSubModules"
          :key="rel.id"
          :to="`/module/${module.id}/${rel.id}`"
          class="related-card"
        >
          <h4>{{ rel.name }}</h4>
          <p>{{ rel.description || rel.desc }}</p>
        </router-link>
      </div>
    </div>

    <!-- 原始文档引用（只有这里才放） -->
    <div class="section-card doc-reference">
      <h2 class="card-title">原始 API 文档</h2>
      <p class="doc-hint">以下为 C3D Toolkit 官方 Doxygen 文档，包含完整的类定义、方法签名和参数说明。</p>
      <a :href="subModule.docUrl" target="_blank" class="doc-link-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
        在 API 文档浏览器中打开
      </a>
    </div>
  </div>

  <div v-else class="not-found">
    <h2>子模块未找到</h2>
    <router-link to="/modules" class="btn btn-primary">返回模块列表</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { findModule, findSubModule, coreModules } from '@/data/architecture.js'

const route = useRoute()

const module = computed(() => findModule(route.params.moduleId))
const subModule = computed(() => findSubModule(route.params.moduleId, route.params.subId))

// 实现状态：根据是否有已实现的类来判断
const implementationStatus = computed(() => {
  if (!subModule.value) return 'unknown'
  const implemented = coreClasses.value.filter(c => c.implemented)
  if (implemented.length > 0 && implemented.length === coreClasses.value.length) return 'done'
  if (implemented.length > 0) return 'progress'
  return 'pending'
})

const statusText = computed(() => {
  switch (implementationStatus.value) {
    case 'done': return '已完成实现'
    case 'progress': return '实现中'
    default: return '待实现'
  }
})

// 学习要点（根据子模块 id 动态生成）
const learningPoints = computed(() => {
  const id = subModule.value?.id
  const pointsMap = {
    'math-base-3d': [
      { title: '笛卡尔点与向量', desc: '理解 MbCartPoint3D 与 MbVector3D 的区别，点是位置、向量是方向和大小' },
      { title: '变换矩阵', desc: '掌握 4x4 齐次变换矩阵，平移/旋转/缩放的矩阵表示与复合运算' },
      { title: '局部坐标系', desc: '理解 MbAxis3D 定义的局部坐标系，世界坐标与局部坐标的相互转换' },
      { title: '坐标系差异', desc: 'C3D 右手系 Z-up 与 Babylon.js 左手系 Y-up 的转换，叉积等伪向量的手性处理' }
    ],
    'curves-3d': [
      { title: '参数曲线概念', desc: '理解曲线的参数化表示 P(t)，参数域与几何域的映射关系' },
      { title: '曲线基类接口', desc: '掌握 MbCurve3D 抽象基类的核心方法：Point(t)、Derive1(t)、Derive2(t)' },
      { title: '基本曲线类型', desc: '直线、圆、圆弧、椭圆的参数方程与几何性质' },
      { title: 'NURBS 曲线', desc: '理解控制点、节点向量、权重、阶数的概念，以及 NURBS 的局部修改性' }
    ],
    'surfaces': [
      { title: '参数曲面概念', desc: '理解曲面的双参数化表示 S(u,v)，参数域与三维空间的映射' },
      { title: '曲面基类接口', desc: '掌握 MbSurface 抽象基类：Point(u,v)、DeriveU、DeriveV、法向量计算' },
      { title: '基本曲面类型', desc: '平面、圆柱面、圆锥面、球面、环面的参数方程' },
      { title: 'NURBS 曲面', desc: '双变量 NURBS 曲面，控制点网格与节点向量的二维扩展' }
    ],
    'topology-items': [
      { title: 'B-Rep 数据结构', desc: '理解边界表示法：体→壳→面→环→边→顶点的拓扑层级' },
      { title: '拓扑与几何的分离', desc: '拓扑元素（MbEdge）引用几何曲线（MbCurve3D），方向用 orientation 标记' },
      { title: '邻接关系', desc: '边共享顶点、面共享边、壳的闭合性判断' },
      { title: '欧拉操作', desc: '保持拓扑有效性的基本操作：MEV、MEF、KFMRH 等' }
    ],
    'solid-modeling': [
      { title: '扫掠与拉伸', desc: '将二维轮廓沿路径或方向扫掠生成三维实体' },
      { title: '旋转体', desc: '轮廓绕轴旋转生成回转体' },
      { title: '布尔运算', desc: '并集、交集、差集的几何求交与拓扑合并' },
      { title: '抽壳与倒角', desc: '等距偏移生成薄壁实体，边/面的圆角与倒角' }
    ]
  }
  // 默认通用要点
  return pointsMap[id] || [
    { title: '概念理解', desc: `理解 ${subModule.value?.name || '该模块'} 在 C3D 内核中的定位与作用` },
    { title: '接口设计', desc: '分析核心类的继承关系与公共方法签名' },
    { title: '算法原理', desc: '掌握关键算法的数学原理与实现思路' },
    { title: '验证对比', desc: '用 OpenCascade.js 作为金标准，验证我们的实现结果' }
  ]
})

// 核心类清单（根据子模块 id 动态生成）
const coreClasses = computed(() => {
  const id = subModule.value?.id
  const classMap = {
    'math-base-3d': [
      { name: 'MbCartPoint3D', desc: '3D 笛卡尔点，支持距离计算、变换、Babylon 互转', implemented: true },
      { name: 'MbVector3D', desc: '3D 向量，支持加减、点积、叉积、归一化、夹角', implemented: true },
      { name: 'MbMatrix3D', desc: '4x4 变换矩阵，平移/旋转/缩放/乘法/求逆/转置', implemented: true },
      { name: 'MbAxis3D', desc: '局部坐标系，原点+三方向，世界/局部坐标转换', implemented: true },
      { name: 'MbCartPoint', desc: '2D 笛卡尔点', implemented: false },
      { name: 'MbVector', desc: '2D 向量', implemented: false }
    ],
    'curves-3d': [
      { name: 'MbCurve3D', desc: '3D 曲线抽象基类，定义 Point(t)/Derive1/Derive2 接口', implemented: false },
      { name: 'MbLine3D', desc: '3D 无限直线', implemented: false },
      { name: 'MbLineSegment3D', desc: '3D 线段', implemented: false },
      { name: 'MbArc3D', desc: '3D 圆弧', implemented: false },
      { name: 'MbBezier3D', desc: '3D 贝塞尔曲线', implemented: false },
      { name: 'MbNurbs3D', desc: '3D NURBS 曲线', implemented: false }
    ],
    'surfaces': [
      { name: 'MbSurface', desc: '曲面抽象基类，定义 Point(u,v)/法向量接口', implemented: false },
      { name: 'MbPlane', desc: '平面', implemented: false },
      { name: 'MbCylinderSurface', desc: '圆柱面', implemented: false },
      { name: 'MbConeSurface', desc: '圆锥面', implemented: false },
      { name: 'MbSphereSurface', desc: '球面', implemented: false },
      { name: 'MbNurbsSurface', desc: 'NURBS 曲面', implemented: false }
    ],
    'topology-items': [
      { name: 'MbItem', desc: '所有对象基类', implemented: false },
      { name: 'MbVertex', desc: '顶点，引用 MbCartPoint3D', implemented: false },
      { name: 'MbEdge', desc: '边，引用 MbCurve3D，含方向标记', implemented: false },
      { name: 'MbLoop', desc: '环，边的有序闭合序列', implemented: false },
      { name: 'MbFace', desc: '面，引用 MbSurface，含环列表', implemented: false },
      { name: 'MbShell', desc: '壳，面的集合', implemented: false },
      { name: 'MbSolid', desc: '实体，壳的集合', implemented: false }
    ],
    'point-3d': [
      { name: 'MbCartPoint3D', desc: '3D 笛卡尔点', implemented: true }
    ]
  }
  return classMap[id] || []
})

// 相关子模块（同一父模块下的其他子模块）
const relatedSubModules = computed(() => {
  if (!module.value || !subModule.value) return []
  const all = []
  for (const sub of module.value.subModules || []) {
    if (sub.id === subModule.value.id) continue
    if (sub.children && sub.children.length) {
      for (const child of sub.children) {
        if (child.id !== subModule.value.id) all.push(child)
      }
    } else {
      all.push(sub)
    }
  }
  return all.slice(0, 6)
})
</script>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  font-size: 13px;
}
.breadcrumb-link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s;
}
.breadcrumb-link:hover {
  color: var(--accent-primary-light);
}
.breadcrumb-sep {
  color: var(--text-tertiary);
}
.breadcrumb-current {
  color: var(--text-primary);
  font-weight: 500;
}

.detail-header {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 28px 32px;
  margin-bottom: 24px;
  border-left: 4px solid var(--mod-color);
}
.detail-header h1 {
  font-size: 1.6rem;
  margin-bottom: 10px;
}
.header-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0 0 16px;
}
.header-meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.meta-tag {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid transparent;
}
.status-pending {
  background: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
  border-color: rgba(245, 158, 11, 0.3);
}
.status-progress {
  background: rgba(59, 130, 246, 0.1);
  color: var(--accent-primary-light);
  border-color: rgba(59, 130, 246, 0.3);
}
.status-done {
  background: rgba(16, 185, 129, 0.1);
  color: var(--accent-green);
  border-color: rgba(16, 185, 129, 0.3);
}

.section-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 24px;
  margin-bottom: 20px;
}
.card-title {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 18px;
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

.learning-points {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.point-item {
  display: flex;
  gap: 14px;
  padding: 14px;
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
}
.point-num {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--mod-color, var(--accent-primary));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  flex-shrink: 0;
}
.point-content h4 {
  font-size: 14px;
  margin-bottom: 4px;
  color: var(--text-primary);
}
.point-content p {
  font-size: 13px;
  color: var(--text-tertiary);
  margin: 0;
  line-height: 1.6;
}

.class-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.class-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 16px;
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  transition: all 0.2s;
}
.class-item:hover {
  background: var(--bg-tertiary);
}
.class-info { flex: 1; min-width: 0; }
.class-name {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent-cyan);
  background: rgba(6, 182, 212, 0.08);
  padding: 2px 8px;
  border-radius: 4px;
}
.class-desc {
  font-size: 12px;
  color: var(--text-tertiary);
  margin: 6px 0 0;
}
.status-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 500;
  flex-shrink: 0;
}
.status-badge.implemented {
  background: rgba(16, 185, 129, 0.1);
  color: var(--accent-green);
}
.status-badge.pending {
  background: var(--bg-tertiary);
  color: var(--text-tertiary);
}

.empty-classes {
  text-align: center;
  padding: 24px;
  color: var(--text-tertiary);
  font-size: 13px;
}
.empty-classes .hint {
  font-size: 12px;
  margin-top: 6px;
  opacity: 0.7;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 12px;
}
.related-card {
  padding: 14px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: all 0.2s;
}
.related-card:hover {
  border-color: var(--mod-color, var(--accent-primary));
  background: var(--bg-tertiary);
}
.related-card h4 {
  font-size: 13px;
  color: var(--text-primary);
  margin-bottom: 6px;
}
.related-card p {
  font-size: 12px;
  color: var(--text-tertiary);
  margin: 0;
  line-height: 1.5;
}

.doc-reference {
  border: 1px dashed var(--border-color);
  background: var(--bg-secondary);
}
.doc-hint {
  font-size: 13px;
  color: var(--text-tertiary);
  margin-bottom: 16px;
  line-height: 1.6;
}
.doc-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s;
}
.doc-link-btn:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary-light);
  background: rgba(59, 130, 246, 0.08);
}

.not-found {
  text-align: center;
  padding: 80px 20px;
}
.not-found h2 {
  margin-bottom: 20px;
  color: var(--text-tertiary);
}
</style>
