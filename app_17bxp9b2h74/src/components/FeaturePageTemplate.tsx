import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Image } from '@/components/ui/image';
import { motion } from 'framer-motion';
import {
  Box,
  Layers,
  Hexagon,
  Cylinder,
  Wrench,
  Ruler,
  Video,
  BookOpen,
  Play,
  ExternalLink,
  GitBranch,
  Link as LinkIcon,
  Maximize2,
  AlertTriangle,
  List,
  FileText,
  LayoutGrid,
  Target,
  Download,
  Calculator,
  Layers as StacksIcon,
  CornerDownRight,
  Settings,
  Triangle,
  Square,
  Flame,
  Scissors,
  Library,
  Frame,
  Table,
  ListOrdered,
  ToggleLeft,
  Send,
  Wand2,
  Layers as Layers3,
  Spline,
  SquareStack,
  RefreshCw,
  Database,
  Lock,
  Search,
  Share2,
  Activity,
  Users,
  GitMerge,
  GitCompare,
  AlertCircle,
  History,
  ClipboardCheck,
  CheckSquare,
  Hash,
  Bell,
  Megaphone,
  ShieldCheck,
  ListChecks,
  Tags,
  Barcode,
  MessageSquare,
  Code2,
  ShoppingBag,
  Cog,
  KeyRound,
  Award,
  GraduationCap,
  Cpu,
  BarChart2,
  FileBarChart,
  Vibrate,
  Grid3x3,
  Eye,
  Circle,
  FileOutput,
  Image as ImageIcon,
  Palette,
  Sun,
  Mountain,
  Film,
  CircuitBoard,
  Package,
  Lightbulb,
  TrendingUp,
  FlaskConical,
  Sparkles,
  Waves,
  Sliders,
  Bug,
  Hand,
  HandMetal,
  Presentation,
  ClipboardList,
  FileCheck,
  Headphones,
  Building,
  Truck,
  Building2,
  Link as LinkIcon2,
} from 'lucide-react';
import { getFeaturePageData } from '@/data/featurepages';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Box,
  Layers,
  Cylinder,
  Wrench,
  Ruler,
  Video,
  BookOpen,
  Play,
  GitBranch,
  LinkIcon,
  Maximize2,
  AlertTriangle,
  List,
  FileText,
  LayoutGrid,
  Target,
  Download,
  Calculator,
  Stacks: StacksIcon,
  CornerDownRight,
  Settings,
  Triangle,
  Square,
  Flame,
  Scissors,
  Library,
  Frame,
  Table,
  ListOrdered,
  ToggleLeft,
  Send,
  Wand2,
  Layers3,
  Spline,
  SquareStack,
  RefreshCw,
  ExternalLink,
  Database,
  Lock,
  Search,
  Share2,
  Activity,
  Users,
  GitMerge,
  GitCompare,
  AlertCircle,
  History,
  ClipboardCheck,
  CheckSquare,
  Hash,
  Bell,
  Megaphone,
  ShieldCheck,
  ListChecks,
  Tags,
  Barcode,
  MessageSquare,
  Code2,
  ShoppingBag,
  Cog,
  KeyRound,
  Award,
  GraduationCap,
  Cpu,
  BarChart2,
  FileBarChart,
  Vibrate,
  Grid3x3,
  Eye,
  Circle,
  FileOutput,
  Image: ImageIcon,
  Palette,
  Sun,
  Mountain,
  Film,
  CircuitBoard,
  Package,
  Lightbulb,
  TrendingUp,
  FlaskConical,
  Sparkles,
  Waves,
  Sliders,
  Bug,
  Hand,
  HandMetal,
  Presentation,
  ClipboardList,
  FileCheck,
  Headphones,
  Building,
  Truck,
  Building2,
  Link: LinkIcon2,
};

const TABS = [
  { id: 'overview', label: 'OVERVIEW' },
  { id: 'features', label: 'KEY FEATURES' },
  { id: 'explore', label: 'EXPLORE MORE' },
  { id: 'faq', label: 'FAQ' },
];

const FAQ_ITEMS = [
  {
    q: 'Is Onshape available on any device?',
    a: 'Yes, Onshape runs on any device with a modern web browser including Windows, Mac, Linux, Chromebooks, iOS, and Android devices. All data is stored in the cloud and accessible from anywhere.',
  },
  {
    q: 'How does real-time collaboration work?',
    a: 'Multiple users can work in the same Onshape document simultaneously. Everyone sees each other\'s changes in real-time, similar to Google Docs but for CAD design. There are no file locks or version conflicts.',
  },
  {
    q: 'Can I import my existing CAD data into Onshape?',
    a: 'Onshape supports importing all major CAD formats including SOLIDWORKS, Inventor, Pro/E/Creo, CATIA, NX, STEP, IGES, Parasolid, ACIS, STL, and more. Imported geometry maintains its feature tree when possible.',
  },
  {
    q: 'Is my data secure in the cloud?',
    a: 'Onshape uses enterprise-grade security including AES-256 encryption, SOC 2 Type II compliance, regular third-party penetration testing, and role-based access controls to ensure your data is always protected.',
  },
];

export default function FeaturePageTemplate() {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState('overview');

  const pageData = useMemo(() => {
    if (!slug) return undefined;
    return getFeaturePageData(slug);
  }, [slug]);

  if (!pageData) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-foreground/60">Feature not found.</p>
      </div>
    );
  }

  const { heroTitle, heroSubtitle, heroBgColor, overviewTitle, overviewDescription, keyFeatures, exploreResources, slug: pageSlug, isBeta } = pageData;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative w-full overflow-hidden text-white"
        style={{ backgroundColor: heroBgColor }}
      >
        {/* Abstract wireframe pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <svg
            className="h-full w-full"
            viewBox="0 0 1200 500"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00a651" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <g stroke="url(#wireGrad)" strokeWidth="0.8" fill="none">
              <polygon points="200,250 300,150 500,120 650,180 600,350 350,380" />
              <polygon points="250,280 330,200 480,180 580,220 550,340 380,360" />
              <line x1="200" y1="250" x2="250" y2="280" />
              <line x1="300" y1="150" x2="330" y2="200" />
              <line x1="500" y1="120" x2="480" y2="180" />
              <line x1="650" y1="180" x2="580" y2="220" />
              <line x1="600" y1="350" x2="550" y2="340" />
              <line x1="350" y1="380" x2="380" y2="360" />
              <ellipse cx="450" cy="260" rx="120" ry="40" />
              <ellipse cx="450" cy="260" rx="80" ry="25" />
              <line x1="330" y1="260" x2="570" y2="260" />
            </g>
            <g fill="#00a651" fillOpacity="0.6">
              <circle cx="200" cy="250" r="3" />
              <circle cx="300" cy="150" r="3" />
              <circle cx="500" cy="120" r="3" />
              <circle cx="650" cy="180" r="3" />
              <circle cx="600" cy="350" r="3" />
              <circle cx="350" cy="380" r="3" />
            </g>
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00a651]">
                PRODUCT FEATURES
              </span>
              {isBeta && (
                <span className="rounded bg-amber-400/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-300 ring-1 ring-amber-400/40">
                  Beta
                </span>
              )}
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              {heroTitle}
            </h1>
            <p className="text-base text-white/70 md:text-lg">
              {heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab navigation bar */}
      <section className="sticky top-[120px] z-40 w-full border-b border-border bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="h-auto w-full justify-start gap-6 bg-transparent p-0">
              {TABS.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="relative rounded-none border-b-2 border-transparent px-2 py-4 text-xs font-bold uppercase tracking-wider text-foreground/60 bg-transparent hover:text-[#00a651] data-[state=active]:border-[#00a651] data-[state=active]:text-[#00a651] data-[state=active]:shadow-none"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Content */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {/* OVERVIEW */}
            <TabsContent value="overview" className="mt-0 space-y-8">
              <motion.div
                key={`${pageSlug}-overview`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="mb-6 text-3xl font-bold text-[#2d3436] md:text-4xl">
                  {overviewTitle}
                </h2>
                <div className="prose prose-lg max-w-none text-foreground/70">
                  {overviewDescription.split('\n\n').map((p, i) => (
                    <p key={i} className="mb-4 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10"
              >
                <div className="overflow-hidden border border-border shadow-lg">
                  <div
                    className="relative aspect-[16/9] w-full"
                    style={{ background: `linear-gradient(135deg, ${heroBgColor} 0%, #2a3a4c 100%)` }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mx-auto mb-3 h-20 w-20 rounded-full bg-white/10 flex items-center justify-center">
                          {(() => {
                            const FirstIcon = ICON_MAP[keyFeatures[0]?.icon] || Box;
                            return <FirstIcon className="h-10 w-10 text-white/80" />;
                          })()}
                        </div>
                        <p className="text-sm text-white/50">{heroTitle} Interface Preview</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-center text-sm text-foreground/50">
                  Onshape {heroTitle} — intuitive, powerful, and always available in the cloud
                </p>
              </motion.div>
            </TabsContent>

            {/* KEY FEATURES */}
            <TabsContent value="features" className="mt-0">
              <div className="space-y-10">
                <div className="text-center">
                  <h2 className="mb-3 text-3xl font-bold text-[#2d3436] md:text-4xl">
                    Key Features
                  </h2>
                  <p className="mx-auto max-w-2xl text-foreground/60">
                    Powerful {heroTitle.toLowerCase()} tools designed for modern product development workflows.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {keyFeatures.map((item, i) => {
                    const IconComp = ICON_MAP[item.icon] || Box;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.05 * i }}
                        className="rounded-md border border-border bg-white p-6 transition-all hover:border-[#00a651]/40 hover:shadow-md"
                      >
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-[#f0f7f0]">
                          <IconComp className="h-6 w-6 text-[#00a651]" />
                        </div>
                        <h3 className="mb-2 text-lg font-bold text-[#2d3436]">{item.title}</h3>
                        <p className="text-sm text-foreground/60">{item.desc}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>

            {/* EXPLORE MORE */}
            <TabsContent value="explore" className="mt-0">
              <div className="space-y-10">
                <div className="text-center">
                  <h2 className="mb-3 text-3xl font-bold text-[#2d3436] md:text-4xl">
                    Explore More
                  </h2>
                  <p className="mx-auto max-w-2xl text-foreground/60">
                    Dive deeper into {heroTitle.toLowerCase()} with tutorials, videos, and technical resources.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {exploreResources.map((item, i) => {
                    const IconComp = ICON_MAP[item.icon] || BookOpen;
                    return (
                      <motion.a
                        key={item.title}
                        href="#"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.05 * i }}
                        className="group flex gap-4 rounded-md border border-border bg-white p-6 transition-all hover:border-[#00a651]/40 hover:shadow-md"
                      >
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-[#f0f7f0]">
                          <IconComp className="h-7 w-7 text-[#00a651]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00a651]">
                            <span>{item.type}</span>
                            <span className="text-foreground/30">•</span>
                            <span className="text-foreground/40 normal-case font-medium">{item.duration}</span>
                          </div>
                          <h3 className="mb-1 text-base font-bold text-[#2d3436] group-hover:text-[#00a651] transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-foreground/60 line-clamp-2">{item.desc}</p>
                        </div>
                        <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-foreground/30 group-hover:text-[#00a651] transition-colors" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </TabsContent>

            {/* FAQ */}
            <TabsContent value="faq" className="mt-0">
              <div className="space-y-10">
                <div className="text-center">
                  <h2 className="mb-3 text-3xl font-bold text-[#2d3436] md:text-4xl">
                    Frequently Asked Questions
                  </h2>
                  <p className="mx-auto max-w-2xl text-foreground/60">
                    Common questions about {heroTitle.toLowerCase()} in Onshape.
                  </p>
                </div>

                <div className="mx-auto max-w-3xl space-y-4">
                  {FAQ_ITEMS.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.05 * i }}
                      className="rounded-md border border-border bg-white p-6"
                    >
                      <h3 className="mb-2 text-lg font-bold text-[#2d3436]">{item.q}</h3>
                      <p className="text-sm leading-relaxed text-foreground/60">{item.a}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
