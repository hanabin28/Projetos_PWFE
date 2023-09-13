'use strict'

const spanEndereco = document.getElementById('span-endereco')
const spanBairro = document.getElementById('span-bairro')
const spanCidade = document.getElementById('span-cidade')
const spanEstado = document.getElementById('span-estado')
const input = document.getElementById('digitar-cep')


function pegarDados(){
    
}


async function mostrarDados(){
    
    const url = 'https://viacep.com.br/ws/01001000/json/'

    if (input != '') {
        url = 'https://viacep.com.br/ws/' + input + '/json/'
    }

    const response = await fetch(url)
    const cep = await response.json()
    return cep

}

input.addEventListener('blur', mostrarDados)