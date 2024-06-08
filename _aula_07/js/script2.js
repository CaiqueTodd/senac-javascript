let shadow = "";
function showImage(img) {
    shadow = document.createElement("div");
    shadow.setAttribute("class", "shadow");
    shadow.setAttribute("id", "shadow")
    const image = document.createElement("img");
    image.setAttribute("class", "image");
    image.src=`img/${img}`;
    const close = document.createElement("a");
    close.setAttribute("id", "close");
    close.href="#";
    close.innerHTML="&times;"

    //Aplicar as cahamadas de função para o close
    
    /*
    Aplicar as chamadas de função para o shadown
    Ao clicar no botão fechar, disparamos uma função
    para remnover o elemento shadow da tela. isso
    faz com que a imagem com a sombra saia da tela
    */
    
    close.onclick=()=>{
        shadow.remove()
    }

    shadow.appendChild(image);
    shadow.appendChild(close);
    document.body.appendChild(shadow)
}

const fotos = document.getElementById("fotos");
fotos.getElementsByTagName("img")[0].onclick=()=>{
    let url = fotos.getElementsByTagName("img")[0].src.split("/");
    showImage(url[url.length-1]);
}

fotos.getElementsByTagName("img")[1].onclick=()=>{
    let url = fotos.getElementsByTagName("img")[1].src.split("/");
    showImage(url[url.length-1]);
}

fotos.getElementsByTagName("img")[2].onclick=()=>{
    let url = fotos.getElementsByTagName("img")[2].src.split("/");
    showImage(url[url.length-1]);
}

fotos.getElementsByTagName("img")[3].onclick=()=>{
    let url = fotos.getElementsByTagName("img")[3].src.split("/");
    showImage(url[url.length-1]);
}

fotos.getElementsByTagName("img")[4].onclick=()=>{
    let url = fotos.getElementsByTagName("img")[4].src.split("/");
    showImage(url[url.length-1]);
}


