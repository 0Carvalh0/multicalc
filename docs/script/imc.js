var n1 = document.getElementById('num1')
var n2 = document.getElementById('num2')
var res = document.getElementById('res')

function imc() {
  var nome = document.querySelector('input#nome').value
  var peso = document.querySelector('input#peso').value
  var altura = document.querySelector('input#altura').value
  var imc = peso / (altura ** 2)
  res.innerText = `<p>${nome}, ${peso}, ${altura}, ${imc}</p>`
}

/*
TABELA DE REFERENCIA:
-17 == Muito abaixo
17 e 18,5 == Abaixo
18,5 e 24,9 == Normal
25 e 29,9 == Acima
30 e 34,9 == Obesidade I
35 e 39,9 == Obesidade II (severa)
+40 == Obesidade III (mórbida)
*/

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