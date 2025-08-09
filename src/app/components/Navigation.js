"use client";
import { useTheme } from '../hooks/useTheme';
import { motion } from "motion/react";
import Link from "next/link";

export default function Navigation({ activePage }) {
  const { isDarkMode, selectedFont, toggleDarkMode, changeFont } = useTheme();

  return (
    <header className="topnav">
      <Link href="/" className={activePage === 'home' ? 'active' : ''}>Home</Link>
      <Link href="/tournament" className={activePage === 'tournament' ? 'active' : ''}>Tournament</Link>
      <Link href="/player" className={activePage === 'player' ? 'active' : ''}>Player</Link>
      <img src="/images/logo.png" alt="logo of tennis daily, with ball as a in daily" />
      <Link href="/about" className={activePage === 'about' ? 'active' : ''}>About</Link>
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