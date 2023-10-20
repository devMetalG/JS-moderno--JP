const notificarBtn = document.querySelector('#notificar')

notificarBtn.addEventListener('click', () => {
  Notification
    .requestPermission()
    .then( resultado => {
      console.log(`El resultado es: ${resultado}`)
    })
})

const verNotificacionBtn = document.querySelector('#verNotificacion')

verNotificacionBtn.addEventListener('click', () => {
  if (Notification.permission === 'granted') {
    const notificacion = new Notification('Esta es la notificación', {
      icon: 'img/ccj.png',
      body: 'Gary vuelve a mi'
    });

    notificacion.onclick = function(){
      window.open('https.www.google.com')
    }
  }
})