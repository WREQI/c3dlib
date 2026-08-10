// C3D Toolkit 完整架构数据
// 基于 Doxygen modules.html 解析 + 技术分析

export const coreModules = [
  {
    id: 'modeler',
    name: 'C3D Modeler',
    nameEn: 'Geometric Modeling Kernel',
    chineseName: '几何建模内核',
    color: '#3b82f6',
    icon: 'cube',
    version: 'Kernel 118065',
    description: 'C3D Toolkit 的核心模块，提供完整的几何建模能力，包括边界表示法 (B-Rep) 实体建模、曲面建模、曲线建模、钣金建模和直接编辑。',
    descriptionLong: 'C3D Modeler 是俄罗斯 C3D Labs 开发的几何建模内核，采用边界表示法 (B-Rep) 作为核心数据结构。它支持精确的参数化实体建模、自由曲面建模、混合建模等多种建模方式。内核采用面向对象设计，所有几何对象都继承自统一的基类体系，支持智能指针管理和序列化持久化。',
    keyFeatures: [
      '精确 B-Rep 实体建模（布尔运算、扫掠、放样、旋转）',
      '自由曲面建模（NURBS、B样条、插值、逼近）',
      '参数化与直接编辑混合建模',
      '钣金设计与展开',
      '2D 草图与约束驱动',
      '拓扑操作与局部修改'
    ],
    techStack: ['C++', 'B-Rep', 'NURBS', '智能指针', '序列化'],
    docUrl: '/api-docs/group___geometric___modelling.html',
    subModules: [
      {
        id: 'geometric-items',
        name: '几何对象',
        docUrl: '/api-docs/group___geometric___items.html',
        description: '定义模型中的所有几何对象类型',
        children: [
          { id: 'model-items', name: '模型对象', docUrl: '/api-docs/group___model___items.html', desc: 'MbModel - 整个几何模型的容器，管理所有对象的生命周期和版本' },
          { id: 'topology-items', name: '拓扑对象', docUrl: '/api-docs/group___topology___items.html', desc: '体、壳、面、环、边、顶点的拓扑层级结构' },
          { id: 'surfaces', name: '曲面', docUrl: '/api-docs/group___surfaces.html', desc: '平面、圆柱、圆锥、球面、NURBS曲面、偏移曲面等' },
          { id: 'curves-3d', name: '3D曲线', docUrl: '/api-docs/group___curves__3_d.html', desc: '直线、圆、椭圆、NURBS曲线、贝塞尔曲线、组合曲线' },
          { id: 'point-3d', name: '点', docUrl: '/api-docs/group___point__3_d.html', desc: '三维点对象及相关操作' },
          { id: 'legend', name: '辅助对象', docUrl: '/api-docs/group___legend.html', desc: '坐标系、标注、辅助几何等' },
          { id: 'curves-2d', name: '2D曲线', docUrl: '/api-docs/group___curves__2_d.html', desc: '二维参数空间曲线' },
          { id: 'region-2d', name: '2D区域', docUrl: '/api-docs/group___region__2_d.html', desc: '二维区域定义与操作' }
        ]
      },
      {
        id: 'algorithm-items',
        name: '算法对象',
        docUrl: '/api-docs/group___base___items.html',
        description: '支撑建模算法的基础数据结构',
        children: [
          { id: 'math-base-3d', name: '3D基础对象', docUrl: '/api-docs/group___mathematic___base__3_d.html', desc: '向量、矩阵、变换、坐标系等三维数学基础' },
          { id: 'math-base-2d', name: '2D基础对象', docUrl: '/api-docs/group___mathematic___base__2_d.html', desc: '二维数学基础对象' },
          { id: 'model-creators', name: '构建器', docUrl: '/api-docs/group___model___creators.html', desc: 'Creator 模式实现的对象构建器' },
          { id: 'model-attributes', name: '属性', docUrl: '/api-docs/group___model___attributes.html', desc: '可附加到几何对象的属性系统' },
          { id: 'build-parameters', name: '操作参数', docUrl: '/api-docs/group___build___parameters.html', desc: '各类建模操作的参数对象' },
          { id: 'model-properties', name: '属性查询', docUrl: '/api-docs/group___model___properties.html', desc: '几何属性计算与查询' },
          { id: 'data-structures', name: '数据结构', docUrl: '/api-docs/group___data___structures.html', desc: '内部数据结构（平衡树、哈希表等）' },
          { id: 'model', name: '模型', docUrl: '/api-docs/group___model.html', desc: '模型级别的操作与管理' }
        ]
      },
      {
        id: 'modeling-functions',
        name: '建模方法',
        docUrl: '/api-docs/group___modelling___functions.html',
        description: '核心几何构建算法',
        children: [
          { id: 'solid-modeling', name: '实体建模', docUrl: '/api-docs/group___solid___modeling.html', desc: '布尔运算、扫掠、放样、旋转、抽壳等实体操作' },
          { id: 'shell-modeling', name: '壳体建模', docUrl: '/api-docs/group___shell___modeling.html', desc: '曲面缝合、壳体构建' },
          { id: 'sheet-metal', name: '钣金建模', docUrl: '/api-docs/group___sheet___metal___modeling.html', desc: '折弯、展开、冲压等钣金特征' },
          { id: 'direct-modeling', name: '直接编辑', docUrl: '/api-docs/group___direct___modeling.html', desc: '无历史树的直接几何编辑' },
          { id: 'surface-modeling', name: '曲面建模', docUrl: '/api-docs/group___surface___modeling.html', desc: '放样曲面、网格曲面、填充曲面' },
          { id: 'curve3d-modeling', name: '3D曲线建模', docUrl: '/api-docs/group___curve3_d___modeling.html', desc: '三维曲线构建算法' },
          { id: 'curve-modeling', name: '2D曲线建模', docUrl: '/api-docs/group___curve___modeling.html', desc: '二维曲线构建算法' },
          { id: 'base-algorithms', name: '基础算法', docUrl: '/api-docs/group___base___algorithms.html', desc: '几何求交、投影、最近点等' },
          { id: 'algorithms-3d', name: '3D算法', docUrl: '/api-docs/group___algorithms__3_d.html', desc: '三维空间几何算法' },
          { id: 'algorithms-2d', name: '2D算法', docUrl: '/api-docs/group___algorithms__2_d.html', desc: '二维空间几何算法' }
        ]
      },
      {
        id: 'geometric-computation',
        name: '几何计算',
        docUrl: '/api-docs/group___geometric___computation.html',
        description: '离散化与分析计算',
        children: [
          { id: 'polygonal-objects', name: '多边形对象', docUrl: '/api-docs/group___polygonal___objects.html', desc: '网格表示的多边形模型' },
          { id: 'triangulation', name: '三角剖分', docUrl: '/api-docs/group___triangulation.html', desc: 'B-Rep 到三角网格的离散化' },
          { id: 'mapping', name: '平面投影', docUrl: '/api-docs/group___mapping.html', desc: '3D到2D的投影映射' },
          { id: 'inertia', name: '惯性计算', docUrl: '/api-docs/group___inertia___computation.html', desc: '质量、体积、重心、惯性张量' },
          { id: 'collision', name: '碰撞检测', docUrl: '/api-docs/group___collision___detection.html', desc: '精确碰撞检测与距离计算' },
          { id: 'drawing', name: '可视化绘制', docUrl: '/api-docs/group___drawing.html', desc: '几何对象的绘制辅助' }
        ]
      },
      {
        id: 'base-tools',
        name: '基础工具库',
        docUrl: '/api-docs/group___base___tools.html',
        description: '模板库与序列化',
        children: [
          { id: 'containers', name: '容器', docUrl: '/api-docs/group___base___tools___containers.html', desc: '自定义容器模板（数组、链表、映射）' },
          { id: 'smart-pointers', name: '智能指针', docUrl: '/api-docs/group___base___tools___smart_pointers.html', desc: '引用计数智能指针 SPtr' },
          { id: 'string', name: '字符串', docUrl: '/api-docs/group___base___tools___string.html', desc: '字符串处理工具' },
          { id: 'io', name: 'IO流', docUrl: '/api-docs/group___base___tools___i_o.html', desc: '序列化流与文件IO' },
          { id: 'graph-lib', name: '图库', docUrl: '/api-docs/group___base___graph_lib.html', desc: '图数据结构与算法' }
        ]
      }
    ]
  },
  {
    id: 'solver',
    name: 'C3D Solver',
    nameEn: 'Geometric Constraints Solver',
    chineseName: '几何约束求解器',
    color: '#8b5cf6',
    icon: 'puzzle',
    version: 'Solver Module',
    description: '参数化约束求解引擎，支持2D草图约束和3D装配约束的求解，是参数化设计的核心。',
    descriptionLong: 'C3D Solver 是一个几何约束求解引擎，用于解决参数化设计中的约束满足问题。它支持2D草图中的尺寸约束（距离、角度、半径）和几何约束（平行、垂直、相切、同心），以及3D装配中的配合约束。求解器采用数值迭代方法，能够处理过约束、欠约束和完全约束系统，并提供约束冲突诊断。',
    keyFeatures: [
      '2D 草图约束求解（尺寸+几何约束）',
      '3D 装配约束求解（配合、对齐、角度）',
      '过约束/欠约束检测与诊断',
      '约束冲突自动识别',
      '增量式求解（修改局部不重算全局）',
      '驱动尺寸与从动尺寸'
    ],
    techStack: ['C++', '数值优化', '牛顿迭代', '稀疏矩阵', '约束图'],
    docUrl: '/api-docs/group___geometric___constraints.html',
    subModules: [
      {
        id: 'solver-3d',
        name: '3D约束求解',
        docUrl: '/api-docs/group___solver__3_d.html',
        description: '三维几何约束求解',
        children: [
          { id: 'gcm-3d-api', name: '基础API', docUrl: '/api-docs/group___g_c_m__3_d___a_p_i.html', desc: 'GCM 3D 求解器基础函数与数据类型' },
          { id: 'gcm-3d-object', name: '对象接口', docUrl: '/api-docs/group___g_c_m__3_d___object_a_p_i.html', desc: '面向对象的约束管理接口' },
          { id: 'gcm-3d-routines', name: '辅助过程', docUrl: '/api-docs/group___g_c_m__3_d___routines.html', desc: '约束诊断与工具函数' }
        ]
      },
      {
        id: 'solver-2d',
        name: '2D约束求解',
        docUrl: '/api-docs/group___solver__2_d.html',
        description: '二维草图约束求解',
        children: [
          { id: 'constraints-2d-api', name: '2D约束接口', docUrl: '/api-docs/group___constraints2_d___a_p_i.html', desc: '二维约束求解器完整API' }
        ]
      }
    ]
  },
  {
    id: 'converter',
    name: 'C3D Converter',
    nameEn: 'Data Exchange Module',
    chineseName: '数据交换模块',
    color: '#10b981',
    icon: 'exchange',
    version: 'Converter Module',
    description: '支持多种主流 CAD 格式的导入导出，包括 STEP、IGES、Parasolid、ACIS、STL、VRML、DXF 等。',
    descriptionLong: 'C3D Converter 提供了完整的 CAD 数据交换能力，支持行业标准格式（STEP、IGES）和专有格式（Parasolid、ACIS）的双向转换。转换器采用中间表示架构，先将外部格式解析为内部 B-Rep 模型，再从内部模型导出目标格式，支持几何精度控制、层/颜色/材质映射和属性保留。',
    keyFeatures: [
      'STEP AP203/AP214/AP242 双向转换',
      'IGES 5.3 导入导出',
      'Parasolid (.x_t/.x_b) 双向',
      'ACIS (.sat/.sab) 双向',
      'STL 三角网格导出',
      'DXF 3D 导入导出',
      'VRML 导出'
    ],
    techStack: ['C++', 'SDAI', 'EXPRESS', 'B-Rep映射', '容差建模'],
    docUrl: '/api-docs/group___data___exchange.html',
    subModules: [
      {
        id: 'exchange-interface',
        name: '转换器接口',
        docUrl: '/api-docs/group___exchange___interface.html',
        description: '统一的转换接口抽象',
        children: []
      },
      {
        id: 'exchange-formats',
        name: '支持格式',
        docUrl: '/api-docs/group___exchange___formats.html',
        description: '各格式的具体实现',
        children: [
          { id: 'parasolid', name: 'Parasolid', docUrl: '/api-docs/group___parasolid___exchange.html', desc: 'Siemens Parasolid 格式 (.x_t, .x_b)' },
          { id: 'acis', name: 'ACIS', docUrl: '/api-docs/group___a_c_i_s___exchange.html', desc: 'Dassault ACIS 格式 (.sat, .sab)' },
          { id: 'iges', name: 'IGES', docUrl: '/api-docs/group___i_g_e_s___exchange.html', desc: '初始图形交换规范 IGES 5.3' },
          { id: 'step', name: 'STEP', docUrl: '/api-docs/group___s_t_e_p___exchange.html', desc: 'ISO 10303 STEP 标准格式' },
          { id: 'stl', name: 'STL', docUrl: '/api-docs/group___s_t_l___exchange.html', desc: '3D打印三角网格格式' },
          { id: 'vrml', name: 'VRML', docUrl: '/api-docs/group___v_r_m_l___exchange.html', desc: '虚拟现实建模语言' },
          { id: 'dxf', name: 'DXF 3D', docUrl: '/api-docs/group___d_x_f___exchange.html', desc: 'AutoCAD DXF 3D 格式' }
        ]
      }
    ]
  },
  {
    id: 'vision',
    name: 'C3D Vision',
    nameEn: 'Visualization Engine',
    chineseName: '可视化引擎',
    color: '#f59e0b',
    icon: 'eye',
    version: 'Vision 2.16.3.1835',
    description: '基于场景图的3D可视化引擎，提供高性能渲染、交互操作和对象拾取。',
    descriptionLong: 'C3D Vision 是一个基于场景图（Scene Graph）的3D可视化引擎，专为 CAD 应用设计。它将 C3D Modeler 的精确 B-Rep 模型离散化为渲染图元，通过层次化场景图管理可见性、变换和材质。引擎支持多种渲染模式（线框、消隐、着色、真实感）、交互式相机控制、多选拾取和标注显示。',
    keyFeatures: [
      '层次化场景图管理',
      '多渲染模式（线框/消隐/着色）',
      '高性能三角网格渲染',
      '交互式相机控制（旋转/平移/缩放）',
      '精确几何拾取（点/线/面）',
      '标注与尺寸显示',
      '后处理效果'
    ],
    techStack: ['C++', 'OpenGL', '场景图', 'LOD', '拾取算法'],
    docUrl: '/api-docs/group___vision___data.html',
    subModules: [
      {
        id: 'vision-scene-graph',
        name: '场景图',
        docUrl: '/api-docs/group___vision___scene_graph.html',
        description: '场景的层次化表示',
        children: []
      },
      {
        id: 'vision-geometry',
        name: '几何表示',
        docUrl: '/api-docs/group___vision___geometry.html',
        description: '可渲染的几何图元',
        children: []
      },
      {
        id: 'vision-viewport',
        name: '视口与渲染',
        docUrl: '/api-docs/group___vision___viewport.html',
        description: '渲染管线与相机管理',
        children: [
          { id: 'vision-process', name: '相机控制', docUrl: '/api-docs/group___vision___process.html', desc: '旋转、平移、缩放等交互过程' }
        ]
      },
      {
        id: 'vision-tools',
        name: '辅助工具',
        docUrl: '/api-docs/group___vision___tools.html',
        description: '拾取与交互工具',
        children: [
          { id: 'vision-pick', name: '对象拾取', docUrl: '/api-docs/group___vision___pick.html', desc: '几何对象的精确拾取与选择' }
        ]
      }
    ]
  }
]

// 架构层级关系（用于架构图）
export const architectureLayers = [
  {
    id: 'application',
    name: '应用层',
    description: 'CAD/CAM/CAE 应用程序',
    color: '#ec4899',
    items: ['三维建模软件', 'CAM 加工系统', 'CAE 仿真前处理', '3D 打印切片', 'BIM 工具']
  },
  {
    id: 'api',
    name: 'API 接口层',
    description: 'C++ 类库接口',
    color: '#8b5cf6',
    items: ['Modeler API', 'Solver API', 'Converter API', 'Vision API']
  },
  {
    id: 'core',
    name: '核心功能层',
    description: '四大核心模块',
    color: '#3b82f6',
    items: ['C3D Modeler', 'C3D Solver', 'C3D Converter', 'C3D Vision']
  },
  {
    id: 'foundation',
    name: '基础支撑层',
    description: '数学与工具库',
    color: '#06b6d4',
    items: ['数学基础库', '容器与智能指针', '序列化系统', '图算法库', '字符串与IO']
  }
]

// 技术统计
export const techStats = {
  totalClasses: 0, // 动态计算
  totalGroups: 78,
  coreModules: 4,
  supportedFormats: 7,
  languages: ['C++'],
  platforms: ['Windows', 'Linux', 'macOS', 'iOS', 'Android']
}

// 根据 id 查找模块
export function findModule(id) {
  for (const mod of coreModules) {
    if (mod.id === id) return mod
    for (const sub of mod.subModules || []) {
      if (sub.id === id) return { ...sub, parent: mod }
      for (const child of sub.children || []) {
        if (child.id === id) return { ...child, parent: mod, grandparent: sub }
      }
    }
  }
  return null
}

// 获取所有叶子模块（用于搜索和列表）
export function getAllLeafModules() {
  const leaves = []
  for (const mod of coreModules) {
    for (const sub of mod.subModules || []) {
      if (sub.children && sub.children.length > 0) {
        for (const child of sub.children) {
          leaves.push({ ...child, parent: mod, category: sub.name })
        }
      } else {
        leaves.push({ ...sub, parent: mod, category: mod.name })
      }
    }
  }
  return leaves
}
