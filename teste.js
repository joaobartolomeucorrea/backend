const  destino = "Foz do Iguaçu";
const nomeViajante = "João";
const cidadeOrigem = "Curitiba";
let duracao = 8;
let transporte = "carro";

console.log(`O viajante ${nomeViajante} deseja viajar de ${cidadeOrigem} até ${destino}, de ${transporte} em um percuro de ${duracao} horas.`);

let passagem = 300;
let hospedagem = 100; 
let alimentação = 150;
let total = passagem + hospedagem + alimentação;    

console.log("O total dos gastos será de R$" + total + "reais.");