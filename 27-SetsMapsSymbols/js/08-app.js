const ciudades = ['Londres', 'New York', 'Madrid', 'Paris', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set('Nombre', 'Memo')
datos.set('Profesion', 'Desarrollador');

// Default

console.log('Default iterator');

for (let ciudad of ciudades){
  console.log(ciudad);
}

for (let orden of ordenes){
  console.log(orden);
}

for (let dato of datos){
  console.log(dato);
}
console.log('');

// Keys iterator

console.log('Keys iterator');

for (let key of ciudades.keys()){
  console.log(key);
}

for (let key of ordenes.keys()){
  console.log(key);
}

for (let key of datos.keys()){
  console.log(key);
}
console.log('');

// Values iterator

console.log('Values iterator');

for (let value of ciudades.values()){
  console.log(value);
}

for (let value of ordenes.values()){
  console.log(value);
}

for (let value of datos.values()){
  console.log(value);
}
console.log('');

// Entries iterator
console.log('Entries iterator');

for (let entry of ciudades.entries()){
  console.log(entry);
}

for (let entry of ordenes.entries()){
  console.log(entry);
}

for (let entry of datos.entries()){
  console.log(entry);
}