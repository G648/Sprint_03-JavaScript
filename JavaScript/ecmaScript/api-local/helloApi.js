const urlViaCep = "https://viacep.com.br/ws"
const urlCepProfessor = "http://172.16.35.155:3000/myceps"

async function cadastrar(e) {
    e.preventDefault();

    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let CEP = document.getElementById('cep').value;
    let endereco = document.getElementById('endereco').value.trim();
    let numero = document.getElementById('numero').value;
    let cidade = document.getElementById('cidade').value.trim();
    let estado = document.getElementById('estado').value.trim();

    objCadastro = {
        nome,
        email,
        CEP,
        endereco,
        numero,
        cidade,
        estado
    }


    try {

        const promise = await fetch(`http://172.16.35.155:3000/myceps`, {
            data: JSON.stringify(objCadastro),
            method: "post",
            headers: { "Content-type": "application/json" }
        });

        const dados = await promise.json()

    } catch (error) {
        console.log("Deu ruim");
    }

    //fazer validação - extra (criar uma função para retornar true or false)
    //se tiver algum campo sem preencher
}

async function buscarEndereco(cep) {
    // const resource = `/${cep}/json/` //resource é um pedido

    try {
        // const promise = await fetch(urlViaCep + resource);
        const promise = await fetch(`${urlCepProfessor}/${cep}`);

        //transforma o json retornado em um objeto ou array
        const endereco = await promise.json();
        console.log(endereco);

        //preenche o formulário
        retornarCampos({
            logradouro: endereco.logradouro,
            localidade: endereco.localidade,
            uf: endereco.uf
        });

        //reseta o span do cep inválido
        //document.getElementById("not-found").innerText = "";
    } catch (error) {
        alert(error);
        document.getElementById("not-found").innerText = "CEP inválido!";
    }
}

function retornarCampos(endereco) {
    document.getElementById("endereco").value = endereco.logradouro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;
}