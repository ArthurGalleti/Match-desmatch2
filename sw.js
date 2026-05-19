const CACHE_NAME = 'match-v1';

// Lista de arquivos para cache (ajuste os nomes se necessário)
const recursosToCache = [
  "./index.html",
  "./manifest.json",
  "./estilos/sobre.css",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];
// Instalação: Salva os arquivos essenciais no navegador
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(resourcesToCache);
    })
  );
});

// Estratégia: Tenta buscar na rede, se falhar (offline), usa o cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});