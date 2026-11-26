# Plan de evaluación de usabilidad

**Objetivo:** comprobar si un estudiante puede reservar, modificar y cancelar una tutoría sin ayuda, en poco tiempo y con pocos errores.
**Producto evaluado:** Tutoría UX v1 (tag `v1`) y luego v2.
**Participantes:** P00 (piloto), P01 y P02: estudiantes de la UTA **que no sean desarrolladores del proyecto**.
**Dispositivo:** laptop (P01) y celular Android (P02) · **Lugar:** laboratorio FISEI · **Fecha:** 26/11/2026
**Roles:** facilitador: Martín Palacios · observador/cronometrista: David Pérez · notas: Sheyla Pacha
> Las sesiones P01, P02 y la reevaluación v2 se registraron con **datos** (ver [metricas.md](metricas.md)).
**Protocolo:** pensar en voz alta. Solo se da ayuda si el participante lo pide o está bloqueado más de 60 s (se registra como "ayuda").

## Preparación antes de cada participante
1. Abrir la app **v1** (tag `v1`) en una ventana nueva y **borrar `localStorage`** (DevTools → Application → Local Storage → Clear), para que no aparezcan reservas del participante anterior.
2. Verificar que la pantalla de Inicio muestra "0 reservas activas".
3. Iniciar la grabación de pantalla (solo si firmó el consentimiento).
4. Tener a mano el cronómetro y la hoja de [metricas.md](metricas.md).

> T2 y T3 usan la reserva creada en T1, por eso las tareas se hacen siempre en el orden T1 → T2 → T3.

## Tareas
| Tarea | Escenario que se lee al participante | Criterio de éxito observable | Tiempo máx. |
|---|---|---|---|
| T1 | "Tienes prueba de IHC. Reserva una tutoría presencial con el Ing. Carlos Núñez para el próximo lunes. Usa tu correo institucional." | Aparece la pantalla de confirmación con código, sin ayuda | 3 min |
| T2 | "Te cruzaste con otra clase. Cambia la hora de esa tutoría a otra disponible el mismo día." | La reserva aparece en *Mis reservas* con estado **Modificada** y la nueva hora | 2 min |
| T3 | "Ya resolviste tus dudas. Cancela la tutoría." | La reserva queda con estado **Cancelada** tras confirmar el diálogo | 1 min |

Para T1 se pide además, **al inicio**, escribir un correo personal (`@gmail.com`), para observar la recuperación del error. _(ajustar si el piloto indica otra cosa)_

## Métricas
| Métrica | Cómo se mide |
|---|---|
| Éxito | 1 = completa sin ayuda · 0.5 = completa con ayuda · 0 = no completa |
| Tiempo | Cronómetro desde que termina de leer el escenario hasta el criterio de éxito |
| Errores | Acción incorrecta (clic equivocado, error de validación, retroceso no planeado) |
| Ayudas | Número de veces que el facilitador interviene |
| Satisfacción | SEQ (1–7) después de cada tarea; SUS al final (opcional) |

## Instrumentos
- [consentimiento.md](consentimiento.md) · [piloto.md](piloto.md) · hoja de registro: [metricas.md](metricas.md)
- Grabación de pantalla (con permiso) en `evaluacion/sesiones/`.
