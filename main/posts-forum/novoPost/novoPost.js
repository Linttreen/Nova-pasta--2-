// Adiciona o evento de clique ao botão "Enviar"
document.getElementById('postButton').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const postContent = document.getElementById('newPost').value.trim();

    if (postContent) {
        // Recupera posts existentes ou inicializa um array vazio
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        // Adiciona o novo post ao array
        posts.push(postContent);
        // Salva o array de posts no localStorage
        localStorage.setItem('posts', JSON.stringify(posts));

        // Redireciona para a tela principal
        window.location.href = "/main/main.html";
    } else {
        alert("O campo de post está vazio!");
    }
});
