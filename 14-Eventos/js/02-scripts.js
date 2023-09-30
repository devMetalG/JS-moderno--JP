const nav = document.querySelector('.navegacion');

// registrar un evento 

nav.addEventListener('click', ()=> {
  console.log('Click en nav.');
})
nav.addEventListener('mouseenter', ()=> {
  console.log('Entraste al navegador.');
  nav.style.backgroundColor = 'white';
})
nav.addEventListener('mouseout', ()=> {
  console.log('Saliste del navegador.');
  nav.style.backgroundColor = 'transparent';
})
nav.addEventListener('mousedown', ()=> {
  console.log('mouse down.');
})
nav.addEventListener('mouseup', ()=> {
  console.log('mouse up.');
})
nav.addEventListener('dblclick', ()=> {
  console.log('doble Click.');
})