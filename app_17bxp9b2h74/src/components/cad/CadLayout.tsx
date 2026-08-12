import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'sonner';
import {
  ChevronDown,
  Plus,
  Search,
  Bell,
  List,
  LayoutGrid,
  HelpCircle,
  Lightbulb,
  User,
  Clock,
  FileText,
  Users,
  Tags,
  Globe,
  Trash2,
  Folder,
  Upload,
  CloudUpload,
  Tag,
  Headphones,
  Store,
  Moon,
  LogOut,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { CAD_NAV_ITEMS, CREATE_MENU_ITEMS, USER_MENU_ITEMS } from '@/data/cad';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Lightbulb,
  User,
  Clock,
  FileText,
  Users,
  Tags,
  Globe,
  Trash2,
  Folder,
  Upload,
  CloudUpload,
  Tag,
  Headphones,
  Store,
  Moon,
  LogOut,
};

interface CadLayoutProps {
  showSidebar?: boolean;
  currentPageTitle?: string;
}

export default function CadLayout({ showSidebar = true, currentPageTitle = 'Owned by me' }: CadLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [labelsExpanded, setLabelsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchScope, setSearchScope] = useState('owned');

  const isActive = (id: string) => {
    const p = location.pathname;
    if (id === 'explore') return p === '/cad/explore';
    if (id === 'owned') return p === '/cad/documents';
    if (id === 'recent') return p === '/cad/documents/recently-opened';
    if (id === 'created') return p === '/cad/documents/created-by-me';
    if (id === 'shared') return p === '/cad/documents/shared-with-me';
    if (id === 'public') return p === '/cad/documents/public';
    if (id === 'trash') return p === '/cad/documents/trash';
    return false;
  };

  const handleCreate = (action: string) => {
    toast.info(`Creating ${action}...`);
  };

  const handleUserAction = (action: string) => {
    if (action === 'signout') {
      navigate('/cad/signin');
      toast.success('Signed out successfully');
    } else if (action === 'account') {
      navigate('/cad/account');
    } else {
      toast.info(`Opening ${action}...`);
    }
  };

  // Sign in page has no sidebar/topbar
  if (!showSidebar) {
    return <Outlet />;
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white text-[#333]">
      {/* Sidebar */}
      <aside className="flex w-60 shrink-0 flex-col border-r border-[#e0e0e0] bg-white">
        {/* Logo */}
        <div className="flex items-center gap-2 px-3 py-3">
          <div className="flex h-6 w-6 items-center justify-center">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
              <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z" stroke="#222" strokeWidth="1.5" fill="#222" />
              <path d="M12 6L6 9.5v5L12 18l6-3.5v-5L12 6z" fill="white" />
              <path d="M12 9.5L9 11.25v1.5L12 14.5l3-1.75v-1.5L12 9.5z" fill="#222" />
            </svg>
          </div>
          <span className="text-sm font-medium text-[#333]">onshape</span>
        </div>

        {/* Create button */}
        <div className="px-3 pb-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="h-8 w-full justify-between bg-[#1a73e8] px-3 text-xs font-medium text-white hover:bg-[#1557b0]"
              >
                <span className="flex items-center gap-1.5">
                  <Plus className="h-3.5 w-3.5" />
                  Create
                </span>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-48 rounded-sm border border-[#e0e0e0] bg-white p-0 shadow-md"
            >
              {CREATE_MENU_ITEMS.map((item) => {
                const Icon = item.icon ? ICON_MAP[item.icon] : null;
                return (
                  <DropdownMenuItem
                    key={item.label}
                    onClick={() => handleCreate(item.action || '')}
                    className="flex h-8 cursor-pointer items-center gap-2 px-3 text-xs text-[#333] focus:bg-[#e8f0fe] focus:text-[#1a73e8]"
                  >
                    {Icon && <Icon className="h-3.5 w-3.5" />}
                    {item.label}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto px-1 py-1">
          {CAD_NAV_ITEMS.map((item) => {
            const Icon = ICON_MAP[item.icon] || FileText;
            const active = isActive(item.id);

            if (item.expandable) {
              return (
                <button
                  key={item.id}
                  onClick={() => setLabelsExpanded(!labelsExpanded)}
                  className={`flex h-8 w-full items-center gap-2 px-2 text-left text-xs transition-colors ${
                    active
                      ? 'bg-[#e8f0fe] text-[#1a73e8] font-medium'
                      : 'text-[#333] hover:bg-[#f1f3f4]'
                  }`}
                >
                  <ChevronDown
                    className={`h-3 w-3 transition-transform ${labelsExpanded ? 'rotate-0' : '-rotate-90'}`}
                  />
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.path) navigate(item.path);
                }}
                className={`flex h-8 w-full items-center gap-2 px-2 text-left text-xs transition-colors ${
                  active
                    ? 'bg-[#e8f0fe] text-[#1a73e8] font-medium'
                    : 'text-[#333] hover:bg-[#f1f3f4]'
                }`}
              >
                <span className="w-3" />
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Bottom info */}
        <div className="border-t border-[#e0e0e0] px-3 py-2 text-[11px] text-[#5f6368]">
          <div className="mb-1">
            <span className="font-medium">Subscription:</span>{' '}
            <span className="font-semibold text-[#1a73e8]">Student</span>
          </div>
        </div>
      </aside>

      {/* Main area */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top toolbar */}
        <header className="flex h-12 shrink-0 items-center border-b border-[#e0e0e0] bg-[#f1f3f4] px-4">
          {/* Search */}
          <div className="mx-auto flex w-full max-w-md items-center">
            <div className="flex h-8 w-full items-center overflow-hidden rounded-t border border-[#dadce0] bg-white focus-within:border-[#1a73e8]">
              <Select value={searchScope} onValueChange={setSearchScope}>
                <SelectTrigger className="h-8 w-auto border-0 border-r border-[#e0e0e0] bg-transparent pl-3 pr-2 text-xs text-[#5f6368] focus:ring-0">
                  <SelectValue placeholder="Scope" />
                </SelectTrigger>
                <SelectContent className="border border-[#e0e0e0] bg-white">
                  <SelectItem value="owned" className="text-xs">
                    Search in Owned by me
                  </SelectItem>
                  <SelectItem value="public" className="text-xs">
                    Search in Public
                  </SelectItem>
                  <SelectItem value="recent" className="text-xs">
                    Search in Recently opened
                  </SelectItem>
                </SelectContent>
              </Select>
              <Input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder=""
                className="h-8 flex-1 border-0 bg-transparent px-2 text-xs focus-visible:ring-0"
              />
              <button
                className="flex h-8 w-10 items-center justify-center border-l border-[#e0e0e0] text-[#5f6368] hover:bg-[#f8f9fa]"
                onClick={() => toast.info('Searching...')}
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right side icons */}
          <div className="ml-auto flex items-center gap-1">
            <button
              className="flex h-8 w-8 items-center justify-center rounded text-[#5f6368] hover:bg-[#e8eaed]"
              title="Notifications"
            >
              <Bell className="h-4 w-4" />
            </button>
            <button
              className="flex h-8 w-8 items-center justify-center rounded text-[#5f6368] hover:bg-[#e8eaed]"
              title="List view"
            >
              <List className="h-4 w-4" />
            </button>
            <button
              className="flex h-8 w-8 items-center justify-center rounded text-[#5f6368] hover:bg-[#e8eaed]"
              title="Grid view"
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              className="flex h-8 w-8 items-center justify-center rounded text-[#5f6368] hover:bg-[#e8eaed]"
              title="Help"
            >
              <HelpCircle className="h-4 w-4" />
            </button>

            <div className="mx-2 h-5 w-px bg-[#dadce0]" />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1.5 rounded px-1 py-0.5 hover:bg-[#e8eaed]">
                  <Avatar className="h-7 w-7 bg-[#1a73e8]">
                    <AvatarFallback className="text-xs font-medium text-white">
                      KS
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className="h-3 w-3 text-[#5f6368]" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 rounded-sm border border-[#e0e0e0] bg-white p-0 shadow-md"
              >
                {USER_MENU_ITEMS.map((item, idx) => {
                  if (item.divider) return <DropdownMenuSeparator key={idx} className="my-1 h-px bg-[#e0e0e0]" />;
                  const Icon = item.icon ? ICON_MAP[item.icon] : null;
                  return (
                    <DropdownMenuItem
                      key={item.label}
                      onClick={() => handleUserAction(item.action || '')}
                      className="flex h-8 cursor-pointer items-center gap-2 px-3 text-xs text-[#333] focus:bg-[#e8f0fe] focus:text-[#1a73e8]"
                    >
                      {Icon && <Icon className="h-3.5 w-3.5" />}
                      {item.label}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page content */}
        <main className="min-h-0 flex-1 overflow-auto bg-white">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="flex h-6 shrink-0 items-center justify-between border-t border-[#e0e0e0] bg-white px-4 text-[11px] text-[#5f6368]">
          <span>© 2013 - 2026, PTC Inc. All Rights Reserved.</span>
          <div className="flex gap-2">
            <button className="hover:text-[#1a73e8]">Terms</button>
            <span>&amp;</span>
            <button className="hover:text-[#1a73e8]">Privacy</button>
          </div>
          <span className="tabular-nums">(1.219.85821.b7a1b1ba64b4)</span>
        </footer>
      </div>
    </div>
  );
}
