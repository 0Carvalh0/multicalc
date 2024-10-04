const res = document.querySelector(".bmi-calculator__result");

function bmi() {
  const weightValue = Number(
    document.querySelector("#bmi-calculator__weight").value
  );
  const heightValue = Number(
    document.querySelector("#bmi-calculator__height").value
  );
  const row1 = document.querySelector("#row1");
  const row2 = document.querySelector("#row2");
  const row3 = document.querySelector("#row3");
  const row4 = document.querySelector("#row4");
  const row5 = document.querySelector("#row5");
  let bmires = weightValue / heightValue ** 2;

  if (weightValue == 0 || heightValue == 0) {
    window.alert(`[ERRO] Digite um peso e uma altura!`);
  } else {
    res.innerHTML = `SEU IMC É: ${bmires.toFixed(2).replace(".", ",")}`;
    res.style.display = "flex";

    for(i = 1; i <= 5; i++) {
      const row = document.querySelector(`#row${i}`);
      row.style.opacity = 0.3;
    }

    if (bmires < 18.5) {
      row1.style.backgroundColor = "#00000050";
      row1.style.opacity = 1;
    } else if (bmires >= 18.5 && bmires < 24.9) {
      row2.style.backgroundColor = "#00000050";
      row2.style.opacity = 1;
    } else if (bmires >= 25 && bmires < 29.9) {
      row3.style.backgroundColor = "#00000050";
      row3.style.opacity = 1;
    } else if (bmires >= 30 && bmires < 39.9) {
      row4.style.backgroundColor = "#00000050";
      row4.style.opacity = 1;
    } else {
      row5.style.backgroundColor = "#00000050";
      row5.style.opacity = 1;
    }
  }
}
