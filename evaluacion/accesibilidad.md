# Revisión de accesibilidad WCAG 2.2 (nivel A/AA)

Herramientas: navegación solo con teclado, Lighthouse / WAVE / axe DevTools, zoom 200 %, vista 360 px.

| Criterio WCAG | Qué se revisa | v1 resultado | Evidencia | v2 |
|---|---|---|---|---|
| 1.1.1 Contenido no textual | Íconos decorativos con `aria-hidden` | | | |
| 1.3.1 Información y relaciones | `label`, `fieldset/legend`, encabezados, `dl` | | | |
| 1.4.3 Contraste mínimo | Texto ≥ 4.5:1 | | | |
| 1.4.4 / 1.4.10 Cambio de tamaño y reflow | Zoom 200 %, 320 px sin scroll horizontal | | | |
| 2.1.1 Teclado | Flujo completo con Tab / Enter / Espacio | | | |
| 2.4.1 Evitar bloques | Enlace "Saltar al contenido" | | | |
| 2.4.2 Título de página | `document.title` cambia por pantalla | | | |
| 2.4.3 Orden del foco | Lógico; foco al h1 o al resumen de errores | | | |
| 2.4.7 Foco visible | Contorno azul de 3 px | | | |
| 2.5.8 Tamaño del objetivo | Botones ≥ 24 px (se usan 44 px) | | | |
| 3.3.1 Identificación de errores | Mensaje de texto junto al campo | | | |
| 3.3.2 Etiquetas o instrucciones | Ayudas (formato de correo, días válidos) | | | |
| 3.3.3 Sugerencia ante errores | Mensajes dicen cómo corregir | | | |
| 4.1.2 Nombre, función, valor | `aria-invalid`, `aria-current`, `dialog` | | | |
| 4.1.3 Mensajes de estado | `role="alert"`, `role="status"`, `aria-live` | | | |

Puntaje Lighthouse Accesibilidad v1: ___ · v2: ___ (capturas en `evidencias/`)
