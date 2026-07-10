// ========================================== 
// SERVICE WORKER iMESA - MOTOR OFFLINE (V7)
// ==========================================

const CACHE_NAME = 'imesa-core-v7';

// O "App Shell": Tudo o que o PWA precisa para a coreografia inicial e a tela offline
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    './assets/Favicon.png',
    './assets/Icon180.png',
    './assets/Icon192.png',
    './assets/Icon512.png',
    './assets/Share.png'
];

// ==========================================
// 1. INSTALAÇÃO (Download Seguro do App Shell)
// ==========================================
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('[Service Worker] Armazenando infraestrutura local na pasta assets...');
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
                        console.log('[Service Worker] Removendo cache antigo expirado:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});

// ==========================================
// 3. ESTRATÉGIAS DE INTERCEPTAÇÃO (FETCH)
// ==========================================
self.addEventListener('fetch', (event) => {
    const url = event.request.url;

    // ESTRATÉGIA CACHE-FIRST: Para dependências externas pesadas (Tailwind, Lucide e Google Fonts)
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
                }).catch((err) => console.log('[Service Worker] Erro ao buscar CDN externa offline:', err));
            })
        );
    } 
    // ESTRATÉGIA NETWORK-FIRST: Para os arquivos locais (index, css, js)
    else {
        event.respondWith(
            fetch(event.request).catch(() => {
                console.log('[Service Worker] Sem sinal de rede. Ativando cache de segurança para:', url);
                return caches.match(event.request);
            })
        );
    }
});
