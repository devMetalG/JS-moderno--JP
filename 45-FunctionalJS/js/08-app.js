const obtenerCliente = () => {
  const cliente = 'Memo'
  function muestraNombre(){
    console.log(cliente)
  }
  return muestraNombre
}

const cliente = obtenerCliente()

cliente()