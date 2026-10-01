export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };

export const site = {
  name: 'Luísa Barzotto',
  monogram: 'LB',
  headline: 'Redescubra a confiança em ser você.',
  cro: '',
  bio: 'Especialista em harmonização facial e rejuvenescimento em Lajeado, a Dra. Luísa Barzotto cuida de cada rosto com escuta, planejamento e atenção aos detalhes. Seu propósito é valorizar o que já torna você única.',
  education: [] as string[],
  specialties: ['Harmonização facial', 'Rejuvenescimento', 'Estética facial'],
  phone: '(51) 99777-9003',
  whatsapp: '5551997779003',
  whatsappUrl: 'https://wa.me/5551997779003?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20Dra.%20Lu%C3%ADsa%20Barzotto.',
  address: 'Av. Piraí, 300, sala 1003 · São Cristóvão · Lajeado, RS',
  professionalPhilosophy: 'A confiança de se reconhecer em cada detalhe.',
  instagram: 'https://www.instagram.com/draluisabarzotto/',
  instagramHandle: '@draluisabarzotto',
  philosophy: ['SEUS TRAÇOS.', 'SUA ESSÊNCIA.', 'SUA CONFIANÇA.'],
  colors: { paper: '#f5f1eb', ink: '#25221f', taupe: '#9b8063', champagne: '#d4bd93', dark: '#171615', wine: '#201c19', muted: '#6d645c' },
  images: {
    hero: '/images/luisa-hero.webp',
    essence: '/images/luisa-essencia.webp',
    about: '/images/luisa-sobre.webp',
    beauty: '/images/luisa-atendimento.webp',
  },
  procedures: [] as Procedure[],
  office: [] as { src: string; alt: string }[],
  testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    { image: '/images/resultado-01.webp', label: 'Expressão em harmonia', alt: 'Registro comparativo de perfil facial antes e depois do atendimento.', orientation: 'single', beforeShare: .5, comparisonRatio: 1284 / 1598 },
    { image: '/images/resultado-02.webp', label: 'Perfil valorizado', alt: 'Comparativo de perfil facial masculino antes e depois.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1276 / 1600 },
    { image: '/images/resultado-03.webp', label: 'Leveza e definição', alt: 'Comparativo de rosto em três quartos antes e depois.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1284 / 1591 },
    { image: '/images/resultado-04.webp', label: 'Traços preservados', alt: 'Comparativo de perfil facial feminino antes e depois.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1278 / 1539 },
    { image: '/images/resultado-05.webp', label: 'Beleza singular', alt: 'Comparativo frontal de harmonização facial antes e depois.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1284 / 1286 },
    { image: '/images/resultado-06.webp', label: 'Um olhar renovado', alt: 'Comparativo frontal de rejuvenescimento facial antes e depois.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1284 / 1243 },
    { image: '/images/resultado-07.webp', label: 'Cuidado em cada ângulo', alt: 'Comparativo lateral do rosto antes e depois do atendimento.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1086 / 1448 },
  ] },
  seo: {
    title: 'Dra. Luísa Barzotto | Harmonização Facial em Lajeado',
    description: 'Harmonização facial e rejuvenescimento com atenção à sua identidade. Conheça a Dra. Luísa Barzotto e agende uma avaliação em Lajeado, RS.',
    url: '',
  },
};

export const appointmentUrl = site.whatsappUrl;
