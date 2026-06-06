/**
 * @description Card de plataforma con formatos y servicios específicos.
 * @author Lincar Media Studio
 * @version 1.0.0
 */
import PropTypes from 'prop-types';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import styles from './Platforms.module.less';

const icons = {
  youtube: FaYoutube,
  tiktok: FaTiktok,
  instagram: FaInstagram,
  facebook: FaFacebook
};

/**
 * @param {object} props - Props del card.
 * @returns {JSX.Element} Card de plataforma.
 */
export const PlatformCard = ({ name, iconName, formats, services, footerNote }) => {
  const Icon = icons[iconName] || FaInstagram;

  return (
    <article className={`${styles.platformCard} ${styles[iconName]}`}>
      <div className={styles.platformTopline}>
        <span className={styles.platformIcon}>
          <Icon aria-hidden="true" />
        </span>
        <h3>{name}</h3>
      </div>

      <div className={styles.platformColumns}>
        <div>
          <h4>Formatos</h4>
          <ul>
            {formats.map((format) => (
              <li key={format}>{format}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Servicio</h4>
          <ul>
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </div>

      {footerNote ? <p className={styles.footerNote}>{footerNote}</p> : null}
    </article>
  );
};

PlatformCard.propTypes = {
  name: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  formats: PropTypes.arrayOf(PropTypes.string).isRequired,
  services: PropTypes.arrayOf(PropTypes.string).isRequired,
  footerNote: PropTypes.string
};

PlatformCard.defaultProps = {
  footerNote: ''
};
