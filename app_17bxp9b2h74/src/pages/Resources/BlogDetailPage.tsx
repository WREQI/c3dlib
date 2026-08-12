import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  ArrowLeft,
  BookOpen,
} from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getBlogDetailBySlug } from '@/data/blogdetail';
import { avatarImages } from '@lark-apaas/client-toolkit-lite';
import { Image } from '@/components/ui/image';

function getAvatarByIndex(idx: string): string {
  const map: Record<string, string> = {
    '1': avatarImages.avatarImg1,
    '2': avatarImages.avatarImg2,
    '3': avatarImages.avatarImg3,
    '4': avatarImages.avatarImg4,
    '5': avatarImages.avatarImg5,
    '6': avatarImages.avatarImg6,
    '7': avatarImages.avatarImg7,
    '8': avatarImages.avatarImg8,
  };
  return map[idx] || avatarImages.avatarImg1;
}

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = useMemo(() => {
    if (!slug) return undefined;
    return getBlogDetailBySlug(slug);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center md:px-6">
          <h1 className="mb-4 text-2xl font-bold text-[#2d3436]">
            Article not found
          </h1>
          <p className="mb-6 text-foreground/60">
            The article you are looking for does not exist or has been moved.
          </p>
          <Button
            onClick={() => navigate('/resources/blog')}
            className="bg-[#00a651] text-white hover:bg-[#008f45]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const avatar = getAvatarByIndex(post.authorAvatar);

  return (
    <div className="bg-white">
      {/* Hero / Title */}
      <section
        className="relative w-full overflow-hidden text-white"
        style={{ backgroundColor: '#0a1628' }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-20">
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

        <div className="relative mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => navigate(-1)}
              className="mb-6 flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#00a651]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </button>

            <span className="mb-4 inline-block rounded bg-[#00a651]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#00a651] ring-1 ring-[#00a651]/40">
              {post.category}
            </span>

            <h1 className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-5 text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="prose prose-sm max-w-none dark:prose-invert prose-headings:text-[#2d3436] prose-p:text-foreground/80 prose-p:leading-relaxed prose-h2:text-xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-3 prose-strong:text-[#2d3436] prose-a:text-[#00a651] prose-ul:text-foreground/80">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-border pt-6">
              <Tag className="h-4 w-4 text-foreground/50" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-muted px-2.5 py-1 text-xs font-medium text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10"
          >
            <Card className="border-border bg-[#f8f9f8]">
              <CardContent className="flex flex-col items-start gap-4 p-6 md:flex-row md:items-center">
                <Image
                  src={avatar}
                  alt={post.author}
                  className="h-16 w-16 shrink-0 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="mb-1 text-xs font-bold uppercase tracking-wider text-[#00a651]">
                    About the Author
                  </div>
                  <h3 className="text-base font-semibold text-[#2d3436]">
                    {post.author}
                  </h3>
                  <p className="mb-1 text-xs text-foreground/60">
                    {post.authorRole}
                  </p>
                  <p className="text-sm text-foreground/70">{post.authorBio}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Related Posts */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <h2 className="mb-6 text-xl font-bold text-[#2d3436]">
              Related Articles
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {post.relatedPosts.map((related, i) => (
                <motion.div
                  key={related.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <Card
                    className="group h-full cursor-pointer border-border bg-white transition-shadow hover:shadow-sm"
                    onClick={() =>
                      toast.info('Article not available yet')
                    }
                  >
                    <CardContent className="space-y-2 p-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#00a651]">
                        {related.category}
                      </span>
                      <h3 className="text-sm font-semibold text-[#2d3436]">
                        {related.title}
                      </h3>
                      <p className="text-xs text-foreground/60">
                        {related.excerpt}
                      </p>
                      <div className="pt-1 text-xs font-semibold text-[#00a651]">
                        Read <ArrowRight className="ml-1 inline h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Back to all posts */}
          <div className="mt-12 flex justify-center">
            <Button
              variant="outline"
              className="border-[#00a651] text-[#00a651] hover:bg-[#e8f7ef]"
              onClick={() => navigate('/resources/blog')}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              View All Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
