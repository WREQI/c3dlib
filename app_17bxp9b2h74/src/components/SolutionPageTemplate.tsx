import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Network,
  Zap,
  Lock,
  Users,
  GitBranch,
  Share2,
  Factory,
  BarChart3,
  Clock,
  RefreshCw,
  Layers,
  GitCompare,
  Copy,
  ArrowRight,
  Quote,
  Building2,
  HardDrive,
  Globe,
  GraduationCap,
  Cloud,
  BookOpen,
  PlugZap,
  CircuitBoard,
  Cpu,
  ShieldAlert,
  KeyRound,
  Award,
  Cog,
  List,
  HeartPulse,
  FileSearch,
  Bot,
  Puzzle,
  FlaskConical,
  TrendingUp,
  Wallet,
  Rocket,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getSolutionPageData } from '@/data/solutions';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Network,
  Zap,
  Lock,
  Users,
  GitBranch,
  Share2,
  Factory,
  BarChart3,
  Clock,
  RefreshCw,
  Layers,
  GitCompare,
  Copy,
  Building2,
  HardDrive,
  Globe,
  GraduationCap,
  Cloud,
  BookOpen,
  PlugZap,
  CircuitBoard,
  Cpu,
  ShieldAlert,
  KeyRound,
  Award,
  Cog,
  List,
  HeartPulse,
  FileSearch,
  Bot,
  Puzzle,
  FlaskConical,
  TrendingUp,
  Wallet,
  Rocket,
};

export default function SolutionPageTemplate() {
  const { slug } = useParams<{ slug: string }>();
  const pageData = slug ? getSolutionPageData(slug) : undefined;

  if (!pageData) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-foreground/60">Solution page not found.</p>
      </div>
    );
  }

  const {
    heroTitle,
    heroSubtitle,
    heroBgColor,
    heroAccentColor,
    challengesTitle,
    challenges,
    howOnshapeTitle,
    howOnshapeFeatures,
    customersTitle,
    customers,
    ctaTitle,
    ctaSubtitle,
    ctaButtonText,
  } = pageData;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative w-full overflow-hidden text-white"
        style={{ backgroundColor: heroBgColor }}
      >
        {/* Abstract grid / tech pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <svg className="h-full w-full" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="solGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke={heroAccentColor} strokeOpacity="0.2" strokeWidth="0.8" />
              </pattern>
              <linearGradient id="solGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={heroAccentColor} stopOpacity="0.5" />
                <stop offset="100%" stopColor={heroAccentColor} stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#solGrid)" />
            <circle cx="900" cy="150" r="200" fill="url(#solGrad)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: heroAccentColor }}>
                INDUSTRY SOLUTIONS
              </div>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                {heroTitle}
              </h1>
              <p className="text-base text-white/70 md:text-lg">
                {heroSubtitle}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative mx-auto aspect-square w-full max-w-md">
                <div
                  className="absolute inset-0 rounded-full opacity-40 blur-3xl"
                  style={{ backgroundColor: heroAccentColor }}
                />
                <div className="relative flex h-full w-full items-center justify-center">
                  <Building2 className="h-40 w-40 text-white/20" strokeWidth={0.5} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-[#2d3436] md:text-4xl">
              {challengesTitle}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {challenges.map((item, i) => {
              const IconComp = ICON_MAP[item.icon] || ShieldCheck;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="group rounded-md border border-border bg-white p-8 transition-all hover:border-[#00a651]/40 hover:shadow-md"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-sm bg-[#f0f7f0]">
                    <IconComp className="h-7 w-7 text-[#00a651]" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#2d3436]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/60">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Onshape Helps */}
      <section className="w-full bg-[#f8faf8] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#00a651]">
              SOLUTIONS
            </div>
            <h2 className="mb-3 text-3xl font-bold text-[#2d3436] md:text-4xl">
              {howOnshapeTitle}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {howOnshapeFeatures.map((item, i) => {
              const IconComp = ICON_MAP[item.icon] || Zap;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.08 * i }}
                  className="flex gap-5 rounded-md border border-border bg-white p-6 transition-all hover:border-[#00a651]/40 hover:shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-[#f0f7f0]">
                    <IconComp className="h-6 w-6 text-[#00a651]" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-[#2d3436]">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-foreground/60">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer cases */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-[#2d3436] md:text-4xl">
              {customersTitle}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {customers.map((customer, i) => (
              <motion.div
                key={customer.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="flex flex-col rounded-md border border-border bg-white p-6 transition-all hover:border-[#00a651]/40 hover:shadow-md"
              >
                <div className="mb-4">
                  <div className="mb-2 text-xs font-bold uppercase tracking-wider text-[#00a651]">
                    {customer.industry}
                  </div>
                  <h3 className="text-xl font-bold text-[#2d3436]">{customer.company}</h3>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-foreground/60">{customer.desc}</p>
                <div className="mt-auto border-t border-border/60 pt-4">
                  <Quote className="mb-2 h-5 w-5 text-[#00a651]/30" />
                  <p className="text-sm italic text-foreground/70">"{customer.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full overflow-hidden bg-[#00a651] py-16 text-white md:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <svg viewBox="0 0 800 400" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="ctaHoney" width="40" height="46.2" patternUnits="userSpaceOnUse">
                <polygon points="20,0 40,11.5 40,34.7 20,46.2 0,34.7 0,11.5" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ctaHoney)" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">{ctaTitle}</h2>
            <p className="mx-auto mb-6 max-w-2xl text-white/90">{ctaSubtitle}</p>
            <Button
              size="lg"
              className="rounded-sm bg-white text-[#00a651] hover:bg-white/90 hover:text-[#00a651]"
            >
              {ctaButtonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
