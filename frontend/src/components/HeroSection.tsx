export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/archak-seva-hero.dim_1440x600.png')" }}
      />
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-brown/75 via-saffron-deep/50 to-forest/60" />
      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-saffron/20 backdrop-blur-sm border border-saffron/40 text-cream px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
          Serving Communities Since 2010
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-cream leading-tight mb-4">
          Archak Seva
        </h1>
        <p className="font-serif text-xl sm:text-2xl md:text-3xl text-saffron-light italic mb-6">
          सेवा परमो धर्मः — Service is the Highest Duty
        </p>
        <p className="text-cream/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-sans">
          Empowering communities through education, healthcare, and sustainable livelihoods.
          Together, we build a future where every life flourishes with dignity and hope.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleScroll('#get-involved')}
            className="px-8 py-4 bg-saffron text-cream font-semibold text-lg rounded-full hover:bg-saffron-deep transition-all shadow-warm-lg hover:shadow-warm hover:-translate-y-0.5 active:translate-y-0"
          >
            Join Our Mission
          </button>
          <button
            onClick={() => handleScroll('#about')}
            className="px-8 py-4 bg-transparent border-2 border-cream/70 text-cream font-semibold text-lg rounded-full hover:bg-cream/10 hover:border-cream transition-all"
          >
            Learn More
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-cream/60 text-sm">
          <span>Scroll to explore</span>
          <div className="w-px h-8 bg-cream/40 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
