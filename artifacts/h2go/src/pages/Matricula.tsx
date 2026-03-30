import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, ArrowRight, User, Calendar, MapPin, Layers, MessageSquare, Loader2 } from 'lucide-react';

const sedes = [
  { id: 'jockey-club', label: 'Jockey Club del Perú (San Borja)' },
  { id: 'petroperu', label: 'Club Petroperú (Miraflores)' },
  { id: 'santa-clara', label: 'Santa Clara (Ate)' },
  { id: 'brena', label: 'Breña' },
  { id: 'club-chama', label: 'Club Chama (La Molina)' },
  { id: 'jean-le-boulch', label: 'Jean Le Boulch (San Miguel)' },
  { id: 'aopip', label: 'AOPIP (Callao)' },
];

const schema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  edad: z
    .number({ invalid_type_error: 'Ingresa una edad válida.' })
    .int()
    .min(1, 'La edad mínima es 1 año.')
    .max(80, 'La edad máxima es 80 años.'),
  sede: z.string().min(1, 'Selecciona una sede.'),
  nivel: z.enum(['basico', 'intermedio', 'avanzado'], { required_error: 'Selecciona un nivel.' }),
  notas: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function Matricula() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_data: FormData) => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsLoading(false);
    setSubmitted(true);
  };

  const levels = [
    { value: 'basico', label: t('Basic', 'Básico'), desc: t('For beginners (7–10 yrs)', 'Para principiantes (7–10 años)') },
    { value: 'intermedio', label: t('Intermediate', 'Intermedio'), desc: t('Building technique (9–14 yrs)', 'Desarrollo técnico (9–14 años)') },
    { value: 'avanzado', label: t('Advanced', 'Avanzado'), desc: t('Competitive focus (12–17 yrs)', 'Orientación competitiva (12–17 años)') },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header solid />

      <main className="flex-1">

        {/* Hero interior */}
        <section className="relative py-28 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1560090995-01632a28895b?auto=format&fit=crop&q=80&w=1600&h=700"
            alt="Matrícula H2GO"
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
                {t('Enrollment', 'Matrícula')}
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                {t('Start Your ', 'Inicia Tu ')}
                <span className="text-sky-300">{t('Swimming Journey', 'Aventura Acuática')}</span>
              </h1>
              <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                {t(
                  'Fill in the form below and one of our coordinators will contact you within 24 hours to confirm your enrollment and schedule.',
                  'Completa el formulario y uno de nuestros coordinadores se comunicará contigo en 24 horas para confirmar tu matrícula y horario.'
                )}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Formulario */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-[2.5rem] border border-border/50 shadow-xl p-12 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-extrabold mb-4">
                    {t('Registration Received!', '¡Solicitud Recibida!')}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {t(
                      'Thank you for your interest in H2GO. Our team will contact you within 24 hours to confirm your enrollment details and schedule your first class.',
                      'Gracias por tu interés en H2GO. Nuestro equipo se comunicará contigo en las próximas 24 horas para confirmar los detalles de tu matrícula y programar tu primera clase.'
                    )}
                  </p>
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
                  >
                    {t('Back to Home', 'Volver al Inicio')}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55 }}
                  className="bg-white rounded-[2.5rem] border border-border/50 shadow-xl overflow-hidden"
                >
                  {/* Form header */}
                  <div className="water-gradient px-10 py-8">
                    <h2 className="text-2xl font-extrabold text-white mb-1">
                      {t('Enrollment Form', 'Formulario de Matrícula')}
                    </h2>
                    <p className="text-white/75 text-sm">
                      {t('All fields marked * are required.', 'Todos los campos marcados con * son obligatorios.')}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="px-10 py-10 space-y-8">

                    {/* Nombre */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-bold mb-2">
                        <User className="w-4 h-4 text-primary" />
                        {t("Student's Full Name *", 'Nombre Completo del Alumno *')}
                      </label>
                      <input
                        {...register('nombre')}
                        placeholder={t("e.g. María García López", "Ej. María García López")}
                        className="w-full px-4 py-3 rounded-xl border border-border/60 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      />
                      {errors.nombre && (
                        <p className="text-destructive text-xs mt-1.5 font-medium">{errors.nombre.message}</p>
                      )}
                    </div>

                    {/* Edad */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-bold mb-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        {t("Student's Age *", 'Edad del Alumno *')}
                      </label>
                      <input
                        {...register('edad', { valueAsNumber: true })}
                        type="number"
                        min={1}
                        max={80}
                        placeholder={t("e.g. 8", "Ej. 8")}
                        className="w-full px-4 py-3 rounded-xl border border-border/60 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      />
                      {errors.edad && (
                        <p className="text-destructive text-xs mt-1.5 font-medium">{errors.edad.message}</p>
                      )}
                    </div>

                    {/* Sede */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-bold mb-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        {t("Venue of Interest *", 'Sede de Interés *')}
                      </label>
                      <select
                        {...register('sede')}
                        className="w-full px-4 py-3 rounded-xl border border-border/60 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          {t('Select a venue...', 'Selecciona una sede...')}
                        </option>
                        {sedes.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                      {errors.sede && (
                        <p className="text-destructive text-xs mt-1.5 font-medium">{errors.sede.message}</p>
                      )}
                    </div>

                    {/* Nivel */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-bold mb-3">
                        <Layers className="w-4 h-4 text-primary" />
                        {t("Swimming Level *", 'Nivel de Natación *')}
                      </label>
                      <div className="grid sm:grid-cols-3 gap-3">
                        {levels.map((lvl) => (
                          <label
                            key={lvl.value}
                            className="relative cursor-pointer"
                          >
                            <input
                              type="radio"
                              value={lvl.value}
                              {...register('nivel')}
                              className="sr-only peer"
                            />
                            <div className="border-2 border-border/50 rounded-2xl p-4 text-center peer-checked:border-primary peer-checked:bg-primary/5 hover:border-primary/40 transition-all duration-200">
                              <span className="block font-bold text-base mb-1">{lvl.label}</span>
                              <span className="block text-xs text-muted-foreground">{lvl.desc}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.nivel && (
                        <p className="text-destructive text-xs mt-1.5 font-medium">{errors.nivel.message}</p>
                      )}
                    </div>

                    {/* Notas */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-bold mb-2">
                        <MessageSquare className="w-4 h-4 text-primary" />
                        {t('Additional Notes (optional)', 'Notas Adicionales (opcional)')}
                      </label>
                      <textarea
                        {...register('notas')}
                        rows={3}
                        placeholder={t(
                          'Any relevant information: health conditions, preferred schedule, etc.',
                          'Cualquier información relevante: condiciones de salud, horario preferido, etc.'
                        )}
                        className="w-full px-4 py-3 rounded-xl border border-border/60 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-primary text-white font-bold text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0 transition-all duration-300"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          {t('Submitting...', 'Enviando...')}
                        </>
                      ) : (
                        <>
                          {t('Submit Enrollment Request', 'Enviar Solicitud de Matrícula')}
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-muted-foreground">
                      {t(
                        'By submitting this form you agree to be contacted by H2GO regarding your enrollment request. We will never share your data with third parties.',
                        'Al enviar este formulario aceptas ser contactado por H2GO en relación a tu solicitud de matrícula. Nunca compartiremos tus datos con terceros.'
                      )}
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Info cards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: t('Fill the Form', 'Completa el Formulario'),
                  desc: t('Share your details so we can find the best program for you.', 'Comparte tus datos para encontrar el mejor programa para ti.'),
                },
                {
                  num: '02',
                  title: t('We Contact You', 'Te Contactamos'),
                  desc: t('Our team will call or email you within 24 hours to confirm everything.', 'Nuestro equipo te llamará o escribirá en 24 horas para confirmar todo.'),
                },
                {
                  num: '03',
                  title: t('Start Swimming!', '¡Empieza a Nadar!'),
                  desc: t('Attend your first class and discover why H2GO is Lima\'s #1 swim school.', 'Asiste a tu primera clase y descubre por qué H2GO es la escuela #1 de Lima.'),
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center p-8"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <span className="text-primary font-extrabold text-2xl">{step.num}</span>
                  </div>
                  <h3 className="font-extrabold text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
