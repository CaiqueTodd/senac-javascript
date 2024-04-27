var miniatura = document.getElementsByClassName("miniatura")[0];
var fullsize = document.getElementsByClassName("fullsize")[0];

/*
O comando abaixo faz uma contagem de 1 a 5 e
incrementa de um em um. Dentro corpo do for é
chamada a div miniatura e inserimos nela um
comando html para exibição de imagens e este
comando é repetido tantas vezes que é pedido no
comando for. Quando ha a contagem o nome da
foto é incrementado com o número da variável
i. Fazendo uma contagem de 1 até 5 e exibir
as imagens de foto1 até foto5
*/
for(var i = 1; i <= 5; i++){
    miniatura.innerHTML+="<img src=img/foto"+i+".jpg onclick=abrir("+i+")>";    
}

/*
A função abrir é chamada todas as vezes que uma foto da
miniatura é clicada.
Quando a miniatura é clicada, ela dispara um evento
chamado onclick e chama a função abrir passando por
parâmetro(argumento) um número, que é a posição da
foto. Assim, a função abrir recebe o número passado e
armazena na variável p. Esta variável é usada para
formar o nome da foto que será carregada na div
fullsize como vemos abaixo.
*/
function abrir(p){
    fullsize.innerHTML="<img src=img/foto"+(p)+".jpg>";
}