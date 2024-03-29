const btnMenu = document.getElementById("btn__menuhamburguer");
const listaMenu = document.getElementById("lista__menu");
const relogio = document.querySelector("#relogio");

const trocarHora = setInterval(function time() {
  let horas = new Date().getHours();
  let minutos = new Date().getMinutes();

  if (horas < 10) {
    horas = "0" + horas;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  relogio.innerHTML = `${horas}:${minutos}`;
});

btnMenu.addEventListener("click", () => {
  if (listaMenu.style.left === "-2000px") {
    listaMenu.style.left = "0px";
    btnMenu.style.backgroundColor = "#fff";
    btnMenu.style.color = "var(--cor5)";

    btnMenu.classList.replace("fa-bars", "fa-xmark");
  } else {
    listaMenu.style.left = "-2000px";
    btnMenu.style.backgroundColor = "var(--cor5)";
    btnMenu.style.color = "#fff";
  
    btnMenu.classList.replace("fa-xmark", "fa-bars");
  }
});
