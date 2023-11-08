const nombreCache = 'apv-v1'
const archivos = [
  '/47-ServiceWorkers-PWA',
  '/47-ServiceWorkers-PWA/error.html',
  '/47-ServiceWorkers-PWA/manifest.json',
  '/47-ServiceWorkers-PWA/index.html',
  '/47-ServiceWorkers-PWA/css/bootstrap.css',
  '/47-ServiceWorkers-PWA/css/styles.css',
  '/47-ServiceWorkers-PWA/js/app.js',
  '/47-ServiceWorkers-PWA/js/apv.js'
]
self.addEventListener('install', e => {
  console.log('Instalado')

  e.waitUntil(
    caches.open(nombreCache)
      .then( cache => {
        console.log('Cacheando..')
        cache.addAll(archivos)
      })
  )
})

self.addEventListener('activate', e => {
  console.log('SW activado.')
  console.log(e)
})

// Fetch
self.addEventListener('fetch', e => {
  console.log('fetch...',e)

  e.respondWith(
    caches.match(e.request)
      .then(response => {
        return response
      })
      .catch( () => caches.match('/47-ServiceWorkers-PWA/error.html'))
  )
})