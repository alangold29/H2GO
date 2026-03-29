import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const STEPS = 4;

const programs = [
  { en: 'Babies & Toddlers', es: 'Bebés y Pequeños', age: '6 mos – 3 yrs', icon: '👶' },
  { en: 'Kids Swim Lessons', es: 'Clases para Niños', age: '4 – 12 yrs', icon: '🏊' },
  { en: 'Teen Development', es: 'Desarrollo para Adolescentes', age: '13 – 17 yrs', icon: '🏅' },
  { en: 'Adult Classes', es: 'Clases para Adultos', age: '18+', icon: '🧑‍🤝‍🧑' },
  { en: 'Private Coaching', es: 'Clases Privadas', age: '1-on-1', icon: '🎯' },
];

const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '2:00 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM',
];

const instructors = [
  {
    name: 'Ana Torres',
    specialty: { en: 'Kids & Babies', es: 'Niños y Bebés' },
    exp: { en: '8 yrs experience', es: '8 años de experiencia' },
    rating: 4.9,
    initials: 'AT',
    color: 'from-[#023e8a] to-[#0077b6]',
  },
  {
    name: 'Carlos Ríos',
    specialty: { en: 'Adults & Teens', es: 'Adultos y Adolescentes' },
    exp: { en: '12 yrs experience', es: '12 años de experiencia' },
    rating: 5.0,
    initials: 'CR',
    color: 'from-[#0077b6] to-[#0096c7]',
  },
  {
    name: 'Sofía Mendez',
    specialty: { en: 'Private Coaching', es: 'Entrenamiento Privado' },
    exp: { en: '6 yrs experience', es: '6 años de experiencia' },
    rating: 4.8,
    initials: 'SM',
    color: 'from-[#0096c7] to-[#00b4d8]',
  },
  {
    name: 'Miguel Vega',
    specialty: { en: 'Teen Development', es: 'Desarrollo Adolescente' },
    exp: { en: '9 yrs experience', es: '9 años de experiencia' },
    rating: 4.7,
    initials: 'MV',
    color: 'from-[#5e60ce] to-[#7400b8]',
  },
];

// Simple calendar helpers
function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}
const MONTH_NAMES_EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const MONTH_NAMES_ES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const DAY_NAMES_EN = ['Su','Mo','Tu','We','Th','Fr','Sa'];
const DAY_NAMES_ES = ['Do','Lu','Ma','Mi','Ju','Vi','Sá'];

// Pseudo-available days (every day except some)
function isAvailable(day: number): boolean {
  return day % 7 !== 0 && day % 13 !== 0; // some days "unavailable" for demo
}

export default function Booking() {
  const { t, lang } = useLanguage();
  const [step, setStep] = useState(1);
  const [completed, setCompleted] = useState(false);

  const today = new Date();
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [calYear, setCalYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [selectedInstructor, setSelectedInstructor] = useState<number | null>(null);

  const totalSteps = STEPS;
  const stepLabel = (s: number) => {
    if (s === 1) return t('Select Program', 'Programa');
    if (s === 2) return t('Date & Time', 'Fecha y Hora');
    if (s === 3) return t('Choose Instructor', 'Instructor');
    return t('Your Details', 'Tus Datos');
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
    else setCompleted(true);
  };
  const prevStep = () => { if (step > 1) setStep(step - 1); };
  const skipToEnd = () => setCompleted(true);

  const daysInMonth = getDaysInMonth(calYear, calMonth);
  const firstDay = getFirstDayOfMonth(calYear, calMonth);

  const prevMonth = () => {
    if (calMonth === 0) { setCalMonth(11); setCalYear(calYear - 1); }
    else setCalMonth(calMonth - 1);
    setSelectedDay(null); setSelectedTime(null);
  };
  const nextMonth = () => {
    if (calMonth === 11) { setCalMonth(0); setCalYear(calYear + 1); }
    else setCalMonth(calMonth + 1);
    setSelectedDay(null); setSelectedTime(null);
  };

  return (
    <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {!completed ? (
          <div>
            {/* Progress */}
            <div className="mb-10">
              <div className="flex justify-between items-end mb-3">
                <h1 className="text-3xl font-bold text-foreground">{stepLabel(step)}</h1>
                <span className="text-sm font-semibold text-primary">{step}/{totalSteps}</span>
              </div>
              {/* Step dots */}
              <div className="flex items-center gap-2 mb-3">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div key={i} className={`h-2 rounded-full flex-1 transition-all duration-300 ${i < step ? 'bg-primary' : 'bg-border'}`} />
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <span key={i} className={i + 1 === step ? 'text-primary font-semibold' : ''}>{stepLabel(i + 1)}</span>
                ))}
              </div>
            </div>

            {/* Step 1: Program */}
            {step === 1 && (
              <div className="space-y-3">
                <p className="text-muted-foreground mb-6">{t('Which program interests you?', '¿Cuál es tu programa de interés?')}</p>
                {programs.map((prog, i) => (
                  <button
                    key={i}
                    onClick={nextStep}
                    className="w-full p-4 text-left border-2 border-border rounded-2xl hover:border-primary hover:bg-primary/5 transition-colors duration-150 group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{prog.icon}</span>
                      <div className="flex-1">
                        <p className="font-bold text-foreground group-hover:text-primary transition-colors">{t(prog.en, prog.es)}</p>
                        <p className="text-sm text-muted-foreground">{prog.age}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: Calendar + Time Slots */}
            {step === 2 && (
              <div>
                <p className="text-muted-foreground mb-6">{t('Pick a date and time that works for you.', 'Elige una fecha y hora que te convenga.')}</p>
                {/* Calendar */}
                <div className="border-2 border-border rounded-2xl p-5 mb-6 bg-white">
                  {/* Month nav */}
                  <div className="flex items-center justify-between mb-4">
                    <button onClick={prevMonth} className="p-2 rounded-lg hover:bg-muted transition-colors">
                      <ChevronLeft className="w-5 h-5 text-foreground" />
                    </button>
                    <span className="font-bold text-foreground">
                      {lang === 'en' ? MONTH_NAMES_EN[calMonth] : MONTH_NAMES_ES[calMonth]} {calYear}
                    </span>
                    <button onClick={nextMonth} className="p-2 rounded-lg hover:bg-muted transition-colors">
                      <ChevronRight className="w-5 h-5 text-foreground" />
                    </button>
                  </div>
                  {/* Day headers */}
                  <div className="grid grid-cols-7 mb-2">
                    {(lang === 'en' ? DAY_NAMES_EN : DAY_NAMES_ES).map((d) => (
                      <div key={d} className="text-center text-xs font-semibold text-muted-foreground py-1">{d}</div>
                    ))}
                  </div>
                  {/* Day cells */}
                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const avail = isAvailable(day);
                      const isSelected = selectedDay === day;
                      const isPast = calYear === today.getFullYear() && calMonth === today.getMonth() && day < today.getDate();
                      return (
                        <button
                          key={day}
                          disabled={!avail || isPast}
                          onClick={() => { setSelectedDay(day); setSelectedTime(null); }}
                          className={`aspect-square w-full rounded-xl text-sm font-medium transition-all duration-150
                            ${isSelected ? 'bg-primary text-white font-bold' : ''}
                            ${!isSelected && avail && !isPast ? 'hover:bg-primary/10 hover:text-primary text-foreground' : ''}
                            ${!avail || isPast ? 'text-muted-foreground/40 cursor-not-allowed' : ''}
                          `}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time slots */}
                {selectedDay && (
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-3">
                      {t('Available times for', 'Horarios disponibles para')} {lang === 'en' ? MONTH_NAMES_EN[calMonth] : MONTH_NAMES_ES[calMonth]} {selectedDay}:
                    </p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setSelectedTime(slot)}
                          className={`py-2.5 rounded-xl border-2 text-sm font-semibold transition-colors duration-150
                            ${selectedTime === slot
                              ? 'border-primary bg-primary text-white'
                              : 'border-border hover:border-primary hover:bg-primary/5 text-foreground'
                            }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Instructor */}
            {step === 3 && (
              <div>
                <p className="text-muted-foreground mb-6">{t('Choose your preferred instructor (optional).', 'Elige tu instructor preferido (opcional).')}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {instructors.map((ins, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedInstructor(i)}
                      className={`text-left p-4 rounded-2xl border-2 transition-colors duration-150 group
                        ${selectedInstructor === i ? 'border-primary bg-primary/5' : 'border-border hover:border-primary hover:bg-primary/5'}`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${ins.color} flex items-center justify-center text-white font-bold text-base shrink-0`}>{ins.initials}</div>
                        <div>
                          <p className="font-bold text-foreground">{ins.name}</p>
                          <p className="text-sm text-muted-foreground">{lang === 'en' ? ins.specialty.en : ins.specialty.es}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{lang === 'en' ? ins.exp.en : ins.exp.es}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-semibold text-foreground">{ins.rating}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  {t('No preference? We\'ll match you with the best fit.', 'Sin preferencia, te asignamos el mejor instructor.')}
                </p>
              </div>
            )}

            {/* Step 4: Details */}
            {step === 4 && (
              <div className="space-y-5">
                <p className="text-muted-foreground">{t('Almost there! Your details (optional for demo)', '¡Casi listo! Tus datos (opcional para demo)')}</p>
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
                {/* Booking summary */}
                {(selectedDay || selectedTime) && (
                  <div className="mt-2 p-4 bg-primary/5 border border-primary/20 rounded-xl text-sm space-y-1">
                    <p className="font-semibold text-foreground">{t('Your booking summary:', 'Resumen de tu reserva:')}</p>
                    {selectedDay && (
                      <p className="text-muted-foreground">
                        📅 {lang === 'en' ? MONTH_NAMES_EN[calMonth] : MONTH_NAMES_ES[calMonth]} {selectedDay}, {calYear}
                        {selectedTime && ` · ${selectedTime}`}
                      </p>
                    )}
                    {selectedInstructor !== null && (
                      <p className="text-muted-foreground">👨‍🏫 {instructors[selectedInstructor].name}</p>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Nav buttons */}
            <div className="flex gap-3 mt-10">
              <button
                onClick={prevStep}
                disabled={step === 1}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-border text-foreground font-semibold hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                {t('Back', 'Atrás')}
              </button>
              <button
                onClick={nextStep}
                className="flex-1 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
              >
                {step === totalSteps ? t('Complete Booking', 'Completar Reserva') : t('Next', 'Siguiente')}
                <ArrowRight className="w-4 h-4 inline ml-2" />
              </button>
              <button
                onClick={skipToEnd}
                className="px-5 py-3 rounded-xl border-2 border-muted text-muted-foreground hover:border-primary hover:text-primary font-semibold transition-colors"
              >
                {t('Skip', 'Omitir')}
              </button>
            </div>
          </div>
        ) : (
          /* Thank you */
          <div className="text-center space-y-8 py-16">
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-5xl">✅</div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {t('Booking Confirmed!', '¡Reserva Confirmada!')}
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                {t(
                  "Your trial class is booked! We'll send you a confirmation shortly. Get ready to dive in with H2GO!",
                  '¡Tu clase de prueba está reservada! Te enviaremos confirmación pronto. ¡Prepárate para sumergirte con H2GO!'
                )}
              </p>
            </div>
            {(selectedDay || selectedInstructor !== null) && (
              <div className="inline-block text-left p-5 bg-primary/5 border border-primary/20 rounded-2xl space-y-2 text-sm">
                {selectedDay && (
                  <p className="text-foreground font-medium">
                    📅 {lang === 'en' ? MONTH_NAMES_EN[calMonth] : MONTH_NAMES_ES[calMonth]} {selectedDay}, {calYear}
                    {selectedTime && ` · ${selectedTime}`}
                  </p>
                )}
                {selectedInstructor !== null && (
                  <p className="text-foreground font-medium">👨‍🏫 {instructors[selectedInstructor].name}</p>
                )}
              </div>
            )}
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
