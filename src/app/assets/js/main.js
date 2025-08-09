// Dark mode functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved dark mode preference
const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Light Mode';
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.textContent = 'Light Mode';
    } else {
        localStorage.setItem('darkMode', null);
        darkModeToggle.textContent = 'Dark Mode';
    }
});

// Font selector functionality
const fontSelector = document.getElementById('font-selector');

// Check for saved font preference
const savedFont = localStorage.getItem('selectedFont');
if (savedFont) {
    document.body.style.fontFamily = savedFont;
    fontSelector.value = savedFont;
}

// Change font
fontSelector.addEventListener('change', (e) => {
    const selectedFont = e.target.value;
    document.body.style.fontFamily = selectedFont;
    localStorage.setItem('selectedFont', selectedFont);
});