import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission (no backend for contact form)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: '42, Seva Marg, Jaipur, Rajasthan – 302001, India',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'connect@archakseva.org',
    },
    {
      icon: Clock,
      label: 'Office Hours',
      value: 'Mon – Sat: 9:00 AM – 6:00 PM',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-saffron font-semibold text-sm uppercase tracking-widest mb-3">
            Reach Out
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-warm-brown mb-4">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-saffron mx-auto rounded-full mb-6" />
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto font-sans">
            Have questions, ideas, or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="bg-warm-brown rounded-2xl p-7 text-cream">
              <h3 className="font-serif text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="flex flex-col gap-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-saffron/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-saffron" />
                      </div>
                      <div>
                        <p className="text-cream/60 text-xs uppercase tracking-wider mb-0.5 font-sans">
                          {item.label}
                        </p>
                        <p className="text-cream text-sm font-medium font-sans">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social / Extra */}
            <div className="bg-forest/10 border border-forest/20 rounded-2xl p-6">
              <h4 className="font-serif text-lg font-bold text-warm-brown mb-2">
                Registered NGO
              </h4>
              <p className="text-foreground/65 text-sm font-sans leading-relaxed">
                Archak Seva is registered under the Societies Registration Act, 1860.
                FCRA approved. 80G & 12A certified for tax exemption.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['80G Certified', '12A Certified', 'FCRA Approved'].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 bg-forest/10 text-forest border border-forest/25 rounded-full text-xs font-semibold"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-card rounded-2xl p-7 md:p-9 shadow-warm border border-saffron/15">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle className="w-16 h-16 text-forest mb-4" />
                <h3 className="font-serif text-2xl font-bold text-warm-brown mb-2">
                  Message Received!
                </h3>
                <p className="text-foreground/70 font-sans max-w-sm">
                  Thank you for reaching out. Our team will get back to you within 24–48 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-6 px-6 py-2.5 bg-saffron text-cream rounded-full text-sm font-semibold hover:bg-saffron-deep transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-serif text-2xl font-bold text-warm-brown mb-1">
                  Send Us a Message
                </h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground/80">
                      Full Name <span className="text-terracotta">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="border-border focus:border-saffron focus:ring-saffron/20 bg-background"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground/80">
                      Email Address <span className="text-terracotta">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="border-border focus:border-saffron focus:ring-saffron/20 bg-background"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="subject" className="text-sm font-medium text-foreground/80">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="border-border focus:border-saffron focus:ring-saffron/20 bg-background"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground/80">
                    Message <span className="text-terracotta">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your interest, question, or idea..."
                    required
                    rows={5}
                    className="border-border focus:border-saffron focus:ring-saffron/20 bg-background resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-saffron text-cream font-semibold rounded-full hover:bg-saffron-deep transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-warm"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-cream/40 border-t-cream rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
