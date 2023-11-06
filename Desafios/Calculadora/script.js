function Calcular() {
    event.preventDefault();


    //criação de vatiavel para pegar os dados do formulário html
    let n1 = parseInt(document.getElementById('num1').value);
    let n2 = parseInt(document.getElementById('num2').value);
    let operacao = document.getElementById('operacao').value;
    let resultado;

    // if (isNaN(n1) || isNaN(n2)) {
    //     return alert("Escreva apenas números");
    // }

    switch (operacao) {
        case 'Somar':
            resultado = Somar(n1, n2);
            //exibir o resultado em uma alert -> utilizando a interpolação
            // alert(`A soma dos dois números é de: ${resultado}`)
            break;
        case 'Subtrair':
            resultado = Subtrair(n1, n2);
            // alert(`A soma dos dois números é de: ${resultado}`)
            break;
        case 'Multiplicar':
            resultado = Multiplicar(n1, n2);
            // alert(`A soma dos dois números é de: ${resultado}`)
            break;
        case 'Dividir':
            resultado = Dividir(n1, n2);
            // alert(`A soma dos dois números é de: ${resultado}`)
            break;

        default:
            alert("está dando erro no código")
            break;
    }

    document.getElementById('resultado').innerHTML = resultado;
}

function Subtrair(numero01, numero02) {
    return numero01 - numero02;
}

function Somar(numero01, numero02) {
    return numero01 + numero02;
}

function Multiplicar(numero01, numero02) {
    return numero01 * numero02;
}

function Dividir(numero01, numero02) {
    // if (numero01 == 0 || numero02 == 0) {

    //     return("não é possível dividir por 0"
    // }

    // return numero01 / numero02;

    try {
        if ( numero01 == 0 || numero02 == 0) {
            
            throw new Error ("não é possivel dividir por 0")
        }      

        document.getElementById("error").innerHTML = null;

        return numero01 / numero02;

    } catch (err) {

        document.getElementById("error").innerHTML = err.message;

    }
    
    

}