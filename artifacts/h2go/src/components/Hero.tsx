import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=800&h=800',
    badge: { icon: '🏊', en: 'Kids Swim Lessons', es: 'Clases para Niños' },
    tag: { en: '4 – 12 yrs', es: '4 – 12 años' },
  },
  {
    img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800&h=800',
    badge: { icon: '👶', en: 'Babies & Toddlers', es: 'Bebés y Pequeños' },
    tag: { en: 'From 6 months', es: 'Desde 6 meses' },
  },
  {
    img: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80&w=800&h=800',
    badge: { icon: '🧑‍🤝‍🧑', en: 'Adult Classes', es: 'Clases para Adultos' },
    tag: { en: 'All levels welcome', es: 'Todos los niveles' },
  },
  {
    img: '/images/swimmer-h2go.jpg',
    badge: { icon: '🎯', en: 'Private Coaching', es: 'Clases Privadas' },
    tag: { en: '1-on-1 attention', es: 'Atención individual' },
  },
  {
    img: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&q=80&w=800&h=800',
    badge: { icon: '✅', en: 'Heated Clean Pool', es: 'Piscina Temperada' },
    tag: { en: 'Year-round comfort', es: 'Comodidad todo el año' },
  },
  {
    img: 'https://images.unsplash.com/photo-1560090995-01632a28895b?auto=format&fit=crop&q=80&w=800&h=800',
    badge: { icon: '🏅', en: 'Small Group Classes', es: 'Grupos Pequeños' },
    tag: { en: 'Personalized progress', es: 'Progreso personalizado' },
  },
];

export default function Hero() {
  const { t, lang } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [paused]);

  const prev = () => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
    setPaused(true);
  };
  const next = () => {
    setCurrent((c) => (c + 1) % slides.length);
    setPaused(true);
  };
  const goTo = (i: number) => {
    setCurrent(i);
    setPaused(true);
  };

  const slide = slides[current];

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Water video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://assets.mixkit.co/videos/preview/mixkit-swimming-pool-water-loop-4017-large.mp4"
      />
      {/* CSS shimmer fallback — visible if video hasn't loaded yet */}
      <div className="absolute inset-0 z-0 water-shimmer-bg" />
      {/* Overlay — shows white/blue with water visible through it */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/78 via-sky-50/68 to-white/84" />

      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-secondary/40 blur-3xl opacity-50 z-[2]" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-50 z-[2]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left text */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 text-secondary-foreground font-semibold text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {t('Premium Swim School in Lima', 'Escuela de Natación Premium en Lima')}
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
              {t('Confidence', 'La Confianza')} <br />
              {t('Starts in the', 'Comienza en el')}{' '}
              <span className="text-gradient">{t('Water', 'Agua')}</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              {t(
                'Professional swim lessons in Lima for children, teens, and adults — taught in a safe, fun, and supportive environment.',
                'Clases profesionales de natación en Lima para niños, adolescentes y adultos, en un entorno seguro, divertido y de apoyo.'
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary rounded-2xl shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
              >
                {t('Book a Trial Class', 'Reserva una Clase')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-foreground bg-white border-2 border-border rounded-2xl hover:border-primary/50 hover:bg-slate-50 transition-all duration-300"
              >
                <PlayCircle className="w-5 h-5 mr-2 text-primary" />
                {t('View Programs', 'Ver Programas')}
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              {t(
                'Safe, fun swim lessons for children, teens, and adults in Lima.',
                'Clases de natación seguras y divertidas para niños, adolescentes y adultos en Lima.'
              )}
            </p>
          </div>

          {/* Right slider */}
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 border-8 border-white">

              {/* Slides */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <img
                    src={slide.img}
                    alt={lang === 'en' ? slide.badge.en : slide.badge.es}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next arrows */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-md hover:bg-white hover:scale-110 transition-all"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-md hover:bg-white hover:scale-110 transition-all"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 bg-primary'
                      : 'w-2 bg-primary/25 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
