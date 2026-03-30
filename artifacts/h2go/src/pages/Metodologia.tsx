import { motion, type Variants } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Baby, GraduationCap, Users, Waves, Star, Dumbbell, ArrowRight, CheckCircle } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const programs = [
  {
    icon: <Baby className="w-8 h-8" />,
    color: 'bg-pink-50 text-pink-600',
    badgeBg: 'bg-pink-100 text-pink-700',
    headerBg: 'bg-pink-50',
    title: 'Aqua Baby',
    age: 'Bebés',
    desc: 'En la academia de natación H2GO, el programa Aqua Baby se desarrolla mediante una metodología respetuosa, progresiva y centrada en el bienestar del bebé, donde cada sesión está diseñada para estimular de manera segura el desarrollo psicomotor, la adaptación al medio acuático y el vínculo afectivo con sus padres.',
    objectives: [
      'Estimulación del desarrollo psicomotor',
      'Adaptación segura al medio acuático',
      'Fortalecimiento del vínculo afectivo con los padres',
      'Ejercicios suaves de flotación y desplazamiento',
      'Estimulación sensorial en el agua',
    ],
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    color: 'bg-sky-50 text-sky-600',
    badgeBg: 'bg-sky-100 text-sky-700',
    headerBg: 'bg-sky-50',
    title: 'Niños y Adolescentes',
    age: '4 – 17 años',
    desc: 'En H2GO desarrollamos clases para niños en etapa de ambientación al medio acuático (4-6 años) y programas progresivos hasta los 17 años. A través de una metodología lúdica, segura y pedagógicamente planificada, nuestros instructores guían a los niños mediante juegos y ejercicios que favorecen la adaptación al agua, el control de la respiración, la flotación y la coordinación motriz.',
    objectives: [
      'Familiarización con el medio acuático',
      'Confianza y seguridad en el agua',
      'Mejora del equilibrio y coordinación corporal',
      'Control de la respiración y flotación',
      'Bases fundamentales de los estilos de natación',
    ],
  },
  {
    icon: <Users className="w-8 h-8" />,
    color: 'bg-blue-50 text-blue-600',
    badgeBg: 'bg-blue-100 text-blue-700',
    headerBg: 'bg-blue-50',
    title: 'Adultos',
    age: '18+ años',
    desc: 'Los programas dirigidos a adultos y adultos mayores se enfocan en brindar una experiencia formativa y de bienestar dentro del medio acuático. Las sesiones son guiadas por profesionales que orientan cada ejercicio con criterios técnicos y de cuidado físico, adaptando las actividades según las capacidades, necesidades y objetivos de cada participante.',
    objectives: [
      'Coordinación y control respiratorio',
      'Fortalecimiento de la movilidad',
      'Mejora de la condición física general',
      'Confianza en el agua a cualquier edad',
      'Bienestar físico y emocional integral',
    ],
  },
  {
    icon: <Star className="w-8 h-8" />,
    color: 'bg-yellow-50 text-yellow-600',
    badgeBg: 'bg-yellow-100 text-yellow-700',
    headerBg: 'bg-yellow-50',
    title: 'Semillero',
    age: 'Niños y jóvenes',
    desc: 'El semillero de H2GO es un programa formativo diseñado para descubrir y desarrollar el talento de niños y jóvenes en la natación desde sus primeras etapas. Los participantes aprenden las bases técnicas de los diferentes estilos de nado, fortalecen su condición física y desarrollan disciplina y confianza en el agua.',
    objectives: [
      'Bases técnicas de todos los estilos de nado',
      'Fortalecimiento de la condición física',
      'Participación en exhibiciones y competencias internas',
      'Experiencia en deporte competitivo externo',
      'Disciplina, constancia y superación personal',
    ],
  },
  {
    icon: <Dumbbell className="w-8 h-8" />,
    color: 'bg-indigo-50 text-indigo-600',
    badgeBg: 'bg-indigo-100 text-indigo-700',
    headerBg: 'bg-indigo-50',
    title: 'Equipo H2GO',
    age: 'Alto rendimiento',
    desc: 'El equipo competitivo de alto nivel de H2GO representa la etapa de mayor desarrollo dentro del proceso formativo. Dirigido a nadadores con bases técnicas sólidas, los entrenamientos se vuelven más exigentes y especializados, enfocándose en el perfeccionamiento de los estilos, la resistencia, la velocidad y la estrategia en competencia.',
    objectives: [
      'Perfeccionamiento técnico de los 4 estilos',
      'Mejora de velocidad, fuerza y resistencia',
      'Estrategia y preparación para torneos',
      'Competencias internas y externas constantes',
      'Valores: responsabilidad, perseverancia y trabajo en equipo',
    ],
  },
  {
    icon: <Waves className="w-8 h-8" />,
    color: 'bg-teal-50 text-teal-600',
    badgeBg: 'bg-teal-100 text-teal-700',
    headerBg: 'bg-teal-50',
    title: 'Nado Libre',
    age: 'Todas las edades',
    desc: 'En H2GO promovemos el nado libre como un espacio responsable, seguro y accesible para todas las personas que desean disfrutar de la piscina de manera autónoma. La modalidad de piscina libre permite nadar a tu propio ritmo, practicar técnicas aprendidas, mejorar tu condición física o simplemente aprovechar los beneficios del agua para la salud.',
    objectives: [
      'Práctica autónoma a ritmo personal',
      'Mejora de condición física en el agua',
      'Ambiente ordenado con normas de seguridad',
      'Fomento de disciplina y constancia',
      'Bienestar y estilo de vida saludable',
    ],
  },
];

const levels = [
  {
    name: 'Básico',
    headerColor: 'bg-sky-500',
    textColor: 'text-sky-700',
    borderColor: 'border-sky-200',
    bgColor: 'bg-sky-50',
    ages: '7 – 10 años',
    objectives: [
      'Adaptación al medio acuático y desarrollo de confianza',
      'Control de la respiración y flotación ventral y dorsal',
      'Desplazamientos simples con apoyo de materiales',
      'Introducción a hábitos de seguridad y respeto por el agua',
    ],
    strokes: [
      'Introducción al crol: coordinación de brazos y patada',
      'Patada de espalda y ejercicios de flotación dorsal',
    ],
    materials: [
      'Tablas de flotación',
      'Noodles y flotadores',
      'Aros y cintas de seguridad',
    ],
    methodology: [
      'Ejercicios guiados por el instructor con juegos y dinámicas lúdicas',
      'Repetición gradual de movimientos reforzando seguridad y confianza',
    ],
  },
  {
    name: 'Intermedio',
    headerColor: 'bg-primary',
    textColor: 'text-primary',
    borderColor: 'border-primary/25',
    bgColor: 'bg-primary/5',
    ages: '9 – 14 años',
    objectives: [
      'Mejorar la técnica de crol y espalda, e introducir patada del estilo pecho',
      'Incrementar resistencia, coordinación y autonomía en el agua',
      'Respiración lateral y control postural durante los desplazamientos',
      'Fomentar disciplina, concentración y motivación en la práctica regular',
    ],
    strokes: [
      'Crol con respiración lateral eficiente',
      'Espalda con control de patada y brazo',
      'Introducción al estilo pecho: coordinación y ritmo',
    ],
    materials: [
      'Pull-buoys',
      'Aletas',
      'Paletas de natación y tablas',
    ],
    methodology: [
      'Series de nado progresivas y ejercicios técnicos individuales',
      'Retroalimentación constante del instructor para corregir postura y respiración',
      'Dinámicas que refuerzan la técnica y fomentan la motivación',
    ],
  },
  {
    name: 'Avanzado',
    headerColor: 'bg-indigo-600',
    textColor: 'text-indigo-700',
    borderColor: 'border-indigo-200',
    bgColor: 'bg-indigo-50',
    ages: '12 – 17 años',
    objectives: [
      'Perfeccionar los cuatro estilos: crol, espalda, pecho y mariposa',
      'Optimizar velocidad, fuerza, resistencia y eficiencia de movimientos',
      'Introducir virajes técnicos, salida de bloques y transiciones entre estilos',
      'Preparar a los alumnos para competencias o actividades acuáticas de alto nivel',
    ],
    strokes: [
      'Crol, espalda, pecho y mariposa con técnica depurada',
      'Combinaciones de estilos y series de entrenamiento con objetivos de resistencia y fuerza',
    ],
    materials: [
      'Paletas de resistencia',
      'Aletas y pull-buoys',
      'Cintas de entrenamiento, cronómetros y obstáculos acuáticos',
    ],
    methodology: [
      'Entrenamientos estructurados y personalizados según nivel físico y objetivos',
      'Series técnicas de resistencia, velocidad y coordinación avanzada',
      'Evaluación continua y retroalimentación individualizada',
    ],
  },
];

export default function Metodologia() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header solid />

      <main className="flex-1">

        {/* Hero interior */}
        <section className="relative py-28 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=1600&h=700"
            alt="Natación H2GO"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#023e8a]/90 via-[#0077b6]/82 to-[#00b4d8]/75" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-sky-200 text-sm font-semibold mb-6 backdrop-blur">
                Nuestra Metodología
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Programas Diseñados para{' '}
                <span className="text-sky-300">Cada Etapa</span>
              </h1>
              <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                Desde el primer chapoteo de tu bebé hasta el rendimiento máximo de un nadador de alto nivel — nuestra metodología garantiza un progreso constante, seguro y alegre.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Nuestros Programas */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
                Lo Que Ofrecemos
              </p>
              <h2 className="text-4xl lg:text-5xl font-extrabold">
                Nuestros <span className="text-gradient">6 Programas</span>
              </h2>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {programs.map((prog, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-white rounded-[2rem] border border-border/50 shadow-lg shadow-black/5 hover:shadow-xl hover:border-primary/25 transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  <div className={`p-8 pb-6 ${prog.headerBg} border-b border-border/30`}>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${prog.color}`}>
                      {prog.icon}
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-extrabold">{prog.title}</h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold shrink-0 ${prog.badgeBg}`}>
                        {prog.age}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1 text-sm">{prog.desc}</p>
                    <ul className="space-y-2">
                      {prog.objectives.map((obj, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm font-medium text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Progresión Técnica — Niveles 7 a 17 años */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
                Progresión Técnica
              </p>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
                Estructura de Niveles ·{' '}
                <span className="text-gradient">7 a 17 Años</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                En H2GO trabajamos con niños y jóvenes de 7 a 17 años, organizados en niveles básico, intermedio y avanzado, con un enfoque pedagógico que prioriza la seguridad, la progresión técnica y el desarrollo integral del alumno.
              </p>
            </div>

            {/* Desktop cards — one per level, full detail */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {levels.map((lvl, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.55 }}
                  className={`rounded-[2rem] border ${lvl.borderColor} shadow-lg overflow-hidden flex flex-col`}
                >
                  {/* Level header */}
                  <div className={`${lvl.headerColor} text-white px-7 py-6`}>
                    <h3 className="font-extrabold text-2xl mb-1">{lvl.name}</h3>
                    <p className="text-white/75 text-sm">{lvl.ages}</p>
                  </div>

                  <div className={`${lvl.bgColor} flex-1 divide-y divide-border/40`}>
                    {/* Objetivos */}
                    <div className="px-7 py-5">
                      <p className={`text-xs font-extrabold uppercase tracking-wider ${lvl.textColor} mb-3`}>Objetivos</p>
                      <ul className="space-y-2">
                        {lvl.objectives.map((o, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                            <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${lvl.textColor}`} />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Estilos */}
                    <div className="px-7 py-5 bg-white/50">
                      <p className={`text-xs font-extrabold uppercase tracking-wider ${lvl.textColor} mb-3`}>Estilos Enseñados</p>
                      <ul className="space-y-2">
                        {lvl.strokes.map((s, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Materiales */}
                    <div className="px-7 py-5">
                      <p className={`text-xs font-extrabold uppercase tracking-wider ${lvl.textColor} mb-3`}>Materiales</p>
                      <div className="flex flex-wrap gap-2">
                        {lvl.materials.map((m, j) => (
                          <span key={j} className={`px-2.5 py-1 rounded-full text-xs font-semibold ${lvl.bgColor} border ${lvl.borderColor} ${lvl.textColor}`}>
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metodología */}
                    <div className="px-7 py-5 bg-white/50">
                      <p className={`text-xs font-extrabold uppercase tracking-wider ${lvl.textColor} mb-3`}>Metodología</p>
                      <ul className="space-y-2">
                        {lvl.methodology.map((m, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile accordion cards */}
            <div className="md:hidden space-y-6">
              {levels.map((lvl, i) => (
                <div key={i} className={`rounded-2xl overflow-hidden border ${lvl.borderColor} shadow-md`}>
                  <div className={`${lvl.headerColor} text-white py-4 px-6`}>
                    <h3 className="font-extrabold text-xl">{lvl.name}</h3>
                    <p className="text-white/80 text-sm">{lvl.ages}</p>
                  </div>
                  <div className="bg-white divide-y divide-border/40">
                    <div className="py-4 px-6">
                      <p className={`text-xs font-bold uppercase mb-2 ${lvl.textColor}`}>Objetivos</p>
                      <ul className="space-y-1.5">
                        {lvl.objectives.map((o, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${lvl.textColor}`} />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="py-4 px-6">
                      <p className={`text-xs font-bold uppercase mb-2 ${lvl.textColor}`}>Estilos</p>
                      <ul className="space-y-1.5">
                        {lvl.strokes.map((s, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="py-4 px-6">
                      <p className={`text-xs font-bold uppercase mb-2 ${lvl.textColor}`}>Materiales</p>
                      <div className="flex flex-wrap gap-2">
                        {lvl.materials.map((m, j) => (
                          <span key={j} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-foreground/70">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="py-4 px-6">
                      <p className={`text-xs font-bold uppercase mb-2 ${lvl.textColor}`}>Metodología</p>
                      <ul className="space-y-1.5">
                        {lvl.methodology.map((m, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filosofía H2GO */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-slate-50 to-sky-50 rounded-[2.5rem] border border-sky-100 p-10 lg:p-14 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏊</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-extrabold mb-5">
                La Filosofía <span className="text-gradient">H2GO</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                En todos los niveles, la filosofía de H2GO se centra en la <strong className="text-foreground">superación personal</strong>, la <strong className="text-foreground">confianza</strong> y el <strong className="text-foreground">bienestar integral</strong>, motivando a cada alumno a aprender disfrutando del agua y a ser el mejor dentro de su propio proceso de desarrollo acuático.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 water-gradient z-0" />
          <div className="absolute inset-0 z-[1] opacity-10 bg-[radial-gradient(circle_at_30%_50%,white,transparent_60%)]" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              ¿Listo para Empezar?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Únete a las familias que ya confían en H2GO para el desarrollo acuático de sus hijos.
            </p>
            <a
              href="/matricula"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-primary font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              ¿Cómo Matricularme?
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
