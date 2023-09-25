function sumar(a, b){
  return a + b;
};

const resultado = sumar(2, 3);
console.log(resultado);

// Ejemplo avanzado
let total = 0;
function agregarCarrito(precio){
  return total += precio;
};

function calcularImpuesto(){
  return total * 1.15;
}

agregarCarrito(170);
console.log(total);
agregarCarrito(620);
console.log(total);
agregarCarrito(390);
console.log(total);

const totalPagar = calcularImpuesto(total);
console.log(`El total a pagar es de: ${totalPagar}`);
