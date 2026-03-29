import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Programs from '@/components/Programs';
import WhyChooseUs from '@/components/WhyChooseUs';
import Methodology from '@/components/Methodology';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
        <Header />
        
        <main className="flex-1">
          <Hero />
          <TrustStrip />
          <Programs />
          <WhyChooseUs />
          <Methodology />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </main>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
}
