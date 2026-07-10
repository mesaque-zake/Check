/**
 * ==========================================
 * MOTOR LÓGICO PRINCIPAL (CORE V8)
 * COREOGRAFIA "EFEITO ARPÃO" (IMPACTO & VÓRTICE)
 * ==========================================
 */

let iframeLoaded = false;
let deferredPrompt = null;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Monitorização silenciosa do GAS no background
window.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('gas-frame');
    if (iframe) {
        iframe.addEventListener('load', () => {
            console.log("[PWA] Sistema operacional GAS carregado na sombra.");
            iframeLoaded = true;
        });
    }
});

// ==========================================
// COREOGRAFIA DE ABERTURA E MUTAÇÃO
// ==========================================
async function playOpeningSequence() {
    console.log("[PWA] Invocando a dança do ecossistema...");
    
    try {
        lucide.createIcons();

        // Mapeamento: Os 8 Atores (Grade Invisível)
        const icons = [
            document.getElementById('icon-A'),
            document.getElementById('icon-B'),
            document.getElementById('icon-C'),
            document.getElementById('icon-D'),
            document.getElementById('icon-E'),
            document.getElementById('icon-F'),
            document.getElementById('icon-G'),
            document.getElementById('icon-H')
        ];
        
        // Mapeamento: O Clímax
        const monolithBrand = document.getElementById('monolith-brand');
        const glowContainer = document.getElementById('glow-container');
        const glows = [
            document.getElementById('glow-1'),
            document.getElementById('glow-2'),
            document.getElementById('glow-3'),
            document.getElementById('glow-4')
        ];
        
        const signature = document.getElementById('signature');
        const loader = document.getElementById('loader-screen');
        const offlineAlert = document.getElementById('offline-alert');

        // --- ATO 1: O Surgimento de Ways (D) no Centro ---
        icons[3].style.opacity = '1';
        icons[3].style.transform = 'translate(0px, 0px) scale(1)';
        await sleep(400);

        // --- ATO 2: Aparelhos (A) brota e afasta-se de D ---
        icons[0].style.opacity = '1';
        icons[0].style.transform = 'translate(30px, 0px) scale(1)';
        icons[3].style.transform = 'translate(-30px, 0px) scale(1)';
        
        if (signature) {
            signature.classList.remove('opacity-0');
            signature.classList.add('opacity-100');
        }
        await sleep(400);

        // --- ATO 3: Lavagem (B) e Visão (C) fecham o Quadrado 2x2 ---
        icons[1].style.opacity = '1';
        icons[1].style.transform = 'translate(-30px, 30px) scale(1)';
        icons[2].style.opacity = '1';
        icons[2].style.transform = 'translate(30px, -30px) scale(1)';
        
        icons[3].style.transform = 'translate(-30px, -30px) scale(1)';
        icons[0].style.transform = 'translate(30px, 30px) scale(1)';
        await sleep(500);

        // --- ATO 4: A Cascata Elástica Rápida (Grade 6x8) ---
        // 4.1 Relatórios (H)
        icons[7].style.opacity = '1';
        icons[7].style.transform = 'translate(-30px, -30px) scale(1)';
        icons[3].style.transform = 'translate(-90px, -30px) scale(1)';
        await sleep(150);

        // 4.2 Admin (G)
        icons[6].style.opacity = '1';
        icons[6].style.transform = 'translate(30px, -30px) scale(1)';
        icons[2].style.transform = 'translate(30px, -90px) scale(1)';
        await sleep(150);

        // 4.3 Reembolsos (E)
        icons[4].style.opacity = '1';
        icons[4].style.transform = 'translate(-30px, 30px) scale(1)';
        icons[1].style.transform = 'translate(-30px, 90px) scale(1)';
        await sleep(150);

        // 4.4 Mini Games (F)
        icons[5].style.opacity = '1';
        icons[5].style.transform = 'translate(30px, 30px) scale(1)';
        icons[0].style.transform = 'translate(90px, 30px) scale(1)';
        await sleep(700); // Tempo para apreciar a grade pronta

        // ==========================================
        // GATILHO OFFLINE: SHATTER
        // ==========================================
        if (!navigator.onLine) {
            console.log("[PWA] Rede offline. Ativando blindagem e shatter...");
            icons.forEach(icon => icon.classList.add('freeze'));
            await sleep(800);
            icons.forEach(icon => icon.classList.add('shatter'));
            
            // Shatter com direções aleatórias
            icons[0].style.transform = 'translate(260px, 160px) rotate(115deg) scale(0.5)';
            icons[1].style.transform = 'translate(-110px, 290px) rotate(-165deg) scale(0.5)';
            icons[2].style.transform = 'translate(210px, -260px) rotate(145deg) scale(0.5)';
            icons[3].style.transform = 'translate(-260px, -140px) rotate(-135deg) scale(0.5)';
            icons[4].style.transform = 'translate(-250px, 110px) rotate(-105deg) scale(0.5)';
            icons[5].style.transform = 'translate(140px, 240px) rotate(85deg) scale(0.5)';
            icons[6].style.transform = 'translate(290px, -90px) rotate(65deg) scale(0.5)';
            icons[7].style.transform = 'translate(-140px, -290px) rotate(-70deg) scale(0.5)';

            offlineAlert.classList.remove('hidden');
            await sleep(50);
            offlineAlert.classList.remove('opacity-0', 'scale-95');
            offlineAlert.classList.add('opacity-100', 'scale-100');
            return; // Bloqueia a sequência online
        }

        // --- ATO 5: Colapso Gravitacional (A Implosão Real) ---
        console.log("[PWA] Conexão ativa. Iniciando Vórtice...");
        icons.forEach(icon => {
            icon.style.transform = 'translate(0px, 0px) rotate(-180deg) scale(0)';
            icon.style.opacity = '0';
        });
        
        // Sincronização obrigatória: Espera o GAS carregar no fundo antes de prosseguir
        let timeoutCounter = 0;
        while (!iframeLoaded && timeoutCounter < 30) {
            console.log("[PWA] Aguardando servidores do Google...");
            await sleep(500);
            timeoutCounter++;
        }
        await sleep(350); // Exato momento em que os ícones colidiram

        // --- ATO 6: O Impacto e Revelação Flash (SESC iMESA BRASIL) ---
        // O Bloco Flash surge na tela instantaneamente
        monolithBrand.style.opacity = '1';
        monolithBrand.style.transform = 'scale(1)';
        
        if (glowContainer) {
            glowContainer.classList.remove('hidden');
            setTimeout(() => {
                glowContainer.style.opacity = '1';
                glowContainer.style.transform = 'scale(1)';
            }, 50);
        }
        await sleep(600); // Tempo curto de exposição do bloco flash (reto e limpo)

        // --- ATO 7: Instabilidade Tecnológica (Gatilho do Arpão) ---
        // A palavra iMESA entra em sobrecarga sutil
        if (imesaText) {
            imesaText.classList.add('animate-imesa-overload');
        }
        await sleep(300);

        // --- ATO 8: A EXPANSÃO CENTRÍFUGA (O Arpão) ---
        console.log("[PWA] Disparando o Arpão. Buscando o fundo...");
        // As auras individuais correm para as bordas externas da tela
        glows[0].style.transform = 'translate(-35vw, -35vh) scale(1.5)'; // Canto Superior Esq
        glows[1].style.transform = 'translate(35vw, 35vh) scale(1.5)';   // Canto Inferior Dir
        glows[2].style.transform = 'translate(-35vw, 35vh) scale(1.5)';  // Canto Inferior Esq
        glows[3].style.transform = 'translate(35vw, -35vh) scale(1.5)';  // Canto Superior Dir
        
        // Suga a Assinatura antes do vórtice
        if (signature) signature.style.opacity = '0';
        await sleep(500); // Tempo para as auras "pescarem" as bordas

        // --- ATO 9: O VÓRTICE REVERSO (REVELAÇÃO DO GAS) ---
        console.log("[PWA] Vórtice ativado. Rasgando o fundo...");
        // As luzes voltam para o centro em alta velocidade, trazendo a cortina branca
        glows.forEach(glow => {
            glow.style.transform = 'translate(0px, 0px) scale(0)';
            glow.style.opacity = '0';
        });

        // Suga o Texto Monolítico
        monolithBrand.style.transform = 'scale(0)';
        monolithBrand.style.opacity = '0';
        
        // Efeito Elástico de impacto no fundo branco
        loader.style.transition = 'transform 0.4s cubic-bezier(0.85, 0, 0.15, 1), opacity 0.4s ease-in-out';
        loader.style.transform = 'scale(0)';
        loader.style.opacity = '0';
        
        await sleep(400); // Tempo exato do impacto e colapso do fundo branco

        // --- ATO 10: Fim da Cortina ---
        // Desliga a cortina invisível para liberar o toque na interface do GAS
        loader.style.pointerEvents = 'none';
        loader.classList.add('hidden');

    } catch (error) {
        console.error("Falha fatal na física do motor:", error);
        const loader = document.getElementById('loader-screen');
        if (loader) loader.style.display = 'none';
    }
}

// ==========================================
// INFRAESTRUTURA NATIVA DO PWA
// ==========================================
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Blindagem offline ativa: ', reg.scope))
            .catch(err => console.log('Falha no SW: ', err));
    }
}

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const installBtn = document.getElementById('install-btn');
    if (installBtn) {
        installBtn.classList.remove('hidden');
        setTimeout(() => installBtn.classList.remove('opacity-0', 'translate-y-10'), 50);
    }
});

window.installPWA = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`Resposta da instalação: ${outcome}`);
    deferredPrompt = null;
    const installBtn = document.getElementById('install-btn');
    if (installBtn) {
        installBtn.classList.add('opacity-0', 'translate-y-10');
        setTimeout(() => installBtn.classList.add('hidden'), 300);
    }
};

function checkIOS() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;

    if (isIOS && !isStandalone) {
        const iosPrompt = document.getElementById('ios-prompt');
        if (iosPrompt) {
            iosPrompt.classList.remove('hidden');
            setTimeout(() => iosPrompt.classList.remove('opacity-0', 'translate-y-10'), 50);
            setTimeout(() => {
                iosPrompt.classList.add('opacity-0', 'translate-y-10');
                setTimeout(() => iosPrompt.classList.add('hidden'), 300);
            }, 10000);
        }
    }
}

// Histórico e Redirecionador (Proxy do GAS)
window.addEventListener('DOMContentLoaded', () => {
    window.history.replaceState({ state: 'pwa_base' }, '');
    window.history.pushState({ state: 'pwa_active' }, '');
});

window.addEventListener('popstate', (event) => {
    const iframe = document.getElementById('gas-frame');
    if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage({ action: 'back' }, '*');
    }
    window.history.pushState({ state: 'pwa_active' }, '');
});

window.addEventListener('message', (event) => {
    if (event.data && event.data.action === 'exit_app') {
        window.close();
    }
});

// Boot Geral
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        playOpeningSequence();
        registerServiceWorker();
        checkIOS();
    }, 100);
});
