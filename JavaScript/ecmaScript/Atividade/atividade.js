const arrFrutas = [];

function listarFrutas(e) {
    e.preventDefault(); //capturar o evento de submit do formulário (para o envio do formulário)

    let nomeFruta = document.getElementById('nome').value.trim();    
    // frutas.trim();
    // frutas.toLowerCase();

    if (nomeFruta.length == 0) {
        alert("Todos os campos deverão ser preenchidos")
        return;
    }

    arrFrutas.push(nomeFruta);

    arrFrutas.sort();

    let template = '';

    arrFrutas.forEach(frutas => {
        template += `
        <ul>
            <li> ${frutas}</li>
        </ul>
        `
    })
    
    document.getElementById('corpo-lista').innerHTML = template;

    // console.log(frutas);
}

function deletarRegistros() {
    localStorage.removeItem(frutas)
    window.location.reload();
}
