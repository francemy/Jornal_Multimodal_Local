export class ModalImagem {
    constructor(imageSrc, imageAlt = "Imagem") {
        this.imageSrc = imageSrc;
        this.imageAlt = imageAlt;
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
        const img = document.createElement('img');
        img.src = this.imageSrc;
        img.alt = this.imageAlt;
        img.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        `;

        // Fecha o modal ao clicar fora da imagem
        modal.addEventListener('click', () => this.closeModal());

        modal.appendChild(img);
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
