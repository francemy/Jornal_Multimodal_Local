function createMenu() {
    const nav = document.createElement('nav');
    nav.classList.add('menu');

    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.textContent = '☰';

    const menuList = document.createElement('div');
    menuList.classList.add('menu-list');

    const categories = [
        { id: 'todos', label: 'Todos' },
        { id: 'local', label: 'Local' },
        { id: 'esporte', label: 'Esporte' },
        { id: 'cultura', label: 'Cultura' },
        { id: 'politica', label: 'Política' }
    ];

    const buttons = categories.map(category => {
        const button = document.createElement('button');
        button.textContent = category.label;
        button.dataset.category = category.id;
        button.classList.add('menu-item');

        button.addEventListener('click', () => {
            // Remove active state from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Add active state to clicked button
            button.classList.add('active');

            // Dispatch custom event with selected category
            const event = new CustomEvent('change-category', {
                detail: category.id,
                bubbles: true
            });
            button.dispatchEvent(event);
        });

        return button;
    });

    // Set first button as default active
    buttons[0].classList.add('active');

    // Append buttons to menu list
    buttons.forEach(button => menuList.appendChild(button));

    // Toggle menu visibility for small screens
    menuToggle.addEventListener('click', () => {
        menuList.classList.toggle('open');
    });

    nav.appendChild(menuToggle);
    nav.appendChild(menuList);

    return nav;
}

export { createMenu };
