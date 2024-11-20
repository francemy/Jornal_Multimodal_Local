// menu.js
function createMenu() {
    const nav = document.createElement('nav');
    nav.innerHTML = `
        <ul>
            <li><a href="#" data-category="todos">Todos</a></li>
            <li><a href="#" data-category="local">Local</a></li>
            <li><a href="#" data-category="esporte">Esporte</a></li>
            <li><a href="#" data-category="cultura">Cultura</a></li>
            <li><a href="#" data-category="politica">Política</a></li>
        </ul>
    `;
    
    // Adicionando funcionalidade de navegação
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.dataset.category;
            document.dispatchEvent(new CustomEvent('change-category', { detail: category }));
        });
    });
    
    return nav;
}

export { createMenu };
