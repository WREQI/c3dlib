import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import {
  ChevronDown,
  ChevronUp,
  Clock,
  List,
  LayoutGrid,
  FileText,
} from 'lucide-react';
import { MOCK_RECENT_DOCS } from '@/data/cad';

export default function CadRecentlyOpenedPage() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const timeGroups = ['Today', 'Yesterday', 'Last Week'];

  const getGroupDocs = (group: string) =>
    MOCK_RECENT_DOCS.filter((d) => d.timeGroup === group);

  const openDocument = (id: string) => {
    navigate(`/cad/document/${id}`);
  };

  const hashColor = (name: string) => {
    const hash = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const hue = hash % 360;
    return `hsl(${hue} 45% 55%)`;
  };

  return (
    <div className="flex min-h-full flex-col bg-white">
      {/* Page title bar */}
      <div className="flex h-10 items-center gap-2 border-b border-[#e0e0e0] bg-white px-4">
        <Clock className="h-4 w-4 text-[#1a73e8]" />
        <span className="text-sm font-medium text-[#333]">Recently opened</span>
        <div className="ml-auto flex items-center gap-1">
          <button
            onClick={() => setViewMode('list')}
            className={`flex h-7 w-7 items-center justify-center rounded ${
              viewMode === 'list' ? 'bg-[#e8f0fe] text-[#1a73e8]' : 'text-[#5f6368] hover:bg-[#f1f3f4]'
            }`}
            title="List view"
          >
            <List className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`flex h-7 w-7 items-center justify-center rounded ${
              viewMode === 'grid' ? 'bg-[#e8f0fe] text-[#1a73e8]' : 'text-[#5f6368] hover:bg-[#f1f3f4]'
            }`}
            title="Grid view"
          >
            <LayoutGrid className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {timeGroups.map((group) => {
          const docs = getGroupDocs(group);
          if (docs.length === 0) return null;

          return (
            <div key={group} className="border-b border-[#e0e0e0]">
              <div className="flex h-8 items-center gap-2 bg-[#f8f9fa] px-4">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-[#5f6368]">
                  {group}
                </span>
                <span className="text-[11px] text-[#5f6368]">({docs.length})</span>
              </div>

              {viewMode === 'list' ? (
                <div>
                  <div className="grid grid-cols-3 gap-2 border-b border-[#f1f3f4] bg-[#f8f9fa]/60 px-6 py-1.5 text-[10px] font-medium text-[#5f6368]">
                    <div>Name</div>
                    <div>Opened</div>
                    <div>Owned by</div>
                  </div>
                  {docs.map((doc) => (
                    <div
                      key={doc.id}
                      onClick={() => openDocument(doc.id)}
                      className="grid cursor-pointer grid-cols-3 gap-2 border-b border-[#f1f3f4] px-6 py-1.5 text-xs hover:bg-[#e8f0fe]/40"
                    >
                      <div className="flex min-w-0 items-center gap-2">
                        <div
                          className="flex h-5 w-6 shrink-0 items-center justify-center rounded-sm"
                          style={{ backgroundColor: hashColor(doc.name) }}
                        >
                          <FileText className="h-3 w-3 text-white/90" />
                        </div>
                        <span className="truncate text-[#333]">{doc.name}</span>
                        {doc.label && (
                          <span className="shrink-0 text-[10px] text-[#1a73e8]">
                            {doc.label}
                          </span>
                        )}
                      </div>
                      <div className="truncate text-[#5f6368]">{doc.modified}</div>
                      <div className="truncate text-[#5f6368]">{doc.ownedBy}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {docs.map((doc) => (
                    <motion.button
                      key={doc.id}
                      whileHover={{ y: -2 }}
                      onClick={() => openDocument(doc.id)}
                      className="group flex flex-col overflow-hidden rounded-md border border-[#e0e0e0] bg-white text-left shadow-sm transition-all hover:border-[#1a73e8]/60 hover:shadow-md"
                    >
                      <div
                        className="flex h-28 items-center justify-center"
                        style={{ backgroundColor: hashColor(doc.name) + '33' }}
                      >
                        <div
                          className="flex h-14 w-16 items-center justify-center rounded-sm"
                          style={{ backgroundColor: hashColor(doc.name) }}
                        >
                          <FileText className="h-8 w-8 text-white/90" />
                        </div>
                      </div>
                      <div className="p-2">
                        <div className="truncate text-xs font-medium text-[#333] group-hover:text-[#1a73e8]">
                          {doc.name}
                        </div>
                        <div className="mt-0.5 truncate text-[10px] text-[#5f6368]">
                          {doc.ownedBy} • {doc.modified}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
