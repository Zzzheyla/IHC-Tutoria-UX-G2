// PRESENTACIÓN: pantallas. Solo dibujan y delegan acciones al servicio.
import { Campo, GrupoOpciones, Pasos, ResumenErrores, Insignia, formatoFecha, esc } from './componentes.js';
import { MODALIDADES, validarFecha } from '../domain/reserva.js';

export const NOMBRES_PASOS = ['Docente', 'Modalidad y horario', 'Tus datos', 'Confirmar'];
export const CAMPOS_POR_PASO = {
  1: ['docenteId', 'asignatura'],
  2: ['modalidad', 'fecha', 'hora'],
  3: ['estudiante', 'correo', 'motivo'],
};

export function VistaInicio(servicio) {
  const activas = servicio.listarReservas().filter((r) => r.estado !== 'Cancelada').length;
  return `
    <h1 tabindex="-1">Reserva tu tutoría</h1>
    <p class="lead">Elige docente, modalidad y horario en 4 pasos. Puedes volver atrás sin perder lo que elegiste.</p>
    <div class="acciones-inicio">
      <a class="btn btn--primario" href="#/reservar">Reservar una tutoría</a>
      <a class="btn" href="#/reservas">Mis reservas (${activas} activas)</a>
    </div>
    <h2>Docentes disponibles</h2>
    <ul class="tarjetas">
      ${servicio
        .listarDocentes()
        .map(
          (d) => `<li class="tarjeta"><h3>${esc(d.nombre)}</h3>
            <p>${d.asignaturas.map(esc).join(' · ')}</p>
            <p class="meta">${d.modalidades.join(' / ')} — ${esc(d.oficina)}</p></li>`
        )
        .join('')}
    </ul>`;
}

export function VistaReservar(servicio, b, errores = {}) {
  const paso = b.paso || 1;
  const docente = servicio.buscarDocente(b.docenteId);
  const titulo = b.editandoId ? `Modificar reserva ${esc(b.editandoId)}` : 'Nueva reserva';
  let cuerpo = '';

  if (paso === 1) {
    cuerpo =
      GrupoOpciones({
        nombre: 'docenteId',
        leyenda: '¿Con qué docente?',
        valor: b.docenteId,
        error: errores.docenteId,
        opciones: servicio.listarDocentes().map((d) => ({ valor: d.id, titulo: d.nombre, detalle: d.asignaturas.join(' · ') })),
      }) +
      Campo({
        id: 'asignatura',
        etiqueta: 'Asignatura',
        error: errores.asignatura,
        ayuda: docente ? '' : 'Primero elige un docente.',
        control: `<select {{attrs}} ${docente ? '' : 'disabled'}><option value="">Selecciona…</option>${(docente?.asignaturas || [])
          .map((a) => `<option ${a === b.asignatura ? 'selected' : ''}>${esc(a)}</option>`)
          .join('')}</select>`,
      });
  }

  if (paso === 2) {
    const errFecha = b.fecha ? validarFecha(b.fecha) : '';
    const horas = errFecha ? [] : servicio.horariosDisponibles(b.docenteId, b.fecha, b.editandoId);
    cuerpo =
      GrupoOpciones({
        nombre: 'modalidad',
        leyenda: 'Modalidad',
        valor: b.modalidad,
        error: errores.modalidad,
        opciones: MODALIDADES.filter((m) => docente?.modalidades.includes(m)).map((m) => ({
          valor: m,
          titulo: m,
          detalle: m === 'Virtual' ? 'Recibirás el enlace por correo' : docente?.oficina,
        })),
      }) +
      Campo({
        id: 'fecha',
        etiqueta: 'Fecha',
        ayuda: 'De lunes a viernes, desde hoy.',
        error: errores.fecha || errFecha,
        control: `<input type="date" {{attrs}} value="${esc(b.fecha || '')}" min="${new Date().toISOString().slice(0, 10)}">`,
      }) +
      (b.fecha
        ? errFecha
          ? `<p class="ayuda">Elige otra fecha para ver los horarios.</p>`
          : horas.length
          ? GrupoOpciones({
              nombre: 'hora',
              leyenda: `Horarios libres el ${formatoFecha(b.fecha)}`,
              valor: b.hora,
              error: errores.hora,
              opciones: horas.map((h) => ({ valor: h, titulo: h })),
            })
          : `<p class="alerta alerta--aviso" role="status">No quedan horarios libres ese día. Prueba otra fecha.</p>`
        : `<p class="ayuda">Elige una fecha para ver los horarios.</p>`);
  }

  if (paso === 3) {
    cuerpo =
      Campo({ id: 'estudiante', etiqueta: 'Nombre completo', error: errores.estudiante, control: `<input type="text" autocomplete="name" {{attrs}} value="${esc(b.estudiante || '')}">` }) +
      Campo({ id: 'correo', etiqueta: 'Correo institucional', ayuda: 'Ejemplo: nombre@uta.edu.ec', error: errores.correo, control: `<input type="email" autocomplete="email" {{attrs}} value="${esc(b.correo || '')}">` }) +
      Campo({ id: 'motivo', etiqueta: 'Tema de la tutoría', ayuda: 'Mínimo 10 caracteres.', error: errores.motivo, control: `<textarea rows="3" {{attrs}}>${esc(b.motivo || '')}</textarea>` });
  }

  if (paso === 4) {
    const fila = (t, v, p) => `<div><dt>${t}</dt><dd>${esc(v || '—')} <button type="button" class="link" data-ir-paso="${p}" aria-label="Editar ${t}">Editar</button></dd></div>`;
    cuerpo = `
      <p>Revisa los datos antes de confirmar.</p>
      <dl class="resumen">
        ${fila('Docente', docente?.nombre, 1)}${fila('Asignatura', b.asignatura, 1)}
        ${fila('Modalidad', b.modalidad, 2)}${fila('Fecha', formatoFecha(b.fecha), 2)}${fila('Hora', b.hora, 2)}
        ${fila('Estudiante', b.estudiante, 3)}${fila('Correo', b.correo, 3)}${fila('Tema', b.motivo, 3)}
      </dl>`;
  }

  return `
    <h1 tabindex="-1">${titulo}</h1>
    ${Pasos(paso, NOMBRES_PASOS)}
    ${ResumenErrores(errores)}
    <form id="form-reserva" novalidate>
      ${cuerpo}
      <div class="barra-acciones">
        ${paso > 1 ? '<button type="button" class="btn" data-accion="atras">← Atrás</button>' : '<a class="btn" href="#/">Cancelar</a>'}
        <button type="submit" class="btn btn--primario">${paso < 4 ? 'Continuar →' : b.editandoId ? 'Guardar cambios' : 'Confirmar reserva'}</button>
      </div>
    </form>`;
}

export function VistaConfirmacion(servicio, id) {
  const r = servicio.obtener(id);
  if (!r) return `<h1 tabindex="-1">Reserva no encontrada</h1><a class="btn" href="#/reservas">Ver mis reservas</a>`;
  const d = servicio.buscarDocente(r.docenteId);
  return `
    <div class="alerta alerta--exito" role="status">
      <h1 tabindex="-1">✓ Reserva ${r.estado === 'Modificada' ? 'modificada' : 'confirmada'}</h1>
      <p>Código <strong>${esc(r.id)}</strong>. Te esperamos el ${formatoFecha(r.fecha)} a las ${esc(r.hora)}.</p>
    </div>
    <dl class="resumen">
      <div><dt>Docente</dt><dd>${esc(d?.nombre)}</dd></div>
      <div><dt>Asignatura</dt><dd>${esc(r.asignatura)}</dd></div>
      <div><dt>Modalidad</dt><dd>${esc(r.modalidad)} — ${esc(r.modalidad === 'Virtual' ? 'enlace al correo' : d?.oficina)}</dd></div>
    </dl>
    <div class="barra-acciones"><a class="btn" href="#/">Inicio</a><a class="btn btn--primario" href="#/reservas">Ver mis reservas</a></div>`;
}

export function VistaReservas(servicio, aviso = '') {
  const lista = servicio.listarReservas();
  return `
    <h1 tabindex="-1">Mis reservas</h1>
    <div aria-live="polite" class="zona-aviso">${aviso ? `<p class="alerta alerta--exito">${esc(aviso)}</p>` : ''}</div>
    ${
      lista.length
        ? `<ul class="tarjetas">${lista
            .map((r) => {
              const d = servicio.buscarDocente(r.docenteId);
              const activa = r.estado !== 'Cancelada';
              return `<li class="tarjeta ${activa ? '' : 'tarjeta--inactiva'}">
                <div class="tarjeta-cab"><h2>${esc(r.asignatura)}</h2>${Insignia(r.estado)}</div>
                <p>${esc(d?.nombre)} · ${esc(r.modalidad)}</p>
                <p class="meta">${formatoFecha(r.fecha)}, ${esc(r.hora)} · Código ${esc(r.id)}</p>
                ${activa ? `<div class="barra-acciones">
                  <button class="btn" data-modificar="${esc(r.id)}">Modificar</button>
                  <button class="btn btn--peligro" data-cancelar="${esc(r.id)}">Cancelar</button></div>` : ''}
              </li>`;
            })
            .join('')}</ul>`
        : `<p>Aún no tienes reservas.</p><a class="btn btn--primario" href="#/reservar">Reservar una tutoría</a>`
    }
    <dialog id="dlg-cancelar" aria-labelledby="dlg-titulo">
      <h2 id="dlg-titulo">¿Cancelar esta tutoría?</h2>
      <p id="dlg-texto"></p>
      <div class="barra-acciones">
        <button class="btn" data-dlg="no">No, mantenerla</button>
        <button class="btn btn--peligro" data-dlg="si">Sí, cancelar</button>
      </div>
    </dialog>`;
}
