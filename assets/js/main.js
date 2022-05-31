// HTML ELEMENT

const dexter = document.querySelector('.dexter')
const timer = document.querySelector('.timer')
const missao = document.querySelector('.missao')
const dispPontos = document.querySelector('.display-pontos')

// SETUP

let timerNum = 10
let piolhos = 100
let morto = false
let piolhoOn = true
let pressed = false
let timerInt

// FUNCTION

function killPiolho() {
    piolhos -= 1
    dispPontos.innerHTML = piolhos.toFixed()

    if (piolhos == 90) missao.remove()
    if(piolhos <= 0) {
        clearInterval(timerInt)
        piolhoOn = false
    }
}

function timerOn() {
    timerInt = setInterval(()=>{
        if (timerNum > 0) {
            timerNum-=1
            timer.innerHTML = timerNum
        } else if (timerNum == 0) {
            dexter.remove()
            morto = true
            timer.innerHTML = 'OS PIOLHOS COMERAM DEXTER'
        }
    }, 1000)
}

// EVENT LISTENER

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 32 && !morto && piolhoOn && !pressed) {
        pressed = true
        killPiolho()
        dexter.style.animationName = 'none'
        dexter.style.marginLeft = '-104px'       
    }
})

document.addEventListener('keyup', (e) => {   
    if (e.keyCode === 32) {
        dexter.style.animationName = 'idle'
        pressed = false
    }
})

// MISC

timerOn()