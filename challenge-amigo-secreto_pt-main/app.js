let amigos = []; //armazena os amigos.


function adicionarAmigo(){
    let capturarNomes = document.getElementById('amigo').value; //captura o valor digitado.
        if (capturarNomes == '') { 
            alert('Por favor, insira um nome.'); //se estiver vazio, exibe um alerta com a mensagem de erro: "Por favor, insira um nome."
            return;
        }
    amigos.push(capturarNomes); //adiciona os nomes dos amigos no array.
    capturarNomes.value = ''; //limpa o campo de entrada.

    atualizarLista();
}
function atualizarLista(){
    let lista = document.getElementById('listaAmigos'); //seleciona a lista onde os amigos serão exibidos.
    lista.innerHTML = ''; //limpa a lista existente.
    for (let nome of amigos) { //percorre o array amigos e cria elementos de lista (li) para cada nome.
        let item = document.createElement("li");
        item.textContent = nome;
    lista.appendChild(item); //adiciona elementos à lista: Para cada amigo, cria um novo elemento de lista.
    }
}
function sortearAmigo(){
    if (amigos.length === 0) { //se o array amigos não está vazio.
        alert('Adicione pelo menso um amigo antes de sortear.');
        return;
    }
    let indice = Math.floor(Math.random()*amigos.length); //gera um índice aleatório.
    let amigoSorteado = amigos[indice]; //tem o nome sorteado.
    let resultadoSorteio = document.getElementById('resultado'); //mostrar o resultado.
    resultadoSorteio.innerHTML = `O amigo sorteado é ${amigoSorteado}`;//exibe o amigo sorteado.
}