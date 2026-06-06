/**
 * @description Formatea números a moneda mexicana visible para UI comercial.
 * @author Lincar Media Studio
 * @version 1.0.0
 * @param {number} value - Importe numérico en MXN.
 * @returns {string} Cadena con formato $6,900 MXN.
 */
export const formatCurrency = (value) => {
  const safeValue = Number.isFinite(value) ? value : 0;
  return `$${safeValue.toLocaleString('es-MX')} MXN`;
};
