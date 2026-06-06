/**
 * @description Tabla comparativa responsive de todos los paquetes y combos.
 * @author Lincar Media Studio
 * @version 1.0.0
 */
import { formatCurrency } from '../../utils/formatCurrency';
import styles from './PricingTable.module.less';

const rows = [
  {
    package: 'Inicio PYME',
    videos: '20',
    hours: '6h',
    graphics: 'No incluido',
    cm: 'No',
    platforms: 'IG / FB / TikTok / Shorts',
    price: 6900
  },
  {
    package: 'Frecuencia Plus',
    videos: '20',
    hours: '8h',
    graphics: 'No incluido',
    cm: 'No',
    platforms: 'IG / FB / TikTok / Shorts',
    price: 8900
  },
  {
    package: 'Premium Dinámico',
    videos: '20',
    hours: '8h',
    graphics: 'No incluido',
    cm: 'No',
    platforms: 'IG / FB / TikTok / Shorts',
    price: 11900
  },
  {
    package: 'Pack Gráfico',
    videos: '—',
    hours: '—',
    graphics: '25',
    cm: 'No',
    platforms: 'Instagram + Facebook',
    price: 3900
  },
  {
    package: 'CM + Gráfico',
    videos: 'Publica videos contratados',
    hours: '—',
    graphics: '25',
    cm: 'Sí',
    platforms: 'Instagram + Facebook',
    price: 6900
  },
  {
    package: 'Combo Inicio Digital',
    videos: '20',
    hours: '6h',
    graphics: '25',
    cm: 'No',
    platforms: 'Instagram + Facebook',
    price: 9900
  },
  {
    package: 'Combo PYME Activa',
    videos: '20',
    hours: '8h',
    graphics: '25',
    cm: 'Sí',
    platforms: 'Instagram + Facebook',
    price: 13900
  },
  {
    package: 'Combo Premium Integral',
    videos: '20',
    hours: '8h',
    graphics: '25',
    cm: 'Sí',
    platforms: 'Instagram + Facebook',
    price: 16900
  },
  {
    package: 'Combo Élite Total',
    videos: '20 + adaptación',
    hours: '8h',
    graphics: '25 + thumbnails',
    cm: 'Sí',
    platforms: 'YouTube + TikTok + IG + FB',
    price: 18500,
    featured: true
  }
];

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

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Paquete</th>
              <th>Videos/mes</th>
              <th>Horas grabación</th>
              <th>Piezas gráficas</th>
              <th>CM incluido</th>
              <th>Plataformas</th>
              <th>Precio/mes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.package} className={row.featured ? styles.featuredRow : ''}>
                <td data-label="Paquete">{row.package}</td>
                <td data-label="Videos/mes">{row.videos}</td>
                <td data-label="Horas grabación">{row.hours}</td>
                <td data-label="Piezas gráficas">{row.graphics}</td>
                <td data-label="CM incluido">{row.cm}</td>
                <td data-label="Plataformas">{row.platforms}</td>
                <td data-label="Precio/mes">{formatCurrency(row.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);
