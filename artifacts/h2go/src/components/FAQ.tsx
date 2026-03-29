import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: t('What ages do you teach?', '¿A qué edades enseñan?'),
      a: t(
        'We teach all ages! Our programs start from babies as young as 6 months (with parents) all the way up to adults and seniors.',
        '¡Enseñamos a todas las edades! Nuestros programas comienzan desde bebés de 6 meses (con padres) hasta adultos y personas mayores.'
      )
    },
    {
      q: t('Do you offer beginner lessons?', '¿Ofrecen clases para principiantes?'),
      a: t(
        'Absolutely! Many of our students start with zero swimming experience. Our beginner program is designed to build comfort and confidence gradually.',
        '¡Absolutamente! Muchos de nuestros alumnos comienzan sin experiencia en natación. Nuestro programa para principiantes está diseñado para generar comodidad y confianza gradualmente.'
      )
    },
    {
      q: t('Are private lessons available?', '¿Hay clases privadas disponibles?'),
      a: t(
        'Yes! We offer one-on-one private coaching sessions for all ages and skill levels. Private lessons allow for personalized attention and faster progress.',
        '¡Sí! Ofrecemos sesiones de coaching privado individual para todas las edades y niveles. Las clases privadas permiten atención personalizada y progreso más rápido.'
      )
    },
    {
      q: t('Is the pool heated?', '¿La piscina es temperada?'),
      a: t(
        'Yes, our pool is maintained at a comfortable, warm temperature year-round, making it perfect for babies and comfortable learning.',
        'Sí, nuestra piscina se mantiene a una temperatura cálida y confortable durante todo el año, ideal para bebés y un aprendizaje cómodo.'
      )
    },
    {
      q: t('Can I start with a trial class?', '¿Puedo empezar con una clase de prueba?'),
      a: t(
        'Absolutely! We offer a trial class so you or your child can experience our methodology and meet the instructors before committing to a package.',
        '¡Absolutamente! Ofrecemos una clase de prueba para que tú o tu hijo puedan experimentar nuestra metodología antes de comprometerse con un paquete.'
      )
    },
    {
      q: t('Is Spanish available?', '¿Las clases están disponibles en español?'),
      a: t(
        'Yes! Many of our instructors are bilingual (English and Spanish), making our school perfect for both local families and expats living in Lima.',
        '¡Sí! Muchos de nuestros instructores son bilingües (inglés y español), lo que hace que nuestra escuela sea perfecta tanto para familias locales como expatriados en Lima.'
      )
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
            FAQ
          </h2>
          <h3 className="text-4xl font-extrabold">
            {t('Frequently Asked ', 'Preguntas ')}
            <span className="text-gradient">{t('Questions', 'Frecuentes')}</span>
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between bg-white text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-lg">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-300 shrink-0 ml-4 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-5 pt-2 text-muted-foreground border-t border-border/50 bg-slate-50/50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
