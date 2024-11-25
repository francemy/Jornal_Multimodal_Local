export class ModalImagem {
    constructor(imageSrc, imageAlt = "Imagem") {
        this.imageSrc = imageSrc;
        this.imageAlt = imageAlt;
        this.modalElement = null;
    }

    createModal() {
        // Cria o modal
        const modal = document.createElement('div');
        modal.className = `
            fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50
        `;

        // Cria o conteúdo do modal
        const img = document.createElement('img');
        img.src = this.imageSrc;
        img.alt = this.imageAlt;
        img.className = `
            max-w-[90%] max-h-[90%] rounded-lg shadow-lg
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
