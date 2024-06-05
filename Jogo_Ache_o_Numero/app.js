listadeNumerosSorteados = [];
let numeroMaximo = 10;
let random = gerarNumero();
let contador = 1;


function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function nomeJogo() {
    exibirTexto("h1", "Jogo do Numero Secreto");
    exibirTexto("p", "Escolha um numero de 1 a " + numeroMaximo);
}

nomeJogo();

if (chute == random){
    exibirTexto("h1", "acertou");
}

function verificarChute(){
    
        let chute = document.querySelector("input").value;
        if (chute == random){
            exibirTexto("h1", "Acertou");
            let mensagemTentativa = contador > 1 ? "tentativas" : "tentativa";
            let mensagemTentativas = "Parabéns, voce descobriu o numero em " + contador + " " + mensagemTentativa;
            exibirTexto("p", mensagemTentativas);
            document.getElementById("reiniciar").removeAttribute("disabled");
        } else {
            if (chute > random) {
                exibirTexto("p", "o numero é menor");
        } else {
                exibirTexto("p", "o numero é maior"); 
        }
        contador++;
        limparTexto();
    }
}

function gerarNumero(){
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeNumeros = listadeNumerosSorteados.length;

    if(quantidadeNumeros == numeroMaximo){
        listadeNumerosSorteados = [];
    }

    if (listadeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumero();
    } else {
        listadeNumerosSorteados.push(numeroEscolhido);
        console.log(listadeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparTexto(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    random = gerarNumero();
    limparTexto();
    contador = 1;
    nomeJogo();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}