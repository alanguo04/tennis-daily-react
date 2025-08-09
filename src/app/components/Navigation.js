"use client";
import { useTheme } from '../hooks/useTheme';
import { motion } from "motion/react";


export default function Navigation({ activePage }) {
  const { isDarkMode, selectedFont, toggleDarkMode, changeFont } = useTheme();

  return (
    <header className="topnav">
      <a href="/" className={activePage === 'home' ? 'active' : ''}>Home</a>
      <a href="/tournament" className={activePage === 'tournament' ? 'active' : ''}>Tournament</a>
      <a href="/player" className={activePage === 'player' ? 'active' : ''}>Player</a>
      <img src="/images/logo.png" alt="logo of tennis daily, with ball as a in daily" />
      <a href="/about" className={activePage === 'about' ? 'active' : ''}>About</a>
      <button 
        onClick={toggleDarkMode} 
        className="dark-mode-btn"
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <select 
        value={selectedFont}
        onChange={(e) => changeFont(e.target.value)}
        className="font-selector"
      >
        <option value="monospace">Monospace</option>
        <option value="Arial, sans-serif">Arial</option>
        <option value="Times New Roman, serif">Times New Roman</option>
        <option value="Georgia, serif">Georgia</option>
      </select>
    </header>
  );
} 