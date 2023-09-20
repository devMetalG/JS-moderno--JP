const carrito = [];

const producto = {
  nombre: 'Monitor',
  precio: 300
};

function Producto(nombre, precio){
  this.nombre = nombre;
  this.precio = precio;
}

const producto2 = new Producto('Celular', 1000);
const producto3 = new Producto('Tablet', 1200);

let resultado;
 resultado = [...carrito, producto];
 resultado = [...resultado, producto2];
 resultado = [producto3, ...resultado];

console.log(resultado);
console.table(resultado);
