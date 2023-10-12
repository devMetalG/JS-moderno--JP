const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 1000);
cliente.set(true, true);
cliente.set([0], true);

console.log(cliente);
console.log(cliente.size);
console.log(cliente.has('nombre'));
console.log(cliente.get('nombre'));
cliente.delete([0]);
cliente.delete('saldo');
console.log(cliente);
cliente.clear();
console.log(cliente);

const paciente = new Map(
  [ ['nombre', 'paciente'], 
  ['cuarto', 'no'] ]
);
console.log(paciente);
paciente.forEach(datos => {
  console.log(datos);
});