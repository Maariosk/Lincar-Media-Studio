/**
 * @description Sección de marketing digital con toggle de precio para Community Manager.
 * @author Lincar Media Studio
 * @version 1.0.0
 */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { fadeSlideUp, staggerContainer } from '../../animations/variants';
import { marketingPackages, multiPlatformUpgrade } from '../../constants/marketingPackages';
import { formatCurrency } from '../../utils/formatCurrency';
import { buildMailto } from '../../utils/scrollToSection';
import { MultiPlatformUpgrade } from '../Platforms/MultiPlatformUpgrade';
import styles from './Marketing.module.less';

/**
 * @returns {JSX.Element} Sección de marketing digital.
 */
export const MarketingPackages = () => {
  const [hasVideoPackage, setHasVideoPackage] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className="sectionLabel">Gestión digital</span>
          <h2 className="sectionTitle">Marketing digital y community management</h2>
          <p className="sectionSubtitle">
            Diseño gráfico, calendario editorial y publicación constante para que tus redes se vean
            activas, profesionales y alineadas a venta.
          </p>
        </div>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.15 }}
        >
          {marketingPackages.map((item) => {
            const currentPrice = item.bundledPrice && hasVideoPackage ? item.bundledPrice : item.price;
            const showToggle = Boolean(item.bundledPrice);

            return (
              <motion.article
                key={item.id}
                className={`${styles.card} ${item.highlighted ? styles.highlighted : ''}`}
                variants={fadeSlideUp}
              >
                <div className={styles.topline}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                  {item.badge ? <span>{item.badge}</span> : null}
                </div>

                {showToggle ? (
                  <label className={styles.toggle}>
                    <input
                      type="checkbox"
                      checked={hasVideoPackage}
                      onChange={(event) => setHasVideoPackage(event.target.checked)}
                    />
                    <span>Tengo paquete de video</span>
                  </label>
                ) : null}

                <div className={styles.priceBlock}>
                  {showToggle ? (
                    <small>
                      {hasVideoPackage
                        ? `Precio con video contratado · antes ${formatCurrency(item.price)}`
                        : `Precio sin paquete de video · con video baja a ${formatCurrency(item.bundledPrice)}`}
                    </small>
                  ) : null}
                  <strong>{formatCurrency(currentPrice)}</strong>
                  <em>/mes + IVA</em>
                </div>

                <ul className={styles.features}>
                  {item.features.map((feature) => (
                    <li key={feature}>
                      <FaCheck aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {item.note ? <p className={styles.note}>{item.note}</p> : null}

                <a className={styles.cta} href={buildMailto(`Quiero ${item.title}`)}>
                  Quiero este servicio
                </a>
              </motion.article>
            );
          })}
        </motion.div>

        <MultiPlatformUpgrade {...multiPlatformUpgrade} />
      </div>
    </section>
  );
};
