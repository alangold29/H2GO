import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const sedes = [
  { id: 'jockey-club', name: 'Jockey Club del Perú' },
  { id: 'petroperu', name: 'Club Petroperú' },
  { id: 'santa-clara', name: 'Santa Clara' },
  { id: 'brena', name: 'Breña' },
  { id: 'club-chama', name: 'Club Chama' },
  { id: 'jean-le-boulch', name: 'Jean Le Boulch' },
  { id: 'aopip', name: 'AOPIP' },
];

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: '¿Cómo Matricularme?', href: '/matricula' },
  { label: 'Nuestra Metodología', href: '/metodologia' },
  { label: 'Nosotros', href: '/nosotros' },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/80 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="/" className="inline-block mb-6 transition-opacity hover:opacity-80">
              <img
                src={`${import.meta.env.BASE_URL}images/h2go-logo.png`}
                alt="H2GO Swimming School"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Escuela de natación premium en Lima, Perú. Creemos en desarrollar confianza y habilidades a través de un entorno acuático de apoyo, limpio y alegre.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/H2GoNatacion?mibextid=JRoKGi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/h2gonatacion/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@h2goacademia?_t=8kuGU9haeEI&_r=1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.78a8.18 8.18 0 0 0 4.78 1.52V6.85a4.85 4.85 0 0 1-1.01-.16z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Explorar</h4>
            <ul className="space-y-4 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sedes */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Nuestras Sedes</h4>
            <ul className="space-y-4 text-sm">
              {sedes.map((sede) => (
                <li key={sede.id}>
                  <a href={`/sede/${sede.id}`} className="hover:text-primary transition-colors">
                    {sede.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>7 Sedes en Lima, Perú</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+51 987 654 321</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hola@h2goswim.pe</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} H2GO Swim School. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
