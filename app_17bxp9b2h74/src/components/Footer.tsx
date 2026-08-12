import { Linkedin, Twitter, Facebook, Youtube, Instagram } from 'lucide-react';
import { MOCK_FOOTER_LINK_GROUPS } from '@/data/footerlinks';
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1f2425] text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {MOCK_FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.id}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.id}>
                    <UniversalLink
                      to={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-[#00a651]"
                    >
                      {link.label}
                    </UniversalLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Onshape. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <UniversalLink to="#" className="text-white/50 transition-colors hover:text-[#00a651]" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </UniversalLink>
            <UniversalLink to="#" className="text-white/50 transition-colors hover:text-[#00a651]" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </UniversalLink>
            <UniversalLink to="#" className="text-white/50 transition-colors hover:text-[#00a651]" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </UniversalLink>
            <UniversalLink to="#" className="text-white/50 transition-colors hover:text-[#00a651]" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </UniversalLink>
            <UniversalLink to="#" className="text-white/50 transition-colors hover:text-[#00a651]" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </UniversalLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
