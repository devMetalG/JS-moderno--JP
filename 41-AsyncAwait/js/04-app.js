function descargarClientes(){
  return new Promise(resolve => {
    console.log('Descarga de clientes')

    setTimeout(() => {
      resolve('Clientes descargados')
    }, 5000);
  })
}

function descargarPedidos(){
  return new Promise(resolve => {
    console.log('Descarga de pedidos')

    setTimeout(() => {
      resolve('pedidos descargados')
    }, 3000);
  })
}

const app = async () => {
  try {
    const respuesta = await Promise.all([descargarClientes(), descargarPedidos()])
    console.log(respuesta[0])
    console.log(respuesta[1])
  } catch (error) {
    console.log(error)
  }
}

app()