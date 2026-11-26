# Evaluación heurística (Nielsen) — v1

**Evaluadora:** Sheyla Pacha · **Versión:** v1 (tag `v1`) · **Dispositivo:** navegador, vista móvil 360–390 px y escritorio 1280 px
**Escala de severidad:** 0 no es problema · 1 cosmético · 2 menor · 3 mayor · 4 catastrófico

| # | Heurística | Lo que cumple | Problema observado | Pantalla | Sev. | Recomendación |
|---|---|---|---|---|---|---|
| H1 | Visibilidad del estado del sistema | Indicador de 4 pasos con paso actual; insignias *Confirmada / Modificada / Cancelada*; aviso tras cancelar; título de pestaña cambia por pantalla | En los pasos 2–4 no se ve qué docente y asignatura se eligieron; solo aparece al final en el resumen | Reservar, pasos 2–3 | 2 | Mostrar una línea de contexto ("Ing. Carlos Núñez · IHC") bajo el título del asistente |
| H2 | Coincidencia sistema–mundo real | Lenguaje del estudiante ("Reserva tu tutoría", "Tema de la tutoría"); fechas en formato largo en español | El código de reserva (p. ej. `T-MWXNQY2C`) no es fácil de leer ni dictar | Confirmación, Mis reservas | 1 | Código corto y legible (p. ej. `TUT-0042`) |
| H3 | Control y libertad del usuario | Botón *Atrás*, enlaces *Editar* en el resumen, diálogo con "No, mantenerla"; el borrador se conserva | Al modificar una reserva no existe una opción explícita para descartar los cambios y volver a *Mis reservas* | Reservar (modo modificar) | 2 | Añadir botón "Descartar cambios" en modo modificación |
| H4 | Consistencia y estándares | Misma estructura de botones (secundario a la izquierda, principal a la derecha); mismos componentes de campo en todo el flujo | La palabra **"Cancelar"** se usa para salir del asistente (paso 1) y también para anular una reserva | Reservar paso 1, Mis reservas | 2 | Usar "Salir" en el asistente y reservar "Cancelar" solo para anular la tutoría |
| H5 | Prevención de errores | Solo se listan horarios libres; `min` en la fecha; confirmación antes de cancelar; control de choque de horario al confirmar | Si se escoge un **sábado, domingo o una fecha pasada** escrita a mano, igual aparecen horarios para elegir; el error solo sale al pulsar *Continuar* | Reservar paso 2 | 3 | No mostrar horarios para fechas no válidas y mostrar el mensaje en cuanto se elige la fecha |
| H6 | Reconocer antes que recordar | Resumen completo en el paso 4; tarjetas de docentes con asignaturas y modalidad | Ligado a H1: en el paso 2 el usuario debe recordar qué docente eligió para saber qué horarios le sirven | Reservar paso 2 | 2 | (misma que H1) |
| H7 | Flexibilidad y eficiencia de uso | Flujo lineal claro para usuarios nuevos | Las tarjetas de docentes del Inicio no son accionables: hay que entrar a Reservar y volver a elegir el docente | Inicio | 2 | Botón "Reservar con este docente" en cada tarjeta que abra el asistente con el docente ya elegido |
| H8 | Diseño estético y minimalista | Interfaz limpia, jerarquía clara, un objetivo por paso | El resumen repite 8 enlaces "Editar" (uno por dato) aunque solo llevan a 3 pasos | Reservar paso 4 | 1 | Un solo "Editar" por grupo (Docente / Horario / Tus datos) |
| H9 | Reconocer, diagnosticar y recuperarse de errores | Resumen de errores enlazado al campo + mensaje junto al campo con ejemplo ("nombre@uta.edu.ec"); los datos se conservan; si el horario se ocupa, vuelve al paso 2 con mensaje | — | Todas | 0 | Mantener |
| H10 | Ayuda y documentación | Textos de ayuda en campos (formato de correo, días válidos, mínimo de caracteres) | No hay ayuda sobre qué pasa después de reservar (cómo llega el enlace virtual, con cuánta anticipación se puede cancelar) | Confirmación | 1 | Breve sección "¿Qué sigue?" en la confirmación |

## Resumen
| Severidad | Cantidad | Heurísticas |
|---|---|---|
| 3 – mayor | 1 | H5 |
| 2 – menor | 5 | H1, H3, H4, H6, H7 |
| 1 – cosmético | 3 | H2, H8, H10 |
| 0 | 1 | H9 |

Los problemas de severidad ≥ 2 se pasan a [hallazgos.md](hallazgos.md) para contrastarlos con lo observado en P01 y P02.
