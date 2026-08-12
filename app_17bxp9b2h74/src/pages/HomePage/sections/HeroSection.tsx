import { useState, type FormEvent } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MOCK_HOME_CONTENT } from '@/data/homecontent';
import { Image } from '@/components/ui/image';
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';

export default function HeroSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Thanks for signing up! Check your email to get started.');
      setEmail('');
    }, 800);
  };

  const { heroTitle, heroDescription, heroVideoLinkText, heroCtaButtonText, heroSubtext, heroImageUrl } = MOCK_HOME_CONTENT;

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-white pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left: text */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#2d3436] md:text-5xl lg:text-[3.25rem]">
              {heroTitle}
            </h1>
            <p className="text-lg text-foreground/70 md:text-xl">
              {heroDescription}{' '}
              <UniversalLink to="#" className="font-semibold text-[#00a651] underline underline-offset-2 hover:text-[#008f45]">
                {heroVideoLinkText}
              </UniversalLink>
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:max-w-lg">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your business email address"
                className="h-12 rounded-sm border-foreground/20 bg-white text-base focus-visible:ring-[#00a651]"
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="h-12 rounded-sm bg-[#00a651] px-8 text-base font-semibold text-white hover:bg-[#008f45]"
              >
                {heroCtaButtonText}
              </Button>
            </form>

            <p className="max-w-lg text-sm text-foreground/60">
              {heroSubtext}
            </p>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={heroImageUrl}
                alt="Industrial 3D CAD product render"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Honeycomb bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <svg
          className="absolute bottom-0 left-0 h-full w-2/3"
          viewBox="0 0 800 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="honeyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00a651" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#f7d046" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f7d046" stopOpacity="0" />
            </linearGradient>
            <pattern
              id="honeycomb"
              patternUnits="userSpaceOnUse"
              width="40"
              height="46"
            >
              <polygon
                points="20,0 40,11.5 40,34.5 20,46 0,34.5 0,11.5"
                fill="none"
                stroke="#f7d046"
                strokeOpacity="0.4"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <polygon
            points="0,120 0,30 160,0 600,0 800,40 800,120"
            fill="url(#honeyGrad)"
          />
          <polygon
            points="0,120 0,30 160,0 600,0 800,40 800,120"
            fill="url(#honeycomb)"
            fillOpacity="0.5"
          />
          {/* Green diagonal line */}
          <line
            x1="0"
            y1="95"
            x2="150"
            y2="0"
            stroke="#00a651"
            strokeWidth="2"
          />
          <line
            x1="150"
            y1="0"
            x2="800"
            y2="0"
            stroke="#00a651"
            strokeWidth="2"
          />
        </svg>
      </div>
    </section>
  );
}
