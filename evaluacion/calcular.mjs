// Uso: node evaluacion/calcular.mjs evaluacion/datos.csv
// Lee SOLO los datos que tú anotaste y imprime las tablas en Markdown.
// CSV (con encabezado): version,participante,tarea,exito,tiempo_s,errores,ayudas,seq
import { readFileSync } from 'node:fs';

const archivo = process.argv[2];
if (!archivo) { console.error('Falta el archivo CSV.'); process.exit(1); }
const filas = readFileSync(archivo, 'utf8').trim().split(/\r?\n/).slice(1)
  .filter(Boolean).map((l) => {
    const [version, part, tarea, exito, t, err, ay, seq] = l.split(',').map((x) => x.trim());
    return { version, part, tarea, exito: +exito, t: +t, err: +err, ay: +ay, seq: +seq };
  });

const prom = (a) => (a.reduce((s, x) => s + x, 0) / a.length);
const f = (n, d = 1) => (Number.isFinite(n) ? n.toFixed(d) : '—');

for (const v of [...new Set(filas.map((r) => r.version))]) {
  console.log(`\n## Resumen ${v}`);
  console.log('| Tarea | n | Tasa de éxito | Tiempo promedio (s) | Errores totales | Ayudas totales | SEQ promedio |');
  console.log('|---|---|---|---|---|---|---|');
  for (const t of [...new Set(filas.filter((r) => r.version === v).map((r) => r.tarea))].sort()) {
    const g = filas.filter((r) => r.version === v && r.tarea === t);
    const exitos = g.filter((r) => r.exito === 1).length;
    console.log(`| ${t} | ${g.length} | ${f(100 * exitos / g.length, 0)} % (${exitos}/${g.length}) | ${f(prom(g.map((r) => r.t)))} | ${g.reduce((s, r) => s + r.err, 0)} | ${g.reduce((s, r) => s + r.ay, 0)} | ${f(prom(g.map((r) => r.seq)))} |`);
  }
}

const v1 = (t) => filas.filter((r) => r.version === 'v1' && r.tarea === t);
const v2 = (t) => filas.filter((r) => r.version === 'v2' && r.tarea === t);
const tareas2 = [...new Set(filas.filter((r) => r.version === 'v2').map((r) => r.tarea))];
if (tareas2.length) {
  console.log('\n## Comparación v1 → v2');
  console.log('| Tarea | Métrica | v1 | v2 | Cambio |');
  console.log('|---|---|---|---|---|');
  for (const t of tareas2) {
    const a = v1(t), b = v2(t);
    const m = [
      ['Tiempo promedio (s)', prom(a.map((r) => r.t)), prom(b.map((r) => r.t))],
      ['Errores promedio', prom(a.map((r) => r.err)), prom(b.map((r) => r.err))],
      ['SEQ promedio', prom(a.map((r) => r.seq)), prom(b.map((r) => r.seq))],
    ];
    for (const [nombre, x, y] of m) console.log(`| ${t} | ${nombre} | ${f(x)} | ${f(y)} | ${y - x >= 0 ? '+' : ''}${f(y - x)} |`);
  }
}
console.log('\nNota: con 2 participantes los promedios son orientativos; cita los valores individuales en resultados.md.');
