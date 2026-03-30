import { motion } from 'framer-motion';
import { useRoute } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NotFound from '@/pages/not-found';
import { MapPin, Phone, Clock, CheckCircle, ArrowRight, ChevronLeft } from 'lucide-react';

interface Sede {
  id: string;
  nameEs: string;
  nameEn: string;
  district: string;
  addressEs: string;
  addressEn: string;
  phone: string;
  hours: { en: string; es: string };
  img: string;
  secondaryImg: string;
  services: { en: string; es: string }[];
  descEs: string;
  descEn: string;
}

const sedes: Record<string, Sede> = {
  'jockey-club': {
    id: 'jockey-club',
    nameEs: 'Jockey Club del Perú',
    nameEn: 'Jockey Club del Perú',
    district: 'San Borja',
    addressEs: 'Av. Javier Prado Este 1852, San Borja, Lima',
    addressEn: 'Av. Javier Prado Este 1852, San Borja, Lima',
    phone: '+51 987 100 001',
    hours: { en: 'Mon–Sat: 7:00 am – 7:00 pm', es: 'Lun–Sáb: 7:00 am – 7:00 pm' },
    img: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&q=80&w=1200&h=700',
    secondaryImg: 'https://images.unsplash.com/photo-1560090995-01632a28895b?auto=format&fit=crop&q=80&w=600&h=400',
    services: [
      { en: 'Aqua Baby', es: 'Aqua Baby' },
      { en: 'Kids & Teens', es: 'Niños/Adolescentes' },
      { en: 'Adults', es: 'Adultos' },
      { en: 'Semillero', es: 'Semillero' },
      { en: 'H2GO Team', es: 'Equipo H2GO' },
      { en: 'Heated pool', es: 'Piscina temperada' },
    ],
    descEs: 'Nuestra sede principal ubicada en el icónico Jockey Club del Perú. Cuenta con instalaciones de primera clase, piscina temperada de 25 metros y vestidores modernos.',
    descEn: 'Our flagship venue located in the iconic Jockey Club del Perú. Features first-class facilities, a 25-meter heated pool, and modern locker rooms.',
  },
  'petroperu': {
    id: 'petroperu',
    nameEs: 'Club Petroperú',
    nameEn: 'Club Petroperú',
    district: 'Miraflores',
    addressEs: 'Av. El Rosario 250, Miraflores, Lima',
    addressEn: 'Av. El Rosario 250, Miraflores, Lima',
    phone: '+51 987 100 002',
    hours: { en: 'Mon–Sat: 6:30 am – 6:30 pm', es: 'Lun–Sáb: 6:30 am – 6:30 pm' },
    img: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80&w=1200&h=700',
    secondaryImg: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=600&h=400',
    services: [
      { en: 'Aqua Baby', es: 'Aqua Baby' },
      { en: 'Kids & Teens', es: 'Niños/Adolescentes' },
      { en: 'Adults', es: 'Adultos' },
      { en: 'Open Water', es: 'Nado Libre' },
      { en: 'Heated pool', es: 'Piscina temperada' },
    ],
    descEs: 'La sede de Miraflores en el Club Petroperú ofrece un ambiente exclusivo con piscina semi-olímpica y vista panorámica. Perfecta para familias del distrito.',
    descEn: 'The Miraflores venue at Club Petroperú offers an exclusive setting with a semi-Olympic pool and panoramic views. Perfect for families in the district.',
  },
  'santa-clara': {
    id: 'santa-clara',
    nameEs: 'Santa Clara',
    nameEn: 'Santa Clara',
    district: 'Ate',
    addressEs: 'Av. La Molina 1245, Ate, Lima',
    addressEn: 'Av. La Molina 1245, Ate, Lima',
    phone: '+51 987 100 003',
    hours: { en: 'Mon–Sat: 8:00 am – 7:00 pm', es: 'Lun–Sáb: 8:00 am – 7:00 pm' },
    img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1200&h=700',
    secondaryImg: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600&h=400',
    services: [
      { en: 'Aqua Baby', es: 'Aqua Baby' },
      { en: 'Kids & Teens', es: 'Niños/Adolescentes' },
      { en: 'Adults', es: 'Adultos' },
      { en: 'Semillero', es: 'Semillero' },
      { en: 'Heated pool', es: 'Piscina temperada' },
    ],
    descEs: 'La sede de Santa Clara en Ate atiende a las familias del cono este de Lima con instalaciones modernas y un equipo de instructores altamente calificados.',
    descEn: 'The Santa Clara venue in Ate serves families from eastern Lima with modern facilities and a team of highly qualified instructors.',
  },
  'brena': {
    id: 'brena',
    nameEs: 'Breña',
    nameEn: 'Breña',
    district: 'Breña',
    addressEs: 'Av. Arica 621, Breña, Lima',
    addressEn: 'Av. Arica 621, Breña, Lima',
    phone: '+51 987 100 004',
    hours: { en: 'Mon–Sat: 7:30 am – 7:30 pm', es: 'Lun–Sáb: 7:30 am – 7:30 pm' },
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1200&h=700',
    secondaryImg: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&q=80&w=600&h=400',
    services: [
      { en: 'Kids & Teens', es: 'Niños/Adolescentes' },
      { en: 'Adults', es: 'Adultos' },
      { en: 'Open Water', es: 'Nado Libre' },
      { en: 'Heated pool', es: 'Piscina temperada' },
    ],
    descEs: 'La sede de Breña es nuestro punto de referencia en el Centro de Lima. Con fácil acceso en transporte público y un horario amplio, es ideal para trabajadores y familias del centro.',
    descEn: 'The Breña venue is our reference point in Central Lima. With easy public transport access and extended hours, ideal for workers and central Lima families.',
  },
  'club-chama': {
    id: 'club-chama',
    nameEs: 'Club Chama',
    nameEn: 'Club Chama',
    district: 'La Molina',
    addressEs: 'Av. La Molina 595, La Molina, Lima',
    addressEn: 'Av. La Molina 595, La Molina, Lima',
    phone: '+51 987 100 005',
    hours: { en: 'Mon–Sat: 7:00 am – 7:00 pm', es: 'Lun–Sáb: 7:00 am – 7:00 pm' },
    img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=1200&h=700',
    secondaryImg: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=600&h=400',
    services: [
      { en: 'Aqua Baby', es: 'Aqua Baby' },
      { en: 'Kids & Teens', es: 'Niños/Adolescentes' },
      { en: 'Adults', es: 'Adultos' },
      { en: 'H2GO Team', es: 'Equipo H2GO' },
      { en: 'Heated pool', es: 'Piscina temperada' },
    ],
    descEs: 'Club Chama en La Molina es una de nuestras sedes más exclusivas, con piscina de 25 metros, áreas verdes y estacionamiento amplio. Perfecta para las familias de La Molina.',
    descEn: 'Club Chama in La Molina is one of our most exclusive venues, with a 25-meter pool, green areas, and ample parking. Perfect for La Molina families.',
  },
  'jean-le-boulch': {
    id: 'jean-le-boulch',
    nameEs: 'Jean Le Boulch',
    nameEn: 'Jean Le Boulch',
    district: 'San Miguel',
    addressEs: 'Av. Universitaria 1520, San Miguel, Lima',
    addressEn: 'Av. Universitaria 1520, San Miguel, Lima',
    phone: '+51 987 100 006',
    hours: { en: 'Mon–Sat: 7:00 am – 6:30 pm', es: 'Lun–Sáb: 7:00 am – 6:30 pm' },
    img: 'https://images.unsplash.com/photo-1560090995-01632a28895b?auto=format&fit=crop&q=80&w=1200&h=700',
    secondaryImg: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80&w=600&h=400',
    services: [
      { en: 'Aqua Baby', es: 'Aqua Baby' },
      { en: 'Kids & Teens', es: 'Niños/Adolescentes' },
      { en: 'Adults', es: 'Adultos' },
      { en: 'Semillero', es: 'Semillero' },
      { en: 'Heated pool', es: 'Piscina temperada' },
    ],
    descEs: 'La sede Jean Le Boulch en San Miguel está ubicada estratégicamente para servir a Lima Oeste. Cuenta con instalaciones renovadas y un excelente equipo de instructores certificados.',
    descEn: 'The Jean Le Boulch venue in San Miguel is strategically located to serve West Lima. Features renovated facilities and an excellent team of certified instructors.',
  },
  'aopip': {
    id: 'aopip',
    nameEs: 'AOPIP',
    nameEn: 'AOPIP',
    district: 'Callao',
    addressEs: 'Av. Oscar Benavides 3480, Callao, Lima',
    addressEn: 'Av. Oscar Benavides 3480, Callao, Lima',
    phone: '+51 987 100 007',
    hours: { en: 'Mon–Sat: 8:00 am – 6:00 pm', es: 'Lun–Sáb: 8:00 am – 6:00 pm' },
    img: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&q=80&w=1200&h=700',
    secondaryImg: 'https://images.unsplash.com/photo-1560090995-01632a28895b?auto=format&fit=crop&q=80&w=600&h=400',
    services: [
      { en: 'Kids & Teens', es: 'Niños/Adolescentes' },
      { en: 'Adults', es: 'Adultos' },
      { en: 'Open Water', es: 'Nado Libre' },
      { en: 'Heated pool', es: 'Piscina temperada' },
    ],
    descEs: 'Nuestra sede AOPIP en el Callao lleva la excelencia de H2GO al Puerto Principal del Perú. Instalaciones amplias con fácil acceso desde el aeropuerto y zonas industriales.',
    descEn: 'Our AOPIP venue in Callao brings H2GO excellence to Peru\'s Main Port. Spacious facilities with easy access from the airport and industrial areas.',
  },
};

export default function SedeDetail() {
  const { t, lang } = useLanguage();
  const [, params] = useRoute('/sede/:id');
  const id = params?.id ?? '';
  const sede = sedes[id];

  if (!sede) return <NotFound />;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header solid />

      <main className="flex-1">

        {/* Hero */}
        <section className="relative h-[65vh] min-h-[420px] overflow-hidden">
          <img
            src={sede.img}
            alt={lang === 'en' ? sede.nameEn : sede.nameEs}
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
                href="/"
                className="inline-flex items-center gap-1 text-sky-300 text-sm font-semibold mb-4 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                {t('Back to Home', 'Volver al Inicio')}
              </a>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur text-white text-sm font-semibold">
                  {sede.district}
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-3">
                {lang === 'en' ? sede.nameEn : sede.nameEs}
              </h1>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4 text-sky-300" />
                <span className="text-sm">{lang === 'en' ? sede.addressEn : sede.addressEs}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Info + Servicios */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10">

              {/* Info Cards */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-[1.5rem] p-7 border border-border/50 shadow-md"
                >
                  <h3 className="font-extrabold text-lg mb-5">{t('Contact & Hours', 'Contacto y Horarios')}</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{lang === 'en' ? sede.addressEn : sede.addressEs}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium">{sede.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-muted-foreground">{lang === 'en' ? sede.hours.en : sede.hours.es}</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-[1.5rem] p-7 border border-border/50 shadow-md"
                >
                  <h3 className="font-extrabold text-lg mb-5">{t('Programs Offered', 'Programas Disponibles')}</h3>
                  <ul className="space-y-3">
                    {sede.services.map((svc, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm font-medium">{lang === 'en' ? svc.en : svc.es}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

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
                    {t('Enroll at This Venue', 'Matricúlate en Esta Sede')}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>

              {/* Description + Photos */}
              <div className="lg:col-span-2 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                >
                  <h2 className="text-3xl font-extrabold mb-4">
                    {t('About This Venue', 'Sobre Esta Sede')}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {lang === 'en' ? sede.descEn : sede.descEs}
                  </p>
                </motion.div>

                {/* Photo gallery placeholder */}
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
                      alt={t('Pool view', 'Vista de la piscina')}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-video shadow-md">
                    <img
                      src={sede.secondaryImg}
                      alt={t('Swimming class', 'Clase de natación')}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="col-span-2 rounded-2xl overflow-hidden border-2 border-dashed border-border/60 bg-slate-50 flex items-center justify-center py-10">
                    <p className="text-muted-foreground text-sm font-medium">
                      {t('More photos coming soon', 'Más fotos próximamente')}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Otras sedes */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-extrabold mb-2">{t('Explore Our Other Venues', 'Explora Nuestras Otras Sedes')}</h3>
            <p className="text-muted-foreground mb-8">
              {t('Find the one closest to you.', 'Encuentra la más cercana a ti.')}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.values(sedes)
                .filter((s) => s.id !== id)
                .map((s) => (
                  <a
                    key={s.id}
                    href={`/sede/${s.id}`}
                    className="px-5 py-2.5 rounded-full bg-white border border-border/50 text-sm font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 shadow-sm"
                  >
                    {lang === 'en' ? s.nameEn : s.nameEs}
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
