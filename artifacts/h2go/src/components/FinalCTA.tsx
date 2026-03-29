import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="water-gradient rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl shadow-primary/30 relative overflow-hidden"
        >
          {/* Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
              {t('Ready to Dive In?', '¿Listo para Sumergirte?')}
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
              {t(
                'Join H2GO today and give yourself or your child the gift of water confidence.',
                'Únete a H2GO hoy y date a ti o a tu hijo el regalo de la confianza en el agua.'
              )}
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); alert("Demo Action: Booking form opened!"); }}
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-primary bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {t('Book Your Trial Class', 'Reserva tu Clase de Prueba')}
              <ArrowRight className="w-6 h-6 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
