// const escolha = prompt("Digite uma das opções para a cor de fundo:\n1 - Azul\n2 - Vermelho\n3 - Amarelo\n4 - Cinza");

// if (escolha == 1) {
//     document.body.style.backgroundColor="Blue";
// } else if (escolha == 2) {
//     document.body.style.backgroundColor="Red";
// } else if (escolha == 3) {
//     document.body.style.backgroundColor="Yellow";
// } else if (escolha == 4) {
//     document.body.style.backgroundColor="Gray";
// } else {
//     document.body.style.backgroundColor="White";
// }

const escolha = prompt("Digite uma das opções para a cor de fundo:\n1 - Azul\n2 - Vermelho\n3 - Amarelo\n4 - Cinza");
var cor = "white"; //Cor Branco

if (escolha == 1) {
    cor="Blue";
} else if (escolha == 2) {
    cor="Red";
} else if (escolha == 3) {
    cor="Yellow";
} else if (escolha == 4) {
    cor="Gray";
} else {
    cor;
}

document.body.style.backgroundColor=cor;