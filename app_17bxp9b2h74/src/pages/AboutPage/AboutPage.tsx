import { motion } from 'framer-motion';
import {
  Target,
  Rocket,
  Users,
  Award,
  Briefcase,
  ArrowRight,
  Building,
  Heart,
  TrendingUp,
} from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { avatarImages } from '@lark-apaas/client-toolkit-lite';
import { Image } from '@/components/ui/image';

const TEAM_MEMBERS = [
  {
    name: 'Jon Hirschtick',
    role: 'Founder & Executive Chairman',
    avatar: avatarImages.avatarImg1,
  },
  {
    name: 'Dave McClure',
    role: 'Chief Executive Officer',
    avatar: avatarImages.avatarImg2,
  },
  {
    name: 'John McEleney',
    role: 'Co-Founder & Chief Strategy Officer',
    avatar: avatarImages.avatarImg3,
  },
  {
    name: 'Danny Weiss',
    role: 'Chief Technology Officer',
    avatar: avatarImages.avatarImg4,
  },
  {
    name: 'Sarah Reed',
    role: 'Chief Financial Officer',
    avatar: avatarImages.avatarImg5,
  },
  {
    name: 'Mike Boucher',
    role: 'Chief Revenue Officer',
    avatar: avatarImages.avatarImg6,
  },
  {
    name: 'Lisa Smith',
    role: 'VP of Engineering',
    avatar: avatarImages.avatarImg7,
  },
  {
    name: 'David Taylor',
    role: 'VP of Product',
    avatar: avatarImages.avatarImg8,
  },
];

const MILESTONES = [
  {
    year: '2012',
    title: 'Company Founded',
    description:
      'Onshape is founded by SOLIDWORKS veterans with a vision for cloud-native CAD.',
  },
  {
    year: '2015',
    title: 'Public Beta',
    description:
      'Onshape launches its public beta, introducing the first full-cloud CAD platform.',
  },
  {
    year: '2016',
    title: 'V1.0 Release',
    description:
      'Onshape 1.0 officially launches with full parametric modeling and built-in PDM.',
  },
  {
    year: '2018',
    title: 'FeatureScript Launch',
    description:
      'FeatureScript is released, enabling users to build custom parametric features.',
  },
  {
    year: '2021',
    title: 'Enterprise Growth',
    description:
      'Onshape is acquired by PTC, expanding enterprise reach and resources.',
  },
  {
    year: '2023',
    title: 'AI Innovation',
    description:
      'Onshape AI Advisor launches, bringing AI assistance to CAD workflows.',
  },
  {
    year: '2024',
    title: 'Onshape Vision',
    description:
      'Onshape Vision for Apple Vision Pro brings AR to product design reviews.',
  },
  {
    year: '2025',
    title: 'Global Leader',
    description:
      'Onshape serves millions of users worldwide across every major industry.',
  },
];

const INVESTORS = [
  { name: 'PTC', type: 'Strategic Investor' },
  { name: 'Andreessen Horowitz', type: 'Venture Capital' },
  { name: 'North Bridge', type: 'Venture Capital' },
  { name: 'Commonwealth Capital', type: 'Venture Capital' },
  { name: 'Intel Capital', type: 'Corporate VC' },
];

const VALUES = [
  {
    icon: Target,
    title: 'Innovation First',
    description:
      'We push the boundaries of what is possible with cloud technology and never settle for the status quo.',
  },
  {
    icon: Users,
    title: 'Customer Obsession',
    description:
      'Everything we do starts with our users. Their success drives every product decision we make.',
  },
  {
    icon: Award,
    title: 'Engineering Excellence',
    description:
      'We hire the best engineers and give them the tools and autonomy to do their best work.',
  },
  {
    icon: Heart,
    title: 'One Team',
    description:
      'We believe in radical transparency, open collaboration, and supporting each other.',
  },
];

export default function AboutPage() {
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
            </g>
          </svg>
        </div>

        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center md:px-6 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#00a651]">
              COMPANY
            </div>
            <h1 className="mb-5 text-4xl font-bold md:text-5xl lg:text-6xl">
              About Onshape
            </h1>
            <p className="text-base text-white/70 md:text-lg">
              We are on a mission to revolutionize product development with
              cloud-native CAD and PDM, making powerful design tools accessible
              to everyone, everywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f7ef]">
                <Rocket className="h-6 w-6 text-[#00a651]" />
              </div>
              <h2 className="mb-3 text-2xl font-bold text-[#2d3436]">
                Our Mission
              </h2>
              <p className="leading-relaxed text-foreground/70">
                To empower every engineer, designer, and maker with the tools
                they need to turn ideas into products. We believe that great
                design should not be limited by software licenses, file
                management, or physical location. Onshape makes world-class CAD
                and PDM available to anyone with a browser — democratizing
                product development for the next generation of innovators.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f7ef]">
                <Target className="h-6 w-6 text-[#00a651]" />
              </div>
              <h2 className="mb-3 text-2xl font-bold text-[#2d3436]">
                Our Vision
              </h2>
              <p className="leading-relaxed text-foreground/70">
                A world where every product team, from startups to Fortune 500
                companies, can design, collaborate, and innovate without the
                constraints of desktop software and file-based workflows. We see
                a future where product development is as collaborative,
                accessible, and powerful as the best cloud-first tools in every
                other industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full bg-[#f8f9f8] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h2 className="mb-2 text-2xl font-bold text-[#2d3436] md:text-3xl">
              Our Core Values
            </h2>
            <p className="mx-auto max-w-2xl text-foreground/60">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                >
                  <Card className="h-full border-border bg-white">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f7ef]">
                        <Icon className="h-6 w-6 text-[#00a651]" />
                      </div>
                      <h3 className="mb-2 text-base font-semibold text-[#2d3436]">
                        {value.title}
                      </h3>
                      <p className="text-sm text-foreground/60">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h2 className="mb-2 text-2xl font-bold text-[#2d3436] md:text-3xl">
              Leadership Team
            </h2>
            <p className="mx-auto max-w-2xl text-foreground/60">
              The experienced team behind Onshape, with decades of CAD
              innovation.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -3 }}
              >
                <Card className="h-full overflow-hidden border-border bg-white transition-shadow hover:shadow-md">
                  <div className="aspect-square w-full bg-gradient-to-br from-[#e8f7ef] to-[#d1f0df]">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-sm font-semibold text-[#2d3436]">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-xs text-foreground/60">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="w-full bg-[#f8f9f8] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <div className="mb-3 flex items-center justify-center gap-2">
              <TrendingUp className="h-5 w-5 text-[#00a651]" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-[#2d3436] md:text-3xl">
              Our Journey
            </h2>
            <p className="mx-auto max-w-2xl text-foreground/60">
              From a startup with a bold idea to a global platform powering
              millions of designs.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-8">
              {MILESTONES.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className={`relative flex items-start gap-4 md:gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#00a651] bg-white text-[10px] font-bold text-[#00a651] md:absolute md:left-1/2 md:-translate-x-1/2">
                    <TrendingUp className="h-3.5 w-3.5" />
                  </div>

                  <Card
                    className={`flex-1 border-border bg-white md:max-w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                    }`}
                  >
                    <CardContent className="p-5">
                      <div className="mb-1 text-xs font-bold uppercase tracking-wider text-[#00a651]">
                        {milestone.year}
                      </div>
                      <h3 className="mb-1 text-sm font-semibold text-[#2d3436]">
                        {milestone.title}
                      </h3>
                      <p className="text-xs text-foreground/60">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investors */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h2 className="mb-2 text-2xl font-bold text-[#2d3436] md:text-3xl">
              Our Investors &amp; Partners
            </h2>
            <p className="mx-auto max-w-2xl text-foreground/60">
              Backed by leading technology investors and strategic partners.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-5">
            {INVESTORS.map((inv, i) => (
              <motion.div
                key={inv.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card className="h-full border-border bg-white">
                  <CardContent className="flex flex-col items-center justify-center p-5 text-center">
                    <Building className="mb-2 h-6 w-6 text-[#00a651]/40" />
                    <h3 className="text-xs font-semibold text-[#2d3436]">
                      {inv.name}
                    </h3>
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-foreground/50">
                      {inv.type}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="w-full bg-[#2d3436] py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex items-center justify-center gap-2">
              <Briefcase className="h-6 w-6 text-[#00a651]" />
            </div>
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Join the Onshape Team
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-white/70">
              We are always looking for talented engineers, designers, and
              problem-solvers to help shape the future of cloud-native product
              development.
            </p>
            <Button
              className="h-12 bg-[#00a651] px-8 font-bold uppercase tracking-wider text-white hover:bg-[#008f45]"
              onClick={() => toast.success('Exploring careers at Onshape...')}
            >
              View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
