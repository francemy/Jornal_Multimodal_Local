function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const footerContent = `
        <div class="footer-container">
            <div class="footer-logo">
                <h2>Jornal Local Diário</h2>
            </div>
            <div class="footer-links">
                <a href="#todos">Todos</a>
                <a href="#local">Local</a>
                <a href="#esporte">Esporte</a>
                <a href="#cultura">Cultura</a>
                <a href="#politica">Política</a>
            </div>
            <div class="footer-social">
                <a href="#" target="_blank">Facebook</a>
                <a href="#" target="_blank">Twitter</a>
                <a href="#" target="_blank">Instagram</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Jornal Local Diário - Todos os direitos reservados.</p>
        </div>
    `;

    footer.innerHTML = footerContent;

    return footer;
}

export { createFooter };
