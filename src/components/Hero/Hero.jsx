/**
 * @description Hero principal con animación de entrada, CTAs y plataformas.
 * @author Lincar Media Studio
 * @version 1.0.0
 */
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import { fadeSlideUp, heroStagger } from '../../animations/variants';
import { scrollToSection } from '../../utils/scrollToSection';
import styles from './Hero.module.less';

const LOGO_ISOTIPO = `${import.meta.env.BASE_URL}assets/logo/lincar-isotipo.png`;

const platformIcons = [
  { label: 'YouTube', Icon: FaYoutube, className: styles.youtube },
  { label: 'TikTok', Icon: FaTiktok, className: styles.tiktok },
  { label: 'Instagram', Icon: FaInstagram, className: styles.instagram },
  { label: 'Facebook', Icon: FaFacebook, className: styles.facebook }
];

/**
 * @returns {JSX.Element} Hero de conversión.
 */
export const Hero = () => (
  <section id="hero" className={styles.hero}>
    <div className={styles.orbOne} />
    <div className={styles.orbTwo} />

    <motion.div
      className={styles.content}
      variants={heroStagger}
      initial="initial"
      animate="animate"
      aria-labelledby="hero-title"
    >
      <motion.img
        className={styles.logo}
        src={LOGO_ISOTIPO}
        alt="Isotipo Lincar Media Studio"
        variants={fadeSlideUp}
      />

      <motion.p className={styles.kicker} variants={fadeSlideUp}>
        Focus Media
      </motion.p>

      <motion.h1 id="hero-title" className={styles.title} variants={fadeSlideUp}>
        Contenido que convierte.
        <span>
          Presencia que <strong>domina.</strong>
        </span>
      </motion.h1>

      <motion.p className={styles.subtitle} variants={fadeSlideUp}>
        Producción profesional de video, manejo de redes y estrategia digital para negocios que
        quieren crecer en YouTube, TikTok, Instagram y Facebook.
      </motion.p>

      <motion.div className={styles.ctas} variants={fadeSlideUp}>
        <button type="button" className={styles.primaryCta} onClick={() => scrollToSection('paquetes')}>
          Ver paquetes
        </button>

        <a className={styles.secondaryCta} href="mailto:focusmedia20251@outlook.com">
          Agendar llamada gratis
        </a>
      </motion.div>

      <motion.div className={styles.platforms} variants={fadeSlideUp} aria-label="Plataformas">
        {platformIcons.map(({ label, Icon, className }) => (
          <span key={label} className={`${styles.platformIcon} ${className}`} title={label}>
            <Icon aria-hidden="true" />
            <span className="srOnly">{label}</span>
          </span>
        ))}
      </motion.div>
    </motion.div>
  </section>
);