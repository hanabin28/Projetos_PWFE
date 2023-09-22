'use strict'

const botaoPesquisar = document.getElementById('botao-pesquisa')
const pesquisa = document.getElementById('pesquisa-raça')

async function pegarImagens(){
    
    const url = `https://dog.ceo/api/${pesquisa}/images`

    const response = await fetch(url)
    const imagens = await response.json()
    return imagens.message

}

function criarTagImg(imagem){
    const galeria = document.getElementById('galeria')
    const tagImg = document.createElement('img')
    tagImg.src = imagem
    galeria.appendChild(tagImg)
}


async function carregarFotos(){
    const imagens = await pegarImagens()
    imagens.forEach(criarTagImg)
}


pesquisa.addEventListener('blur', carregarFotos)