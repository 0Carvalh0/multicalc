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