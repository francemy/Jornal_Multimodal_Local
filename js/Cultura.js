// cultura.js
import { Card } from './components.js';

// Função que retorna as notícias de cultura
function createCulturaNews() {
    const culturaNews = [
        {
            id: 1,
            title: "Exposição de Arte Contemporânea",
            excerpt: "A galeria local está promovendo uma exposição de arte contemporânea com obras de artistas locais.",
            image: "/api/placeholder/400/300"
        },
        {
            id: 2,
            title: "Festival de Cinema no Centro Cultural",
            excerpt: "O Centro Cultural da cidade está promovendo o Festival de Cinema, com filmes de diversos países.",
            image: "/api/placeholder/400/300"
        }
    ];

    const container = document.createElement('section');
    container.id = 'newsContainer';

    culturaNews.forEach(newsItem => {
        const card = new Card(newsItem.image, newsItem.title, newsItem.excerpt);
        container.appendChild(card.render());
    });

    return container;
}

export { createCulturaNews };
