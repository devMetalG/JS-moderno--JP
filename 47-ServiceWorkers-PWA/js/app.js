if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(registrado => console.log('Se instalo SW', registrado))
    .catch(error => console.log('Fallo la instalacion de SW', error))
}else {
  console.log('No compatible')
}