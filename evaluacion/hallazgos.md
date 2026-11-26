# Hallazgos

Mínimo 4. Cada uno con evidencia real (métrica, cita, captura o heurística). Severidad 0–4.

| ID | Hallazgo | Evidencia (fuente) | Método | Heurística / WCAG | Severidad | Recomendación | Estado |
|---|---|---|---|---|---|---|---|
| HZ1 | Dificultad para encontrar el botón de continuar/guardar en T1 | P01 tardó 145 s en T1: "No encontraba el botón para continuar". P03: "El color azul claro del botón se pierde" (130 s, 2 errores) | Pruebas de usabilidad (P01, P03) | Por confirmar (causa no medida; el contraste del botón principal es 9.09:1 según accesibilidad.md) | 3 | Revisar la visibilidad y posición del botón principal; confirmar la causa en una segunda observación | Pendiente |
| HZ2 | Falta de confirmación clara tras completar T2 | P02 hizo 3 errores en T2 (clics repetidos esperando confirmación), 85 s, SEQ 3 | Observación directa (P02) | H1 Visibilidad del estado del sistema | 2 | Añadir una notificación visible tras guardar | Pendiente |
| HZ3 | Confusión al volver a la pantalla principal en T3 | P01 requirió ayuda (1 error, 92 s). P03: 2 errores, 105 s, SEQ 3 | Registro de errores (P01, P03) | H3 Control y libertad del usuario | 2 | Dar una salida explícita hacia "Mis reservas" | Pendiente |
| HZ4 | Posible confusión con íconos del panel | P02 dudó sobre el ícono de calendario. VERIFICAR: la cita no está en metricas.md y el SEQ de P02 en T3 es 6, no 3 | Cita de P02 | H6 Reconocer antes que recordar | 1 | Agregar texto junto a cada ícono, si se confirma | Pendiente |

## Problemas prioritarios para la v2
Pendiente: se elegirán entre todos con estos datos. Se completará cuando David aplique los cambios (commit y capturas antes/después).

| Hallazgo | Cambio aplicado | Commit | Antes | Después |
|---|---|---|---|---|
| | | | | |
