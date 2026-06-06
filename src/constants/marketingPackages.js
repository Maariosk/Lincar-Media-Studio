/**
 * @description Datos oficiales de marketing digital y community management.
 * @author Lincar Media Studio
 * @version 1.0.0
 */

export const marketingPackages = [
  {
    id: 'grafico',
    title: 'Pack Gráfico',
    subtitle: 'Sin Community Manager',
    price: 3900,
    badge: '',
    features: [
      '25 piezas gráficas mensuales',
      'Diseño para Instagram y Facebook',
      'Historias, posts para feed, carruseles, promociones y avisos',
      'Redacción básica de copies',
      'Entrega digital lista para publicar',
      'En carruseles cada lámina = 1 pieza gráfica',
      'El cliente decide cómo distribuir sus 25 piezas'
    ]
  },
  {
    id: 'cm-grafico',
    title: 'Community Manager + Gráfico',
    subtitle: 'Gestión mensual para IG y FB',
    price: 6900,
    bundledPrice: 5900,
    badge: 'MÁS COMPLETO',
    highlighted: true,
    features: [
      'Todo lo incluido en Pack Gráfico',
      'Manejo mensual de Instagram y Facebook',
      'Calendario editorial mensual',
      'Programación y publicación de contenido',
      'Publicación de los videos del paquete contratado',
      'Hashtags básicos por publicación',
      'Revisión básica de comentarios y mensajes directos',
      'Reporte mensual básico de actividad'
    ],
    note:
      'La monetización NO se garantiza; depende exclusivamente de las políticas vigentes de Meta.'
  }
];

export const multiPlatformUpgrade = {
  id: 'multi-plataforma',
  title: 'Add-on Multi-plataforma',
  subtitle: 'YouTube + TikTok + Instagram + Facebook',
  price: 2200,
  features: [
    'Adaptación de videos a formato de cada plataforma',
    'Subtítulos animados por plataforma',
    'Thumbnails para YouTube 1280×720 px',
    'Publicación y programación en las 4 plataformas',
    'Calendario editorial mensual unificado',
    'Estrategia básica de hashtags + SEO para YouTube',
    'Reporte mensual de actividad por plataforma'
  ]
};
