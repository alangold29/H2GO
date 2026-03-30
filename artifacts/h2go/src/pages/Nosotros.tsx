import { motion, type Variants } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Target, Eye, Users, Clock, Trophy } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function Nosotros() {
  const { t } = useLanguage();

  const milestones = [
    { year: '2014', label: t('Founded in Lima', 'Fundación en Lima') },
    { year: '2016', label: t('First 3 venues', 'Primeras 3 sedes') },
    { year: '2019', label: t('1,000+ students', 'Más de 1,000 alumnos') },
    { year: '2022', label: t('7 active venues', '7 sedes activas') },
    { year: '2024', label: t('10 years of excellence', '10 años de excelencia') },
  ];

  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: t('Personalized Attention', 'Atención Personalizada'),
      desc: t(
        'Every student receives a tailored learning path based on their age, level, and goals.',
        'Cada alumno recibe un camino de aprendizaje personalizado según su edad, nivel y metas.'
      ),
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: t('Excellence & Safety', 'Excelencia y Seguridad'),
      desc: t(
        'We uphold the highest standards of water safety and technical instruction in every session.',
        'Mantenemos los más altos estándares de seguridad acuática e instrucción técnica en cada sesión.'
      ),
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('10 Years of Trust', '10 Años de Confianza'),
      desc: t(
        'A decade of transforming fearful beginners into confident swimmers across Lima.',
        'Una década transformando principiantes temerosos en nadadores confiados en todo Lima.'
      ),
    },
  ];

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
                {t('About Us', 'Sobre Nosotros')}
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                {t('10 Years Building ', '10 Años Construyendo ')}
                <span className="text-sky-300">{t('Water Champions', 'Campeones del Agua')}</span>
              </h1>
              <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                {t(
                  'H2GO was born from a simple conviction: every person deserves access to quality swimming education in a safe and inspiring environment.',
                  'H2GO nació de una convicción simple: toda persona merece acceso a una educación de natación de calidad en un entorno seguro e inspirador.'
                )}
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
                  {t('Our History', 'Nuestra Historia')}
                </motion.p>
                <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-extrabold mb-6">
                  {t('A Decade of ', 'Una Década de ')}
                  <span className="text-gradient">{t('Aquatic Excellence', 'Excelencia Acuática')}</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {t(
                    'Founded in 2014, H2GO Swimming School began with one pool and a clear vision: to offer professional swimming education accessible to all ages and levels in Lima.',
                    'Fundada en 2014, H2GO Swimming School comenzó con una piscina y una visión clara: ofrecer educación de natación profesional accesible para todas las edades y niveles en Lima.'
                  )}
                </motion.p>
                <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed">
                  {t(
                    'Today, with 7 venues spread across Lima, a team of certified instructors, and more than 2,000 active students, we are the leading swimming school in Peru.',
                    'Hoy, con 7 sedes distribuidas en Lima, un equipo de instructores certificados y más de 2,000 alumnos activos, somos la escuela de natación líder en el Perú.'
                  )}
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
                {t('Strategic Direction', 'Dirección Estratégica')}
              </p>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
                {t('Mission & ', 'Misión & ')}
                <span className="text-gradient">{t('Vision', 'Visión')}</span>
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
                <h3 className="text-2xl font-extrabold mb-4">{t('Our Mission', 'Nuestra Misión')}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {t(
                    'To offer accessible, safe, and high-quality swimming education to all people in Lima, fostering confidence, physical health, and a lasting love for the aquatic environment.',
                    'Ofrecer educación de natación accesible, segura y de alta calidad a todas las personas de Lima, fomentando la confianza, la salud física y el amor duradero por el entorno acuático.'
                  )}
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
                <h3 className="text-2xl font-extrabold mb-4">{t('Our Vision', 'Nuestra Visión')}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {t(
                    'To be recognized as the leading swimming school in Peru by 2030, expanding our presence to all districts of Lima and setting the standard for aquatic education in Latin America.',
                    'Ser reconocidos como la escuela de natación líder en el Perú para el 2030, expandiendo nuestra presencia a todos los distritos de Lima y marcando el estándar de educación acuática en Latinoamérica.'
                  )}
                </p>
              </motion.div>
            </div>

            {/* Valores */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="grid md:grid-cols-3 gap-6"
            >
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-8 border border-border/50 flex gap-5 items-start hover:shadow-md hover:border-primary/25 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{v.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
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
                {t('Founder', 'Fundador')}
              </p>
              <h2 className="text-4xl lg:text-5xl font-extrabold">
                {t('Meet the ', 'Conoce al ')}
                <span className="text-gradient">{t('Visionary Behind H2GO', 'Visionario detrás de H2GO')}</span>
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
                    <p className="text-white/70 text-sm">{t('Photo coming soon', 'Foto próximamente')}</p>
                  </div>
                </div>

                {/* Contenido */}
                <div className="md:col-span-3 p-10 lg:p-14">
                  <h3 className="text-3xl font-extrabold mb-1">Nikola Ustavdich</h3>
                  <p className="text-primary font-semibold mb-6">
                    {t('Founder & Director of H2GO Swimming School', 'Fundador y Director de H2GO Swimming School')}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {[
                      t('Attorney at Law', 'Abogado'),
                      'DECAN',
                      t('Ex-President of FDPN', 'Ex-Presidente de la FDPN'),
                    ].map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {t(
                      'Nikola Ustavdich is the visionary behind H2GO. With a legal background and a lifelong passion for aquatic sports, he combined his professional discipline with his love for swimming to build one of Lima\'s most respected swimming academies.',
                      'Nikola Ustavdich es el visionario detrás de H2GO. Con formación jurídica y una pasión de toda la vida por los deportes acuáticos, combinó su disciplina profesional con su amor por la natación para construir una de las academias de natación más respetadas de Lima.'
                    )}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {t(
                      'As former President of the Federación Deportiva Peruana de Natación (FDPN) and a DECAN-certified coach, Nikola brings an unparalleled combination of governance expertise and technical swimming knowledge to H2GO.',
                      'Como ex-Presidente de la Federación Deportiva Peruana de Natación (FDPN) y entrenador certificado DECAN, Nikola aporta una combinación incomparable de experiencia en gestión deportiva y conocimiento técnico de natación a H2GO.'
                    )}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(
                      'His mission is simple: to ensure that every child, teen, and adult in Lima has access to world-class aquatic education — regardless of their background or experience.',
                      'Su misión es simple: garantizar que cada niño, adolescente y adulto en Lima tenga acceso a una educación acuática de clase mundial, independientemente de su origen o experiencia.'
                    )}
                  </p>

                  <div className="mt-8 pt-8 border-t border-border/60 flex items-center gap-4">
                    <Award className="w-8 h-8 text-primary shrink-0" />
                    <p className="text-sm text-muted-foreground italic">
                      {t(
                        '"Every person who enters the water at H2GO leaves more confident, healthier, and more connected to life."',
                        '"Cada persona que entra al agua en H2GO sale más segura, más saludable y más conectada con la vida."'
                      )}
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
