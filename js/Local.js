// local.js
import { Card } from './components.js';

// Função que retorna as notícias locais
function createLocalNews() {
    const localNews = [
        {
            id: 1,
            title: "Inauguração do Mercado Municipal",
            excerpt: "O Mercado Municipal da cidade foi reinaugurado após anos de reformas, trazendo novas opções para a população.",
            image: "/api/placeholder/400/300"
        },
        {
            id: 2,
            title: "Reabertura do Parque Central",
            excerpt: "Após anos de espera, o Parque Central foi reaberto ao público com novas atrações e áreas de lazer.",
            image: "/api/placeholder/400/300"
        }
    ];

    const container = document.createElement('section');
    container.id = 'newsContainer';

    localNews.forEach(newsItem => {
        const card = new Card(newsItem.image, newsItem.title, newsItem.excerpt);
        container.appendChild(card.render());
    });

    return container;
}

export { createLocalNews };
