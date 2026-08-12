import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Clock, Eye, Star, TrendingUp, ArrowRight, Search, Lightbulb } from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { MOCK_TECH_TIPS, TECH_TIP_CATEGORIES } from '@/data/techtips';

export default function TechTipsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTips = useMemo(() => {
    return MOCK_TECH_TIPS.filter((tip) => {
      const matchesCategory = activeCategory === 'all' || tip.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        tip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tip.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const popularTips = [...MOCK_TECH_TIPS]
    .sort((a, b) => {
      const av = parseFloat(a.views || '0');
      const bv = parseFloat(b.views || '0');
      return bv - av;
    })
    .slice(0, 5);

  const featuredTip = MOCK_TECH_TIPS.find((t) => t.featured) || MOCK_TECH_TIPS[0];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="w-full border-b border-border bg-[#f8f9f8] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#00a651]">
              RESOURCES
            </div>
            <h1 className="mb-4 text-4xl font-bold text-[#2d3436] md:text-5xl">
              Tech Tips
            </h1>
            <p className="mx-auto max-w-2xl text-foreground/60">
              Short, focused tips to help you get the most out of Onshape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + search */}
      <section className="sticky top-[120px] z-30 w-full border-b border-border bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-3 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="flex flex-wrap gap-2">
            {TECH_TIP_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-sm px-3 py-1 text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-[#00a651] text-white'
                    : 'bg-transparent text-foreground/60 hover:text-[#00a651]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tips..."
              className="h-9 bg-white pl-9 text-sm"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          {/* Tips grid */}
          <section>
            {activeCategory === 'all' && !searchQuery && featuredTip && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-10 cursor-pointer overflow-hidden rounded-md border border-[#00a651]/30 bg-[#f0f7f0]/40 shadow-sm"
                onClick={() => toast.info(`Reading: ${featuredTip.title}`)}
              >
                <div className="p-6 md:p-8">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-sm bg-[#ffdd00] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#2d3436]">
                      Featured Tip
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#00a651]">
                      {TECH_TIP_CATEGORIES.find((c) => c.id === featuredTip.category)?.label}
                    </span>
                  </div>
                  <h2 className="mb-3 text-xl font-bold text-[#2d3436] md:text-2xl">
                    {featuredTip.title}
                  </h2>
                  <p className="mb-4 text-sm text-foreground/60">{featuredTip.description}</p>
                  <div className="flex items-center gap-4 text-xs text-foreground/50">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {featuredTip.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" /> {featuredTip.views} views
                    </span>
                    <span>By {featuredTip.author}</span>
                  </div>
                </div>
              </motion.div>
            )}

            {filteredTips.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-foreground/60">No tech tips found matching your search.</p>
              </div>
            ) : (
              <div className="grid gap-5 md:grid-cols-2">
                {filteredTips.map((tip, i) => (
                  <motion.article
                    key={tip.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * i }}
                    className="group flex cursor-pointer flex-col rounded-md border border-border bg-white p-5 transition-all hover:border-[#00a651]/40 hover:shadow-sm"
                    onClick={() => toast.info(`Reading: ${tip.title}`)}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#00a651]">
                        {TECH_TIP_CATEGORIES.find((c) => c.id === tip.category)?.label}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-foreground/40">
                        <Clock className="h-3 w-3" /> {tip.readTime}
                      </span>
                    </div>
                    <h3 className="mb-2 text-base font-bold text-[#2d3436] group-hover:text-[#00a651]">
                      {tip.title}
                    </h3>
                    <p className="mb-3 flex-1 text-sm text-foreground/60 line-clamp-2">{tip.description}</p>
                    <div className="flex items-center justify-between text-xs text-foreground/50">
                      <span>{tip.author}</span>
                      <span className="inline-flex items-center gap-1 text-[#00a651] group-hover:gap-1.5">
                        Read <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </section>

          {/* Sidebar: popular */}
          <aside className="hidden lg:block">
            <div className="sticky top-[180px]">
              <div className="mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-[#00a651]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#2d3436]">
                  Most Popular
                </h3>
              </div>
              <div className="space-y-3">
                {popularTips.map((tip, i) => (
                  <div
                    key={tip.id}
                    className="group flex cursor-pointer items-start gap-3 rounded-sm p-2 transition-colors hover:bg-[#f0f7f0]"
                    onClick={() => toast.info(`Reading: ${tip.title}`)}
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-[#00a651]/10 text-xs font-bold text-[#00a651]">
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-semibold text-[#2d3436] group-hover:text-[#00a651] line-clamp-2">
                        {tip.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-foreground/50">
                        {tip.views} views · {tip.readTime}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-md border border-[#00a651]/20 bg-[#f0f7f0]/50 p-5">
                <Lightbulb className="mb-3 h-6 w-6 text-[#00a651]" />
                <h4 className="mb-2 text-sm font-bold text-[#2d3436]">New tips every week</h4>
                <p className="mb-3 text-xs text-foreground/60">
                  Subscribe to get the latest Onshape tips and techniques delivered to your inbox.
                </p>
                <button
                  className="w-full rounded-sm bg-[#00a651] py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#008f46]"
                  onClick={() => toast.success('Subscribed to Tech Tips newsletter')}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
