'use strict'

// Para declarar variável:
// 1 - const -> imutável -> bloco
// 2 - let   -> mutável  -> bloco (abrir e fechar de chaves - {})
// 3 - var   -> mutável  -> global ("vale" em todo o código)

// document.getElementById(''):
//   |-> Serve para "buscar" um elemento no HTML pelo ID da tag, e no parênteses
//       inserimos o ID do elemento que queremos que o comando "busque".   

// prompt(''):
//   |-> Serve para aparecer um campo para o usuário  digitar (tipo o JOption no java)

// 'element'.textContent = :
//   |-> Serve para modificar um objeto


function trocarTitulo(){
    const tituloPagina = document.getElementById('titulo')

    let tituloDigitado = prompt('Digite um título')

    if(tituloDigitado==''){
        tituloDigitado = 'Escola Senai 1.27'
    }

    titulo.textContent = tituloDigitado
}

const botaoTrocarTitulo = document.getElementById('trocar-Titulo')
botaoTrocarTitulo.addEventListener('click' , trocarTitulo)


/*      */


function cadastrar(){
    const nome = document.getElementById('nome')
    let digitarNome = prompt('Digite seu nome:')
    nome.textContent = `Nome: ${digitarNome}`

    const idade = document.getElementById('idade')
    let digitarIdade = prompt('Digite sua idade:')
    idade.textContent = `Idade: ${digitarIdade}`

    const cidade = document.getElementById('cidade')
    let digitarCidade = prompt('Digite sua cidade:')
    cidade.textContent = `Cidade: ${digitarCidade}`

    const media = document.getElementById('media')
    let digitarMedia = prompt('Digite sua média:')
    media.textContent = `Média: ${digitarMedia}`
    
    if(digitarMedia<5){
        media.classList.add('vermelha')
        
    }else if(digitarMedia>5){
        media.classList.add('azul')
        
    }
}

const botaoCadastro = document.getElementById('cadastro')
botaoCadastro.addEventListener('click',cadastrar)