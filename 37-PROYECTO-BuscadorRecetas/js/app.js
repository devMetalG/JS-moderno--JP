function iniciarApp(){

  const selectCategorias = document.querySelector('#categorias')
  selectCategorias.addEventListener('change', seleccionarCategoria)

  const resultado = document.querySelector('#resultado')
  const modal = new bootstrap.Modal('#modal', {})

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
    limpiarHTML(resultado)

    const heading = document.createElement('H2')
    heading.classList.add('text-center', 'text-black', 'my-5')
    heading.textContent = recetas.length ? 'Resultados' : 'No hay Resultados'
    
    resultado.appendChild(heading)
    
    recetas.forEach(receta => {
      const {idMeal, strMeal, strMealThumb} = receta

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
      // recetaButton.dataset.bsTarget = '#modal'
      // recetaButton.dataset.bsToggle = 'modal'
      recetaButton.onclick = function(){
        seleccionarReceta(idMeal)
      }

      // Inyectar en el HTML

      recetaCardBody.appendChild(recetaHeading)
      recetaCardBody.appendChild(recetaButton)

      card.appendChild(recetaImg)
      card.appendChild(recetaCardBody)

      recetaContainer.appendChild(card)

      resultado.appendChild(recetaContainer)
    })
  }

  function seleccionarReceta(id){
    const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    
    fetch(url)
      .then(response => response.json())
      .then(result => mostrarRecetaModal(result.meals[0]))
  }

  function mostrarRecetaModal(receta){
    const { idMeal, strInstructions, strMeal, strMealThumb  } = receta

    const modalTitle = document.querySelector('.modal .modal-title')
    const modalBody = document.querySelector('.modal .modal-body')

    modalTitle.textContent = strMeal
    modalBody.innerHTML = `
      <img class="img-fluid" src="${strMealThumb}" alt="receta ${strMeal}">
      <h3 class="my-3">Instrucciones</h3>
      <p>${strInstructions}</p>
    `
    // Muestra el modal
    modal.show()
  }

  function limpiarHTML(selector){
    while (selector.firstChild) {
      selector.removeChild(resultado.firstChild)
    }
  }
}

document.addEventListener('DOMContentLoaded', iniciarApp)