import { applyTheme } from "./styles.js";

let currentTheme = localStorage.getItem('theme') || 'light';

// Função para alternar entre 'light' e 'dark'
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light'; 
    localStorage.setItem('theme', currentTheme); // Armazena a escolha no localStorage
    applyTheme(currentTheme); // Aplica o novo tema
    updateIcon(currentTheme); // Atualiza o ícone
}

// Função para atualizar o ícone com base no tema
function updateIcon(theme) {
    const icon = themeToggleButton.querySelector('svg');
    // Modifica o ícone com base no tema
    if (theme === 'light') {
        icon.setAttribute('d', 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'); // Sol
    } else {
        icon.setAttribute('d', 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z'); // Lua
    }
}

// Criar o botão de alternância
const themeToggleButton = document.createElement('button');
themeToggleButton.setAttribute('aria-label', 'Alternar Tema');

// Adicionar ícone SVG dentro do botão
themeToggleButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d0c0c" stroke-width="2.5714285714285716" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v2"/>
        <path d="M12 20v2"/>
        <path d="m4.93 4.93 1.41 1.41"/>
        <path d="m17.66 17.66 1.41 1.41"/>
        <path d="M2 12h2"/>
        <path d="M20 12h2"/>
        <path d="m6.34 17.66-1.41 1.41"/>
        <path d="m19.07 4.93-1.41 1.41"/>
    </svg>
`;

// Estilizar o botão usando JavaScript
themeToggleButton.style.background = 'none';
themeToggleButton.style.border = 'none';
themeToggleButton.style.display = 'flex';
themeToggleButton.style.justifyContent = 'center';
themeToggleButton.style.alignItems = 'center';
themeToggleButton.style.cursor = 'pointer';
themeToggleButton.style.padding = '10px';
themeToggleButton.style.transition = 'background-color 0.3s ease, transform 0.3s ease';
themeToggleButton.style.borderRadius = '50%';
themeToggleButton.style.width = '50px';
themeToggleButton.style.height = '50px';

// Adicionar efeito de hover
themeToggleButton.addEventListener('mouseover', () => {
    themeToggleButton.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    themeToggleButton.style.transform = 'scale(1.1)';
});

// Remover efeito de hover
themeToggleButton.addEventListener('mouseout', () => {
    themeToggleButton.style.backgroundColor = 'transparent';
    themeToggleButton.style.transform = 'scale(1)';
});

// Adicionar o evento de clique no botão para alternar o tema
themeToggleButton.addEventListener('click', toggleTheme);

// Verificar e aplicar o tema atual ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme);
    updateIcon(currentTheme);
});

// Adicionar o botão no DOM (exemplo, adicionar ao body)
document.body.appendChild(themeToggleButton);

export { themeToggleButton };
