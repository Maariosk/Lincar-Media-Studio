/**
 * @description Sección de paquetes de producción de video.
 * @author Lincar Media Studio
 * @version 1.0.0
 */
import { motion } from 'framer-motion';
import { fadeSlideUp, staggerContainer } from '../../animations/variants';
import { videoPackages } from '../../constants/packages';
import { PackageCard } from './PackageCard';
import styles from './Packages.module.less';

/**
 * @returns {JSX.Element} Sección de paquetes.
 */
export const PackagesSection = () => (
  <section id="paquetes" className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <span className="sectionLabel">Producción mensual</span>
        <h2 className="sectionTitle">Paquetes de producción de video</h2>
        <p className="sectionSubtitle">20 videos mensuales. Profesionales. Listos para publicar.</p>
      </div>

      <motion.div
        className={styles.grid}
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.15 }}
      >
        {videoPackages.map((packageItem) => (
          <motion.div key={packageItem.id} variants={fadeSlideUp}>
            <PackageCard {...packageItem} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
