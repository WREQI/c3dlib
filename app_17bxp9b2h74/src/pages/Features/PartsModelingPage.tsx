import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { MOCK_PARTS_MODELING_CONTENT } from '@/data/featurepage';
import { Image } from '@/components/ui/image';
import { motion } from 'framer-motion';
import { BookOpen, Video, Play, ExternalLink, Box, Layers, Cylinder, Hexagon, Wrench, Ruler } from 'lucide-react';

export default function PartsModelingPage() {
  const { heroTitle, heroSubtitle, heroImageUrl, tabs, defaultTab, overviewTitle, overviewDescription, screenshotUrl } =
    MOCK_PARTS_MODELING_CONTENT;
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-[#0a1628] text-white">
        {/* 3D wireframe pattern */}
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
            {/* Abstract wireframe shape */}
            <g stroke="url(#wireGrad)" strokeWidth="0.8" fill="none">
              <polygon points="200,250 300,150 500,120 650,180 600,350 350,380" />
              <polygon points="250,280 330,200 480,180 580,220 550,340 380,360" />
              <line x1="200" y1="250" x2="250" y2="280" />
              <line x1="300" y1="150" x2="330" y2="200" />
              <line x1="500" y1="120" x2="480" y2="180" />
              <line x1="650" y1="180" x2="580" y2="220" />
              <line x1="600" y1="350" x2="550" y2="340" />
              <line x1="350" y1="380" x2="380" y2="360" />
              {/* Circular elements */}
              <ellipse cx="450" cy="260" rx="120" ry="40" />
              <ellipse cx="450" cy="260" rx="80" ry="25" />
              <line x1="330" y1="260" x2="570" y2="260" />
            </g>
            {/* Dots */}
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
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#00a651]">
              PRODUCT FEATURES
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
              {tabs.map((tab) => (
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
            <TabsContent value="overview" className="mt-0 space-y-8">
              <motion.div
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
                  <Image
                    src={screenshotUrl}
                    alt="Onshape Part Studio interface"
                    className="w-full"
                  />
                </div>
                <p className="mt-3 text-center text-sm text-foreground/50">
                  Onshape Part Studio — parametric part design environment
                </p>
              </motion.div>
            </TabsContent>

            <TabsContent value="features" className="mt-0">
              <div className="space-y-10">
                <div className="text-center">
                  <h2 className="mb-3 text-3xl font-bold text-[#2d3436] md:text-4xl">
                    Key Features
                  </h2>
                  <p className="mx-auto max-w-2xl text-foreground/60">
                    Powerful parametric modeling tools designed for modern product development workflows.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { icon: Box, title: 'Solid Modeling', desc: 'Create complex 3D geometry with robust solid modeling tools including extrude, revolve, sweep, and loft features.' },
                    { icon: Layers, title: 'Surface Modeling', desc: 'Build advanced surface geometry with NURBS-based tools for complex organic shapes and industrial design.' },
                    { icon: Hexagon, title: 'Sheet Metal', desc: 'Design sheet metal parts with built-in bend calculations, K-factors, and automatic flat pattern generation.' },
                    { icon: Cylinder, title: 'Frame Design', desc: 'Create structural frames using standard steel profiles with automatic miter, butt, and trim connections.' },
                    { icon: Wrench, title: 'Parametric Features', desc: 'Drive designs with configurable parameters and equations for rapid design iterations and variants.' },
                    { icon: Ruler, title: 'Feature Script', desc: "Automate repetitive design tasks with custom features using Onshape's FeatureScript programming language." },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.05 * i }}
                      className="rounded-md border border-border bg-white p-6 transition-all hover:border-[#00a651]/40 hover:shadow-md"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-[#f0f7f0]">
                        <item.icon className="h-6 w-6 text-[#00a651]" />
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-[#2d3436]">{item.title}</h3>
                      <p className="text-sm text-foreground/60">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="explore" className="mt-0">
              <div className="space-y-10">
                <div className="text-center">
                  <h2 className="mb-3 text-3xl font-bold text-[#2d3436] md:text-4xl">
                    Explore More
                  </h2>
                  <p className="mx-auto max-w-2xl text-foreground/60">
                    Dive deeper into part design with tutorials, videos, and technical resources.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    { icon: Video, title: 'Getting Started with Part Studio', type: 'Video Tutorial', duration: '12 min', desc: 'Learn the basics of parametric part design in Onshape Part Studio.' },
                    { icon: BookOpen, title: 'Part Modeling Tech Tips', type: 'Blog Series', duration: '10 articles', desc: 'A curated collection of tips and techniques for efficient part modeling.' },
                    { icon: Play, title: 'Advanced Surfacing Techniques', type: 'Webinar', duration: '45 min', desc: 'Master complex surfacing for industrial design and consumer products.' },
                    { icon: Box, title: 'FeatureScript Fundamentals', type: 'Course', duration: '3 hours', desc: 'Write custom features to automate your design workflows in Onshape.' },
                  ].map((item, i) => (
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
                        <item.icon className="h-7 w-7 text-[#00a651]" />
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
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faq" className="mt-0">
              <div className="py-10 text-center text-foreground/50">
                FAQ content coming soon.
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
