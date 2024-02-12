const res = document.querySelector("#res");

function imc() {
  const peso = Number(document.querySelector("#iform__peso").value);
  const altura = Number(document.querySelector("#iform__altura").value);
  const linha1 = document.getElementById("linha1");
  const linha2 = document.getElementById("linha2");
  const linha3 = document.getElementById("linha3");
  const linha4 = document.getElementById("linha4");
  const linha5 = document.getElementById("linha5");
  let imcres = peso / altura ** 2;

  linha1.style.backgroundColor = "transparent";
  linha2.style.backgroundColor = "transparent";
  linha3.style.backgroundColor = "transparent";
  linha4.style.backgroundColor = "transparent";
  linha5.style.backgroundColor = "transparent";

  if (peso == 0 || altura == 0) {
    window.alert(`[ERRO! Digite um peso e uma altura!]`);
  } else {
    res.innerHTML = `SEU IMC É:<br>${imcres.toFixed(2).replace(".", ",")}`;
    res.style.opacity = 1;
    if (imcres < 18.5) {
      linha1.style.backgroundColor = "#b6e7ff";
    } else if (imcres >= 18.5 && imcres < 24.9) {
      linha2.style.backgroundColor = "#b6e7ff";
    } else if (imcres >= 25 && imcres < 29.9) {
      linha3.style.backgroundColor = "#b6e7ff";
    } else if (imcres >= 30 && imcres < 39.9) {
      linha4.style.backgroundColor = "#b6e7ff";
    } else {
      linha5.style.backgroundColor = "#b6e7ff";
    }
  }
}
