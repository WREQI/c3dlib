import { Play, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MOCK_WHY_ONSHAPE_CONTENT } from '@/data/whyonshape';
import { Image } from '@/components/ui/image';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';

export default function WhyOnshapePage() {
  const navigate = useNavigate();
  const { heroTitle, heroDescription, heroVideoImageUrl, trustTitle, features } = MOCK_WHY_ONSHAPE_CONTENT;
  const feature = features[0];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-[#2d3436] text-white">
        {/* Green dot pattern decoration */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <svg
            className="absolute right-0 top-0 h-full w-1/2"
            viewBox="0 0 600 500"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <radialGradient id="dotFade" cx="30%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#00a651" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#00a651" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#00a651" stopOpacity="0" />
              </radialGradient>
              <pattern
                id="dotGrid"
                patternUnits="userSpaceOnUse"
                width="16"
                height="16"
              >
                <circle cx="2" cy="2" r="1.5" fill="url(#dotFade)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotGrid)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                {heroTitle}
              </h1>
              <p className="max-w-lg text-base text-white/80 md:text-lg">
                {heroDescription}
              </p>
              <Button
                className="bg-[#00a651] text-white hover:bg-[#008f45]"
                onClick={() => (navigate('/pricing'))}
              >
                START FOR FREE
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="relative aspect-video w-full overflow-hidden shadow-2xl">
                <Image
                  src={heroVideoImageUrl}
                  alt="Welding and robotic arm"
                  className="h-full w-full object-cover"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="group flex h-20 w-28 items-center justify-center bg-[#00a651]/90 transition-all duration-300 hover:bg-[#00a651] hover:scale-105">
                    <Play className="h-10 w-10 text-white" fill="white" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust + Features */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-16 max-w-4xl text-center text-3xl font-bold text-[#2d3436] md:text-4xl"
          >
            {trustTitle}
          </motion.h2>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: devices image + cloud icon */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                <Image
                  src={feature.imageUrl}
                  alt="Onshape running on multiple devices"
                  className="w-full"
                />
              </div>
              {/* Floating cloud icon */}
              <div className="absolute -top-4 -right-4 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
                <Cloud className="h-10 w-10 text-[#00a651]" strokeWidth={1.5} />
              </div>
            </motion.div>

            {/* Right: text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <h3 className="text-2xl font-bold text-[#2d3436] md:text-3xl">
                {feature.title}
              </h3>
              <p className="text-base leading-relaxed text-foreground/70">
                {feature.description}
              </p>
              <UniversalLink
                to={feature.linkUrl}
                className="inline-flex items-center gap-1 pt-2 text-sm font-bold uppercase tracking-wider text-[#00a651] transition-all hover:gap-2"
              >
                {feature.linkText}
              </UniversalLink>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
