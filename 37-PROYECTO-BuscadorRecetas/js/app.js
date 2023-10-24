function iniciarApp(){
  obtenerCategorias()
  function obtenerCategorias(){
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    fetch(url)
      .then(response => response.json())
      .then(result => console.log(result))
  }
}

document.addEventListener('DOMContentLoaded', iniciarApp)