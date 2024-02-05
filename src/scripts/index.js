const res = document.getElementById("calc__visor");

function addValor(num) {
  let texto = document.querySelector("p#calc__visor").innerHTML;

  if (num === "+" || num === "-" || num === "/" || num === "*" || num === ".") {
  } else {
    if (texto === "[ERRO]...") {
      res.innerHTML = num;
    } else {
      res.innerHTML += num;
    }
  }
}

function limpar() {
  res.innerHTML = "";
}

function deletar() {
  let texto = document.querySelector("p#calc__visor").innerHTML;
  res.innerHTML = texto.substring(0, texto.length - 1);
}

function calcular() {
  let texto = document.querySelector("p#calc__visor").innerHTML;
  if (texto) {
    res.innerHTML = eval(texto);
  } else {
    res.innerHTML = "[ERRO]...";
  }
}
