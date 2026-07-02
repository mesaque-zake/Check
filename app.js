// ==========================================
// 1. UTILITÁRIOS
// ==========================================
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// ==========================================
// 2. COREOGRAFIA DE ABERTURA
// ==========================================
async function playOpeningSequence() {
    console.log("1. Maestro posicionado. Preparando a tela...");
    
    try {
        lucide.createIcons();
        console.log("2. Ícones renderizados com sucesso.");

        const i1 = document.getElementById('icon-1');
        const i2 = document.getElementById('icon-2');
        const i3 = document.getElementById('icon-3');
        const i4 = document.getElementById('icon-4');
        const check = document.getElementById('icon-check');
        const welcome = document.getElementById('welcome-text');
        const signature = document.getElementById('signature');
        const loader = document.getElementById('loader-screen');
        const offlineAlert = document.getElementById('offline-alert');

        if (!i1 || !check) {
            console.log("ERRO: Elementos não encontrados no HTML. Revelando GAS.");
            if (loader) loader.style.display = 'none';
            return;
        }

        console.log("3. Iniciando a coreografia!");
        await sleep(600);

        // MOVIMENTO 2: Troca cruzada com efeito cascata
        i1.style.transform = 'translate(10px, -10px)';
        await sleep(100);
        i2.style.transform = 'translate(10px, 10px)';
        await sleep(100);
        i3.style.transform = 'translate(-10px, -10px)';
        await sleep(100);
        i4.style.transform = 'translate(-10px, 10px)';

        await sleep(500);

        // MOVIMENTO 3: Efeito Estilingue
        i1.style.transform = 'translate(0px, -50px)';
        await sleep(50);
        i2.style.transform = 'translate(50px, 0px)';
        await sleep(50);
        i3.style.transform = 'translate(-50px, 0px)';
        await sleep(50);
        i4.style.transform = 'translate(0px, 50px)';
        
        await sleep(400);

        // MODO OFFLINE
        if (!navigator.onLine) {
            console.log("Status: Sem internet. Congelando animação.");
            [i1, i2, i3, i4].forEach(icon => icon.classList.add('freeze'));
            offlineAlert.classList.remove('hidden');
            await sleep(50);
            offlineAlert.classList.remove('opacity-0', 'translate-y-4');
            offlineAlert.classList.add('opacity-100', 'translate-y-0');
            return;
        }

        // MOVIMENTO 4 & 5: Choque simultâneo no centro
        [i1, i2, i3, i4].forEach(icon => {
            icon.style.transform = 'translate(0px, 0px)';
            icon.classList.remove('shadow-lg');
        });

        await sleep(300);

        [i1, i2, i3, i4].forEach(icon => icon.style.opacity = '0');

        // O Pop do Check!
        check.classList.remove('scale-0', 'opacity-0');
        check.classList.add('pop-effect', 'opacity-100');
        
        await sleep(200);
        check.classList.remove('pop-effect');
        check.classList.add('pop-settle');

        await sleep(300);
        welcome.classList.remove('opacity-0', 'translate-y-4');
        welcome.classList.add('opacity-100', 'translate-y-0');
        
        await sleep(400);
        signature.classList.remove('opacity-0');
        signature.classList.add('opacity-100');

        // FADE OUT
        console.log("4. Finalizando apresentação e revelando o sistema.");
        await sleep(1500);
        loader.classList.add('opacity-0');
        
        setTimeout(() => {
            loader.style.pointerEvents = 'none';
            loader.classList.add('hidden');
        }, 1000);

    } catch (error) {
        console.error("Erro na coreografia: ", error);
        const loader = document.getElementById('loader-screen');
        if (loader) loader.style.display = 'none';
    }
}

// ==========================================
// 3. REGISTRO DO SERVICE WORKER
// ==========================================
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker Registrado: ', reg.scope))
            .catch(err => console.log('Falha no SW: ', err));
    }
}

// ==========================================
// 4. LÓGICA DE INSTALAÇÃO DO PWA
// ==========================================
let deferredPrompt;

// Captura o evento de instalação do Chrome/Android
window.addEventListener('beforeinstallprompt', (e) => {
    // Previne o mini-infobar padrão do mobile de aparecer na hora errada
    e.preventDefault();
    // Guarda o evento para dispararmos depois
    deferredPrompt = e;
    
    // Revela o nosso botão flutuante personalizado
    const installBtn = document.getElementById('install-btn');
    if (installBtn) {
        installBtn.classList.remove('hidden');
        // Usamos um pequeno timeout para permitir a transição suave de opacidade
        setTimeout(() => installBtn.classList.remove('opacity-0', 'translate-y-10'), 50);
    }
});

// Função acionada pelo clique no botão de instalar
window.installPWA = async () => {
    if (!deferredPrompt) return;
    
    // Mostra o prompt nativo
    deferredPrompt.prompt();
    
    // Aguarda a escolha do usuário
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`Escolha de instalação: ${outcome}`);
    
    // Limpa a variável e esconde o botão, independente da escolha
    deferredPrompt = null;
    const installBtn = document.getElementById('install-btn');
    if (installBtn) {
        installBtn.classList.add('opacity-0', 'translate-y-10');
        setTimeout(() => installBtn.classList.add('hidden'), 300);
    }
};

// ==========================================
// 5. DETECÇÃO E AVISO PARA IOS
// ==========================================
function checkIOS() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    // Verifica se já está rodando como PWA instalado
    const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;

    if (isIOS && !isStandalone) {
        const iosPrompt = document.getElementById('ios-prompt');
        if (iosPrompt) {
            iosPrompt.classList.remove('hidden');
            setTimeout(() => iosPrompt.classList.remove('opacity-0', 'translate-y-10'), 50);
            
            // Esconde automaticamente após 10 segundos para não irritar o usuário
            setTimeout(() => {
                iosPrompt.classList.add('opacity-0', 'translate-y-10');
                setTimeout(() => iosPrompt.classList.add('hidden'), 300);
            }, 10000);
        }
    }
}

// ==========================================
// 6. O GATILHO DE INÍCIO (O SEGREDO DE OURO)
// ==========================================
// DOMContentLoaded não espera o iframe do Google carregar, apenas o esqueleto HTML
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        playOpeningSequence();
        registerServiceWorker();
        checkIOS();
    }, 100);
});
