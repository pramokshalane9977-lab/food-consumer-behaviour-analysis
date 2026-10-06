import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ExternalLink, 
  Sparkles,
  Layers
} from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = ['home', 'dashboard', 'about'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="brand-logo"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('home');
          }}
        >
          <div className="brand-icon-box">
            <BarChart3 className="brand-icon" size={22} />
          </div>
          <div className="brand-text">
            <span className="brand-title">Analytics Dashboard</span>
            <span className="brand-subtitle">Tableau Public Edition</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <button 
            type="button"
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => scrollTo('home')}
          >
            Home
          </button>
          <button 
            type="button"
            className={`nav-link ${activeSection === 'dashboard' ? 'active' : ''}`}
            onClick={() => scrollTo('dashboard')}
          >
            Dashboard
            <span className="live-indicator-pill">Live</span>
          </button>
          <button 
            type="button"
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollTo('about')}
          >
            About
          </button>
        </nav>

        {/* Right Actions */}
        <div className="nav-actions">
          {/* Theme Toggle */}
          <button 
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun size={19} className="theme-icon sun-icon" />
            ) : (
              <Moon size={19} className="theme-icon moon-icon" />
            )}
          </button>

          {/* Direct CTA */}
          <button 
            type="button"
            className="btn-primary nav-cta-btn"
            onClick={() => scrollTo('dashboard')}
          >
            <Sparkles size={16} />
            <span>View Viz</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="container mobile-drawer-content">
            <button 
              type="button"
              className={`mobile-nav-item ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollTo('home')}
            >
              <span>Home</span>
            </button>
            <button 
              type="button"
              className={`mobile-nav-item ${activeSection === 'dashboard' ? 'active' : ''}`}
              onClick={() => scrollTo('dashboard')}
            >
              <span>Dashboard</span>
              <span className="live-indicator-pill">Live</span>
            </button>
            <button 
              type="button"
              className={`mobile-nav-item ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollTo('about')}
            >
              <span>About & Methodology</span>
            </button>
            
            <div className="mobile-drawer-footer">
              <button 
                type="button"
                className="btn-primary w-full"
                onClick={() => scrollTo('dashboard')}
              >
                <span>Jump to Interactive Dashboard</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
