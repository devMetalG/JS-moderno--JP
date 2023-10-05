localStorage.removeItem('nombre');

// Actualizar un registro 
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Marzo');
console.log(mesesArray);

localStorage.setItem('meses', JSON.stringify(mesesArray));

console.log(localStorage.getItem('meses'));

localStorage.clear();