let produtos = [];

function addProdutoCard() {
    const codigo = document.getElementById('codigo').value;
    const descricao = document.getElementById('descricao').value;
    const estoque = parseInt(document.getElementById('estoque').value);
    const valor = parseFloat(document.getElementById('valor').value);
    const categoria = document.getElementById('categoria').value;

    if (!codigo || !descricao || isNaN(estoque) || isNaN(valor) || !categoria) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    const produto = { codigo, descricao, estoque, valor, categoria };
    produtos.push(produto);
    atualizarTabela();
    atualizarCards();

    // Limpar inputs
    document.getElementById('codigo').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('estoque').value = '';
    document.getElementById('valor').value = '';
    document.getElementById('categoria').value = '';
}

function atualizarTabela() {
    const tbody = document.getElementById('tabelaProdutos');
    tbody.innerHTML = '';

    produtos.forEach((produto, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
                <td>${produto.codigo}</td>
                <td>${produto.descricao}</td>
                <td>${produto.estoque}</td>
                <td>R$ ${produto.valor.toFixed(2)}</td>
                <td>${produto.categoria}</td>
                <td><button onclick="removerProduto(${index})">Remover</button></td>
            `;
        tbody.appendChild(tr);
    });
}

function removerProduto(index) {
    produtos.splice(index, 1);
    atualizarTabela();
    atualizarCards();
}

function atualizarCards() {
    let estoqueTotal = 0;
    let estoqueCategoriaB = 0;
    let valorTotal = 0;

    produtos.forEach(produto => {
        estoqueTotal += produto.estoque;
        if (produto.categoria.toLowerCase() === 'b') {
            estoqueCategoriaB += produto.estoque;
        }
        valorTotal += produto.estoque * produto.valor;
    });

    document.querySelectorAll('.card h2')[0].textContent = estoqueTotal;
    document.querySelectorAll('.card h2')[1].textContent = estoqueCategoriaB;
    document.querySelectorAll('.card h2')[2].textContent = `R$ ${valorTotal.toFixed(2)}`;
    document.querySelectorAll('.card h2')[3].textContent = produtos.length;
}
