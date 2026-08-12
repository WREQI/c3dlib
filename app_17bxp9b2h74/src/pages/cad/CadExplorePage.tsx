import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import {
  Lightbulb,
  Play,
  BookOpen,
  Users,
  Search,
  Box,
  FileText,
  ChevronRight,
  Star,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui/tabs';
import { EXPLORE_CATEGORIES, EXPLORE_MODELS, EXPLORE_TUTORIALS, EXPLORE_GUIDES } from '@/data/cad';

export default function CadExplorePage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredModels = EXPLORE_MODELS.filter((m) => {
    const matchCat = activeCategory === 'all' || m.category === activeCategory;
    const matchSearch = m.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  const openModel = (id: string) => {
    toast.info('Opening model...');
    navigate(`/cad/document/${id}`);
  };

  const hashColor = (name: string) => {
    const hash = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const hue = hash % 360;
    return `hsl(${hue} 50% 60%)`;
  };

  return (
    <div className="flex min-h-full flex-col bg-white">
      {/* Page title */}
      <div className="flex h-10 items-center gap-2 border-b border-[#e0e0e0] bg-white px-4">
        <Lightbulb className="h-4 w-4 text-[#1a73e8]" />
        <span className="text-sm font-medium text-[#333]">Explore Onshape</span>
      </div>

      {/* Hero banner */}
      <div className="border-b border-[#e0e0e0] bg-gradient-to-r from-[#1a73e8] to-[#0d47a1] px-6 py-6 text-white">
        <h1 className="text-xl font-semibold">Discover, Learn, and Get Inspired</h1>
        <p className="mt-1 text-sm text-white/80">
          Explore sample models, tutorials, and community projects to accelerate your design process.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <div className="relative w-80">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#9aa0a6]" />
            <Input
              placeholder="Search models, tutorials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-8 border-0 bg-white pl-8 text-xs text-[#333] placeholder:text-[#9aa0a6] focus-visible:ring-0"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        {/* Featured Models */}
        <section className="mb-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-[#333]">Featured Models</h2>
            <button
              onClick={() => toast.info('Browse all models')}
              className="flex items-center gap-1 text-[11px] font-medium text-[#1a73e8] hover:underline"
            >
              See all <ChevronRight className="h-3 w-3" />
            </button>
          </div>

          <Tabs defaultValue="all" onValueChange={setActiveCategory}>
            <TabsList className="mb-4 h-7 bg-[#f1f3f4] p-0.5">
              <TabsTrigger
                value="all"
                className="h-6 px-3 text-[11px] data-[state=active]:bg-white data-[state=active]:text-[#1a73e8] data-[state=active]:shadow-sm"
              >
                All
              </TabsTrigger>
              {EXPLORE_CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="h-6 px-3 text-[11px] data-[state=active]:bg-white data-[state=active]:text-[#1a73e8] data-[state=active]:shadow-sm"
                >
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory} className="mt-0">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {filteredModels.map((model, i) => (
                  <motion.button
                    key={model.id}
                    whileHover={{ y: -3 }}
                    onClick={() => openModel(model.id)}
                    transition={{ duration: 0.2 }}
                    className="group flex flex-col overflow-hidden rounded-md border border-[#e0e0e0] bg-white text-left shadow-sm transition-all hover:border-[#1a73e8]/60 hover:shadow-md"
                  >
                    <div
                      className="flex h-32 items-center justify-center"
                      style={{ backgroundColor: hashColor(model.title) + '30' }}
                    >
                      <div
                        className="flex h-16 w-20 items-center justify-center rounded-sm"
                        style={{ backgroundColor: hashColor(model.title) }}
                      >
                        <Box className="h-10 w-10 text-white/90" />
                      </div>
                    </div>
                    <div className="p-2.5">
                      <div className="truncate text-xs font-medium text-[#333] group-hover:text-[#1a73e8]">
                        {model.title}
                      </div>
                      <div className="mt-0.5 flex items-center justify-between text-[10px] text-[#5f6368]">
                        <span>{model.author}</span>
                        <div className="flex items-center gap-0.5">
                          <Star className="h-2.5 w-2.5 fill-[#fbbc04] text-[#fbbc04]" />
                          {model.copies}
                        </div>
                      </div>
                      <div className="mt-1.5 flex items-center gap-1">
                        <span className="rounded-full bg-[#e8f0fe] px-1.5 py-0.5 text-[9px] font-medium text-[#1a73e8]">
                          {EXPLORE_CATEGORIES.find(c => c.id === model.category)?.name || model.category}
                        </span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Tutorials + Getting Started */}
        <section className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Tutorial Videos */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-[#333]">
                <Play className="h-4 w-4 text-[#1a73e8]" />
                Tutorial Videos
              </h2>
              <button
                onClick={() => toast.info('All tutorials')}
                className="flex items-center gap-1 text-[11px] font-medium text-[#1a73e8] hover:underline"
              >
                See all <ChevronRight className="h-3 w-3" />
              </button>
            </div>
            <div className="space-y-2">
              {EXPLORE_TUTORIALS.map((video, i) => (
                <div
                  key={video.id}
                  onClick={() => toast.info(`Playing: ${video.title}`)}
                  className="flex cursor-pointer gap-3 rounded-md border border-[#e0e0e0] bg-white p-2.5 hover:border-[#1a73e8]/60 hover:shadow-sm"
                >
                  <div
                    className="flex h-16 w-28 shrink-0 items-center justify-center rounded relative"
                    style={{ backgroundColor: hashColor(video.title) + '30' }}
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white">
                      <Play className="ml-0.5 h-4 w-4" />
                    </div>
                    <span className="absolute bottom-1 right-1 rounded bg-black/70 px-1 text-[9px] text-white">
                      {video.duration}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="line-clamp-2 text-xs font-medium text-[#333]">
                      {video.title}
                    </div>
                    <div className="mt-1 text-[10px] text-[#5f6368]">{video.level}</div>
                    <div className="mt-0.5 text-[10px] text-[#9aa0a6]">
                      Tutorial video
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Getting Started Guides */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-[#333]">
                <BookOpen className="h-4 w-4 text-[#1a73e8]" />
                Getting Started Guides
              </h2>
              <button
                onClick={() => toast.info('All guides')}
                className="flex items-center gap-1 text-[11px] font-medium text-[#1a73e8] hover:underline"
              >
                See all <ChevronRight className="h-3 w-3" />
              </button>
            </div>
            <div className="space-y-2">
              {EXPLORE_GUIDES.map((guide, i) => (
                <div
                  key={guide.id}
                  onClick={() => toast.info(`Opening guide: ${guide.title}`)}
                  className="flex cursor-pointer items-center gap-3 rounded-md border border-[#e0e0e0] bg-white p-3 hover:border-[#1a73e8]/60 hover:shadow-sm"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md"
                    style={{ backgroundColor: `hsl(${200 + i * 40} 60% 90%)`, color: `hsl(${200 + i * 40} 70% 40%)` }}
                  >
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-medium text-[#333]">{guide.title}</div>
                    <div className="mt-0.5 text-[10px] text-[#5f6368]">{guide.desc}</div>
                  </div>
                  <ChevronRight className="h-4 w-4 shrink-0 text-[#9aa0a6]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Spotlight */}
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-[#333]">
              <Users className="h-4 w-4 text-[#1a73e8]" />
              Community Spotlight
            </h2>
            <button
              onClick={() => toast.info('View community')}
              className="flex items-center gap-1 text-[11px] font-medium text-[#1a73e8] hover:underline"
            >
              Join the community <ExternalLink className="h-3 w-3" />
            </button>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {[
              {
                title: 'Design Challenge: Sustainable Products',
                desc: '200+ participants. Submit your eco-friendly design by March 31.',
                tag: 'Challenge',
              },
              {
                title: 'Weekly Live Q&A with Onshape Experts',
                desc: 'Every Thursday at 2pm ET. Get your questions answered live.',
                tag: 'Event',
              },
              {
                title: 'Share Your Work with the Community',
                desc: 'Publish public documents and showcase your design skills.',
                tag: 'Showcase',
              },
            ].map((item, i) => (
              <div
                key={i}
                onClick={() => toast.info(`Opening: ${item.title}`)}
                className="cursor-pointer rounded-md border border-[#e0e0e0] bg-white p-4 hover:border-[#1a73e8]/60 hover:shadow-sm"
              >
                <span className="mb-2 inline-block rounded-full bg-[#e8f0fe] px-2 py-0.5 text-[10px] font-medium text-[#1a73e8]">
                  {item.tag}
                </span>
                <div className="text-xs font-semibold text-[#333]">{item.title}</div>
                <div className="mt-1 text-[11px] text-[#5f6368]">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
