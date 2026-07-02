// Renderiza os ícones do Lucide
lucide.createIcons();

// Função utilitária para aguardar tempo em milissegundos
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Orquestrador da Animação
async function playOpeningSequence() {
    const i1 = document.getElementById('icon-1'); // Aparelhos (Azul)
    const i2 = document.getElementById('icon-2'); // Lavagem (Verde)
    const i3 = document.getElementById('icon-3'); // Visão Geral (Amarelo)
    const i4 = document.getElementById('icon-4'); // Relatórios (Vermelho)
    const check = document.getElementById('icon-check');
    const welcome = document.getElementById('welcome-text');
    const signature = document.getElementById('signature');
    const loader = document.getElementById('loader-screen');
    const offlineAlert = document.getElementById('offline-alert');

    // Tempo inicial de respiro para o usuário ver a tela limpa
    await sleep(600);

    // MOVIMENTO 2: Troca cruzada com efeito cascata
    i1.style.transform = 'translate(10px, -10px)'; // 1 vai para a posição do 2
    await sleep(100);
    i2.style.transform = 'translate(10px, 10px)';  // 2 vai para o 4
    await sleep(100);
    i3.style.transform = 'translate(-10px, -10px)';// 3 vai para o 1
    await sleep(100);
    i4.style.transform = 'translate(-10px, 10px)'; // 4 vai para o 3

    await sleep(500);

    // MOVIMENTO 3: Efeito Estilingue (Antecipação em cruzeta)
    i1.style.transform = 'translate(0px, -50px)'; // Topo
    await sleep(50);
    i2.style.transform = 'translate(50px, 0px)';  // Direita
    await sleep(50);
    i3.style.transform = 'translate(-50px, 0px)'; // Esquerda
    await sleep(50);
    i4.style.transform = 'translate(0px, 50px)';  // Fundo
    
    await sleep(400);

    // VERIFICAÇÃO OFFLINE: Se não houver rede, congela a tela aqui
    if (!navigator.onLine) {
        [i1, i2, i3, i4].forEach(icon => icon.classList.add('freeze'));
        
        // Exibe tela offline
        offlineAlert.classList.remove('hidden');
        await sleep(50); // delay para renderização
        offlineAlert.classList.remove('opacity-0', 'translate-y-4');
        offlineAlert.classList.add('opacity-100', 'translate-y-0');
        return; // Interrompe a animação e não revela o GAS
    }

    // MOVIMENTO 4 & 5: Choque simultâneo e Pop
    [i1, i2, i3, i4].forEach(icon => {
        icon.style.transform = 'translate(0px, 0px)';
        icon.classList.remove('shadow-lg'); // Retira sombra antes de sumir
    });

    // Aguarda o tempo exato do choque no centro
    await sleep(300);

    // Oculta os coloridos instantaneamente
    [i1, i2, i3, i4].forEach(icon => icon.style.opacity = '0');

    // O Pop do Check!
    check.classList.remove('scale-0', 'opacity-0');
    check.classList.add('pop-effect', 'opacity-100');
    
    await sleep(200);
    check.classList.remove('pop-effect');
    check.classList.add('pop-settle');

    // Revela a mensagem e a assinatura com slide e fade
    await sleep(300);
    welcome.classList.remove('opacity-0', 'translate-y-4');
    welcome.classList.add('opacity-100', 'translate-y-0');
    
    await sleep(400);
    signature.classList.remove('opacity-0');
    signature.classList.add('opacity-100');

    // FADE OUT DA CORTINA: Revela o Sesc Mesa Brasil já carregado atrás
    await sleep(1500); // Tempo final lendo a mensagem
    loader.classList.add('opacity-0');
    
    // Remove o loader do fluxo para permitir o clique no GAS
    setTimeout(() => {
        loader.style.pointerEvents = 'none';
        loader.classList.add('hidden');
    }, 1000);
}

// Inicia a orquestração
window.addEventListener('load', () => {
    playOpeningSequence();
    registerServiceWorker();
});

// Registra o Service Worker para funcionamento do PWA e Cache Offline
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker Registrado: ', reg.scope))
            .catch(err => console.log('Falha ao registrar Service Worker: ', err));
    }
}
