const res = document.querySelector(".average-calculator__result");
const formNumero = document.querySelector(".average-calculator__input");
const btnAdicionar = document.querySelector(".average-calculator__button--add");
const btnEliminar = document.querySelector(
  ".average-calculator__button--remove"
);
const btnCalcular = document.querySelector(
  ".average-calculator__button--calculate"
);
const tabelaValores = document.querySelector(".average-calculator__list");
let listaMedia = [];

// FUNÇÕES
function add() {
  const li = document.createElement("li");

  if (formNumero.value === "") {
    window.alert("[ERRO] Digite um valor para adicionar a média!");
  } else {
    document.querySelector(".average-calculator__values").style.display =
      "flex";
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
    document.querySelector(".average-calculator__values").style.display =
      "none";
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
