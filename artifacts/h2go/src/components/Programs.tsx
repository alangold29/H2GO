import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

export default function Programs() {
  const { t } = useLanguage();

  const programs = [
    {
      id: 1,
      title: t('Babies & Toddlers', 'Bebés y Niños Pequeños'),
      age: t('6 mos - 3 yrs', '6 meses - 3 años'),
      desc: t(
        'Water acclimation and basic safety skills with parent participation.',
        'Aclimatación al agua y habilidades básicas de seguridad con padres.'
      ),
      img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
      id: 2,
      title: t('Kids Swim Lessons', 'Clases para Niños'),
      age: t('4 yrs - 12 yrs', '4 - 12 años'),
      desc: t(
        'Building stroke technique, confidence, and aquatic survival skills.',
        'Desarrollo de técnica de nado, confianza y supervivencia acuática.'
      ),
      img: 'https://images.unsplash.com/photo-1560090995-01632a28895b?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
      id: 3,
      title: t('Teen Development', 'Desarrollo para Adolescentes'),
      age: t('13 yrs - 17 yrs', '13 - 17 años'),
      desc: t(
        'Advanced stroke refinement and fitness-focused swimming sessions.',
        'Refinamiento avanzado de técnica y natación enfocada en fitness.'
      ),
      img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
      id: 4,
      title: t('Adult Classes', 'Clases para Adultos'),
      age: '18+',
      desc: t(
        'From fearful beginners to advanced triathletes, learn at your pace.',
        'Desde principiantes hasta triatletas avanzados, aprende a tu ritmo.'
      ),
      img: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
      id: 5,
      title: t('Private Coaching', 'Clases Privadas'),
      age: t('All Ages', 'Todas las Edades'),
      desc: t(
        'One-on-one sessions tailored to your specific goals and pace.',
        'Sesiones individuales adaptadas a tus metas y ritmo específicos.'
      ),
      img: '/images/swimmer-h2go.jpg',
    },
  ];

  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
            {t('Our Programs', 'Nuestros Programas')}
          </h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold mb-6">
            {t('Swim Classes for ', 'Clases de Natación para ')}
            <span className="text-gradient">{t('Every Age', 'Todas las Edades')}</span>
          </h3>
          <p className="text-muted-foreground text-lg">
            {t(
              'We follow a proven methodology that ensures steady progress, safety, and most importantly, a love for the water.',
              'Seguimos una metodología probada que asegura un progreso constante, seguridad y, lo más importante, amor por el agua.'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-[2rem] overflow-hidden shadow-lg shadow-black/5 border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.img}
                  alt={program.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">
                  {program.age}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-lg font-bold mb-2">{program.title}</h4>
                <p className="text-muted-foreground text-sm flex-1 leading-relaxed mb-6">
                  {program.desc}
                </p>
                <button className="w-full py-3 rounded-xl bg-secondary/30 text-primary font-semibold text-sm group-hover:bg-primary group-hover:text-white transition-colors flex items-center justify-center gap-2">
                  {t('Learn More', 'Saber Más')}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
