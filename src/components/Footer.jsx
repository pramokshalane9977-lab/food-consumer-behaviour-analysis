import React from 'react';
import { 
  BarChart3, 
  ArrowUp, 
  ExternalLink, 
  ShieldCheck, 
  Heart
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        
        {/* Top Tier */}
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="brand-logo footer-logo">
              <div className="brand-icon-box">
                <BarChart3 className="brand-icon" size={22} />
              </div>
              <div className="brand-text">
                <span className="brand-title">Analytics Dashboard</span>
                <span className="brand-subtitle">Interactive Tableau Public Portal</span>
              </div>
            </div>
            <p className="footer-brand-bio">
              Empowering exploratory data analysis through interactive visual intelligence. 
              Delivering deep consumer insights without compromising performance or privacy.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav-list">
              <li>
                <button type="button" onClick={() => scrollToSection('home')}>Home</button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection('dashboard')}>Interactive Dashboard</button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection('about')}>About & Scope</button>
              </li>
            </ul>
          </div>

          {/* Data Resources */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-nav-list">
              <li>
                <a 
                  href="https://public.tableau.com/views/Foodconsumerbehaviouranalyisi/FoodConsumerBehaviorAnalysis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-ext-link"
                >
                  <span>Tableau Dashboard</span>
                  <ExternalLink size={13} />
                </a>
              </li>
              <li>
                <a 
                  href="https://public.tableau.com/views/Story_17912899955690/FoodConsumerBehavioranalysis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-ext-link"
                >
                  <span>Tableau Story</span>
                  <ExternalLink size={13} />
                </a>
              </li>
              <li>
                <a 
                  href="https://public.tableau.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-ext-link"
                >
                  <span>Tableau Public Platform</span>
                  <ExternalLink size={13} />
                </a>
              </li>
            </ul>
          </div>

          {/* Status & Back to Top */}
          <div className="footer-action-col">
            <div className="tableau-powered-card glass-panel">
              <span className="powered-tag">Engine Verified</span>
              <p className="powered-text">Powered by Tableau Public</p>
              <div className="powered-badge">
                <span className="status-dot"></span>
                <span>Active Connection</span>
              </div>
            </div>
            
            <button 
              type="button" 
              className="back-to-top-btn" 
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            <p>© 2026 Analytics Dashboard. All rights reserved.</p>
          </div>
          
          <div className="footer-attribution">
            <span>Powered by Tableau Public</span>
            <span className="footer-divider">•</span>
            <span>Food Consumer Behavior Analysis</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
