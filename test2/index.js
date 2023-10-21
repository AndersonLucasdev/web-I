function calcularIMC(genero) {
    const nome = document.querySelector(".entradanome").value;
    const altura = parseFloat(document.querySelector(".entradaaltura").value);
    const peso = parseFloat(document.querySelector(".entradapeso").value);
    const informacoes = document.querySelector(".informacoes");

    if (!nome || !altura || !peso || !genero) {
        informacoes.innerHTML = "<p>Existem campos vazios ou você não selecionou o gênero.</p>";
    } else {
        if (genero === "masculino") {
            console.log("Masculino");
        } else if (genero === "feminino") {
            console.log("Feminino");
        }
    }
}
