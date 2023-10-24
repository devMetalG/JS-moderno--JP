function iniciarApp(){

  const selectCategorias = document.querySelector('#categorias')
  selectCategorias.addEventListener('change', seleccionarCategoria)

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
      console.log(recetaImg)
    })
  }
}

document.addEventListener('DOMContentLoaded', iniciarApp)