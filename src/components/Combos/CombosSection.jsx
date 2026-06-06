/**
 * @description Sección de combos recomendados con ahorro visible y Combo Élite.
 * @author Lincar Media Studio
 * @version 1.0.0
 */
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { fadeSlideUp, staggerContainer } from '../../animations/variants';
import { combos, eliteCombo } from '../../constants/combos';
import { formatCurrency } from '../../utils/formatCurrency';
import { buildMailto } from '../../utils/scrollToSection';
import { EliteCombo } from './EliteCombo';
import styles from './Combos.module.less';

/**
 * @returns {JSX.Element} Sección de combos.
 */
export const CombosSection = () => (
  <section id="combos" className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <span className="sectionLabel">Paquetes integrados</span>
        <h2 className="sectionTitle">Elige tu combo y empieza hoy</h2>
        <p className="sectionSubtitle">Ahorra combinando servicios. Más contenido, menos costo.</p>
      </div>

      <motion.div
        className={styles.grid}
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.15 }}
      >
        {combos.map((combo) => (
          <motion.article
            key={combo.id}
            className={`${styles.card} ${combo.highlighted ? styles.highlighted : ''}`}
            variants={fadeSlideUp}
          >
            <div className={styles.topline}>
              <h3>{combo.title}</h3>
              {combo.badge ? <span>{combo.badge}</span> : null}
            </div>
            <p className={styles.includes}>Incluye: {combo.includes.join(' + ')}</p>
            <div className={styles.priceBlock}>
              <span>{formatCurrency(combo.originalPrice)}</span>
              <strong>{formatCurrency(combo.price)}</strong>
              <em>/mes + IVA</em>
            </div>
            <span className={styles.savings}>Ahorras {formatCurrency(combo.savings)}/mes</span>
            <ul>
              {combo.features.map((feature) => (
                <li key={feature}>
                  <FaCheck aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            {combo.note ? <p className={styles.note}>{combo.note}</p> : null}
            <a href={buildMailto(`Quiero ${combo.title}`)}>Quiero este combo</a>
          </motion.article>
        ))}
      </motion.div>

      <EliteCombo {...eliteCombo} />
    </div>
  </section>
);
