import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Quote, Building2 } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MOCK_CASE_STUDIES, CASE_INDUSTRIES } from '@/data/casestudies';

export default function CaseStudiesPage() {
  const [industry, setIndustry] = useState('all');

  const filteredCases = useMemo(() => {
    return MOCK_CASE_STUDIES.filter(
      (c) => industry === 'all' || c.industry === industry
    );
  }, [industry]);

  const featuredCase = MOCK_CASE_STUDIES.find((c) => c.featured) || MOCK_CASE_STUDIES[0];

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
              Case Studies
            </h1>
            <p className="mx-auto max-w-2xl text-foreground/60">
              See how companies are using Onshape to transform their product development process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-[120px] z-30 w-full border-b border-border bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-foreground/60">Filter by industry:</span>
            <Select value={industry} onValueChange={setIndustry}>
              <SelectTrigger className="h-9 w-64 rounded-sm bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CASE_INDUSTRIES.map((ind) => (
                  <SelectItem key={ind.id} value={ind.id}>
                    {ind.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <span className="text-sm text-foreground/50">
            {filteredCases.length} {filteredCases.length === 1 ? 'case study' : 'case studies'}
          </span>
        </div>
      </section>

      {/* Featured case study */}
      {industry === 'all' && featuredCase && (
        <section className="w-full bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mb-6 flex items-center gap-2">
              <span className="rounded-sm bg-[#ffdd00] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#2d3436]">
                Featured
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00a651]">
                {featuredCase.tag}
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-md border border-border bg-white shadow-sm"
            >
              <div className="grid md:grid-cols-2">
                <div
                  className="flex min-h-[320px] items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2818 100%)' }}
                >
                  <div className="text-center text-white/30">
                    <Building2 className="mx-auto mb-3 h-20 w-20" strokeWidth={0.5} />
                    <p className="text-sm">{featuredCase.company}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <h2 className="mb-4 text-2xl font-bold text-[#2d3436] md:text-3xl">
                    {featuredCase.company}
                  </h2>
                  <p className="mb-6 text-foreground/60">{featuredCase.description}</p>
                  <div className="mb-6 grid grid-cols-3 gap-4 border-y border-border/60 py-4">
                    {featuredCase.stats.map((s) => (
                      <div key={s.label} className="text-center">
                        <div className="text-2xl font-bold text-[#00a651]">{s.value}</div>
                        <div className="text-xs text-foreground/50">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-start gap-3">
                    <Quote className="mt-1 h-5 w-5 shrink-0 text-[#00a651]/30" />
                    <p className="text-sm italic text-foreground/70">"{featuredCase.quote}"</p>
                  </div>
                  <p className="mt-2 text-xs text-foreground/50">— {featuredCase.authorName}, {featuredCase.authorRole}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Case grid */}
      <section className="w-full bg-white pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          {filteredCases.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-foreground/60">No case studies found for this industry.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCases.map((study, i) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="group flex flex-col overflow-hidden rounded-md border border-border bg-white transition-all hover:border-[#00a651]/40 hover:shadow-md"
                  onClick={() => toast.info(`Opening case study: ${study.company}`)}
                >
                  <div
                    className="flex h-40 items-center justify-center"
                    style={{ background: `linear-gradient(135deg, #${(i * 28 + 20).toString(16).padStart(2, '0')}3040 0%, #0d2818 100%)` }}
                  >
                    <Building2 className="h-14 w-14 text-white/20" strokeWidth={0.5} />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-2 text-xs font-bold uppercase tracking-wider text-[#00a651]">
                      {study.tag}
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-[#2d3436]">{study.company}</h3>
                    <p className="mb-4 flex-1 text-sm text-foreground/60 line-clamp-3">{study.description}</p>
                    <div className="grid grid-cols-3 gap-2 border-t border-border/60 pt-3">
                      {study.stats.slice(0, 2).map((s) => (
                        <div key={s.label}>
                          <div className="text-base font-bold text-[#00a651]">{s.value}</div>
                          <div className="text-[10px] text-foreground/50">{s.label}</div>
                        </div>
                      ))}
                    </div>
                    <div
                      className="mt-3 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        toast.info(`Opening case study: ${study.company}`);
                      }}
                    >
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#00a651] transition-all group-hover:gap-2">
                        Read Case Study
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
