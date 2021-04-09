let numerodecartas;
let nobaralho = [];
let cartavirada = null;
let contagemdeviragem = 0;
let contagemdeacertos = 0;
const irparafront = document.querySelector(".jogo")
const lista = ["bobrossparrot", "explodyparrot", "metalparrot", "fiestaparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];

quantidadedecartas();

function quantidadedecartas(){

    if (numerodecartas<4 || numerodecartas>14 || numerodecartas%2 !== 0){   

        while(numerodecartas<4 || numerodecartas>14 || numerodecartas%2 !== 0){
            numerodecartas = prompt ("Com quantas cartas quer jogar? Sempre par e no máximo 14");
        } 
    }

    for (let i = 0; i < (numerodecartas/2); i++){
        const adicionarcarta = 
        `<li class="cartas" onclick="virarCarta(this)">
            <img src="imagens/front.png" class="frente">
            <img src="imagens/${lista[i]}.gif" class="tras">
        </li>`;

        nobaralho.push(adicionarcarta);
        nobaralho.push(adicionarcarta);
    }

    nobaralho.sort(sortear)

    for(let i = 0; i < numerodecartas; i++){
        irparafront.innerHTML += nobaralho[i]; 
    }
} 



function sortear() { 
	return Math.random() - 0.5; 
}

function virarCarta(flip){
    flip.classList.add("virada");
    comparar(flip);

    contagemdeviragem = contagemdeviragem + 1;
}

function comparar(flip){
    if(cartavirada === null){
        cartavirada = flip;
        cartavirada.setAttribute('onclick'," ");
    } else if(cartavirada.innerHTML === flip.innerHTML){
        flip.setAttribute('onclick'," ");
        cartavirada.setAttribute('onclick'," ");
        cartavirada = null;
        contagemdeacertos = contagemdeacertos + 1;
    } else{
        setTimeout(volver, 1000, cartavirada, flip);
        cartavirada = null;
    }

    finaldejogo();
}

function volver(x, y){
    x.classList.remove("virada");
    y.classList.remove("virada");
    x.setAttribute('onclick',"virarCarta(this)")
    y.setAttribute('onclick',"virarCarta(this)")
}

function finaldejogo(){
    if(contagemdeacertos === (numerodecartas/2)){
        setTimeout(alertfinal, 1000);
    }
}

function alertfinal(){
    alert("Parabéns, você ganhou em " + contagemdeviragem + " jogadas" );
}