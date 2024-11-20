// politica.js
import { Card } from './components.js';

// Função que retorna as notícias de política
function createPoliticaNews() {
    const politicaNews = [
        {
            id: 1,
            title: "Debates sobre Eleições Municipais",
            excerpt: "Os debates sobre as próximas eleições municipais estão movimentando a cidade com propostas e desafios.",
            image: "/api/placeholder/400/300"
        },
        {
            id: 2,
            title: "Reforma da Lei de Zonas Comerciais",
            excerpt: "O governo local está discutindo uma reforma na lei que regula as zonas comerciais da cidade.",
            image: "/api/placeholder/400/300"
        }
    ];

    const container = document.createElement('section');
    container.id = 'newsContainer';

    politicaNews.forEach(newsItem => {
        const card = new Card(newsItem.image, newsItem.title, newsItem.excerpt);
        container.appendChild(card.render());
    });

    return container;
}

export { createPoliticaNews };
