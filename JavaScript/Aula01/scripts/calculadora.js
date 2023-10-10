
        function Calcular() {
            event.preventDefault();

            //criar uma variável para cada número
            let n1 = parseInt(document.getElementById('n1').value);
            let n2 = parseInt(document.getElementById('n2').value);
            let operacao = document.getElementById('operacao').value;
            let resultado; //undefined 

            // if (operacao == '+') {
            //     //criar uma variável com o resultado da soma
            //     resultado = somar(n1, n2);
            // }else if (operacao == '-') {
            //     resultado = subtrair(n1, n2);
            // }

            if (isNaN(n1) || isNaN(n2) ) {
                return alert("É necessario digitar apenas tipos de dados numéricos");
            }

            switch (operacao) {
                    case 'somar':
                        resultado = somar(n1, n1);
                        //exibir o resultado em uma alert -> utilizando a interpolação
                        // alert(`A soma dos dois números é de: ${resultado}`)
                        break;
                    case 'subtrair':
                        resultado = subtrair(n1, n2);
                        // alert(`A subtração dos dois números é de: ${resultado}`)
                        break;
                    case 'dividir':
                        resultado = dividir(n1, n2);
                        // alert(`A divisão dos dois números é de: ${resultado}`)
                        break;
                    case 'multiplicar':
                        resultado = multiplicar(n1, n2);
                        // alert(`A multiplicação dos dois números é de: ${resultado}`)
                        break;
                    default:
                        alert('está dando erro no código')
                        break;
                }

                document.getElementById('result').innerHTML = resultado;

            //exibir o resultado em uma alert -> utilizando a interpolação
            // alert(`A Subtração dos dois números é de: ${resultado}`)
        }

        function subtrair(numero01, numero02) {
            return numero01 - numero02;
        }

        function somar(numero01, numero02) {
            return numero01 + numero02;
        }

        function multiplicar(numero01, numero02) {
            return numero01 * numero02;
        }

        function dividir(numero01, numero02) {
            if (numero02 == 0) {

                return "Não é possível dividir por 0";
            }

            return numero01 / numero02;
        }

