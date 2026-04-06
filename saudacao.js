function saudacao(nomejogador) {
    console.log("Bem vindo ao jogo," + nomejogador + "!")

};

saudacao("Alex");

function subirDeNivel(nivelAtual) {

    return nivelAtual + 1;
}

let meuNivel = 10;

let nivelAtualizado = subirDeNivel(meuNivel);
console.log("Seu nivel atual é: " + nivelAtualizado);

function soma(numero1, numero2){
    return numero1 + numero2

};

    console.log(soma(5,3));