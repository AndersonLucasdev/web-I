const PegarInformacoes = () => {
  var ValorEntrada = document.getElementsByClassName("entrada").value();

  document.getElementById('resultado').textContent = "Informações: " + ValorEntrada;
};

document
  .getElementsByClassName("BotaoMasculino")
  .addEventListener("click", PegarInformacoes());
