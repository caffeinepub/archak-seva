import { BookOpen, Stethoscope, Leaf, Users, Sprout, Home } from 'lucide-react';

const programs = [
  {
    icon: BookOpen,
    title: 'Shiksha Jyoti',
    subtitle: 'Education Program',
    description:
      'Providing quality education to underprivileged children through community learning centers, scholarships, and digital literacy initiatives.',
    color: 'saffron',
    stats: '2,400+ children enrolled',
  },
  {
    icon: Stethoscope,
    title: 'Arogya Seva',
    subtitle: 'Healthcare Initiative',
    description:
      'Mobile health clinics, maternal care, nutrition programs, and preventive health camps reaching remote villages with essential medical services.',
    color: 'terracotta',
    stats: '15,000+ patients served',
  },
  {
    icon: Users,
    title: 'Shakti Mahila',
    subtitle: 'Women Empowerment',
    description:
      'Self-help groups, vocational training, microfinance support, and legal awareness programs empowering women to become financially independent.',
    color: 'forest',
    stats: '800+ women empowered',
  },
  {
    icon: Sprout,
    title: 'Harit Bhumi',
    subtitle: 'Environmental Program',
    description:
      'Tree plantation drives, organic farming promotion, water conservation, and clean energy adoption for a sustainable future.',
    color: 'forest',
    stats: '50,000+ trees planted',
  },
  {
    icon: Home,
    title: 'Aashray',
    subtitle: 'Shelter & Sanitation',
    description:
      'Building dignified housing, clean toilets, and safe drinking water infrastructure for families living in extreme poverty.',
    color: 'saffron',
    stats: '320+ homes improved',
  },
  {
    icon: Leaf,
    title: 'Jeevika',
    subtitle: 'Livelihood Program',
    description:
      'Skill development, artisan cooperatives, and market linkages helping rural families build sustainable income sources.',
    color: 'terracotta',
    stats: '1,200+ livelihoods created',
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string; badge: string }> = {
  saffron: {
    bg: 'bg-saffron/8',
    icon: 'bg-saffron/15 text-saffron-deep',
    border: 'border-saffron/20',
    badge: 'bg-saffron/10 text-saffron-deep',
  },
  terracotta: {
    bg: 'bg-terracotta/8',
    icon: 'bg-terracotta/15 text-terracotta',
    border: 'border-terracotta/20',
    badge: 'bg-terracotta/10 text-terracotta',
  },
  forest: {
    bg: 'bg-forest/8',
    icon: 'bg-forest/10 text-forest',
    border: 'border-forest/20',
    badge: 'bg-forest/10 text-forest',
  },
};

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-20 md:py-28 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-forest font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-warm-brown mb-4">
            Our Programs
          </h2>
          <div className="w-16 h-1 bg-forest mx-auto rounded-full mb-6" />
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto font-sans">
            Six integrated programs addressing the root causes of poverty and inequality,
            designed with and for the communities we serve.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => {
            const colors = colorMap[program.color];
            const Icon = program.icon;
            return (
              <div
                key={program.title}
                className={`bg-card rounded-2xl p-6 border ${colors.border} shadow-warm hover:shadow-warm-lg transition-all hover:-translate-y-1 group`}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-warm-brown mb-1">
                  {program.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-3 font-sans">
                  {program.subtitle}
                </p>
                <p className="text-foreground/75 text-sm leading-relaxed mb-4 font-sans">
                  {program.description}
                </p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>
                  {program.stats}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
