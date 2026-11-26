// APLICACIÓN: casos de uso. Orquesta dominio + infraestructura (inyectada).
import { ESTADOS, validarReserva, hayConflicto, puedeModificarse } from '../domain/reserva.js';

export function crearReservaService({ repo, docentes, ahora = () => new Date() }) {
  const buscarDocente = (id) => docentes.find((d) => d.id === id);

  return {
    // R1: consultar docentes y asignaturas
    listarDocentes: () => docentes,
    buscarDocente,

    // R3: horarios disponibles (excluye los ocupados por reservas activas)
    horariosDisponibles(docenteId, fecha, ignorarId = null) {
      const d = buscarDocente(docenteId);
      if (!d || !fecha) return [];
      const ocupadas = repo
        .listar()
        .filter((r) => r.id !== ignorarId && r.docenteId === docenteId && r.fecha === fecha && r.estado !== ESTADOS.CANCELADA)
        .map((r) => r.hora);
      return d.horarios.filter((h) => !ocupadas.includes(h));
    },

    // R4: registrar reserva
    registrar(borrador) {
      const { valido, errores } = validarReserva(borrador, ahora());
      if (!valido) return { ok: false, errores };
      const lista = repo.listar();
      if (hayConflicto(borrador, lista)) {
        return { ok: false, errores: { hora: 'Ese horario acaba de ocuparse. Elige otro.' } };
      }
      const reserva = {
        ...borrador,
        id: 'T-' + Date.now().toString(36).toUpperCase(),
        estado: ESTADOS.CONFIRMADA,
        creada: ahora().toISOString(),
      };
      repo.guardarTodas([...lista, reserva]);
      return { ok: true, reserva };
    },

    // R5: consultar reservas
    listarReservas: () => repo.listar().slice().sort((a, b) => (a.fecha + a.hora).localeCompare(b.fecha + b.hora)),
    obtener: (id) => repo.listar().find((r) => r.id === id),

    // R6a: modificar reserva
    modificar(id, cambios) {
      const lista = repo.listar();
      const actual = lista.find((r) => r.id === id);
      if (!actual) return { ok: false, errores: { general: 'No encontramos la reserva.' } };
      if (!puedeModificarse(actual)) return { ok: false, errores: { general: 'Una reserva cancelada no se puede modificar.' } };
      const nueva = { ...actual, ...cambios, id };
      const { valido, errores } = validarReserva(nueva, ahora());
      if (!valido) return { ok: false, errores };
      if (hayConflicto(nueva, lista)) return { ok: false, errores: { hora: 'Ese horario ya está ocupado. Elige otro.' } };
      nueva.estado = ESTADOS.MODIFICADA;
      nueva.modificada = ahora().toISOString();
      repo.guardarTodas(lista.map((r) => (r.id === id ? nueva : r)));
      return { ok: true, reserva: nueva };
    },

    // R6b: cancelar reserva
    cancelar(id) {
      const lista = repo.listar();
      const actual = lista.find((r) => r.id === id);
      if (!actual || actual.estado === ESTADOS.CANCELADA) return { ok: false };
      const cancelada = { ...actual, estado: ESTADOS.CANCELADA, cancelada: ahora().toISOString() };
      repo.guardarTodas(lista.map((r) => (r.id === id ? cancelada : r)));
      return { ok: true, reserva: cancelada };
    },
  };
}
