function calcularIMC(genero) {
    const nome = document.querySelector(".entradanome").value;
    let altura = parseFloat(document.querySelector(".entradaaltura").value);
    const peso = parseFloat(document.querySelector(".entradapeso").value);
    const informacoes = document.querySelector(".informacoes");

    if (!nome || isNaN(altura) || isNaN(peso) || !genero) {
        console.log(nome)
        console.log(altura)
        console.log(peso)
        console.log(genero)
        informacoes.innerHTML = "<p>Existem campos vazios ou você não selecionou o gênero.</p>";
    } else {
        altura = altura >= 1 ? altura : altura * 100;
        const imc = peso / (altura * altura);

        const faixasIMC = {
            "masculino": [
                { max: 16, mensagem: "Muito abaixo do peso" },
                { max: 16.9, mensagem: "Abaixo do peso" },
                { max: 24.9, mensagem: "Peso normal" },
                { max: 29.9, mensagem: "Acima do peso" },
                { max: 34.9, mensagem: "Obesidade Grau I" },
                { max: 39.9, mensagem: "Obesidade Grau II" },
                { max: Infinity, mensagem: "Obesidade Grau III" }
            ],
            "feminino": [
                { max: 16, mensagem: "Muito abaixo do peso" },
                { max: 16.9, mensagem: "Abaixo do peso" },
                { max: 23.9, mensagem: "Peso normal" },
                { max: 28.9, mensagem: "Acima do peso" },
                { max: 33.9, mensagem: "Obesidade Grau I" },
                { max: 38.9, mensagem: "Obesidade Grau II" },
                { max: Infinity, mensagem: "Obesidade Grau III" }
            ]
        };

        const faixa = faixasIMC[genero].find((faixa) => imc <= faixa.max);

        informacoes.innerHTML = `<p>O IMC de ${nome} é: ${imc.toFixed(2)}</p><p>${faixa.mensagem}</p>`;
    }
}

