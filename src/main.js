// Punto de entrada: compone las capas e implementa el enrutamiento por hash.
import { DOCENTES } from './infrastructure/datos.js';
import { repositorioReservas, repositorioBorrador } from './infrastructure/almacenamiento.js';
import { crearReservaService } from './application/reservaService.js';
import { validarReserva } from './domain/reserva.js';
import { VistaInicio, VistaReservar, VistaConfirmacion, VistaReservas, CAMPOS_POR_PASO } from './presentation/vistas.js';

const servicio = crearReservaService({ repo: repositorioReservas, docentes: DOCENTES });
const app = document.getElementById('app');
let avisoReservas = '';

function enfocar(errores) {
  const resumen = document.getElementById('resumen-errores');
  (resumen || app.querySelector('h1'))?.focus();
}

function pintar(html, errores = {}) {
  app.innerHTML = html;
  enfocar(errores);
  document.title = (app.querySelector('h1')?.textContent.trim() || 'Inicio') + ' · Tutoría UX';
}

function erroresDelPaso(b, paso) {
  const { errores } = validarReserva(b);
  return Object.fromEntries(Object.entries(errores).filter(([c]) => (CAMPOS_POR_PASO[paso] || []).includes(c)));
}

function rutaReservar(errores = {}) {
  const b = repositorioBorrador.obtener();
  pintar(VistaReservar(servicio, b, errores), errores);
  const form = document.getElementById('form-reserva');

  // Conservar cada cambio en el borrador (no se pierde al volver o recargar)
  form.addEventListener('change', (e) => {
    const borr = repositorioBorrador.obtener();
    borr[e.target.name] = e.target.value;
    if (e.target.name === 'docenteId') Object.assign(borr, { asignatura: '', modalidad: '', hora: '' });
    if (e.target.name === 'fecha') borr.hora = '';
    repositorioBorrador.guardar(borr);
    if (['docenteId', 'fecha'].includes(e.target.name)) {
      rutaReservar();
      document.getElementsByName(e.target.name)[0]?.focus();
    }
  });
  form.addEventListener('input', (e) => {
    if (e.target.matches('input[type=text],input[type=email],textarea')) {
      const borr = repositorioBorrador.obtener();
      borr[e.target.name] = e.target.value;
      repositorioBorrador.guardar(borr);
    }
  });

  form.addEventListener('click', (e) => {
    const borr = repositorioBorrador.obtener();
    if (e.target.dataset.accion === 'atras') {
      borr.paso = Math.max(1, (borr.paso || 1) - 1);
      repositorioBorrador.guardar(borr);
      rutaReservar();
    }
    if (e.target.dataset.irPaso) {
      borr.paso = Number(e.target.dataset.irPaso);
      repositorioBorrador.guardar(borr);
      rutaReservar();
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const borr = repositorioBorrador.obtener();
    const paso = borr.paso || 1;
    if (paso < 4) {
      const err = erroresDelPaso(borr, paso);
      if (Object.keys(err).length) return rutaReservar(err);
      borr.paso = paso + 1;
      repositorioBorrador.guardar(borr);
      return rutaReservar();
    }
    const { paso: _p, editandoId, ...datos } = borr;
    const res = editandoId ? servicio.modificar(editandoId, datos) : servicio.registrar(datos);
    if (!res.ok) {
      // Volver al primer paso con error, conservando todo lo demás
      const pasoErr = Number(Object.keys(CAMPOS_POR_PASO).find((p) => CAMPOS_POR_PASO[p].some((c) => res.errores[c]))) || 4;
      borr.paso = pasoErr;
      repositorioBorrador.guardar(borr);
      return rutaReservar(res.errores);
    }
    repositorioBorrador.limpiar();
    location.hash = '#/confirmacion/' + res.reserva.id;
  });
}

function rutaReservas() {
  pintar(VistaReservas(servicio, avisoReservas));
  avisoReservas = '';
  const dlg = document.getElementById('dlg-cancelar');
  let idCancelar = null;
  let origen = null;

  app.addEventListener('click', manejar);
  function manejar(e) {
    const t = e.target;
    if (t.dataset.modificar) {
      const r = servicio.obtener(t.dataset.modificar);
      const { id, estado, creada, modificada, ...datos } = r;
      repositorioBorrador.guardar({ ...datos, editandoId: id, paso: 4 });
      app.removeEventListener('click', manejar);
      location.hash = '#/reservar';
    }
    if (t.dataset.cancelar) {
      idCancelar = t.dataset.cancelar;
      origen = t;
      const r = servicio.obtener(idCancelar);
      document.getElementById('dlg-texto').textContent = `${r.asignatura}, ${r.fecha} a las ${r.hora}. Esta acción no se puede deshacer.`;
      dlg.showModal();
      dlg.querySelector('[data-dlg="no"]').focus();
    }
    if (t.dataset.dlg) {
      dlg.close();
      if (t.dataset.dlg === 'si') {
        servicio.cancelar(idCancelar);
        avisoReservas = `Reserva ${idCancelar} cancelada.`;
        app.removeEventListener('click', manejar);
        rutaReservas();
      } else origen?.focus();
    }
  }
}

function router() {
  const [, ruta, param] = (location.hash || '#/').split('/');
  document.querySelectorAll('.nav a').forEach((a) => a.toggleAttribute('aria-current', a.getAttribute('href') === '#/' + (ruta || '')));
  if (ruta === 'reservar') return rutaReservar();
  if (ruta === 'reservas') return rutaReservas();
  if (ruta === 'confirmacion') return pintar(VistaConfirmacion(servicio, param));
  pintar(VistaInicio(servicio));
}

// Al empezar una reserva nueva desde el inicio, limpiar borradores de edición
document.addEventListener('click', (e) => {
  if (e.target.closest('a[href="#/reservar"]') && repositorioBorrador.obtener().editandoId) repositorioBorrador.limpiar();
});
window.addEventListener('hashchange', router);
router();
