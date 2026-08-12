import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {
  Plus,
  Move,
  RotateCw,
  Minus,
  Copy,
  Repeat,
  Grid3X3,
  CircleDot,
  Box,
  Layers,
  Settings,
  Triangle,
  Hexagon,
  ChevronDown,
  Play,
  Eye,
  Lock,
  EyeOff,
  LockOpen,
  Puzzle,
  ArrowLeftRight,
} from 'lucide-react';

const ASSEMBLY_TOOLS = [
  { id: 'mate', label: 'Mate', icon: Puzzle },
  { id: 'move', label: 'Move', icon: Move },
  { id: 'rotate', label: 'Rotate', icon: RotateCw },
  { id: 'pattern', label: 'Pattern', icon: Grid3X3 },
  { id: 'mirror', label: 'Mirror', icon: Repeat },
  { id: 'copy', label: 'Copy', icon: Copy },
  { id: 'suppress', label: 'Suppress', icon: EyeOff },
];

const INSERT_TOOLS = [
  { id: 'insert', label: 'Insert', icon: Plus },
  { id: 'fasteners', label: 'Fasteners', icon: Box },
];

const ASSEMBLY_TREE = [
  { id: 'asm-1', name: 'Assembly 1', type: 'assembly', level: 0, icon: Layers },
  { id: 'part-1', name: 'Base Plate', type: 'part', level: 1, icon: Box, constrained: true },
  { id: 'part-2', name: 'Bracket Arm', type: 'part', level: 1, icon: Triangle, constrained: true },
  { id: 'part-3', name: 'Shaft_25mm', type: 'part', level: 1, icon: CircleDot, constrained: false },
  { id: 'subasm', name: 'Bearing Sub-Assembly', type: 'assembly', level: 1, icon: Layers, constrained: true },
  { id: 'part-4', name: 'Bearing 6001', type: 'part', level: 2, icon: CircleDot },
  { id: 'part-5', name: 'Spacer Ring', type: 'part', level: 2, icon: Hexagon },
  { id: 'mates-group', name: 'Mates', type: 'group', level: 1, icon: ArrowLeftRight },
  { id: 'mate-1', name: 'Mate 1: Coincident', type: 'mate', level: 2, icon: ArrowLeftRight },
  { id: 'mate-2', name: 'Mate 2: Concentric', type: 'mate', level: 2, icon: ArrowLeftRight },
  { id: 'mate-3', name: 'Mate 3: Tangent', type: 'mate', level: 2, icon: ArrowLeftRight },
  { id: 'mate-4', name: 'Mate 4: Distance', type: 'mate', level: 2, icon: ArrowLeftRight },
];

const MATE_PROPERTIES = [
  { label: 'Mate Type', value: 'Coincident' },
  { label: 'Entity 1', value: 'Face <1>' },
  { label: 'Entity 2', value: 'Face <2>' },
  { label: 'Offset', value: '0.000 mm' },
  { label: 'Flip Alignment', value: 'No' },
  { label: 'Suppressed', value: 'No' },
];

export default function CadAssemblyPage() {
  const { id = 'doc-1' } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('assembly');
  const [selectedMate, setSelectedMate] = useState('Mate 1: Coincident');
  const [treeExpanded, setTreeExpanded] = useState<Record<string, boolean>>({
    'asm-1': true,
    'subasm': true,
    'mates-group': true,
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
    } else if (tabId === 'drawing') {
      navigate(`/cad/document/${id}/drawing`);
    }
  };

  return (
    <div className="flex h-full min-h-0 flex-col bg-[#f8f9fa]">
      {/* Toolbar */}
      <div className="flex h-10 shrink-0 items-center justify-between border-b border-[#e0e0e0] bg-white px-2">
        <div className="flex items-center gap-0.5">
          {ASSEMBLY_TOOLS.map((tool) => {
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

          {INSERT_TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <button
                key={tool.id}
                onClick={() => onToolClick(tool.label)}
                className="flex h-8 items-center gap-1 rounded px-2 text-[11px] text-[#5f6368] hover:bg-[#e8f0fe] hover:text-[#1a73e8]"
              >
                <Icon className="h-3.5 w-3.5" />
                {tool.label}
                <ChevronDown className="h-3 w-3" />
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => toast.info('Play simulation')}
            className="flex h-7 items-center gap-1 rounded px-2 text-[11px] text-[#5f6368] hover:bg-[#e8f0fe] hover:text-[#1a73e8]"
          >
            <Play className="h-3 w-3" />
            Play
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded text-[#5f6368] hover:bg-[#e8f0fe] hover:text-[#1a73e8]">
            <Settings className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* Left: Assembly tree */}
        <div className="flex w-56 shrink-0 flex-col border-r border-[#e0e0e0] bg-white">
          <div className="flex h-7 items-center gap-1 border-b border-[#e0e0e0] bg-[#f8f9fa] px-2 text-[11px] font-medium text-[#333]">
            <Layers className="h-3.5 w-3.5" />
            Assembly Tree
          </div>
          <div className="flex-1 overflow-y-auto py-1">
            {ASSEMBLY_TREE.map((node) => {
              const Icon = node.icon || Box;
              const hasChildren = node.type === 'assembly' || node.type === 'group';
              const isExpanded = treeExpanded[node.id] ?? false;
              const isVisible = visibleMap[node.id] ?? true;
              const isSelected = node.name === selectedMate || (node.id === 'part-2');

              return (
                <div
                  key={node.id}
                  style={{ paddingLeft: `${node.level * 12 + 4}px` }}
                  onClick={() => {
                    if (node.type === 'mate') setSelectedMate(node.name);
                    if (hasChildren) toggleExpand(node.id);
                  }}
                  className={`flex h-5 cursor-pointer items-center gap-1 text-xs hover:bg-[#e8f0fe]/50 ${
                    isSelected ? 'bg-[#e8f0fe] text-[#1a73e8] font-medium' : 'text-[#333]'
                  }`}
                >
                  {hasChildren ? (
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
                      node.type === 'mate' ? 'text-[#e37400]' : 'text-[#5f6368]'
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
                  {node.type === 'part' && node.constrained !== false && (
                    <Lock className="h-2.5 w-2.5 shrink-0 text-[#9aa0a6]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Center: Viewport */}
        <div className="relative flex flex-1 flex-col bg-gradient-to-b from-[#f8f9fa] to-[#e8eaed]">
          {/* Viewport 3D scene (faux) */}
          <div className="relative flex flex-1 items-center justify-center">
            {/* Grid */}
            <div
              className="absolute bottom-0 left-1/2 h-[280px] w-[520px] -translate-x-1/2"
              style={{
                background: `
                  linear-gradient(90deg, rgba(26,115,232,0.08) 1px, transparent 1px),
                  linear-gradient(rgba(26,115,232,0.08) 1px, transparent 1px)
                `,
                backgroundSize: '25px 25px',
                transform: 'perspective(1000px) rotateX(60deg)',
                transformOrigin: 'bottom center',
              }}
            />

            {/* Assembly 3D illustration */}
            <div className="relative flex items-end gap-0">
              {/* Base */}
              <div
                className="h-12 w-64 rounded-sm"
                style={{
                  background: 'linear-gradient(180deg, #b0bec5 0%, #78909c 60%, #546e7a 100%)',
                  boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.3), 0 8px 20px rgba(0,0,0,0.25)',
                }}
              >
                <div className="flex h-full items-center justify-around px-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-3 w-3 rounded-full bg-[#37474f]"
                      style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5)' }}
                    />
                  ))}
                </div>
              </div>

              {/* Bracket arm */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-10"
                style={{
                  width: '120px',
                  height: '90px',
                }}
              >
                <div
                  className="absolute left-1/2 top-0 h-20 w-3 -translate-x-1/2 rounded-sm"
                  style={{
                    background: 'linear-gradient(90deg, #90a4ae 0%, #cfd8dc 50%, #90a4ae 100%)',
                    boxShadow: 'inset 0 0 2px rgba(0,0,0,0.3)',
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-5 rounded-sm"
                  style={{
                    background: 'linear-gradient(180deg, #b0bec5 0%, #78909c 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)',
                  }}
                />
              </div>

              {/* Shaft */}
              <div
                className="absolute left-1/2 top-1/2 h-36 w-5 -translate-x-1/2 -translate-y-4 rounded-sm"
                style={{
                  background: 'linear-gradient(90deg, #546e7a 0%, #eceff1 40%, #546e7a 100%)',
                  boxShadow: '0 0 10px rgba(0,0,0,0.2)',
                }}
              >
                <div className="mx-auto my-1 h-0.5 w-full bg-[#37474f]/30" />
                <div className="mx-auto my-3 h-0.5 w-full bg-[#37474f]/30" />
                <div className="mx-auto my-5 h-0.5 w-full bg-[#37474f]/30" />
              </div>
            </div>

            {/* Viewport overlay: triad */}
            <div className="absolute bottom-4 left-4 flex flex-col items-center gap-0.5 text-[10px] font-bold text-[#5f6368]">
              <div className="text-[#d93025]">X</div>
              <div className="flex gap-3">
                <div className="text-[#1a73e8]">Y</div>
                <div className="text-[#00a651]">Z</div>
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

        {/* Right: Mate properties */}
        <div className="flex w-56 shrink-0 flex-col border-l border-[#e0e0e0] bg-white">
          <div className="flex h-7 items-center gap-1 border-b border-[#e0e0e0] bg-[#f8f9fa] px-2 text-[11px] font-medium text-[#333]">
            <Settings className="h-3.5 w-3.5" />
            Mate Properties
          </div>
          <div className="flex-1 overflow-y-auto p-2 text-xs">
            <div className="mb-2 text-[11px] font-medium text-[#1a73e8]">{selectedMate}</div>
            <div className="space-y-2">
              {MATE_PROPERTIES.map((prop) => (
                <div key={prop.label}>
                  <div className="text-[10px] text-[#5f6368]">{prop.label}</div>
                  <div className="mt-0.5 h-6 rounded border border-[#dadce0] bg-white px-2 py-1 text-[11px] text-[#333]">
                    {prop.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              <button
                onClick={() => toast.success('Mate updated')}
                className="w-full h-7 bg-[#1a73e8] rounded text-[11px] text-white font-medium hover:bg-[#1557b0]"
              >
                Update Mate
              </button>
              <button
                onClick={() => toast.info('Mate deleted')}
                className="w-full h-7 border border-[#dadce0] rounded text-[11px] text-[#d93025] hover:bg-[#fce8e6]"
              >
                Delete Mate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
