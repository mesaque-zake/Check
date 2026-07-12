let iframeLoaded = false;
let deferredPrompt = null;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

window.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('gas-frame');
    if (iframe) {
        iframe.addEventListener('load', () => {
            console.log("[PWA] GAS carregado no fundo.");
            iframeLoaded = true;
        });
    }
});

async function playOpeningSequence() {
    try {
        lucide.createIcons();

        const icons = [
            document.getElementById('icon-A'), document.getElementById('icon-B'),
            document.getElementById('icon-C'), document.getElementById('icon-D'),
            document.getElementById('icon-E'), document.getElementById('icon-F'),
            document.getElementById('icon-G'), document.getElementById('icon-H')
        ];

        const signature = document.getElementById('signature');
        const loader = document.getElementById('loader-screen');
        const offlineAlert = document.getElementById('offline-alert');
        const logo = document.getElementById('logo-wrapper');

        // ATO 1: D
        icons[3].style.opacity = '1';
        icons[3].style.transform = 'translate(0px, 0px) scale(1)';
        await sleep(400);

        // ATO 2: A e D
        icons[0].style.opacity = '1'; icons[0].style.transform = 'translate(30px, 0px) scale(1)';
        icons[3].style.transform = 'translate(-30px, 0px) scale(1)';
        if (signature) { signature.classList.remove('opacity-0'); signature.classList.add('opacity-100'); }
        await sleep(400);

        // ATO 3: B e C (Quadrado)
        icons[1].style.opacity = '1'; icons[1].style.transform = 'translate(-30px, 30px) scale(1)';
        icons[2].style.opacity = '1'; icons[2].style.transform = 'translate(30px, -30px) scale(1)';
        icons[3].style.transform = 'translate(-30px, -30px) scale(1)';
        icons[0].style.transform = 'translate(30px, 30px) scale(1)';
        await sleep(500);

        // ATO 4: Cascata
        icons[7].style.opacity = '1'; icons[7].style.transform = 'translate(-30px, -30px) scale(1)'; icons[3].style.transform = 'translate(-90px, -30px) scale(1)'; await sleep(150);
        icons[6].style.opacity = '1'; icons[6].style.transform = 'translate(30px, -30px) scale(1)'; icons[2].style.transform = 'translate(30px, -90px) scale(1)'; await sleep(150);
        icons[4].style.opacity = '1'; icons[4].style.transform = 'translate(-30px, 30px) scale(1)'; icons[1].style.transform = 'translate(-30px, 90px) scale(1)'; await sleep(150);
        icons[5].style.opacity = '1'; icons[5].style.transform = 'translate(30px, 30px) scale(1)'; icons[0].style.transform = 'translate(90px, 30px) scale(1)'; await sleep(700);

        // MODO OFFLINE ORIGINAL
        if (!navigator.onLine) {
            icons.forEach(icon => icon.classList.add('freeze'));
            await sleep(800);
            icons.forEach(icon => icon.classList.add('shatter'));

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
            return;
        }

        // --- NOVA INICIAÇÃO 🪐 ---

        // ATO 5: COLISÃO NO CENTRO
        icons.forEach(icon => {
            icon.classList.remove('actor');
            icon.style.transition = 'transform 0.3s ease-in';
            icon.style.transform = 'translate(0px, 0px) scale(0.1)';
        });

        if (signature) {
            signature.style.transition = 'opacity 0.2s';
            signature.style.opacity = '0';
        }

        await sleep(300);

        // Transformação em Auras
        const auraColors = [
            { core: 'rgba(96, 165, 250, 0.6)', outer: 'rgba(147, 197, 253, 0.25)' },
            { core: 'rgba(52, 211, 153, 0.6)', outer: 'rgba(110, 231, 183, 0.25)' },
            { core: 'rgba(251, 191, 36, 0.6)', outer: 'rgba(253, 230, 138, 0.25)' },
            { core: 'rgba(248, 113, 113, 0.6)', outer: 'rgba(252, 165, 165, 0.25)' },
            { core: 'rgba(192, 132, 252, 0.6)', outer: 'rgba(216, 180, 254, 0.25)' },
            { core: 'rgba(96, 165, 250, 0.6)', outer: 'rgba(147, 197, 253, 0.25)' },
            { core: 'rgba(52, 211, 153, 0.6)', outer: 'rgba(110, 231, 183, 0.25)' },
            { core: 'rgba(192, 132, 252, 0.6)', outer: 'rgba(216, 180, 254, 0.25)' }
        ];

        icons.forEach((icon, index) => {
            icon.innerHTML = ''; 
            icon.className = 'absolute z-20 aura-mode'; 
            icon.style.setProperty('--aura-core', auraColors[index].core);
            icon.style.setProperty('--aura', auraColors[index].outer);
        });

        await sleep(50); 

        // ATO 6: NASCIMENTO DO LOGO
        logo.style.transform = 'scale(1)'; 
        logo.style.opacity = '1';

        icons.forEach(icon => icon.style.transition = 'transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)');
        
        icons[0].style.transform = 'translate(-40px, -20px) scale(1)';
        icons[1].style.transform = 'translate(30px, -40px) scale(0.9)';
        icons[2].style.transform = 'translate(-20px, 50px) scale(1.1)';
        icons[3].style.transform = 'translate(45px, 20px) scale(1)';
        icons[4].style.transform = 'translate(-50px, 10px) scale(1.2)';
        icons[5].style.transform = 'translate(20px, 40px) scale(0.8)';
        icons[6].style.transform = 'translate(0px, -45px) scale(1)';
        icons[7].style.transform = 'translate(10px, -10px) scale(1.3)';

        await sleep(1500); 

        // ATO 7: RESPIRAÇÃO / EXPANSÃO DESPROPORCIONAL
        icons.forEach(icon => icon.style.transition = 'transform 2.0s cubic-bezier(0.25, 1, 0.5, 1)');
        
        icons[0].style.transform = 'translate(-90px, -30px) scale(1.4)';
        icons[1].style.transform = 'translate(120px, -90px) scale(1.1)';
        icons[2].style.transform = 'translate(-60px, 110px) scale(1.6)';
        icons[3].style.transform = 'translate(80px, 50px) scale(1.3)';
        icons[4].style.transform = 'translate(-140px, 20px) scale(1.7)';
        icons[5].style.transform = 'translate(50px, 130px) scale(1.2)';
        icons[6].style.transform = 'translate(10px, -120px) scale(1.5)';
        icons[7].style.transform = 'translate(30px, -50px) scale(1.8)';

        await sleep(1800);

        // Verifica se o GAS carregou antes do final épico
        let timeoutCounter = 0;
        while (!iframeLoaded && timeoutCounter < 30) {
            await sleep(500);
            timeoutCounter++;
        }

        // ATO 8: IMPLOSÃO OFICIAL (O SNAP)
        // O fundo branco da tela dissolve para revelar o iFrame
        loader.style.transition = 'background-color 0.4s ease-out';
        loader.style.backgroundColor = 'transparent';

        // Enquanto o iframe aparece no fundo, as auras e logo sofrem a implosão VISUAL
        icons.forEach(icon => {
            icon.style.transition = 'transform 0.5s cubic-bezier(0.9, 0, 0.1, 1)';
            icon.style.transform = 'translate(0px, 0px) scale(0)';
        });
        
        logo.style.transition = 'transform 0.5s cubic-bezier(0.9, 0, 0.1, 1)';
        logo.style.transform = 'scale(0)';

        await sleep(500);

        loader.style.pointerEvents = 'none';
        loader.classList.add('hidden');

    } catch (error) {
        console.error("Erro:", error);
        const loader = document.getElementById('loader-screen');
        if (loader) loader.style.display = 'none';
    }
}

// INSTALAÇÃO DO PWA E SW
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js').catch(err => console.log('SW Erro: ', err));
    }
}

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); deferredPrompt = e;
    const installBtn = document.getElementById('install-btn');
    if (installBtn) {
        installBtn.classList.remove('hidden');
        setTimeout(() => installBtn.classList.remove('opacity-0', 'translate-y-10'), 50);
    }
});

window.installPWA = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null;
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
            iosPrompt.classList.remove('hidden'); setTimeout(() => iosPrompt.classList.remove('opacity-0', 'translate-y-10'), 50);
            setTimeout(() => { iosPrompt.classList.add('opacity-0', 'translate-y-10'); setTimeout(() => iosPrompt.classList.add('hidden'), 300); }, 10000);
        }
    }
}

window.addEventListener('DOMContentLoaded', () => { window.history.replaceState({ state: 'pwa_base' }, ''); window.history.pushState({ state: 'pwa_active' }, ''); });
window.addEventListener('popstate', () => {
    const iframe = document.getElementById('gas-frame');
    if (iframe && iframe.contentWindow) iframe.contentWindow.postMessage({ action: 'back' }, '*');
    window.history.pushState({ state: 'pwa_active' }, '');
});
window.addEventListener('message', (event) => { if (event.data && event.data.action === 'exit_app') window.close(); });

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => { playOpeningSequence(); registerServiceWorker(); checkIOS(); }, 100);
});