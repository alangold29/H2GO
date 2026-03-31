import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ShieldCheck, Briefcase, User, ArrowRight, CheckCircle2 } from 'lucide-react';

const roles = [
  {
    key: 'admin',
    icon: ShieldCheck,
    color: 'from-[#023e8a] to-[#0077b6]',
    borderColor: 'border-[#023e8a]',
    bgLight: 'bg-[#023e8a]/5',
    en: { label: 'Admin Login', desc: 'Full platform access — manage programs, users & settings' },
    es: { label: 'Acceso Admin', desc: 'Acceso completo — gestiona programas, usuarios y configuración' },
  },
  {
    key: 'staff',
    icon: Briefcase,
    color: 'from-[#0077b6] to-[#00b4d8]',
    borderColor: 'border-[#0077b6]',
    bgLight: 'bg-[#0077b6]/5',
    en: { label: 'Staff Login', desc: 'Instructor & staff portal — view schedules and student progress' },
    es: { label: 'Acceso Staff', desc: 'Portal de instructores — horarios y progreso de alumnos' },
  },
  {
    key: 'client',
    icon: User,
    color: 'from-[#00b4d8] to-[#90e0ef]',
    borderColor: 'border-[#00b4d8]',
    bgLight: 'bg-[#00b4d8]/5',
    en: { label: 'Client Login', desc: 'Student & parent portal — track classes and progress' },
    es: { label: 'Acceso Cliente', desc: 'Portal de alumnos y padres — clases y progreso' },
  },
];

export default function Login() {
  const { t, lang } = useLanguage();
  const [selected, setSelected] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (key: string) => {
    if (key === 'admin') { window.location.href = '/admin'; return; }
    if (key === 'staff') { window.location.href = '/staff'; return; }
    if (key === 'client') { window.location.href = '/client'; return; }
    setSelected(key);
    setLoggedIn(true);
  };

  return (
    <div className="flex-1 flex" style={{ minHeight: 'calc(100vh - 64px - 80px)' }}>
      {/* Left side — image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <img
          src="/images/swimmer-h2go.jpg"
          alt="H2GO swimmer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#023e8a]/80 via-[#0077b6]/60 to-[#00b4d8]/50" />
        <div className="absolute inset-0 flex flex-col justify-end p-12">
          <a href="/" className="flex items-center gap-3 mb-8">
            <span className="font-display font-bold text-4xl tracking-tight text-white drop-shadow-lg">
              H2GO
            </span>
          </a>
          <h2 className="text-3xl font-extrabold text-white mb-4 leading-snug">
            {t('Welcome back to your swim journey.', 'Bienvenido de vuelta a tu viaje en el agua.')}
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
        </div>
      </div>

      {/* Right side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6 py-14">
        <div className="w-full max-w-md">
          {!loggedIn ? (
            <>
              {/* Mobile logo */}
              <div className="lg:hidden mb-8 text-center">
                <span className="font-display font-bold text-3xl text-primary">H2GO</span>
              </div>

              <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-foreground mb-2">
                  {t('Sign in to H2GO', 'Inicia sesión en H2GO')}
                </h1>
                <p className="text-muted-foreground">
                  {t('Choose your account type to continue.', 'Elige tu tipo de cuenta para continuar.')}
                </p>
              </div>

              <div className="space-y-4">
                {roles.map((role) => {
                  const Icon = role.icon;
                  const label = lang === 'en' ? role.en.label : role.es.label;
                  const desc = lang === 'en' ? role.en.desc : role.es.desc;
                  return (
                    <button
                      key={role.key}
                      onClick={() => handleLogin(role.key)}
                      className="w-full text-left p-5 rounded-2xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-colors duration-150 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${role.color}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-foreground group-hover:text-primary transition-colors text-base">
                            {label}
                          </p>
                          <p className="text-sm text-muted-foreground leading-snug mt-0.5">{desc}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-150 shrink-0" />
                      </div>
                    </button>
                  );
                })}
              </div>

              <p className="mt-8 text-center text-xs text-muted-foreground">
                {t(
                  'Wireframe demo — no real authentication.',
                  'Demo de wireframe — sin autenticación real.'
                )}
              </p>
            </>
          ) : (
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-3xl font-bold text-foreground">
                  {t('Logged in!', '¡Sesión iniciada!')}
                </h1>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  {t(
                    `Signed in as ${roles.find(r => r.key === selected)?.[lang === 'en' ? 'en' : 'es'].label ?? 'User'}. Dashboard coming soon.`,
                    `Iniciaste como ${roles.find(r => r.key === selected)?.[lang === 'en' ? 'en' : 'es'].label ?? 'Usuario'}. Panel próximamente.`
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
