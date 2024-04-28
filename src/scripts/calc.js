const res = document.querySelector(".mainContainer__displayCurrent");

function addValue(num) {
  let text = document.querySelector(".mainContainer__displayCurrent").innerHTML;

  if (text === "") {
    let operations = /[\+\-\*\/\.]$/;

    if (!operations.test(num)) {
      res.innerHTML = num;
    }
  } else {
    let operations = /[\+\-\*\/\.]$/;

    if (operations.test(num)) {
      if (!operations.test(text.slice(-1))) {
        res.innerHTML += num;
      }
    } else {
      let operations = /[\+\-\*\/]/;
      let parts = text.split(operations);
      let last = parts[parts.length - 1];

      if (last.includes(".")) {
        res.innerHTML += num;
      } else {
        res.innerHTML += num;
      }
    }
  }
}

function clear() {
  res.innerHTML = "";
  document.querySelector(".mainContainer__displayPrev").innerHTML = "";
}

function del() {
  let text = document.querySelector(".mainContainer__displayCurrent").innerHTML;
  res.innerHTML = text.substring(0, text.length - 1);
}

function calc() {
  let text = document.querySelector(".mainContainer__displayCurrent").innerHTML;
  if (text) {
    document.querySelector(".mainContainer__displayPrev").innerHTML = text;
    res.innerHTML = eval(text);
  }
}
