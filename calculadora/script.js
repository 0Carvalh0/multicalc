/*
  PROBLEMAS NA CALCULADORA:
  01 - Não consigo alternar a seleção entre os dois inputs de números (Como selecionar inputs e verificar qual input number esta selecionado)
  02 - Tamanho do input number não esta responsivo só aparece os 2 primeiros dígitos do número
*/

var n1 = window.document.getElementById('num1')
var n2 = window.document.getElementById('num2')
var res = window.document.getElementById('res')

function adicao() {
  var num1 = Number(n1.value)
  var num2 = Number(n2.value)
  var s = num1 + num2
  res.innerHTML = `<strong>${s}</strong>`
}

function subtracao() {
  var num1 = Number(n1.value)
  var num2 = Number(n2.value)
  var s = num1 - num2
  res.innerHTML = `<strong>${s}</strong>`
}

function multiplicacao() {
  var num1 = Number(n1.value)
  var num2 = Number(n2.value)
  var m = num1 * num2
  res.innerHTML = `<strong>${m}</strong>`
}

function divisao() {
  var num1 = Number(n1.value)
  var num2 = Number(n2.value)
  var d = num1 / num2
  res.innerHTML = `<strong>${d}</strong>`
}

function media() {
  var num1 = Number(n1.value)
  var num2 = Number(n2.value)
  var ma = (num1 + num2) / 2
  res.innerHTML = `<strong>${ma}</strong>`
}

function pitagoras() {
  var num1 = Number(n1.value)
  var num2 = Number(n2.value)
  var p = Math.sqrt(num1 ** 2 + num2 ** 2)
  res.innerHTML = `<strong>${p}</strong>`
}

function metro2() {
  var num1 = Number(n1.value)
  var num2 = Number(n2.value)
  var m = num1 * num2
  res.innerHTML = `<strong>${m}m²</strong>`
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