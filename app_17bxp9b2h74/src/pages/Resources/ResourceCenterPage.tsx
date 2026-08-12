import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  BookOpen,
  Video,
  FileText,
  Star,
  Clock,
  ArrowRight,
  Play,
} from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  RESOURCE_CATEGORIES,
  RESOURCE_ITEMS,
  FEATURED_RESOURCES,
} from '@/data/resourcecenter';

const TYPE_LABEL: Record<string, string> = {
  tutorial: 'Tutorial',
  webinar: 'Webinar',
  whitepaper: 'Whitepaper',
  'case-study': 'Case Study',
  'tech-tip': 'Tech Tip',
  guide: 'Guide',
};

const TYPE_ICON: Record<string, React.ComponentType<{ className?: string }>> = {
  tutorial: BookOpen,
  webinar: Video,
  whitepaper: FileText,
  'case-study': Star,
  'tech-tip': BookOpen,
  guide: FileText,
};

export default function ResourceCenterPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return RESOURCE_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-white">
      {/* Hero */}
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
            <h1 className="mb-4 text-3xl font-bold text-[#2d3436] md:text-4xl">
              Resource Center
            </h1>
            <p className="mx-auto max-w-2xl text-base text-foreground/70">
              Your one-stop shop for all things Onshape — tutorials, guides,
              webinars, whitepapers, and more.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mt-8 max-w-xl"
          >
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search resources, tutorials, webinars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 bg-white pl-9 pr-4 text-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="w-full border-b border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-wrap items-center gap-2 py-4">
            {RESOURCE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-[#00a651] text-white'
                    : 'bg-muted text-foreground/70 hover:bg-accent hover:text-[#00a651]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      {activeCategory === 'all' && !searchQuery && (
        <section className="w-full bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-2 text-2xl font-bold text-[#2d3436] md:text-3xl">
                Featured Resources
              </h2>
              <p className="mb-8 text-foreground/60">
                Hand-picked content to help you get the most out of Onshape.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {FEATURED_RESOURCES.map((item, i) => {
                const Icon = TYPE_ICON[item.type] || FileText;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    whileHover={{ y: -4 }}
                  >
                    <Card className="group h-full cursor-pointer overflow-hidden border-border bg-white transition-shadow hover:shadow-md">
                      <div className="flex h-32 items-center justify-center bg-gradient-to-br from-[#e8f7ef] to-[#d1f0df]">
                        <Icon className="h-12 w-12 text-[#00a651]/70" />
                      </div>
                      <CardContent className="space-y-3 p-6">
                        <div className="flex items-center justify-between">
                          <span className="rounded bg-[#e8f7ef] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#00a651]">
                            {TYPE_LABEL[item.type]}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {item.duration}
                          </span>
                        </div>
                        <h3 className="text-base font-semibold text-[#2d3436]">
                          {item.title}
                        </h3>
                        <p className="text-sm text-foreground/60">
                          {item.description}
                        </p>
                        <div className="pt-2 text-sm font-semibold text-[#00a651]">
                          View Resource{' '}
                          <ArrowRight className="ml-1 inline h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Resources Grid */}
      <section className="w-full bg-[#f8f9f8] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#2d3436] md:text-3xl">
                {activeCategory === 'all'
                  ? 'All Resources'
                  : RESOURCE_CATEGORIES.find((c) => c.id === activeCategory)
                      ?.label}
              </h2>
              <p className="text-sm text-foreground/60">
                {filteredItems.length} resources found
              </p>
            </div>
          </div>

          {filteredItems.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-foreground/60">No resources found.</p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item, i) => {
                const Icon = TYPE_ICON[item.type] || FileText;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    whileHover={{ y: -3 }}
                  >
                    <Card className="group h-full cursor-pointer border-border bg-white transition-shadow hover:shadow-sm">
                      <CardContent className="space-y-3 p-5">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#e8f7ef]">
                            <Icon className="h-5 w-5 text-[#00a651]" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="mb-1 flex items-center gap-2">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#00a651]">
                                {TYPE_LABEL[item.type]}
                              </span>
                              <span className="text-[11px] text-muted-foreground">
                                {item.duration}
                              </span>
                            </div>
                            <h3 className="text-sm font-semibold text-[#2d3436]">
                              {item.title}
                            </h3>
                            <p className="mt-1 text-xs text-foreground/60">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <div className="pt-1 text-xs font-semibold text-[#00a651]">
                          Learn more{' '}
                          <ArrowRight className="ml-1 inline h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#2d3436] py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Ready to get started with Onshape?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-white/70">
              Join millions of designers and engineers using the only
              cloud-native product development platform.
            </p>
            <Button
              className="h-12 bg-[#00a651] px-8 font-bold uppercase tracking-wider text-white hover:bg-[#008f45]"
              onClick={() => toast.success('Redirecting to signup...')}
            >
              Sign Up Free <Play className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
