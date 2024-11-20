// app.js


import { createCulturaNews } from "./cultura.js";
import { createEsporteNews } from "./Esporte.js";
import { createLocalNews } from "./local.js";
import { createMenu } from "./Menu.js";
import { createPoliticaNews } from "./politica.js";


// Inicializa a estrutura do site
function initializeApp() {
    const header = document.createElement('header');
    header.innerHTML = `<h1>Jornal Local Diário</h1>`;
    document.body.appendChild(header);
    
    const menu = createMenu();
    document.body.appendChild(menu);

    const main = document.createElement('main');
    document.body.appendChild(main);

    // Event listener para mudanças de categoria
    document.addEventListener('change-category', (e) => {
        loadCategoryPage(e.detail);
    });

    // Carregar a página inicial com todas as notícias
    loadCategoryPage('todos');
}

// Função para carregar as páginas de acordo com a categoria
function loadCategoryPage(category) {
    const main = document.querySelector('main');
    main.innerHTML = ''; // Limpar conteúdo atual

    switch (category) {
        case 'todos':
            main.appendChild(createLocalNews());
            main.appendChild(createEsporteNews());
            main.appendChild(createCulturaNews());
            main.appendChild(createPoliticaNews());
            break;
        case 'local':
            main.appendChild(createLocalNews());
            break;
        case 'esporte':
            main.appendChild(createEsporteNews());
            break;
        case 'cultura':
            main.appendChild(createCulturaNews());
            break;
        case 'politica':
            main.appendChild(createPoliticaNews());
            break;
        default:
            main.innerHTML = '<p>Categorias não encontradas.</p>';
            break;
    }
}

initializeApp();
