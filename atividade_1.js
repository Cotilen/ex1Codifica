var prompt = require("prompt-sync")()

function exercicio1() {

    let celsius = parseInt(prompt("Digite a temperatura que você deseja converter:"))

    let fahrenheit = (celsius * 1.8) + 32

    if (isNaN(fahrenheit))
        console.log("\nPor favor, digite um número válido");
    else
        console.log(`\n${celsius}° celsius equivale a ${fahrenheit}° fahrenheit`);

}

// exercicio1()

function exercicio2() {

    let quantEleitores = parseInt(prompt("Por favor, insira a quantidade de eleitores do município:"))
    console.log();

    let quantVotosBrancos = parseInt(prompt("Por favor, insira a quantidade de votos brancos:"))
    console.log();

    let quantVotosNulos = parseInt(prompt("Por favor, insira a quantidade de votos nulos:"))
    console.log();

    let quantVotosValidos = parseInt(prompt("Por favor, insira a quantidade de votos válidos:"))

    if (isNaN(quantEleitores) || isNaN(quantVotosBrancos) || isNaN(quantVotosNulos) || isNaN(quantVotosValidos)) {
        console.log("\nPor favor, digite um número válido");
    } else {
        if (quantEleitores < quantVotosBrancos || quantEleitores < quantVotosNulos || (quantVotosBrancos + quantVotosNulos + quantVotosValidos) > quantEleitores || quantEleitores < quantVotosValidos)
            console.log("\nO número de eleitor não pode ser menor que a quantidade de votos brancos,votos nulos e votos válidos");
        else {
            let porcentagemVotosBrancos = (quantVotosBrancos / quantEleitores) * 100
            let porcentagemVotosNulos = (quantVotosNulos / quantEleitores) * 100
            let porcentagemVotosValidos = (quantVotosValidos / quantEleitores) * 100

            console.log(`\n O percentual de votos brancos é de ${porcentagemVotosBrancos}%`);
            console.log(`\n O percentual de votos nulos é de ${porcentagemVotosNulos}%`);
            console.log(`\n O percentual de votos válidos é de ${porcentagemVotosValidos}%`);
        }
    }
}

// exercicio2()

function exercicio3() {

    let valor1 = parseInt(prompt("Por favor, digite o primeiro valor:"))
    console.log();
    let valor2 = parseInt(prompt("Por favor, digite o segundo valor:"))
    console.log();
    let valor3 = parseInt(prompt("Por favor, digite o terceiro valor:"))
    console.log();
    let valor4 = parseInt(prompt("Por favor, digite o quarto valor:"))

    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4))
        console.log("\n Por favor, digite valores válidos");
    else {
        valor4 = valor1 + valor2 + valor3

        valor1 = (valor1 + 25)
        valor2 = valor2 * 3
        valor3 = (valor3 / 100) * 12

        console.log(`\n O primeiro valor + 25 fica: ${valor1}`);
        console.log(`\n O segundo valor vezes 3 fica: ${valor2}`);
        console.log(`\n O 12% do valor 3 é: ${valor3}`);
        console.log(`\n A soma dos três primeiros valores é ${valor4}`);

    }

}

// exercicio3()

function exercicios4_5() {

    let nota1 = Number(prompt("Por favor, digite o valor da primeira nota:"))
    console.log();
    let nota2 = Number(prompt("Por favor, digite o valor da segunda nota:"))

    if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10)
        console.log("Por favor, digite notas válidas");
    else {
        let media = (nota1 + nota2) / 2

        if (media >= 6)
            console.log("PARABÉNS! Você foi aprovado.");
        else
            console.log("Você foi REPROVADO! Estudo mais.");
    }
}

// exercicios4_5()

function exercicio6() {

    let valor1 = parseInt(prompt("Por favor, digite o primeiro valor:"))
    console.log();
    let valor2 = parseInt(prompt("Por favor, digite o segundo valor:"))
    console.log();
    let valor3 = parseInt(prompt("Por favor, digite o terceiro valor:"))

    if (valor1 == valor2 && valor2 == valor3)
        console.log("Estes valores equivalem a um triângulo equilátero.");
    else if (valor1 == valor2 || valor1 == valor3 || valor2 == valor3)
        console.log("Estes valores equivalem a um triângulo isósceles.");
    else if (valor1 != valor2 && valor2 != valor3)
        console.log("Estes valores equivalem a um triângulo escaleno.");
    else {
        console.log("Não é possível criar um triângulo com esses valores");
    }
}

// exercicio6()

function exercicio7() {
    let quantidade = parseInt(prompt("Digite a quantidade de maçãs compradas:"))

    if (isNaN(quantidade))
        console.log("\nPor favor, digite um número válido");
    else {
        if (quantidade < 12) {
            quantidade = quantidade * 0.30
            console.log(`\nAs maçãs custaram R$${quantidade}`);
        } else {
            quantidade = quantidade * 0.25
            console.log(`\nAs maçãs custaram R$${quantidade}`);
        }
    }
}

// exercicio7()

function exercicio8() {
    let valor1 = Number(prompt("Por favor, digite o primeiro valor:"))
    console.log();
    let valor2 = Number(prompt("Por favor, digite o segundo valor:"))

    if (isNaN(valor1) || isNaN(valor2)) {
        console.log("\nDigite apenas número válidos.");
    } else {
        if (valor1 > valor2) {
            console.log(`\n${valor2}`);
            console.log(`${valor1}`);
        } else {
            console.log(`\n${valor1}`);
            console.log(`${valor2}`);
        }
    }
}

// exercicio8()

function exercicio9() {
    let codigo = parseInt(prompt("Por favor, digite o código de origem:"))
    let regiao

    if (isNaN(codigo)) {
        console.log("\nPor favor, digite apenas números válidos.");
    } else {
        if (codigo === 1)
            regiao = "Sul"
        else if (codigo === 2)
            regiao = "Norte"
        else if (codigo === 3)
            regiao = "Leste"
        else if (codigo === 4)
            regiao = "Oeste"
        else if (codigo === 5 || codigo === 6)
            regiao = "Nordeste"
        else if (codigo >= 7 && codigo <= 9)
            regiao = "Sudeste"
        else if (codigo >= 10 && codigo <= 20)
            regiao = "Centro-Oeste"
        else if (codigo >= 25 && codigo <= 50)
            regiao = "Nordeste"
        else
            regiao = "Produto Importado"

        console.log();
        console.log(regiao);
    }
}

// exercicio9()

function exercicio10() {
    let valor = parseInt(prompt("Por favor, digite o valor á ser repetido: "))

    if (isNaN(valor)) {
        console.log("\nPor favor, digite apenas números válidos.");
    } else {
        for (let i = 1; i <= 10; i++) {
            console.log(valor);
        }
    }
}

// exercicio10()

function exercicio11() {
    let valor

    do {
        valor = parseInt(prompt("Insira o valor: "))

        if (isNaN(valor) || valor < 0) {
            break;
        }

        if (valor % 2 === 0) {
            console.log("\nEste número é par");
        } else {
            console.log("\nEste número é ímpar");
        }
    } while (valor !== 0) {
        console.log("\nPor favor, insira um numero válido.");
    }

}

// exercicio11()

function exercicio12() {
    let divisao

    for (i = 999; i <= 1999; i++) {
        divisao = i % 11

        if (divisao == 5) {
            console.log(i)
        }
    }
}

// exercicio12()

function exercicio13() {
    let valor1 = parseInt(prompt("Digite o primeiro valor: "))
    console.log();
    let valor2 = parseInt(prompt("Digite o segundo valor: "))
    console.log();
    let valor3 = parseInt(prompt("Digite o terceiro valor: "))
    console.log();
    let valor4 = parseInt(prompt("Digite o quarto valor: "))
    console.log();
    let valor5 = parseInt(prompt("Digite o quinto valor: "))

    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4) || isNaN(valor5))
        console.log("\nPor favor, digite valores válidos");
    else {
        console.log(`\nTabuada do número ${valor1}`);
        for (i = 1; i <= valor1; i++) {
            let tabuada = i * valor1
            console.log(`*${i}X${valor1} = ${tabuada}*`);
        }
        console.log("****************");

        console.log(`\nTabuada do número ${valor2}`);
        for (i = 1; i <= valor2; i++) {
            let tabuada = i * valor2
            console.log(`*${i}X${valor2} = ${tabuada}*`);
        }
        console.log("****************");

        console.log(`\nTabuada do número ${valor3}`);
        for (i = 1; i <= valor3; i++) {
            let tabuada = i * valor3
            console.log(`*${i}X${valor3} = ${tabuada}*`);
        }
        console.log("****************");

        console.log(`\nTabuada do número ${valor4}`);
        for (i = 1; i <= valor4; i++) {
            let tabuada = i * valor4
            console.log(`*${i}X${valor4} = ${tabuada}*`);
        }
        console.log("****************");

        console.log(`\nTabuada do número ${valor5}`);
        for (i = 1; i <= valor5; i++) {
            let tabuada = i * valor5
            console.log(`*${i}X${valor5} = ${tabuada}*`);
        }
        console.log("****************");
    }



}

// exercicio13()

function exercicio14() {
    let valor
    let media = 0
    let contador = 0
    do {
        valor = parseInt(prompt("Insira o valor: "))

        if (isNaN(valor)) {
            break;
        } else if (valor !== 0) {
            media = media + valor
            contador = contador + 1
        }

    } while (valor !== 0) {
        console.log(`\nSomando os ${contador} valores, a média é igual a ${media / contador}`);
    }
}

// exercicio14()

function exercicio15() {
    let valor
    let peso
    let media = 0
    let contadorPeso = 0

    do {
        valor = Number(prompt("Insira o valor decimal: "))
        if (valor !== 0) {
            peso = parseInt(prompt("Insira o peso: "))

        }


        if (isNaN(valor) || isNaN(peso)) {
            break;
        } else if (valor !== 0) {
            valor = valor * peso
            media = media + valor
            contadorPeso = contadorPeso + peso
        }

    } while (valor !== 0) {
        const mediaPonderada = media / contadorPeso
        if (!isNaN(mediaPonderada))
            console.log(`\nA média ponderada é ${mediaPonderada.toFixed(2)}`);
        else
            console.log("\nÉ impossível calcular a média")
    }
}

// exercicio15()

function exercicio16() {

    let contadorNumeros = 101
    let contador = 1

    while (contador <= 50) {
        let primo = true
        let i = 2
        while (i <= Math.sqrt(contadorNumeros)) {
            if (contadorNumeros % i === 0) {
                primo = false
                break
            }
            i++
        }

        if (primo) {
            console.log(contadorNumeros);
            contador++
        }

        contadorNumeros++
    }


}

// exercicio16()