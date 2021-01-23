const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isPulando = false;
let posicao = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isPulando) {
            pula();
        }
    }
}

function pula() {
    isPulando = true

    let upIntervalo = setInterval(() => {
        if (posicao >= 150) {
            clearInterval(upIntervalo);
            
            let downIntervalo = setInterval(() => {
                if (posicao <= 0) {
                    clearInterval(downIntervalo);
                    isPulando = false;
                } else {
                    posicao -= 20;
                    dino.style.bottom = posicao + 'px';
                }
            }, 20);
        } else {
            posicao += 20;
            dino.style.bottom = posicao + 'px';
        }
    }, 20);
}

function criaCactus() {
    const cactus = document.createElement('div');
    let posicaoCactus = 1000;
    let tempoAleatorio = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (posicaoCactus < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (posicaoCactus > 0 && posicaoCactus < 60 && posicao < 60) {
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        } else {
            posicaoCactus -= 10;
            cactus.style.left = posicaoCactus + 'px';
        }
    }, 20)

    setTimeout(criaCactus, tempoAleatorio);
}

criaCactus();
document.addEventListener('keyup', handleKeyUp);