const busqueda = document.querySelector('.busqueda');
// busqueda.addEventListener('keydown', (evt) => {
//   console.log('KeyDown...');
// })
// busqueda.addEventListener('keyup', () => {
//   console.log('KeyUp...');
// })
// busqueda.addEventListener('blur', () => {
//   console.log('blur...');
// })
// busqueda.addEventListener('copy', () => {
//   console.log('copy...');
// })
// busqueda.addEventListener('paste', () => {
//   console.log('paste...');
// })
// busqueda.addEventListener('cut', () => {
//   console.log('cut...');
// })
busqueda.addEventListener('input', (e) => {
  // console.log(e.type);
  // console.log(e.target);
  // console.log(e.target.value);
  if (e.target.value === '') {
    console.log('Fallo la validación');
  }
})