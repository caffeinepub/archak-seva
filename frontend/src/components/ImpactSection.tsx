import { useEffect, useRef, useState } from 'react';
import { TrendingUp, MapPin, Award, Globe } from 'lucide-react';

const stats = [
  { value: 18000, suffix: '+', label: 'Lives Impacted', icon: TrendingUp, color: 'saffron' },
  { value: 120, suffix: '+', label: 'Villages Reached', icon: MapPin, color: 'terracotta' },
  { value: 14, suffix: '', label: 'Years of Service', icon: Award, color: 'forest' },
  { value: 50, suffix: '+', label: 'Partner Organizations', icon: Globe, color: 'saffron' },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({
  stat,
  animate,
}: {
  stat: (typeof stats)[0];
  animate: boolean;
}) {
  const count = useCountUp(stat.value, 1800, animate);
  const Icon = stat.icon;
  const colorClasses: Record<string, { icon: string; text: string }> = {
    saffron: { icon: 'bg-saffron/15 text-saffron-deep', text: 'text-saffron-deep' },
    terracotta: { icon: 'bg-terracotta/15 text-terracotta', text: 'text-terracotta' },
    forest: { icon: 'bg-forest/10 text-forest', text: 'text-forest' },
  };
  const colors = colorClasses[stat.color];

  return (
    <div className="flex flex-col items-center text-center p-8 bg-card rounded-2xl shadow-warm border border-saffron/10 hover:shadow-warm-lg transition-all">
      <div className={`w-14 h-14 rounded-2xl ${colors.icon} flex items-center justify-center mb-4`}>
        <Icon className="w-7 h-7" />
      </div>
      <div className={`font-serif text-5xl font-bold ${colors.text} mb-1`}>
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-foreground/65 text-sm font-medium uppercase tracking-wider font-sans">
        {stat.label}
      </div>
    </div>
  );
}

export default function ImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="impact" className="py-20 md:py-28 bg-warm-brown relative overflow-hidden" ref={sectionRef}>
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-saffron -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-forest translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-saffron font-semibold text-sm uppercase tracking-widest mb-3">
            Our Impact
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-4">
            Numbers That Matter
          </h2>
          <div className="w-16 h-1 bg-saffron mx-auto rounded-full mb-6" />
          <p className="text-cream/70 text-lg max-w-2xl mx-auto font-sans">
            Every number represents a real person, a transformed life, a community that dared to dream.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} animate={hasAnimated} />
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto bg-saffron/15 backdrop-blur-sm border border-saffron/30 rounded-3xl p-8 md:p-10 text-center">
          <div className="text-saffron text-5xl font-serif mb-4">"</div>
          <p className="text-cream text-lg md:text-xl leading-relaxed font-serif italic mb-6">
            Archak Seva didn't just build a school in our village — they built hope. My daughter is
            now studying to become a doctor. That was unimaginable five years ago.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-saffron/30 flex items-center justify-center text-cream font-bold font-serif">
              R
            </div>
            <div className="text-left">
              <p className="text-cream font-semibold text-sm">Radha Devi</p>
              <p className="text-cream/60 text-xs">Beneficiary, Rajasthan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
