/**
 * @description Footer premium con logo real PNG, contacto y redes sociales.
 * @author Lincar Media Studio
 * @version 1.0.0
 */
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import { scrollToSection } from '../../utils/scrollToSection';
import styles from './Footer.module.less';

const LOGO_HORIZONTAL = `${import.meta.env.BASE_URL}assets/logo/lincar-horizontal.png`;

const serviceLinks = [
  { label: 'Servicios', target: 'servicios' },
  { label: 'Plataformas', target: 'plataformas' },
  { label: 'Paquetes', target: 'paquetes' },
  { label: 'Combos', target: 'combos' }
];

/**
 * @returns {JSX.Element} Footer del sitio.
 */
export const Footer = () => (
  <footer id="contacto" className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.brandColumn}>
        <span className={styles.logoFrame}>
          <img src={LOGO_HORIZONTAL} alt="Lincar Media Studio" />
        </span>

        <strong>Focus Media</strong>
        <p>powered by Lincar Media Studio</p>
      </div>

      <div className={styles.columns}>
        <div>
          <h3>Servicios</h3>
          {serviceLinks.map((link) => (
            <button key={link.target} type="button" onClick={() => scrollToSection(link.target)}>
              {link.label}
            </button>
          ))}
        </div>

        <div>
          <h3>Contacto</h3>
          <a href="tel:5613030395">Tel: 5613030395</a>
          <a href="mailto:focusmedia20251@outlook.com">focusmedia20251@outlook.com</a>
          <a href="https://wa.me/525613030395" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>

        <div>
          <h3>Redes sociales</h3>
          <div className={styles.socials} aria-label="Redes sociales">
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
              <FaYoutube className={styles.youtube} aria-hidden="true" />
            </a>

            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok">
              <FaTiktok className={styles.tiktok} aria-hidden="true" />
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram className={styles.instagram} aria-hidden="true" />
            </a>

            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook className={styles.facebook} aria-hidden="true" />
            </a>

            <a href="https://wa.me/525613030395" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp className={styles.whatsapp} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.legal}>
        <p>
          © 2025 Focus Media · Powered by Lincar Media Studio · Todos los precios en MXN sin IVA · Sujetos a cambio sin previo aviso
        </p>
        <p>La monetización en redes sociales no está garantizada y depende de las políticas de cada plataforma.</p>
      </div>
    </div>
  </footer>
);