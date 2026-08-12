# Onshape 官网首页复刻 - 需求拆解文档

## 产品概述

- **产品类型**: 企业官网首页（CAD/PDM 云设计平台落地页）
- **场景类型**: <scene_type>prototype-app</scene_type>
- **目标用户**: 机械工程师、产品设计师、制造业企业决策者、学生、初创团队
- **核心价值**: 展示 Onshape 云原生 CAD & PDM 平台的核心优势，引导用户注册试用
- **界面语言**: 英文（与原站一致，全英文文案）
- **主题偏好**: user_specified（浅色主体 + 深色导航栏/页脚，品牌绿 #00a651 为主色）
- **导航模式**: 锚点导航
- **导航布局**: Topbar（顶部固定导航栏）

> **参考资料说明**：用户提供了 4 张参考截图 URL 和 1 张官网全页截图。全页截图显示页面还包含更多区块（Updates every 3 weeks、Perfect for all designers 等），本次以用户明确列出的 8 个区块为核心复刻范围，截图中额外区块作为视觉风格参考。

---

## 页面结构总览

**页面文件**: `HomePage.tsx`

| 区块序号 | 区块名称 | 锚点 | 区块说明 |
|---------|---------|------|---------|
| 1 | 顶部导航栏 | `#navbar` | 深色背景，Logo + 导航菜单 + 搜索 + 注册/登录按钮 |
| 2 | Webinar 通知条 | `#webinar-bar` | 紫色边框通知条，可关闭 |
| 3 | Hero 主视觉区 | `#hero` | 左侧标题+描述+邮箱注册表单，右侧3D产品图，底部黄色蜂窝装饰 |
| 4 | 客户 Logo 展示区 | `#clients` | 横向排列合作品牌 Logo，灰白色调 |
| 5 | 特色功能卡片区 | `#feature-cards` | 两列卡片：Altium Connector + Startup Program |
| 6 | SOLIDWORKS 迁移区 | `#solidworks-switch` | 标题+5个特性卡片+CTA按钮，两侧彩色线条装饰 |
| 7 | 行业应用区 | `#industries` | 左侧大标题，右侧垂直绿色边框行业按钮，蜂窝背景装饰 |
| 8 | 页脚 | `#footer` | 深色背景，多列链接 + 版权 + 社交媒体 |

---

## 页面布局建议

- **布局模式**: 单页纵向滚动（经典官网落地页布局），各区块居中最大宽度容器（约 1200-1400px），Hero 区左右分栏（左文右图）
- **视觉重心**: Hero 区为主视觉重心（大标题 + 3D 产品渲染图），其次是 SOLIDWORKS 迁移区（5 大特性 + 彩色装饰线条）
- **结果承载区**: 本页为展示型官网，无工具类结果输出。邮箱注册表单有提交反馈（toast/状态提示）
- **装饰元素**: 全页贯穿蜂窝六边形图案（Hero 底部黄色渐变、行业区绿色渐变），彩色线条装饰（SOLIDWORKS 区两侧绿/蓝/黄/紫渐变线）

---

## 导航配置

- **导航布局**: Topbar（顶部固定，滚动时保持可见）
- **导航背景**: 深色 `#2d3436`（与原站一致，深色顶栏 + 白色主背景对比）
- **导航项**:

| 导航文字 | 锚点/行为 | 位置 |
|---------|----------|------|
| Onshape Logo | `#hero`（点击回顶部） | 左侧 |
| WHY ONSHAPE | `#solidworks-switch` | 中间菜单 |
| PRODUCT | 下拉菜单（hover 展开） | 中间菜单 |
| PRICING | `#hero`（指向注册 CTA 附近） | 中间菜单 |
| RESOURCES | 下拉菜单（hover 展开） | 中间菜单 |
| SOLUTIONS | 下拉菜单（hover 展开） | 中间菜单 |
| EN（语言切换） | 纯展示/点击展开语言列表 | 右侧工具栏 |
| ASK ABOUT ONSHAPE（搜索框） | 点击展开搜索输入 | 右侧工具栏 |
| CREATE A STUDENT ACCOUNT | 文字链接 | 右侧工具栏 |
| SIGN IN | 文字链接 | 右侧工具栏 |
| SIGN UP NOW（绿色按钮） | CTA 主按钮 | 最右侧 |

---

## 数据来源声明

| 数据/操作 | 来源类型 | 实现要求 | mock 兜底 |
|---|---|---|---|
| 页面文案与内容 | demo-mock | `src/data/homeContent.ts` 集中管理所有区块文字、链接、图标引用 | ✅ 本身就是静态展示数据 |
| 客户 Logo 列表 | demo-mock | `src/data/clients.ts` 存储品牌名称 + SVG/图片路径数组 | ✅ 静态 Logo 数据 |
| 行业按钮列表 | demo-mock | `src/data/industries.ts` 存储行业名称数组 | ✅ 静态行业数据 |
| 页脚链接列表 | demo-mock | `src/data/footerLinks.ts` 按列存储链接分组 | ✅ 静态链接数据 |
| 邮箱注册表单提交 | demo-mock | 前端表单验证 + 提交 toast 反馈，不接真实后端 | ✅ 模拟提交成功/失败 |
| Webinar 通知条关闭状态 | local-persist | `localStorage` key=`__onshape_webinar_closed`，记录是否已关闭 | 无（默认显示） |

> 本页面为官网复刻展示页，所有内容均为静态展示，无真实 API/后端对接需求。

---

## 功能列表

### 区块 1：顶部导航栏 (Navbar)

- **页面目标**: 提供全站导航入口，建立品牌识别，引导注册转化
- **功能点**:
  - **Logo 展示与回顶**: 绿色六边形图标 + onshape 文字 Logo，点击滚动回页面顶部
  - **导航菜单与下拉**: PRODUCT / RESOURCES / SOLUTIONS 三项带下拉箭头，hover 时展开下拉面板（展示二级链接，静态 mock）
  - **搜索交互**: "ASK ABOUT ONSHAPE" 搜索框，点击/聚焦时展开为完整输入框
  - **语言切换展示**: "EN" 语言标识，点击可展开语言列表（静态 mock）
  - **SIGN UP NOW CTA 按钮**: 绿色实心按钮，悬停有亮度变化动效，点击滚动至 Hero 注册表单

### 区块 2：Webinar 通知条

- **页面目标**: 宣传 AI + CAD 线上研讨会，引导用户注册
- **功能点**:
  - **通知展示**: 紫色边框白色背景条，左侧 WEBINAR 标签 + 活动描述 + Register Now 链接
  - **关闭功能**: 右侧 × 按钮，点击平滑隐藏通知条，状态存入 localStorage，刷新后不再显示

### 区块 3：Hero 主视觉区

- **页面目标**: 传递核心价值主张，通过邮箱注册获取销售线索
- **功能点**:
  - **主标题与描述**: 大字号加粗标题 + 正文描述，"Quick video" 绿色链接可点击（静态 mock 播放提示）
  - **邮箱注册表单**: 邮箱输入框 + 绿色 SIGN UP FREE 按钮，前端校验邮箱格式，提交后 toast 反馈成功
  - **小字说明**: 注册优惠说明文字（免费 6 个月专业版，无需信用卡）
  - **右侧产品渲染图**: 工业 3D 产品图（喷雾干燥设备），使用占位图或相似风格替代图
  - **底部蜂窝装饰**: 黄色蜂窝状渐变斜切装饰条，纯 CSS/SVG 实现

### 区块 4：客户 Logo 展示区

- **页面目标**: 通过知名客户 logo 建立品牌信任与社会认同
- **功能点**:
  - **Logo 横向排列**: 10+ 个品牌 Logo 水平均匀分布，灰白色调（grayscale），hover 恢复彩色
  - **两端渐隐效果**: 左右两侧渐变遮罩，暗示可横向滚动（可选）

### 区块 5：特色功能卡片区

- **页面目标**: 展示产品新功能与生态计划，引导深入了解
- **功能点**:
  - **Altium Connector 卡片**: 左侧芯片图标 + 标题 + 描述 + "Learn More →" 绿色链接
  - **Startup Program 卡片**: 左侧火箭图标 + 标题 + 描述 + "Apply Now →" 绿色链接
  - **卡片悬停动效**: 鼠标悬停时卡片轻微上浮 + 阴影加深，链接箭头右移动效

### 区块 6：SOLIDWORKS 用户迁移区

- **页面目标**: 针对 SOLIDWORKS 用户痛点，展示 Onshape 差异化优势
- **功能点**:
  - **标题与副标题**: 大标题 + 描述文字，居中排列
  - **5 个特性卡片（2 行布局）**: 第 1 行 3 个，第 2 行 2 个居中；每个卡片含绿色线性图标 + 特性标题 + 描述文字
  - **CTA 按钮**: 浅蓝色 "LEARN WHY DESIGNERS ARE SWITCHING TO ONSHAPE →" 按钮，悬停加深
  - **两侧彩色线条装饰**: 左右两侧绿/蓝/黄/紫渐变斜线条，纯 CSS/SVG 实现装饰效果

### 区块 7：行业应用区域

- **页面目标**: 展示产品覆盖的广泛行业，吸引不同领域用户
- **功能点**:
  - **左侧大标题**: "Powering innovation in every industry" 大字号标题
  - **右侧行业按钮列**: 垂直排列 9+ 个绿色边框按钮（AEROSPACE, AUTOMOTIVE, CONSUMER PRODUCTS, EDUCATION, ELECTRONICS, ENERGY, GOVERNMENT, MACHINE DESIGN, MEDICAL DEVICES 等），hover 时背景填充绿色
  - **蜂窝背景装饰**: 右侧六边形蜂窝状渐变图案装饰，纯 CSS/SVG 实现

### 区块 8：页脚 (Footer)

- **页面目标**: 提供全站导航补充、公司信息与社交链接
- **功能点**:
  - **多列链接**: 4 列以上链接分组（Product / Resources / Company / Connect 等），每列含多个文字链接
  - **版权信息**: 底部版权声明文字
  - **社交媒体图标**: LinkedIn / Twitter / Facebook / YouTube 等图标（线性风格）
  - **深色背景**: 与导航栏一致的深色背景，白色/浅灰色文字

-------

<scene_type>prototype-app</scene_type>

# UI 设计指南

## 1. 设计推导依据

- **参考意图**: Exact Reference —— 用户明确要求"高度还原"Onshape 官网首页，提供了官方 URL 与多张成品截图，视觉系统、布局节奏、装饰元素均从参考图抽取。
- **核心情绪 / 应用类型**: 专业工程 SaaS 品牌 Landing 页，传递云原生 CAD 的可靠、高效与技术领先感。
- **独特记忆点**: 绿色六边形品牌符号（蜂窝/蜂巢图案）贯穿全局装饰——Hero 底部黄色蜂窝渐变条、行业区背景六边形点阵、迁移区彩色斜向线条，构成 Onshape 独有的视觉识别。

## 2. Art Direction

- **方向名**: 工程云原生品牌站
- **Design Style**: Swiss Minimalist + Tech Enterprise —— 大留白、强网格、清晰信息层级，配合品牌绿与工程感图标，适合 B2B 工程软件的专业信任建立。
- **DNA 参数**: 圆角 subtle（`rounded-sm` ~ `rounded`）/ 阴影 none-to-subtle（主按钮无阴影，通知条有轻阴影）/ 间距 spacious（`gap-6` ~ `gap-10`，section padding 大）/ 字体方向：无衬线 Grotesque，字重对比明显（标题 700-800，正文 400）/ 装饰手法：六边形蜂窝图案 + 斜向彩色渐变线条 + 线性绿色图标。
- **应用类型**: Landing —— 叙事型单页滚动，多 section 纵向节奏清晰。

## 3. Color System

**色彩关系**: 品牌绿主色 + 纯白背景 + 深灰文字 + 浅灰边框/辅助底 + 紫/蓝/黄点缀色（webinar 紫、CTA 浅蓝按钮、蜂窝黄渐变）
**配色设计理由**: primary 绿色承担品牌识别与主行动 CTA（SIGN UP NOW / SIGN UP FREE），与工程制造行业的"创新、成长、可靠"语义呼应；深灰文字保持专业可读；紫色用于 webinar 通知条以区分常规信息；浅蓝色用于次级 CTA 按钮，形成层级差。
**主色推导**: 从 Onshape 品牌标志提取绿色（近似 #00a651），以 hsl(144 100% 33%) 为锚点，衍生深浅变体用于按钮 hover、图标、链接与装饰线条。
**使用比例**: 约 65% 中性（白+深灰文字）/ 25% 辅助（浅灰边框+紫蓝黄点缀）/ 10% primary 绿。绿色仅用于主按钮、品牌锚点、图标主色、链接与装饰线条，不铺满大面。

| 角色 | CSS 变量 | Tailwind Class | HSL 值 | 设计说明 |
|---|---|---|---|---|
| bg | `--background` | `bg-background` | hsl(0 0% 100%) | 纯白页面背景 |
| card | `--card` | `bg-card` | hsl(0 0% 100%) | 卡片与内容承载面，与 bg 同色（Onshape 风格极少使用灰卡） |
| text | `--foreground` | `text-foreground` | hsl(210 10% 23%) | 深炭灰标题与正文（#333 附近） |
| textMuted | `--muted-foreground` | `text-muted-foreground` | hsl(210 6% 45%) | 次级说明、小字、元信息 |
| primary | `--primary` | `bg-primary` / `text-primary` | hsl(144 100% 33%) | 品牌绿，主按钮、CTA、图标、链接、装饰 |
| primaryForeground | `--primary-foreground` | `text-primary-foreground` | hsl(0 0% 100%) | 主按钮上的白色文字 |
| accent | `--accent` | `bg-accent` | hsl(144 100% 95%) | hover 浅绿底、选中底、极浅绿反馈 |
| accentForeground | `--accent-foreground` | `text-accent-foreground` | hsl(144 100% 25%) | accent 上的深绿文字与图标 |
| border | `--border` | `border-border` | hsl(210 8% 88%) | 输入框、分隔线、卡片边界浅灰 |

**语义色提示**: 
- Webinar 紫：`bg hsl(270 60% 97%)` / `border hsl(270 70% 55%)` / `text hsl(270 70% 40%)` —— 用于 webinar 通知条，饱和度与 primary 对齐（70% vs 100%，稍低以示层级）。
- 次级 CTA 浅蓝：`bg hsl(200 60% 85%)` / `border hsl(200 60% 75%)` / `text hsl(210 40% 20%)` —— 用于"LEARN WHY DESIGNERS ARE SWITCHING"按钮，色温偏冷与工程感呼应。
- 蜂窝渐变黄：`hsl(48 100% 75%) → hsl(48 100% 90%)` —— 用于 Hero 底部蜂窝装饰条与行业区背景渐变。
- 斜线条装饰：绿 `hsl(144 100% 33%)`、蓝 `hsl(200 70% 55%)`、黄 `hsl(48 100% 60%)`、紫 `hsl(270 60% 60%)` —— 四色斜向线条装饰迁移区两侧。

## 4. 字体与节奏

- **font-display**: Inter Tight / Inter —— 紧凑无衬线，字重 700-800 用于大标题，传递工程软件的精准与力量感。
- **font-body**: Inter —— 清晰中性无衬线，正文 400-500，适合 B2B 长文阅读与专业感建立。
- **字号**: H1 text-4xl md:text-5xl lg:text-6xl（bold/extrabold）；H2 text-2xl md:text-3xl（bold）；body text-base；muted text-sm。
- **圆角**: 小 —— 主按钮 `rounded-sm`（Onshape 按钮几乎是方的），输入框和卡片 `rounded` 微圆，整体保持锐利工程感。

## 5. 全局布局契约

- **Reference Layout Use**: Exact —— 导航结构、Hero 左右分栏、客户 logo 横排、功能卡片两列、迁移区 3+2 特性卡布局、行业区右列按钮列表、页脚多列链接均严格按参考图还原。
- **Page / Section Order**: Navbar → Webinar Banner → Hero → Customer Logos → Feature Cards → SOLIDWORKS Migration → Industries → Updates → Designer Personas → Footer。
- **Standard Content Zone**: `max-w-6xl lg:max-w-7xl` + `mx-auto` —— Landing 宽幅内容区，参考图首屏内容较宽。
- **Shell / Frame Alignment**: 顶部深色 utility bar + 白色主导航两层结构；内容容器与导航内联同宽对齐。
- **Padding & Rhythm**: `px-4 md:px-6 lg:px-8`；section 垂直间距 `py-12 md:py-16 lg:py-20`，保持 8px 倍数节奏。
- **Full-bleed Zones**: Navbar、Webinar 通知条、Hero 底部蜂窝条、迁移区两侧斜线条、行业区背景六边形、Footer 均为 `w-full` 全宽；内部文字与按钮受 Standard Content Zone 约束。
- **Local Narrowing**: Hero 左侧文案、迁移区标题文字可在内容区内收窄以优化阅读行长。
- **Overflow Strategy**: 客户 logo 行移动端使用 `overflow-x-auto` 横向滚动；行业按钮列表移动端改为两列网格。
- **Flexibility Boundary**: 允许移动端间距、列数、字号微调；不改变品牌绿、深灰文字、锐利圆角、六边形装饰语言。

## 6. 视觉与动效

- **装饰**: 六边形蜂窝点阵图案 + 斜向四色渐变线条 + 线性绿色图标
- **阴影/边界**: 轻 —— 主按钮无阴影，卡片无阴影（Onshape 走扁平风），通知条和 hover 态有极轻阴影；分隔多用 border 线。
- **动效**: 克制精致 —— 按钮 hover 颜色微变 + 轻微上移；链接下划线滑入；通知条关闭淡出；特性图标 hover 微放大；过渡时长 150-200ms。

## 7. 组件原则

- 按钮三档：Primary（绿底白字，方角）/ Secondary（浅蓝底深灰字，方角）/ Outline（绿边绿字透明底，行业按钮用）。
- 输入框：浅灰底 + 细边框 + focus 绿色描边，方角微圆。
- 导航：两层结构（深色 utility bar + 白色主导航），下拉菜单白色卡片轻阴影。
- 图标：线性风格为主，绿色填充点缀，尺寸统一 24-32px。
- 所有可交互元素必须有 Default / Hover / Active / Focus-visible / Disabled 五态。

## 8. Image Direction

- **Image Role**: Hero 主视觉图（右侧工业 3D 产品渲染图）+ 功能区图标插画 + 客户 logo 集合
- **Image Art Direction**: Hero 图采用工业产品摄影级渲染风格，金属不锈钢质感的喷雾干燥设备置于纯白/浅灰背景，右侧带半透明工程图纸/数据界面叠加，光线从左上方来，阴影柔和干净，突出精密制造与云 CAD 的结合；功能区图标（芯片、火箭、对勾、流程图、云锁、多窗口、时钟文档）为扁平化线性风格，绿色主色+少量辅助色点缀；客户 logo 统一去饱和为深灰色调，保持品牌识别但不抢主视觉。
- **Image Prompt Keywords**: industrial spray dryer machine, stainless steel rendering, product photography style, clean white background, soft studio lighting from top-left, engineering blueprint overlay, semi-transparent CAD interface elements, mechanical precision, Onshape green accent highlights, minimalist composition, high-end product render
- **Image Avoidance**: 避免卡通化 3D 渲染、避免杂乱工厂背景、避免多人/商务人物素材、避免廉价科技感蓝色渐变光效、避免低分辨率模糊产品图、避免过度饱和色块堆叠。

## 9. Anti-patterns

- **Split personality**: 各 section 用不同圆角或阴影语言；全站统一锐利微圆角+扁平无阴影的 Onshape 风格。
- **Green everywhere**: 绿色铺满按钮、tab、icon、边框、链接、背景；primary 绿只给 CTA、品牌锚点、图标主色和链接，其余交给中性色与点缀色。
- **Default SaaS drift**: 回到默认蓝紫渐变和圆润卡片；坚持品牌绿+锐利方角+六边形装饰的 Onshape 识别。
- **Invisible interaction**: 只做 hover 不做 focus-visible；每个可交互元素都要有绿色描边的键盘聚焦态。
- **Honeycomb overload**: 蜂窝六边形图案用在每一个 section；只在 Hero 底部、行业区背景和品牌 logo 处出现，作为品牌记忆点而非纹理填充。
- **Status color clash**: webinar 紫和浅蓝按钮饱和度过高，盖过 primary 绿；点缀色饱和度需低于或等于 primary，保持绿色的视觉主导地位。