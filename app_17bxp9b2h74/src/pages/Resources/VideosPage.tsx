import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, User } from 'lucide-react';
import { toast } from 'sonner';
import { MOCK_VIDEOS, VIDEO_CATEGORIES } from '@/data/videos';

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredVideos = useMemo(() => {
    return MOCK_VIDEOS.filter((v) => activeCategory === 'all' || v.category === activeCategory);
  }, [activeCategory]);

  const featuredVideo = MOCK_VIDEOS.find((v) => v.featured) || MOCK_VIDEOS[0];

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
              Videos
            </h1>
            <p className="mx-auto max-w-2xl text-foreground/60">
              Watch video tutorials, product demos, and customer stories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category tabs */}
      <section className="sticky top-[120px] z-30 w-full border-b border-border bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-wrap gap-2 py-3">
            {VIDEO_CATEGORIES.map((cat) => (
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

      {/* Featured video */}
      {activeCategory === 'all' && featuredVideo && (
        <section className="w-full bg-white py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-sm bg-[#ffdd00] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#2d3436]">
                Featured
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00a651]">
                {VIDEO_CATEGORIES.find((c) => c.id === featuredVideo.category)?.label}
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-md border border-border bg-white shadow-sm"
            >
              <div
                className="relative flex aspect-video w-full items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1a1a2e 100%)' }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-transform group-hover:scale-110">
                    <Play className="ml-1 h-10 w-10 text-white" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 rounded bg-black/60 px-2 py-1 text-xs font-medium text-white">
                  {featuredVideo.duration}
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h2 className="mb-2 text-2xl font-bold text-[#2d3436] md:text-3xl">
                  {featuredVideo.title}
                </h2>
                <p className="mb-4 text-foreground/60">{featuredVideo.description}</p>
                {featuredVideo.presenter && (
                  <div className="flex items-center gap-2 text-sm text-foreground/50">
                    <User className="h-4 w-4" />
                    <span>{featuredVideo.presenter}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Video grid */}
      <section className="w-full bg-white pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          {filteredVideos.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-foreground/60">No videos found in this category.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredVideos.map((video, i) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  onClick={() => toast.success(`Playing: ${video.title}`)}
                >
                  <div
                    className="relative flex aspect-video w-full items-center justify-center"
                    style={{ background: `linear-gradient(135deg, #${(i * 25 + 10).toString(16).padStart(2, '0')}2535 0%, #0d2818 100%)` }}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-transform group-hover:scale-110">
                      <Play className="ml-0.5 h-6 w-6 text-white" fill="white" />
                    </div>
                    <div className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-0.5 text-xs font-medium text-white">
                      <Clock className="mr-1 inline h-3 w-3" />
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#00a651]">
                      {VIDEO_CATEGORIES.find((c) => c.id === video.category)?.label}
                    </div>
                    <h3 className="mb-1 text-sm font-bold text-[#2d3436] group-hover:text-[#00a651] line-clamp-2">
                      {video.title}
                    </h3>
                    {video.presenter && (
                      <p className="text-xs text-foreground/50">{video.presenter}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
