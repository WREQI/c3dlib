import { Vector3 } from '@babylonjs/core'
import { MbCartPoint3D } from './MbCartPoint3D'
import { c3dToBabylon } from '../visualization/BabylonScene'

/**
 * 3D 向量
 * 对应 C3D: MbVector3D
 *
 * C3D 文档参考：c3dlabs.ru/doc/classc3d_1_1_mb_vector3_d.html
 * OpenCascade 对应：gp_Vec
 * Babylon.js 对应：Vector3
 */
export class MbVector3D {
  x: number
  y: number
  z: number

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x
    this.y = y
    this.z = z
  }

  /** 从两点构造向量 */
  static FromPoints(from: MbCartPoint3D, to: MbCartPoint3D): MbVector3D {
    return new MbVector3D(to.x - from.x, to.y - from.y, to.z - from.z)
  }

  /** 设置分量 */
  Set(x: number, y: number, z: number): void {
    this.x = x
    this.y = y
    this.z = z
  }

  /** 复制另一个向量 */
  Init(other: MbVector3D): void {
    this.x = other.x
    this.y = other.y
    this.z = other.z
  }

  /** 深拷贝 */
  Duplicate(): MbVector3D {
    return new MbVector3D(this.x, this.y, this.z)
  }

  /** 向量加法 */
  Add(other: MbVector3D): MbVector3D {
    return new MbVector3D(this.x + other.x, this.y + other.y, this.z + other.z)
  }

  /** 向量减法 */
  Subtract(other: MbVector3D): MbVector3D {
    return new MbVector3D(this.x - other.x, this.y - other.y, this.z - other.z)
  }

  /** 数乘 */
  MultiplyScalar(scalar: number): MbVector3D {
    return new MbVector3D(this.x * scalar, this.y * scalar, this.z * scalar)
  }

  /** 点积（数量积） */
  Dot(other: MbVector3D): number {
    return this.x * other.x + this.y * other.y + this.z * other.z
  }

  /** 叉积（向量积） */
  Cross(other: MbVector3D): MbVector3D {
    return new MbVector3D(
      this.y * other.z - this.z * other.y,
      this.z * other.x - this.x * other.z,
      this.x * other.y - this.y * other.x
    )
  }

  /** 模长（长度） */
  Length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
  }

  /** 模长平方 */
  Length2(): number {
    return this.x * this.x + this.y * this.y + this.z * this.z
  }

  /** 归一化（单位向量），返回新向量 */
  Normalize(): MbVector3D {
    const len = this.Length()
    if (len < 1e-15) return new MbVector3D(0, 0, 0)
    return new MbVector3D(this.x / len, this.y / len, this.z / len)
  }

  /** 原地归一化 */
  NormalizeInPlace(): this {
    const len = this.Length()
    if (len > 1e-15) {
      this.x /= len
      this.y /= len
      this.z /= len
    }
    return this
  }

  /** 是否为零向量 */
  IsZero(epsilon: number = 1e-15): boolean {
    return this.Length2() < epsilon * epsilon
  }

  /** 两向量夹角（弧度） */
  AngleTo(other: MbVector3D): number {
    const dot = this.Dot(other)
    const lenProduct = this.Length() * other.Length()
    if (lenProduct < 1e-15) return 0
    const cos = Math.max(-1, Math.min(1, dot / lenProduct))
    return Math.acos(cos)
  }

  /** 矩阵变换 */
  Transform(matrix: { elements: number[] } | any): void {
    const m = matrix.elements || matrix
    const x = m[0] * this.x + m[1] * this.y + m[2] * this.z
    const y = m[4] * this.x + m[5] * this.y + m[6] * this.z
    const z = m[8] * this.x + m[9] * this.y + m[10] * this.z
    this.x = x
    this.y = y
    this.z = z
  }

  /** 转换为 Babylon.js Vector3 */
  ToBabylon(): Vector3 {
    return c3dToBabylon(this.x, this.y, this.z)
  }

  /** 从 Babylon.js Vector3 创建 */
  static FromBabylon(v: Vector3): MbVector3D {
    return new MbVector3D(v.x, v.z, v.y)
  }

  /** 转换为数组 */
  ToArray(): [number, number, number] {
    return [this.x, this.y, this.z]
  }

  /** 判断是否相等 */
  IsEqual(other: MbVector3D, epsilon: number = 1e-10): boolean {
    return (
      Math.abs(this.x - other.x) < epsilon &&
      Math.abs(this.y - other.y) < epsilon &&
      Math.abs(this.z - other.z) < epsilon
    )
  }

  /** X 轴单位向量 */
  static XAxis(): MbVector3D { return new MbVector3D(1, 0, 0) }
  /** Y 轴单位向量 */
  static YAxis(): MbVector3D { return new MbVector3D(0, 1, 0) }
  /** Z 轴单位向量 */
  static ZAxis(): MbVector3D { return new MbVector3D(0, 0, 1) }
}
