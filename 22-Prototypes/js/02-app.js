function Cliente(nombre, saldo){
  this.nombre = nombre;
  this.saldo = saldo;
}

const memo = new Cliente('Memo', 100);

function formatearCliente (cliente) {
  const {nombre, saldo} = cliente;
  return `El cliente ${nombre} tiene un saldo de: ${saldo}.`
}

function formatearEmpresa (empresa) {
  const {nombre, saldo, categoria} = empresa;
  return `La empresa ${nombre} tiene un saldo de: ${saldo} y su categoría es ${categoria}`
}

console.log(formatearCliente(memo));

function Empresa(nombre, saldo, categoria){
  this.nombre = nombre;
  this.saldo = saldo;
  this.categoria = categoria;
}

const maguitoCompany = new Empresa('maguito', 100000, 'Cursos en línea');

console.log(formatearEmpresa(maguitoCompany));

