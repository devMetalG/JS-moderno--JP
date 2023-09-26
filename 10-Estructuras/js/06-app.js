const usuario = true;
const puedePagar = true;

if (usuario && puedePagar) {
  console.log('Si puedes comprar');
} else if (!usuario && !puedePagar) {
  console.log('No puedes comprar por que no eres usuario y no tienes dinero');
} else if (!usuario) {
  console.log('No puedes pagar por que no tienes una cuenta');
} else if (!puedePagar) {
  console.log('Fondos insuficientes');
}
