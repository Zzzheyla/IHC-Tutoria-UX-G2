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
git clone https://github.com/Zzzheyla/IHC-Tutoria-UX-G2.git
cd IHC-Tutoria-UX-G2
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
| Guion del facilitador y hoja de registro | [evaluacion/guion-facilitador.md](evaluacion/guion-facilitador.md) · [evaluacion/hoja-registro.md](evaluacion/hoja-registro.md) · [evaluacion/guia-piloto.md](evaluacion/guia-piloto.md) |
| Piloto P00 | [evaluacion/piloto.md](evaluacion/piloto.md) |
| Heurísticas de Nielsen | [evaluacion/heuristicas.md](evaluacion/heuristicas.md) |
| Recorrido cognitivo | [evaluacion/recorrido-cognitivo.md](evaluacion/recorrido-cognitivo.md) |
| Accesibilidad WCAG + Lighthouse | [evaluacion/accesibilidad.md](evaluacion/accesibilidad.md) |
| Resultados y métricas P01/P02 | [evaluacion/resultados.md](evaluacion/resultados.md) · [evaluacion/metricas.md](evaluacion/metricas.md) · cálculo: `node evaluacion/calcular.mjs`, `node evaluacion/calcular-sus.mjs` |
| Hallazgos y backlog | [evaluacion/hallazgos.md](evaluacion/hallazgos.md) · [evaluacion/backlog.md](evaluacion/backlog.md) |
| Evidencias antes / después | [evidencias/antes/](evidencias/antes/) · [evidencias/despues/](evidencias/despues/) |

## Limitaciones
- Persistencia solo local (`localStorage`): las reservas viven en el navegador del usuario; no hay servidor ni autenticación.
- El catálogo de docentes y horarios es simulado (`infrastructure/datos.js`).
- No se envían correos reales de confirmación ni enlaces de reunión.
- La reevaluación v2 repite T1 con los mismos participantes, por lo que hay efecto de aprendizaje.

## Versiones
| Versión | Qué es | Código | Evidencias |
|---|---|---|---|
| **v1** | Primera versión funcional; sobre ella se aplicaron heurísticas, recorrido cognitivo, WCAG y las sesiones con usuarios | [tag v1](https://github.com/Zzzheyla/IHC-Tutoria-UX-G2/tree/v1) · [release](https://github.com/Zzzheyla/IHC-Tutoria-UX-G2/releases/tag/v1) | [evidencias/antes/](evidencias/antes/) |
| **v2** | Corrige HZ1 (fecha no válida) y HZ2 (contraste de bordes) de [hallazgos.md](evaluacion/hallazgos.md) | [tag v2](https://github.com/Zzzheyla/IHC-Tutoria-UX-G2/tree/v2) · [release](https://github.com/Zzzheyla/IHC-Tutoria-UX-G2/releases/tag/v2) | [evidencias/despues/](evidencias/despues/) |

Cambios exactos entre versiones: [comparar v1…v2](https://github.com/Zzzheyla/IHC-Tutoria-UX-G2/compare/v1...v2).

## Resultados de la evaluación (resumen)
| Método | Resultado | Detalle |
|---|---|---|
| Pruebas funcionales | v1: 9/9 · v2: 10/10 | [tests/casos-de-prueba.md](tests/casos-de-prueba.md) |
| Heurísticas de Nielsen | 9 problemas: 1 de severidad 3, 5 de severidad 2, 3 cosméticos | [heuristicas.md](evaluacion/heuristicas.md) |
| Recorrido cognitivo | 2 fallos (RC1 en T1, RC2 en T2) | [recorrido-cognitivo.md](evaluacion/recorrido-cognitivo.md) |
| WCAG 2.2 AA | v1: axe 0 violaciones, Lighthouse 100, falla 1.4.11 (1.61:1) · v2: 1.4.11 cumple (3.25:1), Lighthouse 100 | [accesibilidad.md](evaluacion/accesibilidad.md) |
| Sesiones P01 y P02 | T1 la tarea más difícil: 50 % de éxito sin ayuda, 160 s, SEQ 3.5 · SUS promedio 72.5 | [resultados.md](evaluacion/resultados.md) |
| Hallazgos y correcciones v2 | 4 hallazgos; HZ1 y HZ2 corregidos · T1 en v2: 100 % de éxito, 92 s (−42 %), SEQ 6.0 | [hallazgos.md](evaluacion/hallazgos.md) |
