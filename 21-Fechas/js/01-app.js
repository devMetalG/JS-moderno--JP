const diaHoy = new Date();

let valor;

valor = diaHoy;
valor = diaHoy.getFullYear();
valor = diaHoy.getMonth();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();

valor = diaHoy.setFullYear(2025);
valor = diaHoy.getFullYear();

console.log(valor);