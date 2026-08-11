// 学习路径数据：从最基础的点开始，循序渐进
// 顺序：点 → 向量 → 矩阵/坐标系 → 曲线 → 曲面 → 拓扑 → 实体建模 → 高级主题
// 每个学习单元对应一个具体的 C3D 类或核心概念

export const learningStages = [
  // ==================== 阶段1：点与坐标 ====================
  {
    id: 'stage-1',
    title: '点与坐标系统',
    duration: '2-3 天',
    color: '#3b82f6',
    description: '从最基础的几何元素——点开始，理解二维与三维坐标系统，掌握点的表示与运算。',
    output: '能够创建并操作 2D/3D 点，计算两点距离',
    lessons: [
      {
        id: 'what-is-kernel',
        title: '什么是几何建模内核',
        duration: '20分钟',
        difficulty: '入门',
        objectives: [
          '理解几何建模内核（Geometric Kernel）的定义与作用',
          '了解 C3D Toolkit 在 CAD 软件栈中的位置',
          '建立"内核=几何计算引擎"的心智模型'
        ],
        concepts: [
          {
            title: '几何内核的定义',
            content: '几何建模内核是一套提供几何表示、拓扑操作和建模算法的核心函数库。它是 CAD 软件的"发动机"，负责处理三维模型的数学表示、空间变换、布尔运算、曲面求交等底层计算。应用程序（如 SolidWorks、KOMPAS-3D）在内核之上构建用户界面和特征管理。'
          },
          {
            title: 'C3D Toolkit 的四大模块',
            content: 'C3D Modeler（几何建模）、C3D Solver（约束求解）、C3D Converter（数据交换）、C3D Vision（可视化）。我们的学习从 Modeler 的数学基础开始，逐步深入到各个模块。'
          },
          {
            title: '学习路径设计原则',
            content: '从最基础的几何元素（点）开始，逐步构建到复杂的实体。每一步都对应 C3D 中一个具体的类（如 MbCartPoint3D），学完概念就能看懂 src/kernel/ 下对应的 TypeScript 实现。'
          }
        ],
        codeExample: null,
        exercise: {
          question: '如果一个 CAD 软件要支持"测量两点距离"功能，内核需要提供什么基础能力？',
          hint: '思考：需要表示点，还需要计算距离',
          answer: '需要：1) 点的数据结构（存储坐标）2) 距离计算函数（欧几里得距离公式）。这正是我们接下来要学的 MbCartPoint3D 类的核心功能。'
        },
        resources: [
          { name: 'C3D Modeler 模块概览', url: '/module/modeler', type: '模块分析' }
        ]
      },
      {
        id: 'point-2d',
        title: '二维点 MbCartPoint',
        duration: '30分钟',
        difficulty: '入门',
        objectives: [
          '理解二维笛卡尔坐标系',
          '掌握 MbCartPoint 的坐标表示 (x, y)',
          '学会两点距离计算和点的变换'
        ],
        concepts: [
          {
            title: '二维笛卡尔坐标',
            content: '二维点用 (x, y) 两个坐标表示，x 是水平轴，y 是垂直轴。原点是 (0, 0)。二维点常用于草图绘制、轮廓定义、平面几何计算。C3D 中用 MbCartPoint 表示二维点。'
          },
          {
            title: '点的核心运算',
            content: '距离计算：两点 P1(x1,y1) 和 P2(x2,y2) 的距离 = √((x2-x1)² + (y2-y1)²)。变换：通过矩阵对点进行平移、旋转、缩放。判等：在容差范围内判断两点是否重合（浮点数不能直接用 ==）。'
          },
          {
            title: '2D 点的应用场景',
            content: '草图轮廓的顶点、平面多边形的顶点、参数曲线的控制点（2D 投影）、UV 参数域中的点。虽然我们主要做 3D 建模，但 2D 点是草图和参数化的基础。'
          }
        ],
        codeExample: {
          language: 'typescript',
          title: '二维点的基本操作（待实现类）',
          code: `// 未来实现：MbCartPoint
// const p1 = new MbCartPoint(0, 0)      // 原点
// const p2 = new MbCartPoint(3, 4)      // (3, 4)
// const dist = p1.Distance(p2)          // √(3²+4²) = 5
// p1.Init(1, 1)                         // 重新设置坐标
// const p3 = p1.Duplicate()             // 复制点`
        },
        exercise: {
          question: '点 A(1, 2) 和点 B(4, 6) 之间的距离是多少？',
          hint: '用勾股定理：距离 = √((x差)² + (y差)²)',
          answer: 'x差 = 4-1 = 3，y差 = 6-2 = 4，距离 = √(3²+4²) = √25 = 5。'
        },
        resources: [
          { name: '点对象学习', url: '/module/modeler/point-3d', type: '学习页面' }
        ]
      },
      {
        id: 'point-3d',
        title: '三维点 MbCartPoint3D',
        duration: '35分钟',
        difficulty: '入门',
        objectives: [
          '理解三维笛卡尔坐标系 (x, y, z)',
          '掌握 MbCartPoint3D 的完整接口',
          '理解右手坐标系与 Z-up 约定'
        ],
        concepts: [
          {
            title: '三维坐标与右手系',
            content: '三维点用 (x, y, z) 三个坐标表示。C3D 使用右手坐标系，Z 轴向上：右手四指从 X 轴弯向 Y 轴，大拇指指向 Z 轴正方向。这与 Babylon.js 的左手系 Y-up 不同，需要坐标转换。'
          },
          {
            title: 'MbCartPoint3D 核心方法',
            content: 'Set(x,y,z) / Init(x,y,z)：设置坐标；Duplicate()：复制点；Distance(p)：计算到另一点的距离；Distance2(p)：距离的平方（避免开方，用于比较）；Transform(matrix)：应用变换矩阵；ToBabylon()：转换为 Babylon.js 坐标（x,z,y）。'
          },
          {
            title: '我们的实现',
            content: 'src/kernel/math/MbCartPoint3D.ts 已完整实现，包含 13 个单元测试。可以直接查看源码理解每个方法的实现，并运行 npm test 验证。'
          }
        ],
        codeExample: {
          language: 'typescript',
          title: 'MbCartPoint3D 实际代码（已实现）',
          code: `import { MbCartPoint3D } from '@/kernel/math/MbCartPoint3D'

const p1 = new MbCartPoint3D(0, 0, 0)
const p2 = new MbCartPoint3D(3, 4, 0)

// 距离计算
console.log(p1.Distance(p2))   // 5
console.log(p1.Distance2(p2))  // 25（平方，无开方）

// 变换（平移）
import { MbMatrix3D } from '@/kernel/math/MbMatrix3D'
const translate = MbMatrix3D.Translation(1, 2, 3)
p1.Transform(translate)
console.log(p1.x, p1.y, p1.z)  // 1, 2, 3

// 与 Babylon.js 互转
const babylonVec = p1.ToBabylon()  // Vector3(1, 3, 2) — 注意 y,z 交换`
        },
        exercise: {
          question: '点 P1(1, 2, 3) 和 P2(4, 6, 3) 的距离是多少？z 坐标相同意味着什么？',
          hint: 'z 相同说明两点在同一水平面上',
          answer: '距离 = √((4-1)² + (6-2)² + (3-3)²) = √(9+16+0) = 5。z 坐标相同说明两点在 z=3 的水平面上，距离计算退化为二维问题。'
        },
        resources: [
          { name: '点对象学习', url: '/module/modeler/point-3d', type: '学习页面' },
          { name: '3D基础对象', url: '/module/modeler/math-base-3d', type: '学习页面' }
        ]
      },
      {
        id: 'point-transform',
        title: '点的变换与精度',
        duration: '25分钟',
        difficulty: '入门',
        objectives: [
          '理解为什么浮点数需要容差',
          '掌握点的判等方法（容差比较）',
          '理解点变换的链式操作'
        ],
        concepts: [
          {
            title: '浮点数精度问题',
            content: '计算机用双精度浮点数表示实数，约 15-17 位有效数字。0.1 + 0.2 ≠ 0.3（结果是 0.30000000000000004）。几何计算中，两个理论上重合的点可能相差 1e-10，必须用容差判断是否相等。'
          },
          {
            title: 'IsEqual 方法',
            content: 'MbCartPoint3D.IsEqual(other, eps) 比较两点是否在容差 eps 内重合。默认 eps = 1e-10。距离 < eps 视为同一点。这是拓扑合并（顶点缝合）的基础。'
          },
          {
            title: '变换的链式应用',
            content: '对点依次应用多个变换 = 乘以变换矩阵的乘积。注意顺序：先平移再旋转 ≠ 先旋转再平移。矩阵乘法不可交换。'
          }
        ],
        codeExample: {
          language: 'typescript',
          title: '精度与判等',
          code: `const p1 = new MbCartPoint3D(0.1 + 0.2, 0, 0)
const p2 = new MbCartPoint3D(0.3, 0, 0)

console.log(p1.x === p2.x)       // false（浮点数误差）
console.log(p1.IsEqual(p2))      // true（默认容差 1e-10）
console.log(p1.IsEqual(p2, 1e-20)) // false（容差太小）

// 链式变换
const m1 = MbMatrix3D.Translation(1, 0, 0)
const m2 = MbMatrix3D.RotationZ(Math.PI / 2)  // 绕Z转90°
const combined = m1.Multiply(m2)  // 先旋转再平移
p1.Transform(combined)`
        },
        exercise: {
          question: '布尔运算中，两条边的交点计算结果分别是 (1.0, 0, 0) 和 (0.999999999, 0, 0)，默认容差下它们会被视为同一个点吗？',
          hint: '计算距离，与默认容差 1e-10 比较',
          answer: '距离 = |1.0 - 0.999999999| = 1e-9。默认容差 1e-10，1e-9 > 1e-10，所以不会被视为同一点！这可能导致拓扑裂缝。实际项目中可能需要根据模型尺度调整容差。'
        },
        resources: []
      }
    ]
  },

  // ==================== 阶段2：向量与运算 ====================
  {
    id: 'stage-2',
    title: '向量与空间运算',
    duration: '3-4 天',
    color: '#8b5cf6',
    description: '从点到向量，理解方向与大小的表示，掌握点积、叉积等核心空间运算。',
    output: '能够用向量计算方向、投影、面积和法向量',
    lessons: [
      {
        id: 'vector-2d',
        title: '二维向量 MbVector',
        duration: '30分钟',
        difficulty: '入门',
        objectives: [
          '理解向量与点的区别（向量有方向和大小，点只有位置）',
          '掌握 MbVector 的基本运算：加减、数乘、模长',
          '理解单位向量与归一化'
        ],
        concepts: [
          {
            title: '点 vs 向量',
            content: '点表示位置（"在哪里"），向量表示方向和大小（"往哪走、走多远"）。点 - 点 = 向量，点 + 向量 = 点。虽然数据结构都是 (x, y)，但语义完全不同。C3D 用 MbCartPoint 表示点，用 MbVector 表示向量。'
          },
          {
            title: '向量基本运算',
            content: '加法：对应分量相加（平行四边形法则）；减法：对应分量相减；数乘：每个分量乘以标量（缩放长度，负数反转方向）；模长：√(x²+y²)；归一化：除以模长，得到长度为1的单位向量。'
          },
          {
            title: 'FromPoints 构造',
            content: '向量可以从两点构造：v = P2 - P1，表示从 P1 指向 P2 的向量。这是最常用的向量构造方式。'
          }
        ],
        codeExample: {
          language: 'typescript',
          title: '二维向量运算（待实现类）',
          code: `// const v1 = new MbVector(3, 4)
// const v2 = new MbVector(1, 2)
// v1.Add(v2)           // (4, 6)
// v1.Subtract(v2)      // (2, 2)
// v1.MultiplyScalar(2) // (6, 8)
// v1.Length()          // 5
// v1.Normalize()       // (0.6, 0.8)，长度变为1
// const v3 = MbVector.FromPoints(p1, p2)  // 从两点构造`
        },
        exercise: {
          question: '向量 (3, 4) 归一化后是什么？归一化后的向量长度是多少？',
          hint: '归一化 = 每个分量除以模长',
          answer: '模长 = √(3²+4²) = 5。归一化后 = (3/5, 4/5) = (0.6, 0.8)。归一化后的长度恒为 1：√(0.6²+0.8²) = √(0.36+0.64) = √1 = 1。'
        },
        resources: []
      },
      {
        id: 'vector-3d',
        title: '三维向量 MbVector3D',
        duration: '35分钟',
        difficulty: '入门',
        objectives: [
          '掌握 MbVector3D 的完整接口',
          '理解三维向量的几何意义',
          '学会用向量表示方向（如曲面法向、曲线切向）'
        ],
        concepts: [
          {
            title: '三维向量的表示',
            content: '三维向量用 (x, y, z) 表示，与三维点数据结构相同，但语义不同。向量可以表示：方向（如相机朝向、光源方向）、位移（平移量）、力、速度等。C3D 中 MbVector3D 已完整实现。'
          },
          {
            title: 'MbVector3D 核心方法',
            content: 'FromPoints(p1, p2)：从两点构造；Add/Subtract：加减；MultiplyScalar：数乘；Length/Length2：模长/模长平方；Normalize/NormalizeInPlace：归一化；IsZero：是否为零向量；AngleTo：两向量夹角。'
          },
          {
            title: '坐标轴向量',
            content: 'MbVector3D.XAxis = (1,0,0)，YAxis = (0,1,0)，ZAxis = (0,0,1)。这些是预定义的单位向量，常用于定义方向和坐标系。'
          }
        ],
        codeExample: {
          language: 'typescript',
          title: 'MbVector3D 实际代码（已实现）',
          code: `import { MbVector3D } from '@/kernel/math/MbVector3D'
import { MbCartPoint3D } from '@/kernel/math/MbCartPoint3D'

// 从两点构造向量
const p1 = new MbCartPoint3D(0, 0, 0)
const p2 = new MbCartPoint3D(1, 2, 3)
const v = MbVector3D.FromPoints(p1, p2)  // (1, 2, 3)

console.log(v.Length())    // √14 ≈ 3.74
v.NormalizeInPlace()
console.log(v.x, v.y, v.z) // ≈ (0.267, 0.535, 0.802)

// 预定义坐标轴
console.log(MbVector3D.XAxis)  // (1, 0, 0)
console.log(MbVector3D.ZAxis)  // (0, 0, 1)`
        },
        exercise: {
          question: '从点 A(0,0,0) 到点 B(0,0,5) 的向量是什么？它指向哪个方向？',
          hint: '向量 = B - A，看哪个分量非零',
          answer: '向量 = (0-0, 0-0, 5-0) = (0, 0, 5)。它沿 Z 轴正方向，长度为 5。在 C3D 的 Z-up 坐标系中，这是"向上"的方向。'
        },
        resources: [
          { name: '3D基础对象', url: '/module/modeler/math-base-3d', type: '学习页面' }
        ]
      },
      {
        id: 'dot-product',
        title: '点积与投影',
        duration: '35分钟',
        difficulty: '进阶',
        objectives: [
          '理解点积（Dot Product）的几何含义',
          '掌握用点积计算投影和夹角',
          '理解点积在几何计算中的应用'
        ],
        concepts: [
          {
            title: '点积的定义',
            content: '点积 a·b = ax*bx + ay*by + az*bz = |a||b|cos(θ)，其中 θ 是两向量的夹角。点积结果是标量（一个数），不是向量。点积为正 → 夹角 < 90°；为零 → 垂直；为负 → 夹角 > 90°。'
          },
          {
            title: '投影计算',
            content: '向量 a 在向量 b 上的投影长度 = a·b / |b|。如果 b 是单位向量，投影长度 = a·b。投影向量 = (a·b / |b|²) * b。投影是很多几何算法的基础（如点到直线的距离）。'
          },
          {
            title: '点积的应用',
            content: '判断两向量是否垂直（点积=0）；计算夹角（cos θ = a·b / (|a||b|)）；判断面的朝向（法向量与视线方向的点积）；光照计算（漫反射 = 法向·光向）。'
          }
        ],
        codeExample: {
          language: 'typescript',
          title: '点积计算（已实现）',
          code: `const a = new MbVector3D(1, 0, 0)  // X轴方向
const b = new MbVector3D(0, 1, 0)  // Y轴方向
const c = new MbVector3D(1, 1, 0)  // 45°方向

console.log(a.Dot(b))  // 0 — 垂直
console.log(a.Dot(c))  // 1 — 1*1 + 0*1 + 0*0 = 1

// 计算夹角
const angle = a.AngleTo(c)  // π/4 (45°)
console.log(angle * 180 / Math.PI)  // 45

// 投影：c 在 a 上的投影
const projLen = c.Dot(a) / a.Length()  // 1 / 1 = 1`
        },
        exercise: {
          question: '向量 a=(1,0,0) 和 b=(1,1,0) 的点积是多少？它们的夹角是多少度？',
          hint: '点积 = 对应分量相乘再相加；cos θ = 点积 / (|a||b|)',
          answer: '点积 = 1*1 + 0*1 + 0*0 = 1。|a| = 1，|b| = √2。cos θ = 1/√2 ≈ 0.707，θ = 45°。'
        },
        resources: []
      },
      {
        id: 'cross-product',
        title: '叉积与法向量',
        duration: '40分钟',
        difficulty: '进阶',
        objectives: [
          '理解叉积（Cross Product）的几何含义',
          '掌握用叉积计算法向量和面积',
          '理解右手系对叉积方向的影响'
        ],
        concepts: [
          {
            title: '叉积的定义',
            content: '叉积 a×b 的结果是一个向量，方向垂直于 a 和 b（按右手定则），大小 = |a||b|sin(θ)，等于以 a、b 为邻边的平行四边形面积。叉积不满足交换律：a×b = -b×a。'
          },
          {
            title: '法向量计算',
            content: '曲面上某点的法向量 = 对 u 的偏导 × 对 v 的偏导（两个切向量的叉积）。三角形的法向量 = (P2-P1) × (P3-P1)。法向量方向决定了面的"正面"和"反面"。'
          },
          {
            title: '坐标系与手性',
            content: '叉积的方向依赖于坐标系的手性。C3D 是右手系 Z-up，Babylon.js 是左手系 Y-up。同样的两个向量，在不同手性坐标系中叉积方向相反。我们的实现中需要注意坐标转换后的叉积方向。'
          }
        ],
        codeExample: {
          language: 'typescript',
          title: '叉积计算（已实现）',
          code: `const a = new MbVector3D(1, 0, 0)  // X轴
const b = new MbVector3D(0, 1, 0)  // Y轴

const c = a.Cross(b)  // (0, 0, 1) — Z轴方向（右手系）
console.log(c.x, c.y, c.z)  // 0, 0, 1

// 反序叉积方向相反
const d = b.Cross(a)  // (0, 0, -1)
console.log(d.x, d.y, d.z)  // 0, 0, -1

// 用叉积求三角形法向量
const p1 = new MbCartPoint3D(0, 0, 0)
const p2 = new MbCartPoint3D(1, 0, 0)
const p3 = new MbCartPoint3D(0, 1, 0)
const e1 = MbVector3D.FromPoints(p1, p2)  // (1,0,0)
const e2 = MbVector3D.FromPoints(p1, p3)  // (0,1,0)
const normal = e1.Cross(e2)  // (0,0,1) — 垂直于XY平面`
        },
        exercise: {
          question: 'X轴向量 (1,0,0) 叉乘 Z轴向量 (0,0,1)，结果是什么方向？',
          hint: '用右手定则：四指从X弯向Z，大拇指指向哪？',
          answer: 'a×b = (ay*bz - az*by, az*bx - ax*bz, ax*by - ay*bx) = (0*1 - 0*0, 0*0 - 1*1, 1*0 - 0*0) = (0, -1, 0)。即 -Y 方向。右手定则验证：四指从X(右)弯向Z(上)，大拇指向后(-Y)。'
        },
        resources: []
      }
    ]
  },

  // ==================== 阶段3：矩阵与坐标系 ====================
  {
    id: 'stage-3',
    title: '变换矩阵与坐标系',
    duration: '3-4 天',
    color: '#10b981',
    description: '理解 4x4 变换矩阵，掌握平移、旋转、缩放，建立局部坐标系的概念。',
    output: '能够构造和组合变换矩阵，在局部/世界坐标系间转换',
    lessons: [
      {
        id: 'matrix-basics',
        title: '4x4 变换矩阵 MbMatrix3D',
        duration: '40分钟',
        difficulty: '进阶',
        objectives: [
          '理解为什么用 4x4 矩阵（齐次坐标）',
          '掌握 MbMatrix3D 的存储方式（行优先）',
          '理解单位矩阵和矩阵乘法'
        ],
        concepts: [
          {
            title: '齐次坐标与 4x4 矩阵',
            content: '3x3 矩阵只能表示线性变换（旋转、缩放），无法表示平移。引入齐次坐标（增加第4个分量 w），用 4x4 矩阵可以统一表示平移、旋转、缩放。点的 w=1，向量的 w=0（这样平移不会影响向量）。'
          },
          {
            title: '矩阵的存储',
            content: 'MbMatrix3D 用长度为 16 的数组行优先存储：m[0..3] 是第一行，m[4..7] 是第二行，以此类推。单位矩阵的对角线为 1，其余为 0。Identity() 方法返回单位矩阵。'
          },
          {
            title: '矩阵乘法',
            content: 'A × B 表示先应用 B 变换，再应用 A 变换。矩阵乘法不可交换：A×B ≠ B×A。变换的组合顺序很重要：先平移再旋转 ≠ 先旋转再平移。'
          }
        ],
        codeExample: {
          language: 'typescript',
          title: '矩阵基础（已实现）',
          code: `import { MbMatrix3D } from '@/kernel/math/MbMatrix3D'

// 单位矩阵
const identity = MbMatrix3D.Identity()
// [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1]

// 矩阵乘法
const m1 = MbMatrix3D.Translation(1, 0, 0)
const m2 = MbMatrix3D.RotationZ(Math.PI / 2)
const combined = m1.Multiply(m2)  // 先旋转，再平移

// 应用到点
const p = new MbCartPoint3D(1, 0, 0)
p.Transform(combined)`
        },
        exercise: {
          question: '为什么向量的齐次坐标 w=0，点的 w=1？',
          hint: '思考平移变换对向量和点的影响应该有什么不同',
          answer: '平移矩阵的第4列是平移量。变换时新坐标 = 原坐标 * w + 平移量。点 w=1 → 新坐标 = 原坐标 + 平移量（点会被平移）。向量 w=0 → 新坐标 = 原坐标（向量只有方向，不应该被平移）。这是齐次坐标的精妙设计。'
        },
        resources: []
      },
      {
        id: 'translation-rotation',
        title: '平移、旋转、缩放',
        duration: '45分钟',
        difficulty: '进阶',
        objectives: [
          '掌握平移矩阵的构造',
          '理解绕 X/Y/Z 轴的旋转矩阵',
          '掌握缩放矩阵和均匀/非均匀缩放'
        ],
        concepts: [
          {
            title: '平移矩阵',
            content: 'Translation(tx, ty, tz) 将点沿各轴移动指定距离。矩阵形式：对角线为1，第4列为 (tx, ty, tz, 1)。这是最简单的仿射变换。'
          },
          {
            title: '旋转矩阵',
            content: 'RotationX(angle) 绕 X 轴旋转，RotationY 绕 Y 轴，RotationZ 绕 Z 轴。角度用弧度。旋转矩阵是正交矩阵（逆 = 转置）。绕任意轴旋转需要罗德里格斯公式。'
          },
          {
            title: '缩放矩阵',
            content: 'Scaling(sx, sy, sz) 沿各轴缩放。均匀缩放：sx=sy=sz，模型整体放大缩小。非均匀缩放：各轴比例不同，会改变形状（如球变椭球）。缩放因子为负时产生镜像。'
          }
        ],
        codeExample: {
          language: 'typescript',
          title: '基本变换（已实现）',
          code: `// 平移
const t = MbMatrix3D.Translation(10, 0, 5)
const p = new MbCartPoint3D(0, 0, 0)
p.Transform(t)  // (10, 0, 5)

// 绕Z轴旋转90°
const r = MbMatrix3D.RotationZ(Math.PI / 2)
const p2 = new MbCartPoint3D(1, 0, 0)
p2.Transform(r)  // ≈ (0, 1, 0)

// 缩放
const s = MbMatrix3D.Scaling(2, 2, 2)  // 均匀放大2倍
const p3 = new MbCartPoint3D(1, 1, 1)
p3.Transform(s)  // (2, 2, 2)

// 组合：先缩放，再旋转，再平移
const transform = t.Multiply(r).Multiply(s)`
        },
        exercise: {
          question: '点 (1, 0, 0) 先绕 Z 轴旋转 90°，再平移 (0, 2, 0)，最终坐标是多少？',
          hint: '先算旋转后的坐标，再加上平移',
          answer: '旋转 90°：(1,0,0) → (0,1,0)。再平移 (0,2,0)：(0, 1+2, 0) = (0, 3, 0)。注意：如果先平移再旋转，结果会不同——(1,0,0)+(0,2,0)=(1,2,0)，旋转后→(-2,1,0)。'
        },
        resources: []
      },
      {
        id: 'axis-3d',
        title: '局部坐标系 MbAxis3D',
        duration: '40分钟',
        difficulty: '进阶',
        objectives: [
          '理解局部坐标系（Local Coordinate System）的概念',
          '掌握 MbAxis3D 的构成：原点 + 三个方向',
          '理解世界坐标与局部坐标的转换'
        ],
        concepts: [
          {
            title: '为什么需要局部坐标系',
            content: '世界坐标系是固定的，但建模时经常需要相对于某个局部参考系操作。例如：在圆柱的端面上画圆，需要以端面中心为原点、端面法向为 Z 轴。MbAxis3D 定义了这样的局部坐标系。'
          },
          {
            title: 'MbAxis3D 的结构',
            content: 'origin（原点，MbCartPoint3D）+ direction（Z 轴方向，主方向）+ xDirection（X 轴方向）+ yDirection（Y 轴方向，由 direction × xDirection 计算）。三个方向互相垂直，构成右手系。'
          },
          {
            title: '坐标转换',
            content: 'ToLocal(point)：世界坐标 → 局部坐标（先平移到原点，再投影到三个轴上）。ToGlobal(point)：局部坐标 → 世界坐标（局部坐标乘以各轴方向，再加原点）。这是很多几何算法的基础。'
          }
        ],
        codeExample: {
          language: 'typescript',
          title: '局部坐标系（已实现）',
          code: `import { MbAxis3D } from '@/kernel/math/MbAxis3D'

// 世界坐标系
const world = MbAxis3D.World()  // 原点(0,0,0), Z轴(0,0,1)

// 自定义局部坐标系：原点(10,0,0)，Z轴沿X方向
const local = new MbAxis3D(
  new MbCartPoint3D(10, 0, 0),
  new MbVector3D(1, 0, 0)   // direction（局部Z轴 = 世界X轴）
)

// 世界点转局部坐标
const worldPoint = new MbCartPoint3D(12, 3, 0)
const localPoint = local.ToLocal(worldPoint)
// 局部Z = 沿direction的投影 = 2
// 局部X/Y = 在垂直平面内的投影

// 局部点转世界坐标
const back = local.ToGlobal(localPoint)  // 回到 (12, 3, 0)`
        },
        exercise: {
          question: '局部坐标系原点在 (5,0,0)，Z 轴沿世界 X 轴方向。世界点 (8, 0, 0) 在局部坐标系中的坐标是多少？',
          hint: '局部Z = 点在局部Z轴方向上的投影（相对于原点）',
          answer: '相对于原点的向量 = (8-5, 0-0, 0-0) = (3, 0, 0)。局部Z轴 = 世界X轴 = (1,0,0)。局部Z坐标 = 投影 = 3*1 + 0*0 + 0*0 = 3。局部X、Y坐标 = 0（因为点在Z轴上）。所以局部坐标 = (0, 0, 3)。'
        },
        resources: [
          { name: '3D基础对象', url: '/module/modeler/math-base-3d', type: '学习页面' }
        ]
      },
      {
        id: 'coordinate-systems',
        title: '坐标系差异与转换',
        duration: '30分钟',
        difficulty: '进阶',
        objectives: [
          '理解右手系 vs 左手系的区别',
          '理解 Z-up vs Y-up 的约定',
          '掌握 C3D ↔ Babylon.js 的坐标转换'
        ],
        concepts: [
          {
            title: '手性（Handedness）',
            content: '右手系：X×Y = Z；左手系：X×Y = -Z。C3D 使用右手系，OpenGL 使用右手系，Babylon.js / DirectX 使用左手系。手性影响叉积方向、法向量方向、环绕顺序。'
          },
          {
            title: '上方向约定',
            content: 'Z-up：Z 轴向上（C3D、CATIA、3ds Max）；Y-up：Y 轴向上（Babylon.js、Maya、Blender）。转换时需要交换 Y 和 Z 坐标。我们的 c3dToBabylon 函数映射 (x,y,z) → (x,z,y)。'
          },
          {
            title: '我们的转换策略',
            content: '内核代码全部使用 C3D 约定（右手系 Z-up），只有在渲染层（BabylonScene）做坐标转换。这样保持内核逻辑的纯粹性，也方便未来对接其他渲染引擎。ToBabylon/FromBabylon 方法封装了转换细节。'
          }
        ],
        codeExample: {
          language: 'typescript',
          title: '坐标转换（已实现）',
          code: `// C3D 坐标（右手系 Z-up）→ Babylon（左手系 Y-up）
const c3dPoint = new MbCartPoint3D(1, 2, 3)
const babylonVec = c3dPoint.ToBabylon()
// Vector3(1, 3, 2) — y 和 z 交换

// 反向转换
const back = MbCartPoint3D.FromBabylon(babylonVec)
// (1, 2, 3) — 还原

// 向量转换同理
const c3dVec = new MbVector3D(0, 0, 1)  // C3D 中向上
const babylonDir = c3dVec.ToBabylon()   // (0, 1, 0) — Babylon 中向上`
        },
        exercise: {
          question: 'C3D 中一个点的坐标是 (10, 5, 8)，转换到 Babylon.js 后坐标是什么？哪个轴表示"向上"？',
          hint: 'C3D Z-up → Babylon Y-up，交换 y 和 z',
          answer: 'Babylon 坐标 = (10, 8, 5)。C3D 中 z=8 是高度，转换后 Babylon 中 y=8 是高度。Babylon 的 Y 轴表示向上。'
        },
        resources: []
      }
    ]
  },

  // ==================== 阶段4：曲线基础 ====================
  {
    id: 'stage-4',
    title: '曲线基础',
    duration: '1 周',
    color: '#f59e0b',
    description: '从直线到曲线，理解参数化曲线的表示方法，掌握基本曲线类型。',
    output: '理解参数曲线接口，能够计算曲线上的点和切向量',
    lessons: [
      {
        id: 'parametric-curves',
        title: '参数曲线概念 MbCurve3D',
        duration: '40分钟',
        difficulty: '进阶',
        objectives: [
          '理解参数曲线 P(t) 的概念',
          '掌握 MbCurve3D 抽象基类的接口',
          '理解参数域、一阶导、二阶导'
        ],
        concepts: [
          {
            title: '参数化表示',
            content: '参数曲线用一个参数 t 描述三维点：P(t) = (x(t), y(t), z(t))。t 在参数域 [t0, t1] 内变化。与显式表示 y=f(x) 不同，参数化可以表示任意空间曲线（包括闭合曲线和多值曲线）。'
          },
          {
            title: 'MbCurve3D 核心接口',
            content: 'Point(t)：求参数 t 处的点；Derive1(t)：一阶导（切向量）；Derive2(t)：二阶导（曲率相关）；GetParamStart/GetParamEnd：参数域范围；Duplicate()：复制；Transform(matrix)：变换；Reverse()：反转方向。'
          },
          {
            title: '切向量与弧长',
            content: '一阶导 P\'(t) 是切向量，方向沿曲线走向，大小 = d(弧长)/dt。参数 t 不一定等于弧长，"均匀参数化"下 t 均匀增加但弧长增量可能不均匀。'
          }
        ],
        codeExample: {
          language: 'typescript',
          title: '参数曲线接口（待实现）',
          code: `// abstract class MbCurve3D {
//   abstract Point(t: number): MbCartPoint3D
//   abstract Derive1(t: number): MbVector3D   // 切向量
//   abstract Derive2(t: number): MbVector3D   // 二阶导
//   abstract GetParamStart(): number
//   abstract GetParamEnd(): number
//   abstract Duplicate(): MbCurve3D
//   abstract Transform(matrix: MbMatrix3D): void
//   abstract Reverse(): void
// }

// 使用示例（未来）
// const curve = new MbLine3D(p1, p2)
// const midPoint = curve.Point(0.5)  // 中点
// const tangent = curve.Derive1(0)   // 起点切向量`
        },
        exercise: {
          question: '直线 P(t) = (1+2t, 3t, 0)，t∈[0,1]，求 t=0.5 时的点和切向量。',
          hint: '直接代入 t=0.5；切向量是各分量对 t 求导',
          answer: '点：(1+2*0.5, 3*0.5, 0) = (2, 1.5, 0)。切向量 P\'(t) = (2, 3, 0)，与 t 无关（直线的切向量恒定）。'
        },
        resources: [
          { name: '3D曲线学习', url: '/module/modeler/curves-3d', type: '学习页面' }
        ]
      },
      {
        id: 'line-segment',
        title: '直线与线段 MbLine3D / MbLineSegment3D',
        duration: '35分钟',
        difficulty: '入门',
        objectives: [
          '理解直线与线段的区别（直线无限，线段有界）',
          '掌握 MbLineSegment3D 的两点表示法',
          '学会点到线段的距离计算'
        ],
        concepts: [
          {
            title: '直线 vs 线段',
            content: 'MbLine3D 表示无限长直线（由一点和一方向定义），参数域 (-∞, +∞)。MbLineSegment3D 表示有限线段（由两个端点定义），参数域 [0, 1]。线段是最常用的曲线类型，常用于多边形边和网格边。'
          },
          {
            title: '线段的参数化',
            content: 'P(t) = P0 + t*(P1-P0)，t∈[0,1]。t=0 时是起点 P0，t=1 时是终点 P1。切向量 = P1-P0，恒定不变。线段长度 = |P1-P0|。'
          },
          {
            title: '点到线段的距离',
            content: '将点投影到线段所在直线上，如果投影点 t∈[0,1]，距离 = 点到投影点的距离；如果 t<0，距离 = 到起点的距离；如果 t>1，距离 = 到终点的距离。这是碰撞检测和最近点查询的基础。'
          }
        ],
        codeExample: {
          language: 'typescript',
          title: '线段操作（待实现）',
          code: `// const p0 = new MbCartPoint3D(0, 0, 0)
// const p1 = new MbCartPoint3D(10, 0, 0)
// const seg = new MbLineSegment3D(p0, p1)

// seg.Point(0)    // (0,0,0) — 起点
// seg.Point(1)    // (10,0,0) — 终点
// seg.Point(0.5)  // (5,0,0) — 中点
// seg.Derive1(0)  // (10,0,0) — 切向量
// seg.GetParamStart()  // 0
// seg.GetParamEnd()    // 1`
        },
        exercise: {
          question: '线段从 (0,0,0) 到 (10,0,0)，点 (5, 3, 0) 到这条线段的距离是多少？投影参数 t 是多少？',
          hint: '投影到线段上，t 在 [0,1] 内',
          answer: '点在直线上的投影 = (5, 0, 0)，t = 5/10 = 0.5（在 [0,1] 内）。距离 = √((5-5)² + (3-0)² + 0) = 3。'
        },
        resources: []
      },
      {
        id: 'arc-circle',
        title: '圆弧与圆 MbArc3D',
        duration: '40分钟',
        difficulty: '进阶',
        objectives: [
          '理解圆弧的参数化表示',
          '掌握圆心、半径、起始角、扫掠角的概念',
          '理解整圆与圆弧的区别'
        ],
        concepts: [
          {
            title: '圆弧的定义',
            content: '圆弧由圆心、半径、所在平面（法向量）、起始角、扫掠角定义。参数化：P(t) = center + R*(cos(θ0+t*Δθ)*uAxis + sin(θ0+t*Δθ)*vAxis)，其中 uAxis、vAxis 是平面内的两个正交单位向量。'
          },
          {
            title: '整圆 vs 圆弧',
            content: '整圆的扫掠角 = 2π，参数域 [0, 1] 或 [0, 2π]。圆弧的扫掠角 < 2π，有明确的起点和终点。整圆是闭合曲线（起点=终点），但参数域不重合。'
          },
          {
            title: '圆弧的切向量',
            content: 'P\'(t) = R*Δθ*(-sin*uAxis + cos*vAxis)，方向沿圆弧切线，大小 = R*Δθ。在 t=0 和 t=1 处切向量不同（除非是整圆）。'
          }
        ],
        codeExample: {
          language: 'typescript',
          title: '圆弧（待实现）',
          code: `// const center = new MbCartPoint3D(0, 0, 0)
// const normal = new MbVector3D(0, 0, 1)  // XY平面
// const arc = new MbArc3D(center, 5, normal, 0, Math.PI)  // 半圆

// arc.Point(0)    // (5, 0, 0) — 起点（0°）
// arc.Point(0.5)  // (0, 5, 0) — 中点（90°）
// arc.Point(1)    // (-5, 0, 0) — 终点（180°）
// arc.Derive1(0)  // 切向量沿 +Y 方向`
        },
        exercise: {
          question: 'XY平面上，圆心在原点、半径为 5 的整圆，参数 t=0.25 时的点坐标是什么？',
          hint: '整圆 t∈[0,1]，角度 = t * 360°',
          answer: '角度 = 0.25 * 360° = 90°。坐标 = (5*cos90°, 5*sin90°, 0) = (0, 5, 0)。'
        },
        resources: []
      },
      {
        id: 'bezier-curves',
        title: '贝塞尔曲线 MbBezier3D',
        duration: '45分钟',
        difficulty: '高级',
        objectives: [
          '理解贝塞尔曲线的控制点与伯恩斯坦基函数',
          '掌握德卡斯特里奥（de Casteljau）算法',
          '理解贝塞尔曲线的凸包性和端点插值性'
        ],
        concepts: [
          {
            title: '贝塞尔曲线定义',
            content: 'n 次贝塞尔曲线由 n+1 个控制点定义：B(t) = Σ Pi * Bi,n(t)，其中 Bi,n(t) = C(n,i) * t^i * (1-t)^(n-i) 是伯恩斯坦基函数。曲线从 P0 开始，到 Pn 结束，中间控制点像"磁铁"吸引曲线。'
          },
          {
            title: 'de Casteljau 算法',
            content: '通过反复线性插值计算曲线上的点：对控制点做 n 轮线性插值，每轮将相邻点按比例 t 插值，最终得到一个点。这是数值稳定的计算方法，也是分割贝塞尔曲线的基础。'
          },
          {
            title: '贝塞尔的性质与局限',
            content: '端点插值：曲线经过 P0 和 Pn。凸包性：曲线完全在控制点的凸包内。全局影响：移动一个控制点会影响整条曲线。次数由控制点数量决定，无法局部控制——这些问题由 B 样条/NURBS 解决。'
          }
        ],
        codeExample: {
          language: 'typescript',
          title: '二次贝塞尔曲线（待实现）',
          code: `// 3个控制点 → 二次贝塞尔
// const p0 = new MbCartPoint3D(0, 0, 0)
// const p1 = new MbCartPoint3D(5, 10, 0)  // 控制点
// const p2 = new MbCartPoint3D(10, 0, 0)
// const bezier = new MbBezier3D([p0, p1, p2])

// bezier.Point(0)    // (0,0,0) — 经过P0
// bezier.Point(1)    // (10,0,0) — 经过P2
// bezier.Point(0.5)  // (5, 5, 0) — (P0+2P1+P2)/4

// de Casteljau 计算 t=0.5:
// m1 = (p0+p1)/2 = (2.5, 5, 0)
// m2 = (p1+p2)/2 = (7.5, 5, 0)
// result = (m1+m2)/2 = (5, 5, 0)`
        },
        exercise: {
          question: '3个控制点 P0(0,0), P1(1,1), P2(2,0) 的二次贝塞尔曲线，t=0.5 时的点是什么？',
          hint: '用 de Casteljau：先取中点，再取中点',
          answer: 'M1 = (P0+P1)/2 = (0.5, 0.5)，M2 = (P1+P2)/2 = (1.5, 0.5)，结果 = (M1+M2)/2 = (1, 0.5)。即控制点 P1 的 y 坐标被"打了五折"。'
        },
        resources: []
      }
    ]
  },

  // ==================== 阶段5：高级曲线 ====================
  {
    id: 'stage-5',
    title: '高级曲线',
    duration: '1 周',
    color: '#ec4899',
    description: '深入 B 样条和 NURBS，理解 CAD 标准曲线表示，掌握复合曲线。',
    output: '理解 NURBS 的权因子与节点向量，能够区分各类曲线的适用场景',
    lessons: [
      {
        id: 'bspline-curves',
        title: 'B样条曲线',
        duration: '50分钟',
        difficulty: '高级',
        objectives: [
          '理解 B 样条的节点向量与局部支撑',
          '掌握 B 样条与贝塞尔曲线的区别',
          '理解次数、控制点、节点数的关系'
        ],
        concepts: [
          {
            title: 'B 样条的核心优势',
            content: 'B 样条用节点向量（Knot Vector）将参数域分段，每个控制点只影响一段曲线（局部支撑）。移动一个控制点只影响附近的曲线段，不会影响整条曲线。这是 B 样条比贝塞尔曲线的核心优势。'
          },
          {
            title: '节点向量',
            content: '节点向量是一个非递减序列，定义了参数域的分段。均匀节点：等距分布；准均匀节点：首尾重复 k 次（k=阶数），保证曲线经过端点；非均匀节点：任意分布，可在需要处加密。节点数 = 控制点数 + 阶数。'
          },
          {
            title: 'B 样条的阶数',
            content: '阶数 k 决定了曲线的光滑度：k=1 是折线（C0连续），k=2 是二次（C1连续），k=3 是三次（C2连续，最常用）。阶数越高，曲线越光滑，但局部性越差（每个控制点影响范围越大）。'
          }
        ],
        codeExample: null,
        exercise: {
          question: '为什么 B 样条可以"局部修改"，而贝塞尔曲线不行？',
          hint: '思考基函数的支撑范围',
          answer: '贝塞尔的伯恩斯坦基函数在整个参数域 [0,1] 内都非零，所以每个控制点影响整条曲线。B 样条的基函数只在相邻的几个节点区间内非零（局部支撑），所以每个控制点只影响附近一段曲线。'
        },
        resources: []
      },
      {
        id: 'nurbs-curves',
        title: 'NURBS 曲线',
        duration: '55分钟',
        difficulty: '高级',
        objectives: [
          '理解 NURBS = 非均匀有理 B 样条',
          '掌握权因子（Weight）的作用',
          '理解 NURBS 为何能精确表示圆'
        ],
        concepts: [
          {
            title: 'NURBS 的"有理"含义',
            content: 'NURBS 在 B 样条基础上引入了权因子（Weight），曲线公式变为：分子 = Σ wi*Pi*Ni(t)，分母 = Σ wi*Ni(t)。普通 B 样条是所有权因子 = 1 的特殊情况。权重大的控制点对曲线的"吸引力"更强。'
          },
          {
            title: '为什么能精确表示圆',
            content: '圆的参数方程 x=(1-t²)/(1+t²), y=2t/(1+t²) 是有理函数（分子/分母都是多项式）。普通 B 样条是多项式的线性组合（非有理），无法表示分母。NURBS 引入权因子后变成有理形式，因此可以精确表示圆、椭圆等二次曲线。'
          },
          {
            title: 'NURBS 的地位',
            content: 'NURBS 是 CAD 行业的标准表示法（STEP 标准使用 NURBS），因为它能统一表示解析曲线（直线、圆、椭圆）和自由曲线。C3D 中 MbNurbs3D 实现了 NURBS 曲线。'
          }
        ],
        codeExample: null,
        exercise: {
          question: '如果把 NURBS 曲线所有权因子都设为相同的值，它会变成什么？',
          hint: '思考有理公式中分子分母的权因子会怎样',
          answer: '所有权因子相同时，分子分母的权因子可以约掉，NURBS 退化为普通 B 样条。所以 B 样条是 NURBS 的特殊情况（所有权因子相等）。'
        },
        resources: []
      },
      {
        id: 'polyline-polycurve',
        title: '多段线与复合曲线',
        duration: '35分钟',
        difficulty: '进阶',
        objectives: [
          '理解 MbPolyline3D（多段线）的结构',
          '理解 MbPolyCurve3D（复合曲线）的拼接',
          '掌握曲线连续性的概念（C0/C1/C2）'
        ],
        concepts: [
          {
            title: '多段线',
            content: 'MbPolyline3D 由多个顶点依次连接成的折线，每段都是直线段。是最简单的复合曲线，常用于多边形轮廓、网格边界、离散化结果。参数域按段长度分配。'
          },
          {
            title: '复合曲线',
            content: 'MbPolyCurve3D 由多条不同类型的曲线（直线、圆弧、样条）首尾拼接而成。拼接处可以是 C0（位置连续）、C1（切向连续）、C2（曲率连续）。复杂轮廓通常用复合曲线表示。'
          },
          {
            title: '曲线连续性',
            content: 'C0：拼接处位置相同（有尖点）；C1：位置和切向量都相同（光滑）；C2：位置、切向、曲率都相同（非常光滑，高光无跳变）。G1/G2 是几何连续（方向相同即可，大小可不同），比 C1/C2 宽松。'
          }
        ],
        codeExample: null,
        exercise: {
          question: '一个正方形轮廓可以用什么曲线类型表示？需要几条线段？连续性如何？',
          hint: '正方形有4条边，4个顶点',
          answer: '可以用 MbPolyline3D（多段线）表示，4条线段。顶点处是 C0 连续（位置连续，切向不连续——有尖角）。如果要圆角过渡，则需要复合曲线（直线+圆弧）。'
        },
        resources: []
      }
    ]
  },

  // ==================== 阶段6：曲面基础 ====================
  {
    id: 'stage-6',
    title: '曲面基础',
    duration: '1 周',
    color: '#06b6d4',
    description: '从平面到解析曲面，理解双参数曲面表示，掌握常见基本曲面类型。',
    output: '能够计算曲面上的点和法向量，区分各类解析曲面',
    lessons: [
      {
        id: 'parametric-surfaces',
        title: '参数曲面概念 MbSurface',
        duration: '40分钟',
        difficulty: '进阶',
        objectives: [
          '理解双参数曲面 S(u,v) 的表示',
          '掌握 MbSurface 抽象基类接口',
          '理解偏导与法向量计算'
        ],
        concepts: [
          {
            title: '双参数曲面',
            content: '参数曲面用两个参数 u, v 描述三维点：S(u,v) = (x(u,v), y(u,v), z(u,v))。u 和 v 各自在参数域内变化，形成二维参数域到三维曲面的映射。参数域通常是矩形 [u0,u1]×[v0,v1]。'
          },
          {
            title: '法向量计算',
            content: '曲面上某点的法向量 = Su(u,v) × Sv(u,v)，其中 Su 是对 u 的偏导（u方向切向量），Sv 是对 v 的偏导。法向量方向决定了面的"正面"和"反面"，在渲染（背面剔除）和布尔运算中至关重要。'
          },
          {
            title: 'MbSurface 核心接口',
            content: 'Point(u,v)：求点；DeriveU/DeriveV：偏导；Normal(u,v)：法向量；GetUMin/GetUMax/GetVMin/GetVMax：参数域；Duplicate/Transform/Reverse：通用操作。'
          }
        ],
        codeExample: {
          language: 'typescript',
          title: '参数曲面接口（待实现）',
          code: `// abstract class MbSurface {
//   abstract Point(u: number, v: number): MbCartPoint3D
//   abstract DeriveU(u: number, v: number): MbVector3D
//   abstract DeriveV(u: number, v: number): MbVector3D
//   Normal(u, v) { return this.DeriveU(u,v).Cross(this.DeriveV(u,v)) }
//   abstract GetUMin(): number
//   abstract GetUMax(): number
//   abstract GetVMin(): number
//   abstract GetVMax(): number
// }`
        },
        exercise: {
          question: '曲面 S(u,v) = (u, v, u²+v²)（抛物面），在 (u=1,v=1) 处的法向量是什么？',
          hint: '先求 Su 和 Sv，再叉积',
          answer: 'Su = (1, 0, 2u) = (1, 0, 2)，Sv = (0, 1, 2v) = (0, 1, 2)。法向量 = Su × Sv = (0*2-2*1, 2*0-1*2, 1*1-0*0) = (-2, -2, 1)。'
        },
        resources: [
          { name: '曲面学习', url: '/module/modeler/surfaces', type: '学习页面' }
        ]
      },
      {
        id: 'plane',
        title: '平面 MbPlane',
        duration: '30分钟',
        difficulty: '入门',
        objectives: [
          '理解平面的定义（点 + 法向量）',
          '掌握 MbPlane 的参数化',
          '理解平面的无限性与裁剪'
        ],
        concepts: [
          {
            title: '平面的定义',
            content: '平面由一个点和一个法向量定义：所有满足 (P - P0)·n = 0 的点 P 构成平面。也可以用三个不共线的点定义。平面是无限延伸的，但在 B-Rep 中，平面被边界（Loop）裁剪成有限的 Face。'
          },
          {
            title: '平面的参数化',
            content: 'S(u,v) = P0 + u*uAxis + v*vAxis，其中 uAxis、vAxis 是平面内两个正交单位向量。参数域通常是 (-∞, +∞)，但实际使用时会限制在有限范围内。平面的两个偏导就是 uAxis 和 vAxis，法向量恒定。'
          },
          {
            title: '平面的应用',
            content: '立方体的6个面都是平面；草图平面；拉伸实体的顶面和底面；平面是最基本的曲面，也是很多算法的简化情况（如平面上的二维布尔运算）。'
          }
        ],
        codeExample: null,
        exercise: {
          question: 'XY平面（z=0）的法向量是什么？点 (3, 4, 5) 在这个平面上吗？',
          hint: '平面方程 z=0，法向量垂直于平面',
          answer: '法向量 = (0, 0, 1)（Z轴方向）。点 (3,4,5) 的 z=5 ≠ 0，不在平面上。点到平面的距离 = |5-0| = 5。'
        },
        resources: []
      },
      {
        id: 'cylinder-cone',
        title: '圆柱面与圆锥面',
        duration: '40分钟',
        difficulty: '进阶',
        objectives: [
          '理解圆柱面的参数化（旋转曲面）',
          '理解圆锥面的参数化',
          '掌握这两种曲面的法向量计算'
        ],
        concepts: [
          {
            title: '圆柱面',
            content: 'S(u,v) = (R*cos u, R*sin u, v)，u∈[0,2π)（圆周方向），v∈[v0,v1]（高度方向）。由一条直线绕平行轴旋转生成。u 方向偏导是圆周切向，v 方向偏导是轴向。法向量沿径向向外。'
          },
          {
            title: '圆锥面',
            content: 'S(u,v) = (v*R*cos u, v*R*sin u, v*H)，半径随高度线性变化。顶点处 v=0，所有 u 对应同一点（退化点）。圆锥面可以看作半角为 α 的旋转曲面，tan α = R/H。'
          },
          {
            title: '旋转曲面的共性',
            content: '圆柱面和圆锥面都是旋转曲面（Revolved Surface）：由一条母线（生成线）绕轴旋转生成。u 参数对应旋转角，v 参数对应母线上的位置。所有旋转曲面的 u 方向等参数线是圆。'
          }
        ],
        codeExample: null,
        exercise: {
          question: '圆柱面 S(u,v) = (5cos u, 5sin u, v)，在 u=π/2, v=3 处的点和法向量是什么？',
          hint: '法向量 = Su × Sv',
          answer: '点 = (5cos90°, 5sin90°, 3) = (0, 5, 3)。Su = (-5sin u, 5cos u, 0) = (-5, 0, 0)。Sv = (0, 0, 1)。法向量 = Su × Sv = (0*1-0*0, 0*0-(-5)*1, (-5)*0-0*0) = (0, 5, 0)，即沿 +Y 方向（径向向外）。'
        },
        resources: []
      },
      {
        id: 'sphere-torus',
        title: '球面与环面',
        duration: '40分钟',
        difficulty: '进阶',
        objectives: [
          '理解球面的参数化',
          '理解环面的参数化',
          '理解球面的极点退化问题'
        ],
        concepts: [
          {
            title: '球面',
            content: 'S(u,v) = (R*cos v*cos u, R*cos v*sin u, R*sin v)，u 是经度（0~2π），v 是纬度（-π/2~π/2）。南北极（v=±π/2）是退化点：所有 u 对应同一点，法向量计算需要特殊处理。'
          },
          {
            title: '环面（Torus）',
            content: 'S(u,v) = ((R+r*cos v)*cos u, (R+r*cos v)*sin u, r*sin v)，R 是大环半径，r 是小管半径。u 是绕大环的角度，v 是绕小管的角度。环面没有退化点，参数化处处正则。'
          },
          {
            title: '退化点的处理',
            content: '球面极点处 Su = 0（所有经度线汇聚），法向量 = Su × Sv = 0，无法直接计算。需要用极限或特殊处理：极点的法向量就是极轴方向。离散化时极点处需要特殊处理，避免产生零面积三角形。'
          }
        ],
        codeExample: null,
        exercise: {
          question: '球面的北极点（v=π/2）为什么是参数化的退化点？',
          hint: '思考 u 变化时点的位置是否变化',
          answer: 'v=π/2 时，cos v = 0，所以 S(u, π/2) = (0, 0, R)，与 u 无关。所有经度线都汇聚到北极点，Su = ∂S/∂u = (0, 0, 0)，参数化在此处不正则。这就像地球的北极，所有经线交汇于一点。'
        },
        resources: []
      }
    ]
  },

  // ==================== 阶段7：高级曲面 ====================
  {
    id: 'stage-7',
    title: '高级曲面',
    duration: '1 周',
    color: '#8b5cf6',
    description: '深入 NURBS 曲面和扫掠/放样曲面，理解自由曲面的构造方法。',
    output: '理解自由曲面的构造方式，能够区分各类曲面的适用场景',
    lessons: [
      {
        id: 'nurbs-surface',
        title: 'NURBS 曲面 MbNurbsSurface',
        duration: '50分钟',
        difficulty: '高级',
        objectives: [
          '理解 NURBS 曲面的双参数表示',
          '掌握控制点网格和两个方向的节点向量',
          '理解 NURBS 曲面在 CAD 中的核心地位'
        ],
        concepts: [
          {
            title: 'NURBS 曲面的结构',
            content: 'NURBS 曲面是 NURBS 曲线在二维的推广：控制点是二维网格 (m×n)，有 u 和 v 两个方向的节点向量，每个控制点有一个权因子。曲面公式是双变量的有理 B 样条。'
          },
          {
            title: 'NURBS 曲面的能力',
            content: '可以精确表示平面、圆柱面、球面、环面等解析曲面（通过特殊的控制点和权因子），也可以表示任意自由曲面。是 CAD 中最通用的曲面表示，STEP 标准使用 NURBS 曲面。'
          },
          {
            title: '曲面的连续性',
            content: '多张 NURBS 曲面拼接时，需要保证边界处的连续性。C0：位置连续；C1：切平面连续；C2：曲率连续。汽车车身、消费产品外观通常要求 G2 连续以保证高光流畅。'
          }
        ],
        codeExample: null,
        exercise: {
          question: '一个 4×4 控制点网格的三次 NURBS 曲面，u 和 v 方向各需要多少个节点？',
          hint: '节点数 = 控制点数 + 阶数',
          answer: '三次 = 阶数 3。u 方向节点数 = 4 + 3 = 7；v 方向节点数 = 4 + 3 = 7。准均匀节点向量首尾各重复 3 次，如 [0,0,0,1,2,3,3,3]——等等，这是8个。让我重新算：节点数 = 控制点数 + 阶数 = 4 + 3 = 7。准均匀：[0,0,0,1,2,2,2] 是7个。'
        },
        resources: []
      },
      {
        id: 'sweep-loft',
        title: '扫掠曲面与放样曲面',
        duration: '45分钟',
        difficulty: '高级',
        objectives: [
          '理解扫掠曲面（Sweep）的生成方式',
          '理解放样曲面（Loft）的生成方式',
          '理解轮廓在路径上的定位问题'
        ],
        concepts: [
          {
            title: '扫掠曲面',
            content: '将一条轮廓曲线沿一条路径曲线移动，轮廓扫过的区域形成曲面。简单情况：路径是直线→拉伸曲面，路径是圆弧→旋转曲面。复杂情况：路径是任意空间曲线，需要处理轮廓在路径上的朝向（Frenet 标架或其他标架），避免扭曲。'
          },
          {
            title: '放样曲面',
            content: '通过多条截面曲线（Cross-section）插值生成曲面，截面之间光滑过渡。截面可以是不同形状（如从圆过渡到方）。放样是工业设计中常用的曲面构造方法（如船体、汽车车身）。'
          },
          {
            title: '轮廓定位的挑战',
            content: '扫掠时，轮廓在路径每个点处需要一个局部坐标系。Frenet 标架由切向量、法向量、副法向量构成，但在路径曲率为零处（直线段）法向量不确定，会导致标架跳变。需要用旋转最小化标架（RMF）等更稳定的方法。'
          }
        ],
        codeExample: null,
        exercise: {
          question: '拉伸（Extrude）可以看作扫掠的特殊情况吗？为什么？',
          hint: '思考拉伸的"路径"是什么',
          answer: '可以。拉伸是扫掠的特殊情况：路径是一条直线段，轮廓沿直线移动。因为路径是直线，轮廓朝向不会变化（Frenet 标架恒定），所以最简单。旋转是路径为圆弧的特殊扫掠。'
        },
        resources: []
      }
    ]
  },

  // ==================== 阶段8：拓扑结构（B-Rep） ====================
  {
    id: 'stage-8',
    title: '拓扑结构（B-Rep）',
    duration: '1-2 周',
    color: '#ef4444',
    description: '从几何到拓扑，理解 B-Rep 边界表示法，掌握体-壳-面-环-边-顶点的层级结构。',
    output: '能够构建和遍历 B-Rep 拓扑结构，理解拓扑与几何的分离',
    lessons: [
      {
        id: 'brep-concept',
        title: 'B-Rep 边界表示法',
        duration: '40分钟',
        difficulty: '进阶',
        objectives: [
          '理解 B-Rep 的核心思想（用边界表示实体）',
          '掌握拓扑层级：体→壳→面→环→边→顶点',
          '理解拓扑与几何的分离设计'
        ],
        concepts: [
          {
            title: 'B-Rep 的核心思想',
            content: 'B-Rep 通过描述实体的边界（表面）来表示三维实体。一个实体由其所有面的集合定义，面由边围成，边由顶点定义。就像用建筑的外墙来描述一栋建筑，而不是用砖块。'
          },
          {
            title: '拓扑层级',
            content: 'Solid（实体）→ Shell（壳）→ Face（面）→ Loop（环）→ Edge（边）→ Vertex（顶点）。严格的包含关系：实体包含壳，壳包含面，面包含环，环包含边，边包含顶点。每个元素都有唯一标识。'
          },
          {
            title: '拓扑与几何的分离',
            content: '拓扑元素（Edge）只定义连接关系（哪两个顶点相连），不定义形状；几何元素（Curve3D）定义形状。一条 Edge 引用一条 Curve3D，并用 orientation 标记方向是否与曲线一致。同一条曲线可以被多条边共享。'
          }
        ],
        codeExample: {
          language: 'typescript',
          title: '立方体的 B-Rep 结构（概念代码）',
          code: `// const cube = new MbSolid()
// const shell = new MbShell()
// for (let i = 0; i < 6; i++) {
//   const face = new MbFace()      // 6个面
//   face.SetSurface(new MbPlane()) // 每个面是平面
//   const loop = new MbLoop()      // 每个面1个外环
//   for (let j = 0; j < 4; j++) {
//     const edge = new MbEdge()    // 每个环4条边
//     edge.SetCurve(new MbLineSegment3D())
//     loop.AddEdge(edge)
//   }
//   face.AddLoop(loop)
//   shell.AddFace(face)
// }
// cube.AddShell(shell)
// 总计：1实体 → 1壳 → 6面 → 6环 → 12边（共享）→ 8顶点`
        },
        exercise: {
          question: '一个四面体（4个三角形面）有多少条边？多少个顶点？用欧拉公式验证。',
          hint: '欧拉公式：V - E + F = 2（简单多面体）',
          answer: '4个顶点，6条边，4个面。验证：V-E+F = 4-6+4 = 2 ✓。每个面3条边，4个面共12条边次，每条边被2个面共享，所以 12/2 = 6 条边。'
        },
        resources: [
          { name: '拓扑对象学习', url: '/module/modeler/topology-items', type: '学习页面' }
        ]
      },
      {
        id: 'vertex-edge',
        title: '顶点与边 MbVertex / MbEdge',
        duration: '40分钟',
        difficulty: '进阶',
        objectives: [
          '理解 MbVertex 的数据结构（引用一个点）',
          '理解 MbEdge 的数据结构（引用曲线 + 两个顶点 + 方向）',
          '理解边的方向（orientation）与曲线方向的关系'
        ],
        concepts: [
          {
            title: '顶点 MbVertex',
            content: '顶点是 B-Rep 中最底层的拓扑元素，引用一个 MbCartPoint3D（几何点）。多个顶点可以引用同一个几何点（在容差内重合），但通常一个点对应一个顶点。顶点是边的端点。'
          },
          {
            title: '边 MbEdge',
            content: '边引用一条曲线（MbCurve3D）和两个顶点（起点、终点），并有一个 orientation 标记（正向/反向）。正向：边的方向与曲线参数方向一致；反向：相反。这样同一条曲线可以被两条边以不同方向共享。'
          },
          {
            title: '边的遍历',
            content: '从一条边可以找到：两个顶点、引用的曲线、所属的环（通过边面索引）。边是拓扑遍历的核心：面→环→边→顶点，或者顶点→边→面。C3D 提供了丰富的拓扑遍历器。'
          }
        ],
        codeExample: null,
        exercise: {
          question: '一条曲线从点 A 到点 B，边 E1 正向引用它，边 E2 反向引用它。E1 和 E2 的起点终点分别是什么？',
          hint: '反向意味着起点终点互换',
          answer: 'E1（正向）：起点 A，终点 B。E2（反向）：起点 B，终点 A。两条边引用同一条曲线，但方向相反。这在闭合轮廓中很常见（相邻面的公共边方向相反）。'
        },
        resources: []
      },
      {
        id: 'loop-face',
        title: '环与面 MbLoop / MbFace',
        duration: '45分钟',
        difficulty: '进阶',
        objectives: [
          '理解 MbLoop 的结构（有序边序列，闭合）',
          '理解外环与内环（孔）的区别',
          '理解 MbFace 的结构（引用曲面 + 多个环）'
        ],
        concepts: [
          {
            title: '环 MbLoop',
            content: '环是有序的边序列，首尾相连形成闭合轮廓。环有方向：外环通常逆时针（从面的外侧看），内环（孔）通常顺时针。环的边方向必须一致（每条边的起点是前一条边的终点）。'
          },
          {
            title: '外环与内环',
            content: '一个面可以有多个环：一个外环（定义面的外边界）和零个或多个内环（定义面上的孔）。外环和内环的方向相反。环之间不能相交，内环必须完全在外环内部。'
          },
          {
            title: '面 MbFace',
            content: '面引用一个曲面（MbSurface）和多个环（一个外环 + 若干内环）。曲面是无限的，环定义了曲面的有限区域。面有方向标记，决定法向量方向（与曲面法向相同或相反）。'
          }
        ],
        codeExample: null,
        exercise: {
          question: '一个带圆孔的正方形平面，需要几个环？外环和内环的方向有什么关系？',
          hint: '外边界一个环，孔一个环',
          answer: '需要 2 个环：1 个外环（正方形）+ 1 个内环（圆，孔）。从面的正面看，外环逆时针，内环顺时针（方向相反）。这样保证面的区域在环的"左侧"。'
        },
        resources: []
      },
      {
        id: 'shell-solid',
        title: '壳与实体 MbShell / MbSolid',
        duration: '40分钟',
        difficulty: '进阶',
        objectives: [
          '理解 MbShell 的结构（面的集合，闭合）',
          '理解 MbSolid 的结构（壳的集合）',
          '理解流形与非流形的区别'
        ],
        concepts: [
          {
            title: '壳 MbShell',
            content: '壳是面的集合，形成一个闭合的边界（封闭壳）或开放的曲面片（开放壳）。封闭壳的每条边被恰好两个面共享（流形条件）。一个实体通常有一个外壳，可能有内壳（空腔）。'
          },
          {
            title: '实体 MbSolid',
            content: '实体是壳的集合：一个外壳（定义实体的外边界）+ 零个或多个内壳（定义内部空腔）。实体是 B-Rep 的顶层元素，表示一个有体积的三维物体。实体的体积 = 外壳包围的体积 - 内壳包围的体积。'
          },
          {
            title: '流形条件',
            content: '流形（Manifold）：每条边被恰好2个面共享，每个顶点的邻域是圆盘。非流形：一条边被1个或≥3个面共享（如薄片、T型连接）。大多数建模内核要求实体是流形，非流形需要特殊处理。'
          }
        ],
        codeExample: null,
        exercise: {
          question: '一个空心球（球壳）有几个壳？内壳和外壳的法向量方向有什么不同？',
          hint: '空心球有外表面和内表面',
          answer: '有 2 个壳：外壳（外球面）和内壳（内球面，空腔）。外壳的法向量向外（远离球心），内壳的法向量向内（指向球心）。这样实体区域在两个壳之间。体积 = 外壳体积 - 内壳体积。'
        },
        resources: []
      }
    ]
  },

  // ==================== 阶段9：实体建模 ====================
  {
    id: 'stage-9',
    title: '实体建模算法',
    duration: '1-2 周',
    color: '#10b981',
    description: '学习基本实体的生成和布尔运算，理解从轮廓到实体的建模过程。',
    output: '能够描述拉伸、旋转、布尔运算的实现流程',
    lessons: [
      {
        id: 'extrude-revolve',
        title: '拉伸与旋转实体',
        duration: '45分钟',
        difficulty: '进阶',
        objectives: [
          '理解拉伸实体的生成过程（轮廓→面→体）',
          '理解旋转实体的生成过程',
          '掌握轮廓、方向、距离三要素'
        ],
        concepts: [
          {
            title: '拉伸（Extrude）',
            content: '将二维轮廓沿指定方向移动指定距离，生成三维实体。轮廓的每个顶点沿方向移动生成一条边（直线），轮廓的每条边移动生成一个面（平面/柱面），轮廓本身移动生成顶面和底面。'
          },
          {
            title: '旋转（Revolve）',
            content: '将二维轮廓绕指定轴旋转指定角度，生成回转体。轮廓的每个顶点绕轴旋转生成圆弧边，轮廓的直线边旋转生成圆柱面/圆锥面，轮廓的曲线边旋转生成旋转曲面。整圆旋转生成闭合实体。'
          },
          {
            title: '建模的拓扑构建',
            content: '拉伸/旋转不仅是生成曲面，还要构建完整的 B-Rep 拓扑：创建顶点、边、环、面、壳、实体，并保证拓扑一致性（边共享、闭合、流形）。这是建模算法的核心难点。'
          }
        ],
        codeExample: null,
        exercise: {
          question: '一个矩形轮廓绕一条与它平行但不相交的轴旋转 360°，生成什么形状？有几个面？',
          hint: '想象矩形绕外面的轴旋转',
          answer: '生成一个空心圆柱（管）。4个面：2个圆柱面（内外壁，由矩形的两条竖边旋转生成）+ 2个圆环面（上下端面，由矩形的两条横边旋转生成）。如果轴与矩形的一条边重合，则生成实心圆柱（3个面：1圆柱面+2圆面）。'
        },
        resources: [
          { name: '实体建模学习', url: '/module/modeler/solid-modeling', type: '学习页面' }
        ]
      },
      {
        id: 'boolean-ops',
        title: '布尔运算',
        duration: '60分钟',
        difficulty: '高级',
        objectives: [
          '理解并集、交集、差集的几何含义',
          '掌握布尔运算的四步流程：求交→分割→分类→合并',
          '理解布尔运算中的难点和退化情况'
        ],
        concepts: [
          {
            title: '三种布尔运算',
            content: '并集（Union）：两个实体合并，去掉重叠部分；交集（Intersection）：保留重叠部分；差集（Difference）：从一个实体中减去重叠部分。所有操作都基于"面的分类"——判断每个面在另一个实体的内部还是外部。'
          },
          {
            title: '布尔运算流程',
            content: '1) 求交：计算两个实体所有面的交线；2) 分割：用交线分割被相交的面，生成新的边和顶点；3) 分类：判断每个面在另一个实体的内部/外部/边界上；4) 合并：根据操作类型保留或删除面，缝合生成新实体。'
          },
          {
            title: '难点与退化',
            content: '曲面求交最复杂（两个 NURBS 曲面求交需要数值迭代）；容差处理不当会导致交线断裂、面分类错误；退化情况（面相切、边过顶点、共面）需要特殊处理。布尔运算失败是 CAD 软件中最常见的问题。'
          }
        ],
        codeExample: null,
        exercise: {
          question: '用一个立方体"减"一个圆柱（打通孔），布尔运算需要哪些步骤？哪些面被保留？',
          hint: '按四步流程思考',
          answer: '1) 求交：圆柱面与立方体的上下两面求交，得到两个圆；2) 分割：用圆分割立方体的上下两面；3) 分类：圆柱侧面在立方体内部（保留），立方体被圆柱穿过的部分（删除），立方体外表面（保留）；4) 合并：圆柱侧面 + 立方体剩余面缝合。结果：立方体6个面中，上下两面各有一个圆孔，加上圆柱侧面。'
        },
        resources: []
      },
      {
        id: 'fillet-chamfer',
        title: '圆角与倒角',
        duration: '45分钟',
        difficulty: '高级',
        objectives: [
          '理解等半径圆角的几何构造（滚动球法）',
          '理解倒角的平面切割构造',
          '了解顶点补片和变半径圆角的难点'
        ],
        concepts: [
          {
            title: '圆角（Fillet）',
            content: '在两条边或两个面之间用圆弧面平滑过渡。等半径圆角：以指定半径的球沿边滚动，球与相邻面相切的轨迹形成圆角面。需要裁剪相邻面（去掉尖角部分），并构造新的圆角面。'
          },
          {
            title: '倒角（Chamfer）',
            content: '用斜面替换尖锐的边。对称倒角：两边距离相等；非对称倒角：两边距离不同。倒角比圆角简单，因为只需要平面切割，不需要构造曲面。'
          },
          {
            title: '顶点补片',
            content: '三条或更多边交汇的顶点处，多个圆角面会相互交叠，需要计算交线并构造一个"顶点补片"来填充角落。变半径圆角的半径沿边变化，更复杂。圆角失败是 CAD 中第二常见的问题。'
          }
        ],
        codeExample: null,
        exercise: {
          question: '为什么立方体的一个顶点处同时对三条边倒圆角会比较复杂？',
          hint: '思考三个圆角面在顶点处如何交汇',
          answer: '三条边的圆角面在顶点附近会相互交叠，需要计算它们的交线并构造一个"顶点补片"来填充角落。如果三个圆角半径不同，补片形状更复杂。这是圆角算法中最容易失败的场景。'
        },
        resources: []
      }
    ]
  },

  // ==================== 阶段10：高级主题 ====================
  {
    id: 'stage-10',
    title: '高级主题与架构',
    duration: '持续学习',
    color: '#64748b',
    description: '深入 C3D Toolkit 的高级特性：约束求解、数据交换、可视化、碰撞检测。',
    output: '形成对几何内核完整架构的系统性理解',
    lessons: [
      {
        id: 'constraint-solver',
        title: '约束求解引擎',
        duration: '50分钟',
        difficulty: '高级',
        objectives: [
          '理解 2D 草图约束的类型（几何约束 + 尺寸约束）',
          '理解约束求解的基本方法（牛顿迭代 + 图分解）',
          '了解 C3D Solver 的架构'
        ],
        concepts: [
          {
            title: '约束类型',
            content: '几何约束：重合、水平、垂直、平行、相切、同心（定义关系）；尺寸约束：距离、角度、半径、长度（定义数值）。每个约束减少一定的自由度。完全约束 = 自由度为0，欠约束 = 还有自由度，过约束 = 约束矛盾。'
          },
          {
            title: '求解方法',
            content: '数值求解（牛顿-拉夫逊）：将约束表示为方程组 f(x)=0，迭代求解，需要初始值；图分解：将约束表示为图，分解为可解子系统，提高效率和稳定性。C3D Solver 采用混合方法。'
          },
          {
            title: '3D 装配约束',
            content: '匹配、对齐、相切、同轴、距离、角度。每个零件6个自由度。装配约束求解与 2D 草图约束类似，但维度更高，还需要处理运动学（机构仿真）。'
          }
        ],
        codeExample: null,
        exercise: {
          question: '2D 草图中一条线段被"水平"约束后，还剩几个自由度？再添加"长度=5"后呢？',
          hint: '线段原本4个自由度（2端点×2坐标）',
          answer: '水平约束使两端点 y 坐标相等，减少1个自由度，剩3个（x平移、y平移、长度）。再添加长度约束，减少1个自由度，剩2个（x平移、y平移）——线段可以在平面上任意移动，但方向和长度固定。'
        },
        resources: [
          { name: '2D约束学习', url: '/module/solver/constraints-2d-api', type: '学习页面' }
        ]
      },
      {
        id: 'data-exchange',
        title: '数据交换与格式',
        duration: '45分钟',
        difficulty: '进阶',
        objectives: [
          '理解 STEP 标准的架构（AP203/AP214/AP242）',
          '了解 STL/VRML 等网格格式的特点',
          '理解格式转换中的精度损失问题'
        ],
        concepts: [
          {
            title: 'STEP 标准',
            content: 'STEP（ISO 10303）是 CAD 数据交换的国际标准，用 EXPRESS 语言定义数据模型，物理文件是文本格式。AP203（配置控制设计）、AP214（汽车设计，增加颜色/公差）、AP242（最新，整合并增加 PMI/装配）。主要存储 B-Rep 几何，通常不存储特征历史。'
          },
          {
            title: '网格格式',
            content: 'STL：只存三角面片，无拓扑，3D打印标准；VRML：支持颜色/材质/变换；3MF：微软的3D打印格式，支持多材质。网格是精确几何的近似，精度由弦高决定。'
          },
          {
            title: '格式转换的挑战',
            content: '不同内核的容差不同，转换后可能出现裂缝；NURBS 曲面的阶数和节点向量表示不同，需要拟合；特征历史无法转换（只能转几何）；精度损失：精确→网格→精确会丢失信息。'
          }
        ],
        codeExample: null,
        exercise: {
          question: '为什么从 STEP 导入的模型通常无法编辑参数（如修改拉伸高度）？',
          hint: '思考 STEP 存储什么、不存储什么',
          answer: 'STEP 主要存储 B-Rep 边界表示（最终几何），不存储建模特征历史（拉伸、旋转、布尔运算的参数）。AP242 开始支持参数化，但大多数软件仍只导出几何。所以导入后只有"死几何"，无法参数化编辑，只能用直接建模修改。'
        },
        resources: [
          { name: 'STEP格式学习', url: '/module/converter/step', type: '学习页面' }
        ]
      },
      {
        id: 'visualization',
        title: '可视化与渲染',
        duration: '45分钟',
        difficulty: '进阶',
        objectives: [
          '理解场景图的层次结构',
          '理解 B-Rep 离散化（三角剖分）的过程',
          '理解拾取（Picking）的两阶段方法'
        ],
        concepts: [
          {
            title: '场景图',
            content: '用树结构组织三维场景：根→变换节点→几何节点。子节点继承父节点的变换（矩阵相乘）。方便表示装配体（零件→部件→产品）。C3D Vision 用 SceneNode 基类派生各种节点。'
          },
          {
            title: 'B-Rep 离散化',
            content: 'GPU 只能渲染三角形，需要将精确曲面离散化为三角网格。精度由弦高控制。必须先离散化边，再离散化面，保证共享边的网格一致（无裂缝）。离散化结果缓存，避免重复计算。'
          },
          {
            title: '拾取',
            content: '从相机通过屏幕点发射射线，求与物体的交点。两阶段：包围盒快速剔除（快）+ 精确求交（慢）。拾取结果可以是顶点/边/面/体。网格拾取快但精度低，精确拾取慢但准确。'
          }
        ],
        codeExample: null,
        exercise: {
          question: '为什么离散化时必须先离散化边，再离散化面？',
          hint: '思考相邻面共享边的情况',
          answer: '因为相邻的两个面共享一条边，如果各自独立离散化，边上的顶点可能不一致（数量或位置不同），导致渲染时出现裂缝。先离散化边得到固定的顶点序列，两个面都用这些顶点作为边界，就能保证网格一致。'
        },
        resources: [
          { name: '场景图学习', url: '/module/vision/vision-scene-graph', type: '学习页面' }
        ]
      },
      {
        id: 'collision-detection',
        title: '碰撞检测与距离计算',
        duration: '40分钟',
        difficulty: '高级',
        objectives: [
          '理解碰撞检测的两阶段（粗检测→精检测）',
          '了解 GJK 算法的基本思想',
          '理解最小距离计算的应用场景'
        ],
        concepts: [
          {
            title: '两阶段碰撞检测',
            content: '粗检测：用包围球/AABB/OBB 快速判断是否可能碰撞，剔除明显不相交的物体对；精检测：对可能碰撞的物体对做精确几何求交（三角网格求交）。层次包围盒（BVH）可以加速粗检测。'
          },
          {
            title: 'GJK 算法',
            content: 'GJK（Gilbert-Johnson-Keerthi）是高效的凸体碰撞检测算法，通过迭代构造闵可夫斯基差的单纯形判断原点是否在差集中。只适用于凸体，非凸体需要先分解为凸片。'
          },
          {
            title: '最小距离计算',
            content: '计算两个物体之间的最小距离，用于装配干涉检查、运动仿真、路径规划。距离=0 表示接触，<0 表示穿透。连续碰撞检测（CCD）在运动轨迹上检测碰撞，避免快速物体穿透。'
          }
        ],
        codeExample: null,
        exercise: {
          question: '为什么碰撞检测通常用三角网格而不是精确 B-Rep？',
          hint: '思考性能和算法成熟度',
          answer: '因为精确曲面（NURBS）之间的求交计算非常复杂且慢。三角网格的碰撞检测有成熟的快速算法（GJK、BVH）。虽然网格是近似的，但对于碰撞检测（判断是否相交）通常足够精确，且性能好得多。精确求交只在需要精确接触点时才用。'
        },
        resources: []
      }
    ]
  }
]

// 根据 stageId 和 lessonId 查找学习单元
export function findLesson(stageId, lessonId) {
  const stage = learningStages.find(s => s.id === stageId)
  if (!stage) return null
  const lesson = stage.lessons.find(l => l.id === lessonId)
  if (!lesson) return null
  return { ...lesson, stage }
}

// 获取所有学习单元
export function getAllLessons() {
  const all = []
  for (const stage of learningStages) {
    for (const lesson of stage.lessons) {
      all.push({ ...lesson, stageId: stage.id, stageTitle: stage.title })
    }
  }
  return all
}
