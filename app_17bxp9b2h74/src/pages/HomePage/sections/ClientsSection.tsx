import { MOCK_CLIENTS } from '@/data/clients';
import { Image } from '@/components/ui/image';

export default function ClientsSection() {
  return (
    <section id="clients" className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
          {MOCK_CLIENTS.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
              title={client.name}
            >
              <Image
                src={client.logoUrl}
                alt={client.name}
                className="h-8 max-w-[140px] object-contain opacity-60 transition-opacity hover:opacity-100 md:h-10 md:max-w-[180px]"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-sm font-semibold tracking-wider text-foreground/40 hover:text-foreground/70">${client.name}</span>`;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
