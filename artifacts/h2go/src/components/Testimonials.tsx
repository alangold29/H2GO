import { useLanguage } from '@/contexts/LanguageContext';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Maria C.",
      role: t("Parent of 5yo", "Madre de niño de 5 años"),
      text: t(
        "My son used to cry just getting near a pool. The instructors at H2GO were so patient, and within a month he was jumping in with a huge smile. Best decision ever!",
        "Mi hijo solía llorar solo de acercarse a una piscina. Los instructores fueron tan pacientes, y en un mes ya estaba saltando con una gran sonrisa. ¡La mejor decisión!"
      )
    },
    {
      name: "David R.",
      role: t("Adult Learner", "Alumno Adulto"),
      text: t(
        "Learning to swim at 30 was intimidating, but the environment here is completely judgment-free. I finally feel safe and confident in the water.",
        "Aprender a nadar a los 30 era intimidante, pero el ambiente aquí es totalmente libre de prejuicios. Finalmente me siento seguro y confiado en el agua."
      )
    },
    {
      name: "Sofia L.",
      role: t("Parent of 10yo", "Madre de niña de 10 años"),
      text: t(
        "The bilingual instruction is perfect for our expat family. The facilities are spotless and my daughter's stroke technique has improved immensely.",
        "La instrucción bilingüe es perfecta para nuestra familia expatriada. Las instalaciones son impecables y la técnica de mi hija ha mejorado inmensamente."
      )
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
            {t('Happy Swimmers', 'Nadadores Felices')}
          </h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold mb-6">
            {t('Loved by Families in ', 'Amado por Familias en ')}
            <span className="text-gradient">Lima</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-[2rem] shadow-lg shadow-black/5 border border-border/50 relative"
            >
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-foreground/80 italic mb-8 relative z-10 leading-relaxed text-lg">
                "{test.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center font-bold text-xl">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-foreground">{test.name}</h5>
                  <p className="text-sm text-muted-foreground">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
