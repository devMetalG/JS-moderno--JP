// Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const max = new Date().getFullYear();
const min = autos.reduce((minimum, auto) =>{
  return auto.year < minimum ? auto.year : minimum;
}, autos[0].year);

// Eventos
document.addEventListener('DOMContentLoaded', ()=>{
  mostrarAutos(); // Muestra los autos

  // Llena las opciones de años 
  llenarSelect();
});


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