const nomeProduto = "carrinho";
const precoProduto = 20;
const lojaProduto = "casaChina";
const dataCompra = 10.4;
const vendedorProduto = "juliana";

console.log(`Fui a casa China comprar um ${nomeProduto} e ele custava ${precoProduto}, mas comprei mesmo assim, na nota apareceu ${dataCompra} e ${vendedorProduto}.`);

const descontoProduto = 20;
const resultado = precoProduto - descontoProduto;

console.log(`O carrinho recebeu um desconto de ${descontoProduto} reais`);
console.log(`O preço final da compra é de ${resultado}`);

const preco = 100;
const quantidadeProduto = 20;
const valorCompra = 480;
console.log(`Um cliente quer levar ${preco}, coneguiu ${quantidadeProduto}`);
console.log(`Com desconto o valor total a compra ficaria ${valorCompra}`);
console.log(`Se o produto estiver em promoção o produto estará com ${descontoProduto}`);
console.log(`Se o produto estiver sem estoque o ${nomeProduto} estará em zero.`);

const totalCompra = 480;
const ticket = (nomeProduto + vendedorProduto + totalCompra + dataCompra + "concluida"); 

function verificarCompra(totalCompras) {
    const foiFinalizada = compra.status === "concluida";
    return foiFinalizada;
console.log(`A compra foi concluida com o total  ${totalCompra} reais, e foi entregue o ${ticket} para o cliente.`);
}

