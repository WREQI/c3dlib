import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Building,
  MessageSquare,
  Send,
  Headphones,
  Briefcase,
  Globe,
} from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const OFFICES = [
  {
    city: 'Cambridge, MA',
    country: 'United States',
    address: '100 Main Street, Cambridge, MA 02142',
    phone: '+1 (617) 812-0070',
    isHQ: true,
  },
  {
    city: 'Plymouth, MI',
    country: 'United States',
    address: '40575 Ann Arbor Road, Plymouth, MI 48170',
    phone: '+1 (734) 582-9000',
  },
  {
    city: 'Toronto',
    country: 'Canada',
    address: '214 King Street West, Suite 1500, Toronto, ON M5H 3S6',
    phone: '+1 (416) 234-5678',
  },
  {
    city: 'Reading',
    country: 'United Kingdom',
    address: '245 Bath Road, Reading, Berkshire RG1 6BR',
    phone: '+44 (0)118 926 6100',
  },
  {
    city: 'Munich',
    country: 'Germany',
    address: 'Leopoldstrasse 244, 80807 Munchen',
    phone: '+49 (0)89 2154 4560',
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    address: 'Marunouchi Building, 2-4-1 Marunouchi, Chiyoda-ku, Tokyo 100-6390',
    phone: '+81 (0)3 6267 2100',
  },
  {
    city: 'Seoul',
    country: 'Korea',
    address: 'Seoul Finance Center, 136 Sejong-daero, Jung-gu, Seoul 04520',
    phone: '+82 (0)2 3783 3500',
  },
  {
    city: 'Shanghai',
    country: 'China',
    address: '1266 Nanjing West Road, Shanghai 200040',
    phone: '+86 (0)21 2285 2000',
  },
];

const CONTACT_METHODS = [
  {
    icon: Briefcase,
    title: 'Sales Inquiry',
    description: 'Learn about pricing, plans, and enterprise solutions.',
    action: 'Talk to Sales',
    actionHref: 'mailto:sales@onshape.com',
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    description: 'Get help with technical issues and product questions.',
    action: 'Contact Support',
    actionHref: 'mailto:support@onshape.com',
  },
  {
    icon: MessageSquare,
    title: 'Press & Media',
    description: 'Press inquiries and media partnership opportunities.',
    action: 'Media Contact',
    actionHref: 'mailto:press@onshape.com',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    if (!formData.email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    toast.success('Thank you! We will get back to you shortly.');
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="w-full border-b border-border bg-[#f8f9f8] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#00a651]">
              COMPANY
            </div>
            <h1 className="mb-4 text-3xl font-bold text-[#2d3436] md:text-4xl">
              Contact Us
            </h1>
            <p className="mx-auto max-w-2xl text-base text-foreground/70">
              Get in touch with our team for questions, demos, or pricing
              information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <Card className="border-border bg-white">
                <CardContent className="p-6 md:p-8">
                  <h2 className="mb-2 text-xl font-bold text-[#2d3436]">
                    Send us a message
                  </h2>
                  <p className="mb-6 text-sm text-foreground/60">
                    Fill out the form below and a member of our team will get
                    back to you within one business day.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70">
                          Name <span className="text-destructive">*</span>
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="h-11"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70">
                          Company
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="h-11"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70">
                          Email <span className="text-destructive">*</span>
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="h-11"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70">
                          Phone
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          className="h-11"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70">
                        Message <span className="text-destructive">*</span>
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={6}
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="h-12 w-full bg-[#00a651] font-bold uppercase tracking-wider text-white hover:bg-[#008f45] disabled:opacity-50"
                    >
                      {submitting ? 'Sending...' : 'Send Message'}
                      {!submitting && <Send className="ml-2 h-4 w-4" />}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right: Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 lg:col-span-2"
            >
              {CONTACT_METHODS.map((method, i) => {
                const Icon = method.icon;
                return (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Card className="border-border bg-white">
                      <CardContent className="flex items-start gap-4 p-5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#e8f7ef]">
                          <Icon className="h-5 w-5 text-[#00a651]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-[#2d3436]">
                            {method.title}
                          </h3>
                          <p className="mt-1 text-xs text-foreground/60">
                            {method.description}
                          </p>
                          <button
                            onClick={() =>
                              toast.success(
                                `Contacting ${method.title.toLowerCase()}...`
                              )
                            }
                            className="mt-3 text-xs font-semibold text-[#00a651] hover:underline"
                          >
                            {method.action} →
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Card className="border-border bg-[#f8f9f8]">
                  <CardContent className="p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <Building className="h-5 w-5 text-[#00a651]" />
                      <h3 className="text-sm font-semibold text-[#2d3436]">
                        Headquarters
                      </h3>
                    </div>
                    <p className="text-xs font-semibold text-foreground">
                      Cambridge, MA, USA
                    </p>
                    <p className="mt-1 text-xs text-foreground/60">
                      100 Main Street, Cambridge, MA 02142
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-foreground/60">
                      <Phone className="h-3 w-3" />
                      +1 (617) 812-0070
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-xs text-foreground/60">
                      <Mail className="h-3 w-3" />
                      info@onshape.com
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="w-full bg-[#f8f9f8] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <div className="mb-3 flex items-center justify-center gap-2">
              <Globe className="h-5 w-5 text-[#00a651]" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-[#2d3436] md:text-3xl">
              Global Offices
            </h2>
            <p className="mx-auto max-w-2xl text-foreground/60">
              With offices around the world, our team is always ready to help.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {OFFICES.map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Card className="h-full border-border bg-white">
                  <CardContent className="p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#00a651]" />
                      <span className="text-sm font-semibold text-[#2d3436]">
                        {office.city}
                      </span>
                      {office.isHQ && (
                        <span className="rounded bg-[#e8f7ef] px-1.5 py-0.5 text-[9px] font-bold uppercase text-[#00a651]">
                          HQ
                        </span>
                      )}
                    </div>
                    <p className="mb-2 text-xs font-medium text-foreground/70">
                      {office.country}
                    </p>
                    <p className="mb-2 text-xs text-foreground/60">
                      {office.address}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-foreground/60">
                      <Phone className="h-3 w-3" />
                      {office.phone}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
