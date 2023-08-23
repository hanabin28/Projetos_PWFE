'use strict'

/**************************************************************
 * .split |-> Pega uma STRING e a transforma em ARRAY(matriz) *
 * ---------------------------------------------------------- *
 * .createElement('') |-> Cria um novo elemento,              *
 *                    | especificado pelo nome da             *
 *                    | tag                                   *
 * ---------------------------------------------------------- *
 * .appendChildren('') |-> Anexa o elemento criado a outro    *
 **************************************************************/


////
//Item 2 - MOSTRAR TODOS OS NUMEROS -
const botaoMostrarTodosNumeros = document.getElementById('botao-mostrar-todos-numeros')

function mostrarTodosNumeros(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-todos-numeros')

    container.replaceChildren('')
    const ultimoIndice =  numeros.length

    for(let indice=0; indice<ultimoIndice; indice++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[indice]
        container.appendChild(novoSpan)
    }
}

botaoMostrarTodosNumeros.addEventListener('click', mostrarTodosNumeros)
//Fim do Item 2
////


////
//Item 3 - MOSTRAR NUMEROS PARES
const botaoMostrarTodosNumerosPares = document.getElementById('botao-mostrar-numeros-pares')

function mostrarNumerosPares(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-pares')

    container.replaceChildren('')
    const ultimoIndice=numeros.length

    for(let indice=0; indice<ultimoIndice; indice++){
        if(numeros[indice] % 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent=numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

botaoMostrarTodosNumerosPares.addEventListener('click', mostrarNumerosPares)
//Fim do Item 3
////


////
//Item 4 - MOSTRAR NÚMEROS ÍMPARES
const botaoMostrarTodosNumerosImpares = document.getElementById('botao-mostrar-numeros-impares')

function mostrarNumerosImpares(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-impares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let indice=0; indice<ultimoIndice; indice++){
        if(numeros[indice] % 2 == 1){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

botaoMostrarTodosNumerosImpares.addEventListener('click', mostrarNumerosImpares)
//Fim do Item 4
////


////
//Item 5 - MULTIPLOS DE TRÊS
const botaoMostrarMultiplosTres = document.getElementById('botao-mostrar-multiplos-tres')

function mostrarMultiplosTres(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-multiplos-tres')

    container.replaceChildren('')
    const ultimoIndice=numeros.length

    for(let indice=0; indice<ultimoIndice; indice++){
        if(numeros[indice] % 3 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

botaoMostrarMultiplosTres.addEventListener('click', mostrarMultiplosTres)
//Fim do Item 5
////


////
//Item 6 - MULTIPLOS DE TRÊS E QUATRO
const botaoMostrarMultiplosTresQuatro = document.getElementById('botao-mostrar-multiplos-tres-quatro')

function mostrarMultiplosTresQuatro(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-multiplos-tres-quatro')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let indice=0; indice<ultimoIndice; indice++){
        if(numeros[indice] % 3 == 0 && numeros[indice] % 4 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

botaoMostrarMultiplosTresQuatro.addEventListener('click', mostrarMultiplosTresQuatro)
//Fim do Item 6
////


////
//Item 7 - MULTIPLOS DE TRÊS OU QUATRO
const botaoMostrarMultiplosTresOuQuatro = document.getElementById('botao-mostrar-multiplos-tres-ou-quatro')

function mostrarMultiplosTresOuQuatro(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-multiplos-tres-ou-quatro')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let indice=0; indice<ultimoIndice; indice++){
        if(numeros[indice] % 3 == 0 || numeros[indice] % 4 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

botaoMostrarMultiplosTresOuQuatro.addEventListener('click', mostrarMultiplosTresOuQuatro)
//Fim do Item 7
////


////
//Item 8 - PRÓXIMO NÚMERO

const botaoMostrarProximoNumero = document.getElementById('botao-mostrar-proximo-numero')

function mostrarProximoNumero(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-proximo-numero')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let indice=0; indice<ultimoIndice; indice++){
        if(numeros[indice]++){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

botaoMostrarProximoNumero.addEventListener('click', mostrarProximoNumero)
//Fim do Item 8
////


////
//Item 9 - PRÓXIMO NÚMERO PAR

const botaoMostrarProximoNumeroPar = document.getElementById('botao-mostrar-proximo-numero-par')

function mostrarProximoNumeroPar(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-proximo-numero-par')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let indice=0; indice<ultimoIndice; indice++){
        if(numeros[indice]% 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[indice])+2
            container.appendChild(novoSpan)
        }else if(numeros[indice]% 2 == 1){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[indice])+1
            container.appendChild(novoSpan)
        }
    }
}

botaoMostrarProximoNumeroPar.addEventListener('click', mostrarProximoNumeroPar)
//Fim do Item 9
////


////
//Item 10 - DOBRO DO NÚMERO

const botaoMostrarDobroNumero = document.getElementById('botao-mostrar-dobro-numero')

function mostrarDobroNumero(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-dobro-numero')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let indice=0; indice<ultimoIndice; indice++){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]*2
            container.appendChild(novoSpan)
    }
}
botaoMostrarDobroNumero.addEventListener('click', mostrarDobroNumero)
//Fim do Item 10
////