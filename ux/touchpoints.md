# Análisis de experiencia de usuario

## Perfil de usuario
| Atributo | Descripción |
|---|---|
| Usuario | Estudiante de la FISEI (18–25 años), 1.º a 10.º semestre |
| Contexto | Reserva entre clases desde el celular, o en casa desde la laptop; poco tiempo y conexión variable |
| Experiencia digital | Alta con apps móviles; media con sistemas institucionales |
| Motivación | Resolver dudas antes de una prueba o entrega |
| Frustraciones | No saber cuándo atiende el docente, ir a la oficina y no encontrarlo, formularios que borran lo escrito |

## Necesidades
1. Saber rápido qué docente atiende cada asignatura y en qué modalidad.
2. Ver solo horarios realmente libres.
3. Tener certeza de que la reserva quedó registrada (código, estado).
4. Poder cambiar o cancelar sin volver a empezar.
5. Usar el sistema desde el celular.

## Touchpoints
| # | Touchpoint | Canal | Acción del estudiante | Oportunidad de mejora |
|---|---|---|---|---|
| T1 | Consulta de docentes | Inicio | Busca docente y asignatura | Mostrar modalidad y lugar en la misma tarjeta |
| T2 | Selección de modalidad, fecha y horario | Paso 2 | Elige cuándo y cómo | Mostrar solo horarios libres; bloquear fines de semana |
| T3 | Registro de datos | Paso 3 | Escribe nombre, correo, tema | Errores junto al campo con ejemplo de corrección |
| T4 | Confirmación | Paso 4 + pantalla de éxito | Revisa y confirma | Resumen editable y código de reserva |
| T5 | Gestión de reservas | Mis reservas | Consulta, modifica o cancela | Estados visibles; confirmación antes de cancelar |

## Momentos críticos
1. **Elegir horario (T2)**: si el horario está ocupado o la fecha no es válida, el estudiante se frustra y abandona. → Se muestran solo horarios libres y mensajes que dicen cómo corregir.
2. **Corregir un error al confirmar (T3–T4)**: si el formulario borra lo escrito, el estudiante debe empezar de nuevo. → Borrador persistente y regreso al paso exacto del error.

## Oportunidades de mejora justificadas
| Oportunidad | Justificación (necesidad / momento crítico) | Heurística relacionada |
|---|---|---|
| Asistente por pasos con progreso | Reduce carga cognitiva en móvil | H1 Visibilidad del estado |
| Horarios filtrados | Evita error en momento crítico 1 | H5 Prevención de errores |
| Conservar datos y "Editar" en el resumen | Evita repetir trabajo en momento crítico 2 | H3 Control y libertad |
| Mensajes de error con ejemplo | El estudiante sabe qué cambiar | H9 Recuperarse de errores |
| Diálogo antes de cancelar | Acción irreversible | H5 Prevención de errores |
