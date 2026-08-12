# Onshape 官网复刻 - 高保真原型实现

![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.2-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 项目介绍

这是一个针对 **Onshape 官网首页** 的高保真复刻项目，采用现代 Web 技术栈实现，致力于完整还原 Onshape 云原生 CAD 平台的视觉设计、交互逻辑与用户体验。

**项目目标：** 展示 Onshape 平台的核心价值主张，通过精细的 UI 设计与流畅的交互引导用户了解产品、促进注册转化。

---

## ✨ 核心特性

- **📱 响应式设计** — PC、平板、移动端完全适配
- **🎨 品牌视觉还原** — 严格遵循 Onshape 绿色品牌系统，蜂窝纹理装饰
- **⚡ 高性能渲染** — Vite + React 19，秒级启动与热更新
- **♿ 可访问性支持** — WCAG 标准，无障碍交互
- **🎭 丰富交互** — Framer Motion 动画，平滑滚动，hover 效果
- **🧩 组件化架构** — shadcn/ui 基础组件库，易于扩展与维护
- **📊 数据驱动** — 集中化 mock 数据管理，支持快速切换真实 API

---

## 🗂️ 页面结构

| 区块 | 锚点 | 说明 |
|------|------|------|
| 顶部导航栏 | `#navbar` | Logo、导航菜单、搜索、注册/登录 |
| Webinar 通知条 | `#webinar-bar` | 活动宣传，可关闭并本地持久化 |
| Hero 主视觉区 | `#hero` | 标题、描述、邮箱注册表单、3D 产品图 |
| 客户 Logo 展示 | `#clients` | 品牌信任建立，hover 彩色还原 |
| 特色功能卡片 | `#feature-cards` | Altium Connector + Startup Program |
| SOLIDWORKS 迁移区 | `#solidworks-switch` | 5 大特性卡片、CTA 按钮、彩色装饰线 |
| 行业应用区 | `#industries` | 垂直按钮列、蜂窝背景装饰 |
| 页脚 | `#footer` | 多列链接、版权、社交媒体 |

---

## 🛠️ 技术栈

### 前端框架
- **React 19.2.4** — UI 框架
- **TypeScript 5.9** — 类型安全
- **Vite 8** — 下一代前端构建工具

### 样式与 UI
- **Tailwind CSS 4.2.2** — 原子化 CSS
- **shadcn/ui** — 高质量 React 组件库
- **Framer Motion 12.38** — 声明式动画库

### 交互与数据
- **React Router DOM 7.13** — 客户端路由
- **React Hook Form 7.72** — 表单管理
- **Zod 4.3.6** — TypeScript 优先的模式验证
- **ECharts** — 数据可视化

### 开发工具
- **ESLint 9** — 代码质量检查
- **Concurrently 9** — 并行任务运行
- **Git Hooks** — 提交前自动校验

---

## 📦 项目结构

```
src/
├── index.tsx                 # 应用入口（含 Provider 层）
├── app.tsx                   # 路由配置
├── index.css                 # 全局样式 + 主题变量
├── components/
│   ├── layout.tsx            # 全局布局容器
│   └── ui/                   # shadcn/ui 内置组件
├── pages/
│   ├── HomePage/
│   │   ├── HomePage.tsx      # 官网首页主容器
│   │   └── components/       # 页面专属组件
│   └── NotFoundPage/
├── hooks/                    # 自定义 React Hooks
└── lib/                      # 工具函数（如 cn()）

shared/
└── static/
    ├── data/                 # mock 数据文件（JSON）
    └── images/               # 图片资源
```

---

## 🚀 快速开始

### 环境要求
- **Node.js** >= 20.19.0（推荐 22.13.0 或 24+）
- **npm** >= 10.x

### 安装依赖

```bash
cd app_17bxp9b2h74
npm install --include=optional
```

> **注意：** macOS ARM 环境需补装原生绑定：
> ```bash
> npm install --save-dev @tailwindcss/oxide-darwin-arm64
> ```

### 启动开发服务器

```bash
npm run dev
```

访问：http://localhost:8001

### 构建生产版本

```bash
npm run build
```

### 代码检查与格式化

```bash
# TypeScript 类型检查
npm run typecheck

# ESLint 代码质量检查
npm run lint

# 并行运行所有检查
npm run lint
```

---

## 📝 数据与配置

### Mock 数据来源

| 数据类型 | 文件位置 | 说明 |
|---------|---------|------|
| 页面文案与内容 | `shared/static/data/homeContent.ts` | 区块标题、描述、链接 |
| 客户 Logo 列表 | `shared/static/data/clients.ts` | 品牌名称 + SVG/图片路径 |
| 行业按钮列表 | `shared/static/data/industries.ts` | 行业名称数组 |
| 页脚链接列表 | `shared/static/data/footerLinks.ts` | 按列分组的链接 |

### 主题配置

主题色定义在 `src/index.css`，通过 CSS 变量 + Tailwind @theme 注册：

```css
:root {
  --background: hsl(0 0% 100%);        /* 白色背景 */
  --foreground: hsl(0 0% 8%);          /* 深灰文字 */
  --primary: hsl(144 100% 33%);        /* 品牌绿 */
  --card: hsl(0 0% 100%);              /* 卡片背景 */
  /* ... 更多色值 */
}
```

---

## 🎨 设计规范

### 品牌色系

| 角色 | 值 | 应用场景 |
|-----|-----|---------|
| 主色（绿） | `hsl(144 100% 33%)` | 按钮、链接、品牌锚点 |
| 背景 | `hsl(0 0% 100%)` | 页面、卡片背景 |
| 文字 | `hsl(0 0% 8%)` | 正文、标题 |
| 辅助灰 | `hsl(0 0% 94%)` | 边框、禁用态 |
| 点缀（紫） | `hsl(270 100% 50%)` | Webinar 通知条 |

### 设计特色

- **蜂窝纹理装饰** — Hero 底部黄色渐变、行业区背景六边形
- **彩色线条渐变** — SOLIDWORKS 区两侧绿/蓝/黄/紫斜向装饰
- **极简留白** — 大间距（gap-6 ~ gap-10）、清晰信息层级
- **细节动效** — 链接 hover、卡片浮起、滚动入场淡入

---

## 💬 全局交互

- **平滑滚动** — 所有锚点跳转使用 `scroll-behavior: smooth`
- **导航高亮** — 根据视口位置自动高亮当前导航项
- **导航栏过渡** — 滚动超过 Hero 区域后，导航栏从透明变深色 + 毛玻璃
- **滚动入场动画** — 区块内容进入视口时触发淡入/上移
- **Webinar 关闭状态** — localStorage 记录关闭状态，刷新后保持
- **表单验证** — 邮箱格式校验，提交反馈 Toast

---

## 🔧 开发指南

### 添加新页面

1. 在 `src/pages/<PageName>/` 下创建页面目录
2. 新建 `<PageName>.tsx` 作为页面入口
3. 在 `src/app.tsx` 的 `<Routes>` 中注册路由

```tsx
<Route path="/new-page" element={<NewPage />} />
```

### 添加页面专属组件

```
src/pages/HomePage/
├── HomePage.tsx
└── components/
    ├── HeroSection.tsx
    ├── ClientsSection.tsx
    └── ...
```

### 使用 shadcn/ui 组件

```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
```

### 导入 Mock 数据

```tsx
import homeContent from "@shared/static/data/homeContent.json";
import clients from "@shared/static/data/clients.json";
```

---

## 📋 禁止修改的文件

| 文件 | 原因 |
|------|------|
| `src/index.tsx` | Provider 层级 + 样式引入，由模板管理 |
| `src/components/ui/*` | shadcn/ui 内置组件，版本锁定 |

---

## 🌐 部署

### 构建

```bash
npm run build
```

生成的产物在 `dist/` 目录中。

### 部署平台示例

- **Vercel** — 一键部署，自动 CI/CD
- **Netlify** — 支持拖拽部署
- **GitHub Pages** — 静态托管

---

## 📄 文件清单

- **AGENTS.md** — 产品需求拆解文档（UI/UX 设计规范）
- **README.md** — 项目技术规范与开发指南
- **package.json** — 依赖与脚本配置
- **vite.config.ts** — Vite 构建配置
- **tsconfig.json** — TypeScript 编译配置
- **tailwind.config.ts** — Tailwind 主题配置

---

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. **报告 Bug** — 描述复现步骤、期望行为、实际表现
2. **提建议** — 新功能想法、设计改进、性能优化
3. **提交 PR** — 代码遵循项目风格，附加清晰的提交信息

---

## ⚖️ 许可证

MIT License © 2026

---

## 📞 联系与支持

- **Onshape 官网** — https://www.onshape.com
- **官方 API 文档** — https://developer.onshape.com

---

## 🎯 开发进度

- ✅ 首页整体布局
- ✅ 顶部导航栏
- ✅ Hero 主视觉区
- ✅ 客户 Logo 展示
- ✅ 特色功能卡片
- ✅ SOLIDWORKS 迁移区
- ✅ 行业应用区
- ✅ 页脚
- ⏳ 编辑器界面完整复刻（进行中）
- ⏳ 真实 API 对接（规划中）

---

**最后更新：** 2026-08-12  
**维护者：** Development Team
