const raio = document.querySelector("input#iform__raio");
const res = document.querySelector("div#res");

function circulo() {
  let area = Math.PI * raio.value ** 2;

  res.style.display = "flex";
  res.innerHTML = area.toFixed(2);
}
