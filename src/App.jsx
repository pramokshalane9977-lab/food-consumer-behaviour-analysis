import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardEmbed from './components/DashboardEmbed';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('analytics_theme');
    return savedTheme ? savedTheme : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('analytics_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app-layout">
      {/* Ambient background blur elements */}
      <div className="ambient-bg-glow" />
      <div className="ambient-bg-glow-secondary" />

      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="main-content">
        <Hero />
        <DashboardEmbed />
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
