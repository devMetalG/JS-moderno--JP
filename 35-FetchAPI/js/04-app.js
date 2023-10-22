const cargarAPI = document.querySelector('#cargarAPI')
cargarAPI.addEventListener('click', obtenerDatos)

function obtenerDatos(){
  const url = 'https://picsum.photos/list'
  fetch(url)
    .then(response => response.json())
    .then(result => mostrarHTML(result))
}

function mostrarHTML(result){
  const contenido = document.querySelector('.contenido')
  let html = ''
  result.forEach(perfil => {
    const {author, post_url} = perfil
    html += `
      <p>Autor: ${author}</p>
      <a href="${post_url}" target="blank">Ver Imagen</a>
    `
  });
  contenido.innerHTML = html 
}