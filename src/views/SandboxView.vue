<template>
  <div class="sandbox-view">
    <div class="page-title">
      <h1>内核可视化沙箱</h1>
      <p>用 Babylon.js 可视化 C3D 内核实现，用 OpenCascade.js 做结果验证对比</p>
    </div>

    <div class="sandbox-layout">
      <!-- 左侧控制面板 -->
      <div class="sandbox-controls card">
        <h3>控制面板</h3>

        <div class="control-section">
          <label class="control-label">当前阶段</label>
          <select v-model="currentStage" class="control-select">
            <option value="math">阶段1：数学基础</option>
            <option value="curves" disabled>阶段2：曲线（待实现）</option>
            <option value="surfaces" disabled>阶段3：曲面（待实现）</option>
            <option value="topology" disabled>阶段4：拓扑（待实现）</option>
          </select>
        </div>

        <div class="control-section" v-if="currentStage === 'math'">
          <label class="control-label">演示对象</label>
          <div class="demo-buttons">
            <button
              v-for="demo in mathDemos"
              :key="demo.id"
              class="demo-btn"
              :class="{ active: activeDemo === demo.id }"
              @click="runDemo(demo.id)"
            >
              {{ demo.name }}
            </button>
          </div>
        </div>

        <div class="control-section">
          <label class="control-label">显示选项</label>
          <label class="checkbox-label">
            <input type="checkbox" v-model="showGrid" @change="toggleGrid" />
            显示网格
          </label>
          <label class="checkbox-label">
            <input type="checkbox" v-model="showAxes" @change="toggleAxes" />
            显示坐标轴
          </label>
        </div>

        <div class="control-section">
          <button class="btn btn-primary" @click="resetCamera">重置视角</button>
          <button class="btn" @click="clearScene">清空场景</button>
        </div>
      </div>

      <!-- 中间 3D 视图 -->
      <div class="sandbox-viewport">
        <canvas ref="canvasRef" class="babylon-canvas"></canvas>
        <div class="viewport-overlay">
          <span class="badge">Babylon.js</span>
          <span v-if="occReady" class="badge badge-success">OpenCascade.js 已就绪</span>
          <span v-else class="badge badge-warning" @click="initOcc">初始化 OpenCascade.js</span>
        </div>
      </div>

      <!-- 右侧验证面板 -->
      <div class="sandbox-validation card">
        <h3>验证对比</h3>
        <div v-if="!validationResults.length" class="empty-state">
          <p>选择左侧演示对象后，这里会显示三方对比结果</p>
          <p class="hint">我们的实现 ↔ Babylon.js ↔ OpenCascade.js</p>
        </div>
        <div v-else class="validation-list">
          <div v-for="(result, i) in validationResults" :key="i" class="validation-item">
            <div class="validation-header">
              <span class="validation-name">{{ result.name }}</span>
              <span class="validation-status" :class="result.pass ? 'pass' : 'fail'">
                {{ result.pass ? '✓ 通过' : '✗ 失败' }}
              </span>
            </div>
            <div class="validation-detail">
              <div class="validation-row">
                <span class="val-label">我们的实现:</span>
                <span class="val-value">{{ result.ours }}</span>
              </div>
              <div class="validation-row">
                <span class="val-label">参考值:</span>
                <span class="val-value">{{ result.reference }}</span>
              </div>
              <div class="validation-row">
                <span class="val-label">误差:</span>
                <span class="val-value" :class="{ 'error-high': result.error > result.threshold }">
                  {{ result.error.toExponential(4) }}
                </span>
              </div>
              <div class="validation-row">
                <span class="val-label">阈值:</span>
                <span class="val-value">{{ result.threshold.toExponential() }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { BabylonScene } from '@kernel/visualization/BabylonScene'
import { MbCartPoint3D, MbVector3D, MbMatrix3D } from '@kernel/math'
import { occManager, type OpenCascadeInstance } from '@kernel/validation/OccManager'
import { MeshBuilder, StandardMaterial, Color3, Vector3, LinesMesh } from '@babylonjs/core'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let scene: BabylonScene | null = null

const currentStage = ref('math')
const activeDemo = ref('')
const showGrid = ref(true)
const showAxes = ref(true)
const occReady = ref(false)
const validationResults = ref<ValidationResult[]>([])

interface ValidationResult {
  name: string
  ours: string
  reference: string
  error: number
  threshold: number
  pass: boolean
}

const mathDemos = [
  { id: 'points', name: '点与距离' },
  { id: 'vectors', name: '向量运算' },
  { id: 'transform', name: '矩阵变换' },
  { id: 'cross', name: '叉积可视化' }
]

onMounted(async () => {
  if (canvasRef.value) {
    scene = new BabylonScene(canvasRef.value)
  }
  // 尝试初始化 OpenCascade
  try {
    await occManager.init()
    occReady.value = true
  } catch (e) {
    console.warn('OpenCascade.js 初始化失败:', e)
  }
})

onUnmounted(() => {
  scene?.dispose()
})

async function initOcc() {
  try {
    await occManager.init()
    occReady.value = true
  } catch (e) {
    console.error('OpenCascade.js 初始化失败:', e)
  }
}

function runDemo(demoId: string) {
  activeDemo.value = demoId
  validationResults.value = []
  scene?.clearMeshes()

  switch (demoId) {
    case 'points':
      demoPoints()
      break
    case 'vectors':
      demoVectors()
      break
    case 'transform':
      demoTransform()
      break
    case 'cross':
      demoCross()
      break
  }
  scene?.focusOnMeshes()
}

function demoPoints() {
  const p1 = new MbCartPoint3D(0, 0, 0)
  const p2 = new MbCartPoint3D(3, 4, 0)
  const dist = p1.Distance(p2)

  // 可视化点
  const sphere1 = MeshBuilder.CreateSphere('p1', { diameter: 0.2 }, scene!.scene)
  sphere1.position = p1.ToBabylon()
  const mat1 = new StandardMaterial('mat1', scene!.scene)
  mat1.emissiveColor = new Color3(1, 0.3, 0.3)
  sphere1.material = mat1
  scene!.addMesh('p1', sphere1)

  const sphere2 = MeshBuilder.CreateSphere('p2', { diameter: 0.2 }, scene!.scene)
  sphere2.position = p2.ToBabylon()
  const mat2 = new StandardMaterial('mat2', scene!.scene)
  mat2.emissiveColor = new Color3(0.3, 1, 0.3)
  sphere2.material = mat2
  scene!.addMesh('p2', sphere2)

  // 连线
  const line = MeshBuilder.CreateLines('line', {
    points: [p1.ToBabylon(), p2.ToBabylon()],
    colors: [new Color3(0.5, 0.7, 1), new Color3(0.5, 0.7, 1)]
  }, scene!.scene)
  scene!.addMesh('line', line)

  // 验证
  validationResults.value.push({
    name: '两点距离',
    ours: dist.toFixed(6),
    reference: '5.000000 (解析值)',
    error: Math.abs(dist - 5),
    threshold: 1e-10,
    pass: Math.abs(dist - 5) < 1e-10
  })
}

function demoVectors() {
  const v1 = new MbVector3D(1, 2, 0.5)
  const v2 = new MbVector3D(2, -1, 1)
  const dot = v1.Dot(v2)
  const sum = v1.Add(v2)

  // 可视化向量
  drawVector('v1', MbCartPoint3D.Origin(), v1, new Color3(1, 0.3, 0.3))
  drawVector('v2', MbCartPoint3D.Origin(), v2, new Color3(0.3, 1, 0.3))
  drawVector('sum', MbCartPoint3D.Origin(), sum, new Color3(0.3, 0.5, 1))

  validationResults.value.push({
    name: '点积 v1·v2',
    ours: dot.toFixed(6),
    reference: '2.500000 (1*2 + 2*(-1) + 0.5*1)',
    error: Math.abs(dot - 2.5),
    threshold: 1e-10,
    pass: Math.abs(dot - 2.5) < 1e-10
  })
}

function demoTransform() {
  const p = new MbCartPoint3D(1, 0, 0)
  const rotZ = MbMatrix3D.RotationZ(Math.PI / 2)
  const pTransformed = p.Duplicate()
  pTransformed.Transform(rotZ)

  // 原始点
  const sphere1 = MeshBuilder.CreateSphere('orig', { diameter: 0.15 }, scene!.scene)
  sphere1.position = p.ToBabylon()
  const mat1 = new StandardMaterial('matOrig', scene!.scene)
  mat1.emissiveColor = new Color3(1, 0.3, 0.3)
  sphere1.material = mat1
  scene!.addMesh('orig', sphere1)

  // 变换后点
  const sphere2 = MeshBuilder.CreateSphere('trans', { diameter: 0.15 }, scene!.scene)
  sphere2.position = pTransformed.ToBabylon()
  const mat2 = new StandardMaterial('matTrans', scene!.scene)
  mat2.emissiveColor = new Color3(0.3, 1, 0.3)
  sphere2.material = mat2
  scene!.addMesh('trans', sphere2)

  // 圆弧轨迹
  const arcPoints: Vector3[] = []
  for (let i = 0; i <= 20; i++) {
    const angle = (Math.PI / 2) * (i / 20)
    const arcP = new MbCartPoint3D(Math.cos(angle), Math.sin(angle), 0)
    arcPoints.push(arcP.ToBabylon())
  }
  const arc = MeshBuilder.CreateLines('arc', { points: arcPoints }, scene!.scene)
  scene!.addMesh('arc', arc)

  validationResults.value.push({
    name: '绕Z轴旋转90°',
    ours: `(${pTransformed.x.toFixed(4)}, ${pTransformed.y.toFixed(4)}, ${pTransformed.z.toFixed(4)})`,
    reference: '(0.0000, 1.0000, 0.0000)',
    error: Math.sqrt(
      Math.pow(pTransformed.x - 0, 2) +
      Math.pow(pTransformed.y - 1, 2) +
      Math.pow(pTransformed.z - 0, 2)
    ),
    threshold: 1e-10,
    pass: pTransformed.IsEqual(new MbCartPoint3D(0, 1, 0), 1e-10)
  })
}

function demoCross() {
  const v1 = new MbVector3D(1, 0, 0)
  const v2 = new MbVector3D(0, 1, 0)
  const cross = v1.Cross(v2)

  drawVector('v1', MbCartPoint3D.Origin(), v1, new Color3(1, 0.3, 0.3))
  drawVector('v2', MbCartPoint3D.Origin(), v2, new Color3(0.3, 1, 0.3))
  drawVector('cross', MbCartPoint3D.Origin(), cross, new Color3(1, 0.8, 0.3))

  validationResults.value.push({
    name: '叉积 v1×v2',
    ours: `(${cross.x}, ${cross.y}, ${cross.z})`,
    reference: '(0, 0, 1)',
    error: cross.Distance(new MbVector3D(0, 0, 1)),
    threshold: 1e-10,
    pass: cross.IsEqual(new MbVector3D(0, 0, 1))
  })
}

function drawVector(id: string, origin: MbCartPoint3D, vec: MbVector3D, color: Color3) {
  const end = new MbCartPoint3D(
    origin.x + vec.x,
    origin.y + vec.y,
    origin.z + vec.z
  )
  const line = MeshBuilder.CreateLines(id, {
    points: [origin.ToBabylon(), end.ToBabylon()],
    colors: [new Color3(color.r, color.g, color.b), new Color3(color.r, color.g, color.b)]
  }, scene!.scene)
  scene!.addMesh(id, line)

  // 箭头球
  const arrow = MeshBuilder.CreateSphere(id + '_arrow', { diameter: 0.1 }, scene!.scene)
  arrow.position = end.ToBabylon()
  const mat = new StandardMaterial(id + '_mat', scene!.scene)
  mat.emissiveColor = color
  arrow.material = mat
  scene!.addMesh(id + '_arrow', arrow)
}

function toggleGrid() {
  const grid = scene?.scene.getMeshByName('grid')
  if (grid) grid.setEnabled(showGrid.value)
}

function toggleAxes() {
  ['axisX', 'axisY', 'axisZ'].forEach(name => {
    const axis = scene?.scene.getMeshByName(name)
    if (axis) axis.setEnabled(showAxes.value)
  })
}

function resetCamera() {
  scene?.focusOnMeshes()
}

function clearScene() {
  scene?.clearMeshes()
  activeDemo.value = ''
  validationResults.value = []
}
</script>

<style scoped>
.sandbox-view {
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.sandbox-layout {
  display: grid;
  grid-template-columns: 260px 1fr 300px;
  gap: 16px;
  flex: 1;
  min-height: 0;
}

.sandbox-controls,
.sandbox-validation {
  overflow-y: auto;
}

.control-section {
  margin-bottom: 20px;
}

.control-label {
  display: block;
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 8px;
  font-weight: 500;
}

.control-select {
  width: 100%;
  padding: 8px 12px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--text-primary);
  font-size: 14px;
}

.demo-buttons {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.demo-btn {
  padding: 8px 12px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--text-primary);
  font-size: 13px;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s;
}

.demo-btn:hover {
  border-color: var(--accent-primary);
  background: rgba(59, 130, 246, 0.1);
}

.demo-btn.active {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  color: white;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 8px;
  cursor: pointer;
}

.checkbox-label input {
  accent-color: var(--accent-primary);
}

.sandbox-viewport {
  position: relative;
  background: var(--bg-primary);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
}

.babylon-canvas {
  width: 100%;
  height: 100%;
  display: block;
  outline: none;
}

.viewport-overlay {
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  gap: 8px;
}

.badge {
  padding: 4px 10px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  font-size: 12px;
  color: var(--text-secondary);
  backdrop-filter: blur(4px);
}

.badge-success {
  color: var(--accent-green);
}

.badge-warning {
  color: var(--accent-orange);
  cursor: pointer;
}

.empty-state {
  text-align: center;
  padding: 24px 12px;
  color: var(--text-secondary);
  font-size: 13px;
}

.empty-state .hint {
  font-size: 11px;
  margin-top: 8px;
  opacity: 0.7;
}

.validation-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.validation-item {
  padding: 12px;
  background: var(--bg-primary);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.validation-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.validation-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
}

.validation-status {
  font-size: 12px;
  font-weight: 600;
}

.validation-status.pass {
  color: var(--accent-green);
}

.validation-status.fail {
  color: #ef4444;
}

.validation-detail {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.validation-row {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}

.val-label {
  color: var(--text-secondary);
}

.val-value {
  color: var(--text-primary);
  font-family: 'JetBrains Mono', monospace;
}

.error-high {
  color: #ef4444;
}

@media (max-width: 1200px) {
  .sandbox-layout {
    grid-template-columns: 220px 1fr 260px;
  }
}

@media (max-width: 900px) {
  .sandbox-layout {
    grid-template-columns: 1fr;
    grid-template-rows: auto 400px auto;
  }
}
</style>
