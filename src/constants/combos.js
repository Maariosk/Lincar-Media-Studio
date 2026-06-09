/**
 * @description Combos oficiales con ahorro positivo y coherente.
 * @author Lincar Media Studio
 * @version 1.1.0
 */

export const combos = [
  {
    id: 'combo-inicio-digital',
    title: 'Combo Inicio Digital',
    includes: ['Pack Inicio PYME', 'Pack Gráfico sin Community Manager'],
    originalPrice: 11800,
    price: 10800,
    savings: 1000,
    badge: '',
    highlighted: false,
    features: [
      '20 videos mensuales',
      '25 piezas gráficas',
      'Material listo para publicar',
      'Ideal para negocios que inician presencia constante'
    ]
  },
  {
    id: 'combo-pyme-activa',
    title: 'Combo PYME Activa',
    includes: ['Pack Frecuencia Plus', 'Pack CM + Gráfico'],
    originalPrice: 16800,
    price: 14900,
    savings: 1900,
    badge: 'RECOMENDADO',
    highlighted: true,
    features: [
      '20 videos mensuales con planeación básica',
      '25 piezas gráficas mensuales',
      'Community Manager para Instagram y Facebook',
      'Calendario editorial mensual'
    ]
  },
  {
    id: 'combo-premium-integral',
    title: 'Combo Premium Integral',
    includes: ['Pack Premium Dinámico', 'Pack CM + Gráfico'],
    originalPrice: 19800,
    price: 17900,
    savings: 1900,
    badge: 'OFERTA ESTRELLA',
    highlighted: true,
    features: [
      'Producción dinámica con Osmo, POV y dron*',
      '25 piezas gráficas mensuales',
      'Manejo de Instagram y Facebook',
      'Reporte mensual básico de actividad'
    ],
    note: '*Dron sujeto a clima, zona y condiciones de seguridad'
  }
];

export const eliteCombo = {
  id: 'combo-elite-total',
  title: 'Combo Élite Total',
  subtitle: 'MEGA OFERTA',
  badge: 'CUPOS LIMITADOS',
  urgency: 'Solo 5 cupos disponibles por mes',
  counter: '3 de 5 cupos disponibles este mes',
  originalPrice: 22000,
  price: 18900,
  savings: 3100,
  includes: [
    'Pack Premium Dinámico completo: cámara + Osmo + Ray-Ban Meta + Dron*',
    'Pack Community Manager + 25 piezas gráficas',
    'Add-on Multi-plataforma: YouTube + TikTok + Instagram + Facebook',
    'Thumbnails personalizados para YouTube',
    'Calendario editorial unificado mensual',
    'Reporte mensual por plataforma'
  ],
  note: '*Dron sujeto a clima, zona y condiciones de seguridad'
};