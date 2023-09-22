'use strict'

const lampImg = document.getElementById('lampada')
const buttonOn = document.getElementById('btn-lamp-on') 
const buttonOff = document.getElementById('btn-lamp-off')

function lampOn(){
    lampImg.src = './img/ligada.jpg'
}

buttonOn.addEventListener('click', lampOn)