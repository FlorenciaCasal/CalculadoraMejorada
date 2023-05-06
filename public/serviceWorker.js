const staticCalculadora = "calculadoraReact"
const assets = [
  "/",
  "/index.html",
  "/calculadora.png",
  "/src/componentes/hojasEstilo/Boton.css",
  "/src/componentes/hojasEstilo/BotonClear.css",
  "/src/componentes/hojasEstilo/Pantalla.css",
  "/src/componentes/Boton.js",
  "/src/componentes/BotonClear.js",
  "/src/componentes/Pantalla.js",
  "/src/App.js",
  "/src/App.css",
  "/src/index.js",
  "/src/index.css",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCalculadora).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })