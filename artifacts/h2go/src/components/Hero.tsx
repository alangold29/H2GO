import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-secondary/40 blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 text-secondary-foreground font-semibold text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {t('Premium Swim School in Lima', 'Escuela de Natación Premium en Lima')}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
              {t('Confidence', 'La Confianza')} <br />
              {t('Starts in the', 'Comienza en el')}{' '}
              <span className="text-gradient">
                {t('Water', 'Agua')}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              {t(
                'Professional swim lessons in Lima for children, teens, and adults — taught in a safe, fun, and supportive environment.',
                'Clases profesionales de natación en Lima para niños, adolescentes y adultos, en un entorno seguro, divertido y de apoyo.'
              )}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#programs"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 border-8 border-white">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
              <img 
                src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=800&h=800" 
                alt="Kids learning to swim in pool" 
                className="w-full h-full object-cover"
              />
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-2xl">
                  💧
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{t('Heated Pool', 'Piscina Temperada')}</p>
                  <p className="text-xs text-muted-foreground">{t('Year-round comfort', 'Comodidad todo el año')}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
