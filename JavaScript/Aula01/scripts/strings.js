function nickName() {

    event.preventDefault();

    //primeiro passo, capturar os dados do formulário
    let nome = document.getElementById("nome").value;
    let nickName = document.getElementById("nickname").value;
    // let resultado;
    
    // alert(`o nome ${nome}, foi alterado para ${nickName}`)
    document.getElementById("resultNick").innerHTML = nome.replace(nome, nickName);
}