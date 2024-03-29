// Constructores 

function Seguro(marca, year, tipo){
  this.marca = marca;
  this.year = year;
  this.tipo = tipo;
}

// Realiza la cotización con los datos
Seguro.prototype.cotizarSeguro = function(){
  /* 
    1 = Americano 1.15
    2 = Asiatico 1.05
    3 = Europeo 1.35 
  */

  let cantidad;
  const base = 2000
  console.log(this.marca);
  switch (this.marca) {
    case '1':
      cantidad = base * 1.15;
      break;
    case '2':
      cantidad = base * 1.05;
      break;
    case '3':
      cantidad = base * 1.35;
      break;
  
    default:
      break;
  }

  // Leer año
  const diferencia = new Date().getFullYear() - this.year;

  // cada año más viejo el costo baja un 3%
  cantidad -= ((diferencia *0.03) * cantidad);

  /*
    Si el seguro es básico se múltiplica por 30% más
    Si el seguro es completo se múltiplica por 50% más
  */

    if (this.tipo === 'basico') {
      cantidad *= 1.30;
    } else {
      cantidad *= 1.50;
    }

    return cantidad;
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

// Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
  const div = document.createElement('DIV');
  
  if (tipo === 'error') {
    div.classList.add('error');
  } else {
    div.classList.add('correcto');
  }
  div.classList.add('mensaje', 'mt-10');
  div.textContent = mensaje;

  // Insertar en HTML

  const formulario = document.querySelector('#cotizar-seguro');
  formulario.insertBefore(div, document.querySelector('#resultado'));

  setTimeout(() => {
    div.remove();
  }, 3000);
}

UI.prototype.mostrarResultado = (total, seguro) => {
  const {marca, year, tipo} = seguro;
  let textoMarca;
  switch (marca) {
    case '1':
      textoMarca = 'Americano';
      break;
    case '2':
      textoMarca = 'Asiatico';
      break;
    case '3':
      textoMarca = 'Europeo';
      break;
  
    default:
      break;
  }
  const div = document.createElement('DIV');
  div.classList.add('mt-10');
  div.innerHTML = `
    <p class = "header">Tu resumen</p>
    <p class = "font-bold">Marca: <span class="font-normal">${textoMarca}</span></p>
    <p class = "font-bold">Año: <span class="font-normal">${year}</span></p>
    <p class = "font-bold">Tipo: <span class="font-normal capitalize">${tipo}</span></p>
    <p class = "font-bold">Total: <span class="font-normal">${total}</span></p>
  `;
  const resultadoDiv = document.querySelector('#resultado');
  

  // Mostrar el spinner
  const spinner = document.querySelector('#cargando');
  spinner.style.display = 'block';

  setTimeout(() => {
    spinner.style.display = "none"; // Borra spinner pero se muestra resultado
    resultadoDiv.appendChild(div);
  }, 3000);
}

// Instanciar UI

const ui = new UI();

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
    ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
    return;
  } 
  ui.mostrarMensaje('Cotizando...', 'correcto');

  // Ocultar cotizaciones anteriores
  const resultados = document.querySelector('#resultado div');
  if(resultados !== null){
    resultados.remove();
  }

  // Instanciar el seguro
const seguro = new Seguro(marca, year, tipo);
const total = seguro.cotizarSeguro();

  // Utilizar el prototyoe que va a cotizar
  ui.mostrarResultado(total, seguro);
}