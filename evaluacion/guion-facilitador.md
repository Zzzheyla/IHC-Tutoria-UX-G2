# Guion del facilitador

Sirve para el piloto P00 y para las sesiones P01 y P02. Se lee tal cual, para que todos los participantes reciban lo mismo.

## Antes de empezar (una vez por participante)
- [ ] `git checkout v1` y `npm start` → abrir http://localhost:5500 (la versión que se evalúa es la **v1**).
- [ ] Ventana nueva del navegador. DevTools → Application → Local Storage → **Clear**. Recargar: Inicio debe decir 0 reservas activas.
- [ ] Consentimiento firmado y respuesta sobre la grabación de pantalla anotada.
- [ ] Hoja de registro ([hoja-registro.md](hoja-registro.md)) lista, cronómetro listo.
- [ ] Anotar la fecha real del "próximo lunes" para decírsela al participante.
- [ ] Roles: facilitador (habla), observador (cronometra y anota).

## 1. Introducción (leer en voz alta, ~1 min)
> "Gracias por ayudarnos. Estamos probando una aplicación web para reservar tutorías. **Evaluamos la aplicación, no a ti**: si algo te confunde, es un problema de la aplicación y eso nos ayuda. Te daré tres tareas, una por una. Mientras las haces, **piensa en voz alta**: di lo que estás mirando, lo que esperas que pase y lo que te confunde. No te voy a ayudar durante la tarea salvo que lo pidas o te quedes atascado; si no puedo responder, es a propósito. Puedes parar cuando quieras. ¿Alguna pregunta?"

## 2. Tareas
Cronometrar desde que termina de leerse el escenario hasta que se cumple el criterio de éxito. Entregar el escenario también escrito.

### T1 · máx. 3 min
Primero pedir: *"Antes de empezar, cuando te pida el correo, escribe uno personal, por ejemplo tu Gmail."* (Para observar cómo se recupera del error de validación.)

Leer: *"Tienes prueba de IHC. Reserva una tutoría presencial con el Ing. Carlos Núñez para el próximo lunes, [fecha]. Usa tu correo institucional."*

Éxito: aparece la pantalla de confirmación con el código, sin ayuda.

### T2 · máx. 2 min
Leer: *"Te cruzaste con otra clase. Cambia la hora de esa tutoría a otra disponible el mismo día."*

Éxito: en *Mis reservas* la reserva está **Modificada** con la nueva hora.

### T3 · máx. 1 min
Leer: *"Ya resolviste tus dudas. Cancela la tutoría."*

Éxito: la reserva queda **Cancelada** tras confirmar el diálogo.

## 3. Cuándo ayudar
| Situación | Qué hacer | Registro |
|---|---|---|
| El participante pregunta "¿qué hago?" | Responder solo: *"¿Qué esperarías que pasara?"* o *"¿Qué ves en la pantalla?"* | No cuenta como ayuda |
| Pide ayuda explícita, o lleva **más de 60 s** sin avanzar | Dar la pista mínima necesaria (señalar la zona, no la acción) | **Ayuda +1**, éxito 0.5 si termina |
| Supera el tiempo máximo | Detener y decir: *"Está bien, lo dejamos aquí"* | Éxito 0, anotar dónde quedó |

No explicar la interfaz, no reírse ni suspirar, no corregir con la mirada.

## 4. Después de cada tarea
Preguntar (escala 1 a 7, 1 = muy difícil, 7 = muy fácil):
> "En general, ¿qué tan fácil o difícil fue esta tarea?"  → **SEQ**

Anotar además una frase textual del participante, si la dijo.

## 5. Al final de la sesión (~3 min)
1. SUS (opcional): las 10 preguntas del apartado de [metricas.md](metricas.md), cada una de 1 a 5.
2. Preguntas abiertas: *"¿Qué fue lo más confuso?"*, *"¿Qué cambiarías?"*
3. Agradecer. Guardar la grabación en `evaluacion/sesiones/` como `P01-pantalla.mp4` (o el nombre del participante).

## Preguntas SUS (versión en español)
1. Creo que me gustaría usar este sistema con frecuencia.
2. Encontré el sistema innecesariamente complejo.
3. Pensé que el sistema era fácil de usar.
4. Creo que necesitaría ayuda de un técnico para poder usar este sistema.
5. Encontré que las diversas funciones del sistema estaban bien integradas.
6. Pensé que había demasiada inconsistencia en este sistema.
7. Imagino que la mayoría de la gente aprendería a usar este sistema muy rápidamente.
8. Encontré el sistema muy incómodo de usar.
9. Me sentí muy seguro/a usando el sistema.
10. Necesité aprender muchas cosas antes de poder usar el sistema.

## Mensaje para conseguir participantes
> "Hola, estoy haciendo una prueba de usabilidad de una app de reserva de tutorías para IHC. Dura unos 15 minutos, es en [lugar/hora], no necesitas saber de programación y no se guarda tu nombre. ¿Me ayudas?"

Perfil: estudiante de la UTA que **no sea del equipo** ni haya visto la aplicación.
