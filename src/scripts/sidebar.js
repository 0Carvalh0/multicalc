const btnMenu = document.getElementById("btn__menuhamburguer");
const listaMenu = document.getElementById("lista__menu");
const relogio = document.querySelector("#relogio");

const trocarHora = setInterval(function time() {
  let horas = new Date().getHours();
  let minutos = new Date().getMinutes();

  if (horas < 10) {horas = "0" + horas};
  if (minutos < 10) {minutos = "0" + minutos};

  relogio.innerHTML = `${horas}:${minutos}`;
});

btnMenu.addEventListener("click", () => {
  if (listaMenu.style.left < "0") {
    listaMenu.style.left = "0";
    btnMenu.style.backgroundColor = "#fff";
    btnMenu.style.color = "var(--cor5)";

    btnMenu.classList.remove("fa-bars");
    btnMenu.classList.add("fa-xmark");
  } else {
    listaMenu.style.left = "-210px";
    btnMenu.style.backgroundColor = "var(--cor5)";
    btnMenu.style.color = "#fff";

    btnMenu.classList.remove("fa-xmark");
    btnMenu.classList.add("fa-bars");
  }
});
