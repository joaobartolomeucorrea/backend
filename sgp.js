//SISTEMA DE GERENCIAMENTO DE PERSONAGEM

function calcularPontuacaoTotal(historicoDePontos){
    const somarRodada = function(acumulador, pontosDaFase) {
        const novaSoma = acumulador + pontosDaFase;
        return novaSoma;
    };

 const pontuacaoFinal = historicoDePontos.reduce(somarRodada, 0);
       return pontuacaoFinal;
};

function filtrarMissoesConcluidas(listaDeMissoes) {
    const verificarStatusDaMissao = function(missao) {
        const foiFinalizada = missao.status === "concluida"; // === igualdade ESTRITA
        return foiFinalizada;
    }

    const apenasConcluidas = listaDeMissoes.filter(verificarStatusDaMissao);
    return apenasConcluidas;
};

function atualizarInventario(inventárioAtual, acao, nomeDoItem) {
    let novoInventario;

    if(acao ==="pegar") {
        const inventarioComItemNovo = [inventarioAtual, nomeDoItem];
        novoInventario = inventarioComItemNovo;
    } else if (acao === "descartar") {
        const inventarioSemUltimoItem = inventárioAtual.slice();
        novoInventario = inventarioSemUltimoItem;
    } else {
        novoInventario = inventárioAtual
    }
    return novoInventario;
};

const pontosDoJogador = [100, 50, 250, 10]
const total = calcularPontuacaoTotal(pontosDoJogador);
console.log("pontuação final: ", total);

const missoes = [
    {nome: "Salvar a aldeia", status: "concluida"},
    {nome: "encontrar o mapa", status: "em andamento"},
    {nome: "derrotar o chefão", status: "falhou"},
    {nome: "coletar recursos", status: "concluida"},
]

const concluidas = filtrarMissoesConcluidas(missoes)
console.log("missões concluídas: " , concluidas);