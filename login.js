// Abrir o modal
        document.querySelector('.open-modal').addEventListener('click', () => {
            document.getElementById('cadastroModal').style.display = 'flex';
        });

        // Fechar o modal
        document.querySelector('.close').addEventListener('click', () => {
            document.getElementById('cadastroModal').style.display = 'none';
        });

        // Função para salvar os dados no cadastro
    function salvarcadastro() {
        const emailCadastro = document.querySelector('#cadastroModal input[type="email"]').value;
        const senhaCadastro = document.querySelector('#cadastroModal input[type="password"]').value;

        if (emailCadastro && senhaCadastro) {
            localStorage.setItem('cadastroEmail', emailCadastro);
            localStorage.setItem('cadastroSenha', senhaCadastro);
            alert("Cadastro realizado com sucesso!");
            document.getElementById('cadastroModal').style.display = 'none';
        } else {
            alert("Preencha todos os campos.");
        }
    }

    // Função para validar o login
    function validarLogin() {
        const loginEmail = document.getElementById('email').value;
        const loginSenha = document.getElementById('password').value;

        const savedEmail = localStorage.getItem('cadastroEmail');
        const savedSenha = localStorage.getItem('cadastroSenha');

        if (loginEmail === savedEmail && loginSenha === savedSenha) {
            alert("Login realizado com sucesso!");
            window.location.href = 'dashboard.html';
        } else {
            alert("E-mail ou senha incorretos.");
        }
    }
