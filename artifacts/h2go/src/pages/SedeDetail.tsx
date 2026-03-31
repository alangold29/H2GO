import { motion } from 'framer-motion';
import { useRoute } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NotFound from '@/pages/not-found';
import { sedesById, sedesData, type PricingGroup } from '@/data/sedes';
import { MapPin, Phone, Clock, CheckCircle, ArrowRight, ChevronLeft, Tag } from 'lucide-react';

function PricingTable({ group }: { group: PricingGroup }) {
  const hasPromo = group.promoHeader && group.rows.some((r) => r.promo?.some(Boolean));
  const colCount = group.colHeaders.length;

  return (
    <div className="mb-6 last:mb-0">
      <h4 className="font-bold text-base text-foreground mb-3">{group.title}</h4>
      <div className="overflow-x-auto rounded-2xl border border-border/50 shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-primary text-white">
              <th className="text-left py-3 px-4 font-semibold text-xs uppercase tracking-wide w-2/5">
                Frecuencia
              </th>
              {group.colHeaders.map((h, i) => (
                <th key={i} className="text-center py-3 px-4 font-semibold text-xs uppercase tracking-wide">
                  {h}
                </th>
              ))}
              {hasPromo && (
                <th
                  colSpan={colCount}
                  className="text-center py-3 px-4 font-semibold text-xs uppercase tracking-wide bg-amber-500"
                >
                  {group.promoHeader}
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30">
            {group.rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                <td className="py-3 px-4 font-medium text-foreground/80">{row.label}</td>
                {row.cols.map((price, j) => (
                  <td key={j} className="py-3 px-4 text-center font-bold text-primary">
                    {price ?? <span className="text-muted-foreground font-normal text-xs">—</span>}
                  </td>
                ))}
                {hasPromo && row.promo?.map((price, j) => (
                  <td key={j} className="py-3 px-4 text-center font-bold text-amber-600">
                    {price ?? <span className="text-muted-foreground font-normal text-xs">—</span>}
                  </td>
                ))}
                {hasPromo && !row.promo && Array.from({ length: colCount }).map((_, j) => (
                  <td key={j} className="py-3 px-4 text-center">
                    <span className="text-muted-foreground font-normal text-xs">—</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {group.note && (
        <p className="text-xs text-muted-foreground mt-2 pl-1 italic">{group.note}</p>
      )}
    </div>
  );
}

export default function SedeDetail() {
  const [, params] = useRoute('/sede/:id');
  const id = params?.id ?? '';
  const sede = sedesById[id];

  if (!sede) return <NotFound />;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header solid />

      <main className="flex-1">

        {/* Hero */}
        <section className="relative h-[65vh] min-h-[420px] overflow-hidden">
          <img
            src={sede.img}
            alt={sede.name}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#023e8a]/90 via-[#0077b6]/60 to-transparent" />

          <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <a
                href="/matricula"
                className="inline-flex items-center gap-1 text-sky-300 text-sm font-semibold mb-4 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Todas las Sedes
              </a>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur text-white text-sm font-semibold">
                  {sede.district}
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-3">
                {sede.name}
              </h1>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4 text-sky-300" />
                <span className="text-sm">{sede.address}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Info + Contenido principal */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10">

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Contacto y Horarios */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-[1.5rem] p-7 border border-border/50 shadow-md"
                >
                  <h3 className="font-extrabold text-lg mb-5">Contacto y Horarios</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{sede.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium">{sede.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-muted-foreground">{sede.hours}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Programas */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-[1.5rem] p-7 border border-border/50 shadow-md"
                >
                  <h3 className="font-extrabold text-lg mb-5">Programas Disponibles</h3>
                  <ul className="space-y-3">
                    {sede.programs.map((prog, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm font-medium">{prog}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <a
                    href="/matricula"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-primary text-white font-bold text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Ver Todas las Sedes
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>

              {/* Main content */}
              <div className="lg:col-span-2 space-y-10">

                {/* Descripción */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                >
                  <h2 className="text-3xl font-extrabold mb-4">Sobre Esta Sede</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {sede.desc}
                  </p>
                </motion.div>

                {/* Tarifas */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.05 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Tag className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-3xl font-extrabold">Tarifas Mensuales</h2>
                  </div>
                  <div className="bg-white rounded-[1.5rem] border border-border/50 shadow-md p-7 space-y-8">
                    {sede.pricing.map((group, i) => (
                      <PricingTable key={i} group={group} />
                    ))}
                    <p className="text-xs text-muted-foreground pt-2 border-t border-border/40">
                      * Precios en soles peruanos (S/). Para consultas de precios especiales o descuentos, comunícate directamente con la sede.
                    </p>
                  </div>
                </motion.div>

                {/* Fotos */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.1 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="rounded-2xl overflow-hidden aspect-video shadow-md">
                    <img
                      src={sede.img}
                      alt="Vista de la piscina"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-video shadow-md">
                    <img
                      src={sede.secondaryImg}
                      alt="Clase de natación"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Otras sedes */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-extrabold mb-2">Explora Nuestras Otras Sedes</h3>
            <p className="text-muted-foreground mb-8">Encuentra la más cercana a ti.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {sedesData
                .filter((s) => s.id !== id)
                .map((s) => (
                  <a
                    key={s.id}
                    href={`/sede/${s.id}`}
                    className="px-5 py-2.5 rounded-full bg-white border border-border/50 text-sm font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 shadow-sm"
                  >
                    {s.name}
                  </a>
                ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
