// Probar 2 valores

function suma(a, b){
  return a + b
}

function resta (a, b){
  return a - b
}

let resultado = suma(2, 2)
let esperado = 4

expected(esperado).toEqual(resultado)

resultado = resta(4, 2)
esperado = 2

expected(esperado).toBe(resultado)

function expected(esperado){
  return {
    toBe(resultado){
      if (resultado !== esperado) {
        console.error(`${resultado} es diferente de lo esperado ${esperado}`)
      } else {
        console.log('Prueba correcta')
      }
    },
    toEqual(resultado){
      if (resultado !== esperado) {
        console.error(`${resultado} no es igual a lo esperado ${esperado}`)
      } else {
        console.log('Prueba correcta')
      }
    }
  }
}