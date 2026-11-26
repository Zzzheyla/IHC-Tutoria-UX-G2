# Hallazgos

Mínimo 4. Cada uno con evidencia (métrica, cita, captura o revisión experta). Severidad 0–4.

> Evidencia de revisión experta: [heuristicas.md](heuristicas.md), [recorrido-cognitivo.md](recorrido-cognitivo.md), [accesibilidad.md](accesibilidad.md).
> Evidencia de sesión: [metricas.md](metricas.md) y [resultados.md](resultados.md) 
> Nota de nombres: en los commits de la v2 (`e313f4d`, `1ca364d`) HZ1 aparece como "HZ5" y HZ2 como "HZ6", que eran sus números provisionales. Son los mismos problemas.

| ID | Hallazgo | Evidencia de revisión | Evidencia de sesión | Heurística / WCAG | Severidad | Recomendación | Estado |
|---|---|---|---|---|---|---|---|
| HZ1 | Al elegir un sábado, domingo o una fecha pasada igual aparecen horarios; el error solo sale al pulsar *Continuar* | H5 (sev. 3) · RC1 (T1, P4 falla) | P01 T1 v1: tocó el sábado, eligió hora y recibió el error después; 168 s, 2 errores. Cita: "Si salen horarios, pensé que el sábado sí atendían." | H5 Prevención de errores · WCAG 3.3.1 | **3** | No mostrar horarios para fechas no válidas y avisar al elegir la fecha | ✅ Corregido en v2 |
| HZ2 | El borde de campos y opciones tiene contraste 1.61:1 y casi no se distingue del fondo | A1, tabla de contraste (#c9ccd3 / #ffffff) | P02 T1 v1 (celular, brillo bajo): tocó fuera del campo *Tema* dos veces y necesitó ayuda; 152 s, SEQ 3. Cita: "No se ve bien dónde está el cuadro." | WCAG 1.4.11 Contraste no textual | **3** | Borde ≥ 3:1 (#8a8f98) | ✅ Corregido en v2 |
| HZ3 | Al modificar se abre el resumen y no es evidente que la hora se cambia con "Editar" | RC2 (T2, P2 falla) · H3 · H7 | P01 T2: pulsó *Guardar cambios* sin cambiar nada. P02 T2: pulsó *Atrás* buscando la hora. Ambos con SEQ ≤ 5. Citas: "Pensé que aquí mismo podía cambiar la hora", "¿Dónde se cambia la hora?" | H3 Control y libertad · H7 Flexibilidad | 2 | Al modificar, abrir directamente el paso de horario o rotular "Cambiar hora"; botón "Descartar cambios" | Backlog (prioridad 3) |
| HZ4 | "Cancelar" significa salir del asistente y también anular una reserva | H4 (sev. 2) | No observado en sesión (T3 sin errores en P01 y P02) | H4 Consistencia y estándares | **1** (bajó de 2: no afectó a los participantes) | "Salir" en el asistente; "Cancelar" solo para la reserva | Backlog (prioridad 4) |

## Problemas prioritarios elegidos para la v2
Se eligieron **HZ1** y **HZ2** porque tienen severidad 3, explican todos los errores, la única ayuda y el SEQ más bajo de la tarea más difícil (T1), y además tienen evidencia objetiva (regla de validación y medición de contraste). HZ3 se confirmó en sesión, pero T2 se completó sin ayuda, por lo que queda con severidad 2 en el backlog.

## Problemas prioritarios corregidos en v2
| Hallazgo | Cambio aplicado | Commit | Antes | Después |
|---|---|---|---|---|
| HZ1 | `validarFecha()` en el dominio; el paso 2 muestra el error al elegir la fecha y no lista horarios si es sábado, domingo o pasada | `e313f4d` | [v1-fecha-fin-de-semana.png](../evidencias/antes/v1-fecha-fin-de-semana.png) | [v2-fecha-fin-de-semana.png](../evidencias/despues/v2-fecha-fin-de-semana.png) |
| HZ2 | Variable `--borde-campo: #8a8f98` (3.25:1) en campos de texto, fecha, lista y opciones | `1ca364d` | [03-error-correo.png](../evidencias/antes/03-error-correo.png) | [03-error-correo.png](../evidencias/despues/03-error-correo.png) |

## Validación de la v2
- T1 (P01 y P02): éxito sin ayuda de 50 % a 100 %, tiempo de 160 s a 92 s, errores de 2.0 a 0.5, SEQ de 3.5 a 6.0 ([resultados.md](resultados.md)).
- WCAG 1.4.11 cumple (3.25:1); axe-core 0 violaciones; Lighthouse 100/100 ([accesibilidad.md](accesibilidad.md)).
- Pruebas funcionales: 10/10 (se agregó la prueba de `validarFecha`).
