import { initOpenCascade, type OpenCascadeInstance } from './opencascade-loader'

/**
 * OpenCascade.js 单例封装
 * 用于验证我们的 Mb* 实现结果
 *
 * 对应 C3D 参考：作为几何运算的"金标准"对比
 */
class OccManager {
  private instance: OpenCascadeInstance | null = null
  private initPromise: Promise<OpenCascadeInstance> | null = null

  /**
   * 初始化 OpenCascade.js（异步，单例）
   */
  async init(): Promise<OpenCascadeInstance> {
    if (this.instance) return this.instance
    if (this.initPromise) return this.initPromise

    this.initPromise = initOpenCascade().then(occ => {
      this.instance = occ
      return occ
    })

    return this.initPromise
  }

  /** 获取已初始化的实例 */
  getInstance(): OpenCascadeInstance | null {
    return this.instance
  }

  /** 是否已初始化 */
  isReady(): boolean {
    return this.instance !== null
  }

  /** 等待初始化完成 */
  async waitForReady(): Promise<OpenCascadeInstance> {
    if (this.instance) return this.instance
    return this.init()
  }
}

export const occManager = new OccManager()
export type { OpenCascadeInstance }
