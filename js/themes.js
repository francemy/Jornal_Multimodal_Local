// themes.js
const Theme = {
    // Cores principais
    colors: {
        primary: '#1a1a1a',
        secondary: '#333',
        accent: '#e74c3c',
        textPrimary: '#333',
        textSecondary: '#666',
        textLight: '#ffffff',
        bgPrimary: '#ffffff',
        bgSecondary: '#f5f5f5',
        bgDark: '#1a1a1a',
        success: '#2ecc71',
        warning: '#f1c40f',
        error: '#e74c3c',
        info: '#3498db'
    },

    // Sombras
    shadows: {
        sm: '0 1px 3px rgba(0,0,0,0.12)',
        md: '0 4px 6px rgba(0,0,0,0.1)',
        lg: '0 10px 15px rgba(0,0,0,0.1)'
    },

    // Border radius
    borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px'
    },

    // Espaçamento
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '2rem',
        xl: '4rem'
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

    // Containers
    containers: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
    }
};

export default Theme;