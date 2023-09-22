'use strict'

const inputEndereco = document.getElementById('input-endereco')
const inputBairro = document.getElementById('input-bairro')
const inputCidade = document.getElementById('input-cidade')
const inputEstado = document.getElementById('input-estado')
const input = document.getElementById('digitar-cep')


async function pegarDados(cep){

    const url = `https://viacep.com.br/ws/${cep}/json/`
    
    const response = await fetch(url)
    const cepInfo = await response.json()
    return cepInfo
    
}


async function mostrarDados(){
    const cep = await pegarDados(input.value)
    

    inputEndereco.value = cep.logradouro
    inputBairro.value = cep.bairro
    inputCidade.value = cep.localidade
    inputEstado.value = cep.uf
}

input.addEventListener('blur', mostrarDados)
input.addEventListener('keypress', (event) =>{
    if (event.code === 'Enter') {
        mostrarDados()
    }
})