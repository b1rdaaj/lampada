const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');

function lampOn () {
    if (!isLampBroken()){
        lamp.src = './imagens/ligada.jpg';
    }
}

function lampOff () {
    if (!isLampBroken()){
    lamp.src = './imagens/desligada.jpg';
    }  
}

function lampBroken () {
    lamp.src = './imagens/quebrada.jpg';
}

function isLampBroken () {
    return lamp.src.indexOf('quebrada') > -1;
}

function lampOnOff() {
    if (turnOnOff.textContent === 'Ligar') {
        lampOn();
        turnOnOff.textContent = 'Desligar';
    } else {
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}

turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);

// Desafio: Ao inves de dois botoes, usar apenas um para ligar e desligar a lampada.