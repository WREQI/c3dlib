import {
  Engine,
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  DirectionalLight,
  Vector3,
  Color3,
  Color4,
  MeshBuilder,
  StandardMaterial,
  type AbstractMesh,
  type Nullable
} from '@babylonjs/core'

/**
 * Babylon.js 3D 场景封装
 * 用于可视化 Mb* 几何对象
 *
 * 坐标系说明：
 * - Babylon.js: 左手系，Y 轴向上
 * - C3D: 右手系，Z 轴向上
 * - 转换时将 C3D 的 (x, y, z) 映射为 Babylon 的 (x, z, y)
 */
export class BabylonScene {
  engine: Engine
  scene: Scene
  camera: ArcRotateCamera
  private canvas: HTMLCanvasElement
  private meshes: Map<string, AbstractMesh> = new Map()
  private animationId: number = 0

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.engine = new Engine(canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true
    })
    this.scene = new Scene(this.engine)
    this.scene.clearColor = new Color4(0.04, 0.05, 0.09, 1) // 深色背景，与网站主题一致

    // 相机
    this.camera = new ArcRotateCamera(
      'camera',
      -Math.PI / 3,
      Math.PI / 3,
      10,
      new Vector3(0, 0, 0),
      this.scene
    )
    this.camera.attachControl(canvas, true)
    this.camera.wheelPrecision = 50
    this.camera.lowerRadiusLimit = 1
    this.camera.upperRadiusLimit = 100

    // 灯光
    const hemiLight = new HemisphericLight('hemiLight', new Vector3(0, 1, 0), this.scene)
    hemiLight.intensity = 0.6
    hemiLight.groundColor = new Color3(0.1, 0.1, 0.15)

    const dirLight = new DirectionalLight('dirLight', new Vector3(-1, -2, -1), this.scene)
    dirLight.intensity = 0.8

    // 网格地面
    this.createGrid()

    // 坐标轴
    this.createAxes()

    // 启动渲染循环
    this.startRenderLoop()
  }

  /** 创建网格地面 */
  private createGrid(): void {
    const grid = MeshBuilder.CreateGround(
      'grid',
      { width: 20, height: 20, subdivisions: 20 },
      this.scene
    )
    const mat = new StandardMaterial('gridMat', this.scene)
    mat.wireframe = true
    mat.emissiveColor = new Color3(0.15, 0.2, 0.3)
    mat.disableLighting = true
    grid.material = mat
    grid.isPickable = false
  }

  /** 创建坐标轴 */
  private createAxes(): void {
    const axisLength = 3
    const makeAxis = (name: string, direction: Vector3, color: Color3) => {
      const axis = MeshBuilder.CreateLines(name, {
        points: [new Vector3(0, 0, 0), direction.scale(axisLength)],
        colors: [new Color4(color.r, color.g, color.b, 1), new Color4(color.r, color.g, color.b, 1)]
      }, this.scene)
      axis.isPickable = false
    }
    makeAxis('axisX', new Vector3(1, 0, 0), new Color3(1, 0.3, 0.3)) // X 红
    makeAxis('axisY', new Vector3(0, 1, 0), new Color3(0.3, 1, 0.3)) // Y 绿
    makeAxis('axisZ', new Vector3(0, 0, 1), new Color3(0.3, 0.5, 1)) // Z 蓝
  }

  /**
   * 添加网格到场景
   */
  addMesh(id: string, mesh: AbstractMesh): void {
    this.removeMesh(id)
    mesh.name = id
    this.meshes.set(id, mesh)
  }

  /**
   * 移除网格
   */
  removeMesh(id: string): void {
    const existing = this.meshes.get(id)
    if (existing) {
      existing.dispose()
      this.meshes.delete(id)
    }
  }

  /**
   * 清空所有自定义网格
   */
  clearMeshes(): void {
    for (const [id] of this.meshes) {
      this.removeMesh(id)
    }
  }

  /**
   * 帧适配
   */
  focusOnMeshes(): void {
    let min = new Vector3(Infinity, Infinity, Infinity)
    let max = new Vector3(-Infinity, -Infinity, -Infinity)
    let hasMesh = false

    for (const mesh of this.meshes.values()) {
      const bbox = mesh.getBoundingInfo().boundingBox
      min = Vector3.Minimize(min, bbox.minimumWorld)
      max = Vector3.Maximize(max, bbox.maximumWorld)
      hasMesh = true
    }

    if (hasMesh) {
      const center = min.add(max).scale(0.5)
      const size = max.subtract(min).length()
      this.camera.target = center
      this.camera.radius = size * 1.5 || 10
    }
  }

  private startRenderLoop(): void {
    this.engine.runRenderLoop(() => {
      this.scene.render()
    })
  }

  /**
   * 调整大小
   */
  resize(): void {
    this.engine.resize()
  }

  /**
   * 销毁
   */
  dispose(): void {
    this.engine.stopRenderLoop()
    this.scene.dispose()
    this.engine.dispose()
  }
}

/**
 * C3D 坐标 → Babylon 坐标
 * C3D: 右手系 Z-up → Babylon: 左手系 Y-up
 */
export function c3dToBabylon(x: number, y: number, z: number): Vector3 {
  return new Vector3(x, z, y)
}
