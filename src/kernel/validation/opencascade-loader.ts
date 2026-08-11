// opencascade.js 自定义加载器
// 原因：opencascade.js 官方入口用默认 wasm 导入，会被 vite-plugin-wasm 拦截并报错
// 这里改用 ?url 方式获取 wasm 地址，由 emscripten 的 JS 运行时自己 fetch 加载
import opencascadeFactory from 'opencascade.js/dist/opencascade.wasm.js'
import wasmUrl from 'opencascade.js/dist/opencascade.wasm.wasm?url'

/** OpenCascade 实例类型（简化声明，实际为 any，使用时按需访问属性） */
export interface OpenCascadeInstance {
  gp_Pnt: any
  gp_Vec: any
  gp_Trsf: any
  gp_Ax3: any
  Geom_Line: any
  Geom_Circle: any
  Geom_BezierCurve: any
  Geom_BSplineCurve: any
  Geom_Plane: any
  Geom_CylindricalSurface: any
  Geom_SphericalSurface: any
  BRepBuilderAPI_MakeVertex: any
  BRepBuilderAPI_MakeEdge: any
  BRepBuilderAPI_MakeFace: any
  BRepPrimAPI_MakeBox: any
  BRepPrimAPI_MakeCylinder: any
  BRepPrimAPI_MakeSphere: any
  BRepAlgoAPI_Fuse: any
  BRepAlgoAPI_Common: any
  BRepAlgoAPI_Cut: any
  BRepMesh_IncrementalMesh: any
  TopoDS_Shape: any
  TopoDS_Solid: any
  TopoDS_Face: any
  TopoDS_Edge: any
  TopoDS_Vertex: any
  [key: string]: any
}

export function initOpenCascade(): Promise<OpenCascadeInstance> {
  return new opencascadeFactory({
    locateFile(path: string) {
      if (path.endsWith('.wasm')) {
        return wasmUrl
      }
      return path
    }
  }) as Promise<OpenCascadeInstance>
}
