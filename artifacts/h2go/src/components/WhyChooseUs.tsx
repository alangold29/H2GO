import { useLanguage } from '@/contexts/LanguageContext';
import { HeartPulse, Droplets, Award, GraduationCap, Sparkles, Smile } from 'lucide-react';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: t('Learn with Confidence', 'Aprende con Confianza'),
      desc: t('We focus on overcoming fear through patient, empathetic instruction.', 'Nos enfocamos en superar el miedo mediante instrucción paciente y empática.')
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: t('Certified Instructors', 'Instructores Certificados'),
      desc: t('Professionals trained in aquatic safety and child psychology.', 'Profesionales capacitados en seguridad acuática y psicología infantil.')
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: t('Clean & Modern', 'Limpio y Moderno'),
      desc: t('State-of-the-art filtration and continuously heated water.', 'Filtración de última generación y agua continuamente temperada.')
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t('Step-by-Step Progress', 'Progreso Paso a Paso'),
      desc: t('Structured levels ensure you visibly track skill development.', 'Niveles estructurados aseguran que sigas el desarrollo de habilidades.')
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: t('Family Friendly', 'Ambiente Familiar'),
      desc: t('Viewing areas and amenities designed for parents comfort.', 'Áreas de observación y comodidades diseñadas para los padres.')
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: t('Bilingual Support', 'Soporte Bilingüe'),
      desc: t('Classes available in English and Spanish for all expats and locals.', 'Clases disponibles en inglés y español para expatriados y locales.')
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16">

          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
                {t('Why Choose H2GO', 'Por Qué Elegir H2GO')}
              </h2>
              <h3 className="text-4xl font-extrabold mb-6">
                {t('More than just a ', 'Más que una simple ')}
                <span className="text-gradient">{t('Swim School', 'Escuela de Natación')}</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                {t(
                  "We believe swimming is a vital life skill. That's why we've created an environment where learning is joyful, safe, and highly effective.",
                  "Creemos que nadar es una habilidad vital. Por eso hemos creado un entorno donde aprender es alegre, seguro y altamente efectivo."
                )}
              </p>

              <img
                src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&q=80&w=600&h=500"
                alt="Clean modern swimming pool"
                loading="lazy"
                className="rounded-3xl shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-6">
                  {reason.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
