# Registro de métricas

>Las sesiones P01 y P02 y la reevaluación de la v2 se completaron con datos reales con el comportamiento real de la app (v1 = tag `v1`, v2 = commits `1ca364d` y `e313f4d`).
> Datos en bruto: [datos.csv](datos.csv) · cálculo: `node evaluacion/calcular.mjs evaluacion/datos.csv`

**Participantes**
| Código | Perfil | Dispositivo | Versión |
|---|---|---|---|
| P01 | Estudiante de 3.er semestre, SOFTWARE; usa el celular para trámites, poco uso de sistemas institucionales | Laptop, Chrome | v1 y v2 (T1) |
| P02 | Estudiante de 7.º semestre, SOFTWARE; usa el celular para todo | Celular Android (brillo bajo), Chrome | v1 y v2 (T1) |

**Roles:** facilitador Martín Palacios · cronómetro y conteo de errores David Pérez · notas y emociones Sheyla Pacha

## v1
| Part. | Tarea | Éxito (1/0.5/0) | Tiempo (s) | Errores | Ayudas | SEQ (1–7) | Observación / cita |
|---|---|---|---|---|---|---|---|
| P01 | T1 | 1 | 168 | 2 | 0 | 4 | Al buscar "el próximo lunes" en el calendario tocó el sábado 28; aparecieron horarios, eligió 09:00 y solo al pulsar *Continuar* salió el error de fin de semana (error 1). Luego escribió el correo `@gmail.com` como pedía la consigna y corrigió solo con el mensaje (error 2). "Si salen horarios, pensé que el sábado sí atendían." |
| P01 | T2 | 1 | 74 | 1 | 0 | 5 | Pulsó *Modificar* y buscó un selector de hora en el resumen; pulsó *Guardar cambios* sin haber cambiado nada (error 1), la reserva quedó "Modificada" con la misma hora. Volvió, encontró *Editar* junto a Hora. "Pensé que aquí mismo podía cambiar la hora." |
| P01 | T3 | 1 | 22 | 0 | 0 | 7 | Sin dificultad; leyó el diálogo antes de confirmar. |
| P02 | T1 | 0.5 | 152 | 2 | 1 | 3 | Escribió el correo `@gmail.com` (error 1). En el paso 3, con el brillo bajo, tocó dos veces fuera del campo *Tema* porque no distinguía su borde (error 2) y se quedó más de 60 s sin avanzar: el facilitador señaló la zona del formulario (ayuda 1). "No sé si ya escribí, no se ve bien dónde está el cuadro." |
| P02 | T2 | 1 | 82 | 1 | 0 | 4 | Pulsó *Atrás* desde el resumen buscando la hora (error 1); luego volvió y usó *Editar*. "¿Dónde se cambia la hora?" |
| P02 | T3 | 1 | 27 | 0 | 0 | 6 | Sin dificultad. |

## v2 (reevaluación de la tarea afectada por las correcciones)
Se repitió solo **T1**, que es la tarea donde se observaron los dos problemas corregidos (fecha no válida y bordes de campos). Mismo dispositivo y mismas condiciones; hay **efecto de aprendizaje** porque los participantes ya conocían la tarea.

| Part. | Tarea | Éxito | Tiempo (s) | Errores | Ayudas | SEQ | Observación |
|---|---|---|---|---|---|---|---|
| P01 | T1 | 1 | 96 | 1 | 0 | 6 | Volvió a tocar el sábado, pero el mensaje apareció al instante y no se mostraron horarios; corrigió en 3 s (error 1, sin pérdida de tiempo). "Ahí sí me avisa de una." |
| P02 | T1 | 1 | 88 | 0 | 0 | 6 | Completó el formulario sin dudar, con el mismo brillo bajo. "Ahora sí se ven los cuadros." |

## SUS (al final de la sesión v1)
| Part. | Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 | Puntaje SUS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| P01 | 4 | 2 | 4 | 2 | 4 | 2 | 4 | 2 | 4 | 2 | 75.0 |
| P02 | 4 | 2 | 3 | 2 | 4 | 3 | 4 | 2 | 4 | 2 | 70.0 |

Cálculo SUS: impares (respuesta − 1), pares (5 − respuesta); suma × 2.5 (`node evaluacion/calcular-sus.mjs`). Promedio: **72.5** (por encima de 68, el promedio de referencia).
