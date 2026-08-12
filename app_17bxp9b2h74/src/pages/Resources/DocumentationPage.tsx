import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  BookOpen,
  Box,
  Layers,
  FileText,
  Settings,
  Wand2,
  Database,
  ClipboardCheck,
  Code2,
  Users,
  Rocket,
  ChevronRight,
  ArrowRight,
  FileCode,
  ArrowUpRight,
} from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DOC_CATEGORIES,
  POPULAR_DOCS,
  DOC_SECTIONS,
  API_DOCS,
} from '@/data/documentation';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Box,
  Layers,
  FileText,
  Settings,
  Wand2,
  Database,
  ClipboardCheck,
  Code2,
  Users,
  Rocket,
};

export default function DocumentationPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('getting-started');

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return DOC_CATEGORIES;
    return DOC_CATEGORIES.filter(
      (c) => c.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="bg-white">
      {/* Hero / search */}
      <section className="w-full border-b border-border bg-[#f8f9f8] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#00a651]">
              RESOURCES
            </div>
            <h1 className="mb-4 text-4xl font-bold text-[#2d3436] md:text-5xl">
              Documentation
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-foreground/60">
              Comprehensive documentation for all Onshape features and functionality.
            </p>
            <div className="relative mx-auto max-w-xl">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search documentation..."
                className="h-12 bg-white pl-12 text-base shadow-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category grid */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mb-8 text-2xl font-bold text-[#2d3436] md:text-3xl">
            Browse by Category
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {filteredCategories.map((cat, i) => {
              const IconComp = ICON_MAP[cat.icon] || BookOpen;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="group cursor-pointer rounded-md border border-border bg-white p-4 transition-all hover:border-[#00a651]/40 hover:shadow-sm"
                  onClick={() => {
                    setActiveSection(
                      cat.id === 'parts' ? 'part-modeling' :
                      cat.id === 'assemblies' ? 'assemblies' :
                      cat.id === 'drawings' ? 'drawings' : 'getting-started'
                    );
                    toast.info(`Browsing: ${cat.title}`);
                  }}
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-sm bg-[#f0f7f0]">
                    <IconComp className="h-5 w-5 text-[#00a651]" />
                  </div>
                  <h3 className="mb-1 text-sm font-bold text-[#2d3436] group-hover:text-[#00a651]">{cat.title}</h3>
                  <p className="text-xs text-foreground/50">{cat.count} articles</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular docs + API entry */}
      <section className="w-full bg-[#f8f9f8] py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[2fr_1fr] md:px-6">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-[#2d3436]">
              Most Popular Documentation
            </h2>
            <div className="space-y-2">
              {POPULAR_DOCS.map((doc, i) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * i }}
                  className="group flex cursor-pointer items-center justify-between rounded-md border border-border bg-white p-4 transition-all hover:border-[#00a651]/40 hover:shadow-sm"
                  onClick={() => toast.info(`Opening: ${doc.title}`)}
                >
                  <div className="flex items-center gap-4">
                    <BookOpen className="h-5 w-5 text-[#00a651]" />
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-foreground/40">
                        {doc.category}
                      </div>
                      <h3 className="text-sm font-semibold text-[#2d3436] group-hover:text-[#00a651]">
                        {doc.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-[#00a651]" />
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="sticky top-[180px] space-y-6">
              <div className="rounded-md border border-[#00a651]/30 bg-[#00a651]/5 p-5">
                <FileCode className="mb-3 h-6 w-6 text-[#00a651]" />
                <h3 className="mb-2 text-base font-bold text-[#2d3436]">API Documentation</h3>
                <p className="mb-4 text-sm text-foreground/60">
                  Build custom integrations with the complete Onshape REST API.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-fit rounded-sm border-[#00a651] text-[#00a651] hover:bg-[#00a651] hover:text-white"
                  onClick={() => toast.info('Opening API documentation')}
                >
                  Explore API
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </div>

              <div className="rounded-md border border-border bg-white p-5">
                <h4 className="mb-3 text-sm font-bold text-[#2d3436]">API Quick Reference</h4>
                <div className="space-y-2">
                  {API_DOCS.slice(0, 4).map((api) => (
                    <div
                      key={api.id}
                      className="cursor-pointer rounded-sm border border-border/60 p-2 transition-colors hover:border-[#00a651]/40"
                      onClick={() => toast.info(`Opening API: ${api.title}`)}
                    >
                      <div className="mb-1 flex items-center gap-2">
                        <span className={`rounded-sm px-1.5 py-0.5 text-[9px] font-bold uppercase ${
                          api.method === 'GET' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {api.method}
                        </span>
                        <code className="truncate text-[10px] font-mono text-foreground/60">{api.endpoint}</code>
                      </div>
                      <p className="text-xs font-semibold text-[#2d3436]">{api.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Docs detail view - left nav + right content */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mb-8 text-2xl font-bold text-[#2d3436] md:text-3xl">
            Documentation Sections
          </h2>
          <div className="grid gap-8 md:grid-cols-[220px_1fr]">
            {/* Side nav */}
            <nav className="hidden md:block">
              <div className="sticky top-[180px] space-y-1 border-l-2 border-border">
                {DOC_SECTIONS.map((section) => {
                  const IconComp = ICON_MAP[section.icon] || BookOpen;
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`flex w-full items-center gap-2 border-l-2 py-2 pl-4 text-left text-sm transition-colors ${
                        isActive
                          ? '-ml-[2px] border-[#00a651] font-semibold text-[#00a651]'
                          : '-ml-[2px] border-transparent text-foreground/60 hover:text-[#00a651]'
                      }`}
                    >
                      <IconComp className="h-4 w-4" />
                      {section.title}
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* Content */}
            <div>
              {DOC_SECTIONS.filter((s) => s.id === activeSection).map((section) => {
                const IconComp = ICON_MAP[section.icon] || BookOpen;
                return (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#f0f7f0]">
                        <IconComp className="h-5 w-5 text-[#00a651]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#2d3436]">{section.title}</h3>
                    </div>
                    <div className="space-y-3">
                      {section.items.map((item, i) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.05 * i }}
                          className="group cursor-pointer rounded-md border border-border bg-white p-4 transition-all hover:border-[#00a651]/40 hover:shadow-sm"
                          onClick={() => toast.info(`Opening: ${item.title}`)}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="mb-1 text-sm font-semibold text-[#2d3436] group-hover:text-[#00a651]">
                                {item.title}
                              </h4>
                              <p className="text-sm text-foreground/60">{item.desc}</p>
                            </div>
                            <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-foreground/40 group-hover:text-[#00a651]" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
