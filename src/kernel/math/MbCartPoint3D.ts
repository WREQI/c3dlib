import { Vector3 } from '@babylonjs/core'
import { c3dToBabylon } from '../visualization/BabylonScene'

/**
 * 3D 笛卡尔点
 * 对应 C3D: MbCartPoint3D
 *
 * C3D 文档参考：c3dlabs.ru/doc/classc3d_1_1_mb_cart_point3_d.html
 * OpenCascade 对应：gp_Pnt
 */
export class MbCartPoint3D {
  x: number
  y: number
  z: number

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x
    this.y = y
    this.z = z
  }

  /** 设置坐标 */
  Set(x: number, y: number, z: number): void {
    this.x = x
    this.y = y
    this.z = z
  }

  /** 复制另一个点 */
  Init(other: MbCartPoint3D): void {
    this.x = other.x
    this.y = other.y
    this.z = other.z
  }

  /** 深拷贝 */
  Duplicate(): MbCartPoint3D {
    return new MbCartPoint3D(this.x, this.y, this.z)
  }

  /** 到另一点的距离 */
  Distance(other: MbCartPoint3D): number {
    const dx = this.x - other.x
    const dy = this.y - other.y
    const dz = this.z - other.z
    return Math.sqrt(dx * dx + dy * dy + dz * dz)
  }

  /** 到另一点的距离平方 */
  Distance2(other: MbCartPoint3D): number {
    const dx = this.x - other.x
    const dy = this.y - other.y
    const dz = this.z - other.z
    return dx * dx + dy * dy + dz * dz
  }

  /** 矩阵变换 */
  Transform(matrix: { elements: number[] } | any): void {
    // 兼容 MbMatrix3D 和 Babylon Matrix
    const m = matrix.elements || matrix
    const x = m[0] * this.x + m[1] * this.y + m[2] * this.z + m[3]
    const y = m[4] * this.x + m[5] * this.y + m[6] * this.z + m[7]
    const z = m[8] * this.x + m[9] * this.y + m[10] * this.z + m[11]
    this.x = x
    this.y = y
    this.z = z
  }

  /** 转换为 Babylon.js Vector3（注意坐标系转换） */
  ToBabylon(): Vector3 {
    return c3dToBabylon(this.x, this.y, this.z)
  }

  /** 从 Babylon.js Vector3 创建 */
  static FromBabylon(v: Vector3): MbCartPoint3D {
    // Babylon: (x, y, z) → C3D: (x, z, y)
    return new MbCartPoint3D(v.x, v.z, v.y)
  }

  /** 转换为数组 */
  ToArray(): [number, number, number] {
    return [this.x, this.y, this.z]
  }

  /** 判断是否相等（误差范围内） */
  IsEqual(other: MbCartPoint3D, epsilon: number = 1e-10): boolean {
    return (
      Math.abs(this.x - other.x) < epsilon &&
      Math.abs(this.y - other.y) < epsilon &&
      Math.abs(this.z - other.z) < epsilon
    )
  }

  /** 原点 */
  static Origin(): MbCartPoint3D {
    return new MbCartPoint3D(0, 0, 0)
  }
}
