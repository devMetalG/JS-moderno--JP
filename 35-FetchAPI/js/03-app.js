const JSONBtn = document.querySelector('#cargarJSONArray')
JSONBtn.addEventListener('click', obtenerDatos)

function obtenerDatos(){
  const url = 'data/empleados.json'

  fetch(url)
    .then(respuesta => {
      return respuesta.json()
    })
    .then(resultado => {
      mostrarHTML(resultado)
    })
}

function mostrarHTML(json){
  const contenido = document.querySelector('.contenido')
  let html = ''
  json.forEach(empleado => {
    const {nombre, id, empresa, trabajo} = empleado

    html += `
    <p>Empleado: ${nombre}</p>
    <p>Empresa: ${empresa}</p>
    <p>Trabajo: ${trabajo}</p>
    <p>ID: ${id}</p>
    `
  });

  contenido.innerHTML = html
}