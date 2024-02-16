const res = document.getElementById("res");
const formNumero = document.getElementById("iform__numero");
const btnAdicionar = document.getElementById("adicionar__botao");
const btnEliminar = document.getElementById("remover__botao");
const btnCalcular = document.getElementById("calc__botao");
const tabelaValores = document.getElementById("tabeladeValores");
let listaMedia = [];

// FUNÇÕES

function add() {
  listaMedia.push(formNumero.value);
  formNumero.innerHTML = "";
}

function remove() {
  listaMedia.remove();
}

function media() {
  window.alert(listaMedia);
}
