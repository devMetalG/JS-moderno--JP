const producto = {
  nombre: 'Monitor',
  precio: 300,
  disponible: true,
}

const medidas = {
  peso: '1Kg',
  altura: '1m'
};

console.log(producto);
console.log(medidas);


// Fusionar 2 objetos con assign
const resultado = Object.assign( producto, medidas );

// Fusionar 2 objetos con Spread Operator o Rest Operator
const resultado2 = {...producto, ...medidas};

console.log('Object.assign');
console.log(resultado);
console.log('Spread Operator');
console.log(resultado2);