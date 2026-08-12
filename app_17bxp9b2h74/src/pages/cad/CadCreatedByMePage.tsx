import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {
  ChevronDown,
  ChevronUp,
  FileText,
  Filter,
  Calendar,
} from 'lucide-react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { MOCK_CREATED_DOCS } from '@/data/cad';

export default function CadCreatedByMePage() {
  const navigate = useNavigate();
  const [sortCol, setSortCol] = useState('name');
  const [sortAsc, setSortAsc] = useState(true);
  const [createdFilter, setCreatedFilter] = useState('all');

  const filteredSorted = useMemo(() => {
    let items = [...MOCK_CREATED_DOCS];
    if (createdFilter !== 'all') {
      const now = Date.now();
      const day = 86400000;
      items = items.filter((d) => {
        if (createdFilter === 'today') return d.created?.includes('Today');
        if (createdFilter === 'week') return !d.created?.includes('ago') || d.created?.includes('days');
        if (createdFilter === 'month') return true;
        return true;
      });
    }
    items.sort((a, b) => {
      let cmp = 0;
      if (sortCol === 'name') cmp = a.name.localeCompare(b.name);
      else if (sortCol === 'created') cmp = (a.created || '').localeCompare(b.created || '');
      else if (sortCol === 'modified') cmp = a.modified.localeCompare(b.modified);
      return sortAsc ? cmp : -cmp;
    });
    return items;
  }, [sortCol, sortAsc, createdFilter]);

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
        <FileText className="h-4 w-4 text-[#1a73e8]" />
        <span className="text-sm font-medium text-[#333]">Created by me</span>
        <span className="text-xs text-[#5f6368]">({filteredSorted.length})</span>
      </div>

      {/* Filter bar */}
      <div className="flex items-center gap-2 border-b border-[#e0e0e0] bg-[#f8f9fa] px-4 py-2">
        <div className="flex items-center gap-1 text-[11px] text-[#5f6368]">
          <Calendar className="h-3 w-3" />
          Created:
        </div>
        <Select value={createdFilter} onValueChange={setCreatedFilter}>
          <SelectTrigger className="h-7 w-36 border-[#dadce0] bg-white text-[11px] focus:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="border-[#e0e0e0] bg-white">
            <SelectItem value="all" className="text-xs">All time</SelectItem>
            <SelectItem value="today" className="text-xs">Today</SelectItem>
            <SelectItem value="week" className="text-xs">This week</SelectItem>
            <SelectItem value="month" className="text-xs">This month</SelectItem>
          </SelectContent>
        </Select>
        <button
          onClick={() => toast.info('More filters')}
          className="ml-auto flex h-7 items-center gap-1 rounded border border-[#dadce0] bg-white px-2 text-[11px] text-[#5f6368] hover:bg-[#f1f3f4]"
        >
          <Filter className="h-3 w-3" />
          Filter
        </button>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-4 gap-2 border-b border-[#e0e0e0] bg-[#f8f9fa] px-4 py-1.5 text-[11px] font-medium text-[#5f6368]">
        <button className="flex items-center gap-1 text-left" onClick={() => handleSort('name')}>
          Name
          {sortCol === 'name' && (sortAsc ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />)}
        </button>
        <button className="border-l border-[#e0e0e0] pl-2 text-left" onClick={() => handleSort('created')}>
          Created
          {sortCol === 'created' && (sortAsc ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />)}
        </button>
        <button className="border-l border-[#e0e0e0] pl-2 text-left" onClick={() => handleSort('modified')}>
          Modified
          {sortCol === 'modified' && (sortAsc ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />)}
        </button>
        <div className="border-l border-[#e0e0e0] pl-2">Modified by</div>
      </div>

      {/* Table body */}
      <div className="flex-1 overflow-y-auto">
        {filteredSorted.length === 0 ? (
          <div className="flex h-40 flex-col items-center justify-center text-sm text-[#5f6368]">
            <FileText className="mb-2 h-8 w-8 opacity-30" />
            No documents found
          </div>
        ) : (
          filteredSorted.map((doc) => (
            <div
              key={doc.id}
              onClick={() => openDocument(doc.id)}
              className="grid cursor-pointer grid-cols-4 gap-2 border-b border-[#f1f3f4] px-4 py-1.5 text-xs hover:bg-[#e8f0fe]/40"
            >
              <div className="flex min-w-0 items-center gap-2">
                <FileText className="h-4 w-4 shrink-0 text-[#5f6368]" />
                <span className="truncate text-[#333]">{doc.name}</span>
                {doc.label && (
                  <span className="shrink-0 text-[10px] text-[#1a73e8]">{doc.label}</span>
                )}
              </div>
              <div className="truncate text-[#5f6368]">{doc.created || '-'}</div>
              <div className="truncate text-[#5f6368]">{doc.modified}</div>
              <div className="truncate text-[#5f6368]">{doc.modifiedBy}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
