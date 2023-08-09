'use strict'

// 'elemento'.classList.*toggle* --> 



const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')


function trocarCor (){
    forma1.classList.toggle('roxo')    
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

function mudarTamanho(){
    forma5.classList.toggle('aumentar')
}

function mudarTamanho2(){
    forma6.classList.toggle('diminuir')
}

function transparente(){
    forma7.classList.toggle('transparente')
}


forma1.addEventListener('click', trocarCor)
forma2.addEventListener('click', trocarForma)
forma3.addEventListener('click', mudarLado)
forma4.addEventListener('click', meioCirculo)
forma5.addEventListener('click', mudarTamanho)
forma6.addEventListener('click', mudarTamanho2)
forma7.addEventListener('click', transparente)