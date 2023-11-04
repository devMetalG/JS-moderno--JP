const url = 'http://localhost:4000/clientes'

// Crear clientes
export const nuevoCliente = async cliente => {
  try {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    window.location.href = 'index.html'
  } catch (error) {
    console.log(error)
  }
}

// Obtener clientes
export const obtenerClientes = async () => {
  try {
    const response = await fetch(url)
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
  }
}

// Eliminar cliente
export const eliminarCliente = async id => {
  try {
    await fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
  } catch (error) {
    console.log(error)
  }
}

// Obtener cliente por ID

export const obtenerCliente = async id => {
  try {
    const response = await fetch(`${url}/${id}`)
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
  }
}

// Actualizar un cliente
export const editarCliente = async cliente => {
  try {
    await fetch(`${url}/${cliente.id}`, {
      method: 'PUT',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    window.location.href = 'index.html'
  } catch (error) {
    console.log(error)
  }
}