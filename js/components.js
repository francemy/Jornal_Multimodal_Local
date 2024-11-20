// components.js
import Theme from './themes.js';

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
            background: ${Theme.colors.bgPrimary};
            border-radius: ${Theme.borderRadius.md};
            box-shadow: ${Theme.shadows.sm};
            transition: transform 0.3s, box-shadow 0.3s;
            overflow: hidden;
        `;
        this.setStyle(this.element, cardStyles);
    
        const image = document.createElement('img');
        this.setStyle(image, {
            width: '100%',
            height: '200px',
            objectFit: 'cover'
        });
        image.src = this.imageUrl;
        image.alt = this.title;
    
        const content = document.createElement('div');
        this.setStyle(content, {
            padding: Theme.spacing.md
        });
    
        const titleEl = document.createElement('h2');
        titleEl.textContent = this.title;
        this.setStyle(titleEl, {
            fontSize: Theme.typography.sizes.lg,
            marginBottom: Theme.spacing.sm
        });
    
        const contentEl = document.createElement('p');
        contentEl.textContent = this.content;
        this.setStyle(contentEl, {
            color: Theme.colors.textSecondary
        });
    
        content.appendChild(titleEl);
        content.appendChild(contentEl);
        this.element.appendChild(image);
        this.element.appendChild(content);
    
        this.element.addEventListener('mouseover', () => {
            this.setStyle(this.element, {
                transform: 'translateY(-5px)',
                boxShadow: Theme.shadows.md
            });
        });
    
        this.element.addEventListener('mouseout', () => {
            this.setStyle(this.element, {
                transform: 'translateY(0)',
                boxShadow: Theme.shadows.sm
            });
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
            padding: `${Theme.spacing.sm} ${Theme.spacing.md}`,
            borderRadius: Theme.borderRadius.sm,
            border: 'none',
            fontSize: Theme.typography.sizes.md,
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s'
        };

        const variantStyles = this.variant === 'primary' 
            ? { backgroundColor: Theme.colors.accent, color: Theme.colors.textLight }
            : { backgroundColor: Theme.colors.secondary, color: Theme.colors.textLight };

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
            padding: Theme.spacing.sm,
            border: `1px solid ${Theme.colors.secondary}`,
            borderRadius: Theme.borderRadius.sm,
            fontSize: Theme.typography.sizes.md,
            transition: 'border-color 0.3s'
        });

        this.element.addEventListener('focus', () => {
            this.setStyle(this.element, {
                outline: 'none',
                borderColor: Theme.colors.accent
            });
        });

        this.element.addEventListener('blur', () => {
            this.setStyle(this.element, {
                borderColor: Theme.colors.secondary
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
            margin: `${Theme.spacing.md} 0`
        });

        this.items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            this.setStyle(li, {
                padding: Theme.spacing.sm,
                borderBottom: `1px solid ${Theme.colors.secondary}`
            });
            this.element.appendChild(li);
        });
    }
}