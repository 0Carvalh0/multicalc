const base = document.querySelector("input#iform__base");
const altura = document.querySelector("input#iform__altura");
const res = document.querySelector("div#res");

function retangulo() {
  let area = base.value * altura.value;

  res.style.display = "flex";
  res.innerHTML = area + "m²";
}
