import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Layers,
  FileText,
  Layers3,
  Frame,
  Sliders,
  History,
  ClipboardCheck,
  Lock,
  ListChecks,
  Link,
  Building2,
  Users,
  MessageSquare,
  ShieldCheck,
  BarChart2,
  Puzzle,
  Sparkles,
  Waves,
  Target,
  Code2,
  FlaskConical,
  CircuitBoard,
  Eye,
  Spline,
  Terminal,
  Smartphone,
  Building,
  ArrowRight,
  Play,
} from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PRODUCT_OVERVIEW_DATA } from '@/data/productoverview';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Box,
  Layers,
  FileText,
  Layers3,
  Frame,
  Sliders,
  History,
  ClipboardCheck,
  Lock,
  ListChecks,
  Link,
  Building2,
  Users,
  MessageSquare,
  ShieldCheck,
  BarChart2,
  Puzzle,
  Sparkles,
  Waves,
  Target,
  Code2,
  FlaskConical,
  CircuitBoard,
  Eye,
  Spline,
  Terminal,
  Smartphone,
  Building,
};

export default function ProductOverviewPage() {
  const navigate = useNavigate();

  const sections = useMemo(() => PRODUCT_OVERVIEW_DATA, []);

  const handleCardClick = (path?: string) => {
    if (path) {
      navigate(path);
    } else {
      toast.info('This feature is coming soon!');
    }
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative w-full overflow-hidden text-white"
        style={{ backgroundColor: '#0a1628' }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <svg
            className="h-full w-full"
            viewBox="0 0 1200 500"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00a651" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#00a651" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <g stroke="url(#wireGrad)" strokeWidth="0.8" fill="none">
              <polygon points="200,250 300,150 500,120 650,180 600,350 350,380" />
              <polygon points="700,200 850,150 1000,180 1050,300 880,380 720,320" />
            </g>
          </svg>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center md:px-6 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#00a651]">
              PRODUCT
            </div>
            <h1 className="mb-5 text-4xl font-bold md:text-5xl lg:text-6xl">
              Product Overview
            </h1>
            <p className="text-base text-white/70 md:text-lg">
              Discover the full power of Onshape&apos;s cloud-native product
              development platform — from parametric design and data management
              to real-time collaboration and AI-assisted engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="mb-4 text-2xl font-bold text-[#2d3436] md:text-3xl">
              The Only Cloud-Native Product Development Platform
            </h2>
            <p className="text-base leading-relaxed text-foreground/70">
              Onshape uniquely combines powerful parametric CAD, built-in PDM,
              real-time collaboration, and enterprise-grade security in a single
              cloud-native platform. Unlike desktop CAD systems, Onshape runs
              entirely in your browser, eliminating installations, file
              management headaches, and version conflicts. Every team member
              always works with the latest version of the design, from anywhere
              in the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Sections */}
      {sections.map((section, sectionIndex) => (
        <section
          key={section.id}
          className={`w-full py-12 md:py-16 ${
            sectionIndex % 2 === 1 ? 'bg-[#f8f9f8]' : 'bg-white'
          }`}
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10 text-center"
            >
              <h2 className="mb-2 text-2xl font-bold text-[#2d3436] md:text-3xl">
                {section.title}
              </h2>
              <p className="mx-auto max-w-2xl text-foreground/60">
                {section.subtitle}
              </p>
            </motion.div>

            <div
              className={`grid gap-5 ${section.gridCols || 'md:grid-cols-2 lg:grid-cols-3'}`}
            >
              {section.cards.map((card, i) => {
                const Icon = ICON_MAP[card.icon] || Box;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                    whileHover={{ y: -4 }}
                    onClick={() => handleCardClick(card.path)}
                  >
                    <Card className="group h-full cursor-pointer border-border bg-white transition-all hover:border-[#00a651]/30 hover:shadow-md">
                      <CardContent className="space-y-3 p-5">
                        <div className="flex h-11 w-11 items-center justify-center rounded bg-[#e8f7ef]">
                          <Icon className="h-5 w-5 text-[#00a651]" />
                        </div>
                        <h3 className="text-sm font-semibold text-[#2d3436]">
                          {card.title}
                        </h3>
                        <p className="text-xs text-foreground/60">
                          {card.description}
                        </p>
                        {card.path && (
                          <div className="pt-1 text-xs font-semibold text-[#00a651]">
                            Learn more{' '}
                            <ArrowRight className="ml-1 inline h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

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
              Ready to experience the future of product development?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-white/70">
              Join millions of designers and engineers using the only
              cloud-native CAD and PDM platform.
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
