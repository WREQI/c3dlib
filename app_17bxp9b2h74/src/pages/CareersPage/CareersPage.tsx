import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Users,
  Heart,
  Coffee,
  Monitor,
  MapPin,
  DollarSign,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BENEFITS = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description:
      'Comprehensive medical, dental, and vision coverage with generous employer contributions.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Compensation',
    description:
      'Base salary, equity, performance bonuses, and 401(k) matching program.',
  },
  {
    icon: Coffee,
    title: 'Flexible Time Off',
    description:
      'Unlimited PTO, paid holidays, company shutdown week, and parental leave.',
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    description:
      'Annual learning budget, conference attendance, and mentorship programs.',
  },
  {
    icon: Monitor,
    title: 'Remote-Friendly',
    description:
      'Work from anywhere with flexible hours and a home office setup stipend.',
  },
  {
    icon: Users,
    title: 'Great Culture',
    description:
      'Regular team events, hackathons, and a supportive, collaborative environment.',
  },
];

const CULTURE_POINTS = [
  {
    title: 'Customer Obsessed',
    description:
      'We start with customer problems and work backward to build solutions that truly matter.',
  },
  {
    title: 'Ownership Mindset',
    description:
      'Every team member takes ownership of their work and the impact it has on our users.',
  },
  {
    title: 'Bias for Action',
    description:
      'We move fast, make decisions with the best information available, and iterate quickly.',
  },
  {
    title: 'Radical Transparency',
    description:
      'Open communication across the company — from strategy and roadmap to challenges and failures.',
  },
  {
    title: 'Diverse & Inclusive',
    description:
      'We believe diverse perspectives make better products and a stronger company.',
  },
  {
    title: 'Always Learning',
    description:
      'Curiosity and continuous growth are part of how we work — for both our product and our people.',
  },
];

const DEPARTMENTS = [
  { id: 'all', label: 'All Departments' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'product', label: 'Product & Design' },
  { id: 'sales', label: 'Sales' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'support', label: 'Customer Success' },
  { id: 'operations', label: 'Operations' },
];

const JOBS = [
  {
    id: '1',
    title: 'Senior Software Engineer, CAD Kernel',
    department: 'engineering',
    location: 'Cambridge, MA',
    type: 'Full-time',
    remote: true,
    description:
      'Work on the core geometric modeling engine powering Onshape parametric design tools.',
  },
  {
    id: '2',
    title: 'Senior Full Stack Engineer',
    department: 'engineering',
    location: 'Remote (US)',
    type: 'Full-time',
    remote: true,
    description:
      'Build scalable backend services and responsive web interfaces for our cloud CAD platform.',
  },
  {
    id: '3',
    title: 'Product Manager, Collaboration',
    department: 'product',
    location: 'Cambridge, MA',
    type: 'Full-time',
    remote: true,
    description:
      'Lead the vision and roadmap for our real-time collaboration and sharing features.',
  },
  {
    id: '4',
    title: 'Senior UX Designer',
    department: 'product',
    location: 'Remote (US)',
    type: 'Full-time',
    remote: true,
    description:
      'Design intuitive, beautiful interfaces for complex CAD and PDM workflows.',
  },
  {
    id: '5',
    title: 'Enterprise Account Executive',
    department: 'sales',
    location: 'Midwest, US',
    type: 'Full-time',
    remote: true,
    description:
      'Help large manufacturing and engineering teams adopt Onshape enterprise solutions.',
  },
  {
    id: '6',
    title: 'Sales Development Representative',
    department: 'sales',
    location: 'Plymouth, MI',
    type: 'Full-time',
    remote: false,
    description:
      'Generate new business opportunities by engaging with prospective customers.',
  },
  {
    id: '7',
    title: 'Content Marketing Manager',
    department: 'marketing',
    location: 'Remote (US)',
    type: 'Full-time',
    remote: true,
    description:
      'Create compelling content that educates engineers and drives demand for Onshape.',
  },
  {
    id: '8',
    title: 'Demand Generation Specialist',
    department: 'marketing',
    location: 'Cambridge, MA',
    type: 'Full-time',
    remote: true,
    description:
      'Build and optimize marketing campaigns that generate qualified pipeline and revenue.',
  },
  {
    id: '9',
    title: 'Customer Success Manager',
    department: 'support',
    location: 'Remote (US)',
    type: 'Full-time',
    remote: true,
    description:
      'Build relationships with enterprise customers and drive adoption, retention, and expansion.',
  },
  {
    id: '10',
    title: 'Technical Support Engineer',
    department: 'support',
    location: 'Reading, UK',
    type: 'Full-time',
    remote: false,
    description:
      'Help customers solve technical challenges with Onshape through expert-level support.',
  },
  {
    id: '11',
    title: 'DevOps Engineer',
    department: 'engineering',
    location: 'Remote (US/EU)',
    type: 'Full-time',
    remote: true,
    description:
      'Maintain and improve our cloud infrastructure, deployment pipelines, and monitoring systems.',
  },
  {
    id: '12',
    title: 'HR Business Partner',
    department: 'operations',
    location: 'Cambridge, MA',
    type: 'Full-time',
    remote: true,
    description:
      'Partner with engineering and product leaders on people strategy, talent, and culture.',
  },
];

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState('all');

  const filteredJobs = useMemo(() => {
    return JOBS.filter(
      (job) => activeDept === 'all' || job.department === activeDept
    );
  }, [activeDept]);

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
              Careers at Onshape
            </h1>
            <p className="text-base text-white/70 md:text-lg">
              Join our team and help shape the future of cloud-native product
              development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#00a651]">
                WHY ONSHAPE
              </div>
              <h2 className="mb-5 text-2xl font-bold text-[#2d3436] md:text-3xl">
                Work on something that matters
              </h2>
              <div className="space-y-4 text-foreground/70">
                <p>
                  At Onshape, we are building the future of product
                  development. Our cloud-native platform is used by millions of
                  engineers, designers, and students around the world to turn
                  their ideas into real products.
                </p>
                <p>
                  We are a team of curious, passionate problem-solvers who
                  believe that great software is built by great teams. We
                  encourage autonomy, embrace new ideas, and celebrate both
                  wins and lessons learned.
                </p>
                <p>
                  If you are excited about tackling hard technical challenges,
                  working with exceptional people, and building products that
                  actually matter — we want to hear from you.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Users, number: '500+', label: 'Team Members' },
                { icon: Sparkles, number: '5M+', label: 'Users Worldwide' },
                { icon: Briefcase, number: '12', label: 'Global Offices' },
                { icon: Heart, number: '4.8★', label: 'Glassdoor Rating' },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Card className="border-border bg-white">
                      <CardContent className="p-5 text-center">
                        <Icon className="mx-auto mb-2 h-6 w-6 text-[#00a651]" />
                        <div className="text-2xl font-bold text-[#2d3436]">
                          {stat.number}
                        </div>
                        <div className="text-xs text-foreground/60">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture */}
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
              Life at Onshape
            </h2>
            <p className="mx-auto max-w-2xl text-foreground/60">
              A culture built on trust, collaboration, and a shared passion for
              great engineering.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CULTURE_POINTS.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <Card className="h-full border-border bg-white">
                  <CardContent className="p-5">
                    <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-[#00a651]">
                      0{i + 1}
                    </div>
                    <h3 className="mb-2 text-base font-semibold text-[#2d3436]">
                      {point.title}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h2 className="mb-2 text-2xl font-bold text-[#2d3436] md:text-3xl">
              Benefits &amp; Perks
            </h2>
            <p className="mx-auto max-w-2xl text-foreground/60">
              We invest in our team with comprehensive benefits designed to
              support you at work and in life.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  <Card className="h-full border-border bg-white">
                    <CardContent className="p-5">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded bg-[#e8f7ef]">
                        <Icon className="h-5 w-5 text-[#00a651]" />
                      </div>
                      <h3 className="mb-1.5 text-sm font-semibold text-[#2d3436]">
                        {benefit.title}
                      </h3>
                      <p className="text-xs text-foreground/60">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="w-full bg-[#f8f9f8] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <h2 className="mb-2 text-2xl font-bold text-[#2d3436] md:text-3xl">
              Open Positions
            </h2>
            <p className="mx-auto max-w-2xl text-foreground/60">
              {filteredJobs.length} positions available across our team.
            </p>
          </motion.div>

          {/* Department Filter */}
          <div className="mb-6 flex flex-wrap gap-2">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDept(dept.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  activeDept === dept.id
                    ? 'bg-[#00a651] text-white'
                    : 'bg-white text-foreground/70 border border-border hover:border-[#00a651]/40 hover:text-[#00a651]'
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>

          {/* Job List */}
          <div className="space-y-3">
            {filteredJobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <Card className="group cursor-pointer border-border bg-white transition-all hover:border-[#00a651]/30 hover:shadow-sm">
                  <CardContent className="flex items-center justify-between gap-4 p-5">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold text-[#2d3436]">
                        {job.title}
                      </h3>
                      <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-foreground/60">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </span>
                        <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium uppercase">
                          {job.type}
                        </span>
                        {job.remote && (
                          <span className="rounded bg-[#e8f7ef] px-1.5 py-0.5 text-[10px] font-medium uppercase text-[#00a651]">
                            Remote
                          </span>
                        )}
                        <span className="capitalize text-foreground/40">
                          {job.department}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="shrink-0 text-[#00a651] hover:bg-[#e8f7ef]"
                      onClick={() => toast.success(`Viewing ${job.title}...`)}
                    >
                      Apply
                      <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-foreground/60">
                No positions found in this department.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#2d3436] py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Do not see the right role?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-white/70">
              We are always looking for talented people. Send us your resume and
              we will keep you in mind for future opportunities.
            </p>
            <Button
              className="h-12 bg-[#00a651] px-8 font-bold uppercase tracking-wider text-white hover:bg-[#008f45]"
              onClick={() => toast.success('Submitting general application...')}
            >
              Submit General Application <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
