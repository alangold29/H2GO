import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Users, Thermometer, Waves } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TrustStrip() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: t('Safe Environment', 'Entorno Seguro'),
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: t('Expert Instructors', 'Instructores Expertos'),
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t('Small Groups', 'Grupos Pequeños'),
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: t('Heated Clean Pool', 'Piscina Temperada'),
    },
    {
      icon: <Waves className="w-6 h-6" />,
      title: t('All Ages Welcome', 'Todas las Edades'),
    },
  ];

  return (
    <div className="bg-white py-8 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 gap-y-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h4 className="font-semibold text-sm text-foreground/80 group-hover:text-primary transition-colors">
                {feature.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
