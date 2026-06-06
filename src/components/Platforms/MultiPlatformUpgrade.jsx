/**
 * @description Card del add-on multi-plataforma para incrementar distribución de contenido.
 * @author Lincar Media Studio
 * @version 1.0.0
 */
import PropTypes from 'prop-types';
import { FaCheck, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import { formatCurrency } from '../../utils/formatCurrency';
import { buildMailto } from '../../utils/scrollToSection';
import styles from './Upgrade.module.less';

/**
 * @param {object} props - Datos del add-on.
 * @returns {JSX.Element} Card de upgrade.
 */
export const MultiPlatformUpgrade = ({ title, subtitle, price, features }) => (
  <article className={styles.upgrade}>
    <div className={styles.content}>
      <div>
        <span className={styles.label}>Upgrade activo</span>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <div className={styles.icons} aria-label="Plataformas incluidas">
        <FaYoutube className={styles.youtube} aria-hidden="true" />
        <FaTiktok className={styles.tiktok} aria-hidden="true" />
        <FaInstagram className={styles.instagram} aria-hidden="true" />
        <FaFacebook className={styles.facebook} aria-hidden="true" />
      </div>
    </div>

    <div className={styles.body}>
      <div className={styles.priceBlock}>
        <strong>+{formatCurrency(price)}</strong>
        <span>/mes sobre cualquier paquete activo</span>
      </div>
      <ul>
        {features.map((feature) => (
          <li key={feature}>
            <FaCheck aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
      <a href={buildMailto('Quiero agregar el Add-on Multi-plataforma')}>Agregar upgrade</a>
    </div>
  </article>
);

MultiPlatformUpgrade.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired
};
