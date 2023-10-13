const sym = Symbol('1');
const sym2 = Symbol('1');

if (sym === sym2) {
  console.log('Son Iguales');
} else {
  console.log('Son Diferentes');
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {}

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Memo';
persona[apellido] = 'Franco';
persona.tipoCliente = 'Premium';
persona.saldo = 1000;

console.log(persona);
console.log(persona.saldo);

// Para acceder a la propiedad nombre es con []
console.log(persona[nombre]);
console.log('______________');

// Propiedades con Symbol no son iterables
for (let i in persona) {
  console.log(i);
}

// Definir descripcion del symbol
const nombreCliente = Symbol('Nombre del cliente');
const cliente = {}

cliente[nombreCliente] = 'Pedro';
console.log(cliente);
console.log(cliente[nombreCliente]);