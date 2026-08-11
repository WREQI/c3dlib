# C3D Kernel TypeScript 实现路线图

> 目标：用 TypeScript 逐步复现 C3D Toolkit 的核心技术能力，类名/变量名/架构与 C3D 高度一致，用 Babylon.js 做可视化，用 OpenCascade.js 做结果验证对比。
> 原则：**小步迭代，每阶段可独立验证，不追求一次性实现完整 SDK**。

---

## 命名与架构约定（强制）

### 命名空间与前缀
- 所有核心类放在 `src/kernel/` 下，按模块分子目录
- 类名严格沿用 C3D 的 `Mb` 前缀（Modeling Base），如 `MbCartPoint3D`、`MbCurve3D`、`MbFace`
- 数学基础类：`MbCartPoint3D`、`MbVector3D`、`MbMatrix3D`、`MbAxis3D`
- 曲线基类：`MbCurve3D`（3D）、`MbCurve`（2D）
- 曲面基类：`MbSurface`
- 拓扑基类：`MbItem` → `MbVertex` / `MbEdge` / `MbLoop` / `MbFace` / `MbShell` / `MbSolid`
- 构建器：`Mb*Creator` / `Mb*Solid`
- 参数对象：`Mb*Params`
- 结果对象：`Mb*Results`
- 智能指针对应：TypeScript 中直接用对象引用，不实现引用计数，但类设计保留 `Duplicate()` / `Init()` 等 C3D 风格方法

### 文件结构
```
src/kernel/
├── math/                    # 阶段1：数学基础
│   ├── MbCartPoint3D.ts
│   ├── MbCartPoint.ts
│   ├── MbVector3D.ts
│   ├── MbVector.ts
│   ├── MbMatrix3D.ts
│   ├── MbAxis3D.ts
│   └── index.ts
├── curves/                  # 阶段2：曲线
│   ├── MbCurve3D.ts         # 抽象基类
│   ├── MbLine3D.ts
│   ├── MbLineSegment3D.ts
│   ├── MbCircle3D.ts
│   ├── MbArc3D.ts
│   ├── MbBezier3D.ts
│   ├── MbNurbs3D.ts
│   └── index.ts
├── surfaces/                # 阶段3：曲面
│   ├── MbSurface.ts         # 抽象基类
│   ├── MbPlane.ts
│   ├── MbCylinderSurface.ts
│   ├── MbConeSurface.ts
│   ├── MbSphereSurface.ts
│   ├── MbTorusSurface.ts
│   ├── MbNurbsSurface.ts
│   └── index.ts
├── topology/                # 阶段4：拓扑
│   ├── MbItem.ts
│   ├── MbVertex.ts
│   ├── MbEdge.ts
│   ├── MbLoop.ts
│   ├── MbFace.ts
│   ├── MbShell.ts
│   ├── MbSolid.ts
│   └── index.ts
├── modeling/                # 阶段5-6：建模操作
│   ├── MbCube.ts
│   ├── MbBooleanSolid.ts
│   ├── MbCurveExtrusionSolid.ts
│   ├── MbCurveRevolutionSolid.ts
│   └── index.ts
├── mesh/                    # 三角剖分
│   ├── MbPolymesh.ts
│   ├── MbMesh.ts
│   └── index.ts
├── visualization/           # Babylon.js 适配层
│   ├── BabylonConverter.ts  # Mb* → Babylon 网格/曲线
│   └── index.ts
├── validation/              # OpenCascade.js 验证层
│   ├── OccValidator.ts      # Mb* → OpenCascade 对比
│   └── index.ts
└── index.ts
```

### 每个类必须包含的方法（C3D 风格）
```typescript
abstract class MbCurve3D {
  // 核心评估
  abstract Point(t: number): MbCartPoint3D;
  abstract Derive1(t: number): MbVector3D;   // 一阶导
  abstract Derive2(t: number): MbVector3D;   // 二阶导
  // 范围
  abstract GetParamStart(): number;
  abstract GetParamEnd(): number;
  // 复制
  abstract Duplicate(): MbCurve3D;
  // 变换
  abstract Transform(matrix: MbMatrix3D): void;
  // 反转
  abstract Reverse(): void;
}
```

---

## 阶段规划（10 个里程碑）

### 阶段 0：项目基础设施 ✅
- [x] Vite + Vue 3 + TypeScript 配置
- [x] Babylon.js 安装与基础场景封装（`BabylonScene.ts`）
- [x] OpenCascade.js 安装与初始化封装（`OccManager.ts`）
- [x] Vitest 测试框架配置（32 个测试全部通过）
- [x] 可视化沙箱页面（`/sandbox` 路由，三栏布局）
- [x] 验证对比面板（我们的实现 ↔ Babylon.js ↔ OpenCascade）
- [x] 数学基础类骨架（`MbCartPoint3D`、`MbVector3D`、`MbMatrix3D`、`MbAxis3D`）
- [x] 单元测试 + 与 Babylon.js 对比验证
- [x] Skill 规范文件（供后续 AI 使用）

**验收：** 沙箱页面能显示 Babylon.js 3D 场景（网格+坐标轴+演示对象），数学基础类 32 个单元测试全部通过，与 Babylon.js 运算误差 < 1e-10。OpenCascade.js 开发模式可加载（生产构建已 external）。

---

### 阶段 1：数学基础库（Math Foundation）
**预估工作量：** 1-2 天
**核心类：** `MbCartPoint3D`、`MbCartPoint`、`MbVector3D`、`MbVector`、`MbMatrix3D`、`MbAxis3D`

**实现清单：**
1. `MbCartPoint3D` — x, y, z 坐标，距离计算
2. `MbVector3D` — 向量运算：加、减、数乘、点积、叉积、模长、归一化
3. `MbMatrix3D` — 4x4 变换矩阵：平移、旋转、缩放、复合、求逆、转置
4. `MbAxis3D` — 坐标轴（原点 + 方向），局部坐标系
5. `MbCartPoint` / `MbVector` — 2D 版本

**验证方法：**
- 单元测试：所有运算与 Babylon.js 的 `Vector3` / `Matrix` 结果对比（误差 < 1e-10）
- OpenCascade 对比：`gp_Pnt` / `gp_Vec` / `gp_Trsf` 变换结果对比

**可视化：**
- 在沙箱中显示坐标系、向量箭头、点
- 矩阵变换前后的对比

**验收标准：**
- [ ] 100% 单元测试覆盖率
- [ ] 与 Babylon.js 数学运算误差 < 1e-10
- [ ] 与 OpenCascade `gp_*` 类运算误差 < 1e-10
- [ ] 沙箱可交互演示向量变换

---

### 阶段 2：曲线基础（Curves）
**预估工作量：** 3-5 天
**核心类：** `MbCurve3D`（抽象）、`MbLine3D`、`MbLineSegment3D`、`MbCircle3D`、`MbArc3D`、`MbBezier3D`、`MbNurbs3D`

**实现顺序（从易到难）：**
1. `MbCurve3D` 抽象基类 — 定义接口
2. `MbLine3D` — 无限直线（点 + 方向）
3. `MbLineSegment3D` — 线段（两点）
4. `MbCircle3D` — 圆（圆心 + 法向 + 半径）
5. `MbArc3D` — 圆弧（圆 + 起止角）
6. `MbBezier3D` — 贝塞尔曲线（控制点数组）
7. `MbNurbs3D` — NURBS 曲线（控制点 + 权 + 节点向量 + 次数）

**每个曲线必须实现：**
- `Point(t)` — 参数点
- `Derive1(t)` — 一阶导（切向量）
- `Derive2(t)` — 二阶导
- `GetParamStart()` / `GetParamEnd()` — 参数范围
- `Duplicate()` — 复制
- `Transform(matrix)` — 变换
- `Reverse()` — 反转方向
- `GetTessellation(step)` — 离散化采样点（用于可视化）

**验证方法：**
- 解析曲线（直线/圆）：与数学公式精确对比
- 贝塞尔/NURBS：与 OpenCascade `Geom_BezierCurve` / `Geom_BSplineCurve` 采样点对比（误差 < 1e-6）
- 德卡斯特里奥算法验证贝塞尔

**可视化：**
- Babylon.js `LinesMesh` 渲染曲线
- 显示控制点、切向量、曲率梳
- 参数滑块交互

**验收标准：**
- [ ] 7 个曲线类全部实现
- [ ] 采样点与 OpenCascade 对比误差 < 1e-6
- [ ] 沙箱可交互调整曲线参数并实时渲染

---

### 阶段 3：曲面基础（Surfaces）
**预估工作量：** 4-6 天
**核心类：** `MbSurface`（抽象）、`MbPlane`、`MbCylinderSurface`、`MbConeSurface`、`MbSphereSurface`、`MbTorusSurface`、`MbNurbsSurface`

**实现顺序：**
1. `MbSurface` 抽象基类
2. `MbPlane` — 平面（点 + 法向）
3. `MbCylinderSurface` — 圆柱面（轴 + 半径）
4. `MbConeSurface` — 圆锥面（轴 + 半径 + 半顶角）
5. `MbSphereSurface` — 球面（球心 + 半径）
6. `MbTorusSurface` — 环面（轴 + 大半径 + 小半径）
7. `MbNurbsSurface` — NURBS 曲面（双变量）

**每个曲面必须实现：**
- `Point(u, v)` — 参数点
- `DeriveU(u, v)` / `DeriveV(u, v)` — 偏导
- `Normal(u, v)` — 法向量
- `GetULimits()` / `GetVLimits()` — 参数范围
- `Duplicate()` / `Transform()` / `ReverseU()` / `ReverseV()`
- `GetTessellation(uStep, vStep)` — 三角网格离散化

**验证方法：**
- 解析曲面：与数学公式对比
- NURBS 曲面：与 OpenCascade `Geom_BSplineSurface` 对比
- 法向量方向验证

**可视化：**
- Babylon.js 网格渲染（着色 + 线框）
- UV 参数网格显示
- 法向量箭头

**验收标准：**
- [ ] 7 个曲面类全部实现
- [ ] 采样点与 OpenCascade 对比误差 < 1e-6
- [ ] 法向量方向正确
- [ ] 沙箱可交互调整曲面参数

---

### 阶段 4：拓扑结构（Topology / B-Rep）
**预估工作量：** 5-7 天
**核心类：** `MbItem`、`MbVertex`、`MbEdge`、`MbLoop`、`MbFace`、`MbShell`、`MbSolid`

**B-Rep 层级：**
```
MbSolid (实体)
  └── MbShell (壳)
        └── MbFace (面)
              ├── MbSurface (几何曲面)
              └── MbLoop (环)
                    └── MbEdge (边)
                          ├── MbCurve3D (几何曲线)
                          ├── MbVertex (起点)
                          └── MbVertex (终点)
```

**实现要点：**
1. `MbItem` — 所有拓扑对象基类，含 `GetType()`、`Duplicate()`、`Transform()`
2. `MbVertex` — 顶点，引用 `MbCartPoint3D`
3. `MbEdge` — 边，引用 `MbCurve3D` + 两个顶点 + 方向标志
4. `MbLoop` — 环，有序边集合（有向边）
5. `MbFace` — 面，引用 `MbSurface` + 多个环（外环 + 内环）
6. `MbShell` — 壳，面集合
7. `MbSolid` — 实体，壳集合

**关键设计：**
- 拓扑与几何分离：拓扑对象引用几何对象，不持有
- 有向边（Oriented Edge）模式：边本身无方向，在环中指定方向
- 欧拉操作：`MakeVertex`、`MakeEdge`、`MakeLoop`、`MakeFace`、`MakeShell`、`MakeSolid`

**验证方法：**
- 构建一个立方体的 B-Rep，验证拓扑一致性
- 欧拉示性数验证：V - E + F = 2（对闭合实体）
- 与 OpenCascade `BRepBuilderAPI` 构建结果对比

**可视化：**
- 线框模式：显示边和顶点
- 着色模式：面渲染
- 拓扑树浏览器

**验收标准：**
- [ ] 7 个拓扑类全部实现
- [ ] 能正确构建立方体/圆柱/球的 B-Rep
- [ ] 欧拉示性数验证通过
- [ ] 拓扑遍历正确（面→环→边→顶点）

---

### 阶段 5：基本实体建模（Primitive Solids）
**预估工作量：** 3-4 天
**核心类：** `MbCube`、`MbCylinder`、`MbCone`、`MbSphere`、`MbTorus`、`MbCurveExtrusionSolid`、`MbCurveRevolutionSolid`

**实现：**
1. 基本体素：立方体、圆柱、圆锥、球、环 — 直接生成 B-Rep
2. 拉伸：`MbCurveExtrusionSolid` — 2D 轮廓沿方向拉伸
3. 旋转：`MbCurveRevolutionSolid` — 2D 轮廓绕轴旋转
4. 每个实体生成后自动计算拓扑结构

**验证方法：**
- 体积/表面积计算与解析公式对比
- 与 OpenCascade `BRepPrimAPI` 生成的实体对比（拓扑结构 + 体积）
- 三角剖分后顶点数/面数合理性

**可视化：**
- 实体着色渲染
- 爆炸视图（分离各个面）
- 参数调整实时重建

**验收标准：**
- [ ] 5 个基本体素 + 2 个扫描操作
- [ ] 体积误差 < 1%
- [ ] 与 OpenCascade 实体拓扑结构一致

---

### 阶段 6：布尔运算（Boolean Operations）
**预估工作量：** 7-10 天（最复杂阶段）
**核心类：** `MbBooleanSolid`、`MbBooleanOperationParams`、`MbBooleanOperationResults`

**三种运算：**
- 并集（Union / Fuse）
- 交集（Intersection / Common）
- 差集（Difference / Cut）

**实现步骤（经典布尔算法）：**
1. 曲面求交：计算两个实体所有面对的交线
2. 边分割：用交点分割原有边
3. 面分割：用交线环分割原有面
4. 分类判定：判断哪些面/部分在另一个实体内/外/上
5. 拓扑合并：根据运算类型选择保留的面，构建新实体

**简化策略（第一版）：**
- 先实现凸多面体之间的布尔（平面求交简单）
- 再扩展到含曲面的实体
- 使用 OpenCascade 的布尔结果作为"正确答案"验证

**验证方法：**
- 立方体之间的布尔运算：结果体积可解析计算
- 与 OpenCascade `BRepAlgoAPI_Fuse` / `Common` / `Cut` 结果对比
- 退化情况处理（共面、相切、完全包含）

**验收标准：**
- [ ] 凸多面体布尔运算正确
- [ ] 体积误差 < 2%
- [ ] 与 OpenCascade 结果拓扑结构一致
- [ ] 处理至少 3 种退化情况

---

### 阶段 7：三角剖分与网格（Tessellation & Mesh）
**预估工作量：** 3-4 天
**核心类：** `MbPolymesh`、`MbMesh`、`MbCurveTessellation`

**实现：**
1. 曲线离散化：按弦高误差自适应采样
2. 曲面三角剖分：按参数网格均匀采样 + 自适应细分
3. `MbPolymesh` — 多边形网格数据结构（顶点 + 面索引）
4. 从 B-Rep 实体生成三角网格

**验证方法：**
- 离散化后曲线/曲面与原几何误差在阈值内
- 网格法向量与解析法向量对比
- 与 OpenCascade `BRepMesh_IncrementalMesh` 结果对比（顶点数近似）

**验收标准：**
- [ ] 曲线自适应离散化
- [ ] 曲面三角剖分
- [ ] 误差可控
- [ ] Babylon.js 渲染正确

---

### 阶段 8：约束求解（2D Sketch Constraints）
**预估工作量：** 5-7 天
**核心类：** `MbConstraintSystem2D`、`MbConstraint`、`MbConstraintItem`

**约束类型：**
- 固定（Fixed）
- 距离（Distance）
- 角度（Angle）
- 平行（Parallel）
- 垂直（Perpendicular）
- 相切（Tangent）
- 重合（Coincident）

**求解方法：**
- 自由度分析
- 牛顿-拉夫逊迭代求解非线性方程组
- 雅可比矩阵计算

**验证方法：**
- 简单草图约束求解结果与几何预期一致
- 与 OpenCascade `Sketch` 或手动计算对比

**验收标准：**
- [ ] 5 种以上约束类型
- [ ] 求解收敛稳定
- [ ] 过约束/欠约束检测

---

### 阶段 9：数据交换（Data Exchange）
**预估工作量：** 4-6 天
**核心类：** `MbStepReader`、`MbStepWriter`、`MbStlReader`、`MbStlWriter`

**实现：**
1. STL 导入导出（二进制 + ASCII）
2. STEP 基础解析（先支持简单几何体）
3. 利用 OpenCascade 做格式转换的"金标准"

**验证方法：**
- 导出再导入，数据一致性
- 与 OpenCascade 读写结果对比

**验收标准：**
- [ ] STL 读写正确
- [ ] STEP 基础解析
- [ ] 往返一致性

---

### 阶段 10：高级可视化与交互（Advanced Visualization）
**预估工作量：** 持续迭代
**功能：**
- 多渲染模式切换（线框/消隐/着色/透明）
- 拾取与选择（点选/框选）
- 截面视图（Clipping Plane）
- 测量工具（距离/角度/面积）
- 模型树浏览器
- 图层管理

---

## 开发流程规范（每个阶段必须遵守）

### 1. 开工前
- 阅读本 ROADMAP 对应阶段
- 查看 C3D Doxygen 文档中对应类的接口定义
- 确认 OpenCascade.js 中对应的类作为验证参考

### 2. 实现中
- 先写接口定义（抽象类/interface）
- 再写最简实现
- 同步写单元测试
- 同步写 Babylon.js 可视化适配
- 同步写 OpenCascade 验证对比

### 3. 完成后
- 运行全部测试，确保无回归
- 在沙箱页面验证可视化
- 与 OpenCascade 结果对比，记录误差
- 更新本 ROADMAP 的验收清单
- 提交代码，commit message 格式：`[stage-X] 类名: 简要说明`

### 4. 验证对比规范
每个核心算法必须提供三方对比：
```
我们的实现 (Mb*)  ←→  Babylon.js (数学部分)  ←→  OpenCascade.js (几何部分)
```
误差阈值：
- 纯数学运算：< 1e-10
- 曲线/曲面采样：< 1e-6
- 拓扑/布尔体积：< 2%

---

## 关键参考映射表

| C3D 类 | 我们的 TS 类 | Babylon.js 对应 | OpenCascade 对应 |
|--------|-------------|----------------|-----------------|
| `MbCartPoint3D` | `MbCartPoint3D` | `BABYLON.Vector3` | `gp_Pnt` |
| `MbVector3D` | `MbVector3D` | `BABYLON.Vector3` | `gp_Vec` |
| `MbMatrix3D` | `MbMatrix3D` | `BABYLON.Matrix` | `gp_Trsf` |
| `MbAxis3D` | `MbAxis3D` | `BABYLON.Vector3` + 点 | `gp_Ax3` |
| `MbLine3D` | `MbLine3D` | - | `Geom_Line` |
| `MbCircle3D` | `MbCircle3D` | - | `Geom_Circle` |
| `MbBezier3D` | `MbBezier3D` | - | `Geom_BezierCurve` |
| `MbNurbs3D` | `MbNurbs3D` | - | `Geom_BSplineCurve` |
| `MbPlane` | `MbPlane` | - | `Geom_Plane` |
| `MbCylinderSurface` | `MbCylinderSurface` | - | `Geom_CylindricalSurface` |
| `MbSphereSurface` | `MbSphereSurface` | - | `Geom_SphericalSurface` |
| `MbFace` | `MbFace` | - | `TopoDS_Face` |
| `MbEdge` | `MbEdge` | - | `TopoDS_Edge` |
| `MbVertex` | `MbVertex` | - | `TopoDS_Vertex` |
| `MbSolid` | `MbSolid` | - | `TopoDS_Solid` |
| `MbPolymesh` | `MbPolymesh` | `BABYLON.Mesh` | `Poly_Triangulation` |

---

## 常用命令
```bash
# 开发
npm run dev

# 测试
npm run test
npm run test:watch

# 类型检查
npm run type-check

# 构建
npm run build
```
