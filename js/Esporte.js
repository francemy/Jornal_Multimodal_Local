// Esporte.js
import { Card } from './components.js';

// Função que retorna as notícias de esporte
function createEsporteNews() {
    const esporteNews = [
        {
            id: 1,
            title: "Campeonato Regional de Futebol",
            excerpt: "O time da cidade venceu o Campeonato Regional após uma final épica contra o rival.",
            image: "/api/placeholder/400/300"
        },
        {
            id: 2,
            title: "Atleta local vence competição nacional",
            excerpt: "João da Silva, atleta da cidade, conquistou o primeiro lugar no Campeonato Nacional de Atletismo.",
            image: "/api/placeholder/400/300"
        }
    ];

    const container = document.createElement('section');
    container.id = 'newsContainer';

    esporteNews.forEach(newsItem => {
        const card = new Card(newsItem.image, newsItem.title, newsItem.excerpt);
        container.appendChild(card.render());
    });

    return container;
}

export { createEsporteNews };
