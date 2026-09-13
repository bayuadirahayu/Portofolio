import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Download } from 'lucide-react';

export default function Header({ theme, toggleTheme }) {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const formatted = new Intl.DateTimeFormat('id-ID', options).format(now);
      setTimeString(`Bandung, ID [${formatted} WIB]`);
    }

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header 
      className="site-header"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container nav-inner">
        {/* Monogram Logo */}
        <a href="#hero" className="brand-logo">
          <span className="brand-monogram">BAY</span>
          <span className="brand-name">BAYU ADI RAHAYU</span>
        </a>

        {/* Status Indicator & Live WIB Clock */}
        <div className="nav-status">
          <div className="status-indicator">
            <span className="pulse-dot"></span>
            <span>Available for Projects</span>
          </div>
          <div className="live-clock">{timeString || 'Bandung, ID [WIB]'}</div>
        </div>

        {/* Navigation Links */}
        <nav className="nav-menu">
          <a href="#about" className="nav-link">Studio</a>
          <a href="#work" className="nav-link">Work</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a 
            href="Bayu adi rahayu-resume .pdf" 
            className="btn-resume" 
            download 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={13} />
            <span>CV Resume</span>
          </a>
          <div className="theme-switch-pill">
            <button 
              className={`theme-switch-btn ${theme === 'light' ? 'active' : ''}`}
              onClick={() => theme !== 'light' && toggleTheme()}
              aria-label="Light mode"
            >
              Light
            </button>
            <button 
              className={`theme-switch-btn ${theme === 'dark' ? 'active' : ''}`}
              onClick={() => theme !== 'dark' && toggleTheme()}
              aria-label="Dark mode"
            >
              Dark
            </button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
