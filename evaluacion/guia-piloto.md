# Guía para el piloto P00

El piloto **no genera datos para los resultados**: sirve para probar el plan. Se hace con una persona externa, igual que las sesiones, y se usa [guion-facilitador.md](guion-facilitador.md) tal cual.

## Qué observar
| Pregunta | Si la respuesta es "no" → ajuste posible |
|---|---|
| ¿Entendió cada escenario a la primera? | Reescribir el escenario ambiguo |
| ¿Los tiempos máximos (3 / 2 / 1 min) son realistas? | Cambiar el tiempo máximo |
| ¿Confundió la instrucción de usar un gmail con "usa tu correo institucional"? | Reordenar o reformular la instrucción de T1 |
| ¿Tiene correo institucional @uta.edu.ec para escribirlo? | Dar un correo de ejemplo en la hoja del participante |
| ¿La fecha "próximo lunes" tuvo horarios disponibles? | Cambiar el día o el docente |
| ¿T2 y T3 funcionaron con la reserva creada en T1? | Confirmar el orden T1 → T2 → T3 |
| ¿El observador pudo cronometrar y anotar a la vez? | Repartir roles de otra forma |
| ¿La grabación de pantalla funcionó y se guardó? | Probar el programa antes de P01 |
| ¿Se acordó de borrar `localStorage`? ¿Quedaron reservas viejas? | Añadir el paso a la lista de preparación |
| ¿El SEQ y el SUS se entendieron? | Aclarar la escala (1 = muy difícil, 7 = muy fácil) |

## Cómo llenar `piloto.md`
1. Tabla superior: una fila por tarea con lo que **realmente** pasó (¿se entendió?, tiempo, problema del protocolo).
2. Tabla de ajustes: **solo** lo que falló y qué cambiaste. Si el piloto salió perfecto, escríbelo; no inventes ajustes.
3. Commits en este orden (el issue #8 lo pide):
```bash
git add evaluacion/piloto.md
git commit -m "Registro del piloto P00 (#8)"
git add evaluacion/plan.md
git commit -m "Ajuste del plan según el piloto (#8)"
```
Si no cambias nada en el plan, haz el commit igualmente con una línea en `plan.md` que diga "Revisado tras el piloto P00: sin cambios" y la fecha.
