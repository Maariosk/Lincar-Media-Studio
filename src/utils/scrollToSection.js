/**
 * @description Realiza smooth scroll a una sección del sitio por id.
 * @author Lincar Media Studio
 * @version 1.0.0
 * @param {string} sectionId - Id del elemento destino.
 */
export const scrollToSection = (sectionId) => {
  const safeId = String(sectionId || '').replace(/[^a-zA-Z0-9-_]/g, '');
  const target = document.getElementById(safeId);

  if (!target) return;

  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

/**
 * @description Crea un mailto seguro con subject codificado.
 * @param {string} subject - Subject sugerido para el correo.
 * @returns {string} Enlace mailto listo para usar.
 */
export const buildMailto = (subject) => {
  const safeSubject = encodeURIComponent(String(subject || 'Solicitud de información Focus Media'));
  return `mailto:focusmedia20251@outlook.com?subject=${safeSubject}`;
};
