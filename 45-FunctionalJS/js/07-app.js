const obtenerCliente = () => () => console.log('Memo')

const fn = obtenerCliente()

fn()