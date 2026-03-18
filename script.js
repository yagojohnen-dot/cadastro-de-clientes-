const form = document.getElementById('form-cadastro');
const listaUl = document.getElementById('lista-clientes');

// Função para carregar dados do LocalStorage ao abrir a página
window.onload = () => {
    exibirClientes();
};

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede a página de recarregar

    // Captura os valores dos inputs
    const novoCliente = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        cpf: document.getElementById('cpf').value
    };

    salvarCliente(novoCliente);
    form.reset(); // Limpa o formulário
    exibirClientes(); // Atualiza a lista na tela
});

function salvarCliente(cliente) {
    // Pega a lista atual ou cria uma vazia se for o primeiro
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    clientes.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(clientes));
}

function exibirClientes() {
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    listaUl.innerHTML = ''; // Limpa a lista antes de renderizar

    clientes.forEach((cliente, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <strong>${cliente.nome}</strong><br>
                <small>${cliente.email} | ${cliente.cpf}</small>
            </div>
            <button onclick="removerCliente(${index})" class="btn-deletar">Excluir</button>
        `;
        listaUl.appendChild(li);
    });
}

function removerCliente(index) {
    let clientes = JSON.parse(localStorage.getItem('clientes'));
    clientes.splice(index, 1); // Remove o item do array
    localStorage.setItem('clientes', JSON.stringify(clientes));
    exibirClientes();
}
 DataView BiquadFilterNode black>