const res = document.querySelector("#res");
const formNumero = document.querySelector("#inputForm__number");
const btnAdicionar = document.querySelector("#add_button");
const btnEliminar = document.querySelector("#remove__button");
const btnCalcular = document.querySelector("#calc__button");
const tabelaValores = document.querySelector("#main-container__averageList");
let listaMedia = [];

// FUNÇÕES
function add() {
  const li = document.createElement("li");

  if (formNumero.value === "") {
    window.alert("[ERRO] Digite um valor para adicionar a média!");
  } else {
    document.querySelector("#tabela").style.display = "flex";
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

  if (listaMedia.length <= 0) {
    document.querySelector("#tabela").style.display = "none";
  }

  if (res.style.display === "flex") {
    res.style.display = "none";
  }

  formNumero.value = "";
}

function media() {
  if (listaMedia.length <= 0) {
    window.alert("[ERRO] Adicione um valor para realizar a média!");
  } else {
    let media = 0;

    for (let i = 0; i < listaMedia.length; i++) {
      media += Number(listaMedia[i]);
    }
    media = media / listaMedia.length;

    res.innerHTML = media.toFixed(2);
    res.style.display = "flex";
  }
}
