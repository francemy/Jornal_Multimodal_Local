
# Jornal Multimodal Local

## Descrição
O **Jornal Multimodal Local** é um projeto voltado para a criação de um site responsivo e interativo, com um design adaptativo para diferentes dispositivos. O objetivo é oferecer uma experiência de leitura otimizada para notícias locais, com a combinação de **mídias combinadas** (CSS) e **elementos interativos**. O site conta com uma estrutura moderna, onde as notícias são apresentadas através de **cards** com imagens, títulos e textos, além de menus e elementos responsivos.

## Tecnologias Utilizadas
- **HTML**: Estrutura do conteúdo da página.
- **CSS**: Estilização, incluindo o uso de *mídias combinadas* para tornar o layout responsivo.
- **JavaScript**: Funcionalidade interativa, como navegação e modais dinâmicos.
- **CSS Flexbox e Grid**: Layouts dinâmicos e responsivos para garantir uma experiência fluída em qualquer tamanho de tela.
- **JavaScript (ES6+)**: Manipulação do DOM e interação com o usuário.

## Funcionalidades
### 1. **Design Responsivo**
   Utilizando consultas de mídia (media queries), o design do site se adapta a diferentes tamanhos de tela:
   - **Desktops grandes**
   - **Tablets**
   - **Smartphones**
   
### 2. **Cards de Notícia**
   As notícias são apresentadas em **cards**, cada um com uma imagem, título, descrição e um botão de detalhes. O layout dos cards se ajusta automaticamente conforme o tamanho da tela.

### 3. **Navegação e Menu Responsivo**
   O menu de navegação é projetado para ser **responsivo**, utilizando um botão de alternância (hamburger) em dispositivos móveis. Ele contém links para diferentes seções do site, como:
   - Início
   - Notícias
   - Sobre
   - Contato

### 4. **Modais Interativos**
   - Ao clicar em um **card de notícia**, o conteúdo é exibido em um modal dinâmico com mais informações.
   - Também é possível visualizar a imagem em tamanho maior em um modal específico.

### 5. **Alternância de Tema**
   O site oferece a funcionalidade de alternar entre **modo claro** e **modo escuro**, utilizando armazenamento local (`localStorage`) para lembrar a preferência do usuário.

## Estrutura do Projeto
A estrutura básica do projeto segue uma organização limpa e modular. Aqui estão os principais componentes do código:

### 1. **`components.js`**
   - **Componentes básicos**: Card, Botão, Input, Lista.
   - Cada componente é criado de forma dinâmica com manipulação de DOM e aplicação de estilos diretamente via JavaScript.

### 2. **`styles.js`**
   - **Tema**: Contém as cores, bordas, tipografia e sombras que podem ser alteradas conforme o tema escolhido (claro ou escuro).
   - **Função `injectBaseStyles`**: Injeta os estilos CSS base para a página.

### 3. **`modalInfo.js`** e **`modalImagem.js`**
   - **Modal de Detalhes**: Exibe mais informações sobre uma notícia.
   - **Modal de Imagem**: Exibe a imagem do card em tamanho maior.

### 4. **`themes.js`**
   - Define as variáveis de tema (cores, bordas, tipografia, etc.) para os modos claro e escuro.

### 5. **`styleSystem.js`**
   - Gerencia a aplicação dos temas e define a lógica para alternar entre os modos claro e escuro.

## Mídias Combinadas (Media Queries)
### O que são?
Mídias combinadas são consultas de mídia que combinam múltiplos critérios para aplicar regras CSS de maneira eficiente e adaptativa, dependendo das condições da tela (ex: largura, altura, orientação, etc.).

### Como as mídias combinadas ajudam no design responsivo?
Com as mídias combinadas, você pode:
- Criar layouts que se ajustam de forma fluída, dependendo do tamanho da tela.
- Manter um código CSS mais limpo e organizado, combinando várias condições em uma única consulta.
- Garantir que o conteúdo seja bem apresentado em dispositivos grandes (como desktops), médios (tablets) e pequenos (smartphones).

**Exemplo de consulta de mídia combinada:**
```css
@media (min-width: 768px) and (max-width: 1024px) {
    .card {
        flex-direction: column;
    }
}
```

## Como Rodar o Projeto
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/jornal-multimodal-local.git
   ```
/Jornal_Multimodal_Local
│
├── /js
│   ├── main.js
│   ├── components.js
│   ├── modalInfo.js
│   ├── modalImagem.js
│   ├── styles.js
│   ├── themes.js
│   └── script.js  (caso exista)
│
├── /styles
│   ├── base.css
│   ├── layout.css
│   ├── theme.css
│   └── media.css  (caso exista)
│
└── index.html


2. Abra o arquivo `index.html` em seu navegador.

## Contribuições
Contribuições são bem-vindas! Para contribuir com o projeto, siga estas etapas:
1. Faça um fork do repositório.
2. Crie uma branch para a sua contribuição (`git checkout -b feature/novo-recurso`).
3. Faça as alterações necessárias e comite-as (`git commit -m 'Adiciona novo recurso'`).
4. Envie para o repositório original (`git push origin feature/novo-recurso`).
5. Abra um pull request.

## Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

---

Desenvolvido com ❤️ por Francemy Eduardo Sebastião.
```

### Explicação do `README.md`:
- **Descrição e Tecnologias Utilizadas**: A primeira seção descreve o objetivo do projeto e as tecnologias que foram utilizadas.
- **Funcionalidades**: Explica os principais recursos que o projeto oferece, como o design responsivo, a alternância de temas, os cards de notícias, e os modais interativos.
- **Estrutura do Projeto**: Descreve brevemente a estrutura dos arquivos principais e os componentes do código.
- **Mídias Combinadas**: Explica o conceito de **mídias combinadas** e como elas são aplicadas no projeto.
- **Instruções de Como Rodar**: Orientações para rodar o projeto localmente.
- **Contribuições e Licença**: Instruções para contribuir com o projeto e informações sobre a licença.

Este `README.md` serve como uma documentação completa para desenvolvedores que queiram entender o projeto, como ele funciona, e como contribuições podem ser feitas.