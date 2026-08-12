import { useState, useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import { scopedStorage } from '@lark-apaas/client-toolkit-lite';
import { MOCK_HOME_CONTENT } from '@/data/homecontent';
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';

const STORAGE_KEY = 'webinar_bar_closed';

export default function WebinarBarSection() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const closed = scopedStorage.getItem(STORAGE_KEY);
    if (closed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    scopedStorage.setItem(STORAGE_KEY, 'true');
  };

  if (!isVisible) return null;

  const { webinarLabel, webinarText, webinarLinkText, webinarLinkUrl } = MOCK_HOME_CONTENT;

  return (
    <section id="webinar-bar" className="w-full bg-white py-4">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="relative flex items-center gap-4 rounded-lg border-2 border-[#7e3ff2] bg-white px-6 py-3 shadow-lg">
          <Calendar className="h-5 w-5 shrink-0 text-[#7e3ff2]" />
          <div className="flex flex-1 flex-wrap items-center gap-2 text-sm">
            <span className="font-bold text-[#7e3ff2]">{webinarLabel}</span>
            <span className="text-foreground/80">{webinarText}</span>
            <span className="text-foreground/50">-</span>
            <UniversalLink
              to={webinarLinkUrl}
              className="font-semibold text-[#7e3ff2] transition-colors hover:underline"
            >
              {webinarLinkText}
            </UniversalLink>
          </div>
          <button
            onClick={handleClose}
            className="shrink-0 text-foreground/50 transition-colors hover:text-foreground"
            aria-label="Close notification"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
