export class ModalInfo {
    constructor(title, message) {
        this.title = title;
        this.message = message;
        this.modalElement = null;
    }

    createModal() {
        // Cria o modal
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        `;

        // Cria o conteúdo do modal
        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: white;
            padding: 20px;
            border-radius: 8px;
            max-width: 500px;
            width: 90%;
            text-align: center;
        `;

        const titleElement = document.createElement('h2');
        titleElement.textContent = this.title;
        titleElement.style.cssText = `margin-bottom: 10px; color: #333;`;

        const messageElement = document.createElement('p');
        messageElement.textContent = this.message;
        messageElement.style.cssText = `margin-bottom: 20px; color: #555;`;

        const closeButton = document.createElement('button');
        closeButton.textContent = "Fechar";
        closeButton.style.cssText = `
            padding: 10px 20px;
            background: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        `;

        closeButton.addEventListener('click', () => this.closeModal());

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
