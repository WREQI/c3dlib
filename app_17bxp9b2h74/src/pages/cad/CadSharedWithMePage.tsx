import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {
  Users,
  FileText,
  Eye,
  Edit3,
  Crown,
  ChevronDown,
  ChevronUp,
  Filter,
} from 'lucide-react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MOCK_SHARED_DOCS } from '@/data/cad';

const permissionIcon: Record<string, typeof Eye> = {
  'Read only': Eye,
  'Can edit': Edit3,
  Admin: Crown,
};

const permissionColor: Record<string, string> = {
  'Read only': 'text-[#5f6368]',
  'Can edit': 'text-[#1a73e8]',
  Admin: 'text-[#e37400]',
};

export default function CadSharedWithMePage() {
  const navigate = useNavigate();
  const [sharedByFilter, setSharedByFilter] = useState('all');
  const [sortCol, setSortCol] = useState('name');
  const [sortAsc, setSortAsc] = useState(true);

  const uniqueSharers = useMemo(() => {
    const set = new Set(MOCK_SHARED_DOCS.map((d) => d.sharedBy));
    return Array.from(set);
  }, []);

  const filteredSorted = useMemo(() => {
    let items = [...MOCK_SHARED_DOCS];
    if (sharedByFilter !== 'all') {
      items = items.filter((d) => d.sharedBy === sharedByFilter);
    }
    items.sort((a, b) => {
      let cmp = 0;
      if (sortCol === 'name') cmp = a.name.localeCompare(b.name);
      else if (sortCol === 'sharedBy') cmp = a.sharedBy.localeCompare(b.sharedBy);
      else if (sortCol === 'permission') cmp = a.permission.localeCompare(b.permission);
      else if (sortCol === 'modified') cmp = a.modified.localeCompare(b.modified);
      return sortAsc ? cmp : -cmp;
    });
    return items;
  }, [sharedByFilter, sortCol, sortAsc]);

  const handleSort = (col: string) => {
    if (sortCol === col) setSortAsc(!sortAsc);
    else {
      setSortCol(col);
      setSortAsc(true);
    }
  };

  const openDocument = (id: string) => {
    navigate(`/cad/document/${id}`);
  };

  return (
    <div className="flex min-h-full flex-col bg-white">
      {/* Title bar */}
      <div className="flex h-10 items-center gap-2 border-b border-[#e0e0e0] bg-white px-4">
        <Users className="h-4 w-4 text-[#1a73e8]" />
        <span className="text-sm font-medium text-[#333]">Shared with me</span>
        <span className="text-xs text-[#5f6368]">({filteredSorted.length})</span>
      </div>

      {/* Filter bar */}
      <div className="flex items-center gap-2 border-b border-[#e0e0e0] bg-[#f8f9fa] px-4 py-2">
        <span className="text-[11px] text-[#5f6368]">Shared by:</span>
        <Select value={sharedByFilter} onValueChange={setSharedByFilter}>
          <SelectTrigger className="h-7 w-48 border-[#dadce0] bg-white text-[11px] focus:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="border-[#e0e0e0] bg-white">
            <SelectItem value="all" className="text-xs">All sharers</SelectItem>
            {uniqueSharers.map((s) => (
              <SelectItem key={s} value={s} className="text-xs">{s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <button
          onClick={() => toast.info('Advanced filters')}
          className="ml-auto flex h-7 items-center gap-1 rounded border border-[#dadce0] bg-white px-2 text-[11px] text-[#5f6368] hover:bg-[#f1f3f4]"
        >
          <Filter className="h-3 w-3" />
          More filters
        </button>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-5 gap-2 border-b border-[#e0e0e0] bg-[#f8f9fa] px-4 py-1.5 text-[11px] font-medium text-[#5f6368]">
        <button className="flex items-center gap-1 text-left" onClick={() => handleSort('name')}>
          Name
          {sortCol === 'name' && (sortAsc ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />)}
        </button>
        <button className="border-l border-[#e0e0e0] pl-2 text-left" onClick={() => handleSort('sharedBy')}>
          Shared by
          {sortCol === 'sharedBy' && (sortAsc ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />)}
        </button>
        <button className="border-l border-[#e0e0e0] pl-2 text-left" onClick={() => handleSort('permission')}>
          Permission
          {sortCol === 'permission' && (sortAsc ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />)}
        </button>
        <button className="border-l border-[#e0e0e0] pl-2 text-left" onClick={() => handleSort('modified')}>
          Modified
          {sortCol === 'modified' && (sortAsc ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />)}
        </button>
        <div className="border-l border-[#e0e0e0] pl-2">Owned by</div>
      </div>

      {/* Table body */}
      <div className="flex-1 overflow-y-auto">
        {filteredSorted.length === 0 ? (
          <div className="flex h-40 flex-col items-center justify-center text-sm text-[#5f6368]">
            <Users className="mb-2 h-8 w-8 opacity-30" />
            No shared documents
          </div>
        ) : (
          filteredSorted.map((doc) => {
            const PermIcon = permissionIcon[doc.permission] || Eye;
            return (
              <div
                key={doc.id}
                onClick={() => openDocument(doc.id)}
                className="grid cursor-pointer grid-cols-5 gap-2 border-b border-[#f1f3f4] px-4 py-1.5 text-xs hover:bg-[#e8f0fe]/40"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <FileText className="h-4 w-4 shrink-0 text-[#5f6368]" />
                  <span className="truncate text-[#333]">{doc.name}</span>
                  {doc.label && (
                    <span className="shrink-0 text-[10px] text-[#1a73e8]">{doc.label}</span>
                  )}
                </div>
                <div className="truncate text-[#5f6368]">{doc.sharedBy}</div>
                <div className={`flex items-center gap-1 ${permissionColor[doc.permission]}`}>
                  <PermIcon className="h-3 w-3" />
                  <span className="truncate">{doc.permission}</span>
                </div>
                <div className="truncate text-[#5f6368]">{doc.modified}</div>
                <div className="truncate text-[#5f6368]">{doc.ownedBy}</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
