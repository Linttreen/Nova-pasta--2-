document.getElementById('postButton').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const postContent = document.getElementById('newPost').value.trim();

    if (postContent) {
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(postContent);
        localStorage.setItem('posts', JSON.stringify(posts));

        // Redireciona para a tela principal após salvar o post
        window.location.href = "/main/main.html";
    } else {
        alert("O campo de post está vazio!");
    }
});