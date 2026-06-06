/**
 * @description Navbar sticky premium con logo real PNG, blur al scroll y CTA de contacto.
 * @author Lincar Media Studio
 * @version 1.0.0
 */
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useNavbarScroll } from '../../hooks/useNavbarScroll';
import { scrollToSection } from '../../utils/scrollToSection';
import styles from './Navbar.module.less';

const LOGO_HORIZONTAL = `${import.meta.env.BASE_URL}assets/logo/lincar-horizontal.png`;
const LOGO_ISOTIPO = `${import.meta.env.BASE_URL}assets/logo/lincar-isotipo.png`;

const navItems = [
  { label: 'Servicios', target: 'servicios' },
  { label: 'Plataformas', target: 'plataformas' },
  { label: 'Paquetes', target: 'paquetes' },
  { label: 'Combos', target: 'combos' },
  { label: 'Contacto', target: 'contacto' }
];

/**
 * @returns {JSX.Element} Navbar principal del sitio.
 */
export const Navbar = () => {
  const isScrolled = useNavbarScroll(50);
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (target) => {
    scrollToSection(target);
    setIsOpen(false);
  };

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <button className={styles.logoButton} onClick={() => handleNav('hero')} aria-label="Ir al inicio">
          <span className={styles.logoFrame}>
            <img
              className={styles.logoHorizontal}
              src={LOGO_HORIZONTAL}
              alt="Lincar Media Studio"
            />

            <img
              className={styles.logoMobile}
              src={LOGO_ISOTIPO}
              alt="Lincar Media Studio"
            />
          </span>
        </button>

        <nav className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`} aria-label="Navegación principal">
          {navItems.map((item) => (
            <button key={item.target} type="button" onClick={() => handleNav(item.target)}>
              {item.label}
            </button>
          ))}
        </nav>

        <div className={styles.actions}>
          <a
            className={styles.whatsapp}
            href="https://wa.me/525613030395"
            target="_blank"
            rel="noreferrer"
            aria-label="Contactar por WhatsApp"
          >
            <FaWhatsapp aria-hidden="true" />
          </a>

          <a className={styles.cta} href="mailto:focusmedia20251@outlook.com">
            Contáctanos
          </a>

          <button
            className={styles.menuButton}
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};