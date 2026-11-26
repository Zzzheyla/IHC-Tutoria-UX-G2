# Casos de prueba funcionales

Automatizados en `tests/reserva.test.js` (`npm test`). Resultado v1: 9/9 aprobados.

| ID | Requisito | Caso | Resultado esperado |
|---|---|---|---|
| CP01 | R4 | Reserva con todos los datos válidos | Pasa la validación |
| CP02 | R2–R4 | Formulario vacío | Un mensaje por cada uno de los 8 campos |
| CP03 | R4 | Correo `@gmail.com` | Error de correo institucional |
| CP04 | R3 | Fecha pasada / sábado | Errores específicos para cada caso |
| CP05 | R3, R4, R5 | Registrar reserva | Estado *Confirmada* y horario ya no disponible |
| CP06 | R4 | Dos reservas al mismo docente, fecha y hora | La segunda se rechaza |
| CP07 | R6 | Modificar hora | Estado *Modificada* |
| CP08 | R6 | Cancelar | Libera el horario; ya no se puede modificar |
| CP09 | R6 | Conflicto con reserva cancelada | No cuenta como conflicto |

## Pruebas manuales (navegador)
| ID | Caso | v1 | v2 |
|---|---|---|---|
| CM01 | Recorrer todo el flujo solo con teclado (Tab, Shift+Tab, Espacio, Enter) | | |
| CM02 | Volver atrás desde el paso 3 y comprobar que los datos siguen | | |
| CM03 | Vista móvil 360 px sin scroll horizontal | | |
| CM04 | Recargar en el paso 3 y comprobar que el borrador se conserva | | |
