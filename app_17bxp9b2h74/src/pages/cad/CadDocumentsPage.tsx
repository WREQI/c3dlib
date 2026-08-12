import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Clock,
  Folder,
  FileText,
  User,
  ArrowRight,
  Lightbulb,
  BookOpen,
  MessageCircle,
  HelpCircle,
  Info,
  Plus,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MOCK_MY_DOCUMENTS, MOCK_RECENT_DOCS } from '@/data/cad';

export default function CadDocumentsPage() {
  const navigate = useNavigate();
  const [welcomeOpen, setWelcomeOpen] = useState(true);
  const [recentOpen, setRecentOpen] = useState(true);
  const [foldersOpen, setFoldersOpen] = useState(false);

  const openDocument = (id: string) => {
    navigate(`/cad/document/${id}`);
  };

  return (
    <div className="flex min-h-full flex-col bg-white">
      {/* Page title bar */}
      <div className="flex h-10 items-center gap-2 border-b border-[#e0e0e0] bg-white px-4">
        <User className="h-4 w-4 text-[#1a73e8]" />
        <span className="text-sm font-medium text-[#333]">Owned by me</span>
        <button
          onClick={() => toast.info('Info panel')}
          className="ml-auto text-[#5f6368] hover:text-[#1a73e8]"
          title="Information"
        >
          <Info className="h-4 w-4" />
        </button>
      </div>

      {/* Welcome section */}
      <div className="border-b border-[#e0e0e0] bg-[#f0f4f9]">
        <button
          className="flex w-full items-center gap-1 px-4 py-1.5 text-left text-xs font-medium text-[#333] hover:bg-[#e8eff7]"
          onClick={() => setWelcomeOpen(!welcomeOpen)}
        >
          {welcomeOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
          Getting started with Onshape
        </button>

        {welcomeOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="px-8 pb-6 pt-2"
          >
            <div className="flex items-start justify-between">
              {/* Left: Welcome */}
              <div className="pt-4 text-center">
                <h2 className="text-xl font-medium text-[#333]">Welcome to Onshape</h2>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-3 h-8 rounded-sm border-[#dadce0] px-4 text-xs font-normal text-[#333] hover:bg-[#e8f0fe] hover:text-[#1a73e8]"
                  onClick={() => toast.info('Upgrading...')}
                >
                  <Sparkles className="mr-1.5 h-3 w-3" />
                  Upgrade now
                </Button>
              </div>

              {/* Middle: Explore Onshape card */}
              <button
                onClick={() => toast.info('Opening Explore Onshape...')}
                className="group flex w-96 items-center gap-4 rounded-lg border border-[#e0e0e0] bg-white p-4 text-left shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex h-20 w-24 shrink-0 items-center justify-center rounded-md bg-[#f0f4f9]">
                  <svg viewBox="0 0 80 60" className="h-16 w-auto">
                    {/* Drill body */}
                    <rect x="20" y="15" width="40" height="20" rx="3" fill="#4a8f4a" />
                    <rect x="25" y="12" width="30" height="6" rx="1" fill="#3a7a3a" />
                    {/* Drill handle */}
                    <rect x="38" y="33" width="8" height="18" rx="2" fill="#555" />
                    {/* Drill chuck */}
                    <polygon points="58,18 72,22 72,28 58,32" fill="#888" />
                    {/* Drill bit */}
                    <rect x="72" y="23" width="6" height="4" fill="#aaa" />
                    <polygon points="78,23 82,25 78,27" fill="#ccc" />
                    {/* Trigger */}
                    <path d="M40 40 Q42 46 44 45 L44 48 Q40 50 38 46 Z" fill="#333" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="mb-1 text-sm font-medium text-[#1a73e8] group-hover:underline">
                    Explore Onshape
                  </div>
                  <div className="text-xs text-[#5f6368]">
                    Dive into and interact with sample models, videos, or a guided walkthrough.
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-[#1a73e8]" />
              </button>

              {/* Right: 3 link cards */}
              <div className="space-y-2">
                {[
                  { icon: BookOpen, label: 'Learning Center' },
                  { icon: MessageCircle, label: 'Forum' },
                  { icon: HelpCircle, label: 'Help Documentation' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      onClick={() => toast.info(`Opening ${item.label}...`)}
                      className="flex w-64 items-center justify-between rounded-md border border-[#e0e0e0] bg-white px-3 py-2 text-left text-xs font-medium text-[#333] hover:border-[#1a73e8] hover:text-[#1a73e8]"
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="h-3.5 w-3.5" />
                        {item.label}
                      </span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Last opened */}
      <div className="border-b border-[#e0e0e0] bg-white">
        <button
          className="flex w-full items-center gap-1 px-4 py-1.5 text-left text-xs font-medium text-[#333] hover:bg-[#f8f9fa]"
          onClick={() => setRecentOpen(!recentOpen)}
        >
          {recentOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
          <Clock className="h-3 w-3" />
          Last opened by me
        </button>

        {recentOpen && (
          <div className="flex gap-3 px-8 pb-4 pt-2">
            {MOCK_RECENT_DOCS.map((doc) => (
              <motion.button
                key={doc.id}
                whileHover={{ y: -1 }}
                onClick={() => openDocument(doc.id)}
                className="group flex w-52 items-center gap-3 rounded-md border border-[#e0e0e0] bg-white p-2 text-left hover:border-[#1a73e8]/60 hover:bg-[#f8faff]"
              >
                <div className="flex h-12 w-14 shrink-0 items-center justify-center rounded border border-[#e8eaed] bg-[#f8f9fa]">
                  <FileText className="h-6 w-6 text-[#5f6368]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-xs font-medium text-[#333] group-hover:text-[#1a73e8]">
                    {doc.name}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Folders */}
      <div className="border-b border-[#e0e0e0] bg-white">
        <button
          className="flex w-full items-center gap-1 px-4 py-1.5 text-left text-xs font-medium text-[#333] hover:bg-[#f8f9fa]"
          onClick={() => setFoldersOpen(!foldersOpen)}
        >
          {foldersOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
          <Folder className="h-3 w-3" />
          Folders
        </button>
      </div>

      {/* Document list */}
      <div className="flex-1 bg-white">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-7 rounded-sm border-[#dadce0] px-2 text-[11px] font-normal text-[#333] hover:bg-[#e8f0fe] hover:text-[#1a73e8]"
            >
              Type
              <ChevronDown className="ml-1 h-3 w-3" />
            </Button>
          </div>
          <button
            onClick={() => toast.info('Add item')}
            className="flex items-center gap-1 text-xs font-medium text-[#1a73e8] hover:underline"
          >
            <Plus className="h-3.5 w-3.5" />
            Add
          </button>
        </div>

        {/* Table header */}
        <div className="grid grid-cols-4 gap-2 border-t border-b border-[#e0e0e0] bg-[#f8f9fa] px-4 py-1.5 text-[11px] font-medium text-[#5f6368]">
          <div className="flex items-center gap-1">
            Name
            <ChevronUp className="h-3 w-3" />
          </div>
          <div className="border-l border-[#e0e0e0] pl-2">Modified</div>
          <div className="border-l border-[#e0e0e0] pl-2">Modified by</div>
          <div className="border-l border-[#e0e0e0] pl-2">Owned by</div>
        </div>

        {/* Table rows */}
        <div>
          {MOCK_MY_DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              onClick={() => openDocument(doc.id)}
              className="grid cursor-pointer grid-cols-4 gap-2 border-b border-[#f1f3f4] px-4 py-1.5 text-xs hover:bg-[#e8f0fe]/40"
            >
              <div className="flex min-w-0 items-center gap-2">
                {doc.isFolder ? (
                  <Folder className="h-4 w-4 shrink-0 text-[#5f6368]" />
                ) : (
                  <FileText className="h-4 w-4 shrink-0 text-[#5f6368]" />
                )}
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
              <div className="truncate text-[#5f6368]">{doc.modifiedBy}</div>
              <div className="truncate text-[#5f6368]">{doc.ownedBy}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
