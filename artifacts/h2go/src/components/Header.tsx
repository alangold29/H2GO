import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogIn } from 'lucide-react';

interface HeaderProps {
  solid?: boolean;
}

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: '¿Cómo Matricularme?', href: '/matricula' },
  { label: 'Nuestra Metodología', href: '/metodologia' },
  { label: 'Nosotros', href: '/nosotros' },
];

export default function Header({ solid = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (solid) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [solid]);

  const headerClass = solid
    ? 'relative w-full bg-white border-b border-border py-3 z-50'
    : `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`;

  return (
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group shrink-0">
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
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/login"
              title="Iniciar sesión"
              className="flex items-center justify-center w-9 h-9 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-200"
            >
              <LogIn className="w-5 h-5" />
            </a>
            <a
              href="/matricula"
              className="px-5 py-2.5 rounded-full font-semibold text-sm bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
            >
              Matricúlate
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
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
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-foreground/90 py-3 px-2 border-b border-muted hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center justify-between pt-5 mt-1">
                <a
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-sm font-semibold text-foreground/70 hover:text-primary transition-colors"
                >
                  <LogIn className="w-5 h-5" />
                  Iniciar sesión
                </a>
                <a
                  href="/matricula"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 rounded-xl font-bold text-sm bg-primary text-white shadow-lg shadow-primary/25"
                >
                  Matricúlate
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
