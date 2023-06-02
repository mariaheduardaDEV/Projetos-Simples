function gerarSenha() {
    // Definindo o comprimento da senha desejado
    var comprimento = 12;

    // Definindo os caracteres disponíveis para a senha
    var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';

    // Variável para armazenar a senha gerada
    var senha = '';

    // Loop para gerar cada caractere da senha
    for (var i = 0; i < comprimento; i++) {
      // Gerando um número aleatório para selecionar um caractere da string de caracteres
      var indice = Math.floor(Math.random() * caracteres.length);
      // Concatenando o caractere selecionado à senha
      senha += caracteres[indice];
    }

    // Atualiza o conteúdo do elemento com o ID 'password' com a senha gerada
    document.getElementById('password').textContent = senha;
  }

