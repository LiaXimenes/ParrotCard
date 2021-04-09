let numerodecartas;
let nobaralho = [];
const irparafront = document.querySelector(".jogo")
const lista = ["bobrossparrot", "explodyparrot", "metalparrot", "fiestaparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];


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

quantidadedecartas();

function virarCarta(vira){ 
   vira.classList.add("virar");
}

function sortear() { 
	return Math.random() - 0.5; 
}


/* function 



*/