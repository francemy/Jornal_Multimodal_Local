import Theme from './themes.js';

class StyleSystem {
    constructor() {
        this.styles = {
            colors: Theme.colors,
            spacing: Theme.spacing,
            typography: Theme.typography,
            borderRadius: Theme.borderRadius,
            shadows: Theme.shadows,
            containers: Theme.containers,
        };
    }

    injectBaseStyles() {
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            /* Reset básico */
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            /* Corpo da página */
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
            }

            /* Cabeçalho */
            header {
                background-color: #333;
                color: white;
                padding: 1rem;
                position: sticky;
                top: 0;
                z-index: 100;
            }

            header h1 {
                margin-bottom: 10px;
            }

            nav ul {
                display: flex;
                justify-content: center;
                gap: 20px;
                list-style: none;
            }

            nav ul li a {
                color: white;
                text-decoration: none;
                font-weight: bold;
            }

            nav ul li a:hover {
                text-decoration: underline;
            }

            /* Main content */
            main {
                max-width: 1200px;
                margin: 20px auto;
                padding: 20px;
            }

            #newsContainer {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 20px;
            }

            /* Cards de notícia */
            .card {
                background-color: #f4f4f4;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s ease;
            }

            .card:hover {
                transform: translateY(-10px);
            }

            .card img {
                width: 100%;
                height: 200px;
                object-fit: cover;
            }

            .card .card-body {
                padding: 15px;
            }

            .card .card-body h3 {
                font-size: 1.2rem;
                margin-bottom: 10px;
            }

            .card .card-body p {
                font-size: 1rem;
                color: #333;
            }

            .modal {
                animation: fadeIn 0.3s ease-out;
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }

            /* Responsividade */
            @media (max-width: 768px) {
                #newsContainer {
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                }

                .menu-toggle {
                    display: block;
                }

                .menu-list {
                    display: none;
                    flex-direction: column;
                    gap: 10px;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    background-color: #343a40;
                    padding: 10px 0;
                    z-index: 1000;
                }

                .menu-list.open {
                    display: flex;
                }
            }

            /* Estilos básicos do menu */
            .menu {
                background-color: #343a40;
                color: #ffffff;
                padding: 10px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: relative;
            }

            .menu-toggle {
                background: none;
                border: none;
                color: #ffffff;
                font-size: 24px;
                cursor: pointer;
                display: none;
            }

            .menu-list {
                display: flex;
                gap: 15px;
                align-items: center;
            }

            .menu-item {
                background: none;
                border: none;
                color: #ffffff;
                font-size: 16px;
                cursor: pointer;
                transition: background-color 0.3s, color 0.3s;
                padding: 5px 10px;
                border-radius: 5px;
            }

            .menu-item:hover, .menu-item.active {
                background-color: #17a2b8;
                color: #ffffff;
            }

            .menu-item:focus {
                outline: none;
            }

            /* Estilos baseados no tema */
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: ${this.styles.typography.fontFamily};
            }

            body {
                background-color: var(--bgPrimary);
                color: var(--textPrimary);
                font-size: ${this.styles.typography.sizes.md};
                line-height: 1.6;
            }

            h1, h2, h3, h4, h5, h6 {
                font-size: ${this.styles.typography.sizes.lg};
                color: var(--textPrimary);
            }

            p {
                font-size: ${this.styles.typography.sizes.sm};
                color: var(--textSecondary);
                line-height: 1.6;
            }

            a {
                text-decoration: none;
                color: var(--accent);
                transition: color 0.3s;
            }

            a:hover {
                color: var(--primary);
            }

            .container {
                max-width: ${this.styles.containers.lg};
                margin: 0 auto;
                padding: ${this.styles.spacing.md};
            }

            .card {
                background: var(--bgSecondary);
                border-radius: ${this.styles.borderRadius.md};
                box-shadow: ${this.styles.shadows.sm};
                padding: ${this.styles.spacing.md};
                margin: ${this.styles.spacing.sm};
                transition: transform 0.3s, box-shadow 0.3s;
            }

            .card:hover {
                transform: translateY(-5px);
                box-shadow: ${this.styles.shadows.md};
            }

            .btn {
                background-color: var(--accent);
                color: var(--textLight);
                padding: ${this.styles.spacing.sm} ${this.styles.spacing.md};
                border-radius: ${this.styles.borderRadius.sm};
                border: none;
                cursor: pointer;
                font-size: ${this.styles.typography.sizes.md};
                transition: background-color 0.3s;
            }

            .btn:hover {
                background-color: var(--primary);
            }

            .footer {
                background-color: var(--bgSecondary);
                padding: ${this.styles.spacing.lg} ${this.styles.spacing.sm};
                color: var(--textLight);
                text-align: center;
            }

            .footer a {
                color: var(--textLight);
                margin: ${this.styles.spacing.sm};
            }

            .footer a:hover {
                opacity: 0.7;
            }

            
            /* Responsividade */
            @media (max-width: ${this.styles.containers.md}) {
                .container {
                    padding: ${this.styles.spacing.sm};
                }

                .card {
                    margin: ${this.styles.spacing.xs};
                }

                .footer {
                    padding: ${this.styles.spacing.md};
                }
            }

            @media (max-width: ${this.styles.containers.sm}) {
                h1 {
                    font-size: ${this.styles.typography.sizes.lg};
                }

                .btn {
                    font-size: ${this.styles.typography.sizes.sm};
                }

                .footer a {
                    font-size: ${this.styles.typography.sizes.xs};
                }
            }
        `;
        document.head.appendChild(styleElement);
    }
}

// Variável global para armazenar o tema atual
export let currentTheme = localStorage.getItem('theme') || 'light';
let selectedTheme = Theme[currentTheme]; // Seleção do tema atual
export { selectedTheme };

// Função para aplicar o tema
function applyTheme(theme) {
    const root = document.documentElement;

    // Aplique as cores do tema selecionado
    selectedTheme = Theme[theme]; // Atualiza o tema global

    // Definindo as variáveis CSS
    for (const [key, value] of Object.entries(selectedTheme.colors)) {
        root.style.setProperty(`--${key}`, value);
    }

    // Alterar o fundo e o texto do corpo
    document.body.style.backgroundColor = selectedTheme.colors.bgPrimary;
    document.body.style.color = selectedTheme.colors.textPrimary;
}

// Função para alternar entre temas
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light'; // Alterna o tema
    localStorage.setItem('theme', currentTheme); // Armazena a escolha no localStorage
    applyTheme(currentTheme); // Aplica o novo tema
}

// Verificar e aplicar o tema atual ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme); // Aplica o tema armazenado
});

// Criar um botão para alternar entre os temas (opcional)
const themeToggleButton = document.createElement('button');
themeToggleButton.textContent = 'Alterar Tema';
themeToggleButton.addEventListener('click', toggleTheme);

export { StyleSystem, themeToggleButton };
