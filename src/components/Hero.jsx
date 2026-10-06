import React from 'react';
import { 
  ArrowDown, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Filter, 
  Zap,
  MousePointerClick
} from 'lucide-react';

export default function Hero() {
  const scrollToDashboard = () => {
    const el = document.getElementById('dashboard');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Subtle decorative glow orb */}
        <div className="hero-glow-orb" />

        {/* Live Badge */}
        <div className="hero-badge-wrap">
          <div className="badge-pill">
            <span className="status-dot"></span>
            <span>Tableau Public Live Visualization</span>
          </div>
          <span className="hero-subbadge">Food Consumer Behavior Study</span>
        </div>

        {/* Hero Title */}
        <h1 className="hero-title">
          Interactive <span className="gradient-text">Analytics Dashboard</span>
        </h1>

        {/* Description */}
        <p className="hero-description">
          Explore consumer dining behaviors, demographic trends, and purchasing patterns 
          through an interactive Tableau dashboard. Filter data cohorts in real time, 
          inspect distribution metrics, and uncover granular consumer insights without leaving the page.
        </p>

        {/* Hero Action Buttons */}
        <div className="hero-cta-group">
          <button 
            type="button" 
            className="btn-primary hero-main-btn"
            onClick={scrollToDashboard}
            id="view-dashboard-btn"
          >
            <span>View Dashboard</span>
            <ArrowDown size={18} className="btn-icon-bounce" />
          </button>

          <button 
            type="button" 
            className="btn-secondary hero-sec-btn"
            onClick={scrollToAbout}
          >
            <span>Project Overview</span>
          </button>
        </div>

        {/* Key Visualization Features Bar (Highlighting tool capabilities, no fake data charts) */}
        <div className="hero-features-grid">
          <div className="feature-card glass-panel">
            <div className="feature-icon-box cyan">
              <Filter size={20} />
            </div>
            <div className="feature-content">
              <h3>Dynamic Filtering</h3>
              <p>Interact directly with charts to drill down into consumer cohorts, age groups, and preferences.</p>
            </div>
          </div>

          <div className="feature-card glass-panel">
            <div className="feature-icon-box purple">
              <Layers size={20} />
            </div>
            <div className="feature-content">
              <h3>Dual View Modes</h3>
              <p>Toggle seamlessly between the complete analytical dashboard and the guided executive story.</p>
            </div>
          </div>

          <div className="feature-card glass-panel">
            <div className="feature-icon-box emerald">
              <MousePointerClick size={20} />
            </div>
            <div className="feature-content">
              <h3>Direct Tableau Embed</h3>
              <p>Powered by Tableau Public's live cloud engine with full interactivity and zero mock visuals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
