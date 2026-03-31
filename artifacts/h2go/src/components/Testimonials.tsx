import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Mirian Manzano',
    role: 'Mamá de Gean Piero Salas',
    text: 'Agradezco a H2GO por la dedicación y paciencia con todos sus alumnos. Mi hijo ha ganado seguridad y confianza desde que empezó — verlo disfrutar sus triunfos me llena de orgullo. Gracias al Profesor Héctor por su profesionalismo y por motivarlo a superarse cada día.',
  },
  {
    name: 'Claudia Vargas',
    role: 'Mamá de alumna de H2GO',
    text: 'Mi hija tiene 6 meses en H2GO y estamos súper felices. Ha mejorado mucho su técnica, pero lo mejor es que lo disfruta muchísimo — nunca quiere faltar a sus clases, al contrario, ¡quiere ir todos los días! Los recomiendo ampliamente 🙌',
  },
  {
    name: 'Karin',
    role: 'Mamá de Briana',
    text: 'En H2GO la dedicación de los profesores motiva a mi hija a aprender, esforzarse y disfrutar la natación porque se siente acompañada en el proceso. El profe Fernando la está preparando y ella está muy contenta con él. Agradezco y valoro enormemente su trabajo.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
            Nadadores Felices
          </h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold mb-6">
            Lo Que Dicen las{' '}
            <span className="text-gradient">Familias de H2GO</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-[2rem] shadow-lg shadow-black/5 border border-border/50 relative flex flex-col"
            >
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-foreground/80 italic mb-8 relative z-10 leading-relaxed flex-1">
                "{test.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center font-bold text-xl shrink-0">
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
