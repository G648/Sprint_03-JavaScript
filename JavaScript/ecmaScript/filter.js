const numero = [1, 2, 200, 10, 7, 12, 15, 8]

console.log(numero);

const nMenor10 = numero.filter((n) =>{
    return n < 10;
})

console.log(nMenor10);


const comentarios = [
    {comentario: "Bla bla bla", exibe: true},
    {comentario: "evento é uma merda", exibe: false},
    {comentario: "evento muito bom!", exibe: true}

];

const comentraiosOk = comentarios.filter((C) => {
    return C.exibe === true;
})

console.log(comentraiosOk);