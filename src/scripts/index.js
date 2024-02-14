const res = document.getElementById("calc__visor");

function addValor(num) {
  let texto = document.querySelector("p#calc__visor").innerHTML;

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
    window.alert(
      "[ERRO] Você não digitou nada, tente colocar um número depois colocar alguma operação depois outro número e clique no simbolo de igual para ver oque acontece!"
    );
  }
}
