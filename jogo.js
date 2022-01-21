var altura = 0
var largura = 0

function ajusaTatamanhoPalcoJogo() {
    var altura = window.innerHeight
    var largura = window.innerWidth
    
    console.log(largura, altura)
}

ajusaTatamanhoPalcoJogo()

var posicaoX = Math.floor(Math.random() * largura)
var posicaoY = Math.floor(Math.random() * altura)

console.log(posicaoX,posicaoY)

//elemento html

var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosquito.png'

document.body.appendChild(mosquito)