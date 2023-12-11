// AÇÕES DA APLICAÇÃO
import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import  './events.js'
import * as sounds from './sounds.js'


// O NOME DAS FUNCOES, TEM QUE SER IGUAL AO NOME DO DATA-ACTION, LÁ NO HTML.
export function toggleRunning(){
   state.isRunning = document.documentElement.classList.toggle('running')
   
    timer.countDown()
    sounds.buttonPressAudio.play()
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    sounds.kichenTimer.play()
    timer.updateDisplay()

    sounds.buttonPressAudio.play()

}

export function set(){
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()

    sounds.buttonPressAudio.play()

}


export function up(){  

    
    if(state.minutes == 60){
        return
    }
    
    sounds.buttonPressAudio.play()
    state.minutes = state.minutes + 5
    el.minutes.textContent = String(state.minutes).padStart(2, '0')
}

export function low(){   

    
    if(state.minutes == 0){
        return
    }
    sounds.buttonPressAudio.play()

    state.minutes = state.minutes - 5
    el.minutes.textContent = String(state.minutes).padStart(2, '0')
}

// SOUNDS-BG


export function forest(){

    state.music = document.getElementById('forest').classList.toggle('musicOn')

    sounds.florestSound.play()
    if(state.music === false){
        sounds.florestSound.pause()
    }
    
}

export function rain(){
    state.music = document.getElementById('rain').classList.toggle('musicOn')
    
    sounds.rainSound.play()
    if(state.music === false){
        sounds.rainSound.pause()
    }
}

export function coffe(){
    state.music = document.getElementById('coffe').classList.toggle('musicOn')
    
    sounds.coffeSound.play()
    if(state.music === false){
        sounds.coffeSound.pause()
    }

}

export function fire(){
    state.music = document.getElementById('fire').classList.toggle('musicOn')
    sounds.fireSound.play()
    if(state.music === false){
        sounds.fireSound.pause()
    }
    
}


