const enlace = document.createElement('a');
const enlace2 = document.createElement('a');

// Agregando el texto 
enlace.textContent = 'Nuevo Enlace';
enlace2.textContent = 'Nuevo Enlace2';

// Agregando el href
enlace.href = '/nuevo-enlace';
enlace2.href = '/nuevo-enlace2';

enlace.target = '_blank';
enlace2.target = '_blank';

// Agregar una clase

enlace.classList.add('clase-nueva');

// Agregar onclick
enlace.onclick = nuevaFuncion;

console.log(enlace);
console.log(enlace2);

// Seleccionar la navegacion 
const navegacion = document.querySelector('.navegacion');
// insertar al final 
navegacion.appendChild(enlace);
// insertar donde deseas
console.log(navegacion.children)
navegacion.insertBefore(enlace2, navegacion.children[1]);

function nuevaFuncion() {
  alert('diste clic en el nuevo enlace');
}

// Crear un card de forma dinamica 

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'concierto';
parrafo1.classList.add('categoria', 'concierto');
console.log(parrafo1);

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'concierto de rock';
parrafo2.classList.add('titulo');
console.log(parrafo2);

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$1,000 por persona';
parrafo3.classList.add('precio');
console.log(parrafo3);

// crear div con la clase info 

const info = document.createElement('div');
info.classList.add('info');
console.log(info);

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear la imagen

const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'texto alternativo';

// Crear card

const card = document.createElement('div');
card.classList.add('card');

// Asignar hijos

card.appendChild(imagen);
card.appendChild(info);

console.log(card);

// insertar en el HTML

const contenedor = document.querySelector('.hacer .contenedor-cards');
// insertar al final
// contenedor.appendChild(card);
// insertar en donde deseas 
contenedor.insertBefore(card, contenedor.children[3]);

