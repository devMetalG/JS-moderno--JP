const navegacion = document.querySelector('nav');
console.log(navegacion);
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
// Los espacios en blanco son considerados elementos
// console.log(navegacion.childNodes);
// console.log(navegacion.children);
// console.log(navegacion.children[0]);
// console.log(navegacion.children[0].nodeName);
// console.log(navegacion.children[0].nodeType);

const card = document.querySelector('.card');
// card.children[1].children[1].textContent = 'modificado desde traversing the DOM';
// console.log(card.children[1].children[1].textContent);

// card.children[0].src = 'img/hacer2.jpg';
// console.log(card.children[0]);

// Traversing the Hijo al padre

// console.log(card.parentNode);
// console.log(card.parentElement);
// console.log(card.parentElement.parentElement.parentElement);

// console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling);