    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    function renderizarTabela() {
        const tabela = document.getElementById('tabelaProdutos');
        tabela.innerHTML = '';

        produtos.forEach((produto, index) => {
            tabela.innerHTML += `
                <tr>
                    <td>${produto.codigo}</td>
                    <td>${produto.descricao}</td>
                    <td>${produto.estoque}</td>
                    <td>R$ ${parseFloat(produto.valor).toFixed(2).replace('.', ',')}</td>
                    <td>${produto.categoria}</td>
                    <td>
                        <div class="dropdown">
                            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                Ações
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Editar</a></li>
                                <li><a class="dropdown-item" href="#">Excluir</a></li>
                                <li><a class="dropdown-item" href="#">Vender</a></li>
                                <li><a class="dropdown-item" href="#">Comprar</a></li>
                            </ul>
                        </div>
                    </td>
                </tr>
            `;
        });
    }

    function adicionarProduto() {
        const codigo = document.getElementById('codigo').value;
        const descricao = document.getElementById('descricao').value;
        const estoque = document.getElementById('estoque').value;
        const valor = document.getElementById('valor').value;
        const categoria = document.getElementById('categoria').value;

        if (!codigo || !descricao || !estoque || !valor || !categoria) {
            alert("Preencha todos os campos!");
            return;
        }

        const novoProduto = { codigo, descricao, estoque, valor, categoria };
        produtos.push(novoProduto);
        localStorage.setItem('produtos', JSON.stringify(produtos));
        renderizarTabela();

        // Limpa os inputs
        document.getElementById('codigo').value = '';
        document.getElementById('descricao').value = '';
        document.getElementById('estoque').value = '';
        document.getElementById('valor').value = '';
        document.getElementById('categoria').value = '';
    }

    // Renderiza os dados salvos ao carregar a página
    window.onload = renderizarTabela;