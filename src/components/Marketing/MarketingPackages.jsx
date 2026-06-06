/**
 * @description Sección de marketing digital con toggle de precio para Community Manager.
 * @author Lincar Media Studio
 * @version 1.3.0
 */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { fadeSlideUp, staggerContainer } from '../../animations/variants';
import { marketingPackages, multiPlatformUpgrade } from '../../constants/marketingPackages';
import { formatCurrency } from '../../utils/formatCurrency';
import { buildMailto } from '../../utils/scrollToSection';
import { MultiPlatformUpgrade } from '../Platforms/MultiPlatformUpgrade';
import styles from './Marketing.module.less';

/**
 * @description Micro ayuda visual con tooltip premium.
 * @param {object} props
 * @param {string} props.label Texto accesible.
 * @param {React.ReactNode} props.children Contenido del tooltip.
 * @param {'inline'|'toggle'} props.variant Variante visual.
 * @returns {JSX.Element}
 */
const InfoHint = ({ label, children, variant = 'inline' }) => (
  <span className={`${styles.infoHint} ${variant === 'toggle' ? styles.infoHintToggle : ''}`}>
    <button className={styles.infoButton} type="button" aria-label={label}>
      i
    </button>

    <span className={styles.infoBubble} role="tooltip">
      {children}
    </span>
  </span>
);

InfoHint.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['inline', 'toggle'])
};

/**
 * @param {string|object} feature Feature simple o con tooltip.
 * @returns {{text: string, help: string}}
 */
const normalizeFeature = (feature) => {
  if (typeof feature === 'string') {
    return {
      text: feature,
      help: ''
    };
  }

  return {
    text: feature.text,
    help: feature.help || ''
  };
};

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
                  <div className={styles.toggleRow}>
                    <label className={styles.toggle}>
                      <input
                        className={styles.toggleInput}
                        type="checkbox"
                        checked={hasVideoPackage}
                        onChange={(event) => setHasVideoPackage(event.target.checked)}
                      />

                      <span className={styles.switchTrack} aria-hidden="true">
                        <span className={styles.switchThumb} />
                      </span>

                      <span>Tengo paquete de video</span>
                    </label>

                    <InfoHint label="Ayuda sobre precio con paquete de video" variant="toggle">
                      Este precio aplica cuando el cliente ya contrató un paquete mensual de video
                      con Focus Media. Se reduce porque la planeación y publicación se integran al
                      flujo de producción existente.
                    </InfoHint>
                  </div>
                ) : null}

                <div className={styles.priceBlock}>
                  {item.originalPrice ? (
                    <span className={styles.originalPrice}>
                      Valor regular {formatCurrency(item.originalPrice)}
                    </span>
                  ) : null}

                  <small>
                    {showToggle
                      ? hasVideoPackage
                        ? `Precio preferente con video contratado · antes ${formatCurrency(item.price)}`
                        : `Precio promocional · con video baja a ${formatCurrency(item.bundledPrice)}`
                      : 'Precio promocional mensual'}
                  </small>

                  <strong>{formatCurrency(currentPrice)}</strong>
                  <em>/mes + IVA</em>
                </div>

                <ul className={styles.features}>
                  {item.features.map((feature) => {
                    const normalizedFeature = normalizeFeature(feature);

                    return (
                      <li key={normalizedFeature.text}>
                        <FaCheck aria-hidden="true" />

                        <span className={styles.featureText}>
                          <span>{normalizedFeature.text}</span>

                          {normalizedFeature.help ? (
                            <InfoHint label={`Ayuda sobre ${normalizedFeature.text}`}>
                              {normalizedFeature.help}
                            </InfoHint>
                          ) : null}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {item.scope?.length ? (
                  <div className={styles.scopeBox}>
                    <strong>Alcance operativo</strong>

                    <div>
                      {item.scope.map((scopeItem) => (
                        <p key={scopeItem}>{scopeItem}</p>
                      ))}
                    </div>
                  </div>
                ) : null}

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