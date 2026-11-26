# Hallazgos

Mínimo 4. Cada uno con evidencia real (métrica, cita, captura o heurística). Severidad 0–4.
Evidencia de sesión = P01, P02 y P03 (ver [metricas.md](metricas.md)). Evidencia de revisión = heurísticas, recorrido cognitivo y WCAG de Sheyla.

| ID | Hallazgo | Evidencia (fuente) | Método | Heurística / WCAG | Severidad | Recomendación | Estado |
|---|---|---|---|---|---|---|---|
| HZ1 | Dificultad para encontrar el botón de continuar en T1 | P01: 145 s, 2 errores, "No encontraba el botón para continuar". P03: 130 s, 2 errores. | Sesiones (P01, P03) | Por confirmar (el botón principal tiene 9.09:1 de contraste según accesibilidad.md) | 3 | Revisar visibilidad y posición del botón; confirmar la causa | Pendiente |
| HZ2 | Falta de confirmación clara tras completar T2 | P02: 3 errores, 85 s, SEQ 3, "da varios clics esperando confirmación" | Observación directa (P02) | H1 Visibilidad del estado | 2 | Aviso visible tras guardar | Pendiente |
| HZ3 | Confusión al volver a la pantalla principal en T3 | P01: ayuda, 1 error, 92 s. P03: 2 errores, 105 s, SEQ 3 | Registro de errores (P01, P03) | H3 Control y libertad | 2 | Salida explícita hacia "Mis reservas" | Pendiente |
| HZ5 | Con sábados, domingos o fechas pasadas igual aparecen horarios | H5 / RC1 (Sheyla). Sin evidencia de sesión aún | Heurística + recorrido cognitivo | H5 Prevención de errores | 3 | No mostrar horarios para fechas no válidas y avisar al elegir la fecha | Pendiente |
| HZ6 | Bordes de campos con contraste 1.61:1 | A1 (WCAG 1.4.11, medición manual). Sin evidencia de sesión aún | WCAG | 1.4.11 | 3 | Borde ≥ 3:1 (p. ej. #8a8f98) | Pendiente |

## Propuesta de prioritarios para la v2
Propuesta a confirmar entre los tres: **HZ5** y **HZ6** (severidad 3, medidos con criterio objetivo), o HZ1 si se confirma su causa. Cuando David aplique los cambios, completar:

| Hallazgo | Cambio aplicado | Commit | Antes | Después |
|---|---|---|---|---|
| | | | | |