const numeros = [10, 12, 20];

const somatorio = numeros.reduce((total, n) =>{
    return total + n;
}, 0);

console.log(somatorio);


const produtos = [
    {produto: 'Camiseta', preco: 129.00},
    {produto: 'Tenis', preco: 350.00},
    {produto: 'Jaqueta de Couro', preco: 700.00},
];

let totalVendas = produtos.reduce((vlInicial, P) => {

    return vlInicial + P.preco;

},0)

console.log(`O valor total das vendas é de: ${totalVendas}`);