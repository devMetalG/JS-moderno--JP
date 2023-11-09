// Probar 2 valores

function suma(a, b){
  return a + b
}

function resta (a, b){
  return a - b
}

let resultado = suma(2, 2)
let esperado = 3

if (resultado !== esperado) {
  console.error(`${resultado} es diferente de lo esperado ${esperado}`)
} else {
  console.log('Prueba correcta')
}

resultado = resta(4, 2)
esperado = 2

if (resultado !== esperado) {
  console.error(`${resultado} es diferente de lo esperado ${esperado}`)
} else {
  console.log('Prueba correcta')
}