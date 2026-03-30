export interface PricingRow {
  label: string;
  cols: (string | null)[];
  promo?: (string | null)[];
}

export interface PricingGroup {
  title: string;
  colHeaders: string[];
  promoHeader?: string;
  rows: PricingRow[];
  note?: string;
}

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
  pricing: PricingGroup[];
}

export const sedesData: Sede[] = [
  {
    id: 'jockey-club',
    name: 'Jockey Club del Perú',
    district: 'Santiago de Surco',
    address: 'Av. El Derby S/N puerta 3, Monterrico, Santiago de Surco',
    phone: '922 520 821',
    hours: 'Lun–Sáb: 7:00 am – 7:00 pm',
    img: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&q=80&w=1200&h=700',
    secondaryImg: 'https://images.unsplash.com/photo-1560090995-01632a28895b?auto=format&fit=crop&q=80&w=600&h=400',
    desc: 'Nuestra sede principal ubicada en el icónico Jockey Club del Perú. Cuenta con instalaciones de primera clase, piscina temperada de 25 metros y vestidores modernos.',
    programs: ['Aqua Baby', 'Niños/Adolescentes', 'Adultos', 'Semillero', 'Equipo H2GO'],
    pricing: [
      {
        title: 'Niños y Adultos',
        colHeaders: ['Socios', 'Visitantes'],
        rows: [
          { label: '1 vez/semana',  cols: ['S/ 140', 'S/ 165'] },
          { label: '2 veces/semana', cols: ['S/ 250', 'S/ 290'] },
          { label: '3 veces/semana', cols: ['S/ 300', 'S/ 340'] },
        ],
      },
      {
        title: 'Aqua Bebé',
        colHeaders: ['Socios', 'Visitantes'],
        rows: [
          { label: '1 vez/semana',  cols: ['S/ 160', 'S/ 180'] },
          { label: '2 veces/semana', cols: ['S/ 270', 'S/ 310'] },
        ],
      },
      {
        title: 'Equipo H2GO',
        colHeaders: ['Socios', 'Visitantes'],
        rows: [
          { label: '5 veces/semana', cols: ['S/ 300', 'S/ 340'] },
        ],
      },
    ],
  },
  {
    id: 'petroperu',
    name: 'Club Petroperú',
    district: 'Las Casuarinas',
    address: 'Av. Club Golf Los Incas 320',
    phone: '902 763 908',
    hours: 'Lun–Sáb: 6:30 am – 6:30 pm',
    img: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80&w=1200&h=700',
    secondaryImg: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=600&h=400',
    desc: 'La sede en el Club Petroperú ofrece un ambiente exclusivo con piscina semi-olímpica y vista panorámica. Perfecta para familias del distrito.',
    programs: ['Aqua Baby', 'Niños/Adolescentes', 'Adultos', 'Nado Libre'],
    pricing: [
      {
        title: 'Turno Tarde · AM y PM',
        colHeaders: ['Socios / Fam. y Corp.', 'No Socios'],
        promoHeader: 'Por 2 Meses (Ene/Feb)',
        rows: [
          { label: '3 veces/semana', cols: ['S/ 280', 'S/ 300'], promo: ['S/ 500', 'S/ 550'] },
          { label: '2 veces/semana', cols: ['S/ 230', 'S/ 260'], promo: ['S/ 400', 'S/ 470'] },
          { label: '1 vez/semana',  cols: ['S/ 130', 'S/ 150'], promo: [null, null] },
        ],
      },
    ],
  },
  {
    id: 'santa-clara',
    name: 'Santa Clara',
    district: 'José Luis Bustamante y Rivero',
    address: 'Av. Garcilaso de la Vega 105 C, José Luis Bustamante y Rivero',
    phone: '908 814 301',
    hours: 'Lun–Sáb: 8:00 am – 7:00 pm',
    img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1200&h=700',
    secondaryImg: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600&h=400',
    desc: 'La sede de Santa Clara atiende a las familias de la zona con instalaciones modernas y un equipo de instructores altamente calificados.',
    programs: ['Aqua Baby', 'Niños/Adolescentes', 'Adultos', 'Semillero'],
    pricing: [
      {
        title: 'Niños y Adultos',
        colHeaders: ['Alumnos STC', 'Visitantes'],
        promoHeader: 'Por 2 Meses (Ene/Feb)',
        rows: [
          { label: '1 vez/semana',  cols: ['S/ 120', 'S/ 130'], promo: [null, null] },
          { label: '2 veces/semana', cols: ['S/ 230', 'S/ 250'], promo: ['S/ 400', 'S/ 460'] },
          { label: '3 veces/semana', cols: ['S/ 270', 'S/ 300'], promo: ['S/ 500', 'S/ 540'] },
        ],
      },
      {
        title: 'Aqua Bebé',
        colHeaders: ['Alumnos STC', 'Visitantes'],
        promoHeader: 'Por 2 Meses (Ene/Feb)',
        rows: [
          { label: '2 veces/semana', cols: ['S/ 245', 'S/ 265'], promo: ['S/ 430', 'S/ 490'] },
        ],
      },
    ],
  },
  {
    id: 'brena',
    name: 'Breña',
    district: 'Breña',
    address: 'Jr. General Vidal 619, Breña',
    phone: '967 423 797',
    hours: 'Lun–Sáb: 7:30 am – 7:30 pm',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1200&h=700',
    secondaryImg: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&q=80&w=600&h=400',
    desc: 'La sede de Breña es nuestro punto de referencia en el Centro de Lima. Con fácil acceso en transporte público y un horario amplio, es ideal para trabajadores y familias del centro.',
    programs: ['Niños/Adolescentes', 'Adultos', 'Nado Libre'],
    pricing: [
      {
        title: 'Niños y Adultos',
        colHeaders: ['Vecinos', 'Otros Distritos'],
        rows: [
          { label: '2 veces/semana', cols: ['S/ 160', 'S/ 200'] },
          { label: '3 veces/semana', cols: ['S/ 230', 'S/ 270'] },
        ],
      },
      {
        title: 'Aqua Bebé',
        colHeaders: ['Vecinos', 'Otros Distritos'],
        rows: [
          { label: '2 veces/semana', cols: ['S/ 170', 'S/ 210'] },
        ],
      },
    ],
  },
  {
    id: 'club-chama',
    name: 'Club Chama',
    district: 'Santiago de Surco',
    address: 'Jr. Enrique León García 559, Santiago de Surco',
    phone: '948 156 491 / 988 398 649',
    hours: 'Lun–Sáb: 7:00 am – 7:00 pm',
    img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=1200&h=700',
    secondaryImg: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=600&h=400',
    desc: 'Club Chama es una de nuestras sedes más exclusivas, con piscina de 25 metros, áreas verdes y estacionamiento amplio. Perfecta para las familias de Surco.',
    programs: ['Aqua Baby', 'Niños/Adolescentes', 'Adultos', 'Equipo H2GO'],
    pricing: [
      {
        title: 'Niños y Adultos',
        colHeaders: ['Socios', 'Visitantes'],
        promoHeader: 'Por 2 Meses (Ene/Feb)',
        rows: [
          { label: '1 vez/semana',  cols: ['S/ 140', 'S/ 165'], promo: [null, null] },
          { label: '2 veces/semana', cols: ['S/ 250', 'S/ 290'], promo: ['S/ 460', 'S/ 540'] },
          { label: '3 veces/semana', cols: ['S/ 300', 'S/ 340'], promo: ['S/ 560', 'S/ 640'] },
        ],
      },
      {
        title: 'Aqua Bebé',
        colHeaders: ['Socios', 'Visitantes'],
        promoHeader: 'Por 2 Meses (Ene/Feb)',
        rows: [
          { label: '1 vez/semana',  cols: ['S/ 160', 'S/ 180'], promo: [null, null] },
          { label: '2 veces/semana', cols: ['S/ 270', 'S/ 310'], promo: ['S/ 480', 'S/ 580'] },
        ],
      },
    ],
  },
  {
    id: 'jean-le-boulch',
    name: 'Jean Le Boulch',
    district: 'La Molina',
    address: 'Rodrigo de Triana Nº 154, 3ra Etapa Santa Patricia, La Molina',
    phone: '997 002 676',
    hours: 'Lun–Dom: 8:00 am – 8:00 pm',
    img: 'https://images.unsplash.com/photo-1560090995-01632a28895b?auto=format&fit=crop&q=80&w=1200&h=700',
    secondaryImg: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80&w=600&h=400',
    desc: 'La sede Jean Le Boulch en La Molina cuenta con instalaciones renovadas y un excelente equipo de instructores certificados. Atiende de lunes a domingo; los domingos solo piscina libre.',
    programs: ['Aqua Baby', 'Niños/Adolescentes', 'Adultos', 'Semillero'],
    pricing: [
      {
        title: 'Academia',
        colHeaders: ['1 Mes', '2 Meses'],
        rows: [
          { label: '2 veces/semana', cols: ['S/ 325', 'S/ 620'] },
          { label: '3 veces/semana', cols: ['S/ 480', 'S/ 920'] },
        ],
        note: 'Clases de lunes a sábado. Los domingos solo se atiende piscina libre.',
      },
      {
        title: 'Hora Libre · Lun–Sáb (sujeto a disponibilidad)',
        colHeaders: ['Por Hora', '4 Horas', '8 Horas'],
        rows: [
          { label: 'Público en general',               cols: ['S/ 10.50', 'S/ 42.00', 'S/ 84.00'] },
          { label: 'Vecino con DNI de Breña',          cols: ['S/ 8.50',  'S/ 34.00', 'S/ 68.00'] },
          { label: 'Adulto mayor — Breña (60+)',       cols: ['S/ 5.00',  null,         null] },
          { label: 'Adulto mayor — otros distritos',   cols: ['S/ 8.00',  null,         null] },
          { label: 'Personas con discapacidad',        cols: ['S/ 5.00',  null,         null] },
          { label: 'Niños/as residentes Breña (≤11)',  cols: ['S/ 5.00',  null,         null] },
          { label: 'Niños/as otros distritos (≤11)',   cols: ['S/ 7.00',  null,         null] },
        ],
      },
      {
        title: 'Piscina Libre · Domingos (08:00–23:00)',
        colHeaders: ['Precio'],
        rows: [
          { label: 'Público en general',  cols: ['S/ 15.00'] },
          { label: 'Vecino con DNI de Breña', cols: ['S/ 10.00'] },
        ],
      },
    ],
  },
  {
    id: 'aopip',
    name: 'AOPIP',
    district: 'Callao',
    address: 'Av. Casuarinas 450, Club AOPIP, Callao',
    phone: '908 814 296',
    hours: 'Lun–Sáb: 8:00 am – 6:00 pm',
    img: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&q=80&w=1200&h=700',
    secondaryImg: 'https://images.unsplash.com/photo-1560090995-01632a28895b?auto=format&fit=crop&q=80&w=600&h=400',
    desc: 'Nuestra sede AOPIP en el Callao lleva la excelencia de H2GO al Puerto Principal del Perú. Instalaciones amplias con fácil acceso desde el aeropuerto y zonas industriales.',
    programs: ['Niños/Adolescentes', 'Adultos', 'Nado Libre'],
    pricing: [
      {
        title: 'Niños y Adultos',
        colHeaders: ['Socios', 'Visitantes'],
        rows: [
          { label: '1 vez/semana',  cols: ['S/ 135', 'S/ 160'] },
          { label: '2 veces/semana', cols: ['S/ 240', 'S/ 290'] },
          { label: '3 veces/semana', cols: ['S/ 290', 'S/ 360'] },
          { label: '5 veces/semana', cols: ['S/ 480', 'S/ 550'] },
        ],
      },
      {
        title: 'Equipo y Máster',
        colHeaders: ['Socios', 'Visitantes'],
        rows: [
          { label: 'Entrenamiento Lun–Vie', cols: ['S/ 300', 'S/ 300'] },
        ],
      },
    ],
  },
];

export const sedesById: Record<string, Sede> = Object.fromEntries(
  sedesData.map((s) => [s.id, s])
);
