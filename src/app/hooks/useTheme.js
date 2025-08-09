import { useState, useEffect } from 'react';

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedFont, setSelectedFont] = useState('monospace');

  useEffect(() => {
    // Check for saved dark mode preference
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }

    // Check for saved font preference
    const savedFont = localStorage.getItem('selectedFont');
    if (savedFont) {
      setSelectedFont(savedFont);
      document.body.style.fontFamily = savedFont;
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', null);
    }
  };

  const changeFont = (font) => {
    setSelectedFont(font);
    document.body.style.fontFamily = font;
    localStorage.setItem('selectedFont', font);
  };

  return {
    isDarkMode,
    selectedFont,
    toggleDarkMode,
    changeFont
  };
} 