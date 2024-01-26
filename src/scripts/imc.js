var res = document.querySelector('div.res')

function imc() {
  var peso = Number(document.querySelector('input#peso').value)
  var altura = Number(document.querySelector('input#altura').value)
  var imcres = peso / (altura ** 2)
  
  if (peso == 0 || altura == 0) {
    window.alert("[ERRO] Insira um valor nos campos!")
  } else {
    res.innerHTML = `${imcres.toFixed(2)}<br>`
    if (imcres < 17) {
      res.innerHTML += 'Cuidado! Você está MUITO ABAIXO do peso.'
    } else if (imcres >= 17 && imcres < 18.5) {
      res.innerHTML += 'Atenção! Você está ABAIXO do peso.'
    } else if (imcres >= 18.5 && imcres < 24.9) {
      res.innerHTML += 'Parabéns! Você está no peso IDEAL.'
    } else if (imcres >= 25 && imcres < 29.9) {
      res.innerHTML += 'Atenção! Você está ACIMA do peso.'
    } else if (imcres >= 30 && imcres < 34.9) {
      res.innerHTML += 'Cuidado! Você está com OBESIDADE nível 1'
    } else if (imcres >= 35 && imcres < 39.9) {
      res.innerHTML += 'Urgente! Você está com OBESIDADE II (SEVERA)'
    } else {
      res.innerHTML += 'Você está com OBESIDADE III (MÓRBIDA), procure ajuda imediatamente!'
    }
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