/**
 * @description Datos oficiales de marketing digital y community management.
 * @author Lincar Media Studio
 * @version 1.3.0
 */

export const marketingPackages = [
  {
    id: 'grafico',
    title: 'Pack Gráfico',
    subtitle: 'Diseño mensual para redes',
    originalPrice: 6500,
    price: 4900,
    badge: '',
    features: [
      '25 piezas gráficas mensuales',
      {
        text: 'Diseño para Instagram y Facebook',
        help:
          'Este paquete contempla diseño para Instagram y Facebook. Si el cliente necesita adaptar, publicar o gestionar contenido también en YouTube y TikTok, debe sumar el Add-on Multi-plataforma.'
      },
      'Historias, posts para feed, carruseles, promociones y avisos',
      'Redacción básica de copies',
      'Entrega digital lista para publicar',
      'En carruseles cada lámina = 1 pieza gráfica',
      'El cliente decide cómo distribuir sus 25 piezas'
    ],
    scope: [
      'Entregas por bloques semanales o quincenales.',
      '1 ronda de ajuste menor por pieza.',
      'Cambios mayores o piezas urgentes pueden cotizarse aparte.'
    ]
  },
  {
    id: 'cm-grafico',
    title: 'Community Manager + Gráfico',
    subtitle: 'Gestión visual mensual para IG y FB',
    originalPrice: 11900,
    price: 8900,
    bundledPrice: 7900,
    badge: 'MÁS COMPLETO',
    highlighted: true,
    features: [
      'Todo lo incluido en Pack Gráfico',
      {
        text: 'Manejo mensual de Instagram y Facebook',
        help:
          'La gestión mensual aplica para Instagram y Facebook. Para sumar YouTube y TikTok a la adaptación, publicación y reporte, se debe agregar el Add-on Multi-plataforma.'
      },
      'Calendario editorial mensual',
      'Programación y publicación de contenido',
      'Publicación de los videos del paquete contratado',
      'Hashtags básicos por publicación',
      'Revisión básica de comentarios y mensajes directos',
      'Reporte mensual básico de actividad'
    ],
    scope: [
      'Planeación, organización y publicación mensual.',
      '25 piezas gráficas integradas al calendario.',
      '1 ronda de ajuste menor por bloque de contenido.',
      'La atención de mensajes es básica; no sustituye atención al cliente 24/7.'
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