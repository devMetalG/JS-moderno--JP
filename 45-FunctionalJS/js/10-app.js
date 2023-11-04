const obtenerNombre = info => ({
  mostrarNombre(){
    console.log(`Nombre: ${info.nombre}`)
  }
})

const guardarEmail = info => ({
  agregarEmail(email){
    console.log(`Guardando email en: ${info.nombre}`)
    info.email = email
  }
})

const obtenerEmail = info => ({
  mostrarEmail(){
    console.log(`Email de ${info.nombre}: ${info.email}`)
  }
})

const obtenerEmpresa = info => ({
  mostrarEmpresa(){
    console.log(`Empresa de ${info.nombre}: ${info.empresa}`)
  }
})

const obtenerPuesto = info => ({
  mostrarPuesto(){
    console.log(`Puesto de ${info.nombre}: ${info.puesto}`)
  }
})

function Cliente(nombre, email, empresa){
  let info = {
    nombre, 
    email,
    empresa
  }

  return Object.assign(
    info,
    obtenerNombre(info),
    guardarEmail(info),
    obtenerEmail(info),
    obtenerEmpresa(info)
  )
}

function Empleado(nombre, email, puesto){
  let info = {
    nombre, 
    email,
    puesto
  }
  return Object.assign(
    info,
    obtenerNombre(info),
    guardarEmail(info),
    obtenerEmail(info),
    obtenerPuesto(info)
  )
}

const cliente = Cliente('Memo', null, 'magito')
cliente.mostrarNombre()
cliente.agregarEmail('correo1@correo.com')
cliente.mostrarEmail()
cliente.mostrarEmpresa()
console.log('---------------------')
const empleado = Empleado('costal', null, 'TI')
empleado.mostrarNombre()
empleado.agregarEmail('correo2@correo.com')
empleado.mostrarEmail()
empleado.mostrarPuesto()
