export const calcularNetoMensual = ({
  bruto,
  pagas = 12,
  isLess1Year = false,
  categoria, // no usado en esta aproximación, puede elegirse para mejoras futuras
  edad = 30,
  comunidad, // actualmente la escala usada es la combinación estatal+autonómica promedio (ver nota)
  minusvalia = null, // 'Entre 33% y 65%' | 'Superior a 65%' | null
  movilidad = false
}) => {
  // ---------- PARÁMETROS / CONSTANTES (aprox. oficiales) ----------
  // % que aporta el trabajador (sumatorio de: contingencias comunes, desempleo, FP, MEI (si procede))
  // fuente: Seguridad Social / BOE (valores de trabajador 2024-2025: 4.70% + 1.55% + 0.10% + MEI 0.13% ≈ 6.48%)
  const WORKER_SS_RATE = 0.0648; // 6.48% (aprox.)

  // Escala combinada (tipo marginal por tramos) — tabla combinada de ejemplo usada por muchos simuladores
  // (estos % son el TOTAL: estatal + autonómico combinados — ver fuentes). Ajusta si quieres por comunidad.
  const TAX_BRACKETS = [
    { upTo: 12450, rate: 0.19 },
    { upTo: 20200, rate: 0.24 },
    { upTo: 35200, rate: 0.30 },
    { upTo: 60000, rate: 0.37 },
    { upTo: Infinity, rate: 0.45 }
  ];

  // ---------- 1) COTIZACIONES a la Seguridad Social (trabajador) ----------
  const cotizacionSS = bruto * WORKER_SS_RATE;
  const baseDespuesSS = Math.max(0, bruto - cotizacionSS);

  // ---------- 2) MÍNIMO PERSONAL Y FAMILIAR (simplificado, por AEAT) ----------
  // mínimo del contribuyente general (AEAT): 5.550 € anuales (ajustes por edad y discapacidad).
  let minimoPersonal = 5550;

  // edad: incrementos oficiales (aprox.): +1.150 si >65, +1.400 adicional si >75 (según AEAT).
  if (edad > 65 && edad <= 75) minimoPersonal += 1150;
  if (edad > 75) minimoPersonal += 1150 + 1400;

  // discapacidad: AEAT prevé mínimos adicionales. Aplicamos los importes estándar.
  if (minusvalia === 'Entre 33% y 65%') {
    minimoPersonal += 3000; // dato AEAT
  } else if (minusvalia === 'Superior a 65%') {
    minimoPersonal += 9000; // dato AEAT
  }

  // movilidad reducida / necesidad de ayuda de tercera persona -> +3000 (simplificación práctica).
  if (movilidad) minimoPersonal += 3000;

  // ---------- 3) BASE IMPONIBLE aproximada ----------
  // Nota: estamos simplificando no aplicando otras deducciones complejas; esto es lo que
  // suele usarse en una calculadora de nómina para estimar retención.
  const baseImponibleAprox = Math.max(0, baseDespuesSS - minimoPersonal);

  // ---------- 4) CÁLCULO POR TRAMOS (cuota íntegra aproximada) ----------
  let cuota = 0;
  let remaining = baseImponibleAprox;
  let lower = 0;
  for (const tb of TAX_BRACKETS) {
    const upper = tb.upTo;
    const taxableInThisBracket = Math.max(0, Math.min(remaining, upper - lower));
    cuota += taxableInThisBracket * tb.rate;
    remaining -= taxableInThisBracket;
    if (remaining <= 0) break;
    lower = upper;
  }

  // ---------- 5) AJUSTES (contrato <1 año, deducciones "simples") ----------
  // El algoritmo oficial de retenciones de Hacienda tiene más reglas.
  // Aquí implementamos un ajuste simple idéntico al que tenías: +2 pp si contrato corto.
  if (isLess1Year) {
    // aplicamos 2 puntos porcentuales adicionales sobre la base (simulación de aumento de retención)
    cuota += baseDespuesSS * 0.02;
  }

  // Evitar cuota negativa
  cuota = Math.max(0, cuota);

  // ---------- 6) NETO ANUAL y NETO MENSUAL ----------
  const netoAnual = bruto - cotizacionSS - cuota;
  const netoMensualCalculado = netoAnual / (pagas || 1);

  // redondeo
  const netoRounded = Number(netoMensualCalculado.toFixed(2));

  return netoRounded;
};
