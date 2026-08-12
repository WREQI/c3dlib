import { useState, useRef, useEffect } from 'react';
import { Check, ChevronDown, ChevronUp, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MOCK_PRICING_PLANS, MOCK_PRICING_CONTENT } from '@/data/pricing';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';

export default function PricingPage() {
  const [currency, setCurrency] = useState(MOCK_PRICING_CONTENT.defaultCurrency);
  const [showCompare, setShowCompare] = useState(false);
  const compareRef = useRef<HTMLDivElement>(null);

  const handlePlanClick = (planId: string) => {
    if (planId === 'free' || planId === 'professional') {
      toast.success('Redirecting to sign up...');
    } else {
      toast.info('Contact our sales team for more details.');
    }
  };

  const toggleCompare = () => {
    setShowCompare((prev) => !prev);
  };

  useEffect(() => {
    if (showCompare && compareRef.current) {
      compareRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showCompare]);

  // Build comparison rows from all plan features
  const compareRows = [
    { feature: 'Unlimited public storage', free: true, standard: true, professional: true, enterprise: true },
    { feature: 'CAD tools', free: true, standard: true, professional: true, enterprise: true },
    { feature: 'Real-time collaboration', free: true, standard: true, professional: true, enterprise: true },
    { feature: 'Version control', free: true, standard: true, professional: true, enterprise: true },
    { feature: 'Mobile apps', free: true, standard: true, professional: true, enterprise: true },
    { feature: 'Online training', free: true, standard: true, professional: true, enterprise: true },
    { feature: 'Unlimited private storage', free: false, standard: true, professional: true, enterprise: true },
    { feature: 'Direct, In Product Support', free: false, standard: true, professional: true, enterprise: true },
    { feature: 'Company-managed data', free: false, standard: false, professional: true, enterprise: true },
    { feature: 'Release management', free: false, standard: false, professional: true, enterprise: true },
    { feature: 'Advanced PDM', free: false, standard: false, professional: true, enterprise: true },
    { feature: 'Simulation', free: false, standard: false, professional: true, enterprise: true },
    { feature: 'Rendering', free: false, standard: false, professional: true, enterprise: true },
    { feature: 'ECAD/MCAD exchange', free: false, standard: false, professional: true, enterprise: true },
    { feature: 'CAM', free: false, standard: false, professional: true, enterprise: true },
    { feature: 'Custom Release Management', free: false, standard: false, professional: false, enterprise: true },
    { feature: 'Analytics and Dashboards', free: false, standard: false, professional: false, enterprise: true },
    { feature: 'Arena PLM Connection', free: false, standard: false, professional: false, enterprise: true },
    { feature: 'Advanced Admin and Security (SSO)', free: false, standard: false, professional: false, enterprise: true },
    { feature: 'Guest access', free: false, standard: false, professional: false, enterprise: true },
    { feature: 'Priority Support', free: false, standard: false, professional: false, enterprise: true },
  ];

  return (
    <div className="bg-[#f5f5f5]">
      {/* Hero */}
      <section className="w-full bg-[#f5f5f5] pt-16 pb-10 md:pt-20 md:pb-14">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-4xl font-bold text-[#3c4446] md:text-5xl"
          >
            {MOCK_PRICING_CONTENT.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-lg text-foreground/60"
          >
            {MOCK_PRICING_CONTENT.heroSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-3 text-sm"
          >
            <span className="font-semibold text-foreground/70">Showing prices in</span>
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger className="h-9 w-[100px] border-foreground/30 bg-white">
                <SelectValue placeholder={currency} />
              </SelectTrigger>
              <SelectContent>
                {MOCK_PRICING_CONTENT.currencies.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="text-foreground/60">
              Need help?{' '}
              <UniversalLink
                to={MOCK_PRICING_CONTENT.salesContactUrl}
                className="font-semibold text-[#00a651] underline underline-offset-2 hover:text-[#008f45]"
              >
                {MOCK_PRICING_CONTENT.salesContactText}
              </UniversalLink>
            </span>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="w-full bg-[#f5f5f5] pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {MOCK_PRICING_PLANS.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className={`relative flex flex-col bg-white shadow-md ${
                  plan.isRecommended ? 'ring-2 ring-[#00a651]' : 'border border-border/60'
                }`}
              >
                {/* Card header */}
                <div className="border-b border-border/60 p-6 text-center">
                  <h3
                    className={`mb-1 text-xl font-bold ${
                      plan.isRecommended ? 'text-[#00a651]' : 'text-[#3c4446]'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p className="mb-6 text-[10px] font-bold uppercase tracking-widest text-foreground/40">
                    {plan.tagline}
                  </p>
                  <div
                    className={`mb-1 text-3xl font-bold ${
                      plan.isRecommended ? 'text-[#00a651]' : 'text-[#3c4446]'
                    }`}
                  >
                    {plan.price}
                  </div>
                  {plan.priceSubtitle && (
                    <p className="mb-5 text-xs text-foreground/50">{plan.priceSubtitle}</p>
                  )}
                  {!plan.priceSubtitle && plan.id === 'enterprise' && (
                    <div className="mb-5" />
                  )}
                  <Button
                    variant={plan.buttonVariant === 'solid' ? 'default' : 'outline'}
                    className={
                      plan.buttonVariant === 'solid'
                        ? 'w-full bg-[#00a651] text-white hover:bg-[#008f45]'
                        : 'w-full border-2 border-[#00a651] text-[#00a651] hover:bg-[#f0f7f0] hover:text-[#00a651]'
                    }
                    onClick={() => handlePlanClick(plan.id)}
                  >
                    {plan.buttonText}
                  </Button>
                </div>

                {/* Features list */}
                <div className="flex-1 p-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#00a651]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Promotion box */}
                  {plan.promotionText && (
                    <div className="mt-6 rounded-sm bg-[#d4e4f0] p-4 text-center text-xs italic text-[#2d3436]">
                      {plan.promotionText}
                    </div>
                  )}
                </div>

                {/* Footer note */}
                <div
                  className={`border-t p-4 text-center text-xs text-foreground/50 ${
                    plan.isRecommended ? 'border-t-[#00a651]' : ''
                  }`}
                >
                  {plan.footerNote}
                </div>

                {/* Bottom green bar for recommended */}
                {plan.isRecommended && (
                  <div className="h-1.5 w-full bg-[#00a651]" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Compare button */}
          <div className="mt-12 flex justify-center">
            <Button
              variant="outline"
              className="border-[#3c4446] bg-[#3c4446] text-white hover:bg-[#2d3436] hover:text-white"
              onClick={toggleCompare}
              aria-expanded={showCompare}
            >
              {MOCK_PRICING_CONTENT.compareButtonText}
              {showCompare ? (
                <ChevronUp className="ml-1 h-4 w-4" />
              ) : (
                <ChevronDown className="ml-1 h-4 w-4" />
              )}
            </Button>
          </div>

          {/* Comparison table */}
          <AnimatePresence>
            {showCompare && (
              <motion.div
                ref={compareRef}
                key="compare-table"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden mt-10"
              >
                <div className="overflow-x-auto bg-white border border-border shadow-md">
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="px-6 py-4 text-left text-sm font-bold text-[#2d3436]">FEATURES</th>
                        {MOCK_PRICING_PLANS.map((plan) => (
                          <th
                            key={plan.id}
                            className={`px-4 py-4 text-center text-sm font-bold ${
                              plan.isRecommended ? 'text-[#00a651]' : 'text-[#2d3436]'
                            }`}
                          >
                            {plan.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {compareRows.map((row, i) => (
                        <tr key={i} className="border-b border-border/60 hover:bg-muted/20">
                          <td className="px-6 py-3 text-sm text-foreground/70">{row.feature}</td>
                          <td className="px-4 py-3 text-center">
                            {row.free ? (
                              <Check className="mx-auto h-5 w-5 text-[#00a651]" />
                            ) : (
                              <X className="mx-auto h-5 w-5 text-foreground/20" />
                            )}
                          </td>
                          <td className="px-4 py-3 text-center">
                            {row.standard ? (
                              <Check className="mx-auto h-5 w-5 text-[#00a651]" />
                            ) : (
                              <X className="mx-auto h-5 w-5 text-foreground/20" />
                            )}
                          </td>
                          <td className="px-4 py-3 text-center">
                            {row.professional ? (
                              <Check className="mx-auto h-5 w-5 text-[#00a651]" />
                            ) : (
                              <X className="mx-auto h-5 w-5 text-foreground/20" />
                            )}
                          </td>
                          <td className="px-4 py-3 text-center">
                            {row.enterprise ? (
                              <Check className="mx-auto h-5 w-5 text-[#00a651]" />
                            ) : (
                              <X className="mx-auto h-5 w-5 text-foreground/20" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
