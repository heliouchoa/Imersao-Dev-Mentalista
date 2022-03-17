function Chutar() {
  var numeroSecreto = parseInt(Math.random() * 11);
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Acertou!!!!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve inserir um numero válido";
  } else {
    elementoResultado.innerHTML =
      "Errou, o numero secreto era: " + numeroSecreto;
  }
}
