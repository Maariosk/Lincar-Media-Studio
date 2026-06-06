import { useEffect, useState } from 'react';

/**
 * @description Detecta si la ventana superó un umbral de scroll para aplicar blur al navbar.
 * @author Lincar Media Studio
 * @version 1.0.0
 * @param {number} threshold - Distancia en píxeles para activar estado scrolled.
 * @returns {boolean} true cuando el scroll supera el threshold.
 */
export const useNavbarScroll = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
};
