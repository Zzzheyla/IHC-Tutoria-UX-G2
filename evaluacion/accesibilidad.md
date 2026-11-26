# Revisión de accesibilidad WCAG 2.2 (nivel A/AA) — v1

**Evaluadora:** Sheyla Pacha · **Versión:** v1
**Herramientas:** axe-core 4 (reglas WCAG 2.0/2.1/2.2 A y AA), navegación solo con teclado, cálculo de contraste (fórmula WCAG), vistas de 320 px y 640 px (equivale a zoom 200 %), Lighthouse.

## Resultado automático (axe-core)
| Pantalla | Violaciones |
|---|---|
| Inicio | 0 |
| Reservar paso 1 con errores | 0 |
| Reservar paso 2 | 0 |
| Reservar paso 4 (resumen) | 0 |
| Confirmación | 0 |
| Mis reservas | 0 |

Lighthouse 13.5.0 – Accesibilidad v1: **100/100** (Inicio, carga inicial, Moto G Power emulado, 26/11/2026) · v2: **___**
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
| **Borde de campos y opciones** | #c9ccd3 / #ffffff | **1.61:1** | **3:1 (1.4.11)** | ❌ |

## Revisión por criterio
| Criterio WCAG | Qué se revisó | v1 resultado | Evidencia | v2 |
|---|---|---|---|---|
| 1.1.1 Contenido no textual | Íconos ⚠ y ✓ decorativos con `aria-hidden` | ✅ Cumple | Código `componentes.js` | |
| 1.3.1 Información y relaciones | `label`, `fieldset/legend`, encabezados h1–h3, `dl` en resumen | ✅ Cumple | axe 0 violaciones | |
| 1.3.5 Propósito de los campos | `autocomplete="name"` y `"email"` | ✅ Cumple | | |
| 1.4.3 Contraste mínimo (texto) | Ver tabla de contraste | ✅ Cumple | | |
| 1.4.10 Reflow | 320 px sin scroll horizontal (ancho de página = 320) en Inicio, Reservar y Mis reservas | ✅ Cumple | | |
| **1.4.11 Contraste no textual** | Borde de campos de texto, fecha, lista y opciones | ❌ **No cumple** (1.61:1) | Tabla de contraste | |
| 2.1.1 Teclado | Flujo completo T1–T3 con Tab, Espacio, Enter y Esc | ✅ Cumple | | |
| 2.1.2 Sin trampas de teclado | El diálogo de cancelación se cierra con Esc | ✅ Cumple | | |
| 2.4.1 Evitar bloques | Enlace "Saltar al contenido" | ⚠ Parcial: al cambiar de pantalla el foco va al h1 del contenido, por lo que el enlace queda detrás en el orden de tabulación | | |
| 2.4.2 Título de página | Cambia por pantalla ("Nueva reserva · Tutoría UX") | ✅ Cumple | | |
| 2.4.3 Orden del foco | Foco al h1 al cambiar de pantalla; al resumen de errores si hay errores; vuelve al botón "Cancelar" al cerrar el diálogo | ✅ Cumple | | |
| 2.4.7 Foco visible | Contorno sólido de 3 px | ✅ Cumple | | |
| 2.5.8 Tamaño del objetivo | Botones y opciones de 44 px de alto; enlaces "Editar" ≥ 24 px | ✅ Cumple | | |
| 3.3.1 Identificación de errores | Mensaje de texto junto al campo + resumen | ✅ Cumple | | |
| 3.3.2 Etiquetas o instrucciones | Ayudas de formato de correo, días válidos y longitud mínima | ✅ Cumple | | |
| 3.3.3 Sugerencia ante errores | Los mensajes dicen cómo corregir | ✅ Cumple | | |
| 3.3.7 Entrada redundante | Al volver atrás o modificar no se vuelve a escribir nada | ✅ Cumple | | |
| 4.1.2 Nombre, función, valor | `aria-invalid`, `aria-current="step"`, `<dialog>` nativo | ✅ Cumple | | |
| 4.1.3 Mensajes de estado | `role="alert"` en errores, `role="status"` en confirmación, `aria-live` en avisos | ✅ Cumple | | |

## Problemas de accesibilidad encontrados
| ID | Criterio | Problema | Severidad | Recomendación |
|---|---|---|---|---|
| A1 | 1.4.11 | El borde de los campos y opciones (1.61:1) no se distingue bien del fondo, sobre todo con brillo bajo o con baja visión | 3 | Oscurecer el borde a un gris con ≥ 3:1 (p. ej. #8a8f98) |
| A2 | 2.4.1 | El enlace "Saltar al contenido" casi no se usa porque el foco ya se mueve al contenido al cambiar de pantalla | 1 | Aceptable; documentar el comportamiento |
