// Função utilitária para aguardar tempo
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function playOpeningSequence() {
    console.log("1. Maestro posicionado. Preparando a tela...");
    
    try {
        // Agora sim, manda o Lucide criar os ícones após a tela existir
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
        console.log("4. Finalizando apresentação e revelando o Sesc Mesa Brasil.");
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

// O segredo de ouro: window.onload garante que o HTML e o CSS terminaram de ser lidos
window.onload = () => {
    // Dá um pequeno fôlego extra de 100 milissegundos para o navegador se organizar
    setTimeout(() => {
        playOpeningSequence();
        registerServiceWorker();
    }, 100);
};

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker Registrado: ', reg.scope))
            .catch(err => console.log('Falha no SW: ', err));
    }
}
