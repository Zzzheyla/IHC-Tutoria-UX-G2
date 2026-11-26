# Requisitos funcionales

| ID | Requisito | Criterio de aceptación | Prioridad |
|---|---|---|---|
| R1 | El sistema permite consultar docentes con sus asignaturas, modalidades y lugar de atención. | En Inicio se listan todos los docentes con asignaturas, modalidad y oficina. | Alta |
| R2 | El estudiante selecciona docente, asignatura y modalidad. | Solo se muestran asignaturas y modalidades del docente elegido; no se avanza sin elegirlas. | Alta |
| R3 | El estudiante elige fecha y un horario disponible. | Se rechazan fechas pasadas y fines de semana; solo aparecen horarios libres. | Alta |
| R4 | El sistema registra la reserva tras validar los datos y muestra una confirmación. | Correo `@uta.edu.ec`, tema ≥ 10 caracteres, sin choque de horario; confirmación con código. | Alta |
| R5 | El estudiante consulta sus reservas y su estado. | "Mis reservas" muestra asignatura, docente, fecha, hora, código y estado. | Media |
| R6 | El estudiante modifica o cancela una reserva. | Modificar conserva los datos y cambia el estado a *Modificada*; cancelar pide confirmación y cambia a *Cancelada*. | Alta |

## Requisitos no funcionales
| ID | Requisito |
|---|---|
| RNF1 | Mobile first: usable desde 360 px de ancho; diseño adaptable a escritorio. |
| RNF2 | Accesibilidad WCAG 2.2 nivel AA: teclado, foco visible, etiquetas, contraste ≥ 4.5:1. |
| RNF3 | Los datos ingresados se conservan al volver atrás o al corregir errores. |
| RNF4 | Mensajes de error específicos, junto al campo y con indicación de cómo corregir. |
