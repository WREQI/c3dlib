import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {
  Plus,
  Minus,
  MousePointer2,
  Ruler,
  Type,
  Grid3x3,
  Layers,
  Settings,
  Box,
  FileText,
  ChevronDown,
  Eye,
  EyeOff,
  Pen,
  Move,
  CircleDot,
  Triangle,
  RectangleVertical,
} from 'lucide-react';

const DRAWING_TOOLS = [
  { id: 'select', label: 'Select', icon: MousePointer2 },
  { id: 'move', label: 'Move', icon: Move },
  { id: 'dimension', label: 'Dimension', icon: Ruler },
  { id: 'note', label: 'Note', icon: Type },
  { id: 'table', label: 'Table', icon: Grid3x3 },
];

const ANNOTATION_TOOLS = [
  { id: 'datum', label: 'Datum', icon: CircleDot },
  { id: 'gdandt', label: 'GD&T', icon: Triangle },
  { id: 'balloon', label: 'Balloon', icon: CircleDot },
];

const VIEW_TREE = [
  { id: 'sheet-1', name: 'Sheet 1', type: 'sheet', level: 0, icon: FileText },
  { id: 'view-1', name: 'Front View', type: 'view', level: 1, icon: RectangleVertical },
  { id: 'view-2', name: 'Top View', type: 'view', level: 1, icon: RectangleVertical },
  { id: 'view-3', name: 'Right View', type: 'view', level: 1, icon: RectangleVertical },
  { id: 'view-4', name: 'Isometric', type: 'view', level: 1, icon: Box },
  { id: 'sheet-2', name: 'Sheet 2', type: 'sheet', level: 0, icon: FileText },
];

const STYLE_PROPERTIES = [
  { label: 'Dimension Style', value: 'ANSI' },
  { label: 'Text Height', value: '3.50 mm' },
  { label: 'Arrow Style', value: 'Filled' },
  { label: 'Line Weight', value: '0.25 mm' },
  { label: 'Layer', value: 'Dimensions' },
  { label: 'Color', value: 'Black' },
];

export default function CadDrawingPage() {
  const { id = 'doc-1' } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('drawing');
  const [selectedView, setSelectedView] = useState('Front View');
  const [treeExpanded, setTreeExpanded] = useState<Record<string, boolean>>({
    'sheet-1': true,
    'sheet-2': false,
  });
  const [visibleMap, setVisibleMap] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setTreeExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleVisible = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setVisibleMap((prev) => ({ ...prev, [id]: !prev[id] }));
    toast.info(`Visibility toggled`);
  };

  const onToolClick = (label: string) => {
    toast.info(`${label} tool activated`);
  };

  const tabs = [
    { id: 'part', label: 'Part 1' },
    { id: 'assembly', label: 'Assembly 1' },
    { id: 'drawing', label: 'Drawing 1' },
  ];

  const switchTab = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'part') {
      navigate(`/cad/document/${id}`);
    } else if (tabId === 'assembly') {
      navigate(`/cad/document/${id}/assembly`);
    }
  };

  const partProfile = (
    <svg viewBox="0 0 120 70" className="h-full w-full">
      <polygon
        points="10,55 30,55 30,25 90,25 90,55 110,55 110,60 10,60"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="1.2"
      />
      <circle cx="45" cy="42" r="5" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <circle cx="75" cy="42" r="5" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="10" y1="15" x2="30" y2="15" stroke="#1a1a1a" strokeWidth="0.8" />
      <line x1="20" y1="5" x2="20" y2="25" stroke="#1a1a1a" strokeWidth="0.8" />
      {/* Center lines */}
      <line x1="45" y1="28" x2="45" y2="56" stroke="#1a73e8" strokeWidth="0.5" strokeDasharray="3,2" />
      <line x1="75" y1="28" x2="75" y2="56" stroke="#1a73e8" strokeWidth="0.5" strokeDasharray="3,2" />
    </svg>
  );

  const topView = (
    <svg viewBox="0 0 120 40" className="h-full w-full">
      <rect x="10" y="10" width="100" height="20" fill="none" stroke="#1a1a1a" strokeWidth="1.2" />
      <circle cx="35" cy="20" r="4" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <circle cx="85" cy="20" r="4" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <circle cx="35" cy="20" r="2" fill="none" stroke="#1a1a1a" strokeWidth="0.8" />
      <circle cx="85" cy="20" r="2" fill="none" stroke="#1a1a1a" strokeWidth="0.8" />
      <line x1="35" y1="4" x2="35" y2="36" stroke="#1a73e8" strokeWidth="0.5" strokeDasharray="3,2" />
      <line x1="85" y1="4" x2="85" y2="36" stroke="#1a73e8" strokeWidth="0.5" strokeDasharray="3,2" />
    </svg>
  );

  const rightView = (
    <svg viewBox="0 0 60 70" className="h-full w-full">
      <rect x="10" y="15" width="40" height="40" fill="none" stroke="#1a1a1a" strokeWidth="1.2" />
      <line x1="10" y1="25" x2="50" y2="25" stroke="#1a1a1a" strokeWidth="0.6" />
      <line x1="10" y1="45" x2="50" y2="45" stroke="#1a1a1a" strokeWidth="0.6" />
      <circle cx="30" cy="35" r="5" fill="none" stroke="#1a1a1a" strokeWidth="1" />
    </svg>
  );

  const isometricView = (
    <svg viewBox="0 0 120 80" className="h-full w-full">
      <polygon
        points="20,50 60,30 100,50 100,70 60,90 20,70"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="1.2"
      />
      <polygon
        points="40,40 60,30 80,40 80,60 60,70 40,60"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="0.8"
      />
      <line x1="60" y1="30" x2="60" y2="10" stroke="#1a73e8" strokeWidth="0.5" strokeDasharray="2,2" />
    </svg>
  );

  return (
    <div className="flex h-full min-h-0 flex-col bg-[#f8f9fa]">
      {/* Toolbar */}
      <div className="flex h-10 shrink-0 items-center justify-between border-b border-[#e0e0e0] bg-white px-2">
        <div className="flex items-center gap-0.5">
          {DRAWING_TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <button
                key={tool.id}
                onClick={() => onToolClick(tool.label)}
                className="flex h-8 w-12 flex-col items-center justify-center rounded text-[9px] text-[#5f6368] hover:bg-[#e8f0fe] hover:text-[#1a73e8]"
                title={tool.label}
              >
                <Icon className="h-3.5 w-3.5" />
                <span className="mt-0.5">{tool.label}</span>
              </button>
            );
          })}

          <div className="mx-2 h-5 w-px bg-[#e0e0e0]" />

          {ANNOTATION_TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <button
                key={tool.id}
                onClick={() => onToolClick(tool.label)}
                className="flex h-8 w-14 flex-col items-center justify-center rounded text-[9px] text-[#5f6368] hover:bg-[#e8f0fe] hover:text-[#1a73e8]"
              >
                <Icon className="h-3.5 w-3.5" />
                <span className="mt-0.5">{tool.label}</span>
              </button>
            );
          })}

          <div className="mx-2 h-5 w-px bg-[#e0e0e0]" />

          <button
            onClick={() => toast.info('Insert view')}
            className="flex h-8 items-center gap-1 rounded px-2 text-[11px] text-[#5f6368] hover:bg-[#e8f0fe] hover:text-[#1a73e8]"
          >
            <Plus className="h-3.5 w-3.5" />
            Insert View
            <ChevronDown className="h-3 w-3" />
          </button>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => toast.info('Export PDF')}
            className="flex h-7 items-center gap-1 rounded px-2 text-[11px] text-[#5f6368] hover:bg-[#e8f0fe] hover:text-[#1a73e8]"
          >
            <FileText className="h-3 w-3" />
            Export PDF
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded text-[#5f6368] hover:bg-[#e8f0fe] hover:text-[#1a73e8]">
            <Settings className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* Left: Drawing tree */}
        <div className="flex w-52 shrink-0 flex-col border-r border-[#e0e0e0] bg-white">
          <div className="flex h-7 items-center gap-1 border-b border-[#e0e0e0] bg-[#f8f9fa] px-2 text-[11px] font-medium text-[#333]">
            <Layers className="h-3.5 w-3.5" />
            Drawing Tree
          </div>
          <div className="flex-1 overflow-y-auto py-1">
            {VIEW_TREE.map((node) => {
              const Icon = node.icon || FileText;
              const isSheet = node.type === 'sheet';
              const isExpanded = treeExpanded[node.id] ?? false;
              const isVisible = visibleMap[node.id] ?? true;
              const isSelected = node.name === selectedView;

              return (
                <div
                  key={node.id}
                  style={{ paddingLeft: `${node.level * 12 + 4}px` }}
                  onClick={() => {
                    if (!isSheet) setSelectedView(node.name);
                    if (isSheet) toggleExpand(node.id);
                  }}
                  className={`flex h-5 cursor-pointer items-center gap-1 text-xs hover:bg-[#e8f0fe]/50 ${
                    isSelected ? 'bg-[#e8f0fe] text-[#1a73e8] font-medium' : 'text-[#333]'
                  } ${isSheet ? 'font-semibold text-[#333]' : ''}`}
                >
                  {isSheet ? (
                    <ChevronDown
                      className={`h-3 w-3 shrink-0 transition-transform text-[#9aa0a6] ${
                        isExpanded ? '' : '-rotate-90'
                      }`}
                    />
                  ) : (
                    <div className="w-3 shrink-0" />
                  )}
                  <Icon
                    className={`h-3.5 w-3.5 shrink-0 ${
                      isSheet ? 'text-[#1a73e8]' : 'text-[#5f6368]'
                    }`}
                  />
                  <span className="truncate flex-1">{node.name}</span>
                  <button
                    onClick={(e) => toggleVisible(node.id, e)}
                    className="shrink-0 text-[#9aa0a6] hover:text-[#1a73e8]"
                  >
                    {isVisible ? (
                      <Eye className="h-3 w-3" />
                    ) : (
                      <EyeOff className="h-3 w-3" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Center: Drawing canvas */}
        <div className="relative flex flex-1 items-center justify-center overflow-auto bg-[#e8eaed] p-6">
          {/* Drawing sheet (A4 style) */}
          <div
            className="relative bg-white shadow-lg"
            style={{
              width: '760px',
              height: '540px',
            }}
          >
            {/* Sheet border */}
            <div className="absolute inset-3 border border-[#333]">
              {/* Title block */}
              <div className="absolute bottom-0 right-0 w-56 border-l border-t border-[#333] bg-white">
                <div className="grid grid-cols-3 gap-0 text-[8px] text-[#333]">
                  <div className="border-b border-r border-[#333] p-1 font-medium">Title</div>
                  <div className="col-span-2 border-b border-[#333] p-1">Bracket Assembly</div>
                  <div className="border-b border-r border-[#333] p-1 font-medium">Drawn</div>
                  <div className="col-span-2 border-b border-[#333] p-1">K. Smith</div>
                  <div className="border-b border-r border-[#333] p-1 font-medium">Scale</div>
                  <div className="border-b border-r border-[#333] p-1">1:2</div>
                  <div className="border-b border-[#333] p-1 font-medium">DWG-001</div>
                </div>
              </div>

              {/* Views */}
              {/* Front View (main) */}
              <div className="absolute left-16 top-16 h-36 w-56">
                <div className="mb-1 text-center text-[9px] font-medium text-[#5f6368]">FRONT</div>
                {partProfile}
                {/* Dimension lines */}
                <svg className="absolute -left-14 top-0 h-full w-12" viewBox="0 0 40 140">
                  <line x1="8" y1="8" x2="8" y2="130" stroke="#333" strokeWidth="0.6" />
                  <line x1="4" y1="8" x2="12" y2="8" stroke="#333" strokeWidth="0.6" />
                  <line x1="4" y1="130" x2="12" y2="130" stroke="#333" strokeWidth="0.6" />
                  <text x="0" y="70" fontSize="8" fill="#333" transform="rotate(-90, 0, 70)">
                    85.00
                  </text>
                </svg>
                <svg className="absolute -bottom-8 left-0 h-8 w-full" viewBox="0 0 220 30">
                  <line x1="4" y1="15" x2="216" y2="15" stroke="#333" strokeWidth="0.6" />
                  <line x1="4" y1="10" x2="4" y2="20" stroke="#333" strokeWidth="0.6" />
                  <line x1="216" y1="10" x2="216" y2="20" stroke="#333" strokeWidth="0.6" />
                  <text x="100" y="12" fontSize="8" fill="#333">200.00</text>
                </svg>
              </div>

              {/* Top View */}
              <div className="absolute left-16 top-64 h-24 w-56">
                <div className="mb-1 text-center text-[9px] font-medium text-[#5f6368]">TOP</div>
                {topView}
                <svg className="absolute -bottom-6 left-0 h-6 w-full" viewBox="0 0 220 24">
                  <line x1="4" y1="12" x2="216" y2="12" stroke="#333" strokeWidth="0.6" />
                  <line x1="4" y1="8" x2="4" y2="16" stroke="#333" strokeWidth="0.6" />
                  <line x1="216" y1="8" x2="216" y2="16" stroke="#333" strokeWidth="0.6" />
                  <text x="100" y="10" fontSize="8" fill="#333">200.00</text>
                </svg>
              </div>

              {/* Right View */}
              <div className="absolute left-[340px] top-16 h-36 w-28">
                <div className="mb-1 text-center text-[9px] font-medium text-[#5f6368]">RIGHT</div>
                {rightView}
              </div>

              {/* Isometric View */}
              <div className="absolute left-[450px] top-16 h-40 w-56">
                <div className="mb-1 text-center text-[9px] font-medium text-[#5f6368]">
                  ISOMETRIC
                </div>
                {isometricView}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Style properties */}
        <div className="flex w-56 shrink-0 flex-col border-l border-[#e0e0e0] bg-white">
          <div className="flex h-7 items-center gap-1 border-b border-[#e0e0e0] bg-[#f8f9fa] px-2 text-[11px] font-medium text-[#333]">
            <Settings className="h-3.5 w-3.5" />
            Style / Properties
          </div>
          <div className="flex-1 overflow-y-auto p-2 text-xs">
            <div className="mb-2 text-[11px] font-medium text-[#1a73e8]">{selectedView}</div>
            <div className="space-y-2">
              {STYLE_PROPERTIES.map((prop) => (
                <div key={prop.label}>
                  <div className="text-[10px] text-[#5f6368]">{prop.label}</div>
                  <div className="mt-0.5 flex h-6 items-center justify-between rounded border border-[#dadce0] bg-white px-2 text-[11px] text-[#333]">
                    <span>{prop.value}</span>
                    <ChevronDown className="h-3 w-3 text-[#9aa0a6]" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              <button
                onClick={() => toast.success('Style applied')}
                className="w-full h-7 bg-[#1a73e8] rounded text-[11px] text-white font-medium hover:bg-[#1557b0]"
              >
                Apply Style
              </button>
              <button
                onClick={() => toast.info('Style saved')}
                className="w-full h-7 border border-[#dadce0] rounded text-[11px] text-[#5f6368] hover:bg-[#f8f9fa]"
              >
                Save as New Style
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom tabs */}
      <div className="flex h-7 shrink-0 items-end gap-0.5 border-t border-[#e0e0e0] bg-[#f1f3f4] px-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => switchTab(tab.id)}
            className={`flex h-6 items-center gap-1 border border-b-0 px-3 text-[11px] rounded-t ${
              activeTab === tab.id
                ? 'bg-white border-[#e0e0e0] text-[#1a73e8] font-medium'
                : 'bg-[#e8eaed] border-transparent text-[#5f6368] hover:bg-[#dadce0]'
            }`}
          >
            {tab.id === 'part' && <Box className="h-3 w-3" />}
            {tab.id === 'assembly' && <Layers className="h-3 w-3" />}
            {tab.id === 'drawing' && <Minus className="h-3 w-3" />}
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
