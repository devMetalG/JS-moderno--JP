const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

console.log(encabezado.innerText);
console.log(encabezado.textContent);
console.log(encabezado.innerHTML);

const nuevoHead = 'Nuevo Head';
document.querySelector('.contenido-hero h1').textContent = nuevoHead;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';
console.log(imagen);