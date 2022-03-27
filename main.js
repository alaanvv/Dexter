// ELEMENTOS HTML

const dexter = document.querySelector('.dexter')
const timer = document.querySelector('.timer')
const missao = document.querySelector('.missao')
const guia = document.querySelector('.guia')
const dispPontos = document.querySelector('.display-pontos')

// VARIÁVEIS GLOBAIS

let timerNum = 10
let dif = 100
let pioi = 100
let clicado = false
let morto = false
let warOn = false
let idle = true
let pioiOn = true
let timerInt

// FUNÇÕES

function attPioi() {
    pioi = pioi.toFixed()
    attNivelPioi()
    dispPontos.innerHTML = pioi
}

function attNivelPioi() {
    if (pioi<=80) guia.classList.add('inv')
    if (pioi<=60) missao.classList.add('inv')
    if(pioi<=0) {
        clearInterval(timerInt)
        pioiOn = false
    }
}

function idleOn() {
    setInterval(() => {
        if (idle) {
            dexter.style.marginLeft = '56px'
            setTimeout(() => {
                dexter.style.marginLeft = '216px'
            }, 200);
        }
    }, 500)
}

function timerOn() {
    timerInt = setInterval(()=>{
        if (timerNum>0) {
            console.log('a')
            timerNum-=1
            timer.innerHTML = timerNum
        }
        if (timerNum === 0) {
            morto= true
            timer.innerHTML = 'OS PIOLHOS COMERAM DEXTER'        
            dexter.classList.add('inv')
        }
    },1000)
}

// EVENT LISTENER

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 32 && !morto && pioiOn) {
        if (clicado) return
        warOn = true
        clicado=true
        pioi -= 1
        attPioi()
        idle = false
        dexter.style.marginLeft = '-104px'       
    }
})

document.addEventListener('keyup', (e) => {   
    if (e.keyCode === 32) {
        clicado=false
        idle = true       
        dexter.style.marginLeft = '216px'  
    }
})

// OUTROS

idleOn()
timerOn()