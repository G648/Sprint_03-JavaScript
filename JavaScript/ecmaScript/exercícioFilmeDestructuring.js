const filmes = [
    {
        nomeFilme: "Indiana Jones",
        generoFilme: "Ação",
        anoLancamentoFilme: 1981,
        descricaoFilme: "Filme de ação muito bacana!"
    }
    ,
    {
        nomeFilme: "A freira",
        generoFilme: "Terror",
        anoLancamentoFilme: 2015,
        descricao: "Filme muito assustador de terror"
    }

]

//foreach para passar em cada array
filmes.forEach(({nomeFilme, generoFilme, anoLancamentoFilme}) => {
    // const { nomeFilme, generoFilme, anoLancamentoFilme } = filmes

    console.log(`
    Nome Filme: ${nomeFilme}
    Ano de Lançamento: ${anoLancamentoFilme}
    Genero do filme: ${generoFilme} 
`);
})

// const { nomeFilme, anoLancamentoFilme, generoFilme } = filmes[1]



//let = variavel mais local possível
//var = escopo global