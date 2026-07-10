// ========================================== 
// SERVICE WORKER iMESA - MOTOR OFFLINE
// ==========================================

const CACHE_NAME = 'imesa-v1';

// O "App Shell": Tudo que o PWA precisa para a coreografia inicial e a tela offline
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    './Favicon.png',
    './Icon180.png',
    './Icon192.png',
    './Icon512.png',
    './Share.png'
];

// ==========================================
// 1. INSTALAÇÃO (Download Seguro do App Shell)
// ==========================================
self.addEventListener('install', (event) => {
    // Força o SW a assumir o controle imediatamente, sem esperar abas fecharem
    self.skipWaiting();
    
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('[Service Worker] Cacheando o Core do iMesa...');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// ==========================================
// 2. ATIVAÇÃO (Limpeza de resíduos de versões antigas)
// ==========================================
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('[Service Worker] Purgando cache obsoleto:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    // Garante que o SW controle os clientes (abas) na primeira carga
    return self.clients.claim();
});

// ==========================================
// 3. ESTRATÉGIAS DE INTERCEPTAÇÃO (FETCH)
// ==========================================
self.addEventListener('fetch', (event) => {
    const url = event.request.url;

    // ESTRATÉGIA CACHE-FIRST: Para dependências externas pesadas (Tailwind, Lucide e Google Fonts)
    // Isso garante que a tela offline tenha as fontes e os ícones perfeitos, mesmo sem rede.
    if (url.includes('tailwindcss') || url.includes('lucide') || url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) return cachedResponse;
                
                return fetch(event.request).then((networkResponse) => {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                    return networkResponse;
                }).catch((err) => console.log('[Service Worker] Falha ao buscar CDN externa offline:', err));
            })
        );
    } 
    // ESTRATÉGIA NETWORK-FIRST: Para os arquivos locais (index, css, js)
    // Garante que quando você fizer um push pro GitHub, o usuário veja na hora. Se cair a internet, ele puxa do cache local.
    else {
        event.respondWith(
            fetch(event.request).catch(() => {
                console.log('[Service Worker] Rede inativa. Servindo do cache de segurança:', url);
                return caches.match(event.request);
            })
        );
    }
});
