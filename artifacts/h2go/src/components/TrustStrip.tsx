import { HeartHandshake, ShieldCheck, Trophy, Sparkles, UserCheck } from 'lucide-react';

const values = [
  { icon: <HeartHandshake className="w-6 h-6" />, title: 'Trato con Cuidado' },
  { icon: <ShieldCheck className="w-6 h-6" />,    title: 'Lugar Seguro' },
  { icon: <Trophy className="w-6 h-6" />,         title: 'Excelencia' },
  { icon: <Sparkles className="w-6 h-6" />,       title: 'Siempre Limpio' },
  { icon: <UserCheck className="w-6 h-6" />,      title: 'Bien Atendido' },
];

export default function TrustStrip() {
  return (
    <div className="bg-white py-8 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 gap-y-8">
          {values.map((v, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-secondary/50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {v.icon}
              </div>
              <h4 className="font-semibold text-sm text-foreground/80 group-hover:text-primary transition-colors">
                {v.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
