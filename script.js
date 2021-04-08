let numerodecartas;
let adicionarcarta;


numerodecartas = prompt ("Com quantas cartas quer jogar? Sempre par e no máximo 14");

if (numerodecartas<4 || numerodecartas>14 || numerodecartas%2 !== 0){   

    while(numerodecartas<4 || numerodecartas>14 || numerodecartas%2 !== 0){
        numerodecartas = prompt ("Com quantas cartas quer jogar? Sempre par e no máximo 14");
    } 
}
    

for (let i = 1; i <=numerodecartas; i++){
    adicionarcarta = document.querySelector(".jogo .cartas.carta" + i);
    adicionarcarta.classList.remove("escondido");
}

function virarCarta(carta){
    carta.firstElementChild.setAttribute("src", "imagens/unicornparrot.gif");
}