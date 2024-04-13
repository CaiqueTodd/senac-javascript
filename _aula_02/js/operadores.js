numero1 = parseInt(prompt("Digite um número:"));
numero2 = parseInt(prompt("Digite outro número:"));


soma = numero1 + numero2;
subtrair = numero1 - numero2;
multiplicar = numero1 * numero2;
dividir = numero1 / numero2;
resto = numero1 % numero2;
document.getElementsByTagName("div")[0].innerHTML="Soma: " + soma + "<br>" + "Subtração: " + subtrair + "<br>" + "Divisão: " + dividir + "<br>" + "Resto: " + resto;