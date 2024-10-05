const res = document.querySelector(".weightedAverage-calculator__result");
const formNumero = document.querySelector("#weightedAverage__valueInput");
const formPeso = document.querySelector("#weightedAverage__weightInput");
const btnAdicionar = document.querySelector(".weightedAverage-calculator__button--add");
const btnEliminar = document.querySelector(
  ".weightedAverage-calculator__button--remove"
);
const btnCalcular = document.querySelector(
  ".weightedAverage-calculator__button--calculate"
);
const tabelaValores = document.querySelector(
  ".weightedAverage-calculator__list"
);
let listaMedia = [];
let listaPesos = [];

// FUNÇÕES
function add() {
  const li = document.createElement("li");

  if (formNumero.value === "") {
    window.alert("[ERRO] Digite um valor para adicionar a média!");
  } else {
    document.querySelector(
      ".weightedAverage-calculator__values"
    ).style.display = "flex";
    listaMedia.push(formNumero.value);
    listaPesos.push(formPeso.value);
    li.innerHTML = `${formNumero.value} de peso ${formPeso.value} Adicionado`;
    formNumero.value = "";
    formPeso.value = "";

    if (res.style.display === "flex") {
      res.style.display = "none";
    }

    tabelaValores.appendChild(li);
  }
}

function remove() {
  listaMedia.pop();
  listaPesos.pop();
  tabelaValores.removeChild(tabelaValores.lastChild);

  if (listaMedia.length <= 0 && listaPesos.length <= 0) {
    document.querySelector(
      ".weightedAverage-calculator__values"
    ).style.display = "none";
  }

  if (res.style.display === "flex") {
    res.style.display = "none";
  }

  formNumero.value = "";
  formPeso.value = "";
}

function mediaPon() {
  if (listaMedia.length <= 0 && listaPesos.length <= 0) {
    window.alert("[ERRO] Adicione um valor para realizar a média!");
  } else {
    let media = 0;
    let divisor = 0;

    for (let i = 0; i < listaMedia.length; i++) {
      media += Number(listaMedia[i] * listaPesos[i]);
    }

    for (let i = 0; i < listaPesos.length; i++) {
        divisor += Number(listaPesos[i]);
    }

    media = media / divisor;

    res.innerHTML = media.toFixed(2);
    res.style.display = "flex";
  }
}
