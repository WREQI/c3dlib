import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Cog,
  ArrowRight,
  Code2,
  Puzzle,
  Layers,
  Zap,
  ExternalLink,
} from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  APP_CATEGORIES,
  APP_INTEGRATIONS,
  FEATURED_APPS,
} from '@/data/appsintegrations';

export default function AppsIntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredApps = useMemo(() => {
    return APP_INTEGRATIONS.filter((app) => {
      const matchesCategory =
        activeCategory === 'all' || app.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

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
              RESOURCES / APP STORE
            </div>
            <h1 className="mb-4 text-3xl font-bold text-[#2d3436] md:text-4xl">
              Apps &amp; Integrations
            </h1>
            <p className="mx-auto max-w-2xl text-base text-foreground/70">
              Extend Onshape capabilities with hundreds of apps and integrations
              from our marketplace — CAM, simulation, rendering, PLM, and more.
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
                placeholder="Search apps and integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 bg-white pl-9 pr-4 text-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Apps */}
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
                Featured Apps
              </h2>
              <p className="mb-8 text-foreground/60">
                The most popular and powerful integrations in the Onshape App
                Store.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {FEATURED_APPS.map((app, i) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="group h-full cursor-pointer border-2 border-[#00a651]/20 bg-white transition-shadow hover:shadow-md">
                    <div className="relative flex h-24 items-center justify-center bg-gradient-to-br from-[#e8f7ef] to-[#d1f0df]">
                      <Puzzle className="h-10 w-10 text-[#00a651]/60" />
                      <span className="absolute right-2 top-2 rounded bg-[#00a651] px-1.5 py-0.5 text-[9px] font-bold uppercase text-white">
                        Featured
                      </span>
                    </div>
                    <CardContent className="space-y-2 p-4">
                      <div className="flex items-center justify-between">
                        <span className="rounded bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase">
                          {app.type}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-[#2d3436]">
                        {app.name}
                      </h3>
                      <p className="text-xs text-foreground/60">
                        {app.description}
                      </p>
                      <div className="pt-2 text-xs font-semibold text-[#00a651]">
                        Install App{' '}
                        <ArrowRight className="ml-1 inline h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="w-full border-y border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-wrap items-center gap-2 py-4">
            {APP_CATEGORIES.map((cat) => (
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

      {/* All Apps Grid */}
      <section className="w-full bg-[#f8f9f8] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#2d3436] md:text-3xl">
                {activeCategory === 'all'
                  ? 'All Apps & Integrations'
                  : APP_CATEGORIES.find((c) => c.id === activeCategory)?.label}
              </h2>
              <p className="text-sm text-foreground/60">
                {filteredApps.length} apps available
              </p>
            </div>
          </div>

          {filteredApps.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-foreground/60">No apps found.</p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredApps.map((app, i) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  whileHover={{ y: -3 }}
                >
                  <Card className="group h-full cursor-pointer border-border bg-white transition-shadow hover:shadow-sm">
                    <CardContent className="space-y-3 p-5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-[#e8f7ef]">
                          <Cog className="h-5 w-5 text-[#00a651]" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="mb-1 flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#00a651]">
                              {app.type}
                            </span>
                          </div>
                          <h3 className="text-sm font-semibold text-[#2d3436]">
                            {app.name}
                          </h3>
                          <p className="mt-1 text-xs text-foreground/60">
                            {app.description}
                          </p>
                        </div>
                      </div>
                      <div className="pt-1 text-xs font-semibold text-[#00a651]">
                        View Details{' '}
                        <ArrowRight className="ml-1 inline h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* API Docs */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden border-border bg-gradient-to-r from-[#f0faf4] to-[#e8f7ef]">
              <CardContent className="flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center">
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-[#00a651]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#00a651]">
                      Developer API
                    </span>
                  </div>
                  <h2 className="mb-2 text-xl font-bold text-[#2d3436] md:text-2xl">
                    Build Your Own Integrations
                  </h2>
                  <p className="text-sm text-foreground/70">
                    Onshape provides a comprehensive REST API and SDKs to build
                    custom integrations, automate workflows, and connect with
                    your internal systems.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button
                    className="bg-[#00a651] text-white hover:bg-[#008f45]"
                    onClick={() => toast.success('Opening API documentation...')}
                  >
                    API Docs <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#00a651] text-[#00a651] hover:bg-[#e8f7ef]"
                    onClick={() => toast.success('Opening developer portal...')}
                  >
                    Developer Portal
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Feature Row */}
      <section className="w-full bg-[#2d3436] py-16 text-white md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Layers,
                title: '200+ Apps Available',
                desc: 'Browse hundreds of third-party applications across every category.',
              },
              {
                icon: Zap,
                title: 'One-Click Install',
                desc: 'Install apps with a single click — no downloads or configuration required.',
              },
              {
                icon: Code2,
                title: 'Open Platform',
                desc: 'Build custom integrations using our fully-documented REST API.',
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00a651]/20">
                    <Icon className="h-6 w-6 text-[#00a651]" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/60">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
