const dinero = 500;
const totalPagar = 800;
const tarjeta = true;

if (dinero >= totalPagar) {
  console.log('Si podemos pagar');
} else if (tarjeta) {
  console.log('Si puedo pagar por que tengo tarjeta');
} else {
  console.log('No tienes fondos suficientes');
}