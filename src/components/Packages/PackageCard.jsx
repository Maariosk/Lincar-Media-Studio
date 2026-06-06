/**
 * @description Card reutilizable para paquetes, combos y servicios con precio promocional.
 * @author Lincar Media Studio
 * @version 1.0.0
 */
import PropTypes from 'prop-types';
import { FaCheck } from 'react-icons/fa';
import { formatCurrency } from '../../utils/formatCurrency';
import { buildMailto } from '../../utils/scrollToSection';
import styles from './PackageCard.module.less';

/**
 * @param {object} props - Propiedades del card.
 * @returns {JSX.Element} Card de paquete.
 */
export const PackageCard = ({
  title,
  badge,
  price,
  originalPrice,
  pricePerUnit,
  features,
  sessions,
  deliveryDays,
  highlighted,
  note,
  ctaLabel
}) => (
  <article className={`${styles.card} ${highlighted ? styles.highlighted : ''}`}>
    <div className={styles.topline}>
      <h3>{title}</h3>
      {badge ? <span className={styles.badge}>{badge}</span> : null}
    </div>

    <div className={styles.pricing}>
      {originalPrice ? <span className={styles.original}>{formatCurrency(originalPrice)}</span> : null}
      <strong>{formatCurrency(price)}</strong>
      <span>/mes + IVA</span>
    </div>

    {pricePerUnit ? <span className={styles.unit}>{pricePerUnit}</span> : null}

    <ul className={styles.features}>
      {features.map((feature) => (
        <li key={feature}>
          <FaCheck aria-hidden="true" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>

    {sessions || deliveryDays ? (
      <div className={styles.meta}>
        {sessions ? <p>{sessions}</p> : null}
        {deliveryDays ? <p>{deliveryDays}</p> : null}
      </div>
    ) : null}

    {note ? <p className={styles.note}>{note}</p> : null}

    <a className={styles.cta} href={buildMailto(`Quiero contratar ${title}`)}>
      {ctaLabel}
    </a>
  </article>
);

PackageCard.propTypes = {
  title: PropTypes.string.isRequired,
  badge: PropTypes.string,
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number,
  pricePerUnit: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  sessions: PropTypes.string,
  deliveryDays: PropTypes.string,
  highlighted: PropTypes.bool,
  note: PropTypes.string,
  ctaLabel: PropTypes.string
};

PackageCard.defaultProps = {
  badge: '',
  originalPrice: 0,
  pricePerUnit: '',
  sessions: '',
  deliveryDays: '',
  highlighted: false,
  note: '',
  ctaLabel: 'Quiero este paquete'
};
