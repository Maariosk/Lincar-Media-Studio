import { useEffect, useRef, useState } from 'react';

/**
 * @description Hook con Intersection Observer para revelar elementos al entrar al viewport.
 * @author Lincar Media Studio
 * @version 1.0.0
 * @param {IntersectionObserverInit} options - Opciones del observer.
 * @returns {{ref: import('react').MutableRefObject<HTMLElement|null>, isVisible: boolean}}
 */
export const useScrollAnimation = (options = { threshold: 0.15 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible, options]);

  return { ref, isVisible };
};
