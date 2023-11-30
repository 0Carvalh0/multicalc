var n1 = document.getElementById('num1')
var res = document.getElementById('res')

function imc() {
  var peso = Number(document.querySelector('input#peso').value)
  var altura = Number(document.querySelector('input#altura').value)
  var imcres = peso / (altura ** 2)
  
  res.innerHTML = `${imcres}`
  if (imcres < 17) {
    res.innerHTML += 'Cuidado! Você está MUITO ABAIXO do peso.'
  } else if (imcres >= 17 && imcres < 18,5) {
    res.innerHTML += 'Atenção! Você está ABAIXO do peso.'
  }
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