import { CheckCircle2, GitBranch, ShieldCheck, Layers, FileClock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MOCK_HOME_CONTENT } from '@/data/homecontent';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const iconMap: Record<string, React.ElementType> = {
  check: CheckCircle2,
  flow: GitBranch,
  'cloud-lock': ShieldCheck,
  windows: Layers,
  'clock-doc': FileClock,
};

export default function SolidworksSection() {
  const navigate = useNavigate();
  const { solidworksTitle, solidworksSubtitle, solidworksFeatures, solidworksCtaText } = MOCK_HOME_CONTENT;

  return (
    <section id="solidworks-switch" className="relative w-full overflow-hidden bg-white py-16 md:py-24">
      {/* Left decorative lines */}
      <div className="pointer-events-none absolute -left-20 top-0 h-full w-40">
        <svg viewBox="0 0 160 800" className="h-full w-full" preserveAspectRatio="none">
          <line x1="20" y1="0" x2="120" y2="800" stroke="#00a651" strokeWidth="2" strokeOpacity="0.6" />
          <line x1="40" y1="0" x2="140" y2="800" stroke="#00a651" strokeWidth="2" strokeOpacity="0.5" />
          <line x1="60" y1="0" x2="160" y2="800" stroke="#f7d046" strokeWidth="2" strokeOpacity="0.5" />
          <line x1="0" y1="100" x2="80" y2="800" stroke="#7e3ff2" strokeWidth="2" strokeOpacity="0.4" />
          <line x1="-10" y1="200" x2="60" y2="800" stroke="#3b82f6" strokeWidth="2" strokeOpacity="0.4" />
        </svg>
      </div>

      {/* Right decorative lines */}
      <div className="pointer-events-none absolute -right-20 top-0 h-full w-40">
        <svg viewBox="0 0 160 800" className="h-full w-full" preserveAspectRatio="none">
          <line x1="140" y1="0" x2="40" y2="800" stroke="#00a651" strokeWidth="2" strokeOpacity="0.6" />
          <line x1="120" y1="0" x2="20" y2="800" stroke="#00a651" strokeWidth="2" strokeOpacity="0.5" />
          <line x1="100" y1="0" x2="0" y2="800" stroke="#f7d046" strokeWidth="2" strokeOpacity="0.5" />
          <line x1="160" y1="100" x2="80" y2="800" stroke="#7e3ff2" strokeWidth="2" strokeOpacity="0.4" />
          <line x1="170" y1="200" x2="100" y2="800" stroke="#3b82f6" strokeWidth="2" strokeOpacity="0.4" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <h2 className="mb-4 text-3xl font-bold leading-tight text-[#2d3436] md:text-4xl">
            {solidworksTitle}
          </h2>
          <p className="text-base text-foreground/60 md:text-lg">
            {solidworksSubtitle}
          </p>
        </motion.div>

        {/* Feature grid - 3 cols top, 2 cols bottom centered */}
        <div className="mb-10 grid gap-8 md:grid-cols-3">
          {solidworksFeatures.slice(0, 3).map((feature, i) => {
            const Icon = iconMap[feature.icon] || CheckCircle2;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="mb-4 text-[#00a651]">
                  <Icon className="h-12 w-12" strokeWidth={1.2} />
                </div>
                <h3 className="mb-2 text-base font-bold uppercase tracking-wide text-[#2d3436]">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground/60">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Second row - 2 centered */}
        <div className="mb-12 grid gap-8 md:grid-cols-2 md:gap-16">
          {solidworksFeatures.slice(3, 5).map((feature, i) => {
            const Icon = iconMap[feature.icon] || CheckCircle2;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 3) * 0.1 }}
                className="mx-auto flex max-w-md flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="mb-4 text-[#00a651]">
                  <Icon className="h-12 w-12" strokeWidth={1.2} />
                </div>
                <h3 className="mb-2 text-base font-bold uppercase tracking-wide text-[#2d3436]">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground/60">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-[#a8c5e0] bg-[#d4e4f0] text-[#2d3436] hover:bg-[#bcd4e8] hover:text-[#2d3436]"
            onClick={() => navigate('/why-onshape')}
          >
            {solidworksCtaText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
