const res = document.querySelector(".pitagoras-calculator__result");

function pitagoras() {
  const a = document.querySelector("#pitagoras-calculator__cateto1").value;
  const b = document.querySelector("#pitagoras-calculator__cateto2").value;
  let pitagoras = Math.sqrt(a ** 2 + b ** 2);

  if (a == 0 || b == 0) {
    window.alert(`[ERRO] Digite o valor dos dois catetos!`);
  } else {
    res.innerHTML = `Hipotenusa: ${pitagoras.toFixed(2).replace(".", ",")}`;
    res.style.display = "flex";
  }
}
