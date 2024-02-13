const res = document.querySelector("#res");

function pitagoras() {
  const a = document.querySelector("#iform__cateto1").value;
  const b = document.querySelector("#iform__cateto2").value;
  let pitagoras = Math.sqrt(a ** 2 + b ** 2);

  if (a == 0 || b == 0) {
    window.alert(`[ERRO] Digite um peso e uma altura!`);
  } else {
    res.innerHTML = `Hipotenusa: ${pitagoras.toFixed(2).replace('.', ',')}`;
    res.style.opacity = 1;
  }
}
