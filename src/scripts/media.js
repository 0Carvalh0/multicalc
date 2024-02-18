const res = document.getElementById("res");
const formNumero = document.getElementById("iform__numero");
const btnAdicionar = document.getElementById("adicionar__botao");
const btnEliminar = document.getElementById("remover__botao");
const btnCalcular = document.getElementById("calc__botao");
const tabelaValores = document.getElementById("tabeladeValores");
let listaMedia = [];

// FUNÇÕES

function add() {
  const li = document.createElement("li");

  if (formNumero.value === "") {
    window.alert("[ERRO] Digite um valor para adicionar a média!");
  } else {
    listaMedia.push(formNumero.value);
    li.innerHTML = `${formNumero.value} Adicionado`;
    formNumero.value = "";

    tabelaValores.appendChild(li);
  }
}

function remove() {
  listaMedia.pop();
  tabelaValores.removeChild(tabelaValores.lastChild);

  formNumero.value = "";
}

function media() {
  window.alert(listaMedia);
}
