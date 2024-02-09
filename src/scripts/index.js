const res = document.getElementById("calc__visor");
const btnMenu = document.getElementById("btn__menuhamburguer");
const listaMenu = document.getElementById("lista__menu");

btnMenu.addEventListener("click", () => {
  if (listaMenu.style.marginLeft < "0") {
    listaMenu.style.marginLeft = "0";
    btnMenu.style.backgroundColor = "#fff";
    btnMenu.style.color = "var(--cor5)";
    
    btnMenu.classList.remove("fa-bars");
    btnMenu.classList.add("fa-xmark");
  } else {
    listaMenu.style.marginLeft = "-200px";
    btnMenu.style.backgroundColor = "var(--cor5)";
    btnMenu.style.color = "#fff";

    btnMenu.classList.remove("fa-xmark");
    btnMenu.classList.add("fa-bars");
  }
});

function addValor(num) {
  let texto = document.querySelector("p#calc__visor").innerHTML;

  // Não colocar mais de 1 operação matemática ou ponto seguido
  // if (num === "+" || num === "-" || num === "/" || num === "*" || num === ".") {
  // } else {
  if (texto === "[ERRO]...") {
    res.innerHTML = num;
  } else {
    res.innerHTML += num;
  }
}
// }

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
