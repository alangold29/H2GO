export interface Sede {
  id: string;
  name: string;
  district: string;
  address: string;
  phone: string;
  hours: string;
  img: string;
  secondaryImg: string;
  desc: string;
  programs: string[];
}

export const sedesData: Sede[] = [
  {
    id: 'jockey-club',
    name: 'Jockey Club del Perú',
    district: 'San Borja',
    address: 'Av. Javier Prado Este 1852, San Borja, Lima',
    phone: '+51 987 100 001',
    hours: 'Lun–Sáb: 7:00 am – 7:00 pm',
    img: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&q=80&w=1200&h=700',
    secondaryImg: 'https://images.unsplash.com/photo-1560090995-01632a28895b?auto=format&fit=crop&q=80&w=600&h=400',
    desc: 'Nuestra sede principal ubicada en el icónico Jockey Club del Perú. Cuenta con instalaciones de primera clase, piscina temperada de 25 metros y vestidores modernos.',
    programs: ['Aqua Baby', 'Niños/Adolescentes', 'Adultos', 'Semillero', 'Equipo H2GO'],
  },
  {
    id: 'petroperu',
    name: 'Club Petroperú',
    district: 'Miraflores',
    address: 'Av. El Rosario 250, Miraflores, Lima',
    phone: '+51 987 100 002',
    hours: 'Lun–Sáb: 6:30 am – 6:30 pm',
    img: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80&w=1200&h=700',
    secondaryImg: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=600&h=400',
    desc: 'La sede de Miraflores en el Club Petroperú ofrece un ambiente exclusivo con piscina semi-olímpica y vista panorámica. Perfecta para familias del distrito.',
    programs: ['Aqua Baby', 'Niños/Adolescentes', 'Adultos', 'Nado Libre'],
  },
  {
    id: 'santa-clara',
    name: 'Santa Clara',
    district: 'Ate',
    address: 'Av. La Molina 1245, Ate, Lima',
    phone: '+51 987 100 003',
    hours: 'Lun–Sáb: 8:00 am – 7:00 pm',
    img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1200&h=700',
    secondaryImg: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600&h=400',
    desc: 'La sede de Santa Clara en Ate atiende a las familias del cono este de Lima con instalaciones modernas y un equipo de instructores altamente calificados.',
    programs: ['Aqua Baby', 'Niños/Adolescentes', 'Adultos', 'Semillero'],
  },
  {
    id: 'brena',
    name: 'Breña',
    district: 'Breña',
    address: 'Av. Arica 621, Breña, Lima',
    phone: '+51 987 100 004',
    hours: 'Lun–Sáb: 7:30 am – 7:30 pm',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1200&h=700',
    secondaryImg: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&q=80&w=600&h=400',
    desc: 'La sede de Breña es nuestro punto de referencia en el Centro de Lima. Con fácil acceso en transporte público y un horario amplio, es ideal para trabajadores y familias del centro.',
    programs: ['Niños/Adolescentes', 'Adultos', 'Nado Libre'],
  },
  {
    id: 'club-chama',
    name: 'Club Chama',
    district: 'La Molina',
    address: 'Av. La Molina 595, La Molina, Lima',
    phone: '+51 987 100 005',
    hours: 'Lun–Sáb: 7:00 am – 7:00 pm',
    img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=1200&h=700',
    secondaryImg: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=600&h=400',
    desc: 'Club Chama en La Molina es una de nuestras sedes más exclusivas, con piscina de 25 metros, áreas verdes y estacionamiento amplio. Perfecta para las familias de La Molina.',
    programs: ['Aqua Baby', 'Niños/Adolescentes', 'Adultos', 'Equipo H2GO'],
  },
  {
    id: 'jean-le-boulch',
    name: 'Jean Le Boulch',
    district: 'San Miguel',
    address: 'Av. Universitaria 1520, San Miguel, Lima',
    phone: '+51 987 100 006',
    hours: 'Lun–Sáb: 7:00 am – 6:30 pm',
    img: 'https://images.unsplash.com/photo-1560090995-01632a28895b?auto=format&fit=crop&q=80&w=1200&h=700',
    secondaryImg: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80&w=600&h=400',
    desc: 'La sede Jean Le Boulch en San Miguel está ubicada estratégicamente para servir a Lima Oeste. Cuenta con instalaciones renovadas y un excelente equipo de instructores certificados.',
    programs: ['Aqua Baby', 'Niños/Adolescentes', 'Adultos', 'Semillero'],
  },
  {
    id: 'aopip',
    name: 'AOPIP',
    district: 'Callao',
    address: 'Av. Oscar Benavides 3480, Callao, Lima',
    phone: '+51 987 100 007',
    hours: 'Lun–Sáb: 8:00 am – 6:00 pm',
    img: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&q=80&w=1200&h=700',
    secondaryImg: 'https://images.unsplash.com/photo-1560090995-01632a28895b?auto=format&fit=crop&q=80&w=600&h=400',
    desc: 'Nuestra sede AOPIP en el Callao lleva la excelencia de H2GO al Puerto Principal del Perú. Instalaciones amplias con fácil acceso desde el aeropuerto y zonas industriales.',
    programs: ['Niños/Adolescentes', 'Adultos', 'Nado Libre'],
  },
];

export const sedesById: Record<string, Sede> = Object.fromEntries(
  sedesData.map((s) => [s.id, s])
);
