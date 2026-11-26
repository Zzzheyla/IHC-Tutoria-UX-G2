// DOMINIO: reglas de negocio puras (sin DOM ni almacenamiento).
export const ESTADOS = Object.freeze({
  CONFIRMADA: 'Confirmada',
  MODIFICADA: 'Modificada',
  CANCELADA: 'Cancelada',
});

export const MODALIDADES = Object.freeze(['Presencial', 'Virtual']);

export const CAMPOS_REQUERIDOS = Object.freeze({
  docenteId: 'Selecciona un docente.',
  asignatura: 'Selecciona una asignatura.',
  modalidad: 'Elige la modalidad (presencial o virtual).',
  fecha: 'Elige una fecha.',
  hora: 'Elige un horario disponible.',
  estudiante: 'Escribe tu nombre completo.',
  correo: 'Escribe tu correo institucional.',
  motivo: 'Cuéntale al docente el tema de la tutoría.',
});

/** Devuelve el mensaje de error de una fecha (AAAA-MM-DD) o '' si es válida. */
export function validarFecha(fecha, hoy = new Date()) {
  const f = new Date(fecha + 'T00:00:00');
  const h = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
  if (isNaN(f)) return 'La fecha no es válida.';
  if (f < h) return 'La fecha ya pasó. Elige hoy o una fecha futura.';
  if (f.getDay() === 0 || f.getDay() === 6) return 'No hay tutorías en fin de semana. Elige de lunes a viernes.';
  return '';
}

/** Valida un borrador de reserva. Devuelve { valido, errores: {campo: mensaje} } */
export function validarReserva(r, hoy = new Date()) {
  const errores = {};
  for (const [campo, msg] of Object.entries(CAMPOS_REQUERIDOS)) {
    if (!r[campo] || String(r[campo]).trim() === '') errores[campo] = msg;
  }
  if (r.modalidad && !MODALIDADES.includes(r.modalidad)) {
    errores.modalidad = 'La modalidad no es válida.';
  }
  if (r.correo && !/^[^\s@]+@uta\.edu\.ec$/i.test(r.correo.trim())) {
    errores.correo = 'Usa tu correo institucional, por ejemplo: nombre@uta.edu.ec';
  }
  if (r.fecha) {
    const errFecha = validarFecha(r.fecha, hoy);
    if (errFecha) errores.fecha = errFecha;
  }
  if (r.motivo && r.motivo.trim().length > 0 && r.motivo.trim().length < 10) {
    errores.motivo = 'Describe el tema con al menos 10 caracteres.';
  }
  return { valido: Object.keys(errores).length === 0, errores };
}

/** Dos reservas activas no pueden ocupar el mismo docente, fecha y hora. */
export function hayConflicto(reserva, existentes) {
  return existentes.some(
    (e) =>
      e.id !== reserva.id &&
      e.estado !== ESTADOS.CANCELADA &&
      e.docenteId === reserva.docenteId &&
      e.fecha === reserva.fecha &&
      e.hora === reserva.hora
  );
}

export function puedeModificarse(reserva) {
  return reserva.estado !== ESTADOS.CANCELADA;
}
