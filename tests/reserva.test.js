// Pruebas funcionales de dominio y aplicación. Ejecutar: npm test (Node 18+)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validarReserva, hayConflicto, validarFecha, ESTADOS } from '../src/domain/reserva.js';
import { crearReservaService } from '../src/application/reservaService.js';
import { DOCENTES } from '../src/infrastructure/datos.js';

const HOY = new Date('2026-11-26T09:00:00'); // jueves
const base = {
  docenteId: 'd1', asignatura: 'Interacción Humano-Computador', modalidad: 'Presencial',
  fecha: '2026-11-27', hora: '09:00', estudiante: 'Ana Pérez', correo: 'ana@uta.edu.ec', motivo: 'Dudas sobre heurísticas',
};
const repoMemoria = () => { let d = []; return { listar: () => d, guardarTodas: (l) => { d = l; } }; };
const nuevoServicio = () => crearReservaService({ repo: repoMemoria(), docentes: DOCENTES, ahora: () => HOY });

test('CP01 reserva válida pasa la validación', () => {
  assert.equal(validarReserva(base, HOY).valido, true);
});
test('CP02 campos vacíos muestran un mensaje por campo', () => {
  const { errores } = validarReserva({}, HOY);
  assert.equal(Object.keys(errores).length, 8);
});
test('CP03 correo no institucional es rechazado', () => {
  assert.ok(validarReserva({ ...base, correo: 'ana@gmail.com' }, HOY).errores.correo);
});
test('CP04 fecha pasada y fin de semana son rechazadas', () => {
  assert.match(validarReserva({ ...base, fecha: '2026-11-20' }, HOY).errores.fecha, /ya pasó/);
  assert.match(validarReserva({ ...base, fecha: '2026-11-28' }, HOY).errores.fecha, /fin de semana/);
});
test('CP05 registrar crea reserva Confirmada y ocupa el horario', () => {
  const s = nuevoServicio();
  const r = s.registrar(base);
  assert.equal(r.ok, true);
  assert.equal(r.reserva.estado, ESTADOS.CONFIRMADA);
  assert.ok(!s.horariosDisponibles('d1', base.fecha).includes('09:00'));
});
test('CP06 no se permite doble reserva del mismo horario', () => {
  const s = nuevoServicio();
  s.registrar(base);
  const r2 = s.registrar({ ...base, estudiante: 'Luis' });
  assert.equal(r2.ok, false);
  assert.ok(r2.errores.hora);
});
test('CP07 modificar cambia el estado a Modificada', () => {
  const s = nuevoServicio();
  const { reserva } = s.registrar(base);
  const m = s.modificar(reserva.id, { hora: '10:00' });
  assert.equal(m.ok, true);
  assert.equal(m.reserva.estado, ESTADOS.MODIFICADA);
});
test('CP08 cancelar libera el horario y bloquea modificaciones', () => {
  const s = nuevoServicio();
  const { reserva } = s.registrar(base);
  assert.equal(s.cancelar(reserva.id).ok, true);
  assert.ok(s.horariosDisponibles('d1', base.fecha).includes('09:00'));
  assert.equal(s.modificar(reserva.id, { hora: '10:00' }).ok, false);
});
test('CP09 conflicto ignora reservas canceladas', () => {
  assert.equal(hayConflicto(base, [{ ...base, id: 'x', estado: ESTADOS.CANCELADA }]), false);
});
test('CP10 validarFecha rechaza pasado y fin de semana, y acepta día hábil', () => {
  assert.match(validarFecha('2026-11-20', HOY), /ya pasó/);
  assert.match(validarFecha('2026-11-28', HOY), /fin de semana/);
  assert.equal(validarFecha('2026-11-27', HOY), '');
});
