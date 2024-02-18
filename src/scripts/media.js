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

    if (res.style.display === "flex") {
      res.style.display = "none";
    }

    tabelaValores.appendChild(li);
  }
}

function remove() {
  listaMedia.pop();
  tabelaValores.removeChild(tabelaValores.lastChild);

  if (res.style.display === "flex") {
    res.style.display = "none";
  }

  formNumero.value = "";
}

function media() {
  let media = 0;

  for (let i = 0; i < listaMedia.length; i++) {
    media += Number(listaMedia[i]);
  }
  media = media / listaMedia.length;

  res.innerHTML = media.toFixed(2);
  res.style.display = "flex";
}
