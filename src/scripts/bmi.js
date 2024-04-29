const res = document.querySelector("#res");

function bmi() {
  const weightValue = Number(document.querySelector("#form__inputWeight").value);
  const heightValue = Number(document.querySelector("#form__inputHeight").value);
  const row1 = document.querySelector("#row1");
  const row2 = document.querySelector("#row2");
  const row3 = document.querySelector("#row3");
  const row4 = document.querySelector("#row4");
  const row5 = document.querySelector("#row5");
  let bmires = weightValue / heightValue ** 2;

  row1.style.backgroundColor = "transparent";
  row2.style.backgroundColor = "transparent";
  row3.style.backgroundColor = "transparent";
  row4.style.backgroundColor = "transparent";
  row5.style.backgroundColor = "transparent";

  if (weightValue == 0 || heightValue == 0) {
    window.alert(`[ERRO] Digite um peso e uma altura!`);
  } else {
    res.innerHTML = `SEU IMC É:<br>${bmires.toFixed(2).replace(".", ",")}`;
    res.style.display = "flex";
    if (bmires < 18.5) {
      row1.style.backgroundColor = "#00000050";
    } else if (bmires >= 18.5 && bmires < 24.9) {
      row2.style.backgroundColor = "#00000050";
    } else if (bmires >= 25 && bmires < 29.9) {
      row3.style.backgroundColor = "#00000050";
    } else if (bmires >= 30 && bmires < 39.9) {
      row4.style.backgroundColor = "#00000050";
    } else {
      row5.style.backgroundColor = "#00000050";
    }
  }
}
