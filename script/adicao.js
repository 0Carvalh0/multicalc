var n1 = document.getElementById('num1')
var n2 = document.getElementById('num2')
var res = document.getElementById('res')

function adicao() {
  var num1 = Number(n1.value)
  var num2 = Number(n2.value)
  var s = num1 + num2
  res.innerHTML = `<strong>${s}</strong>`
}

function numpad0() {
  n1.value += 0
}

function numpad1() {
  n1.value += 1
}

function numpad2() {
  n1.value += 2
}

function numpad3() {
  n1.value += 3
}

function numpad4() {
  n1.value += 4
}

function numpad5() {
  n1.value += 5
}

function numpad6() {
  n1.value += 6
}

function numpad7() {
  n1.value += 7
}

function numpad8() {
  n1.value += 8
}

function numpad9() {
  n1.value += 9
}

function limpar() {
  n1.value = ''
  n2.value = ''
  res.innerHTML = ""
}