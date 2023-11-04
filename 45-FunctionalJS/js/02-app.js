const suma = (a, b) =>  a + b

const multiplicar = (a, b) =>  a * b

const sumarOMultiplicar = fn => fn(10, 5)

// Funcion como argumento
console.log(sumarOMultiplicar(suma))
console.log(sumarOMultiplicar(multiplicar))