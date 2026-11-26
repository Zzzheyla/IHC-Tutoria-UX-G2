// Uso: node evaluacion/calcular-sus.mjs 4,2,5,1,4,2,5,1,4,2
// Pasa las 10 respuestas (1-5) en orden Q1..Q10.
const r = (process.argv[2] || '').split(',').map(Number);
if (r.length !== 10 || r.some((x) => !(x >= 1 && x <= 5))) { console.error('Se necesitan 10 respuestas entre 1 y 5.'); process.exit(1); }
const suma = r.reduce((s, x, i) => s + (i % 2 === 0 ? x - 1 : 5 - x), 0);
console.log(`Puntaje SUS: ${suma * 2.5}`);
