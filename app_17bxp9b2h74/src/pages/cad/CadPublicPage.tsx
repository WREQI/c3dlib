import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {
  ChevronDown,
  ChevronUp,
  Globe,
  Plus,
  FileText,
  Copy,
  Link,
  ThumbsUp,
} from 'lucide-react';
import { MOCK_PUBLIC_DOCUMENTS } from '@/data/cad';

// Simple colored thumbnail for different document types
function DocThumbnail({ name }: { name: string }) {
  const hash = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const hue = hash % 360;
  const isDark = hash % 2 === 0;

  return (
    <div
      className="flex h-6 w-8 shrink-0 items-center justify-center rounded-sm text-[9px] font-bold text-white"
      style={{
        background: `linear-gradient(135deg, hsl(${hue} 50% ${isDark ? 35 : 55}%), hsl(${(hue + 30) % 360} 50% ${isDark ? 25 : 45}%))`,
      }}
    >
      <FileText className="h-3 w-3 opacity-90" />
    </div>
  );
}

export default function CadPublicPage() {
  const navigate = useNavigate();
  const [sortCol, setSortCol] = useState('name');
  const [sortAsc, setSortAsc] = useState(true);

  const openDocument = (id: string) => {
    navigate(`/cad/document/${id}`);
  };

  const handleSort = (col: string) => {
    if (sortCol === col) {
      setSortAsc(!sortAsc);
    } else {
      setSortCol(col);
      setSortAsc(true);
    }
  };

  return (
    <div className="flex min-h-full flex-col bg-white">
      {/* Page title bar */}
      <div className="flex h-10 items-center gap-2 border-b border-[#e0e0e0] bg-white px-4">
        <Globe className="h-4 w-4 text-[#1a73e8]" />
        <span className="text-sm font-medium text-[#333]">Public</span>
        <button
          onClick={() => toast.info('Info panel')}
          className="ml-auto text-[#5f6368] hover:text-[#1a73e8]"
          title="Information"
        >
          <span className="sr-only">Info</span>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </button>
      </div>

      {/* Add button */}
      <div className="flex items-center justify-between border-b border-[#e0e0e0] bg-white px-4 py-2">
        <div />
        <button
          onClick={() => toast.info('Add to my documents')}
          className="flex items-center gap-1 text-xs font-medium text-[#1a73e8] hover:underline"
        >
          <Plus className="h-3.5 w-3.5" />
          Add
        </button>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-6 gap-2 border-b border-[#e0e0e0] bg-[#f8f9fa] px-4 py-1.5 text-[11px] font-medium text-[#5f6368]">
        <button
          className="flex items-center gap-1 text-left"
          onClick={() => handleSort('name')}
        >
          Name
          {sortCol === 'name' && (sortAsc ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />)}
        </button>
        <button
          className="border-l border-[#e0e0e0] pl-2 text-left"
          onClick={() => handleSort('modified')}
        >
          Modified
          {sortCol === 'modified' && (sortAsc ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />)}
        </button>
        <div className="border-l border-[#e0e0e0] pl-2">Owned by</div>
        <div className="border-l border-[#e0e0e0] pl-2 text-center">Copies</div>
        <div className="border-l border-[#e0e0e0] pl-2 text-center">Links</div>
        <div className="border-l border-[#e0e0e0] pl-2 text-center">Likes</div>
      </div>

      {/* Table body */}
      <div className="flex-1 overflow-y-auto">
        {MOCK_PUBLIC_DOCUMENTS.map((doc) => (
          <div
            key={doc.id}
            onClick={() => openDocument(doc.id)}
            className="grid cursor-pointer grid-cols-6 gap-2 border-b border-[#f1f3f4] px-4 py-1 text-xs hover:bg-[#e8f0fe]/40"
          >
            <div className="flex min-w-0 items-center gap-2">
              <DocThumbnail name={doc.name} />
              <span className="truncate text-[#333]">{doc.name}</span>
              {doc.label && (
                <span className="flex shrink-0 items-center gap-0.5 text-[10px] text-[#1a73e8]">
                  <svg viewBox="0 0 14 14" className="h-3 w-3">
                    <path d="M7 1l1.5 2.5 2.8.4-2 2 .5 2.8L7 7.3 4.2 8.7l.5-2.8-2-2 2.8-.4z" fill="#1a73e8" />
                  </svg>
                  {doc.label}
                </span>
              )}
            </div>
            <div className="truncate text-[#5f6368]">{doc.modified}</div>
            <div className="truncate text-[#5f6368]">{doc.ownedBy}</div>
            <div className="text-center text-[#5f6368]">
              <span className="inline-flex items-center gap-1">
                <Copy className="h-3 w-3 opacity-60" />
                {doc.copies ?? 0}
              </span>
            </div>
            <div className="text-center text-[#5f6368]">
              <span className="inline-flex items-center gap-1">
                <Link className="h-3 w-3 opacity-60" />
                {doc.links ?? 0}
              </span>
            </div>
            <div className="text-center text-[#5f6368]">
              <span className="inline-flex items-center gap-1">
                <ThumbsUp className="h-3 w-3 opacity-60" />
                {doc.likes ?? 0}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
