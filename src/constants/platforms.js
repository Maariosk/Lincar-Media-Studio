/**
 * @description Plataformas, formatos y servicios incluidos.
 * @author Lincar Media Studio
 * @version 1.0.0
 */

export const platforms = [
  {
    id: 'youtube',
    name: 'YouTube',
    iconName: 'youtube',
    accentColor: '#FF0000',
    formats: [
      'YouTube Shorts: 1080×1920 px, hasta 60 seg',
      'Videos largos: hasta 15 min según paquete',
      'Thumbnails: 1280×720 px',
      'Banner de canal: 2560×1440 px'
    ],
    services: [
      'Edición con subtítulos animados',
      'Música libre de derechos',
      'Títulos y descripciones con SEO básico',
      'Subida y programación con CM'
    ]
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    iconName: 'tiktok',
    accentColor: '#ffffff',
    formats: [
      'Videos verticales: 1080×1920 px',
      'Duración ideal: 15-60 seg para mayor alcance',
      'Versiones con subtítulos y texto animado'
    ],
    services: [
      'Edición dinámica con cortes rápidos',
      'Hook visual en primeros 3 segundos',
      'Adaptación de contenido ya grabado',
      'Publicación en horarios óptimos con CM'
    ],
    footerNote: 'El algoritmo de TikTok es independiente; el alcance no se garantiza.'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    iconName: 'instagram',
    accentColor: '#E1306C',
    formats: [
      'Reels: 1080×1920 px',
      'Feed cuadrado: 1080×1080 px',
      'Feed rectangular: 1080×1350 px',
      'Stories: 1080×1920 px',
      'Carruseles: hasta 10 láminas; cada lámina = 1 pieza'
    ],
    services: [
      'Subtítulos y textos animados',
      'Branding consistente en feed',
      'Copies + hashtags básicos',
      'Programación con scheduling tool',
      'Revisión de comentarios y DMs con CM'
    ]
  },
  {
    id: 'facebook',
    name: 'Facebook',
    iconName: 'facebook',
    accentColor: '#1877F2',
    formats: [
      'Videos nativos y Reels',
      'Posts de imagen, texto y carrusel',
      'Stories',
      'Portada de página: 820×312 px'
    ],
    services: [
      'Publicación y programación',
      'Adaptación de contenido de Instagram',
      'Actividad constante para posicionar la página',
      'Reporte mensual básico'
    ],
    footerNote: 'Monetización NO garantizada; sujeta a políticas de Meta.'
  }
];
