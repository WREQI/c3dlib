import { Cpu, Rocket } from 'lucide-react';
import { MOCK_HOME_CONTENT } from '@/data/homecontent';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function FeatureIcon({ icon }: { icon: string }) {
  if (icon === 'chip') {
    return (
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#00a651]/10 text-[#00a651]">
        <Cpu className="h-7 w-7" strokeWidth={1.5} />
      </div>
    );
  }
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#00a651]/10 text-[#00a651]">
      <Rocket className="h-7 w-7" strokeWidth={1.5} />
    </div>
  );
}

export default function FeatureCardsSection() {
  const { featureCards } = MOCK_HOME_CONTENT;

  return (
    <section id="feature-cards" className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {featureCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <Link
                to={card.linkUrl}
                className="group flex h-full gap-5 rounded-lg border border-border/60 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8"
              >
              <FeatureIcon icon={card.icon} />
              <div className="space-y-2">
                <h3 className="text-base font-bold uppercase tracking-wide text-[#2d3436]">
                  {card.title}
                </h3>
                <p className="text-sm text-foreground/60">
                  {card.description}
                </p>
                <span className="inline-flex items-center gap-1 pt-2 text-sm font-semibold text-[#00a651] transition-all group-hover:gap-2">
                  {card.linkText}
                </span>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
