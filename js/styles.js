// styles.js

class StyleSystem {
    constructor() {
        this.styles = {
            // Espaçamentos
            spacing: {
                xs: '0.25rem',
                sm: '0.5rem',
                md: '1rem',
                lg: '2rem',
                xl: '4rem'
            },
            // Tipografia
            typography: {
                fontFamily: 'Arial, sans-serif',
                sizes: {
                    xs: '0.75rem',
                    sm: '0.875rem',
                    md: '1rem',
                    lg: '1.25rem',
                    xl: '1.5rem',
                    '2xl': '2rem'
                }
            },
            // Border radius
            borderRadius: {
                sm: '4px',
                md: '8px',
                lg: '12px'
            },
            // Sombras
            shadows: {
                sm: '0 1px 3px rgba(0,0,0,0.12)',
                md: '0 4px 6px rgba(0,0,0,0.1)',
                lg: '0 10px 15px rgba(0,0,0,0.1)'
            }
        };
    }

    injectBaseStyles() {
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: ${this.styles.typography.fontFamily};
            }

            body {
                line-height: 1.6;
                color: var(--text-primary);
                background-color: var(--bg-primary);
            }
        `;
        document.head.appendChild(styleElement);
    }

    createCard() {
        return {
            element: 'div',
            className: 'card',
            styles: `
                background: var(--bg-primary);
                border-radius: ${this.styles.borderRadius.md};
                box-shadow: ${this.styles.shadows.sm};
                transition: transform 0.3s, box-shadow 0.3s;
                overflow: hidden;
                &:hover {
                    transform: translateY(-5px);
                    box-shadow: ${this.styles.shadows.md};
                }
            `
        };
    }

    createButton(variant = 'primary') {
        return {
            element: 'button',
            className: `btn btn-${variant}`,
            styles: `
                display: inline-block;
                padding: ${this.styles.spacing.sm} ${this.styles.spacing.md};
                border-radius: ${this.styles.borderRadius.sm};
                border: none;
                font-size: ${this.styles.typography.sizes.md};
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s;
                background-color: var(--${variant === 'primary' ? 'accent' : 'secondary'}-color);
                color: var(--text-light);
                &:hover {
                    opacity: 0.9;
                    transform: translateY(-1px);
                }
            `
        };
    }

    createInput() {
        return {
            element: 'input',
            className: 'input',
            styles: `
                width: 100%;
                padding: ${this.styles.spacing.sm};
                border: 1px solid var(--secondary-color);
                border-radius: ${this.styles.borderRadius.sm};
                font-size: ${this.styles.typography.sizes.md};
                transition: border-color 0.3s;
                &:focus {
                    outline: none;
                    border-color: var(--accent-color);
                }
            `
        };
    }

    applyStyles() {
        // Cria um elemento style para os componentes
        const styleElement = document.createElement('style');
        
        // Concatena todos os estilos dos componentes
        const componentStyles = `
            ${this.createCard().styles}
            ${this.createButton().styles}
            ${this.createInput().styles}
        `;

        styleElement.textContent = componentStyles.replace(/&/g, '');
        document.head.appendChild(styleElement);
    }
}

export default StyleSystem;