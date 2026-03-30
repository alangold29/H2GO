import { motion, type Variants } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { sedesData } from '@/data/sedes';
import { MapPin, Clock, ArrowRight, Phone } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Matricula() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header solid />

      <main className="flex-1">

        {/* Hero interior */}
        <section className="relative py-28 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1560090995-01632a28895b?auto=format&fit=crop&q=80&w=1600&h=700"
            alt="Sedes H2GO"
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
                ¿Cómo Matricularme?
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Elige tu Sede y{' '}
                <span className="text-sky-300">Empieza a Nadar</span>
              </h1>
              <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                Tenemos 7 sedes en Lima. Encuentra la más cercana a ti, revisa los programas disponibles y contáctanos directamente para coordinar tu matrícula.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Grid de sedes */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
                Nuestras 7 Sedes
              </p>
              <h2 className="text-4xl lg:text-5xl font-extrabold">
                ¿Cuál está más cerca{' '}
                <span className="text-gradient">de ti?</span>
              </h2>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
            >
              {sedesData.map((sede) => (
                <motion.div
                  key={sede.id}
                  variants={fadeUp}
                  className="group bg-white rounded-[2rem] border border-border/40 shadow-md shadow-black/5 hover:shadow-xl hover:border-primary/20 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Foto */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={sede.img}
                      alt={sede.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-primary text-xs font-bold shadow-sm">
                      {sede.district}
                    </span>
                  </div>

                  {/* Contenido */}
                  <div className="p-7 flex-1 flex flex-col">
                    <h3 className="text-xl font-extrabold mb-2 group-hover:text-primary transition-colors">
                      {sede.name}
                    </h3>

                    {/* Dirección y horario */}
                    <div className="space-y-1.5 mb-4">
                      <div className="flex items-start gap-2 text-xs text-muted-foreground">
                        <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-primary" />
                        <span>{sede.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-3.5 h-3.5 shrink-0 text-primary" />
                        <span>{sede.hours}</span>
                      </div>
                    </div>

                    {/* Descripción */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                      {sede.desc}
                    </p>

                    {/* CTA */}
                    <a
                      href={`/sede/${sede.id}`}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-white font-bold text-sm shadow-md shadow-primary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Ver sede
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA de contacto */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 water-gradient z-0" />
          <div className="absolute inset-0 z-[1] opacity-10 bg-[radial-gradient(circle_at_70%_50%,white,transparent_60%)]" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              ¿Tienes Alguna Duda?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Nuestro equipo está disponible para orientarte sobre programas, horarios y costos. Escríbenos y te respondemos rápido.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/51987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-primary font-bold text-base shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.526 5.845L0 24l6.34-1.498A11.963 11.963 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.371l-.359-.213-3.764.889.935-3.668-.234-.375A9.82 9.82 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="tel:+51987654321"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/15 border border-white/30 text-white font-bold text-base backdrop-blur hover:bg-white/25 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +51 987 654 321
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
