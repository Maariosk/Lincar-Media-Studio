/**
 * @description Accordion con condiciones generales de contratación.
 * @author Lincar Media Studio
 * @version 1.0.0
 */
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { accordionCollapse } from '../../animations/variants';
import styles from './Conditions.module.less';

const items = [
  {
    question: '¿Los precios incluyen IVA?',
    answer:
      'No. Todos los precios mostrados son en MXN y no incluyen IVA (16%). El IVA se añade según la situación fiscal del cliente.'
  },
  {
    question: '¿Cómo funciona el pago?',
    answer:
      'El pago puede realizarse mensualmente o de forma quincenal, según acuerdo previo con el cliente. Se solicita pago anticipado al inicio de cada periodo.'
  },
  {
    question: '¿Qué pasa si no me gustan los videos?',
    answer:
      'Cada video incluye 1 ronda de ajuste menor sin costo adicional. Cambios mayores o de dirección creativa tienen costo adicional.'
  },
  {
    question: '¿Qué NO está incluido en los paquetes?',
    answer:
      'Los paquetes NO incluyen: pauta publicitaria (Ads), presupuesto para campañas pagadas, atención al cliente 24/7, gestión de crisis de comunicación, locución profesional, renta de locaciones externas, modelos, influencers, permisos especiales de filmación, ni garantía de monetización en ninguna plataforma.'
  },
  {
    question: '¿Se garantiza la monetización en redes?',
    answer:
      'No. La monetización en YouTube, TikTok, Facebook o cualquier plataforma depende exclusivamente de las políticas, requisitos y condiciones vigentes de cada plataforma. Focus Media no garantiza monetización bajo ninguna circunstancia.'
  },
  {
    question: '¿Los precios pueden cambiar?',
    answer:
      'Los precios promocionales son por tiempo limitado y están sujetos a cambio sin previo aviso. El precio vigente al momento de firmar el contrato es el que aplica.'
  }
];

/**
 * @returns {JSX.Element} Accordion de condiciones.
 */
export const ConditionsAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className="sectionLabel">Condiciones</span>
          <h2 className="sectionTitle">Información importante antes de contratar</h2>
        </div>

        <div className={styles.accordion}>
          {items.map((item, index) => {
            const isOpen = activeIndex === index;
            const panelId = `condition-panel-${index}`;

            return (
              <article key={item.question} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span>{item.question}</span>
                  <FaChevronDown className={isOpen ? styles.rotate : ''} aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={panelId}
                      className={styles.answerWrap}
                      variants={accordionCollapse}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
