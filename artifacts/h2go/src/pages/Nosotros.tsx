import { motion, type Variants } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Target, Eye, HeartHandshake, ShieldCheck, Trophy, Sparkles, UserCheck } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const milestones = [
  { year: '2014', label: 'Fundación en Lima' },
  { year: '2016', label: 'Primeras 3 sedes' },
  { year: '2019', label: 'Más de 1,000 alumnos' },
  { year: '2022', label: '7 sedes activas' },
  { year: '2024', label: '10 años de excelencia' },
];

const compromisos = [
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: 'Trato con Cuidado',
    desc: 'En H2GO, cada alumno importa. Nuestros instructores se toman el tiempo de conocer a cada persona: sus miedos, su ritmo y sus metas. Nadie aprende en soledad.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Lugar Seguro',
    desc: 'La seguridad es nuestra primera responsabilidad. Todas nuestras piscinas cumplen estándares de higiene y seguridad acuática. Nuestros instructores están capacitados en primeros auxilios y rescate acuático.',
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'Excelencia',
    desc: 'Excelencia no es una promesa, es nuestra práctica diaria. Metodología basada en niveles progresivos, instructores con certificación internacional y evaluaciones periódicas del progreso de cada alumno.',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Siempre Limpio',
    desc: 'La higiene es parte de nuestra promesa. Nuestras piscinas utilizan sistemas de filtración de última generación. Los vestuarios y áreas comunes se limpian y revisan constantemente para garantizar un ambiente impecable.',
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: 'Bien Atendido',
    desc: 'Ser bien atendido empieza desde antes de entrar al agua. Desde el primer contacto hasta cada clase, el equipo H2GO responde con amabilidad, comunica el avance de los alumnos y está disponible para cualquier consulta.',
  },
];

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header solid />

      <main className="flex-1">

        {/* Hero interior */}
        <section className="relative py-28 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80&w=1600&h=700"
            alt="Piscina H2GO"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#023e8a]/88 via-[#0077b6]/80 to-[#00b4d8]/75" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-sky-200 text-sm font-semibold mb-6 backdrop-blur">
                Sobre Nosotros
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                10 Años Construyendo{' '}
                <span className="text-sky-300">Campeones del Agua</span>
              </h1>
              <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                H2GO nació de una convicción simple: toda persona merece acceso a una educación de natación de calidad en un entorno seguro e inspirador.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Historia */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
              >
                <motion.p variants={fadeUp} className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
                  Nuestra Historia
                </motion.p>
                <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-extrabold mb-6">
                  Una Década de{' '}
                  <span className="text-gradient">Excelencia Acuática</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Fundada en 2014, H2GO Swimming School comenzó con una piscina y una visión clara: ofrecer educación de natación profesional accesible para todas las edades y niveles en Lima.
                </motion.p>
                <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed">
                  Hoy, con 7 sedes distribuidas en Lima, un equipo de instructores certificados y más de 2,000 alumnos activos, somos la escuela de natación líder en el Perú.
                </motion.p>
              </motion.div>

              {/* Timeline */}
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-sky-400 to-[#00b4d8]" />
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="relative mb-8 last:mb-0"
                  >
                    <div className="absolute -left-[2.15rem] top-1 w-4 h-4 rounded-full bg-primary border-4 border-white shadow" />
                    <div className="bg-slate-50 rounded-2xl p-5 border border-border/50 hover:border-primary/30 hover:shadow-md transition-all">
                      <span className="text-primary font-extrabold text-lg">{m.year}</span>
                      <p className="text-foreground font-semibold mt-1">{m.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
                Dirección Estratégica
              </p>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
                Misión &{' '}
                <span className="text-gradient">Visión</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Misión */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="bg-white rounded-[2rem] p-10 border border-border/50 shadow-lg shadow-black/5 group hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-extrabold mb-4">Nuestra Misión</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Ofrecer educación de natación accesible, segura y de alta calidad a todas las personas de Lima, fomentando la confianza, la salud física y el amor duradero por el entorno acuático.
                </p>
              </motion.div>

              {/* Visión */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="bg-white rounded-[2rem] p-10 border border-border/50 shadow-lg shadow-black/5 group hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/50 flex items-center justify-center mb-6 group-hover:bg-secondary/70 transition-colors">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-extrabold mb-4">Nuestra Visión</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Ser reconocidos como la escuela de natación líder en el Perú para el 2030, expandiendo nuestra presencia a todos los distritos de Lima y marcando el estándar de educación acuática en Latinoamérica.
                </p>
              </motion.div>
            </div>

            {/* Nuestros Compromisos — 5 valores del propietario */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
                Lo Que Nos Define
              </p>
              <h2 className="text-3xl lg:text-4xl font-extrabold">
                Nuestros{' '}
                <span className="text-gradient">Compromisos</span>
              </h2>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="grid md:grid-cols-3 gap-6"
            >
              {compromisos.map((c, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`bg-white rounded-2xl p-8 border border-border/50 flex gap-5 items-start hover:shadow-md hover:border-primary/25 transition-all${
                    i === 3 ? ' md:col-start-1' : ''
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{c.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Fundador */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
                Fundador
              </p>
              <h2 className="text-4xl lg:text-5xl font-extrabold">
                Conoce al{' '}
                <span className="text-gradient">Visionario detrás de H2GO</span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="bg-gradient-to-br from-slate-50 to-sky-50 rounded-[2.5rem] border border-border/50 overflow-hidden shadow-xl shadow-black/5 max-w-5xl mx-auto"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Foto placeholder */}
                <div className="md:col-span-2 relative min-h-[320px] md:min-h-0 bg-gradient-to-br from-[#023e8a] to-[#00b4d8] flex items-center justify-center">
                  <div className="text-center text-white p-10">
                    <div className="w-28 h-28 rounded-full bg-white/20 border-4 border-white/40 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-extrabold text-white">NU</span>
                    </div>
                    <p className="text-white/70 text-sm">Foto próximamente</p>
                  </div>
                </div>

                {/* Contenido */}
                <div className="md:col-span-3 p-10 lg:p-14">
                  <h3 className="text-3xl font-extrabold mb-1">Nikola Ustavdich</h3>
                  <p className="text-primary font-semibold mb-6">
                    Fundador y Director de H2GO Swimming School
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {['Abogado', 'DECAN', 'Ex-Presidente de la FDPN'].map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Nikola Ustavdich es el visionario detrás de H2GO. Con formación jurídica y una pasión de toda la vida por los deportes acuáticos, combinó su disciplina profesional con su amor por la natación para construir una de las academias de natación más respetadas de Lima.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Como ex-Presidente de la Federación Deportiva Peruana de Natación (FDPN) y entrenador certificado DECAN, Nikola aporta una combinación incomparable de experiencia en gestión deportiva y conocimiento técnico de natación a H2GO.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Su misión es simple: garantizar que cada niño, adolescente y adulto en Lima tenga acceso a una educación acuática de clase mundial, independientemente de su origen o experiencia.
                  </p>

                  <div className="mt-8 pt-8 border-t border-border/60 flex items-center gap-4">
                    <Award className="w-8 h-8 text-primary shrink-0" />
                    <p className="text-sm text-muted-foreground italic">
                      "Cada persona que entra al agua en H2GO sale más segura, más saludable y más conectada con la vida."
                      <span className="block font-semibold text-foreground mt-1">— Nikola Ustavdich</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
