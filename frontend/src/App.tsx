import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import ImpactSection from './components/ImpactSection';
import GetInvolvedSection from './components/GetInvolvedSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <ImpactSection />
        <GetInvolvedSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
