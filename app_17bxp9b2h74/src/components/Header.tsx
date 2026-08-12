import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Search, ChevronDown, Globe, GraduationCap, LogIn, Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import OnshapeLogo from '@/components/OnshapeLogo';

const NAV_ITEMS = [
  { label: 'WHY ONSHAPE', path: '/why-onshape', hasDropdown: false },
  {
    label: 'PRODUCT',
    path: '/features/parts-modeling',
    hasDropdown: true,
    dropdown: [
      { label: 'Product Overview', path: '/product', isHeading: true },
      { label: 'Part Modeling', path: '/features/parts-modeling' },
      { label: 'Assembly Design', path: '/features/assemblies' },
      { label: 'Drawings', path: '/features/drawings' },
      { label: 'Sheet Metal', path: '/features/sheet-metal' },
      { label: 'Frame Design', path: '/features/frames' },
      { label: 'Configurations', path: '/features/configurations' },
      { label: 'Surfacing', path: '/features/surfacing' },
      { label: 'Data Management', path: '/features/data-management' },
      { label: 'Branching & Merging', path: '/features/branching-merging' },
      { label: 'Release Management', path: '/features/release-management' },
      { label: 'Bill of Materials', path: '/features/bill-of-materials' },
      { label: 'Collaboration', path: '/features/collaboration' },
      { label: 'Integrations', path: '/features/integrations' },
      { label: 'Security', path: '/features/security' },
      { label: 'Support', path: '/features/support' },
      { label: 'Analytics', path: '/features/analytics' },
      { label: 'Simulation', path: '/features/simulation' },
      { label: 'CAM', path: '/features/cam' },
      { label: 'Rendering', path: '/features/rendering' },
      { label: 'PCB Studio', path: '/features/pcb-studio' },
      { label: 'AI Advisor', path: '/features/ai-advisor' },
      { label: 'Onshape Labs', path: '/features/onshape-labs' },
      { label: 'Model Based Definition', path: '/features/model-based-definition' },
      { label: 'Custom Features', path: '/features/custom-features' },
      { label: 'Onshape Vision', path: '/features/onshape-vision' },
      { label: 'Onshape Government', path: '/features/onshape-government' },
      { label: 'Arena PLM Connection', path: '/features/arena-plm-connection' },
      { label: 'Windchill PLM Connection', path: '/features/windchill-plm-connection' },
    ],
  },
  { label: 'PRICING', path: '/pricing', hasDropdown: false },
  {
    label: 'RESOURCES',
    path: '#',
    hasDropdown: true,
    dropdown: [
      { label: 'Resource Center', path: '/resources/resource-center' },
      { label: 'Blog', path: '/resources/blog' },
      { label: 'Case Studies', path: '/resources/case-studies' },
      { label: 'Videos', path: '/resources/videos' },
      { label: 'Events', path: '/resources/events' },
      { label: 'Courses & Training', path: '/resources/courses-training' },
      { label: 'Tech Tips', path: '/resources/tech-tips' },
      { label: 'Documentation', path: '/resources/documentation' },
      { label: 'Spotlight', path: '/resources/spotlight' },
      { label: 'Apps & Integrations', path: '/resources/apps-integrations' },
      { label: 'Migrating CAD Data', path: '/resources/migrating-cad-data' },
    ],
  },
  {
    label: 'SOLUTIONS',
    path: '#',
    hasDropdown: true,
    dropdown: [
      { label: 'Aerospace & Defense', path: '/solutions/aerospace' },
      { label: 'Automotive', path: '/solutions/automotive' },
      { label: 'Consumer Products', path: '/solutions/consumer-products' },
      { label: 'Education', path: '/solutions/education' },
      { label: 'Electronics', path: '/solutions/electronics' },
      { label: 'Energy', path: '/solutions/energy' },
      { label: 'Government', path: '/solutions/government' },
      { label: 'Machine Design', path: '/solutions/machine-design' },
      { label: 'Medical Devices', path: '/solutions/medical-devices' },
      { label: 'Robotics', path: '/solutions/robotics' },
      { label: 'Startups', path: '/solutions/startups' },
    ],
  },
  {
    label: 'COMPANY',
    path: '#',
    hasDropdown: true,
    dropdown: [
      { label: 'About Onshape', path: '/about' },
      { label: 'Careers', path: '/careers' },
      { label: 'Contact Us', path: '/contact' },
    ],
  },
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/pricing');
  };

  const handleSignIn = () => {
    navigate('/cad/signin');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white">
      {/* Top utility bar - dark gray */}
      <div className="w-full bg-[#3c4446] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs md:px-6">
          <div className="flex items-center gap-2 text-white/60">
            <span className="hidden md:inline">
              The cloud-native product development platform
            </span>
          </div>
          <div className="flex items-center gap-5">
            <button className="flex items-center gap-1 text-white/80 transition-colors hover:text-white">
              <Globe className="h-3.5 w-3.5" />
              <span className="font-semibold">EN</span>
              <ChevronDown className="h-3 w-3" />
            </button>
            <div className="hidden items-center gap-1.5 rounded-full border border-[#7e3ff2] px-2.5 py-0.5 lg:flex">
              <Search className="h-3 w-3 text-[#b39ddb]" />
              <span className="text-[10px] font-semibold tracking-wider text-white/90">
                ASK ABOUT ONSHAPE
              </span>
            </div>
            <button className="hidden items-center gap-1 text-white/80 transition-colors hover:text-white lg:flex">
              <GraduationCap className="h-3.5 w-3.5" />
              <span className="font-semibold tracking-wide">CREATE A STUDENT ACCOUNT</span>
            </button>
            <button onClick={handleSignIn} className="flex items-center gap-1 text-white/80 transition-colors hover:text-white">
              <LogIn className="h-3.5 w-3.5" />
              <span className="hidden font-semibold tracking-wide md:inline">SIGN IN</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main nav - white */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <NavLink to="/" end className="flex items-center gap-2 text-[#2d3436]" aria-label="Onshape Home">
          <OnshapeLogo className="h-8 w-auto" />
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavLink
                to={item.path}
                end={item.path !== '#'}
                className={({ isActive }) =>
                  `flex items-center gap-1 px-3 py-2 text-xs font-bold tracking-wider transition-colors ${
                    isActive ? 'text-[#00a651]' : 'text-[#3c4446] hover:text-[#00a651]'
                  }`
                }
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-3 w-3" />}
              </NavLink>
              {item.hasDropdown && openDropdown === item.label && item.dropdown && (
                <div className="absolute left-0 top-full min-w-[220px] border border-border bg-white py-1 shadow-lg">
                  {item.dropdown.map((d) => (
                    <NavLink
                      key={d.label}
                      to={d.path}
                      onClick={() => setOpenDropdown(null)}
                      className={`flex items-center justify-between px-4 py-2 text-sm transition-colors hover:bg-[#f0f7f0] hover:text-[#00a651] ${d.isHeading ? 'font-bold text-[#00a651] border-b border-border mb-1 pb-2' : 'text-[#3c4446]'}`}
                    >
                      {d.label}
                      <ChevronRight className="h-3 w-3" />
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Mobile menu */}
        <div className="flex items-center gap-3">
          <Button
            className="hidden bg-[#00a651] text-white hover:bg-[#008f45] md:inline-flex"
            onClick={handleSignUp}
          >
            SIGN UP NOW
          </Button>

          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#2d3436] hover:bg-muted">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white text-[#2d3436]">
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="absolute right-4 top-4 hover:bg-muted">
                    <X className="h-5 w-5" />
                  </Button>
                </SheetClose>
                <nav className="mt-12 flex flex-col gap-1">
                  {NAV_ITEMS.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <NavLink
                        to={item.path === '#' ? '/' : item.path}
                        end={item.path !== '#'}
                        className={({ isActive }) =>
                          `rounded px-4 py-3 text-sm font-bold tracking-wider ${
                            isActive ? 'bg-[#f0f7f0] text-[#00a651]' : 'text-[#3c4446] hover:bg-muted'
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </SheetClose>
                  ))}
                  <div className="mt-4 border-t border-border pt-4">
                    <Button className="w-full bg-[#00a651] text-white hover:bg-[#008f45]">
                      SIGN UP NOW
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
