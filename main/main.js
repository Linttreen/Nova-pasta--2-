// Quando a página é carregada, exibe os posts
window.addEventListener('DOMContentLoaded', () => {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    if (posts.length > 0) {
        // Se houver posts, exiba os três últimos nos quadros
        const quadro1Nome = document.querySelector('.quadro1 .nome');
        const quadro1Prof = document.querySelector('.quadro1 .prof');
        const quadro2Nome = document.querySelector('.quadro2 .nome');
        const quadro2Prof = document.querySelector('.quadro2 .prof');
        const quadro3Nome = document.querySelector('.quadro3 .nome');
        const quadro3Prof = document.querySelector('.quadro3 .prof');

        // Exibe o post mais recente no quadro1
        quadro1Nome.textContent = "Post 1";
        quadro1Prof.textContent = posts[posts.length - 1];

        // Exibe o segundo post mais recente no quadro2
        if (posts.length > 1) {
            quadro2Nome.textContent = "Post 2";
            quadro2Prof.textContent = posts[posts.length - 2];
        }

        // Exibe o terceiro post mais recente no quadro3
        if (posts.length > 2) {
            quadro3Nome.textContent = "Post 3";
            quadro3Prof.textContent = posts[posts.length - 3];
        }
    }
});

