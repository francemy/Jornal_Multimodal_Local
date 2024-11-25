export class Component {
  constructor() {
    this.element = null;
  }

  render() {
    return this.element;
  }

  applyClasses(element, classes) {
    if (typeof classes === "string") {
      element.className = classes;
    } else {
      console.warn("Tentativa de aplicar classes inválidas:", classes);
    }
  }
}

export class MediaCard extends Component {
  constructor(mediaType, mediaUrl, title, description) {
    super();
    this.mediaType = mediaType;
    this.mediaUrl = mediaUrl;
    this.title = title;
    this.description = description;
    this.createMediaCard();
  }

  createMediaCard() {
    this.element = document.createElement("div");
    this.applyClasses(
      this.element,
      "media-card border rounded-lg overflow-hidden shadow-lg"
    );

    const mediaContainer = document.createElement("div");
    if (this.mediaType === "image") {
      const image = document.createElement("img");
      image.src = this.mediaUrl;
      image.alt = this.title;
      this.applyClasses(image, "w-full object-cover");
      mediaContainer.appendChild(image);
    } else if (this.mediaType === "video") {
      const video = document.createElement("video");
      video.src = this.mediaUrl;
      video.controls = true;
      this.applyClasses(video, "w-full");
      mediaContainer.appendChild(video);
    }

    const content = document.createElement("div");
    this.applyClasses(content, "p-4 bg-white");

    const titleEl = document.createElement("h2");
    titleEl.textContent = this.title;
    this.applyClasses(titleEl, "text-lg font-bold text-primary mb-2");

    const descriptionEl = document.createElement("p");
    descriptionEl.textContent = this.description;
    this.applyClasses(descriptionEl, "text-sm text-secondary");

    content.appendChild(titleEl);
    content.appendChild(descriptionEl);
    this.element.appendChild(mediaContainer);
    this.element.appendChild(content);
  }
}

export class Card extends Component {
  imageUrl;
  title;
  content;
  desableButton;

  constructor(imageUrl, title, content,desableButton=null) {
    super();
    this.imageUrl = imageUrl;
    this.title = title;
    this.content = content;
    this.desableButton= desableButton
    this.createCard();
  }

  createCard() {
    this.element = document.createElement("article");
    this.applyClasses(
      this.element,
      `card
        `
    );

    // Imagem do card
    if (this.imageUrl) {
      const image = document.createElement("img");
      this.applyClasses(image, "card-image");
      image.src = this.imageUrl;
      image.alt = this.title;

      // Evento de clique na imagem
      image.addEventListener("click", (e) => {
        e.stopPropagation(); // Previne o clique do card inteiro
        this.handleImageClick();
      });
      this.element.appendChild(image);
    }
    const content = document.createElement("div");
    this.applyClasses(content, "card-body");

    const titleEl = document.createElement("h2");
    titleEl.textContent = this.title;
    this.applyClasses(titleEl, "card-heading");

    const contentEl = document.createElement("p");
    contentEl.innerHTML = this.content;
    this.applyClasses(contentEl, "card-text");

    // Botão de ação
    const actionButton = document.createElement("button");
    actionButton.textContent = "Detalhes";
    this.applyClasses(
      actionButton,
      `
            bg-accent text-white py-2 px-4 rounded-md mt-2  ${this.desableButton ? 'hidden' : ''}
            hover:opacity-90 hover:translate-y-0.5 transition-transform
        `
    );

    actionButton.addEventListener("click", (e) => {
      e.stopPropagation();
      this.openDetailsModal();
    });

    content.appendChild(titleEl);
    content.appendChild(contentEl);
    content.appendChild(actionButton);

    this.element.appendChild(content);

    // Clique no card
    this.element.addEventListener("click", () => {
      //console.log(`Card clicado: ${this.title}`);
      //this.handleCardClick();
    });
  }

  handleCardClick() {
    this.openDetailsModal();
  }

  handleImageClick() {
    this.openImagemModal();
  }

  openDetailsModal() {
    import("./modalInfo.js").then(({ ModalInfo }) => {
      const modal = new ModalInfo(this.title, this.content, this.imageUrl);
      modal.openModal();
    });
  }

  openImagemModal() {
    import("./modalImagem.js").then(({ ModalImagem }) => {
      const modal = new ModalImagem(this.imageUrl, this.title);
      modal.openModal();
    });
  }
}

export class Button extends Component {
  constructor(text, variant = "primary") {
    super();
    this.text = text;
    this.variant = variant;
    this.createButton();
  }

  createButton() {
    this.element = document.createElement("button");
    this.element.textContent = this.text;

    const baseClasses = `
            inline-block px-4 py-2 rounded-md font-semibold 
            transition-transform duration-300 cursor-pointer
        `;

    const variantClasses =
      this.variant === "primary"
        ? "bg-accent text-white hover:opacity-90"
        : "bg-secondary text-white hover:opacity-90";

    this.applyClasses(this.element, `${baseClasses} ${variantClasses}`);
  }
}

export class Input extends Component {
  constructor(type = "text", placeholder = "") {
    super();
    this.type = type;
    this.placeholder = placeholder;
    this.createInput();
  }

  createInput() {
    this.element = document.createElement("input");
    this.element.type = this.type;
    this.element.placeholder = this.placeholder;

    this.applyClasses(
      this.element,
      `
            w-full px-3 py-2 border border-secondary rounded-md 
            text-base transition-border duration-300 focus:outline-none focus:border-accent
        `
    );
  }
}

export class List extends Component {
  constructor(items) {
    super();
    this.items = items;
    this.createList();
  }

  createList() {
    this.element = document.createElement("ul");
    this.applyClasses(this.element, "list-none p-0 my-4");

    this.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      this.applyClasses(li, "py-2 border-b border-secondary last:border-b-0");
      this.element.appendChild(li);
    });
  }
}

export class Text extends Component {
  constructor(
    content,
    type = "paragraph",
    additionalClasses = "",
    customStyles = {}
  ) {
    super();
    this.content = content;
    this.type = type;
    this.additionalClasses = additionalClasses;
    this.customStyles = customStyles; // Permite passar estilos personalizados
    this.createText();
  }

  createText() {
    // Definindo o tipo de elemento com base no tipo de texto
    if (this.type === "link") {
      this.element = document.createElement("a"); // Usando a tag <a> para links
    } else {
      this.element = document.createElement("p"); // Padrão como parágrafo
    }

    // Classes padrão com base no tipo de texto
    let baseClasses = "";
    switch (this.type) {
      case "title":
        baseClasses = "text-3xl font-bold text-textPrimary mb-6"; // Título principal
        break;
      case "subtitle":
        baseClasses = "text-2xl font-semibold text-textPrimary mb-4"; // Subtítulo
        break;
      case "paragraph":
        baseClasses = "text-base text-secondary leading-relaxed mb-4"; // Parágrafo
        break;
      case "small":
        baseClasses = "text-sm text-textSecondary"; // Texto pequeno
        break;
      case "error":
        baseClasses = "text-base text-red-600 bg-red-100 p-2 rounded-md"; // Mensagem de erro
        break;
      case "success":
        baseClasses = "text-base text-green-600 bg-green-100 p-2 rounded-md"; // Mensagem de sucesso
        break;
      case "warning":
        baseClasses = "text-base text-yellow-600 bg-yellow-100 p-2 rounded-md"; // Mensagem de alerta
        break;
      case "info":
        baseClasses = "text-base text-blue-600 bg-blue-100 p-2 rounded-md"; // Mensagem informativa
        break;
      case "link":
        baseClasses = "underline hover:text-blue-800"; // Estilo de link
        break;
      case "underline":
        baseClasses = "underline"; // Sublinhado
        break;
      default:
        baseClasses = "text-base text-textPrimary"; // Texto comum
        break;
    }

    // Aplica as classes ao elemento de texto
    this.applyClasses(this.element, `${baseClasses} ${this.additionalClasses}`);

    // Aplica os estilos personalizados (se houver)
    Object.assign(this.element.style, this.customStyles);

    // Define o conteúdo do texto
    this.element.textContent = this.content;

    // Se o tipo for 'link', define o href
    if (this.type === "link") {
      this.element.href = this.content; // A URL para o link será o conteúdo
      this.element.target = "_blank"; // Abre o link em uma nova aba
    }
  }
}
