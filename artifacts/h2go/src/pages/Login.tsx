import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ShieldCheck, Briefcase, User, ArrowRight, CheckCircle2 } from 'lucide-react';

const roles = [
  {
    key: 'admin',
    icon: ShieldCheck,
    color: 'from-[#023e8a] to-[#0077b6]',
    borderColor: 'border-[#023e8a]',
    bgLight: 'bg-[#023e8a]/8',
    iconColor: 'text-[#023e8a]',
    en: { label: 'Admin Login', desc: 'Full platform access — manage programs, users & settings' },
    es: { label: 'Acceso Admin', desc: 'Acceso completo — gestiona programas, usuarios y configuración' },
  },
  {
    key: 'staff',
    icon: Briefcase,
    color: 'from-[#0077b6] to-[#00b4d8]',
    borderColor: 'border-[#0077b6]',
    bgLight: 'bg-[#0077b6]/8',
    iconColor: 'text-[#0077b6]',
    en: { label: 'Staff Login', desc: 'Instructor & staff portal — view schedules and student progress' },
    es: { label: 'Acceso Staff', desc: 'Portal de instructores — horarios y progreso de alumnos' },
  },
  {
    key: 'client',
    icon: User,
    color: 'from-[#00b4d8] to-[#90e0ef]',
    borderColor: 'border-[#00b4d8]',
    bgLight: 'bg-[#00b4d8]/8',
    iconColor: 'text-[#00b4d8]',
    en: { label: 'Client Login', desc: 'Student & parent portal — track classes and progress' },
    es: { label: 'Acceso Cliente', desc: 'Portal de alumnos y padres — clases y progreso' },
  },
];

export default function Login() {
  const { t, lang } = useLanguage();
  const [selected, setSelected] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (key: string) => {
    setSelected(key);
    setTimeout(() => setLoggedIn(true), 400);
  };

  return (
    <div className="flex-1 flex min-h-[calc(100vh-140px)]">
      {/* Left side — full-height image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=85&w=900&h=1200"
          alt="H2GO swimmer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#023e8a]/80 via-[#0077b6]/60 to-[#00b4d8]/50" />
        <div className="absolute inset-0 flex flex-col justify-end p-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a href="/" className="flex items-center gap-3 mb-8">
              <span className="font-display font-bold text-4xl tracking-tight text-white drop-shadow-lg">
                H2GO
              </span>
            </a>
            <h2 className="text-3xl font-extrabold text-white mb-4 leading-snug">
              {t('Welcome back to\nyour swim journey.', 'Bienvenido de vuelta\na tu viaje en el agua.')}
            </h2>
            <p className="text-white/80 text-lg max-w-sm">
              {t(
                'Access your H2GO dashboard to manage lessons, schedules, and progress.',
                'Accede a tu panel H2GO para gestionar clases, horarios y progreso.'
              )}
            </p>
            <div className="mt-10 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-sky-300 animate-pulse" />
              <span className="text-white/70 text-sm font-medium">
                {t('Premium Swimming School — Lima, Peru', 'Escuela de Natación Premium — Lima, Perú')}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right side — role selection */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6 py-16">
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait">
            {!loggedIn ? (
              <motion.div
                key="login-panel"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4 }}
              >
                {/* Mobile logo */}
                <div className="lg:hidden mb-8 text-center">
                  <span className="font-display font-bold text-3xl text-primary">H2GO</span>
                </div>

                <div className="mb-10">
                  <h1 className="text-3xl font-extrabold text-foreground mb-2">
                    {t('Sign in to H2GO', 'Inicia sesión en H2GO')}
                  </h1>
                  <p className="text-muted-foreground">
                    {t('Choose your account type to continue.', 'Elige tu tipo de cuenta para continuar.')}
                  </p>
                </div>

                <div className="space-y-4">
                  {roles.map((role, i) => {
                    const Icon = role.icon;
                    const label = lang === 'en' ? role.en.label : role.es.label;
                    const desc = lang === 'en' ? role.en.desc : role.es.desc;
                    return (
                      <motion.button
                        key={role.key}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
                        onClick={() => handleLogin(role.key)}
                        className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 group
                          ${selected === role.key
                            ? `${role.borderColor} ${role.bgLight}`
                            : 'border-border hover:border-primary/40 hover:bg-primary/5'
                          }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0
                            bg-gradient-to-br ${role.color}`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-foreground group-hover:text-primary transition-colors text-base">
                              {label}
                            </p>
                            <p className="text-sm text-muted-foreground leading-snug mt-0.5">{desc}</p>
                          </div>
                          <ArrowRight className={`w-5 h-5 shrink-0 transition-all duration-200
                            ${selected === role.key ? 'text-primary translate-x-1' : 'text-muted-foreground group-hover:text-primary group-hover:translate-x-1'}`} />
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                <p className="mt-10 text-center text-xs text-muted-foreground">
                  {t(
                    'This is a wireframe demo — no real authentication.',
                    'Esta es una demo de wireframe — sin autenticación real.'
                  )}
                </p>
              </motion.div>
            ) : (
              /* Post-login confirmation */
              <motion.div
                key="logged-in"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center space-y-8"
              >
                <div className="space-y-4">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h1 className="text-3xl font-bold text-foreground">
                    {t('Logged in!', '¡Sesión iniciada!')}
                  </h1>
                  <p className="text-muted-foreground max-w-xs mx-auto">
                    {t(
                      `You've signed in as ${roles.find(r => r.key === selected)?.[lang === 'en' ? 'en' : 'es'].label ?? 'User'}. Dashboard coming soon.`,
                      `Has iniciado como ${roles.find(r => r.key === selected)?.[lang === 'en' ? 'en' : 'es'].label ?? 'Usuario'}. Panel próximamente.`
                    )}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => { setLoggedIn(false); setSelected(null); }}
                    className="w-full px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
                  >
                    {t('Back to Login', 'Volver al Login')}
                  </button>
                  <a
                    href="/"
                    className="w-full px-6 py-3 rounded-xl border-2 border-border text-foreground font-semibold hover:bg-muted transition-colors text-center"
                  >
                    {t('Back to Home', 'Volver al Inicio')}
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
