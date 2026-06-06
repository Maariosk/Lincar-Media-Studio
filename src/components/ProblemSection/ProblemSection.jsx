/**
 * @description Sección del problema con cards de pain points para PYMES.
 * @author Lincar Media Studio
 * @version 1.0.0
 */
import { motion } from 'framer-motion';
import { FaBullhorn, FaClock, FaVideo } from 'react-icons/fa';
import { fadeSlideUp, staggerContainer } from '../../animations/variants';
import styles from './ProblemSection.module.less';

const painPoints = [
  {
    title: 'Sin tiempo',
    text: 'No tienes horas para crear, editar y publicar contenido todos los días.',
    Icon: FaClock
  },
  {
    title: 'Sin equipo',
    text: 'Un buen video requiere cámara, edición y estrategia. No es para improvisar.',
    Icon: FaVideo
  },
  {
    title: 'Sin resultados',
    text: 'Publicar sin estrategia es desperdiciar dinero, energía y tiempo operativo.',
    Icon: FaBullhorn
  }
];

/**
 * @returns {JSX.Element} Sección de problema.
 */
export const ProblemSection = () => (
  <section id="servicios" className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <span className="sectionLabel">El problema real</span>
        <h2 className="sectionTitle">¿Por qué tu negocio no está creciendo en redes?</h2>
        <p className="sectionSubtitle">
          La mayoría de negocios no necesita publicar más por publicar. Necesita contenido con
          dirección, producción constante y una estrategia que convierta atención en confianza.
        </p>
      </div>

      <motion.div
        className={styles.grid}
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        {painPoints.map(({ title, text, Icon }) => (
          <motion.article key={title} className={styles.card} variants={fadeSlideUp}>
            <span className={styles.icon}>
              <Icon aria-hidden="true" />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
);
