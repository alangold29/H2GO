import { HeartHandshake, ShieldCheck, Trophy, Sparkles, UserCheck } from 'lucide-react';

const reasons = [
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: 'Aprendizaje con Cuidado',
    desc: 'Cada alumno recibe atención personalizada. Ajustamos el ritmo y el método a cada persona, sin prisa y sin presión.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Ambiente 100% Seguro',
    desc: 'Instalaciones certificadas, protocolos de seguridad acuática e instructores con formación en primeros auxilios.',
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: 'Estándares de Excelencia',
    desc: 'Metodología estructurada en niveles, instructores certificados y seguimiento real del progreso de cada alumno.',
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Instalaciones Impecables',
    desc: 'Agua temperada con filtración continua. Piscinas, vestuarios y áreas comunes revisados y limpiados permanentemente.',
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: 'Atención de Calidad',
    desc: 'Recepción amable, comunicación fluida con los padres y acompañamiento en cada etapa del proceso de aprendizaje.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16">

          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
                Por Qué Elegir H2GO
              </h2>
              <h3 className="text-4xl font-extrabold mb-6">
                Más que una simple{' '}
                <span className="text-gradient">Escuela de Natación</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                Creemos que nadar es una habilidad vital. Por eso hemos creado un entorno donde aprender es alegre, seguro y altamente efectivo.
              </p>

              <img
                src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&q=80&w=600&h=500"
                alt="Piscina limpia y moderna"
                loading="lazy"
                className="rounded-3xl shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8 content-start">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-6">
                  {reason.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
