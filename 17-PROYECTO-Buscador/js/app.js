// Variables
const resultado = document.querySelector('#resultado');

// Eventos
document.addEventListener('DOMContentLoaded', ()=>{
  mostrarAutos();

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