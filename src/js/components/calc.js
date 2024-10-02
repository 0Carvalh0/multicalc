function addValue(num) {
  let text = document.querySelector(".calculator__display-current").innerHTML;

  if (text === "") {
    let operations = /[\+\-\*\/\.]$/;

    if (!operations.test(num)) {
      document.querySelector(".calculator__display-current").innerHTML = num;
    }
  } else {
    let operations = /[\+\-\*\/\.]$/;

    if (operations.test(num)) {
      if (!operations.test(text.slice(-1))) {
        document.querySelector(".calculator__display-current").innerHTML += num;
      }
    } else {
      let operations = /[\+\-\*\/]/;
      let parts = text.split(operations);
      let last = parts[parts.length - 1];

      if (last.includes(".")) {
        document.querySelector(".calculator__display-current").innerHTML += num;
      } else {
        document.querySelector(".calculator__display-current").innerHTML += num;
      }
    }
  }
}

function clean() {
  document.querySelector(".calculator__display-current").innerHTML = "";
  document.querySelector(".calculator__display-previous").innerHTML = "";
}

function del() {
  let text = document.querySelector(".calculator__display-current").innerHTML;
  document.querySelector(".calculator__display-current").innerHTML =
    text.substring(0, text.length - 1);
}

function calc() {
  let text = document.querySelector(".calculator__display-current").innerHTML;
  if (text) {
    document.querySelector(".calculator__display-previous").innerHTML = text;
    document.querySelector(".calculator__display-current").innerHTML =
      eval(text);
  }
}
