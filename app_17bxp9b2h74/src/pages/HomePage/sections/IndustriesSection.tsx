import { MOCK_HOME_CONTENT } from '@/data/homecontent';
import { MOCK_INDUSTRIES } from '@/data/industries';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function IndustriesSection() {
  const { industriesTitle } = MOCK_HOME_CONTENT;

  return (
    <section id="industries" className="relative w-full overflow-hidden bg-white py-16 md:py-24">
      {/* Right honeycomb decoration */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-30">
        <svg viewBox="0 0 600 600" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern
              id="honeycombRight"
              patternUnits="userSpaceOnUse"
              width="50"
              height="57.7"
            >
              <polygon
                points="25,0 50,14.4 50,43.3 25,57.7 0,43.3 0,14.4"
                fill="none"
                stroke="#00a651"
                strokeOpacity="0.3"
                strokeWidth="1"
              />
            </pattern>
            <linearGradient id="honeyFade" x1="100%" y1="50%" x2="0%" y2="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor="white" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#honeycombRight)" />
          <rect width="100%" height="100%" fill="url(#honeyFade)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold leading-tight text-[#2d3436] md:text-4xl lg:text-5xl">
              {industriesTitle}
            </h2>
          </motion.div>

          {/* Right: industry buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-2 md:items-end"
          >
            {MOCK_INDUSTRIES.map((industry, i) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ x: -4, transition: { duration: 0.2 } }}
              >
                <Link
                  to="/features/assemblies"
                  className="block w-full max-w-xs border-2 border-[#00a651] bg-transparent px-6 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-[#00a651] transition-all hover:bg-[#00a651] hover:text-white md:w-auto md:min-w-[240px]"
                >
                  {industry.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
