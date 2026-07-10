/**
 * ==========================================
 * MOTOR LÓGICO PRINCIPAL DO PWA (CORE)
 * A COREOGRAFIA DO PLANO B (VÓRTICE DO FUNDO)
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
    console.log("[PWA] Iniciando a dança do ecossistema...");
    
    try {
        lucide.createIcons();

        // Mapeamento: Atores da Dança (Grade 6x8)
        const iA = document.getElementById('icon-A');
        const iB = document.getElementById('icon-B');
        const iC = document.getElementById('icon-C');
        const iD = document.getElementById('icon-D');
        const iE = document.getElementById('icon-E');
        const iF = document.getElementById('icon-F');
        const iG = document.getElementById('icon-G');
        const iH = document.getElementById('icon-H');
        
        // Mapeamento: O Grand Finale
        const monolithBrand = document.getElementById('monolith-brand');
        const imesaText = document.getElementById('mono-imesa-text');
        const glowContainer = document.getElementById('glow-container');
        const officialIcon = document.getElementById('official-icon-card');
        
        const signature = document.getElementById('signature');
        const loader = document.getElementById('loader-screen');
        const offlineAlert = document.getElementById('offline-alert');

        // --- ATO 1: O Surgimento de Ways (D) no Centro ---
        iD.style.opacity = '1';
        iD.style.transform = 'translate(0px, 0px) scale(1)';
        await sleep(400);

        // --- ATO 2: Aparelhos (A) brota e afasta-se de D ---
        iA.style.opacity = '1';
        iA.style.transform = 'translate(30px, 0px) scale(1)';
        iD.style.transform = 'translate(-30px, 0px) scale(1)';
        
        if (signature) {
            signature.classList.remove('opacity-0');
            signature.classList.add('opacity-100');
        }
        await sleep(400);

        // --- ATO 3: Lavagem (B) e Visão (C) fecham o Quadrado 2x2 ---
        iB.style.opacity = '1';
        iB.style.transform = 'translate(-30px, 30px) scale(1)';
        iC.style.opacity = '1';
        iC.style.transform = 'translate(30px, -30px) scale(1)';
        
        iD.style.transform = 'translate(-30px, -30px) scale(1)';
        iA.style.transform = 'translate(30px, 30px) scale(1)';
        await sleep(500);

        // --- ATO 4: A Cascata Elástica (Dispersão na Grade) ---
        // Relatórios (H)
        iH.style.opacity = '1';
        iH.style.transform = 'translate(-30px, -30px) scale(1)';
        iD.style.transform = 'translate(-90px, -30px) scale(1)';
        await sleep(150);

        // Admin (G)
        iG.style.opacity = '1';
        iG.style.transform = 'translate(30px, -30px) scale(1)';
        iC.style.transform = 'translate(30px, -90px) scale(1)';
        await sleep(150);

        // Reembolsos (E)
        iE.style.opacity = '1';
        iE.style.transform = 'translate(-30px, 30px) scale(1)';
        iB.style.transform = 'translate(-30px, 90px) scale(1)';
        await sleep(150);

        // Mini Games (F)
        iF.style.opacity = '1';
        iF.style.transform = 'translate(30px, 30px) scale(1)';
        iA.style.transform = 'translate(90px, 30px) scale(1)';
        await sleep(700);

        // ==========================================
        // GATILHO OFFLINE: SHATTER
        // ==========================================
        if (!navigator.onLine) {
            console.log("[PWA] Queda de rede. Invocando shatter offline...");
            
            [iA, iB, iC, iD, iE, iF, iG, iH].forEach(icon => icon.classList.add('freeze'));
            await sleep(800);

            [iA, iB, iC, iD, iE, iF, iG, iH].forEach(icon => icon.classList.add('shatter'));
            
            iD.style.transform = 'translate(-260px, -140px) rotate(-135deg) scale(0.5)';
            iA.style.transform = 'translate(260px, 160px) rotate(115deg) scale(0.5)';
            iH.style.transform = 'translate(-140px, -290px) rotate(-70deg) scale(0.5)';
            iC.style.transform = 'translate(210px, -260px) rotate(145deg) scale(0.5)';
            iG.style.transform = 'translate(290px, -90px) rotate(65deg) scale(0.5)';
            iE.style.transform = 'translate(-250px, 110px) rotate(-105deg) scale(0.5)';
            iB.style.transform = 'translate(-110px, 290px) rotate(-165deg) scale(0.5)';
            iF.style.transform = 'translate(140px, 240px) rotate(85deg) scale(0.5)';

            offlineAlert.classList.remove('hidden');
            await sleep(50);
            offlineAlert.classList.remove('opacity-0', 'scale-95');
            offlineAlert.classList.add('opacity-100', 'scale-100');
            return; 
        }

        // --- ATO 5: A Implosão dos 8 Ícones ---
        [iA, iB, iC, iD, iE, iF, iG, iH].forEach(icon => {
            icon.style.transform = 'translate(0px, 0px) rotate(-180deg) scale(0)';
            icon.style.opacity = '0';
        });
        
        // Sobreposição de tempo para não haver "corte seco"
        await sleep(350); 

        // --- ATO 6: A Revelação do Monolito e da Energia ---
        if (glowContainer) {
            glowContainer.classList.remove('hidden');
            setTimeout(() => {
                glowContainer.style.opacity = '1';
                glowContainer.style.transform = 'scale(1)';
            }, 50);
        }

        if (monolithBrand) {
            monolithBrand.style.opacity = '1';
            monolithBrand.style.transform = 'scale(1)';
        }

        // Sincronização obrigatória: Espera o GAS carregar no fundo antes de prosseguir
        let timeoutCounter = 0;
        while (!iframeLoaded && timeoutCounter < 30) {
            console.log("[PWA] Aguardando servidores do Google...");
            await sleep(500);
            timeoutCounter++;
        }
        await sleep(1200); // Tempo para o usuário apreciar o design da marca

        // --- ATO 7: Sobrecarga (O Gatilho) ---
        if (imesaText) {
            imesaText.classList.add('animate-imesa-overload');
        }
        await sleep(400);

        // --- ATO 8: O VÓRTICE REVERSO (REVELAÇÃO DO GAS) ---
        console.log("[PWA] Vórtice ativado. Rasgando o fundo...");
        
        // Suga o Texto e a Nuvem de Energia para o marco zero
        monolithBrand.style.transform = 'scale(0)';
        monolithBrand.style.opacity = '0';
        
        glowContainer.style.transform = 'scale(0) rotate(540deg)';
        glowContainer.style.opacity = '0';
        
        // Suga a Assinatura
        if (signature) signature.style.opacity = '0';

        // O GRANDE TRUQUE: Deixa o fundo branco transparente, revelando o GAS imediatamente
        loader.classList.remove('bg-slate-50');
        loader.classList.add('bg-transparent');
        
        await sleep(300); // Exato momento em que tudo esmagou no centro

        // --- ATO 9: O Selo Oficial do iMesa (Sobre o GAS) ---
        // O Ícone "estoura" de dentro do vórtice, já com a interface escura ao fundo
        officialIcon.style.opacity = '1';
        officialIcon.style.transform = 'scale(1.15)';
        await sleep(150); // Efeito de estilingue
        officialIcon.style.transform = 'scale(1)';
        
        // Tempo que o ícone oficial reinará na tela dizendo "Estou pronto"
        await sleep(750);

        // --- ATO 10: Trabalho Feito ---
        // O Ícone encolhe super rápido, limpando o palco
        officialIcon.style.transition = 'transform 0.3s cubic-bezier(0.85, 0, 0.15, 1), opacity 0.3s ease-in-out';
        officialIcon.style.transform = 'scale(0)';
        officialIcon.style.opacity = '0';
        
        await sleep(300);

        // Desliga a cortina invisível para liberar o toque na tela do GAS
        loader.style.pointerEvents = 'none';
        loader.classList.add('hidden');

    } catch (error) {
        console.error("Falha no motor lógico:", error);
        const loader = document.getElementById('loader-screen');
        if (loader) loader.style.display = 'none';
    }
}

// ==========================================
// INFRAESTRUTURA DE INSTALAÇÃO
// ==========================================
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('SW Operacional: ', reg.scope))
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
    await deferredPrompt.userChoice;
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

// ==========================================
// PROXY DE REDIRECIONAMENTO DE HISTÓRICO
// ==========================================
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
