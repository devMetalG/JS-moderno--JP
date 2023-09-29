// Seleccionar elementos por su clase

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// Si existe mas de 1 clase con ese nombre

const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

// Si no existe la clase
const noExiste = document.getElementsByClassName('noExiste');
console.log(noExiste);