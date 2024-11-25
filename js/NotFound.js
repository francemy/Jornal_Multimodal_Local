import { Text } from "./components.js";

// Página NotFound
class NotFoundPage {
    constructor() {
        this.element = null;
    }

    render() {
        // Criar o elemento principal da página
        this.element = document.createElement('div');
        this.element.className = 'flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4 transition-all transform duration-500 ease-in-out opacity-0';

        // Adiciona animação de fade-in
        setTimeout(() => {
            this.element.classList.remove('opacity-0');
            this.element.classList.add('opacity-100');
        }, 100);

        // Título 404
        const title = new Text('404', 'title', 'text-red-600');
        this.element.appendChild(title.render());

        // Mensagem de erro
        const message = new Text('Ops! A página que você está procurando não foi encontrada.', 'paragraph', 'text-lg text-gray-700 mt-4');
        this.element.appendChild(message.render());

        // Link de retorno com efeitos e responsividade
        const homeLink = new Text('Voltar para a página inicial', 'link', 'mt-6 px-6 py-3 text-info text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-in-out transform md:px-8 md:py-4');
        const linkElement = homeLink.render();
        linkElement.href = '/';
        linkElement.addEventListener('click', (e) => {
            // Efeito de clique para o link
            e.preventDefault();
            linkElement.classList.add('scale-95');
            setTimeout(() => {
                window.location.href = linkElement.href;
            }, 150); // Pequena espera antes de navegar
        });
        this.element.appendChild(linkElement);

        return this.element;
    }
}

// Renderizando a página diretamente no body
const notFoundPage = new NotFoundPage();
document.body.appendChild(notFoundPage.render());
