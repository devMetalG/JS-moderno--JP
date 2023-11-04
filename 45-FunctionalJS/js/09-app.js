const suma = (a, b, c) => a + b + c

const parcial = a => (b, c) => suma (a, b, c)

const primerNumero = parcial(5)
const resultado = primerNumero(6, 7)

console.log(resultado)
// console.log(suma(1,2,3))

const parciales = a => b => c => suma(a, b, c)

const parcial1 = parciales(1)
const parcial2 = parcial1(2)
const parcial3 = parcial2(3)

console.log(parcial3)

const resultadoParcial = parciales(4)(3)(2)
console.log(resultadoParcial)