'use strict'

/**********************************
 *   Para transformar em número:  *
 * parseInt()                     *
 * parseFloat()                   *
 * Number()                       *
 * +'element'                     *
 * ~~'element'                    *
 **********************************/


////
//Item 1 - Função SOMAR
const buttonSomar = document.getElementById('somar')

function somar(){
    const numero1 = parseInt(document.getElementById('numero1').value)
    const numero2 = parseInt(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')
    
    const total = numero1 + numero2
    
    resultado.textContent = total
}

buttonSomar.addEventListener('click', somar)
//Fim do Item 1
////


////
//Item 2 - Função IDENTIFICAR
const botaoIdentificar = document.getElementById('identificar')

function identificar(){
    const numero = Number(document.getElementById('numero-item2').value)
    const resultado = document.getElementById('resultado-item2')
    let msg
    
    if(numero>0){
        msg = 'positivo'
    }else if(numero<0){
        msg= 'negativo'
    }else{
        msg = 'zero'
    }
    resultado.textContent = msg 
}

botaoIdentificar.addEventListener('click', identificar)
//Fim do Item 2
////


////
//Item 3 - Função CALCULAR MEDIA
const botaoMedia = document.getElementById('calcular_media')
const media = document.getElementById('media') 

function calcularMedia(){
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)
    const nota4 = Number(document.getElementById('nota4').value)

    const total = (nota1 + nota2 + nota3 + nota4)/4

    media.textContent = total

    if(total>=7){
        alert('APROVADO!!')
    }else if(total<7){
        const notaReserva = prompt('Digite a quinta nota:')
        const novaMedia = (Number(notaReserva) + total)/2
        media.textContent = novaMedia
        
        if(novaMedia>=5){
            alert('Aprovado em exame!!')
        }else{
            alert('Reprovado!')
        }
    }


}

botaoMedia.addEventListener('click', calcularMedia)