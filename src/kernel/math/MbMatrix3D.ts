import { Matrix } from '@babylonjs/core'

/**
 * 4x4 变换矩阵
 * 对应 C3D: MbMatrix3D
 *
 * C3D 文档参考：c3dlabs.ru/doc/classc3d_1_1_mb_matrix3_d.html
 * OpenCascade 对应：gp_Trsf
 * Babylon.js 对应：Matrix
 *
 * 矩阵存储为行优先 16 元素数组：
 * [m00, m01, m02, m03,
 *  m10, m11, m12, m13,
 *  m20, m21, m22, m23,
 *  m30, m31, m32, m33]
 */
export class MbMatrix3D {
  elements: number[]

  constructor(elements?: number[]) {
    if (elements && elements.length === 16) {
      this.elements = [...elements]
    } else {
      this.elements = MbMatrix3D.Identity().elements
    }
  }

  /** 单位矩阵 */
  static Identity(): MbMatrix3D {
    return new MbMatrix3D([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ])
  }

  /** 平移矩阵 */
  static Translation(tx: number, ty: number, tz: number): MbMatrix3D {
    return new MbMatrix3D([
      1, 0, 0, tx,
      0, 1, 0, ty,
      0, 0, 1, tz,
      0, 0, 0, 1
    ])
  }

  /** 缩放矩阵 */
  static Scaling(sx: number, sy: number, sz: number): MbMatrix3D {
    return new MbMatrix3D([
      sx, 0, 0, 0,
      0, sy, 0, 0,
      0, 0, sz, 0,
      0, 0, 0, 1
    ])
  }

  /** 绕 X 轴旋转（弧度） */
  static RotationX(angle: number): MbMatrix3D {
    const c = Math.cos(angle)
    const s = Math.sin(angle)
    return new MbMatrix3D([
      1, 0, 0, 0,
      0, c, -s, 0,
      0, s, c, 0,
      0, 0, 0, 1
    ])
  }

  /** 绕 Y 轴旋转（弧度） */
  static RotationY(angle: number): MbMatrix3D {
    const c = Math.cos(angle)
    const s = Math.sin(angle)
    return new MbMatrix3D([
      c, 0, s, 0,
      0, 1, 0, 0,
      -s, 0, c, 0,
      0, 0, 0, 1
    ])
  }

  /** 绕 Z 轴旋转（弧度） */
  static RotationZ(angle: number): MbMatrix3D {
    const c = Math.cos(angle)
    const s = Math.sin(angle)
    return new MbMatrix3D([
      c, -s, 0, 0,
      s, c, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ])
  }

  /** 复制 */
  Init(other: MbMatrix3D): void {
    this.elements = [...other.elements]
  }

  /** 深拷贝 */
  Duplicate(): MbMatrix3D {
    return new MbMatrix3D(this.elements)
  }

  /** 矩阵乘法：this * other */
  Multiply(other: MbMatrix3D): MbMatrix3D {
    const a = this.elements
    const b = other.elements
    const r = new Array(16).fill(0)
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        r[i * 4 + j] =
          a[i * 4 + 0] * b[0 * 4 + j] +
          a[i * 4 + 1] * b[1 * 4 + j] +
          a[i * 4 + 2] * b[2 * 4 + j] +
          a[i * 4 + 3] * b[3 * 4 + j]
      }
    }
    return new MbMatrix3D(r)
  }

  /** 转置 */
  Transpose(): MbMatrix3D {
    const m = this.elements
    return new MbMatrix3D([
      m[0], m[4], m[8], m[12],
      m[1], m[5], m[9], m[13],
      m[2], m[6], m[10], m[14],
      m[3], m[7], m[11], m[15]
    ])
  }

  /** 求逆（简化版，假设是仿射变换矩阵） */
  Invert(): MbMatrix3D | null {
    // 使用 Babylon.js 的 Matrix 求逆
    const babylonMat = this.ToBabylon()
    const inverted = babylonMat.invert()
    if (!inverted) return null
    return MbMatrix3D.FromBabylon(inverted)
  }

  /** 获取平移分量 */
  GetTranslation(): [number, number, number] {
    return [this.elements[3], this.elements[7], this.elements[11]]
  }

  /** 转换为 Babylon.js Matrix */
  ToBabylon(): Matrix {
    // Babylon Matrix 是列优先存储，需要转置
    const m = this.elements
    return Matrix.FromArray([
      m[0], m[4], m[8], m[12],
      m[1], m[5], m[9], m[13],
      m[2], m[6], m[10], m[14],
      m[3], m[7], m[11], m[15]
    ])
  }

  /** 从 Babylon.js Matrix 创建 */
  static FromBabylon(mat: Matrix): MbMatrix3D {
    const m = mat.m
    // Babylon 列优先 → 我们的行优先
    return new MbMatrix3D([
      m[0], m[4], m[8], m[12],
      m[1], m[5], m[9], m[13],
      m[2], m[6], m[10], m[14],
      m[3], m[7], m[11], m[15]
    ])
  }

  /** 判断是否相等 */
  IsEqual(other: MbMatrix3D, epsilon: number = 1e-10): boolean {
    for (let i = 0; i < 16; i++) {
      if (Math.abs(this.elements[i] - other.elements[i]) > epsilon) return false
    }
    return true
  }
}
