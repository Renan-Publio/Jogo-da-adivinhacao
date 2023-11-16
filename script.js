var jogar = prompt('Quer jogar?(s/n)');
if (jogar == 's') {
  var numeroSecreto = parseInt(Math.random() * 1001);
  var iterador = 0;
  console.log(numeroSecreto);

  while (chute != numeroSecreto) {
    if (iterador != 0) {
      alert('Você já fez ' + iterador + ' tentativas!');
    }

    var chute = prompt('Digite um número entre 1 e 1000');
    if (chute == numeroSecreto) {
      alert('Acertou!');
    } else if (chute > numeroSecreto) {
      alert('Errou... o número secreto é menor.' + chute);
    } else if (chute < numeroSecreto) {
      alert('Errou... o número secreto é maior.' + chute);
    }

    iterador += 1;
  }
}
