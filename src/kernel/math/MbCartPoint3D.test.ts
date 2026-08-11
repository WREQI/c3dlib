import { describe, it, expect } from 'vitest'
import { MbCartPoint3D } from './MbCartPoint3D'
import { Vector3 } from '@babylonjs/core'

describe('MbCartPoint3D', () => {
  it('should create point with default coordinates', () => {
    const p = new MbCartPoint3D()
    expect(p.x).toBe(0)
    expect(p.y).toBe(0)
    expect(p.z).toBe(0)
  })

  it('should create point with given coordinates', () => {
    const p = new MbCartPoint3D(1, 2, 3)
    expect(p.x).toBe(1)
    expect(p.y).toBe(2)
    expect(p.z).toBe(3)
  })

  it('should set coordinates', () => {
    const p = new MbCartPoint3D()
    p.Set(4, 5, 6)
    expect(p.x).toBe(4)
    expect(p.y).toBe(5)
    expect(p.z).toBe(6)
  })

  it('should duplicate point', () => {
    const p = new MbCartPoint3D(1, 2, 3)
    const p2 = p.Duplicate()
    expect(p2).not.toBe(p)
    expect(p2.IsEqual(p)).toBe(true)
  })

  it('should calculate distance', () => {
    const p1 = new MbCartPoint3D(0, 0, 0)
    const p2 = new MbCartPoint3D(3, 4, 0)
    expect(p1.Distance(p2)).toBeCloseTo(5, 10)
  })

  it('should calculate squared distance', () => {
    const p1 = new MbCartPoint3D(0, 0, 0)
    const p2 = new MbCartPoint3D(1, 2, 2)
    expect(p1.Distance2(p2)).toBeCloseTo(9, 10)
  })

  it('should convert to Babylon Vector3 with coordinate system swap', () => {
    const p = new MbCartPoint3D(1, 2, 3)
    const v = p.ToBabylon()
    // C3D (x,y,z) → Babylon (x,z,y)
    expect(v.x).toBe(1)
    expect(v.y).toBe(3)
    expect(v.z).toBe(2)
  })

  it('should create from Babylon Vector3', () => {
    const v = new Vector3(1, 2, 3)
    const p = MbCartPoint3D.FromBabylon(v)
    // Babylon (x,y,z) → C3D (x,z,y)
    expect(p.x).toBe(1)
    expect(p.y).toBe(3)
    expect(p.z).toBe(2)
  })

  it('should round-trip Babylon conversion', () => {
    const p = new MbCartPoint3D(1, 2, 3)
    const p2 = MbCartPoint3D.FromBabylon(p.ToBabylon())
    expect(p2.IsEqual(p)).toBe(true)
  })

  it('should compare equality with epsilon', () => {
    const p1 = new MbCartPoint3D(1, 2, 3)
    const p2 = new MbCartPoint3D(1 + 1e-11, 2, 3)
    expect(p1.IsEqual(p2)).toBe(true)
    expect(p1.IsEqual(p2, 1e-12)).toBe(false)
  })

  it('should return origin', () => {
    const p = MbCartPoint3D.Origin()
    expect(p.x).toBe(0)
    expect(p.y).toBe(0)
    expect(p.z).toBe(0)
  })

  it('should convert to array', () => {
    const p = new MbCartPoint3D(1, 2, 3)
    expect(p.ToArray()).toEqual([1, 2, 3])
  })

  // 与 Babylon.js 对比验证
  it('distance should match Babylon Vector3 distance', () => {
    const p1 = new MbCartPoint3D(1, 2, 3)
    const p2 = new MbCartPoint3D(4, 6, 8)
    const v1 = new Vector3(1, 3, 2) // 注意坐标转换
    const v2 = new Vector3(4, 8, 6)
    expect(p1.Distance(p2)).toBeCloseTo(Vector3.Distance(v1, v2), 10)
  })
})
