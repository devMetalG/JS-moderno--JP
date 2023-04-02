const producto = "Monitor1 ";
const precio = "30 USD"; 

// Concatenar con concat
console.log(producto.concat(precio));
console.log(producto.concat('en descuento'));

// Concatenar con + o ,
console.log(producto +'con precio de '+ precio);
console.log('El producto ' + producto + 'tiene el precio de: '+ precio );

// Concatenar con backticks o template strings
console.log(`El producto ${producto} tiene el precio de $${precio}`);