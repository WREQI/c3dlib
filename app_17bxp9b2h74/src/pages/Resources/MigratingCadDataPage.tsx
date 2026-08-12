import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ClipboardList,
  ListOrdered,
  Upload,
  CheckSquare,
  GraduationCap,
  Rocket,
  ChevronDown,
  ArrowRight,
  FileCheck,
  Users,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  MIGRATION_STEPS,
  SUPPORTED_FORMATS,
  MIGRATION_FAQS,
} from '@/data/migration';

const STEP_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardList,
  ListOrdered,
  Upload,
  CheckSquare,
  GraduationCap,
  Rocket,
};

export default function MigratingCadDataPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
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
              RESOURCES
            </div>
            <h1 className="mb-4 text-3xl font-bold text-[#2d3436] md:text-4xl">
              Migrating CAD Data
            </h1>
            <p className="mx-auto max-w-2xl text-base text-foreground/70">
              Everything you need to know about migrating your CAD data to
              Onshape — from planning and importing to validation and training.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Migration Steps */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-3 text-2xl font-bold text-[#2d3436] md:text-3xl">
              Your Migration Journey in 6 Steps
            </h2>
            <p className="mx-auto max-w-2xl text-foreground/60">
              A proven, structured approach to moving your CAD data and team to
              the Onshape cloud-native platform.
            </p>
          </motion.div>

          <div className="space-y-4">
            {MIGRATION_STEPS.map((step, i) => {
              const Icon = STEP_ICON_MAP[step.icon] || ClipboardList;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Card className="border-border bg-white">
                    <CardContent className="flex gap-5 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f7ef] text-[#00a651]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <span className="rounded bg-[#00a651] px-2 py-0.5 text-[10px] font-bold text-white">
                            STEP {step.id}
                          </span>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-[#2d3436]">
                          {step.title}
                        </h3>
                        <p className="text-sm text-foreground/70">
                          {step.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supported Formats */}
      <section className="w-full bg-[#f8f9f8] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h2 className="mb-3 text-2xl font-bold text-[#2d3436] md:text-3xl">
              Supported File Formats
            </h2>
            <p className="mx-auto max-w-2xl text-foreground/60">
              Onshape supports all major CAD file formats for import and export.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SUPPORTED_FORMATS.map((format, i) => (
              <motion.div
                key={format.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Card className="border-border bg-white">
                  <CardContent className="flex items-center justify-between p-4">
                    <div>
                      <h3 className="text-sm font-semibold text-[#2d3436]">
                        {format.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {format.extension}
                      </p>
                    </div>
                    <span
                      className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase ${
                        format.type === '3d'
                          ? 'bg-[#e8f7ef] text-[#00a651]'
                          : format.type === '2d'
                          ? 'bg-blue-50 text-blue-600'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {format.type}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Services */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h2 className="mb-3 text-2xl font-bold text-[#2d3436] md:text-3xl">
              Migration Services & Support
            </h2>
            <p className="mx-auto max-w-2xl text-foreground/60">
              Our migration experts are here to help you every step of the way.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full border-border bg-white">
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f7ef]">
                    <FileCheck className="h-6 w-6 text-[#00a651]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#2d3436]">
                    Data Migration Services
                  </h3>
                  <p className="text-sm text-foreground/70">
                    Professional migration services for large datasets and
                    complex assemblies, handled by Onshape-certified migration
                    specialists.
                  </p>
                  <Button
                    variant="ghost"
                    className="p-0 text-[#00a651] hover:bg-transparent hover:text-[#008f45]"
                    onClick={() => toast.success('Learn more about migration services')}
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full border-border bg-white">
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f7ef]">
                    <Users className="h-6 w-6 text-[#00a651]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#2d3436]">
                    Customer Success Team
                  </h3>
                  <p className="text-sm text-foreground/70">
                    Dedicated customer success managers to guide your team
                    through the migration process and ensure a smooth
                    transition.
                  </p>
                  <Button
                    variant="ghost"
                    className="p-0 text-[#00a651] hover:bg-transparent hover:text-[#008f45]"
                    onClick={() => toast.success('Meet our Customer Success team')}
                  >
                    Meet the team <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full border-border bg-white">
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f7ef]">
                    <Clock className="h-6 w-6 text-[#00a651]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#2d3436]">
                    Fast-Track Onboarding
                  </h3>
                  <p className="text-sm text-foreground/70">
                    Accelerated onboarding programs to get your team productive
                    on Onshape in as little as two weeks with structured
                    training.
                  </p>
                  <Button
                    variant="ghost"
                    className="p-0 text-[#00a651] hover:bg-transparent hover:text-[#008f45]"
                    onClick={() => toast.success('Explore fast-track options')}
                  >
                    Explore options <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-[#f8f9f8] py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h2 className="mb-3 text-2xl font-bold text-[#2d3436] md:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="text-foreground/60">
              Common questions about migrating CAD data to Onshape.
            </p>
          </motion.div>

          <div className="space-y-3">
            {MIGRATION_FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card className="border-border bg-white">
                  <button
                    className="flex w-full items-center justify-between p-5 text-left"
                    onClick={() => toggleFaq(i)}
                  >
                    <span className="pr-4 text-sm font-semibold text-[#2d3436]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#00a651] transition-transform ${
                        openFaq === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-sm leading-relaxed text-foreground/70">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#2d3436] py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex items-center justify-center gap-2">
              <ShieldCheck className="h-6 w-6 text-[#00a651]" />
            </div>
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Ready to migrate to Onshape?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-white/70">
              Talk to our migration experts about your specific data and get a
              custom migration plan for your team.
            </p>
            <Button
              className="h-12 bg-[#00a651] px-8 font-bold uppercase tracking-wider text-white hover:bg-[#008f45]"
              onClick={() => toast.success('Requesting migration consultation...')}
            >
              Request a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
