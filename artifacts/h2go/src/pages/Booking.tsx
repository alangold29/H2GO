import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, ChevronLeft } from 'lucide-react';

export default function Booking() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [completed, setCompleted] = useState(false);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
    else setCompleted(true);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const skipToEnd = () => setCompleted(true);

  return (
    <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {!completed ? (
          <div>
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold text-foreground">
                  {step === 1 && t('Select Your Program', 'Selecciona tu Programa')}
                  {step === 2 && t('Choose a Schedule', 'Elige tu Horario')}
                  {step === 3 && t('Enter Your Details', 'Ingresa tus Datos')}
                </h1>
                <span className="text-sm font-semibold text-primary">{step}/3</span>
              </div>
              <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                <motion.div
                  animate={{ width: `${(step / 3) * 100}%` }}
                  className="h-full bg-primary"
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Step 1: Program Selection */}
            {step === 1 && (
              <div className="space-y-4 mt-8">
                <p className="text-muted-foreground mb-4">
                  {t('Which program interests you?', '¿Cuál es tu programa de interés?')}
                </p>
                {[
                  { en: 'Babies & Toddlers', es: 'Bebés y Pequeños', age: '6 mos – 3 yrs' },
                  { en: 'Kids Swim Lessons', es: 'Clases para Niños', age: '4 – 12 yrs' },
                  { en: 'Teen Development', es: 'Desarrollo para Adolescentes', age: '13 – 17 yrs' },
                  { en: 'Adult Classes', es: 'Clases para Adultos', age: '18+' },
                ].map((prog, i) => (
                  <button
                    key={i}
                    onClick={nextStep}
                    className="w-full p-4 text-left border-2 border-border rounded-2xl hover:border-primary hover:bg-primary/5 transition-colors duration-150 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                          {t(prog.en, prog.es)}
                        </p>
                        <p className="text-sm text-muted-foreground">{prog.age}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: Schedule */}
            {step === 2 && (
              <div className="space-y-4 mt-8">
                <p className="text-muted-foreground mb-4">
                  {t('Pick your preferred time', 'Elige tu horario preferido')}
                </p>
                {[
                  { en: 'Monday & Wednesday, 4:00 PM', es: 'Lunes y Miércoles, 4:00 PM' },
                  { en: 'Tuesday & Thursday, 5:30 PM', es: 'Martes y Jueves, 5:30 PM' },
                  { en: 'Saturday, 10:00 AM', es: 'Sábado, 10:00 AM' },
                  { en: 'Saturday, 2:00 PM', es: 'Sábado, 2:00 PM' },
                ].map((slot, i) => (
                  <button
                    key={i}
                    onClick={nextStep}
                    className="w-full p-4 text-left border-2 border-border rounded-2xl hover:border-primary hover:bg-primary/5 transition-colors duration-150 group"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {t(slot.en, slot.es)}
                      </p>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Step 3: Details */}
            {step === 3 && (
              <div className="space-y-6 mt-8">
                <p className="text-muted-foreground">
                  {t('Almost there! Leave your details (optional for demo)', '¡Casi listo! Deja tus datos (opcional para demo)')}
                </p>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder={t('Full Name', 'Nombre Completo')}
                    className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder={t('Email Address', 'Correo Electrónico')}
                    className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder={t('Phone Number', 'Teléfono')}
                    className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex gap-4 mt-10">
              <button
                onClick={prevStep}
                disabled={step === 1}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-border text-foreground font-semibold hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                {t('Back', 'Atrás')}
              </button>
              <button
                onClick={nextStep}
                className="flex-1 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
              >
                {step === 3 ? t('Complete Booking', 'Completar Reserva') : t('Next', 'Siguiente')}
                <ArrowRight className="w-4 h-4 inline ml-2" />
              </button>
              <button
                onClick={skipToEnd}
                className="px-6 py-3 rounded-xl border-2 border-muted text-muted-foreground hover:border-primary hover:text-primary font-semibold transition-colors"
              >
                {t('Skip', 'Omitir')}
              </button>
            </div>
          </div>
        ) : (
          /* Thank you */
          <div className="text-center space-y-8 py-16">
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-5xl">
                ✅
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {t('Booking Confirmed!', '¡Reserva Confirmada!')}
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                {t(
                  "Your trial class is booked! We'll send you a confirmation email shortly. Get ready to dive in with H2GO!",
                  '¡Tu clase de prueba está reservada! Te enviaremos un correo pronto. ¡Prepárate para sumergirte con H2GO!'
                )}
              </p>
            </div>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-semibold hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
            >
              {t('Back to Home', 'Volver al Inicio')}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
