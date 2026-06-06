/**
 * @description Variantes de animación globales para Focus Media.
 * @author Lincar Media Studio
 * @version 1.0.0
 */

export const fadeSlideUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
};

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export const heroStagger = {
  animate: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } }
};

export const platformCardEntrance = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: 'easeOut' }
};

export const eliteReveal = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export const accordionCollapse = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto', opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.35, ease: 'easeInOut' }
};
