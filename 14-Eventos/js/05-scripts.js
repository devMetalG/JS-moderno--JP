window.addEventListener('scroll', ()=>{
  const premium = document.querySelector('.premium');
  const ubicacion = premium.getBoundingClientRect();
  // console.log(ubicacion);
  if (ubicacion.top < 978) {
    console.log('El elemento ya es visible');
  } else {
    console.log('Da más scroll para que el elemento se vea');
  }
})