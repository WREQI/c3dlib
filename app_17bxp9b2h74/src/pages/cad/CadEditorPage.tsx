import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {
  Menu,
  Lightbulb,
  Bell,
  List,
  Grid3X3,
  Puzzle,
  Share2,
  HelpCircle,
  ChevronDown,
  Undo2,
  Redo2,
  Pencil,
  Box,
  RotateCcw,
  Cylinder,
  Hexagon,
  CornerDownRight,
  Square,
  CircleDot,
  MinusSquare,
  Copy,
  Undo,
  BookOpen,
  Move,
  Scissors,
  Ruler,
  Palette,
  Scaling,
  Search,
  Filter,
  Plus,
  Pause,
  Clock,
  ChevronRight,
  Eye,
  EyeOff,
  Compass,
  Scale,
  Layers,
  Settings,
  BoxSelect,
  Circle,
  CircleSlash,
} from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// ============ 左侧垂直图标栏 ============
const LEFT_RAIL_ICONS = [
  { id: 'feature-tree', label: '特征树', icon: Layers },
  { id: 'sketch', label: '草图', icon: Pencil },
  { id: 'annotations', label: '注释', icon: CircleDot },
  { id: 'history', label: '历史', icon: Clock },
  { id: 'settings', label: '设置', icon: Settings },
  { id: 'layers', label: '图层', icon: BoxSelect },
];

// ============ 水平工具栏分组 ============
const TOOLBAR_GROUPS = [
  {
    id: 'undo-redo',
    items: [
      { id: 'undo', label: '撤销', icon: Undo2 },
      { id: 'redo', label: '重做', icon: Redo2 },
    ],
  },
  {
    id: 'sketch',
    items: [{ id: 'sketch', label: '草图', icon: Pencil, text: '小品', active: true }],
  },
  {
    id: 'create',
    items: [
      { id: 'extrude', label: '拉伸', icon: Box },
      { id: 'revolve', label: '旋转', icon: RotateCcw },
      { id: 'sweep', label: '扫描', icon: Cylinder },
      { id: 'loft', label: '放样', icon: Hexagon },
      { id: 'create-more', label: '更多创建特征', icon: ChevronDown, isDropdown: true },
    ],
  },
  {
    id: 'modify-edge',
    items: [
      { id: 'fillet', label: '圆角', icon: Square },
      { id: 'chamfer', label: '倒角', icon: MinusSquare },
      { id: 'edge-more', label: '更多边特征', icon: ChevronDown, isDropdown: true },
    ],
  },
  {
    id: 'engineering',
    items: [
      { id: 'hole', label: '孔', icon: Circle },
      { id: 'rib', label: '加强筋', icon: CornerDownRight },
      { id: 'eng-more', label: '更多工程特征', icon: ChevronDown, isDropdown: true },
    ],
  },
  {
    id: 'pattern',
    items: [
      { id: 'pattern', label: '阵列', icon: Copy },
      { id: 'mirror', label: '镜像', icon: Undo },
      { id: 'pattern-more', label: '更多阵列镜像', icon: ChevronDown, isDropdown: true },
    ],
  },
  {
    id: 'more-features',
    items: [
      { id: 'book', label: '更多特征', icon: BookOpen },
      { id: 'book-more', label: '更多', icon: ChevronDown, isDropdown: true },
    ],
  },
  {
    id: 'transform',
    items: [
      { id: 'transform', label: '变换', icon: Move },
      { id: 'trim', label: '修剪', icon: Scissors },
      { id: 'transform-more', label: '更多变换', icon: ChevronDown, isDropdown: true },
    ],
  },
  {
    id: 'measure',
    items: [
      { id: 'measure', label: '测量', icon: Ruler },
      { id: 'appearance', label: '外观', icon: Palette },
      { id: 'measure-more', label: '更多', icon: ChevronDown, isDropdown: true },
    ],
  },
  {
    id: 'select',
    items: [{ id: 'box-select', label: '框选', icon: Scaling }],
  },
];

// ============ 默认几何体列表 ============
const DEFAULT_GEOMETRY = [
  { id: 'origin', name: '起源', icon: CircleDot },
  { id: 'top', name: '顶部', icon: Square },
  { id: 'front', name: '前方', icon: Square },
  { id: 'right', name: '右', icon: Square },
];

// ============ 右侧垂直工具栏 ============
const RIGHT_VIEW_TOOLS = [
  { id: 'view-cube', label: '视图立方体', icon: Box },
  { id: 'visibility', label: '可见性', icon: Eye },
  { id: 'measure', label: '测量', icon: Ruler },
  { id: 'hide-show', label: '隐藏/显示', icon: CircleSlash },
];

export default function CadEditorPage() {
  const { id = 'doc-1' } = useParams();
  const navigate = useNavigate();
  const [leftPanelOpen, setLeftPanelOpen] = useState(true);
  const [activeTool, setActiveTool] = useState<string>('sketch');
  const [activeTab, setActiveTab] = useState<'part' | 'assembly'>('part');
  const [geomExpanded, setGeomExpanded] = useState(true);
  const [partsExpanded, setPartsExpanded] = useState(true);
  const [filterValue, setFilterValue] = useState('');
  const [searchToolValue, setSearchToolValue] = useState('');

  const handleToolClick = (toolId: string, label: string) => {
    setActiveTool(toolId);
    toast.info(`${label} 工具`);
  };

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-[#e8e8e8] text-[#333] font-sans text-[13px]">
      {/* ===== 第一行：文档标题栏（浅灰背景） ===== */}
      <header className="flex h-10 shrink-0 items-center gap-2 border-b border-[#d0d0d0] bg-[#e8e8e8] px-2">
        {/* 左侧：Logo + 汉堡 + 文档标题 */}
        <div className="flex items-center gap-2">
          {/* Onshape Logo - 绿色六边形 */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5"
            title="Onshape 主页"
          >
            <svg viewBox="0 0 32 32" className="h-6 w-6">
              <polygon
                points="16,2 30,10 30,22 16,30 2,22 2,10"
                fill="#00a651"
                stroke="#00a651"
                strokeWidth="1"
              />
              <polygon
                points="16,8 24,12.5 24,19.5 16,24 8,19.5 8,12.5"
                fill="#ffffff"
                opacity="0.15"
              />
              <polygon
                points="16,11.5 20,13.75 20,18.25 16,20.5 12,18.25 12,13.75"
                fill="#ffffff"
                opacity="0.3"
              />
            </svg>
          </button>

          <button
            className="flex h-7 w-7 items-center justify-center rounded text-[#555] hover:bg-[#d8d8d8]"
            title="菜单"
          >
            <Menu className="h-5 w-5" />
          </button>

          <span className="text-[14px] font-bold text-[#333]">无题文档</span>
          <span className="text-[12px] text-[#666]">主要角色</span>
          <button
            className="flex h-7 w-7 items-center justify-center rounded text-[#555] hover:bg-[#d8d8d8]"
            title="链接/版本"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </button>
          <button
            className="flex h-7 w-7 items-center justify-center rounded text-[#1a73e8] hover:bg-[#d8d8d8]"
            title="学生版"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
            </svg>
          </button>
        </div>

        {/* 右侧工具栏 */}
        <div className="ml-auto flex items-center gap-1">
          {/* 探索 Onshape */}
          <button
            className="flex h-8 items-center gap-1.5 rounded px-2 text-[13px] text-[#555] hover:bg-[#d8d8d8]"
            onClick={() => toast.info('探索 Onshape')}
          >
            <Lightbulb className="h-4 w-4 text-[#f9ab00]" />
            探索Onshape。
          </button>

          <button
            className="flex h-8 w-8 items-center justify-center rounded text-[#555] hover:bg-[#d8d8d8]"
            title="通知"
          >
            <Bell className="h-4 w-4" />
          </button>
          <button
            className="flex h-8 w-8 items-center justify-center rounded text-[#555] hover:bg-[#d8d8d8]"
            title="列表视图"
          >
            <List className="h-4 w-4" />
          </button>
          <button
            className="flex h-8 w-8 items-center justify-center rounded text-[#555] hover:bg-[#d8d8d8]"
            title="网格视图"
          >
            <Grid3X3 className="h-4 w-4" />
          </button>
          <button
            className="flex h-8 w-8 items-center justify-center rounded text-[#555] hover:bg-[#d8d8d8]"
            title="插件"
          >
            <Puzzle className="h-4 w-4" />
          </button>

          {/* 分享按钮 - 蓝色 */}
          <button
            onClick={() => toast.info('分享')}
            className="ml-1 flex h-8 items-center gap-1.5 rounded bg-[#1a73e8] px-3 text-[13px] font-medium text-white hover:bg-[#1557b0]"
          >
            <Share2 className="h-4 w-4" />
            分享
          </button>

          {/* 帮助 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="ml-1 flex h-8 items-center gap-0.5 rounded px-1.5 text-[#555] hover:bg-[#d8d8d8]">
                <HelpCircle className="h-4 w-4" />
                <ChevronDown className="h-3 w-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuItem className="text-xs" onClick={() => toast.info('帮助中心')}>
                帮助中心
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs" onClick={() => toast.info('键盘快捷键')}>
                键盘快捷键
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs" onClick={() => toast.info('关于')}>
                关于 Onshape
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 用户头像 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="ml-1 flex items-center gap-1.5 rounded px-1 py-0.5 hover:bg-[#d8d8d8]">
                <Avatar className="h-7 w-7 bg-[#1a73e8]">
                  <AvatarFallback className="text-[11px] font-semibold text-white">
                    凯
                  </AvatarFallback>
                </Avatar>
                <span className="text-[13px] text-[#333]">凯文·萨普特拉</span>
                <ChevronDown className="h-3 w-3 text-[#555]" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem className="text-xs" onClick={() => navigate('/cad/documents')}>
                我的文档
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs" onClick={() => navigate('/cad/account')}>
                账户设置
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs" onClick={() => navigate('/cad/signin')}>
                退出登录
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* ===== 第二行：特征工具栏（白色背景） ===== */}
      <div className="relative flex h-11 shrink-0 items-center border-b border-[#e0e0e0] bg-white pl-2 pr-2">
        {/* 水平工具栏 */}
        <div className="flex items-center gap-0">
          {TOOLBAR_GROUPS.map((group, gi) => {
            const showDivider = gi > 0;
            return (
              <div key={group.id} className="flex items-center">
                {showDivider && <div className="mx-1 h-5 w-px bg-[#e0e0e0]" />}
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTool === item.id;
                  if (item.isDropdown) {
                    return (
                      <button
                        key={item.id}
                        onClick={() => toast.info(`${item.label}`)}
                        title={item.label}
                        className="flex h-9 w-6 items-center justify-center text-[#888] hover:bg-[#f0f4f8] hover:text-[#1a73e8]"
                      >
                        <Icon className="h-3 w-3" />
                      </button>
                    );
                  }
                  // 有文字的按钮（如 "小品"）
                  if (item.text) {
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleToolClick(item.id, item.label)}
                        title={item.label}
                        className={`relative flex h-9 items-center gap-1.5 px-2 text-[12px] transition-colors ${
                          isActive
                            ? 'text-[#1a73e8]'
                            : 'text-[#555] hover:bg-[#f0f4f8] hover:text-[#1a73e8]'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="font-medium">{item.text}</span>
                        {isActive && (
                          <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-[#1a73e8]" />
                        )}
                      </button>
                    );
                  }
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleToolClick(item.id, item.label)}
                      title={item.label}
                      className={`flex h-9 w-9 items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-[#e8f0fe] text-[#1a73e8]'
                          : 'text-[#555] hover:bg-[#f0f4f8] hover:text-[#1a73e8]'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* 右侧搜索工具框 */}
        <div className="ml-auto flex items-center">
          <div className="relative">
            <Search className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#999]" />
            <input
              type="text"
              value={searchToolValue}
              onChange={(e) => setSearchToolValue(e.target.value)}
              placeholder="搜索工具...... alt/⌥ c"
              className="h-7 w-40 rounded border border-[#dadce0] bg-[#f8f9fa] pl-7 pr-2 text-[11px] text-[#555] focus:border-[#1a73e8] focus:bg-white focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* ===== 主体三栏区域 ===== */}
      <div className="flex min-h-0 flex-1">
        {/* 最左侧垂直图标栏（6个） */}
        <div className="flex w-10 shrink-0 flex-col items-center gap-0 border-r border-[#e0e0e0] bg-white py-1">
          {LEFT_RAIL_ICONS.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === 'feature-tree';
            return (
              <button
                key={item.id}
                onClick={() => toast.info(item.label)}
                title={item.label}
                className={`relative flex h-9 w-full items-center justify-center transition-colors ${
                  isActive
                    ? 'text-[#1a73e8]'
                    : 'text-[#666] hover:bg-[#f0f4f8] hover:text-[#1a73e8]'
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-1 bottom-1 w-0.5 bg-[#1a73e8]" />
                )}
                <Icon className="h-4 w-4" />
              </button>
            );
          })}
        </div>

        {/* 左侧特征面板 */}
        {leftPanelOpen && (
          <aside className="flex w-56 shrink-0 flex-col border-r border-[#e0e0e0] bg-white">
            {/* 筛选栏 */}
            <div className="flex h-10 items-center gap-1 border-b border-[#e8e8e8] px-2">
              <Filter className="h-4 w-4 shrink-0 text-[#888]" />
              <input
                type="text"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                placeholder="按名称或类型筛选"
                className="h-7 w-full rounded border border-transparent bg-transparent px-1 text-[12px] text-[#333] placeholder-[#aaa] focus:border-[#dadce0] focus:bg-white focus:outline-none"
              />
            </div>

            {/* 功能区域 */}
            <div className="flex-1 overflow-y-auto">
              {/* 功能标题行 */}
              <div className="flex h-8 items-center justify-between px-2">
                <span className="text-[12px] font-semibold text-[#333]">功能 (4)</span>
                <div className="flex items-center gap-0.5">
                  <button
                    onClick={() => toast.info('添加功能')}
                    className="flex h-6 w-6 items-center justify-center rounded text-[#1a73e8] hover:bg-[#f0f4f8]"
                    title="添加"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => toast.info('暂停')}
                    className="flex h-6 w-6 items-center justify-center rounded text-[#666] hover:bg-[#f0f4f8]"
                    title="暂停/继续"
                  >
                    <Pause className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => toast.info('历史')}
                    className="flex h-6 w-6 items-center justify-center rounded text-[#666] hover:bg-[#f0f4f8]"
                    title="历史"
                  >
                    <Clock className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* 默认几何体分组 */}
              <div className="px-1">
                <button
                  onClick={() => setGeomExpanded(!geomExpanded)}
                  className="flex w-full items-center gap-1 py-1 pl-1 text-left text-[12px] text-[#333] hover:bg-[#f5f5f5]"
                >
                  <ChevronRight
                    className={`h-3 w-3 shrink-0 text-[#666] transition-transform ${
                      geomExpanded ? 'rotate-90' : ''
                    }`}
                  />
                  <span className="font-medium">默认几何体</span>
                </button>

                {geomExpanded && (
                  <div className="ml-4 space-y-0.5 py-0.5">
                    {DEFAULT_GEOMETRY.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.id}
                          className="flex h-6 cursor-pointer items-center gap-1.5 rounded px-1 text-[12px] text-[#444] hover:bg-[#f0f4f8]"
                        >
                          <Icon className="h-3.5 w-3.5 text-[#666]" />
                          {item.name}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* 灰色进度条 */}
              <div className="mx-2 my-2 h-1 rounded-full bg-[#b8b8b8]" />

              {/* 部分分组 */}
              <div className="px-1">
                <button
                  onClick={() => setPartsExpanded(!partsExpanded)}
                  className="flex w-full items-center gap-1 py-1 pl-1 text-left text-[12px] text-[#333] hover:bg-[#f5f5f5]"
                >
                  <ChevronRight
                    className={`h-3 w-3 shrink-0 text-[#666] transition-transform ${
                      partsExpanded ? 'rotate-90' : ''
                    }`}
                  />
                  <span className="font-medium">部分 (0)</span>
                </button>
                {partsExpanded && (
                  <div className="ml-5 py-1 text-[11px] text-[#999]">
                    暂无零件
                  </div>
                )}
              </div>
            </div>

            {/* 底部：搜索 + 添加 */}
            <div className="flex h-9 items-center justify-between border-t border-[#e8e8e8] px-2">
              <button
                onClick={() => toast.info('搜索')}
                className="flex h-7 w-7 items-center justify-center rounded text-[#666] hover:bg-[#f0f4f8]"
                title="搜索"
              >
                <Search className="h-4 w-4" />
              </button>
              <button
                onClick={() => toast.info('添加')}
                className="flex h-7 w-7 items-center justify-center rounded text-[#666] hover:bg-[#f0f4f8]"
                title="添加"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </aside>
        )}

        {/* 收起面板按钮（左侧面板关闭时显示） */}
        {!leftPanelOpen && (
          <button
            onClick={() => setLeftPanelOpen(true)}
            className="flex h-full w-5 shrink-0 items-center justify-center border-r border-[#e0e0e0] bg-white hover:bg-[#f5f5f5]"
            title="展开面板"
          >
            <ChevronRight className="h-4 w-4 text-[#666]" />
          </button>
        )}

        {/* 中间：3D 视口区域 */}
        <div className="relative flex min-w-0 flex-1 bg-white">
          {/* 左侧中间收起按钮（当左侧面板打开时显示） */}
          {leftPanelOpen && (
            <button
              onClick={() => setLeftPanelOpen(false)}
              className="absolute left-0 top-1/2 z-10 flex h-10 w-5 -translate-y-1/2 items-center justify-center border border-l-0 border-[#d0d0d0] bg-white text-[#666] hover:bg-[#f5f5f5]"
              title="收起面板"
            >
              <List className="h-4 w-4" />
            </button>
          )}

          {/* 3D 视口内容 - 三个基准平面 */}
          <div className="relative flex flex-1 items-center justify-center">
            <svg viewBox="0 0 600 500" className="h-full w-full max-w-3xl">
              {/* Front 平面（正立面，偏竖直） */}
              <polygon
                points="260,140 440,200 440,420 260,360"
                fill="#f0f4f8"
                fillOpacity="0.5"
                stroke="#4a90d9"
                strokeWidth="1"
              />
              <text
                x="275"
                y="165"
                fill="#1a73e8"
                fontSize="18"
                fontFamily="Arial, sans-serif"
                fontWeight="500"
              >
                Front
              </text>

              {/* Top 平面（水平面，斜的） */}
              <polygon
                points="160,260 320,200 500,260 340,320"
                fill="#eef4fa"
                fillOpacity="0.4"
                stroke="#4a90d9"
                strokeWidth="1"
              />
              <text
                x="330"
                y="228"
                fill="#1a73e8"
                fontSize="14"
                fontFamily="Arial, sans-serif"
                fontWeight="500"
                transform="rotate(-12, 330, 228)"
              >
                Top
              </text>

              {/* Right 平面（侧立面） */}
              <polygon
                points="440,200 520,170 520,390 440,420"
                fill="#eef2f7"
                fillOpacity="0.45"
                stroke="#4a90d9"
                strokeWidth="1"
              />
              <text
                x="340"
                y="258"
                fill="#1a73e8"
                fontSize="13"
                fontFamily="Arial, sans-serif"
                fontWeight="500"
                transform="rotate(18, 340, 258)"
              >
                Right
              </text>

              {/* 中心圆点标记 */}
              <circle cx="355" cy="285" r="4" fill="#333" stroke="#fff" strokeWidth="1.5" />
              <circle cx="355" cy="285" r="7" fill="none" stroke="#333" strokeWidth="1" />
            </svg>

            {/* 右侧垂直工具栏 */}
            <div className="absolute right-2 top-1/2 flex -translate-y-1/2 flex-col gap-0.5 rounded border border-[#d0d0d0] bg-white p-0.5 shadow-sm">
              {RIGHT_VIEW_TOOLS.map((item) => {
                const Icon = item.icon;
                const isActive = item.id === 'view-cube' || item.id === 'measure';
                return (
                  <button
                    key={item.id}
                    onClick={() => toast.info(item.label)}
                    title={item.label}
                    className={`flex h-8 w-8 items-center justify-center rounded transition-colors ${
                      isActive
                        ? 'bg-[#e8f0fe] text-[#1a73e8]'
                        : 'text-[#666] hover:bg-[#f0f4f8] hover:text-[#1a73e8]'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                );
              })}
            </div>

            {/* 右下角 View Cube 视图立方体 */}
            <div className="absolute bottom-12 right-3 flex flex-col items-end gap-1">
              <svg viewBox="0 0 90 90" className="h-28 w-28">
                <defs>
                  <linearGradient id="vcTop2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#f0f0f0" />
                  </linearGradient>
                  <linearGradient id="vcFront2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f0f0f0" />
                    <stop offset="100%" stopColor="#e0e0e0" />
                  </linearGradient>
                  <linearGradient id="vcSide2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#e0e0e0" />
                    <stop offset="100%" stopColor="#d0d0d0" />
                  </linearGradient>
                </defs>

                {/* 外围箭头（指示旋转） */}
                <g stroke="#b0b0b0" strokeWidth="1" fill="none">
                  <polygon points="45,4 42,10 48,10" fill="#b0b0b0" />
                  <polygon points="86,45 80,42 80,48" fill="#b0b0b0" />
                  <polygon points="45,86 42,80 48,80" fill="#b0b0b0" />
                  <polygon points="4,45 10,42 10,48" fill="#b0b0b0" />
                </g>

                {/* 等轴立方体 */}
                <polygon
                  points="45,22 72,36 45,50 18,36"
                  fill="url(#vcTop2)"
                  stroke="#888"
                  strokeWidth="0.8"
                />
                <polygon
                  points="18,36 45,50 45,76 18,62"
                  fill="url(#vcFront2)"
                  stroke="#888"
                  strokeWidth="0.8"
                />
                <polygon
                  points="72,36 45,50 45,76 72,62"
                  fill="url(#vcSide2)"
                  stroke="#888"
                  strokeWidth="0.8"
                />

                {/* 面标签 */}
                <text
                  x="45"
                  y="30"
                  textAnchor="middle"
                  fill="#444"
                  fontSize="8"
                  fontWeight="600"
                >
                  Top
                </text>
                <text x="28" y="60" fill="#444" fontSize="8" fontWeight="600">
                  Front
                </text>
                <text x="58" y="60" textAnchor="middle" fill="#444" fontSize="8" fontWeight="600">
                  Right
                </text>

                {/* XYZ 轴（从左下原点出发） */}
                <g>
                  {/* X 轴 - 红（向右） */}
                  <line x1="15" y1="78" x2="38" y2="78" stroke="#d93025" strokeWidth="1.2" />
                  <polygon points="38,78 34,75 34,81" fill="#d93025" />
                  <text x="40" y="82" fill="#d93025" fontSize="9" fontWeight="bold">
                    X
                  </text>

                  {/* Y 轴 - 绿（向上） */}
                  <line x1="15" y1="78" x2="15" y2="55" stroke="#1e8e3e" strokeWidth="1.2" />
                  <polygon points="15,55 12,59 18,59" fill="#1e8e3e" />
                  <text x="18" y="58" fill="#1e8e3e" fontSize="9" fontWeight="bold">
                    Y
                  </text>

                  {/* Z 轴 - 蓝（向左上） */}
                  <line x1="15" y1="78" x2="4" y2="67" stroke="#1a73e8" strokeWidth="1.2" />
                  <polygon points="4,67 8,66 7,70" fill="#1a73e8" />
                  <text x="0" y="63" fill="#1a73e8" fontSize="9" fontWeight="bold">
                    Z
                  </text>
                </g>
              </svg>

              {/* 下方小立方体 + 下拉 */}
              <button
                onClick={() => toast.info('视图选项')}
                className="flex items-center gap-1 rounded border border-[#d0d0d0] bg-white px-1.5 py-0.5 text-[11px] text-[#666] hover:bg-[#f5f5f5]"
              >
                <Box className="h-3.5 w-3.5" />
                <ChevronDown className="h-3 w-3" />
              </button>
            </div>

            {/* 底部右下角三个小图标 */}
            <div className="absolute bottom-2 right-3 flex items-center gap-2">
              <button
                onClick={() => toast.info('测量')}
                className="flex h-6 w-6 items-center justify-center rounded text-[#666] hover:bg-[#e8e8e8]"
                title="测量"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 12h20M6 8v8M10 10v4M14 10v4M18 8v8" />
                </svg>
              </button>
              <button
                onClick={() => toast.info('角度')}
                className="flex h-6 w-6 items-center justify-center rounded text-[#666] hover:bg-[#e8e8e8]"
                title="角度"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M12 3v3M5.64 5.64l2.12 2.12M3 12h3M12 21a9 9 0 0 0 9-9" />
                  <path d="M12 12l6-3" />
                </svg>
              </button>
              <button
                onClick={() => toast.info('分析')}
                className="flex h-6 w-6 items-center justify-center rounded text-[#666] hover:bg-[#e8e8e8]"
                title="分析"
              >
                <Scale className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 底部标签栏（浅灰背景） ===== */}
      <div className="flex h-9 shrink-0 items-end gap-0 border-t border-[#d0d0d0] bg-[#d0d0d0] px-2">
        <button
          onClick={() => setActiveTab('part')}
          className={`flex h-8 items-center gap-1.5 rounded-t border border-b-0 px-3 text-[12px] ${
            activeTab === 'part'
              ? 'border-[#c0c0c0] bg-white text-[#333]'
              : 'border-transparent bg-[#e0e0e0] text-[#666] hover:bg-[#e8e8e8]'
          }`}
        >
          <Box className="h-3.5 w-3.5" />
          第一部分工作室
        </button>
        <button
          onClick={() => setActiveTab('assembly')}
          className={`flex h-8 items-center gap-1.5 rounded-t border border-b-0 px-3 text-[12px] ${
            activeTab === 'assembly'
              ? 'border-[#c0c0c0] bg-white text-[#333]'
              : 'border-transparent bg-[#e0e0e0] text-[#666] hover:bg-[#e8e8e8]'
          }`}
        >
          <Layers className="h-3.5 w-3.5" />
          第一届议会
        </button>
      </div>
    </div>
  );
}
