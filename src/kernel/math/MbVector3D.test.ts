import { describe, it, expect } from 'vitest'
import { MbVector3D } from './MbVector3D'
import { MbCartPoint3D } from './MbCartPoint3D'
import { Vector3 } from '@babylonjs/core'

describe('MbVector3D', () => {
  it('should create vector with default values', () => {
    const v = new MbVector3D()
    expect(v.x).toBe(0)
    expect(v.y).toBe(0)
    expect(v.z).toBe(0)
  })

  it('should create from two points', () => {
    const from = new MbCartPoint3D(0, 0, 0)
    const to = new MbCartPoint3D(1, 2, 3)
    const v = MbVector3D.FromPoints(from, to)
    expect(v.x).toBe(1)
    expect(v.y).toBe(2)
    expect(v.z).toBe(3)
  })

  it('should add vectors', () => {
    const v1 = new MbVector3D(1, 2, 3)
    const v2 = new MbVector3D(4, 5, 6)
    const result = v1.Add(v2)
    expect(result.x).toBe(5)
    expect(result.y).toBe(7)
    expect(result.z).toBe(9)
  })

  it('should subtract vectors', () => {
    const v1 = new MbVector3D(5, 7, 9)
    const v2 = new MbVector3D(1, 2, 3)
    const result = v1.Subtract(v2)
    expect(result.x).toBe(4)
    expect(result.y).toBe(5)
    expect(result.z).toBe(6)
  })

  it('should multiply by scalar', () => {
    const v = new MbVector3D(1, 2, 3)
    const result = v.MultiplyScalar(2)
    expect(result.x).toBe(2)
    expect(result.y).toBe(4)
    expect(result.z).toBe(6)
  })

  it('should compute dot product', () => {
    const v1 = new MbVector3D(1, 2, 3)
    const v2 = new MbVector3D(4, 5, 6)
    expect(v1.Dot(v2)).toBe(32) // 1*4 + 2*5 + 3*6
  })

  it('should compute cross product', () => {
    const v1 = new MbVector3D(1, 0, 0)
    const v2 = new MbVector3D(0, 1, 0)
    const result = v1.Cross(v2)
    expect(result.x).toBe(0)
    expect(result.y).toBe(0)
    expect(result.z).toBe(1)
  })

  it('should compute length', () => {
    const v = new MbVector3D(3, 4, 0)
    expect(v.Length()).toBeCloseTo(5, 10)
  })

  it('should compute squared length', () => {
    const v = new MbVector3D(1, 2, 2)
    expect(v.Length2()).toBe(9)
  })

  it('should normalize vector', () => {
    const v = new MbVector3D(3, 4, 0)
    const n = v.Normalize()
    expect(n.Length()).toBeCloseTo(1, 10)
    expect(n.x).toBeCloseTo(0.6, 10)
    expect(n.y).toBeCloseTo(0.8, 10)
  })

  it('should normalize in place', () => {
    const v = new MbVector3D(3, 4, 0)
    v.NormalizeInPlace()
    expect(v.Length()).toBeCloseTo(1, 10)
  })

  it('should detect zero vector', () => {
    expect(new MbVector3D(0, 0, 0).IsZero()).toBe(true)
    expect(new MbVector3D(1, 0, 0).IsZero()).toBe(false)
  })

  it('should compute angle between vectors', () => {
    const v1 = new MbVector3D(1, 0, 0)
    const v2 = new MbVector3D(0, 1, 0)
    expect(v1.AngleTo(v2)).toBeCloseTo(Math.PI / 2, 10)
  })

  it('should duplicate', () => {
    const v = new MbVector3D(1, 2, 3)
    const v2 = v.Duplicate()
    expect(v2).not.toBe(v)
    expect(v2.IsEqual(v)).toBe(true)
  })

  it('should convert to Babylon Vector3', () => {
    const v = new MbVector3D(1, 2, 3)
    const bv = v.ToBabylon()
    expect(bv.x).toBe(1)
    expect(bv.y).toBe(3)
    expect(bv.z).toBe(2)
  })

  // 与 Babylon.js 对比验证
  it('dot product should match Babylon Vector3', () => {
    const v1 = new MbVector3D(1, 2, 3)
    const v2 = new MbVector3D(4, 5, 6)
    const bv1 = new Vector3(1, 3, 2) // 坐标转换
    const bv2 = new Vector3(4, 6, 5)
    expect(v1.Dot(v2)).toBeCloseTo(Vector3.Dot(bv1, bv2), 10)
  })

  it('cross product should be orthogonal to both inputs and have correct magnitude', () => {
    const v1 = new MbVector3D(1, 2, 3)
    const v2 = new MbVector3D(4, 5, 6)
    const cross = v1.Cross(v2)

    // 叉积与两个输入向量都正交
    expect(cross.Dot(v1)).toBeCloseTo(0, 10)
    expect(cross.Dot(v2)).toBeCloseTo(0, 10)

    // 叉积模长 = |v1| * |v2| * sin(angle)
    const angle = v1.AngleTo(v2)
    const expectedLen = v1.Length() * v2.Length() * Math.sin(angle)
    expect(cross.Length()).toBeCloseTo(expectedLen, 10)

    // 与 Babylon.js 对比模长（手性无关）
    const bv1 = new Vector3(1, 3, 2) // 坐标转换
    const bv2 = new Vector3(4, 6, 5)
    const bCross = Vector3.Cross(bv1, bv2)
    expect(cross.Length()).toBeCloseTo(bCross.length(), 10)
  })

  it('length should match Babylon Vector3', () => {
    const v = new MbVector3D(1, 2, 3)
    const bv = new Vector3(1, 3, 2)
    expect(v.Length()).toBeCloseTo(bv.length(), 10)
  })

  it('should return axis vectors', () => {
    expect(MbVector3D.XAxis().IsEqual(new MbVector3D(1, 0, 0))).toBe(true)
    expect(MbVector3D.YAxis().IsEqual(new MbVector3D(0, 1, 0))).toBe(true)
    expect(MbVector3D.ZAxis().IsEqual(new MbVector3D(0, 0, 1))).toBe(true)
  })
})
