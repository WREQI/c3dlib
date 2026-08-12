import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  TrendingUp,
  Mail,
} from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import {
  SPOTLIGHT_CATEGORIES,
  SPOTLIGHT_ARTICLES,
  FEATURED_SPOTLIGHT,
} from '@/data/spotlight';

export default function SpotlightPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [email, setEmail] = useState('');

  const filteredArticles = useMemo(() => {
    return SPOTLIGHT_ARTICLES.filter(
      (a) =>
        activeCategory === 'all' || a.category === activeCategory
    );
  }, [activeCategory]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    toast.success('Thanks for subscribing to the Spotlight newsletter!');
    setEmail('');
  };

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
              RESOURCES / SPOTLIGHT
            </div>
            <h1 className="mb-4 text-3xl font-bold text-[#2d3436] md:text-4xl">
              Spotlight
            </h1>
            <p className="mx-auto max-w-2xl text-base text-foreground/70">
              Deep dives into product design trends, industry surveys, and
              data-driven insights from the Onshape Research team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-border bg-white">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 bg-gradient-to-br from-[#00a651]/20 via-[#e8f7ef] to-[#d1f0df] md:h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TrendingUp className="h-24 w-24 text-[#00a651]/40" />
                  </div>
                  <span className="absolute left-4 top-4 rounded bg-[#00a651] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Featured
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded bg-[#e8f7ef] px-2 py-0.5 font-semibold uppercase text-[#00a651]">
                      {FEATURED_SPOTLIGHT.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {FEATURED_SPOTLIGHT.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {FEATURED_SPOTLIGHT.readTime}
                    </span>
                  </div>
                  <h2 className="mb-3 text-2xl font-bold text-[#2d3436] md:text-3xl">
                    {FEATURED_SPOTLIGHT.title}
                  </h2>
                  <p className="mb-5 text-sm leading-relaxed text-foreground/70">
                    {FEATURED_SPOTLIGHT.excerpt}
                  </p>
                  <div className="mb-5 flex items-center gap-2 text-xs text-muted-foreground">
                    <User className="h-3.5 w-3.5" />
                    By {FEATURED_SPOTLIGHT.author}
                  </div>
                  <Button
                    className="w-fit bg-[#00a651] text-white hover:bg-[#008f45]"
                    onClick={() => toast.success('Opening featured article...')}
                  >
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="w-full border-y border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-wrap items-center gap-2 py-4">
            {SPOTLIGHT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-[#2d3436] text-white'
                    : 'bg-muted text-foreground/70 hover:bg-accent hover:text-[#00a651]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="w-full bg-[#f8f9f8] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#2d3436] md:text-3xl">
              Latest Spotlight
            </h2>
            <p className="text-sm text-foreground/60">
              {filteredArticles.length} articles
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
              >
                <Card className="group h-full cursor-pointer overflow-hidden border-border bg-white transition-shadow hover:shadow-md">
                  <div className="relative h-40 bg-gradient-to-br from-[#e8f7ef] to-[#d1f0df]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <TrendingUp className="h-12 w-12 text-[#00a651]/30" />
                    </div>
                    <span className="absolute left-3 top-3 rounded bg-white/90 px-2 py-0.5 text-[10px] font-bold uppercase text-[#00a651]">
                      {article.category}
                    </span>
                  </div>
                  <CardContent className="space-y-3 p-5">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-[#2d3436]">
                      {article.title}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <User className="h-3 w-3" />
                        {article.author}
                      </span>
                      <span className="text-sm font-semibold text-[#00a651]">
                        Read{' '}
                        <ArrowRight className="ml-1 inline h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscribe */}
      <section className="w-full bg-[#2d3436] py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Mail className="mx-auto mb-4 h-8 w-8 text-[#00a651]" />
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">
              Get Spotlight in Your Inbox
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-white/70">
              Subscribe to our monthly Spotlight newsletter for the latest
              design trends, industry insights, and research highlights.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 flex-1 bg-white/10 text-white placeholder-white/40 border-white/20 focus:border-[#00a651]"
              />
              <Button
                type="submit"
                className="h-12 bg-[#00a651] px-6 font-bold uppercase tracking-wider text-white hover:bg-[#008f45]"
              >
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
