// Probar 2 valores

function suma(a, b){
  return a + b
}

function resta (a, b){
  return a - b
}

async function sumaAsync(a, b){
  return Promise.resolve(suma(a, b))
}

let resultado = suma(2, 2)
let esperado = 4

expected(esperado).toEqual(resultado)

resultado = resta(4, 2)
esperado = 2

expected(esperado).toBe(resultado)

test('Suma 10 + 20 y el resultado es 30', async () => {
  const resultado = await sumaAsync(10, 20)
  const esperado = 31
  expected(esperado).toEqual(resultado)
})

async function test(mensaje, callback){
  try {
    await callback()
    console.log(`El test ${mensaje} se ejecuto correctamente`)
  } catch (error) {
    console.error('Error:')
    console.error(error)
  }
}

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