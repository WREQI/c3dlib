import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen, Award, Star, User, ArrowRight, GraduationCap, TrendingUp, Zap } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { MOCK_COURSES, COURSE_LEVELS, MOCK_CERTIFICATIONS, MOCK_LEARNING_PATHS } from '@/data/courses';

export default function CoursesPage() {
  const [activeLevel, setActiveLevel] = useState('all');

  const filteredCourses = useMemo(() => {
    return MOCK_COURSES.filter((c) => activeLevel === 'all' || c.level === activeLevel);
  }, [activeLevel]);

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
            <h1 className="mb-4 text-4xl font-bold text-[#2d3436] md:text-5xl">
              Courses & Training
            </h1>
            <p className="mx-auto max-w-2xl text-foreground/60">
              Learn Onshape with self-paced courses, live training, and certification programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Learning paths */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8 text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#00a651]">
              LEARNING PATHS
            </div>
            <h2 className="text-2xl font-bold text-[#2d3436] md:text-3xl">
              Start Your Learning Journey
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {MOCK_LEARNING_PATHS.map((path, i) => {
              const Icon = i === 0 ? GraduationCap : i === 1 ? TrendingUp : Zap;
              return (
                <motion.div
                  key={path.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="group cursor-pointer rounded-md border border-border bg-white p-6 transition-all hover:border-[#00a651]/40 hover:shadow-md"
                  onClick={() => toast.info(`Opening learning path: ${path.title}`)}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-[#f0f7f0]">
                    <Icon className="h-6 w-6 text-[#00a651]" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-[#2d3436] group-hover:text-[#00a651]">{path.title}</h3>
                  <p className="mb-4 text-sm text-foreground/60">{path.description}</p>
                  <div className="flex items-center justify-between text-xs text-foreground/50">
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" /> {path.courses} courses
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {path.duration}
                    </span>
                    <span className="rounded-sm bg-[#f0f7f0] px-2 py-0.5 font-semibold text-[#00a651]">
                      {path.level}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course level filter */}
      <section className="sticky top-[120px] z-30 w-full border-y border-border bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3 py-3">
            <div className="flex flex-wrap gap-2">
              {COURSE_LEVELS.map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setActiveLevel(lvl.id)}
                  className={`rounded-sm px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    activeLevel === lvl.id
                      ? 'bg-[#00a651] text-white'
                      : 'bg-transparent text-foreground/60 hover:text-[#00a651]'
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
            <span className="text-sm text-foreground/50">{filteredCourses.length} courses</span>
          </div>
        </div>
      </section>

      {/* Courses grid */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          {filteredCourses.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-foreground/60">No courses found at this level.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="group flex cursor-pointer flex-col overflow-hidden rounded-md border border-border bg-white transition-all hover:border-[#00a651]/40 hover:shadow-md"
                  onClick={() => toast.info(`Opening course: ${course.title}`)}
                >
                  <div
                    className="flex h-40 items-center justify-center"
                    style={{ background: `linear-gradient(135deg, #${(i * 25 + 10).toString(16).padStart(2, '0')}2535 0%, #0d2818 100%)` }}
                  >
                    <BookOpen className="h-10 w-10 text-white/30" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#00a651]">
                        {course.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-amber-500">
                        <Star className="h-3 w-3 fill-amber-500" /> {course.rating}
                      </span>
                    </div>
                    <h3 className="mb-2 text-base font-bold text-[#2d3436] group-hover:text-[#00a651] line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm text-foreground/60 line-clamp-2">{course.description}</p>
                    <div className="flex items-center justify-between text-xs text-foreground/50">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {course.duration}
                      </span>
                      <span>{course.lessons} lessons</span>
                      <span className="rounded-sm bg-muted px-2 py-0.5 font-semibold capitalize">
                        {course.level}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Certifications */}
      <section className="w-full bg-[#f8f9f8] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8 text-center">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#f0f7f0] md:mx-auto">
              <Award className="h-7 w-7 text-[#00a651]" />
            </div>
            <h2 className="text-2xl font-bold text-[#2d3436] md:text-3xl">
              Certification Programs
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-foreground/60">
              Validate your Onshape skills with industry-recognized certifications.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {MOCK_CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="flex flex-col rounded-md border border-border bg-white p-6 transition-all hover:border-[#00a651]/40 hover:shadow-md"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffdd00]/20">
                    <Award className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-foreground/50">
                      {cert.level}
                    </div>
                    <div className="text-xs text-foreground/50">{cert.duration}</div>
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-bold text-[#2d3436]">{cert.title}</h3>
                <p className="mb-4 text-sm text-foreground/60">{cert.description}</p>
                <div className="mb-5 space-y-1.5">
                  <p className="text-xs font-semibold text-foreground/70">Prerequisites:</p>
                  <ul className="space-y-1">
                    {cert.prerequisites.map((pr, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-foreground/60">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00a651]" />
                        {pr}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  variant="outline"
                  className="mt-auto rounded-sm border-[#00a651] text-[#00a651] hover:bg-[#00a651] hover:text-white"
                  onClick={() => toast.info(`Learning more about ${cert.title}`)}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
