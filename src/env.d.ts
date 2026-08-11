/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// opencascade.js 类型声明（简化版，后续可补充完整）
declare module 'opencascade.js' {
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

  export interface InitOptions {
    locateFile?: (path: string, scriptDirectory: string) => string
    mainScriptUrlOrBlob?: string
  }

  export default function initOpenCascade(options?: InitOptions): Promise<OpenCascadeInstance>
}
