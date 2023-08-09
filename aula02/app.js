'use strict'

// 'elemento'.classList.*toggle* --> 



const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')

function trocarCor (){
    forma1.classList.toggle('amarelo')    
}

function trocarForma(){
    forma2.classList.toggle('circulo')
}

function mudarLado(){
    forma3.classList.toggle('esquerda')
}

function meioCirculo(){
    forma4.classList.toggle('meio-circulo')
}


forma1.addEventListener('click', trocarCor)
forma2.addEventListener('click', trocarForma)
forma3.addEventListener('click', mudarLado)
forma4.addEventListener('click', meioCirculo)
