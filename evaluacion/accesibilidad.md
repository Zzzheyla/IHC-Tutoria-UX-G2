# Revisión de accesibilidad WCAG 2.2 (nivel A/AA) — v1

**Evaluadora:** Sheyla Pacha · **Versión:** v1
**Herramientas:** axe-core 4 (reglas WCAG 2.0/2.1/2.2 A y AA), navegación solo con teclado, cálculo de contraste (fórmula WCAG), vistas de 320 px y 640 px (equivale a zoom 200 %), Lighthouse.

## Resultado automático (axe-core)
| Pantalla | Violaciones v1 | Violaciones v2 |
|---|---|---|
| Inicio | 0 | 0 |
| Reservar paso 1 con errores | 0 | 0 |
| Reservar paso 2 | 0 | 0 |
| Reservar paso 2 con sábado elegido (nuevo estado v2) | — | 0 |
| Reservar paso 4 (resumen) | 0 | 0 |
| Confirmación | 0 | 0 |
| Mis reservas | 0 | 0 |

Lighthouse 13.5.0 – Accesibilidad v1: **100/100** (Inicio, carga inicial, Moto G Power emulado, 26/11/2026) · v2: **___** (captura en `evidencias/despues/lighthouse-v2.png`)
Capturas: [lighthouse-v1.png](../evidencias/antes/lighthouse-v1.png) · [lighthouse-v1-detalle.png](../evidencias/antes/lighthouse-v1-detalle.png)
20 auditorías aprobadas, 43 no aplicables y 10 ítems de revisión manual. Lighthouse analiza solo la pantalla cargada (Inicio) y **no evalúa 1.4.11 (contraste no textual)**; por eso el puntaje de 100 no contradice el problema A1 encontrado con la medición manual.

## Contraste medido
| Elemento | Colores | Relación | Requisito | Resultado |
|---|---|---|---|---|
| Texto principal | #1d1d1f / #f6f6f8 | 15.59:1 | 4.5:1 | ✅ |
| Texto secundario (ayudas, meta) | #555b66 / #ffffff | 6.83:1 | 4.5:1 | ✅ |
| Texto blanco en cabecera y botón principal | #ffffff / #8b1d2c | 9.09:1 | 4.5:1 | ✅ |
| Mensajes de error | #b00020 / #ffffff | 7.33:1 | 4.5:1 | ✅ |
| Insignia Confirmada | #1e6b34 / #dff3e4 | 5.64:1 | 4.5:1 | ✅ |
| Insignia Modificada | #7a4b00 / #fff1d6 | 6.64:1 | 4.5:1 | ✅ |
| Indicador de foco | #0b57d0 / #ffffff | 6.39:1 | 3:1 | ✅ |
| **Borde de campos y opciones (v1)** | #c9ccd3 / #ffffff | **1.61:1** | **3:1 (1.4.11)** | ❌ |
| **Borde de campos y opciones (v2)** | #8a8f98 / #ffffff | **3.25:1** | **3:1 (1.4.11)** | ✅ |

## Revisión por criterio
| Criterio WCAG | Qué se revisó | v1 resultado | Evidencia | v2 |
|---|---|---|---|---|
| 1.1.1 Contenido no textual | Íconos ⚠ y ✓ decorativos con `aria-hidden` | ✅ Cumple | Código `componentes.js` | ✅ Sin cambios |
| 1.3.1 Información y relaciones | `label`, `fieldset/legend`, encabezados h1–h3, `dl` en resumen | ✅ Cumple | axe 0 violaciones | ✅ Sin cambios |
| 1.3.5 Propósito de los campos | `autocomplete="name"` y `"email"` | ✅ Cumple | | ✅ Sin cambios |
| 1.4.3 Contraste mínimo (texto) | Ver tabla de contraste | ✅ Cumple | | ✅ Sin cambios |
| 1.4.10 Reflow | 320 px sin scroll horizontal (ancho de página = 320) en Inicio, Reservar y Mis reservas | ✅ Cumple | | ✅ 320 px sin scroll horizontal |
| **1.4.11 Contraste no textual** | Borde de campos de texto, fecha, lista y opciones | ❌ **No cumple** (1.61:1) | Tabla de contraste | ✅ **Corregido**: borde #8a8f98 = 3.25:1 (`1ca364d`) |
| 2.1.1 Teclado | Flujo completo T1–T3 con Tab, Espacio, Enter y Esc | ✅ Cumple | | ✅ Sin cambios |
| 2.1.2 Sin trampas de teclado | El diálogo de cancelación se cierra con Esc | ✅ Cumple | | ✅ Sin cambios |
| 2.4.1 Evitar bloques | Enlace "Saltar al contenido" | ⚠ Parcial: al cambiar de pantalla el foco va al h1 del contenido, por lo que el enlace queda detrás en el orden de tabulación | | ⚠ Igual que v1 (no se priorizó) |
| 2.4.2 Título de página | Cambia por pantalla ("Nueva reserva · Tutoría UX") | ✅ Cumple | | ✅ Sin cambios |
| 2.4.3 Orden del foco | Foco al h1 al cambiar de pantalla; al resumen de errores si hay errores; vuelve al botón "Cancelar" al cerrar el diálogo | ✅ Cumple | | ✅ Al elegir una fecha no válida el foco se mantiene en el campo fecha |
| 2.4.7 Foco visible | Contorno sólido de 3 px | ✅ Cumple | | ✅ Sin cambios |
| 2.5.8 Tamaño del objetivo | Botones y opciones de 44 px de alto; enlaces "Editar" ≥ 24 px | ✅ Cumple | | ✅ Sin cambios |
| 3.3.1 Identificación de errores | Mensaje de texto junto al campo + resumen | ✅ Cumple | | ✅ **Mejorado**: el error de fecha aparece al elegirla, no al pulsar Continuar (`e313f4d`) |
| 3.3.2 Etiquetas o instrucciones | Ayudas de formato de correo, días válidos y longitud mínima | ✅ Cumple | | ✅ Sin cambios |
| 3.3.3 Sugerencia ante errores | Los mensajes dicen cómo corregir | ✅ Cumple | | ✅ "Elige de lunes a viernes" + "Elige otra fecha para ver los horarios" |
| 3.3.7 Entrada redundante | Al volver atrás o modificar no se vuelve a escribir nada | ✅ Cumple | | ✅ Sin cambios |
| 4.1.2 Nombre, función, valor | `aria-invalid`, `aria-current="step"`, `<dialog>` nativo | ✅ Cumple | | ✅ `aria-invalid="true"` y `aria-describedby` en la fecha no válida |
| 4.1.3 Mensajes de estado | `role="alert"` en errores, `role="status"` en confirmación, `aria-live` en avisos | ✅ Cumple | | ✅ Sin cambios |

## Problemas de accesibilidad encontrados
| ID | Criterio | Problema | Severidad | Recomendación |
|---|---|---|---|---|
| A1 | 1.4.11 | El borde de los campos y opciones (1.61:1) no se distingue bien del fondo, sobre todo con brillo bajo o con baja visión | 3 | Oscurecer el borde a un gris con ≥ 3:1 (p. ej. #8a8f98) |
| A2 | 2.4.1 | El enlace "Saltar al contenido" casi no se usa porque el foco ya se mueve al contenido al cambiar de pantalla | 1 | Aceptable; documentar el comportamiento |

## Reevaluación v2
| ID | Estado en v2 | Evidencia |
|---|---|---|
| A1 (1.4.11) | ✅ Corregido: borde 3.25:1 en campos y opciones | Commit `1ca364d` · [evidencias/despues/v2-fecha-fin-de-semana.png](../evidencias/despues/v2-fecha-fin-de-semana.png) |
| A2 (2.4.1) | Sin cambios (severidad 1, en backlog) | — |
| Nuevo estado: fecha no válida | Sin nuevas barreras: el mensaje se asocia al campo con `aria-describedby`, `aria-invalid="true"`, foco en el campo, 0 violaciones axe | Commit `e313f4d` · misma captura |
