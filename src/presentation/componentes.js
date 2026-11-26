// PRESENTACIÓN: componentes reutilizables (devuelven HTML accesible).
export const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/** Campo de formulario con etiqueta, ayuda y error asociados por aria-describedby */
export function Campo({ id, etiqueta, control, ayuda = '', error = '' }) {
  const desc = [ayuda && `${id}-ayuda`, error && `${id}-error`].filter(Boolean).join(' ');
  const ctrl = control
    .replace('{{attrs}}', `id="${id}" name="${id}" ${desc ? `aria-describedby="${desc}"` : ''} ${error ? 'aria-invalid="true"' : ''}`);
  return `
    <div class="campo ${error ? 'campo--error' : ''}">
      <label for="${id}">${esc(etiqueta)}</label>
      ${ayuda ? `<p class="ayuda" id="${id}-ayuda">${esc(ayuda)}</p>` : ''}
      ${ctrl}
      ${error ? `<p class="error" id="${id}-error"><span aria-hidden="true">⚠</span> ${esc(error)}</p>` : ''}
    </div>`;
}

/** Grupo de opciones (radio) accesible con fieldset/legend */
export function GrupoOpciones({ nombre, leyenda, opciones, valor, error = '' }) {
  return `
    <fieldset class="grupo ${error ? 'campo--error' : ''}" ${error ? `aria-describedby="${nombre}-error"` : ''}>
      <legend>${esc(leyenda)}</legend>
      <div class="opciones">
        ${opciones
          .map(
            (o, i) => `
          <label class="opcion">
            <input type="radio" name="${nombre}" value="${esc(o.valor)}" ${o.valor === valor ? 'checked' : ''} ${i === 0 ? `id="${nombre}"` : ''}>
            <span><strong>${esc(o.titulo)}</strong>${o.detalle ? `<small>${esc(o.detalle)}</small>` : ''}</span>
          </label>`
          )
          .join('')}
      </div>
      ${error ? `<p class="error" id="${nombre}-error"><span aria-hidden="true">⚠</span> ${esc(error)}</p>` : ''}
    </fieldset>`;
}

export function Pasos(actual, nombres) {
  return `
    <nav aria-label="Progreso de la reserva">
      <ol class="pasos">
        ${nombres
          .map(
            (n, i) => `<li class="${i + 1 === actual ? 'activo' : i + 1 < actual ? 'hecho' : ''}" ${i + 1 === actual ? 'aria-current="step"' : ''}>
              <span class="num">${i + 1 < actual ? '✓' : i + 1}</span> ${esc(n)}</li>`
          )
          .join('')}
      </ol>
    </nav>`;
}

export function ResumenErrores(errores) {
  const items = Object.entries(errores);
  if (!items.length) return '';
  return `
    <div class="alerta alerta--error" role="alert" tabindex="-1" id="resumen-errores">
      <h2>Revisa ${items.length === 1 ? 'este dato' : `estos ${items.length} datos`}:</h2>
      <ul>${items.map(([c, m]) => `<li><a href="#${c}">${esc(m)}</a></li>`).join('')}</ul>
    </div>`;
}

export function Insignia(estado) {
  return `<span class="insignia insignia--${esc(estado.toLowerCase())}">${esc(estado)}</span>`;
}

export function formatoFecha(iso) {
  if (!iso) return '';
  return new Date(iso + 'T00:00:00').toLocaleDateString('es-EC', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}
