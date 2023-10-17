//crie 2 arrays: nomes e sobrenomes
//crie um terceiro array de NomesCompleto
//ao final, exiba os nomes completos no console com o foreach
//é necessário conter pelo menos 5 nomes
//utilizae arrow functions como callback functions

const nomes = ['Arthur', 'Guilherme', 'Jeremias', 'Eduardo', 'Carlos']
const sobrenomes = ['Oliveira', 'Cezar', 'josé', 'Costa', 'Roque']


// const nomeFiltrado = nomes.filter((n) => {
//     return n === 'Arthur';
// })

// console.log(nomeFiltrado);

const nomeCompleto = nomes.map((nome, indice) => {
    return `${nome} ${sobrenomes[indice]}`;
})

nomeCompleto.forEach((nc) => {
    console.log(nc);
})

// nomeCompleto.forEach(n => {
//     console.log('Nome' + n);
// });

// nomes.forEach((full) => {
//     console.log(full);
// })

// console.log(nomeCompleto);