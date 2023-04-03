const producto = 'Monitor1 20 pulgadas';

// replace
console.log(producto);
console.log(producto.replace('pulgadas','"'));
console.log(producto.replace('Monitor1','Monitor Curvo'));

// slice
// slice con 2 parametros indica inicio y fin del corte
console.log(producto.slice(0,8));
// slice con 1 parametro corta desde la posición que indicaste hasta el final
console.log(producto.slice(9));
// si pasas un numero mayor en el primer parametro con slice no imprime nada

// substring 
console.log(producto.substring(0,8));
// si pasas un número mayor en el primer parametro con substring si imprime 
console.log(producto.substring(8,0));

// para extraer una sola letra se puede usar charAt

// charAt
const nameUser = 'Memo';
console.log(nameUser);
console.log(nameUser.charAt(0));