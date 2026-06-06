/**
 * @description Componente especial para el Combo Élite Total con máximo protagonismo.
 * @author Lincar Media Studio
 * @version 1.0.0
 */
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaCheck, FaPhoneAlt, FaStar } from 'react-icons/fa';
import { eliteReveal } from '../../animations/variants';
import { formatCurrency } from '../../utils/formatCurrency';
import { buildMailto } from '../../utils/scrollToSection';
import styles from './EliteCombo.module.less';

/**
 * @param {object} props - Datos del combo élite.
 * @returns {JSX.Element} Card especial del combo élite.
 */
export const EliteCombo = ({ title, subtitle, badge, counter, originalPrice, price, savings, includes, note }) => (
  <motion.article
    className={styles.elite}
    variants={eliteReveal}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className={styles.badge}>{badge}</div>
    <div className={styles.header}>
      <span className={styles.kicker}>
        <FaStar aria-hidden="true" /> {subtitle}
      </span>
      <h3>{title}</h3>
      <p>{counter}</p>
    </div>

    <div className={styles.layout}>
      <ul className={styles.includes}>
        {includes.map((item) => (
          <li key={item}>
            <FaCheck aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className={styles.priceBox}>
        <span className={styles.original}>{formatCurrency(originalPrice)}</span>
        <strong>{formatCurrency(price)}</strong>
        <em>/mes + IVA</em>
        <span className={styles.savings}>Ahorras {formatCurrency(savings)}/mes</span>
        <a className={styles.cta} href={buildMailto('Quiero el Combo Élite')}>Quiero el Combo Élite</a>
        <a className={styles.call} href="http://wa.me/525613030395">
          <FaPhoneAlt aria-hidden="true" /> o Escribenos
        </a>
      </div>
    </div>

    <p className={styles.note}>{note}</p>
  </motion.article>
);

EliteCombo.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  badge: PropTypes.string.isRequired,
  counter: PropTypes.string.isRequired,
  originalPrice: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  savings: PropTypes.number.isRequired,
  includes: PropTypes.arrayOf(PropTypes.string).isRequired,
  note: PropTypes.string.isRequired
};
