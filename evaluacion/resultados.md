# Resultados de las sesiones

Fuente: [metricas.md](metricas.md) y [datos.csv](datos.csv), calculado con `node evaluacion/calcular.mjs evaluacion/datos.csv`.
Sesiones v1: P01 y P02 (26/11/2026, versión `v1`). Reevaluación v2: P01 y P02, tarea T1 (26/11/2026, versión con `1ca364d` y `e313f4d`).

## Resumen por tarea (v1)
| Tarea | n | Tasa de éxito (sin ayuda) | Tiempo promedio (s) | Errores totales | Ayudas totales | SEQ promedio |
|---|---|---|---|---|---|---|
| T1 Reservar | 2 | 50 % (1/2) | 160.0 | 4 | 1 | 3.5 |
| T2 Modificar | 2 | 100 % (2/2) | 78.0 | 2 | 0 | 4.5 |
| T3 Cancelar | 2 | 100 % (2/2) | 24.5 | 0 | 0 | 6.5 |

SUS: P01 75.0 · P02 70.0 · promedio **72.5**.

**Lectura:** T1 es la tarea más difícil (más tiempo, todos los errores de validación, la única ayuda y el SEQ más bajo). Sus errores vienen de dos problemas ya señalados en la revisión experta: la fecha no válida que igual muestra horarios (HZ1) y los bordes de campos poco visibles (HZ2). T2 se completó sin ayuda, pero los dos participantes dudaron dónde cambiar la hora (HZ3). T3 no presentó problemas.

## Comparación v1 → v2 (T1, tarea afectada por las correcciones)
| Tarea | Métrica | v1 | v2 | Cambio |
|---|---|---|---|---|
| T1 | Tasa de éxito sin ayuda | 50 % | 100 % | +50 pp |
| T1 | Tiempo promedio (s) | 160.0 | 92.0 | −68.0 (−42 %) |
| T1 | Errores promedio | 2.0 | 0.5 | −1.5 |
| T1 | Ayudas totales | 1 | 0 | −1 |
| T1 | SEQ promedio | 3.5 | 6.0 | +2.5 |

**Limitación:** en la v2 los mismos participantes repitieron T1, así que parte de la mejora en tiempo se debe al aprendizaje. Lo que no depende del aprendizaje es que **desaparecieron los errores causados por los dos problemas corregidos**: P01 vio el aviso de fin de semana al instante y P02 ya no se perdió en el formulario.

## Observaciones cualitativas
- P01, T1 (v1): "Si salen horarios, pensé que el sábado sí atendían." → HZ1
- P02, T1 (v1): "No sé si ya escribí, no se ve bien dónde está el cuadro." → HZ2
- P01, T2 (v1): "Pensé que aquí mismo podía cambiar la hora." → HZ3
- P02, T2 (v1): "¿Dónde se cambia la hora?" → HZ3
- P01, T1 (v2): "Ahí sí me avisa de una."
- P02, T1 (v2): "Ahora sí se ven los cuadros."
- Ningún participante confundió el "Cancelar" del asistente con el de la reserva (HZ4 no se observó en sesión).
