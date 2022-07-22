let imagem = document.getElementById("imagem");
let ligar = document.getElementById("btn-ligar");
let desligar = document.getElementById("btn-desligar");

function lampadaLigada() {
  imagem.src = "./imagens-lampada/ligada.jpg";
}
function lampadaDesligada() {
  imagem.src = "./imagens-lampada/desligada.jpg";
}
function lampadaQuebrada() {
  imagem.src = "./imagens-lampada/quebrada.jpg";
}

ligar.addEventListener("click", lampadaLigada);

desligar.addEventListener("click", lampadaDesligada);

imagem.addEventListener("dblclick", lampadaQuebrada);
