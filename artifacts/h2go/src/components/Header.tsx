import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('Programs', 'Programas'), href: '#programs' },
    { label: t('Why Us', 'Por Qué Elegirnos'), href: '#why-us' },
    { label: t('Methodology', 'Metodología'), href: '#methodology' },
    { label: t('Testimonials', 'Testimonios'), href: '#testimonials' },
    { label: t('FAQ', 'Preguntas'), href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
               <img 
                 src={`${import.meta.env.BASE_URL}images/h2go-logo.png`} 
                 alt="H2GO Logo" 
                 className="w-8 h-8 object-contain"
               />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-primary">
              H2GO
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-sm font-semibold text-foreground/70 hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === 'en' ? 'EN / ES' : 'ES / EN'}</span>
            </button>
            <a
              href="/booking"
              className="px-5 py-2.5 rounded-full font-semibold text-sm bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              {t('Book a Trial', 'Reserva una Prueba')}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground/90 py-2 border-b border-muted"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={toggleLang}
                  className="flex items-center gap-2 text-base font-semibold"
                >
                  <Globe className="w-5 h-5" />
                  {lang === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
                </button>
              </div>
              <a
                href="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 w-full text-center px-6 py-3 rounded-xl font-bold bg-primary text-white shadow-lg shadow-primary/25"
              >
                {t('Book a Trial Class', 'Reserva una Clase de Prueba')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
