/**
 * @description Tabla comparativa responsive de paquetes, combos y add-on multi-plataforma.
 * @author Lincar Media Studio
 * @version 1.1.0
 */
import { FaCheck, FaMinus, FaStar } from 'react-icons/fa';
import { formatCurrency } from '../../utils/formatCurrency';
import styles from './PricingTable.module.less';

const MULTI_PLATFORM_ADDON_PRICE = 2200;

const rows = [
  {
    package: 'Inicio PYME',
    type: 'Video',
    videos: '20',
    hours: '6h',
    graphics: 'No incluido',
    cm: false,
    platforms: 'Videos listos para Reels, TikTok y Shorts',
    price: 6900,
    addonAvailable: true
  },
  {
    package: 'Frecuencia Plus',
    type: 'Video',
    videos: '20',
    hours: '8h',
    graphics: 'No incluido',
    cm: false,
    platforms: 'Videos listos para Reels, TikTok y Shorts',
    price: 8900,
    addonAvailable: true,
    recommended: true
  },
  {
    package: 'Premium Dinámico',
    type: 'Video',
    videos: '20',
    hours: '8h',
    graphics: 'No incluido',
    cm: false,
    platforms: 'Videos listos para Reels, TikTok y Shorts',
    price: 11900,
    addonAvailable: true
  },
  {
    package: 'Pack Gráfico',
    type: 'Marketing',
    videos: '—',
    hours: '—',
    graphics: '25',
    cm: false,
    platforms: 'Instagram + Facebook',
    price: 4900,
    addonAvailable: true
  },
  {
    package: 'CM + Gráfico',
    type: 'Marketing',
    videos: 'Publica videos contratados',
    hours: '—',
    graphics: '25',
    cm: true,
    platforms: 'Instagram + Facebook',
    price: 8900,
    addonAvailable: true,
    note: 'Con paquete de video contratado baja a $7,900 MXN'
  },
  {
    package: 'CM + Gráfico con video',
    type: 'Marketing',
    videos: 'Publica videos contratados',
    hours: '—',
    graphics: '25',
    cm: true,
    platforms: 'Instagram + Facebook',
    price: 7900,
    addonAvailable: true,
    compact: true
  },
  {
    package: 'Combo Inicio Digital',
    type: 'Combo',
    videos: '20',
    hours: '6h',
    graphics: '25',
    cm: false,
    platforms: 'Instagram + Facebook',
    price: 10800,
    addonAvailable: true
  },
  {
    package: 'Combo PYME Activa',
    type: 'Combo',
    videos: '20',
    hours: '8h',
    graphics: '25',
    cm: true,
    platforms: 'Instagram + Facebook',
    price: 15900,
    addonAvailable: true,
    recommended: true
  },
  {
    package: 'Combo Premium Integral',
    type: 'Combo',
    videos: '20',
    hours: '8h',
    graphics: '25',
    cm: true,
    platforms: 'Instagram + Facebook',
    price: 17900,
    addonAvailable: true
  },
  {
    package: 'Combo Élite Total',
    type: 'Elite',
    videos: '20 + adaptación',
    hours: '8h',
    graphics: '25 + thumbnails',
    cm: true,
    platforms: 'YouTube + TikTok + IG + FB',
    price: 18900,
    addonIncluded: true,
    featured: true
  }
];

/**
 * @param {boolean} value - Indica si el CM está incluido.
 * @returns {JSX.Element} Estado visual del CM.
 */
const renderBooleanStatus = (value) => (
  <span className={`${styles.status} ${value ? styles.statusPositive : styles.statusMuted}`}>
    {value ? (
      <>
        <FaCheck aria-hidden="true" />
        Sí
      </>
    ) : (
      <>
        <FaMinus aria-hidden="true" />
        No
      </>
    )}
  </span>
);

/**
 * @param {object} row - Datos de la fila.
 * @returns {JSX.Element} Precio con add-on o estado incluido.
 */
const renderAddonPrice = (row) => {
  if (row.addonIncluded) {
    return (
      <div className={styles.addonPrice}>
        <strong>Incluido</strong>
        <span>Ya contempla 4 plataformas</span>
      </div>
    );
  }

  if (!row.addonAvailable) {
    return (
      <div className={styles.addonPrice}>
        <strong>—</strong>
        <span>No aplica</span>
      </div>
    );
  }

  return (
    <div className={styles.addonPrice}>
      <strong>{formatCurrency(row.price + MULTI_PLATFORM_ADDON_PRICE)}</strong>
      <span>Con add-on incluido</span>
    </div>
  );
};

/**
 * @returns {JSX.Element} Tabla comparativa.
 */
export const PricingTable = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <span className="sectionLabel">Comparativa</span>
        <h2 className="sectionTitle">Compara todos los paquetes</h2>
        <p className="sectionSubtitle">
          Visualiza rápidamente cuál plan se adapta mejor a tu etapa, alcance y necesidad de gestión.
        </p>
      </div>

      <div className={styles.addonBanner}>
        <div>
          <span>Add-on Multi-plataforma</span>
          <strong>YouTube + TikTok + Instagram + Facebook</strong>
          <p>
            Agrega adaptación, publicación, programación, thumbnails para YouTube, estrategia básica
            de hashtags/SEO y reporte mensual por plataforma.
          </p>
        </div>

        <div className={styles.addonCost}>
          <span>Desde</span>
          <strong>+{formatCurrency(MULTI_PLATFORM_ADDON_PRICE)}</strong>
          <em>/mes + IVA sobre cualquier paquete activo</em>
        </div>
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Paquete</th>
              <th>Videos/mes</th>
              <th>Horas</th>
              <th>Piezas</th>
              <th>CM</th>
              <th>Plataformas base</th>
              <th>Precio base</th>
              <th>Con Add-on 4 plataformas</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr
                key={row.package}
                className={`${row.featured ? styles.featuredRow : ''} ${
                  row.compact ? styles.compactRow : ''
                }`}
              >
                <td data-label="Paquete">
                  <div className={styles.packageCell}>
                    <span className={styles.typeBadge}>{row.type}</span>

                    <strong>
                      {row.featured ? <FaStar aria-hidden="true" /> : null}
                      {row.package}
                    </strong>

                    {row.recommended ? <em>Recomendado</em> : null}
                    {row.note ? <small>{row.note}</small> : null}
                  </div>
                </td>

                <td data-label="Videos/mes">{row.videos}</td>
                <td data-label="Horas">{row.hours}</td>
                <td data-label="Piezas gráficas">{row.graphics}</td>
                <td data-label="CM incluido">{renderBooleanStatus(row.cm)}</td>
                <td data-label="Plataformas base">{row.platforms}</td>

                <td data-label="Precio base">
                  <div className={styles.basePrice}>
                    <strong>{formatCurrency(row.price)}</strong>
                    <span>/mes + IVA</span>
                  </div>
                </td>

                <td data-label="Con Add-on 4 plataformas">{renderAddonPrice(row)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={styles.disclaimer}>
        El Add-on Multi-plataforma no sustituye el paquete base: se suma sobre cualquier paquete
        activo. El Combo Élite Total ya lo incluye dentro de su precio mensual.
      </p>
    </div>
  </section>
);