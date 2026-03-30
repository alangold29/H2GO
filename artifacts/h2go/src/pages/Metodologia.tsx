import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Baby, GraduationCap, Users, Waves, Star, Dumbbell, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Metodologia() {
  const { t } = useLanguage();

  const programs = [
    {
      icon: <Baby className="w-8 h-8" />,
      color: 'bg-pink-50 text-pink-600',
      badge: 'bg-pink-100 text-pink-700',
      title: t('Aqua Baby', 'Aqua Baby'),
      age: t('6 months – 3 years', '6 meses – 3 años'),
      desc: t(
        'Water acclimation with parental participation. We build trust, motor skills, and joy in the water through play-based learning in a warm, safe pool environment.',
        'Aclimatación al agua con participación de padres. Construimos confianza, motricidad y alegría en el agua a través del aprendizaje lúdico en un entorno de piscina cálido y seguro.'
      ),
      objectives: [
        t('Water familiarization', 'Familiarización con el agua'),
        t('Basic breath control', 'Control básico de la respiración'),
        t('Floating with support', 'Flotación con apoyo'),
        t('Sensory development', 'Desarrollo sensorial'),
      ],
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'bg-sky-50 text-sky-600',
      badge: 'bg-sky-100 text-sky-700',
      title: t('Kids & Teens', 'Niños/Adolescentes'),
      age: t('4 – 17 years', '4 – 17 años'),
      desc: t(
        'Progressive technique development across three structured levels (Basic, Intermediate, Advanced). Students build stroke proficiency, endurance, and competitive awareness.',
        'Desarrollo técnico progresivo en tres niveles estructurados (Básico, Intermedio, Avanzado). Los alumnos desarrollan dominio de estilos, resistencia y conciencia competitiva.'
      ),
      objectives: [
        t('All 4 swimming strokes', 'Los 4 estilos de natación'),
        t('Competitive turns & starts', 'Virajes y salidas competitivos'),
        t('Endurance training', 'Entrenamiento de resistencia'),
        t('Race strategy', 'Estrategia de competición'),
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      color: 'bg-blue-50 text-blue-600',
      badge: 'bg-blue-100 text-blue-700',
      title: t('Adults', 'Adultos'),
      age: '18+',
      desc: t(
        'From absolute beginners to experienced triathletes. We tailor every session to the individual, focusing on technique correction, fitness, and personal goals.',
        'Desde principiantes absolutos hasta triatletas experimentados. Adaptamos cada sesión al individuo, enfocándonos en corrección técnica, fitness y metas personales.'
      ),
      objectives: [
        t('Technique refinement', 'Perfeccionamiento técnico'),
        t('Overcoming water fear', 'Superación del miedo al agua'),
        t('Fitness & endurance', 'Fitness y resistencia'),
        t('Triathlon preparation', 'Preparación para triatlón'),
      ],
    },
    {
      icon: <Star className="w-8 h-8" />,
      color: 'bg-yellow-50 text-yellow-600',
      badge: 'bg-yellow-100 text-yellow-700',
      title: t('Semillero', 'Semillero'),
      age: t('7 – 14 years', '7 – 14 años'),
      desc: t(
        'Our talent development program for promising young swimmers. Intensive training, competition participation, and mentoring by our most experienced coaches.',
        'Nuestro programa de desarrollo de talentos para jóvenes nadadores prometedores. Entrenamiento intensivo, participación en competencias y tutoría por nuestros entrenadores más experimentados.'
      ),
      objectives: [
        t('Competitive swimming', 'Natación competitiva'),
        t('National competitions', 'Competencias nacionales'),
        t('Sports psychology', 'Psicología deportiva'),
        t('Elite coach mentoring', 'Tutoría de entrenadores elite'),
      ],
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      color: 'bg-indigo-50 text-indigo-600',
      badge: 'bg-indigo-100 text-indigo-700',
      title: t('H2GO Team', 'Equipo H2GO'),
      age: t('14+ years', '14+ años'),
      desc: t(
        'Our high-performance competitive team. Athletes train daily with advanced periodization, participate in regional and national meets, and represent H2GO at the highest level.',
        'Nuestro equipo competitivo de alto rendimiento. Los atletas entrenan diariamente con periodización avanzada, participan en encuentros regionales y nacionales, y representan a H2GO al más alto nivel.'
      ),
      objectives: [
        t('Daily structured training', 'Entrenamiento estructurado diario'),
        t('Advanced periodization', 'Periodización avanzada'),
        t('Regional/national meets', 'Encuentros regionales/nacionales'),
        t('Physical conditioning', 'Acondicionamiento físico'),
      ],
    },
    {
      icon: <Waves className="w-8 h-8" />,
      color: 'bg-teal-50 text-teal-600',
      badge: 'bg-teal-100 text-teal-700',
      title: t('Open Water', 'Nado Libre'),
      age: t('All Ages', 'Todas las Edades'),
      desc: t(
        'Open water and recreational swimming training. Focus on long-distance technique, sighting, and the mental resilience needed for open water events.',
        'Entrenamiento de natación en aguas abiertas y recreativa. Enfoque en técnica de larga distancia, orientación y la resiliencia mental necesaria para eventos en aguas abiertas.'
      ),
      objectives: [
        t('Open water technique', 'Técnica de aguas abiertas'),
        t('Distance orientation', 'Orientación en distancia'),
        t('Mental endurance', 'Resistencia mental'),
        t('Ocean/lake swimming', 'Natación en océano/lago'),
      ],
    },
  ];

  const levels = [
    {
      name: t('Basic', 'Básico'),
      color: 'bg-sky-100 text-sky-700 border-sky-200',
      headerColor: 'bg-sky-500',
      ages: t('7 – 10 years', '7 – 10 años'),
      objectives: t(
        'Learn to float independently, develop breath control, and master the basic freestyle and backstroke technique.',
        'Aprender a flotar independientemente, desarrollar control de respiración y dominar la técnica básica de crol y espalda.'
      ),
      strokes: t('Freestyle, Backstroke', 'Crol, Espalda'),
      sessions: t('2 sessions/week · 45 min each', '2 sesiones/semana · 45 min c/u'),
    },
    {
      name: t('Intermediate', 'Intermedio'),
      color: 'bg-primary/10 text-primary border-primary/25',
      headerColor: 'bg-primary',
      ages: t('9 – 14 years', '9 – 14 años'),
      objectives: t(
        'Refine freestyle and backstroke, introduce breaststroke and butterfly. Begin turns and dive starts. Build aerobic base.',
        'Perfeccionar crol y espalda, introducir braza y mariposa. Iniciar virajes y salidas de trampolín. Construir base aeróbica.'
      ),
      strokes: t('Freestyle, Backstroke, Breaststroke, Butterfly (intro)', 'Crol, Espalda, Braza, Mariposa (intro)'),
      sessions: t('3 sessions/week · 60 min each', '3 sesiones/semana · 60 min c/u'),
    },
    {
      name: t('Advanced', 'Avanzado'),
      color: 'bg-indigo-100 text-indigo-700 border-indigo-200',
      headerColor: 'bg-indigo-600',
      ages: t('12 – 17 years', '12 – 17 años'),
      objectives: t(
        'Master all four strokes with competitive technique. Develop race strategy, advanced turns, relay exchanges, and time optimization.',
        'Dominar los cuatro estilos con técnica competitiva. Desarrollar estrategia de carrera, virajes avanzados, relevos e optimización de tiempos.'
      ),
      strokes: t('All 4 competitive strokes + Individual Medley', 'Los 4 estilos competitivos + Combinado individual'),
      sessions: t('4–5 sessions/week · 75–90 min each', '4–5 sesiones/semana · 75–90 min c/u'),
    },
  ];

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
                {t('Our Methodology', 'Nuestra Metodología')}
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                {t('Programs Designed for ', 'Programas Diseñados para ')}
                <span className="text-sky-300">{t('Every Stage', 'Cada Etapa')}</span>
              </h1>
              <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                {t(
                  'From your baby\'s first splash to an elite swimmer\'s peak performance — our structured methodology ensures steady, safe, and joyful progress.',
                  'Desde el primer chapoteo de tu bebé hasta el rendimiento máximo de un nadador elite — nuestra metodología estructurada garantiza un progreso constante, seguro y alegre.'
                )}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Programas */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
                {t('What We Offer', 'Lo Que Ofrecemos')}
              </p>
              <h2 className="text-4xl lg:text-5xl font-extrabold">
                {t('Our ', 'Nuestros ')}
                <span className="text-gradient">{t('6 Programs', '6 Programas')}</span>
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
                  <div className={`p-8 pb-6 ${prog.color.split(' ')[0]} border-b border-border/30`}>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${prog.color}`}>
                      {prog.icon}
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-extrabold">{prog.title}</h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold shrink-0 ${prog.badge}`}>
                        {prog.age}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{prog.desc}</p>
                    <ul className="space-y-2">
                      {prog.objectives.map((obj, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
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

        {/* Progresión Técnica */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
                {t('Technical Progression', 'Progresión Técnica')}
              </p>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
                {t('Level Structure · ', 'Estructura de Niveles · ')}
                <span className="text-gradient">{t('Ages 7–17', '7 a 17 Años')}</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                {t(
                  'Our progressive level system ensures every student advances at the right pace, mastering foundations before moving to the next challenge.',
                  'Nuestro sistema de niveles progresivo asegura que cada alumno avance al ritmo correcto, dominando los fundamentos antes de pasar al siguiente desafío.'
                )}
              </p>
            </div>

            {/* Desktop table */}
            <div className="hidden md:block rounded-3xl overflow-hidden border border-border/60 shadow-xl shadow-black/5">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="bg-foreground text-white py-5 px-6 text-left font-bold text-base w-1/4">
                      {t('Criteria', 'Criterio')}
                    </th>
                    {levels.map((lvl, i) => (
                      <th key={i} className={`${lvl.headerColor} text-white py-5 px-6 text-left font-bold text-base`}>
                        {lvl.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  <tr className="bg-white">
                    <td className="py-5 px-6 font-semibold text-foreground/70">{t('Target Age', 'Edad Objetivo')}</td>
                    {levels.map((lvl, i) => (
                      <td key={i} className="py-5 px-6 font-medium">{lvl.ages}</td>
                    ))}
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="py-5 px-6 font-semibold text-foreground/70">{t('Objectives', 'Objetivos')}</td>
                    {levels.map((lvl, i) => (
                      <td key={i} className="py-5 px-6 text-muted-foreground leading-relaxed">{lvl.objectives}</td>
                    ))}
                  </tr>
                  <tr className="bg-white">
                    <td className="py-5 px-6 font-semibold text-foreground/70">{t('Strokes', 'Estilos')}</td>
                    {levels.map((lvl, i) => (
                      <td key={i} className="py-5 px-6 font-medium">{lvl.strokes}</td>
                    ))}
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="py-5 px-6 font-semibold text-foreground/70">{t('Schedule', 'Horario')}</td>
                    {levels.map((lvl, i) => (
                      <td key={i} className="py-5 px-6 text-muted-foreground">{lvl.sessions}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-6">
              {levels.map((lvl, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-border/50 shadow-md">
                  <div className={`${lvl.headerColor} text-white py-4 px-6`}>
                    <h3 className="font-extrabold text-xl">{lvl.name}</h3>
                    <p className="text-white/80 text-sm">{lvl.ages}</p>
                  </div>
                  <div className="bg-white divide-y divide-border/40">
                    <div className="py-4 px-6">
                      <p className="text-xs font-bold text-foreground/50 uppercase mb-1">{t('Objectives', 'Objetivos')}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{lvl.objectives}</p>
                    </div>
                    <div className="py-4 px-6">
                      <p className="text-xs font-bold text-foreground/50 uppercase mb-1">{t('Strokes', 'Estilos')}</p>
                      <p className="text-sm font-medium">{lvl.strokes}</p>
                    </div>
                    <div className="py-4 px-6">
                      <p className="text-xs font-bold text-foreground/50 uppercase mb-1">{t('Schedule', 'Horario')}</p>
                      <p className="text-sm text-muted-foreground">{lvl.sessions}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 water-gradient z-0" />
          <div className="absolute inset-0 z-[1] opacity-10 bg-[radial-gradient(circle_at_30%_50%,white,transparent_60%)]" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              {t('Ready to Start?', '¿Listo para Empezar?')}
            </h2>
            <p className="text-white/80 text-lg mb-8">
              {t(
                'Join thousands of students who have transformed their relationship with the water at H2GO.',
                'Únete a miles de alumnos que han transformado su relación con el agua en H2GO.'
              )}
            </p>
            <a
              href="/matricula"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-primary font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {t('Enroll Now', 'Matricúlate Ahora')}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
