# Tutoría UX — Gestión de tutorías universitarias

Prueba Práctica Integradora · Interacción Humano-Computador · Ingeniería de Software, 5.º semestre
Universidad Técnica de Ambato — FISEI

| Integrante | GitHub | Rol principal |
|---|---|---|
| Sheyla Pacha | [@Zzzheyla](https://github.com/Zzzheyla) | Análisis UX, requisitos y arquitectura de información, métodos de evaluación |
| David Pérez | [@DavidPe1307](https://github.com/DavidPe1307) | Implementación, arquitectura, correcciones v2 |
| Martín Palacios | [@killer13233](https://github.com/killer13233) | Plan de evaluación, pilotaje, sesiones con usuarios, métricas |

Detalle de aportes: [CONTRIBUCIONES.md](CONTRIBUCIONES.md)

## Descripción
Aplicación web para que estudiantes consulten docentes y asignaturas, elijan modalidad, fecha y horario, reserven tutorías y luego las consulten, modifiquen o cancelen. Muestra estados (Confirmada, Modificada, Cancelada), confirmaciones y mensajes de error claros, conserva los datos al corregir y funciona en móvil y escritorio.

## Instalación y ejecución
Requisitos: Node.js 18 o superior (solo para el servidor local y las pruebas). No hay dependencias que instalar.

```bash
git clone https://github.com/<usuario>/<repo>.git
cd <repo>
npm start        # abre http://localhost:5500
npm test         # ejecuta las pruebas funcionales (tests/)
```
Alternativa sin Node: `python -m http.server 5500 -d src` o la extensión Live Server de VS Code sobre `src/index.html`.
> Abrir `index.html` con doble clic no funciona porque usa módulos ES; se necesita un servidor local.

## Funcionalidades
| Req. | Funcionalidad |
|---|---|
| R1 | Consultar docentes, asignaturas, modalidades y lugar |
| R2 | Seleccionar docente, asignatura y modalidad |
| R3 | Elegir fecha (lunes–viernes, no pasada) y ver solo horarios libres |
| R4 | Registrar la reserva con validación y confirmación con código |
| R5 | Consultar reservas con su estado |
| R6 | Modificar o cancelar una reserva (con diálogo de confirmación) |

Interacción: asistente de 4 pasos con indicador de progreso, botón **Atrás** y enlaces **Editar** en el resumen que conservan todo lo elegido (borrador en `sessionStorage`).

## Arquitectura
Arquitectura por capas (detalle en [docs/arquitectura.md](docs/arquitectura.md)):

```
src/
├── presentation/   vistas, componentes reutilizables, estilos (mobile first)
├── application/    casos de uso (reservaService)
├── domain/         reglas de negocio: validaciones, estados, conflictos
├── infrastructure/ persistencia local (localStorage) y catálogo de docentes
└── main.js         composición de capas y enrutamiento por hash
```
Accesibilidad: HTML semántico, `label`/`fieldset`/`legend`, errores enlazados con `aria-describedby`, resumen de errores con `role="alert"`, foco visible, navegación por teclado, enlace "Saltar al contenido", objetivos táctiles de 44 px.

## Documentación y evidencias
| Tema | Enlace |
|---|---|
| Análisis UX (perfil, touchpoints, momentos críticos) | [ux/touchpoints.md](ux/touchpoints.md) |
| Curva emocional | [ux/curva-emocional.md](ux/curva-emocional.md) |
| Requisitos R1–R6 | [docs/requisitos.md](docs/requisitos.md) |
| Sitemap y user flow | [docs/sitemap.md](docs/sitemap.md) · [docs/flujo.md](docs/flujo.md) |
| Wireframes | [ux/wireframes.md](ux/wireframes.md) |
| Prototipo | [ux/prototipo.md](ux/prototipo.md) |
| Matriz de trazabilidad | [docs/trazabilidad.md](docs/trazabilidad.md) |
| Pruebas funcionales | [tests/](tests/) · [tests/casos-de-prueba.md](tests/casos-de-prueba.md) |
| Plan de evaluación y consentimiento | [evaluacion/plan.md](evaluacion/plan.md) · [evaluacion/consentimiento.md](evaluacion/consentimiento.md) |
| Piloto P00 | [evaluacion/piloto.md](evaluacion/piloto.md) |
| Heurísticas de Nielsen | [evaluacion/heuristicas.md](evaluacion/heuristicas.md) |
| Recorrido cognitivo | [evaluacion/recorrido-cognitivo.md](evaluacion/recorrido-cognitivo.md) |
| Accesibilidad WCAG | [evaluacion/accesibilidad.md](evaluacion/accesibilidad.md) |
| Resultados y métricas P01/P02 | [evaluacion/resultados.md](evaluacion/resultados.md) · [evaluacion/metricas.md](evaluacion/metricas.md) |
| Hallazgos y backlog | [evaluacion/hallazgos.md](evaluacion/hallazgos.md) · [evaluacion/backlog.md](evaluacion/backlog.md) |
| Evidencias antes / después | [evidencias/antes/](evidencias/antes/) · [evidencias/despues/](evidencias/despues/) |

## Limitaciones
- Persistencia solo local (`localStorage`): las reservas viven en el navegador del usuario; no hay servidor ni autenticación.
- El catálogo de docentes y horarios es simulado (`infrastructure/datos.js`).
- No se envían correos reales de confirmación ni enlaces de reunión.
- Las pruebas con usuarios se hicieron con una muestra pequeña (P01, P02), suficiente para detectar problemas, no para conclusiones estadísticas.

## Versiones
- **v1**: primera versión evaluada (tag `v1`).
- **v2**: corrige los dos problemas prioritarios de [evaluacion/hallazgos.md](evaluacion/hallazgos.md) (tag `v2`).
