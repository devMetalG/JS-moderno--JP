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
      <h3 class="my-3">Ingredientes y Cantidades</h3>
    `

    // Mostrar cantidades e ingredientes 
    const listGroup = document.createElement('UL')
    listGroup.classList.add('list-group')
    for (let i = 1; i <= 20; i++) {
      if (receta[`strIngredient${i}`]) {
        const ingrediente = receta[`strIngredient${i}`]
        const cantidad = receta[`strMeasure${i}`]

        const ingredienteLi = document.createElement('LI')
        ingredienteLi.classList.add('list-group-item')
        ingredienteLi.textContent = `${ingrediente} - ${cantidad}`
        listGroup.appendChild(ingredienteLi)
      }
    }

    modalBody.appendChild(listGroup)

    const modalFooter = document.querySelector('.modal-footer')

    limpiarHTML(modalFooter)
    // Botones de cerrar y favorito
    const btnFav = document.createElement('BUTTON')
    btnFav.classList.add('btn', 'btn-danger', 'col')
    btnFav.textContent = existeStorage(idMeal) ? 'Eliminar Favorito' : 'Guardar Favorito'

    // localStorage
    btnFav.onclick = function(){

      if (existeStorage(idMeal)) {
        eliminarFavorito(idMeal)
        btnFav.textContent = 'Guardar Favorito'
        return
      }
      agregarFavorito({
        id: idMeal,
        title: strMeal,
        img: strMealThumb
      })
      btnFav.textContent = 'Eliminar Favorito'
    }
    
    const btnClose = document.createElement('BUTTON')
    btnClose.classList.add('btn', 'btn-secondary', 'col')
    btnClose.textContent = 'Cerrar'
    btnClose.onclick = function(){
      modal.hide()
    }

    modalFooter.appendChild(btnFav)
    modalFooter.appendChild(btnClose)
    // Muestra el modal
    modal.show()
  }

  function agregarFavorito(receta){
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []
    localStorage.setItem('favoritos', JSON.stringify([...favoritos, receta]))
  }

  function eliminarFavorito(id){
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []
    const nuevosFavoritos = favoritos.filter(favorito => favorito.id !== id)
    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos))
  }

  function existeStorage(id){
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []
    return favoritos.some(favorito => favorito.id === id)
  }

  function limpiarHTML(selector){
    while (selector.firstChild) {
      selector.removeChild(selector.firstChild)
    }
  }
}

document.addEventListener('DOMContentLoaded', iniciarApp)