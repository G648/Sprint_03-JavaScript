const camisapolo = {
    descricao: "Camisa Polo",
    preco: 400,
    tamanho: "m",
    cor: "Amarela",
    presente: true
}

//com o destructuring, não precisamos passar a propriedade que queremos com o .
//podemos colocar em chaves e trazer a propriedade
const {descricao} = camisapolo;
const {preco} = camisapolo;
const {tamanho, presente} = camisapolo;
const cor = camisapolo.cor;

console.log(descricao);
console.log(preco);
console.log(cor);

//outro jeito de fazer a desestruturação para pegar todos os valores de propriedades
const copiaCamisa = {...camisapolo}

console.log(copiaCamisa);

console.log(`
    PRODUTO:
        Descricao: ${descricao}
        Preço: ${preco}
        Presente: ${presente ? "sim" : "não"}
`);

