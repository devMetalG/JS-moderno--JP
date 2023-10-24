function iniciarApp(){

  const selectCategorias = document.querySelector('#categorias')
  selectCategorias.addEventListener('change', seleccionarCategoria)

  const resultado = document.querySelector('#resultado')

  obtenerCategorias()
  function obtenerCategorias(){
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    fetch(url)
      .then(response => response.json())
      .then(result => mostrarCategorias(result.categories))
  }

  function mostrarCategorias(categorias = []){
    categorias.forEach(categoria => {
      const {strCategory} = categoria
      const option = document.createElement('OPTION')
      option.value = strCategory
      option.textContent = strCategory

      selectCategorias.appendChild(option)
    });
  }

  function seleccionarCategoria(e){
    const categoria = e.target.value
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`
    
    fetch(url)
      .then(response => response.json())
      .then(result => mostrarRecetas(result.meals))
  }

  function mostrarRecetas(recetas = []){
    limpiarHTML()
    recetas.forEach(receta => {
      const {idMeal, strMeal, strMealThumb} = receta

      console.log(receta)
      const recetaContainer = document.createElement('DIV')
      recetaContainer.classList.add('col-md-4')

      const card = document.createElement('DIV')
      card.classList.add('card', 'mb-4')

      const recetaImg = document.createElement('IMG')
      recetaImg.classList.add('card-img-top')
      recetaImg.alt = `Imagen de la receta ${strMeal}`
      recetaImg.src = strMealThumb

      const recetaCardBody = document.createElement('DIV')
      recetaCardBody.classList.add('card-body')

      const recetaHeading = document.createElement('H3')
      recetaHeading. classList.add('card-title', 'mb-3')
      recetaHeading.textContent = strMeal

      const recetaButton = document.createElement('BUTTON')
      recetaButton.classList.add('btn', 'btn-danger', 'w-100')
      recetaButton.textContent = 'Ver Receta'

      // Inyectar en el HTML

      recetaCardBody.appendChild(recetaHeading)
      recetaCardBody.appendChild(recetaButton)

      card.appendChild(recetaImg)
      card.appendChild(recetaCardBody)

      recetaContainer.appendChild(card)

      resultado.appendChild(recetaContainer)
      console.log(recetaImg)
    })
  }

  function limpiarHTML(){
    while (resultado.firstChild) {
      resultado.removeChild(resultado.firstChild)
    }
  }
}

document.addEventListener('DOMContentLoaded', iniciarApp)