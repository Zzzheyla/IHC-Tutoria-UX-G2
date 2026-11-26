# Recorrido cognitivo — v1

**Evaluadora:** Sheyla Pacha · **Usuario objetivo:** estudiante de la FISEI que usa el sistema por primera vez desde el celular.

Preguntas por acción:
**P1** ¿Intentará lograr el efecto correcto? · **P2** ¿Notará que la acción correcta está disponible? · **P3** ¿Asociará la acción con el efecto que busca? · **P4** ¿Verá que progresa tras la acción?
(S = sí, N = no)

## Tarea T1 — Reservar una tutoría presencial con el Ing. Carlos Núñez el próximo lunes

| # | Acción correcta | P1 | P2 | P3 | P4 | Comentario |
|---|---|---|---|---|---|---|
| 1 | Pulsar "Reservar una tutoría" | S | S | S | S | Botón principal, primero en la pantalla |
| 2 | Elegir al docente | S | S | S | S | Cada opción muestra nombre y asignaturas |
| 3 | Elegir la asignatura | S | S | S | S | La lista se habilita al elegir el docente |
| 4 | Pulsar "Continuar" | S | S | S | S | El indicador avanza al paso 2 |
| 5 | Elegir modalidad "Presencial" | S | S | S | S | Muestra la oficina debajo de la opción |
| 6 | Elegir la fecha del lunes | S | S | S | **N** | Si por error elige sábado o domingo igual aparecen horarios: el sistema no avisa hasta pulsar *Continuar* (→ H5) |
| 7 | Elegir un horario | S | S | S | S | Solo aparecen horarios libres |
| 8 | Escribir nombre, correo y tema | S | S | S | S | La ayuda indica el formato del correo |
| 9 | Revisar el resumen y pulsar "Confirmar reserva" | S | S | S | S | Resumen completo con opción de editar |
| 10 | Leer el código en la confirmación | S | S | S | S | Mensaje de éxito destacado |

## Tarea T2 — Cambiar la hora de la tutoría

| # | Acción correcta | P1 | P2 | P3 | P4 | Comentario |
|---|---|---|---|---|---|---|
| 1 | Ir a "Mis reservas" | S | S | S | S | En la navegación y en el Inicio |
| 2 | Pulsar "Modificar" | S | S | S | S | Botón en la tarjeta de la reserva |
| 3 | Pulsar "Editar" junto a *Hora* | S | **N** | S | S | "Modificar" abre directamente el resumen (paso 4); el estudiante puede no notar que debe pulsar "Editar" y buscar un selector de hora en la misma pantalla |
| 4 | Elegir el nuevo horario y "Continuar" hasta el resumen | S | S | S | S | Debe pasar otra vez por el paso 3 (datos ya llenos) |
| 5 | Pulsar "Guardar cambios" | S | S | S | S | La confirmación dice "Reserva modificada" |

## Tarea T3 — Cancelar la tutoría

| # | Acción correcta | P1 | P2 | P3 | P4 | Comentario |
|---|---|---|---|---|---|---|
| 1 | Ir a "Mis reservas" | S | S | S | S | |
| 2 | Pulsar "Cancelar" | S | S | S | S | Botón rojo en la tarjeta |
| 3 | Pulsar "Sí, cancelar" en el diálogo | S | S | S | S | El estado cambia a *Cancelada* y aparece un aviso |

## Problemas encontrados
| ID | Tarea / acción | Pregunta que falla | Problema | Relación |
|---|---|---|---|---|
| RC1 | T1, acción 6 | P4 | Para fechas no válidas se muestran horarios y el usuario cree que avanza bien | H5 |
| RC2 | T2, acción 3 | P2 | Al modificar no es evidente dónde se cambia la hora; hay que descubrir el enlace "Editar" | H3, H7 |
| RC3 | T2, acción 4 | — | Para cambiar solo la hora se recorre de nuevo el paso 3 | H7 |

Estos problemas se verifican en las sesiones P01 y P02 (tareas T1 y T2) y se registran en [hallazgos.md](hallazgos.md).
