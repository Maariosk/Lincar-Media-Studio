# Focus Media — Powered by Lincar Media Studio

Sitio web premium desarrollado con React 18, Vite, LESS, Framer Motion y react-icons para una agencia de producción de contenido digital y manejo de redes sociales enfocada en PYMES mexicanas.

## Identidad

- Nombre comercial: **Focus Media**
- Línea: **powered by Lincar Media Studio**
- Tagline: **Contenido que convierte. Presencia que domina.**
- Contacto: ``
- Teléfono / WhatsApp: ``

## Stack

- React 18 con hooks funcionales
- Vite
- LESS + CSS Modules
- Framer Motion
- react-icons
- PropTypes
- ESLint + Prettier

## Instalación

```bash
npm install
npm run dev
```

El proyecto se levantará en:

```bash
http://localhost:5173
```

## Comandos disponibles

```bash
npm run dev       # desarrollo
npm run build     # build de producción
npm run preview   # preview del build
npm run lint      # revisión ESLint
npm run format    # formato Prettier
```

## Estructura

```text
src/
├── assets/logo/              # logos PNG de Lincar
├── components/               # componentes del sitio
├── constants/                # datos oficiales de paquetes, marketing, plataformas y combos
├── hooks/                    # hooks reutilizables
├── styles/                   # variables, mixins, reset y globales
├── utils/                    # helpers de moneda, mailto y scroll
├── animations/               # variantes de Framer Motion
├── App.jsx
└── main.jsx
```

También se incluyen copias de los logos en `public/assets/logo/` para respetar las rutas directas solicitadas:

```text
/assets/logo/lincar-horizontal.png
/assets/logo/lincar-isotipo.png
/assets/logo/lincar-cuadrado.png
```

## Variables de entorno

Actualmente no se requiere ninguna API key. Si en el futuro se conectan formularios, CRM, Meta API o analítica privada, usar `.env` y variables con prefijo `VITE_`.

Ejemplo:

```bash
VITE_PUBLIC_SITE_URL=https://focusmedia.mx
```

## Seguridad frontend

- No se exponen claves privadas ni datos sensibles en el frontend.
- Los enlaces `mailto:` codifican el `subject` con `encodeURIComponent`.
- No hay formularios con entradas libres en esta versión; si se añaden, sanitizar y validar del lado servidor.
- Activar HTTPS en producción.
- Ejecutar antes de publicar:

```bash
npm audit
npm run lint
npm run build
```

En `index.html` hay una CSP recomendada comentada. Debe ajustarse al dominio real antes de activarse en producción.

## Logos

Los componentes `Navbar` y `Footer` usan `<img>` con rutas directas a los PNG:

```jsx
<img src="/assets/logo/lincar-horizontal.png" alt="Lincar Media Studio" />
<img src="/assets/logo/lincar-isotipo.png" alt="Lincar Media Studio" />
```

No se recreó el logo con SVG, CSS ni texto.

## Precios validados

Se respetaron las reglas oficiales:

- Ningún paquete de video queda debajo de $6,000 MXN/mes.
- Community Manager con gráfico queda arriba de $5,000 MXN/mes.
- Los combos tienen ahorro real positivo contra contratación separada.
- Todos los precios se muestran en MXN y sin IVA.
- Los paquetes de video muestran precio tachado y precio promocional.

## Deploy en Vercel

1. Sube el proyecto a GitHub.
2. Entra a Vercel y selecciona **Add New Project**.
3. Importa el repositorio.
4. Configura:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Publica.

## Deploy en Netlify

1. Sube el proyecto a GitHub.
2. Entra a Netlify y selecciona **Add new site** → **Import an existing project**.
3. Configura:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Publica.

## Notas de producción

- Reemplazar URLs genéricas de redes sociales en `Footer.jsx` por perfiles oficiales cuando estén disponibles.
- Si se usa un dominio final, actualizar `og:url` y `VITE_PUBLIC_SITE_URL`.
- La monetización en redes sociales no está garantizada y depende de las políticas de cada plataforma.
