# Hallazgos

Mínimo 4. Cada uno con evidencia real (métrica, cita, captura o heurística). Severidad 0–4.

> **Estado actual:** los 4 hallazgos salen de la revisión de la v1 hecha por Sheyla ([heuristicas.md](heuristicas.md), [recorrido-cognitivo.md](recorrido-cognitivo.md), [accesibilidad.md](accesibilidad.md)). Son **candidatos**: después de las sesiones P01/P02 hay que completar la columna *Evidencia de sesión* con el dato real (tiempo, error, cita o foto) o bajar/subir la severidad si lo observado es distinto. Si en las sesiones aparece un problema nuevo, se agrega como HZ5, HZ6…

| ID | Hallazgo | Evidencia (fuente) | Evidencia de sesión (completar) | Método | Heurística / WCAG | Severidad | Recomendación | Estado |
|---|---|---|---|---|---|---|---|---|
| HZ1 | Al elegir un sábado, domingo o fecha pasada escrita a mano igual aparecen horarios; el error solo sale al pulsar *Continuar* | `heuristicas.md` H5 · `recorrido-cognitivo.md` RC1 · regla de validación en `src/domain/reserva.js` | _P01/P02, T1: ¿eligió fecha inválida? tiempo perdido, cita_ | Heurística + recorrido cognitivo; confirmar en sesión | H5 Prevención de errores | 3 | No mostrar horarios para fechas no válidas y avisar en cuanto se elige la fecha | Candidato |
| HZ2 | El borde de los campos y opciones tiene contraste 1.61:1 y casi no se distingue del fondo | `accesibilidad.md`, tabla de contraste (#c9ccd3 sobre #ffffff) | _¿Algún participante dudó dónde escribir? foto de pantalla_ | Cálculo de contraste WCAG + axe-core | WCAG 1.4.11 Contraste no textual | 3 | Oscurecer el borde a ≥ 3:1 (p. ej. `#8a8f98`) | Candidato |
| HZ3 | Al modificar, la pantalla abre el resumen y no es evidente que la hora se cambia con el enlace "Editar"; luego se recorre otra vez el paso 3 | `recorrido-cognitivo.md` RC2 y RC3 · `heuristicas.md` H3 y H7 | _P01/P02, T2: tiempo, errores, ayudas, cita_ | Recorrido cognitivo; confirmar en sesión | H3 Control y libertad · H7 Flexibilidad y eficiencia | 2 | Al modificar, abrir directamente el paso de horario, o rotular "Cambiar hora"; añadir "Descartar cambios" | Candidato |
| HZ4 | La palabra "Cancelar" se usa para salir del asistente y para anular una reserva | `heuristicas.md` H4 | _P01/P02, T3: ¿pulsó el "Cancelar" equivocado?_ | Heurística; confirmar en sesión | H4 Consistencia y estándares | 2 | "Salir" para el asistente y "Cancelar" solo para anular la tutoría | Candidato |

## Propuesta de prioridad para la v2
Propuesta (a confirmar con los datos de P01/P02 y con David, #8): **HZ1** y **HZ2**, por tener severidad 3 y ser correcciones acotadas. Si en las sesiones T2 resulta ser la tarea con más errores o tiempo, cambiar HZ2 por **HZ3**.

## Problemas prioritarios corregidos en v2
_(Lo llena David al hacer las correcciones; yo solo reviso que coincidan con los 2 elegidos.)_

| Hallazgo | Cambio aplicado | Commit | Antes | Después |
|---|---|---|---|---|
| HZ_ | | `abc1234` | `evidencias/antes/…png` | `evidencias/despues/…png` |
| HZ_ | | | | |
