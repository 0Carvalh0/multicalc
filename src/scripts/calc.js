const res = document.querySelector(".main-container__display-current");

function addValue(num) {
  let texto = document.querySelector(
    ".main-container__display-current"
  ).innerHTML;

  if (texto === "") {
    let regex = /[\+\-\*\/\.]$/;

    if (!regex.test(num)) {
      res.innerHTML = num;
    }
  } else {
    let regex = /[\+\-\*\/\.]$/;

    if (regex.test(num)) {
      if (!regex.test(texto.slice(-1))) {
        res.innerHTML += num;
      }
    } else {
      let operacoes = /[\+\-\*\/]/;
      let partes = texto.split(operacoes);
      let ultima = partes[partes.length - 1];

      if (ultima.includes(".")) {
        res.innerHTML += num;
      } else {
        res.innerHTML += num;
      }
    }
  }
}

function clear() {
  res.innerHTML = "";
  document.querySelector(".main-container__display-prev").innerHTML = "";
}

function del() {
  let texto = document.querySelector(".main-container__display-current").innerHTML;
  res.innerHTML = texto.substring(0, texto.length - 1);
}

function calc() {
  let texto = document.querySelector(
    ".main-container__display-current"
  ).innerHTML;
  if (texto) {
    document.querySelector(".main-container__display-prev").innerHTML =
      texto;
    res.innerHTML = eval(texto);
  }
}
