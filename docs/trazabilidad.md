# Matriz de trazabilidad

| Req. | Pantalla / wireframe | Componentes | Código | Prueba funcional | Tarea de usabilidad |
|---|---|---|---|---|---|
| R1 | Inicio (W1) | Tarjeta de docente | `VistaInicio`, `listarDocentes` | — (visual) | T1 |
| R2 | Reservar paso 1 y 2 (W2) | `GrupoOpciones`, `Campo` (select), `Pasos` | `VistaReservar` paso 1–2 | CP02 | T1 |
| R3 | Reservar paso 2 (W2) | `Campo` (date), `GrupoOpciones` (hora) | `horariosDisponibles`, `validarReserva` | CP04, CP05 | T1 |
| R4 | Reservar paso 3–4, Confirmación (W2) | `Campo`, `ResumenErrores`, resumen `dl` | `registrar`, `validarReserva`, `hayConflicto` | CP01, CP03, CP05, CP06 | T1 |
| R5 | Mis reservas (W3) | Tarjeta de reserva, `Insignia` | `VistaReservas`, `listarReservas` | CP05 | T2, T3 |
| R6 | Mis reservas + Reservar paso 4 + diálogo (W3) | Botones, `dialog`, enlaces *Editar* | `modificar`, `cancelar` | CP07, CP08, CP09 | T2, T3 |
