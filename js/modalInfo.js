export class ModalInfo {
    constructor(title, message) {
        this.title = title;
        this.message = message;
        this.modalElement = null;
    }

    createModal() {
        // Cria o modal com a configuração de tema
        const modal = document.createElement('div');
        modal.className = `
            fixed inset-0 bg-darkBgDark bg-opacity-80 flex justify-center items-center z-50
        `;

        // Conteúdo do modal
        const modalContent = document.createElement('div');
        modalContent.className = `
            bg-bgPrimary dark:bg-darkPrimary p-4 rounded-md max-w-xl w-90 h-90 text-center shadow-lg overflow-auto  justify-center
            transition transform hover:scale-85
        `;

        // Título do modal
        const titleElement = document.createElement('h2');
        titleElement.textContent = this.title;
        titleElement.className = `
            text-xl font-title text-textPrimary dark:text-darkTextPrimary mb-md
        `;

        // Mensagem do modal
        const messageElement = document.createElement('p');
        messageElement.innerHTML = this.message;
        messageElement.className = `
            text-md text-textSecondary dark:text-darkTextSecondary mb-lg h-90 w-90  justify-center
        `;

        // Botão de fechar
        const closeButton = document.createElement('button');
        closeButton.textContent = "Fechar";
        closeButton.className = `
            px-lg py-sm bg-accent text-bgPrimary rounded-md 
            hover:bg-info hover:scale-105 transition
        `;
        closeButton.addEventListener('click', () => this.closeModal());

        // Adiciona os elementos ao modal
        modalContent.appendChild(titleElement);
        modalContent.appendChild(messageElement);
        modalContent.appendChild(closeButton);
        modal.appendChild(modalContent);

        this.modalElement = modal;
    }

    openModal() {
        if (!this.modalElement) this.createModal();
        document.body.appendChild(this.modalElement);
    }

    closeModal() {
        if (this.modalElement) {
            document.body.removeChild(this.modalElement);
            this.modalElement = null;
        }
    }
}
