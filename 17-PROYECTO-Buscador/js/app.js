// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor de resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = autos.reduce((minimum, auto) =>{
  return auto.year < minimum ? auto.year : minimum;
}, autos[0].year);

// Generar objeto con la busqueda
const datosBusqueda = {
  marca: '',
  year: '',
  minimo: '',
  maximo: '',
  puertas: '',
  transmision: '',
  color: ''
}

// Eventos
document.addEventListener('DOMContentLoaded', ()=>{
  mostrarAutos(); // Muestra los autos

  // Llena las opciones de años 
  llenarSelect();
});

// Event listener para los select de búsqueda
marca.addEventListener('change', e => {
  datosBusqueda.marca = e.target.value;
  console.log(datosBusqueda)
})
year.addEventListener('change', e => {
  datosBusqueda.year = e.target.value;
  console.log(datosBusqueda)
})
minimo.addEventListener('change', e => {
  datosBusqueda.minimo = e.target.value;
  console.log(datosBusqueda)
})
maximo.addEventListener('change', e => {
  datosBusqueda.maximo = e.target.value;
  console.log(datosBusqueda)
})
puertas.addEventListener('change', e => {
  datosBusqueda.puertas = e.target.value;
  console.log(datosBusqueda)
})
transmision.addEventListener('change', e => {
  datosBusqueda.transmision = e.target.value;
  console.log(datosBusqueda)
})
color.addEventListener('change', e => {
  datosBusqueda.color = e.target.value;
  console.log(datosBusqueda)
})

// Funciones
function mostrarAutos() {
  autos.forEach(auto => {
    const {marca, modelo, year, precio, puertas, color, transmision} = auto
    
    const autoHTML = document.createElement('P');

    autoHTML.textContent = `
      ${marca} ${modelo} - ${year} - ${puertas} puertas - color: ${color} 
      - transmisión: ${transmision} - precio: $${precio}
    `;

    // Insertar en el HTML 
    resultado.appendChild(autoHTML);
  })
}

// Genera los años de select
function llenarSelect() {
  for(let i = max; i >= min; i--){
    const opcion = document.createElement('option');
    opcion.value = i;
    opcion.text = i;
    year.appendChild(opcion); // Agrega las opciones de año al select
  }
}