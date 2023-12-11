import * as controls from "./elements.js";
import * as actions from './actions.js';
import * as el from './elements.js'
import state from "./state.js";
import { updateDisplay } from "./timer.js";



// CAPTURA OS EVENTOS DE CLIQUES DA APLICAÇÃO
export function registerControls(){
    controls.controls.addEventListener('click', (event) =>{
        const action = event.target.dataset.action
        if(typeof actions[action] != "function"){
            return;
        }
        actions[action]()
    })
}

export function setMinutes(){
    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ""
    })

    el.minutes.onkeypress = (event) => /\d/.test(event.key) // /\d/ = se nao for um numero retorne false e nao mude

    el.minutes.addEventListener('blur', (event) =>{
        let time = Number(event.currentTarget.textContent)
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    } )
}


// Apertar Enter para começar o timer
window.addEventListener('keydown', pressEnterToStart)
function pressEnterToStart(event){
    if(event.key === 'Enter'){
        actions.toggleRunning()
    }
}

window.addEventListener('keydown', pressEscapeToReset)
function pressEscapeToReset(event){
    if(event.key === 'Escape'){
        actions.reset()
    }
}



export function registerControlsSounds(){
    controls.controlsSounds.addEventListener('click', (event) =>{
        const buttonSound = event.target.dataset.music

        if(typeof actions[buttonSound] != "function"){
                return;
            }
            
        actions[buttonSound]()
    })
}


