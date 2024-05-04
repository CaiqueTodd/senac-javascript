var opcao = "";

opcao = prompt("Digite:\n- Soma\n- Subtrair\n- Multiplicar\n- Dividir\n- S para sair")

while (opcao.toUpperCase() != "S") {
    var n1 = prompt("Digite um número:");
    var n2 = prompt("Digite outro número");

    //Converter n1 e n2 para número de ponto flutuante(Float)
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    var resultado = 0;

    if (opcao < 1 || opcao > 4) {
        alert("Opção Inválida")
    } else {

        switch (opcao) {
            case "1":
                resultado = n1 + n2;
                alert("O resultado é: " + resultado);
                break;
            case "2":
                resultado = n1 - n2;
                alert("O resultado é: " + resultado);
                break;
            case "3":
                resultado = n1 * n2;
                alert("O resultado é: " + resultado);
                break;
            case "4":
                resultado = n1 / n2;
                alert("O resultado é: " + resultado);
                break;
            default:
                break;
        }
    }

    opcao = prompt("Digite:\n- Soma\n- Subtrair\n- Multiplicar\n- Dividir\n- S para sair")
}


