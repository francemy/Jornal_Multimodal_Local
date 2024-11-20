const Theme = {
    // Definindo as cores do tema claro
    light: {
        colors: {
            primary: '#ffffff',     // Fundo claro
            secondary: '#f4f4f4',   // Cor de fundo secundário
            accent: '#3498db',      // Cor de destaque (azul)
            textPrimary: '#333333', // Texto principal escuro
            textSecondary: '#666666', // Texto secundário
            bgPrimary: '#ffffff',   // Cor de fundo principal (branco)
            bgSecondary: '#f4f4f4', // Fundo secundário claro
            bgDark: '#1a1a1a',      // Cor escura, caso necessário
            success: '#2ecc71',
            warning: '#f1c40f',
            error: '#e74c3c',
            info: '#3498db'
        }
    },

    // Definindo as cores do tema escuro
    dark: {
        colors: {
            primary: '#1a1a1a',     // Fundo escuro
            secondary: '#343a40',   // Cor de fundo secundário escuro
            accent: '#e74c3c',      // Cor de destaque (vermelho)
            textPrimary: '#ffffff', // Texto claro
            textSecondary: '#999999', // Texto secundário claro
            bgPrimary: '#333333',   // Cor de fundo principal escuro
            bgSecondary: '#444444', // Fundo secundário mais escuro
            bgDark: '#1a1a1a',      // Fundo mais escuro, se necessário
            success: '#2ecc71',
            warning: '#f1c40f',
            error: '#e74c3c',
            info: '#3498db'
        }
    },

    // Tipografia
    typography: {
        fontFamily: 'Arial, sans-serif',
        sizes: {
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '2xl': '2rem'
        }
    },

    // Espaçamento
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '2rem',
        xl: '4rem'
    },

    // Border radius
    borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px'
    },

    // Sombras
    shadows: {
        sm: '0 1px 3px rgba(0,0,0,0.12)',
        md: '0 4px 6px rgba(0,0,0,0.1)',
        lg: '0 10px 15px rgba(0,0,0,0.1)'
    },

    // Containers para responsividade
    containers: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
    },

    // Estilos do menu
    menu: {
        backgroundColor: '#343a40',
        color: '#ffffff',
        gap: '15px',
        fontSize: '16px',
        hoverColor: '#17a2b8',
        activeColor: '#17a2b8',
        itemPadding: '5px 10px',
        borderRadius: '5px'
    },

    // Estilos dos cards
    card: {
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        hoverTransform: 'translateY(-10px)',
        imageHeight: '200px',
        cardBodyPadding: '15px',
        headingFontSize: '1.2rem',
        paragraphFontSize: '1rem',
        textColor: '#333'
    },

    // Responsividade
    mediaQueries: {
        maxWidth768: '(max-width: 768px)'
    }
};

export default Theme;
