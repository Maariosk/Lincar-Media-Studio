/**
 * @description Grid de plataformas con animación y cards informativos.
 * @author Lincar Media Studio
 * @version 1.0.0
 */
import { motion } from 'framer-motion';
import { platformCardEntrance, staggerContainer } from '../../animations/variants';
import { platforms } from '../../constants/platforms';
import { PlatformCard } from './PlatformCard';
import styles from './Platforms.module.less';

/**
 * @returns {JSX.Element} Sección de plataformas.
 */
export const PlatformGrid = () => (
  <section id="plataformas" className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <span className="sectionLabel">Distribución</span>
        <h2 className="sectionTitle">Un equipo. Cuatro plataformas. Resultados reales.</h2>
        <p className="sectionSubtitle">
          Adaptamos tu contenido para cada canal, respetando formatos, intención de consumo y
          lenguaje de cada red.
        </p>
      </div>

      <motion.div
        className={styles.grid}
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.15 }}
      >
        {platforms.map((platform) => (
          <motion.div key={platform.id} variants={platformCardEntrance}>
            <PlatformCard {...platform} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
