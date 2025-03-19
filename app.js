// Array para armazenar os amigos
let amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo"); // Captura o campo de entrada
    let nome = input.value.trim(); // Obtém o valor e remove espaços extras

    if (nome === "") { // Validação do campo
        alert("Por favor, insira um nome.");
        return;
    }
    
    amigos.push(nome); // Adiciona o nome ao array
    input.value = ""; // Limpa o campo de entrada
    atualizarLista(); // Atualiza a lista exibida na tela
}

// Função para atualizar a lista na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    for (let amigo of amigos) {
        let item = document.createElement("li"); // Cria um elemento <li>
        item.textContent = amigo; // Adiciona o nome do amigo
        lista.appendChild(item); // Adiciona à lista
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
    let amigoSorteado = amigos[indiceSorteado]; // Obtém o nome correspondente
    
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpa o resultado anterior
    
    let resultadoItem = document.createElement("li");
    resultadoItem.innerHTML = `🎉 O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>!`;
    resultadoLista.appendChild(resultadoItem);
}
