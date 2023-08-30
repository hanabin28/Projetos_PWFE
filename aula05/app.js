'use strict'

//Funções puras -> as variáveis entram através dos parâmetros '()', e retornam os valores apenas através do 'return'
//Responsabilidade ÚNICA (solid) -> uma function só executa apenas UMA função
//Arrow function
/****************************
 *   --- FUNÇÃO PURA ---    *   
 * function somar (a, b){   *
 *     const total = a + b  *
 *     return total         *
 * ------------------------ *
 *     return a + b         *
 * }                        *
 ****************************/

/******************************
 *   --- ARROW FUNCTION ---   *
 * const soma = (a, b) => a+b *
 ******************************/

/****************************************************************************
 *              Métodos para estruturas de repetição                        *
 * |-> const limite = funcionarios.length                                   *
 *        for(let i=0; i<limite; i++){                                      *
 *        console.log(`ID:${i} -- ${funcionarios[i].nome}`)                 *
 *        }                                                                 *
 * ------------------------------------------------------------------------ *
 * const mostrarNomes = (funcionarios) => console.log(funcionarios.nome)    *
 * funcionarios.forEach(mostrarNomes)                                       *
 * ------------------------------------------------------------------------ *
 * funcionarios.forEach(funcionarios => console.log(funcionarios.nome))     *
****************************************************************************/

// card.appendChild(imagem)
// card.appendChild(name)
// card.appendChild(cargo)

// card.replaceChildren(imagem, name, cargo)
////


const funcionarios = [
    {
        nome: "Maria Souza",
        cargo: "Designer",
        imagem: "maria.jpg"
    },

    {
        nome: "João Silva",
        cargo: "DBA",
        imagem: "joao.jpg"
    },

    {
        nome: "Hugo Pereira",
        cargo: "FrontEnd",
        imagem: "hugo.jpg"
    },
    

    {
        nome: "Ana Maria",
        cargo: "BackEnd",
        imagem: "ana.jpg"
    }
]

const criarCard=(funcionarios)=>{
    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src = `./img/${funcionarios.imagem}`
    imagem.alt = funcionarios.nome

    const name = document.createElement('h2')
    name.textContent = funcionarios.nome

    const cargo = document.createElement('p')
    cargo.textContent = funcionarios.cargo

    card.replaceChildren(imagem, name, cargo)

    return card
}

const mostrarCards = (funcionarios) => {
    const cardContainer = document.getElementById('card-container')
    const card = criarCard(funcionarios)
    cardContainer.appendChild(card)
}

funcionarios.forEach(mostrarCards)