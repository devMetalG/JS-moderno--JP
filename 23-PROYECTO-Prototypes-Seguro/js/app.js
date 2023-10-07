// Constructores 

function Seguro(marca, year, tipo){
  this.marca = marca;
  this.year = year;
  this.tipo = tipo;
}

function UI(){}

// Llena las opciones de los años
UI.prototype.llenarOpciones = () =>{
  const max = new Date().getFullYear();
  const min = max - 20;

  const selectYear = document.querySelector('#year');

  for(let i = max; i >=min;i--){
    let option = document.createElement('OPTION');
    option.value = i;
    option.textContent = i;
    selectYear.appendChild(option);
  }
}

// Instanciar UI

const ui = new UI();
console.log(ui);

document,addEventListener('DOMContentLoaded', ()=>{
  ui.llenarOpciones(); // Llena select con los años
});

eventListeners();

function eventListeners(){
  const formulario = document.querySelector('#cotizar-seguro');

  formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e){
  e.preventDefault();

  // Leer marca seleccionada
  const marca = document.querySelector('#marca').value;

  // Leer año seleccionada
  const year = document.querySelector('#year').value;

  // Leer tipo covertura
  const tipo = document.querySelector('input[name = "tipo"]:checked').value;

  if (marca === '' || year === '' || tipo === '') {
    console.log('No paso la validación');
  } else {
    console.log('Si paso la validación');
  }
}