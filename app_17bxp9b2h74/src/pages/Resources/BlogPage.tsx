import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Mail, Calendar, Clock, User } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MOCK_BLOG_POSTS, BLOG_CATEGORIES } from '@/data/blogposts';
import { useNavigate } from 'react-router-dom';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const filteredPosts = useMemo(() => {
    return MOCK_BLOG_POSTS.filter((post) => {
      const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredPost = MOCK_BLOG_POSTS.find((p) => p.featured) || MOCK_BLOG_POSTS[0];

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
              Onshape Blog
            </h1>
            <p className="mx-auto max-w-2xl text-foreground/60">
              Stay up to date with the latest in CAD, PDM, and cloud-native product development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-[120px] z-30 w-full border-b border-border bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map((cat) => (
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
          <div className="relative w-full md:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="h-9 bg-white pl-9 text-sm"
            />
          </div>
        </div>
      </section>

      {/* Featured post */}
      {activeCategory === 'all' && !searchQuery && featuredPost && (
        <section className="w-full bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-md border border-border bg-white shadow-sm"
            >
              <div className="grid md:grid-cols-2">
                <div
                  className="flex min-h-[280px] items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2818 100%)' }}
                >
                  <div className="text-center text-white/40">
                    <Calendar className="mx-auto mb-2 h-12 w-12" />
                    <p className="text-sm">Featured Article</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <div className="mb-3 text-xs font-bold uppercase tracking-wider text-[#00a651]">
                    {BLOG_CATEGORIES.find((c) => c.id === featuredPost.category)?.label} · FEATURED
                  </div>
                  <h2 className="mb-4 text-2xl font-bold text-[#2d3436] md:text-3xl">
                    {featuredPost.title}
                  </h2>
                  <p className="mb-6 text-foreground/60">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-foreground/50">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" /> {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles grid */}
      <section className="w-full bg-white pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          {filteredPosts.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-foreground/60">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="group flex cursor-pointer flex-col overflow-hidden rounded-md border border-border bg-white transition-all hover:border-[#00a651]/40 hover:shadow-md"
                  onClick={() => {
                    if (post.slug) {
                      navigate(`/resources/blog/${post.slug}`);
                    } else {
                      toast.info(`Opening article: ${post.title}`);
                    }
                  }}
                >
                  <div
                    className="flex h-44 items-center justify-center"
                    style={{ background: `linear-gradient(135deg, #${(i * 30 + 15).toString(16)}2233 0%, #0d2818 100%)` }}
                  >
                    <div className="text-center text-white/30">
                      <Mail className="mx-auto mb-1 h-8 w-8" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-2 text-xs font-bold uppercase tracking-wider text-[#00a651]">
                      {BLOG_CATEGORIES.find((c) => c.id === post.category)?.label}
                    </div>
                    <h3 className="mb-2 text-base font-bold text-[#2d3436] group-hover:text-[#00a651]">
                      {post.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm text-foreground/60 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-foreground/50">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button className="rounded-sm border border-border px-3 py-1.5 text-sm text-foreground/60 hover:border-[#00a651] hover:text-[#00a651]">
                Previous
              </button>
              {[1, 2, 3].map((p) => (
                <button
                  key={p}
                  className={`h-8 w-8 rounded-sm text-sm font-medium ${
                    p === 1 ? 'bg-[#00a651] text-white' : 'text-foreground/60 hover:bg-muted'
                  }`}
                >
                  {p}
                </button>
              ))}
              <button className="rounded-sm border border-border px-3 py-1.5 text-sm text-foreground/60 hover:border-[#00a651] hover:text-[#00a651]">
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe */}
      <section className="w-full bg-[#f8f9f8] py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f0f7f0]">
              <Mail className="h-7 w-7 text-[#00a651]" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-[#2d3436] md:text-3xl">
              Subscribe to the Onshape Blog
            </h2>
            <p className="mb-6 text-foreground/60">
              Get the latest product updates, tech tips, and industry insights delivered straight to your inbox.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email || !email.includes('@')) {
                  toast.error('Please enter a valid email address');
                  return;
                }
                toast.success('Thanks for subscribing to the Onshape Blog!');
                setEmail('');
              }}
              className="mx-auto flex max-w-md gap-2"
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-11 bg-white"
                required
              />
              <Button type="submit" className="h-11 rounded-sm bg-[#00a651] hover:bg-[#008f46]">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
