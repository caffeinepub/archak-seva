import { Heart, Eye, Target } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-saffron font-semibold text-sm uppercase tracking-widest mb-3">
            Who We Are
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-warm-brown mb-4">
            About Archak Seva
          </h2>
          <div className="w-16 h-1 bg-saffron mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Story */}
          <div>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6 font-sans">
              Founded in 2010, <strong className="text-warm-brown font-semibold">Archak Seva</strong> is a
              grassroots non-governmental organization dedicated to uplifting marginalized communities
              across rural and semi-urban India. The name "Archak" means <em>one who worships through
              service</em> — reflecting our belief that true devotion lies in selfless action.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed mb-8 font-sans">
              Over the past decade, we have touched thousands of lives through our integrated programs
              in education, healthcare, women's empowerment, and environmental sustainability. We work
              hand-in-hand with local communities, respecting their wisdom and amplifying their voices.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Education', 'Healthcare', 'Women Empowerment', 'Environment', 'Livelihood'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-saffron/10 text-saffron-deep border border-saffron/30 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Mission / Vision / Values cards */}
          <div className="flex flex-col gap-5">
            <div className="bg-card rounded-2xl p-6 shadow-warm border border-saffron/15 flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-saffron/15 flex items-center justify-center">
                <Target className="w-6 h-6 text-saffron-deep" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-warm-brown mb-2">Our Mission</h3>
                <p className="text-foreground/75 text-sm leading-relaxed font-sans">
                  To create sustainable, community-led solutions that address poverty, inequality, and
                  lack of access to basic services — enabling every individual to live with dignity.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-warm border border-forest/15 flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center">
                <Eye className="w-6 h-6 text-forest" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-warm-brown mb-2">Our Vision</h3>
                <p className="text-foreground/75 text-sm leading-relaxed font-sans">
                  A just and equitable society where every person — regardless of caste, gender, or
                  economic status — has the opportunity to thrive and contribute to their community.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-warm border border-terracotta/15 flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-terracotta" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-warm-brown mb-2">Our Values</h3>
                <p className="text-foreground/75 text-sm leading-relaxed font-sans">
                  Compassion, transparency, community ownership, and non-discrimination guide every
                  decision we make and every program we run.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
