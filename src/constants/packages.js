/**
 * @description Datos oficiales de paquetes de producción de video.
 * @author Lincar Media Studio
 * @version 1.0.0
 */

export const videoPackages = [
  {
    id: 'inicio-pyme',
    title: 'Inicio PYME',
    originalPrice: 12000,
    price: 6900,
    pricePerUnit: '~$345 MXN por video',
    badge: '',
    highlighted: false,
    features: [
      '20 videos mensuales para redes sociales',
      'Grabación con cámara profesional',
      'Edición en formato vertical 9:16',
      'Corrección básica de color',
      'Música de fondo libre de derechos',
      'Textos simples animados en pantalla',
      '1 ronda de ajuste menor por video sin costo'
    ],
    sessions: '2 sesiones de grabación/mes · hasta 3h c/u · 6h totales',
    deliveryDays: 'Entrega: 10 videos por quincena, 4-6 días hábiles tras grabación'
  },
  {
    id: 'frecuencia-plus',
    title: 'Frecuencia Plus',
    originalPrice: 16000,
    price: 8900,
    pricePerUnit: '~$445 MXN por video',
    badge: 'RECOMENDADO',
    highlighted: true,
    features: [
      'Todo lo incluido en Inicio PYME',
      'Planeación básica de ideas de contenido',
      'Organización del contenido por temas',
      '20 videos mensuales listos para redes',
      'Edición vertical 9:16 con ritmo comercial',
      '1 ronda de ajuste menor por video sin costo'
    ],
    sessions: '2 sesiones de grabación/mes · hasta 4h c/u · 8h totales',
    deliveryDays: 'Entrega: 10 videos por quincena, 4-6 días hábiles tras grabación'
  },
  {
    id: 'premium-dinamico',
    title: 'Premium Dinámico',
    originalPrice: 20000,
    price: 11900,
    pricePerUnit: '~$595 MXN por video',
    badge: 'MEJOR VALOR',
    highlighted: true,
    features: [
      'Todo lo incluido en Frecuencia Plus',
      'Cámara Osmo para tomas de movimiento',
      'Lentes Ray-Ban Meta para tomas POV',
      'Dron para tomas aéreas*',
      'Cortes dinámicos multi-dispositivo',
      'Dirección visual con intención de venta'
    ],
    sessions: '2 sesiones de grabación/mes · hasta 4h c/u · 8h totales',
    deliveryDays: 'Entrega: 10 videos por quincena, 5-7 días hábiles tras grabación',
    note: '*Dron sujeto a clima, zona y condiciones de seguridad'
  }
];
