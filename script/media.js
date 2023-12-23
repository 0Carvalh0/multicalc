var n1 = document.getElementById('num1')
var res = document.getElementById('res')
var lista = document.getElementById('lista')
var n = []

function add() {
  var item = document.createElement('option')
  n.push(Number(n1.value))
  item.text = `Valor adicionado: ${n1.value}`
  lista.appendChild(item)
  res.innerHTML = ''
  
  n1.value = ''
  n1.focus()
}

function media() {
  let total = n.length
  let soma = 0
  let media = 0
  for (let pos in n) {
    soma += n[pos]
  }
  media = soma / total
  res.innerHTML += `${media}`
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