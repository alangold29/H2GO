import { useLanguage } from '@/contexts/LanguageContext';

export default function Methodology() {
  const { t } = useLanguage();

  const steps = [
    {
      num: "01",
      title: t('Acclimation & Comfort', 'Aclimatación y Comodidad'),
      desc: t('We start by building trust with the water through play and breathing exercises.', 'Comenzamos construyendo confianza con el agua a través de juegos y respiración.')
    },
    {
      num: "02",
      title: t('Technique & Safety', 'Técnica y Seguridad'),
      desc: t('Learning core strokes, floating, and essential survival skills.', 'Aprendiendo estilos básicos, flotación y habilidades de supervivencia.')
    },
    {
      num: "03",
      title: t('Strength & Independence', 'Fuerza e Independencia'),
      desc: t('Refining movements to swim longer distances safely and confidently.', 'Refinando movimientos para nadar largas distancias con seguridad y confianza.')
    }
  ];

  return (
    <section id="methodology" className="py-24 relative overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80&w=1600&h=900"
        alt="Swimming pool"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Blue gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#023e8a]/90 via-[#0077b6]/85 to-[#00b4d8]/80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sky-300 font-bold tracking-wider uppercase text-sm mb-3">
            {t('Our Methodology', 'Nuestra Metodología')}
          </h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold mb-6 text-white">
            {t('A Proven Path to ', 'Un Camino Probado hacia ')}
            <span className="text-sky-300">{t('Water Mastery', 'la Maestría Acuática')}</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-white/25" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative pt-8 md:pt-0 cursor-default group"
            >
              <div className="w-24 h-24 rounded-full bg-white text-primary flex items-center justify-center text-3xl font-extrabold shadow-2xl mx-auto mb-8 relative z-10 border-8 border-white/20">
                {step.num}
              </div>
              <div className="text-center bg-white/15 backdrop-blur-md rounded-[2rem] p-8 border border-white/25 transition-all duration-300 hover:bg-white/25 hover:border-white/40 hover:shadow-2xl hover:-translate-y-2">
                <h4 className="text-2xl font-bold mb-4 text-white">{step.title}</h4>
                <p className="text-white/80 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
