import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Play, ArrowRight, Video } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { MOCK_EVENTS, EVENT_CATEGORIES } from '@/data/events';

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredEvents = useMemo(() => {
    return MOCK_EVENTS.filter((e) => activeCategory === 'all' || e.type === activeCategory);
  }, [activeCategory]);

  const featuredEvent = MOCK_EVENTS.find((e) => e.featured) || MOCK_EVENTS[0];
  const upcomingEvents = filteredEvents.filter((e) => e.status === 'upcoming');
  const ondemandEvents = filteredEvents.filter((e) => e.status === 'ondemand');

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
              Events
            </h1>
            <p className="mx-auto max-w-2xl text-foreground/60">
              Join live webinars, workshops, and events hosted by Onshape experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category filter */}
      <section className="sticky top-[120px] z-30 w-full border-b border-border bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-wrap gap-2 py-3">
            {EVENT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-sm px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-[#00a651] text-white'
                    : 'bg-transparent text-foreground/60 hover:text-[#00a651]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured event */}
      {activeCategory === 'all' && featuredEvent && (
        <section className="w-full bg-white py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-sm bg-[#ffdd00] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#2d3436]">
                Featured Event
              </span>
              <span className="rounded-sm bg-[#f0f7f0] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#00a651]">
                {EVENT_CATEGORIES.find((c) => c.id === featuredEvent.type)?.label}
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-md border border-border bg-white shadow-sm"
            >
              <div className="grid md:grid-cols-2">
                <div
                  className="flex min-h-[280px] items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2818 100%)' }}
                >
                  <div className="text-center text-white/40">
                    <Calendar className="mx-auto mb-2 h-12 w-12" />
                    <p className="text-sm">Live Webinar</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <h2 className="mb-3 text-2xl font-bold text-[#2d3436] md:text-3xl">
                    {featuredEvent.title}
                  </h2>
                  <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-foreground/60">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-[#00a651]" /> {featuredEvent.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-[#00a651]" /> {featuredEvent.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Video className="h-4 w-4 text-[#00a651]" /> {featuredEvent.duration}
                    </span>
                  </div>
                  <p className="mb-5 text-foreground/60">{featuredEvent.description}</p>
                  <p className="mb-5 flex items-center gap-1.5 text-sm text-foreground/50">
                    <User className="h-4 w-4" /> Presented by {featuredEvent.presenter}
                  </p>
                  <Button
                    className="w-fit rounded-sm bg-[#00a651] hover:bg-[#008f46]"
                    onClick={() => toast.success(`Registered for: ${featuredEvent.title}`)}
                  >
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Upcoming events */}
      {upcomingEvents.length > 0 && (
        <section className="w-full bg-white pb-12">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-6 text-2xl font-bold text-[#2d3436] md:text-3xl">
              Upcoming Events
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="group flex cursor-pointer flex-col overflow-hidden rounded-md border border-border bg-white transition-all hover:border-[#00a651]/40 hover:shadow-md"
                  onClick={() => toast.info(`Registering for: ${event.title}`)}
                >
                  <div
                    className="relative flex h-40 items-center justify-center"
                    style={{ background: `linear-gradient(135deg, #${(i * 25 + 15).toString(16).padStart(2, '0')}3040 0%, #0d2818 100%)` }}
                  >
                    <Calendar className="h-10 w-10 text-white/30" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-2 text-xs font-bold uppercase tracking-wider text-[#00a651]">
                      {EVENT_CATEGORIES.find((c) => c.id === event.type)?.label}
                    </div>
                    <h3 className="mb-2 text-base font-bold text-[#2d3436] group-hover:text-[#00a651]">
                      {event.title}
                    </h3>
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-foreground/50">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {event.duration}
                      </span>
                    </div>
                    <p className="mb-4 flex-1 text-sm text-foreground/60 line-clamp-2">{event.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#00a651] transition-all group-hover:gap-2">
                      Register Now
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* On-demand */}
      {ondemandEvents.length > 0 && (
        <section className="w-full bg-[#f8f9f8] py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#2d3436] md:text-3xl">
                On-Demand Recordings
              </h2>
              <span className="text-sm text-foreground/50">{ondemandEvents.length} available</span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {ondemandEvents.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="flex cursor-pointer items-center gap-4 rounded-md border border-border bg-white p-4 transition-all hover:border-[#00a651]/40 hover:shadow-sm"
                  onClick={() => toast.success(`Playing: ${event.title}`)}
                >
                  <div
                    className="flex h-16 w-24 shrink-0 items-center justify-center rounded-sm"
                    style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2818 100%)' }}
                  >
                    <Play className="h-6 w-6 text-white/50" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#00a651]">
                      {EVENT_CATEGORIES.find((c) => c.id === event.type)?.label}
                    </div>
                    <h3 className="text-sm font-semibold text-[#2d3436] line-clamp-1">{event.title}</h3>
                    <p className="text-xs text-foreground/50">
                      {event.duration} · {event.presenter}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {filteredEvents.length === 0 && (
        <section className="w-full bg-white py-16">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <p className="text-foreground/60">No events found in this category.</p>
          </div>
        </section>
      )}
    </div>
  );
}
