import { MbCartPoint3D } from './MbCartPoint3D'
import { MbVector3D } from './MbVector3D'

/**
 * 3D 坐标轴（局部坐标系）
 * 对应 C3D: MbAxis3D
 *
 * C3D 文档参考：c3dlabs.ru/doc/classc3d_1_1_mb_axis3_d.html
 * OpenCascade 对应：gp_Ax3
 *
 * 由原点 + 三个正交方向向量组成
 */
export class MbAxis3D {
  origin: MbCartPoint3D
  direction: MbVector3D  // Z 轴方向（主方向）
  xDirection: MbVector3D // X 轴方向
  yDirection: MbVector3D // Y 轴方向

  constructor(
    origin: MbCartPoint3D = MbCartPoint3D.Origin(),
    direction: MbVector3D = MbVector3D.ZAxis(),
    xDirection?: MbVector3D
  ) {
    this.origin = origin.Duplicate()
    this.direction = direction.Normalize()

    if (xDirection) {
      this.xDirection = xDirection.Normalize()
      // 确保 xDirection 与 direction 正交
      const proj = this.xDirection.Dot(this.direction)
      if (Math.abs(proj) > 1e-10) {
        this.xDirection = this.xDirection.Subtract(this.direction.MultiplyScalar(proj)).Normalize()
      }
    } else {
      // 自动计算 X 方向
      const ref = Math.abs(this.direction.z) < 0.9
        ? MbVector3D.ZAxis()
        : MbVector3D.XAxis()
      this.xDirection = this.direction.Cross(ref).Normalize()
    }

    // Y = Z × X（右手系）
    this.yDirection = this.direction.Cross(this.xDirection).Normalize()
  }

  /** 复制 */
  Init(other: MbAxis3D): void {
    this.origin.Init(other.origin)
    this.direction.Init(other.direction)
    this.xDirection.Init(other.xDirection)
    this.yDirection.Init(other.yDirection)
  }

  /** 深拷贝 */
  Duplicate(): MbAxis3D {
    return new MbAxis3D(this.origin.Duplicate(), this.direction.Duplicate(), this.xDirection.Duplicate())
  }

  /** 矩阵变换 */
  Transform(matrix: any): void {
    this.origin.Transform(matrix)
    this.direction.Transform(matrix)
    this.xDirection.Transform(matrix)
    this.yDirection.Transform(matrix)
    // 重新正交化
    this.direction.NormalizeInPlace()
    this.xDirection = this.xDirection.Subtract(
      this.direction.MultiplyScalar(this.xDirection.Dot(this.direction))
    ).Normalize()
    this.yDirection = this.direction.Cross(this.xDirection).Normalize()
  }

  /** 世界坐标 → 局部坐标 */
  ToLocal(point: MbCartPoint3D): MbCartPoint3D {
    const v = MbVector3D.FromPoints(this.origin, point)
    return new MbCartPoint3D(
      v.Dot(this.xDirection),
      v.Dot(this.yDirection),
      v.Dot(this.direction)
    )
  }

  /** 局部坐标 → 世界坐标 */
  ToGlobal(local: MbCartPoint3D): MbCartPoint3D {
    return new MbCartPoint3D(
      this.origin.x + this.xDirection.x * local.x + this.yDirection.x * local.y + this.direction.x * local.z,
      this.origin.y + this.xDirection.y * local.x + this.yDirection.y * local.y + this.direction.y * local.z,
      this.origin.z + this.xDirection.z * local.x + this.yDirection.z * local.y + this.direction.z * local.z
    )
  }

  /** 判断是否相等 */
  IsEqual(other: MbAxis3D, epsilon: number = 1e-10): boolean {
    return (
      this.origin.IsEqual(other.origin, epsilon) &&
      this.direction.IsEqual(other.direction, epsilon) &&
      this.xDirection.IsEqual(other.xDirection, epsilon)
    )
  }

  /** 世界坐标系 */
  static World(): MbAxis3D {
    return new MbAxis3D(MbCartPoint3D.Origin(), MbVector3D.ZAxis(), MbVector3D.XAxis())
  }
}
