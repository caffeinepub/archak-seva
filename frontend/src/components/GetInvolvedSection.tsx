import { HandHeart, Users, Share2, IndianRupee } from 'lucide-react';

const ways = [
  {
    icon: IndianRupee,
    title: 'Donate',
    description:
      'Your contribution — big or small — directly funds our programs. Every rupee is accounted for with full transparency.',
    cta: 'Donate Now',
    color: 'saffron',
    highlight: true,
  },
  {
    icon: HandHeart,
    title: 'Volunteer',
    description:
      'Offer your time, skills, and energy. We welcome teachers, doctors, engineers, and anyone with a heart to serve.',
    cta: 'Become a Volunteer',
    color: 'forest',
    highlight: false,
  },
  {
    icon: Users,
    title: 'Partner With Us',
    description:
      'CSR partnerships, institutional collaborations, and co-implementation opportunities for organizations that share our values.',
    cta: 'Explore Partnership',
    color: 'terracotta',
    highlight: false,
  },
  {
    icon: Share2,
    title: 'Spread the Word',
    description:
      'Share our work on social media, talk about us in your community, and help us reach more people who need support.',
    cta: 'Share Our Story',
    color: 'saffron',
    highlight: false,
  },
];

export default function GetInvolvedSection() {
  const handleContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="get-involved" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-terracotta font-semibold text-sm uppercase tracking-widest mb-3">
            Take Action
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-warm-brown mb-4">
            Get Involved
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto rounded-full mb-6" />
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto font-sans">
            Change begins with a single step. Here are four meaningful ways you can be part of
            the Archak Seva family.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {ways.map((way) => {
            const Icon = way.icon;
            const colorMap: Record<string, { icon: string; btn: string; border: string }> = {
              saffron: {
                icon: 'bg-saffron/15 text-saffron-deep',
                btn: 'bg-saffron text-cream hover:bg-saffron-deep',
                border: 'border-saffron/25',
              },
              forest: {
                icon: 'bg-forest/10 text-forest',
                btn: 'bg-forest text-cream hover:bg-forest/80',
                border: 'border-forest/25',
              },
              terracotta: {
                icon: 'bg-terracotta/15 text-terracotta',
                btn: 'bg-terracotta text-cream hover:bg-terracotta/80',
                border: 'border-terracotta/25',
              },
            };
            const colors = colorMap[way.color];
            return (
              <div
                key={way.title}
                className={`bg-card rounded-2xl p-6 border ${colors.border} shadow-warm hover:shadow-warm-lg transition-all hover:-translate-y-1 flex flex-col ${
                  way.highlight ? 'ring-2 ring-saffron/40' : ''
                }`}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-warm-brown mb-2">{way.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-5 flex-1 font-sans">
                  {way.description}
                </p>
                <button
                  onClick={handleContact}
                  className={`w-full py-2.5 px-4 rounded-full text-sm font-semibold transition-colors ${colors.btn}`}
                >
                  {way.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* Banner CTA */}
        <div className="bg-gradient-to-r from-saffron-deep via-saffron to-terracotta rounded-3xl p-8 md:p-12 text-center text-cream shadow-warm-lg">
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-3">
            Ready to Make a Difference?
          </h3>
          <p className="text-cream/85 text-lg mb-7 max-w-xl mx-auto font-sans">
            Join thousands of changemakers who are already part of the Archak Seva movement.
          </p>
          <button
            onClick={handleContact}
            className="px-10 py-4 bg-cream text-saffron-deep font-bold text-lg rounded-full hover:bg-cream-dark transition-colors shadow-warm"
          >
            Connect With Us Today
          </button>
        </div>
      </div>
    </section>
  );
}
