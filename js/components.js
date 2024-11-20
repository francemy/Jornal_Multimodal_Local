// components.js
import { selectedTheme } from './styles.js'; // Carregando o tema atual
import Theme from './themes.js'; // Supondo que o arquivo themes.js esteja correto

export class Component {
    constructor() {
        this.element = null;
    }

    render() {
        return this.element;
    }

    setStyle(element, styles) {
        if (styles && typeof styles === 'object') {
            Object.assign(element.style, styles);
        } else {
            console.warn('Tentativa de aplicar estilos inválidos:', styles);
        }
    }
}

export class Card extends Component {
    imageUrl;
    title;
    content;

    constructor(imageUrl, title, content) {
        super();
        this.imageUrl = imageUrl;
        this.title = title;
        this.content = content;
        this.createCard();
    }

    createCard() {
        this.element = document.createElement('article');
        const cardStyles = `
            background: ${selectedTheme.colors.primary}; /* Usando selectedTheme */
            border-radius: ${Theme.borderRadius.md}; /* Ajustado para selectedTheme */
            box-shadow: ${Theme.shadows.sm}; /* Usando selectedTheme */
            transition: transform 0.3s, box-shadow 0.3s;
            overflow: hidden;
            cursor: pointer;
        `;
        this.setStyle(this.element, cardStyles);

        // Imagem do card
        const image = document.createElement('img');
        this.setStyle(image, {
            width: '100%',
            height: '200px',
            objectFit: 'cover'
        });
        image.src = this.imageUrl;
        image.alt = this.title;

        // Evento de clique na imagem
        image.addEventListener('click', (e) => {
            e.stopPropagation(); // Previne o clique do card inteiro
            this.handleImageClick();
        });

        const content = document.createElement('div');
        this.setStyle(content, {
            padding: Theme.spacing.md // Usando selectedTheme
        });

        const titleEl = document.createElement('h2');
        titleEl.textContent = this.title;
        this.setStyle(titleEl, {
            fontSize: Theme.typography.sizes.lg, // Usando selectedTheme
            marginBottom: Theme.spacing.sm // Usando selectedTheme
        });

        const contentEl = document.createElement('p');
        contentEl.textContent = this.content;
        this.setStyle(contentEl, {
            color: selectedTheme.colors.textSecondary // Usando selectedTheme
        });

        // Botão de ação
        const actionButton = document.createElement('button');
        actionButton.textContent = 'Detalhes';
        this.setStyle(actionButton, {
            background: selectedTheme.colors.primary, // Usando selectedTheme
            color: '#fff',
            padding: `${Theme.spacing.sm} ${Theme.spacing.md}`, // Usando selectedTheme
            border: 'none',
            borderRadius: Theme.borderRadius.sm, // Usando selectedTheme
            cursor: 'pointer',
            marginTop: Theme.spacing.sm, // Usando selectedTheme
        });

        actionButton.addEventListener('click', (e) => {
            e.stopPropagation();
            this.openDetailsModal();
        });

        content.appendChild(titleEl);
        content.appendChild(contentEl);
        content.appendChild(actionButton);
        this.element.appendChild(image);
        this.element.appendChild(content);

        this.element.addEventListener('mouseover', () => {
            this.setStyle(this.element, {
                transform: 'translateY(-5px)',
                boxShadow: Theme.shadows.md // Usando selectedTheme
            });
        });

        this.element.addEventListener('mouseout', () => {
            this.setStyle(this.element, {
                transform: 'translateY(0)',
                boxShadow: Theme.shadows.sm // Usando selectedTheme
            });
        });

        // Clique no card
        this.element.addEventListener('click', () => {
            console.log(`Card clicado: ${this.title}`);
            this.handleCardClick();
        });
    }

    handleCardClick() {
        this.openDetailsModal();
    }

    handleImageClick() {
        this.openImagemModal();
    }

    openDetailsModal() {
        import('./modalInfo.js').then(({ ModalInfo }) => {
            const modal = new ModalInfo(this.title, this.content, this.imageUrl);
            modal.openModal();
        });
    }

    openImagemModal() {
        import('./modalImagem.js').then(({ ModalImagem }) => {
            const modal = new ModalImagem(this.imageUrl, this.title);
            modal.openModal();
        });
    }
}

export class Button extends Component {
    constructor(text, variant = 'primary') {
        super();
        this.text = text;
        this.variant = variant;
        this.createButton();
    }

    createButton() {
        this.element = document.createElement('button');
        this.element.textContent = this.text;

        const baseStyles = {
            display: 'inline-block',
            padding: `${Theme.spacing.sm} ${Theme.spacing.md}`, // Usando selectedTheme
            borderRadius: Theme.borderRadius.sm, // Usando selectedTheme
            border: 'none',
            fontSize: Theme.typography.sizes.md, // Usando selectedTheme
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s'
        };

        const variantStyles = this.variant === 'primary'
            ? { backgroundColor: selectedTheme.colors.accent, color: selectedTheme.colors.textLight }
            : { backgroundColor: selectedTheme.colors.secondary, color: selectedTheme.colors.textLight };

        this.setStyle(this.element, { ...baseStyles, ...variantStyles });

        this.element.addEventListener('mouseover', () => {
            this.setStyle(this.element, {
                opacity: '0.9',
                transform: 'translateY(-1px)'
            });
        });

        this.element.addEventListener('mouseout', () => {
            this.setStyle(this.element, {
                opacity: '1',
                transform: 'translateY(0)'
            });
        });
    }
}

export class Input extends Component {
    constructor(type = 'text', placeholder = '') {
        super();
        this.type = type;
        this.placeholder = placeholder;
        this.createInput();
    }

    createInput() {
        this.element = document.createElement('input');
        this.element.type = this.type;
        this.element.placeholder = this.placeholder;

        this.setStyle(this.element, {
            width: '100%',
            padding: selectedTheme.spacing.sm, // Usando selectedTheme
            border: `1px solid ${selectedTheme.colors.secondary}`, // Usando selectedTheme
            borderRadius: Theme.borderRadius.sm, // Usando selectedTheme
            fontSize: Theme.typography.sizes.md, // Usando selectedTheme
            transition: 'border-color 0.3s'
        });

        this.element.addEventListener('focus', () => {
            this.setStyle(this.element, {
                outline: 'none',
                borderColor: selectedTheme.colors.accent // Usando selectedTheme
            });
        });

        this.element.addEventListener('blur', () => {
            this.setStyle(this.element, {
                borderColor: selectedTheme.colors.secondary // Usando selectedTheme
            });
        });
    }
}

export class List extends Component {
    constructor(items) {
        super();
        this.items = items;
        this.createList();
    }

    createList() {
        this.element = document.createElement('ul');
        this.setStyle(this.element, {
            listStyle: 'none',
            padding: '0',
            margin: `${Theme.spacing.md} 0` // Usando selectedTheme
        });

        this.items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            this.setStyle(li, {
                padding: Theme.spacing.sm, // Usando selectedTheme
                borderBottom: `1px solid ${Theme.colors.secondary}` // Usando selectedTheme
            });
            this.element.appendChild(li);
        });
    }
}
