const cliente = {
  nombre: 'Memo',
  saldo: 400
}

console.log('Hola');

console.log(cliente);

function Cliente(nombre, saldo){
  this.nombre = nombre;
  this.saldo = saldo;
}

const memo = new Cliente('Memo', 100);
console.log(memo);