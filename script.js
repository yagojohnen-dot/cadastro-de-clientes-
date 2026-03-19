const form = document.getElementById('form-cadastro');
const listaUl = document.getElementById('lista-clientes');

// Carrega a lista ao abrir a página
window.onload = exibirClientes;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const novoCliente = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        cpf: document.getElementById('cpf').value
    };

    // 1. Salva o cliente
    salvarCliente(novoCliente);

    // 2. Limpa o formulário
    form.reset();

    // 3. Mostra o aviso de sucesso
    alert("✅ Cliente cadastrado com sucesso!");

    // 4. Atualiza a lista visual
    exibirClientes();
});

function salvarCliente(cliente) {
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    clientes.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(clientes));
}

function exibirClientes() {
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    listaUl.innerHTML = ''; 

    clientes.forEach((cliente, index) => {
        const li = document.createElement('li');
        li.style.padding = "10px";
        li.style.borderBottom = "1px solid #ddd";
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        
        li.innerHTML = `
            <span><strong>${cliente.nome}</strong> (${cliente.email})</span>
            <button onclick="removerCliente(${index})" style="color: red; cursor: pointer; border:none; background:none;">Excluir</button>
        `;
        listaUl.appendChild(li);
    });
}

function removerCliente(index) {
    let clientes = JSON.parse(localStorage.getItem('clientes'));
    clientes.splice(index, 1);
    localStorage.setItem('clientes', JSON.stringify(clientes));
    exibirClientes();
}
