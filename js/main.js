// app.js


import { themeToggleButton } from "./buttontogleTheme.js";
import { createCulturaNews } from "./cultura.js";
import { createEsporteNews } from "./Esporte.js";
import { createFooter } from "./footer.js";
import { createLocalNews } from "./local.js";
import { createMenu } from "./Menu.js";
import { createPoliticaNews } from "./politica.js";
import {StyleSystem} from './styles.js';
new StyleSystem().injectBaseStyles();
// Inicializa a estrutura do site
function initializeApp() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = "Jornal Local Diário"

    document.body.appendChild(header);

    const menu = createMenu();
    header.appendChild(h1)
    header.appendChild(menu);
    header.appendChild(themeToggleButton)

    const main = document.createElement('main');
    document.body.appendChild(main);

    // Event listener para mudanças de categoria
    document.addEventListener('change-category', (e) => {
        loadCategoryPage(e.detail);
        console.log(e.detail)
    });

    // Carregar a página inicial com todas as notícias
    loadCategoryPage('todos');
    const footer = createFooter();
    document.body.appendChild(footer);
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
