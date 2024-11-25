/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.{html,js}",
    "./styles/**/*.css",
    "./public/**/*.{html,js}",
    "index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Cores do tema claro
        primary: "#ffffff", // Fundo claro
        secondary: "#f4f4f4", // Cor de fundo secundário
        accent: "#3498db", // Cor de destaque (azul)
        textPrimary: "#333333", // Texto principal escuro
        textSecondary: "#666666", // Texto secundário
        bgPrimary: "#ffffff", // Cor de fundo principal (branco)
        bgSecondary: "#f4f4f4", // Fundo secundário claro
        bgDark: "#1a1a1a", // Cor escura, caso necessário
        success: "#2ecc71",
        warning: "#f1c40f",
        error: "#e74c3c",
        info: "#3498db",
        // Cores do tema escuro
        darkPrimary: "#1a1a1a", // Fundo escuro
        darkSecondary: "#343a40", // Cor de fundo secundário escuro
        darkAccent: "#e74c3c", // Cor de destaque (vermelho)
        darkTextPrimary: "#ffffff", // Texto claro
        darkTextSecondary: "#999999", // Texto secundário claro
        darkBgPrimary: "#333333", // Cor de fundo principal escuro
        darkBgSecondary: "#444444", // Fundo secundário mais escuro
        darkBgDark: "#1a1a1a", // Fundo mais escuro, se necessário
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"], // Tipografia configurada
        title: ['Georgia', 'serif'], // Fonte personalizada para títulos
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "2rem",
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "2rem",
        xl: "4rem",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0,0,0,0.12)",
        md: "0 4px 6px rgba(0,0,0,0.1)",
        lg: "0 10px 15px rgba(0,0,0,0.1)",
      },
      screens: {
        sm: "640px",
        phones: { max: "640px" },
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        dispPequeno: { min: '320px', max: '639px' },  // Intervalo para telas pequenas (320px até 639px)
        dispMedio: { min: '640px', max: '1023px' },  // Intervalo para telas médias (640px até 1023px)
        dispGrande: { min: '1024px', max: '1535px' }, // Intervalo para telas grandes (1024px até 1535px)
        xl: '1536px', // Tamanho para telas extra grandes (acima de 1535px)
      },
     
      
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("tailwindcss-children"),
    function({ addComponents }) {
      addComponents({
        ".card": {
          backgroundColor: "#f4f4f4", // Cor de fundo
          borderRadius: "8px", // Bordas arredondadas
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombra do card
          overflow: "hidden", // Para garantir que o conteúdo não ultrapasse os limites
          transition: "transform 0.3s ease, box-shadow 0.3s ease", // Transição suave
          "&:hover": {
            transform: "translateY(-10px)", // Efeito de elevação ao passar o mouse
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Intensificação da sombra
          },
        },
        ".card-image": {
          height: "200px", // Altura fixa da imagem
          width: "100%", // Ocupa toda a largura
          objectFit: "cover", // Garante que a imagem seja cortada sem distorção
        },
        ".card-body": {
          padding: "15px", // Espaçamento interno
        },
        ".card-heading": {
          fontSize: "1.2rem", // Tamanho da fonte do título
          marginBottom: "10px", // Espaço inferior
          fontWeight: "bold",
          color: "#333", // Cor do texto
        },
        ".card-text": {
          fontSize: "1rem", // Tamanho da fonte do parágrafo
          color: "#666", // Cor do texto
        },
        ".menu": {
          backgroundColor: "#3498db",
          color: "#ffffff",
          display: "flex",
          gap: "15px",
          fontSize: "16px",
          borderRadius: "5px",
          padding: "1rem",
        },
        ".menu-item": {
          textAlign: "left",
          color: "#333333",
          padding: "5px 10px",
          "&:hover": {
            color: "#17a2b8",
          },
          "&:active": {
            color: "#17a2b8",
          },
        },
      });
    }
  ],
  
};
