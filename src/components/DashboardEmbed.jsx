import React, { useState, useRef, useEffect } from 'react';
import { 
  Maximize2, 
  Minimize2, 
  RotateCw, 
  ExternalLink, 
  Layers, 
  BookOpen, 
  SlidersHorizontal,
  Info,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Eye
} from 'lucide-react';

const VIEWS = {
  dashboard: {
    id: 'viz1791356703134',
    title: 'Food Consumer Behavior Analysis',
    shortName: 'Interactive Dashboard',
    tagline: 'Comprehensive multi-metric dashboard with cross-filtering',
    embedName: 'Foodconsumerbehaviouranalyisi/FoodConsumerBehaviorAnalysis',
    webUrl: 'https://public.tableau.com/views/Foodconsumerbehaviouranalyisi/FoodConsumerBehaviorAnalysis',
    defaultHeight: 880,
    staticImage: 'https://public.tableau.com/static/images/Fo/Foodconsumerbehaviouranalyisi/FoodConsumerBehaviorAnalysis/1.png',
    rssImage: 'https://public.tableau.com/static/images/Fo/Foodconsumerbehaviouranalyisi/FoodConsumerBehaviorAnalysis/1_rss.png'
  },
  story: {
    id: 'viz17912899955690',
    title: 'Food Consumer Behavior Story',
    shortName: 'Executive Story Mode',
    tagline: 'Narrative sequential walkthrough of consumer findings',
    embedName: 'Story_17912899955690/FoodConsumerBehavioranalysis',
    webUrl: 'https://public.tableau.com/views/Story_17912899955690/FoodConsumerBehavioranalysis',
    defaultHeight: 920,
    staticImage: 'https://public.tableau.com/static/images/St/Story_17912899955690/FoodConsumerBehavioranalysis/1.png',
    rssImage: 'https://public.tableau.com/static/images/St/Story_17912899955690/FoodConsumerBehavioranalysis/1_rss.png'
  }
};

export default function DashboardEmbed() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [heightMode, setHeightMode] = useState('standard'); // 'standard' | 'tall'
  const containerRef = useRef(null);

  const currentView = VIEWS[activeTab];

  const handleTabChange = (tabId) => {
    if (tabId !== activeTab) {
      setIsLoading(true);
      setActiveTab(tabId);
      setReloadKey(prev => prev + 1);
    }
  };

  const handleReload = () => {
    setIsLoading(true);
    setReloadKey(prev => prev + 1);
  };

  // Fullscreen support
  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => {
        console.error('Fullscreen request failed', err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const targetHeight = isFullscreen 
    ? '100vh' 
    : heightMode === 'tall' 
      ? '1050px' 
      : `${currentView.defaultHeight}px`;

  // Tableau viz_v1.js initialization on mount / tab change / reload
  useEffect(() => {
    setIsLoading(true);

    const divElement = document.getElementById(currentView.id);
    if (divElement) {
      const vizElement = divElement.getElementsByTagName('object')[0];
      if (vizElement) {
        if (divElement.offsetWidth > 800) {
          vizElement.style.width = '100%';
          vizElement.style.height = targetHeight;
        } else if (divElement.offsetWidth > 500) {
          vizElement.style.width = '100%';
          vizElement.style.height = targetHeight;
        } else {
          vizElement.style.width = '100%';
          vizElement.style.height = '1800px';
        }
        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        scriptElement.onload = () => {
          setTimeout(() => setIsLoading(false), 800);
        };
        vizElement.parentNode.insertBefore(scriptElement, vizElement);
      }
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, [activeTab, reloadKey, targetHeight, currentView.id]);

  return (
    <section id="dashboard" className="dashboard-section">
      <div className="container dashboard-container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <span className="status-dot"></span>
            <span>Live Interactive Visualization</span>
          </div>
          <h2 className="section-title">
            Food Consumer Behavior <span className="gradient-text">Analytics</span>
          </h2>
          <p className="section-subtitle">
            Interact with the real-time Tableau Public visualization below. Filter data points, 
            hover over charts for granular tooltips, and toggle between the complete dashboard and executive story.
          </p>
        </div>

        {/* Dashboard Control Bar */}
        <div className="dashboard-toolbar glass-panel">
          {/* View Switcher Tabs */}
          <div className="view-switcher-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'dashboard'}
              className={`tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => handleTabChange('dashboard')}
            >
              <SlidersHorizontal size={17} />
              <span>Full Dashboard</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'story'}
              className={`tab-btn ${activeTab === 'story' ? 'active' : ''}`}
              onClick={() => handleTabChange('story')}
            >
              <BookOpen size={17} />
              <span>Executive Story</span>
            </button>
          </div>

          {/* Quick Controls & Status */}
          <div className="toolbar-actions">
            {/* Live Indicator */}
            <div className="live-status-chip" title="Connected to Tableau Public Cloud">
              <span className="live-pulse-dot"></span>
              <span className="live-text">Tableau Cloud Live</span>
            </div>

            {/* Height Toggle (Desktop) */}
            <button
              type="button"
              className="toolbar-btn height-toggle-btn"
              onClick={() => setHeightMode(heightMode === 'standard' ? 'tall' : 'standard')}
              title={`Toggle view height (Current: ${heightMode === 'standard' ? 'Standard 880px' : 'Tall 1050px'})`}
            >
              <span>{heightMode === 'standard' ? '880px' : '1050px'}</span>
            </button>

            {/* Refresh/Reload Button */}
            <button
              type="button"
              className="toolbar-btn"
              onClick={handleReload}
              aria-label="Reload dashboard visualization"
              title="Reload dashboard visualization"
            >
              <RotateCw size={17} className={isLoading ? 'animate-spin' : ''} />
              <span className="btn-label-desktop">Reset View</span>
            </button>

            {/* Fullscreen Button */}
            <button
              type="button"
              className="toolbar-btn"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
              title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            >
              {isFullscreen ? <Minimize2 size={17} /> : <Maximize2 size={17} />}
              <span className="btn-label-desktop">{isFullscreen ? 'Exit' : 'Fullscreen'}</span>
            </button>

            {/* Open in Tableau Public External Link */}
            <a
              href={currentView.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="toolbar-btn external-tableau-link"
              title="Open visualization in Tableau Public in a new tab"
            >
              <ExternalLink size={17} />
              <span className="btn-label-desktop">Tableau Public</span>
            </a>
          </div>
        </div>

        {/* Tableau Visualization Container */}
        <div 
          ref={containerRef}
          className={`viz-embed-wrapper glass-panel ${isFullscreen ? 'is-fullscreen' : ''}`}
        >
          {/* Top Frame Bar */}
          <div className="viz-window-bar">
            <div className="viz-window-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="viz-window-info">
              <span className="viz-current-title">{currentView.title}</span>
              <span className="viz-security-tag">
                <ShieldCheck size={13} className="text-emerald" />
                <span>Verified Tableau Public Embed</span>
              </span>
            </div>
          </div>

          {/* Viz Canvas Area */}
          <div 
            className="viz-canvas"
            style={{ 
              height: targetHeight,
              minHeight: '620px',
              position: 'relative'
            }}
          >
            {/* Loading Overlay */}
            {isLoading && (
              <div className="viz-loader-overlay">
                <div className="loader-inner-card glass-panel">
                  <div className="loader-spinner-box">
                    <div className="pulse-ring"></div>
                    <RotateCw size={36} className="loader-icon-spin" />
                  </div>
                  <h3 className="loader-title">Loading Tableau Visualization</h3>
                  <p className="loader-desc">
                    Retrieving interactive workbook sheets and data aggregations from Tableau Public servers...
                  </p>
                  <div className="loader-progress-track">
                    <div className="loader-progress-bar"></div>
                  </div>
                  <div className="loader-hint">
                    <Sparkles size={14} />
                    <span>Tip: Once loaded, click directly on any chart element to cross-filter</span>
                  </div>
                </div>
              </div>
            )}

            {/* Official Tableau Public Embed Placeholder */}
            <div 
              key={`tableau-${activeTab}-${reloadKey}`}
              className="tableauPlaceholder" 
              id={currentView.id} 
              style={{ position: 'relative', width: '100%', height: '100%' }}
            >
              <noscript>
                <a href={currentView.webUrl} target="_blank" rel="noreferrer">
                  <img 
                    alt={currentView.title} 
                    src={currentView.rssImage} 
                    style={{ border: 'none' }} 
                  />
                </a>
              </noscript>
              <object className="tableauViz" style={{ display: 'none', width: '100%', height: '100%' }}>
                <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
                <param name="embed_code_version" value="3" />
                <param name="site_root" value="" />
                <param name="name" value={currentView.embedName} />
                <param name="tabs" value="no" />
                <param name="toolbar" value="yes" />
                <param name="static_image" value={currentView.staticImage} />
                <param name="animate_transition" value="yes" />
                <param name="display_static_image" value="yes" />
                <param name="display_spinner" value="yes" />
                <param name="display_overlay" value="yes" />
                <param name="display_count" value="yes" />
                <param name="language" value="en-US" />
              </object>
            </div>
          </div>

          {/* Viz Footer Bar */}
          <div className="viz-window-footer">
            <div className="viz-footer-left">
              <span className="viz-source-pill">Dataset: Food Consumer Behavior</span>
              <span className="viz-author-pill">Author: Tableau Public Creator</span>
            </div>
            <div className="viz-footer-right">
              <span>Interactive Filter Mode: Active</span>
            </div>
          </div>
        </div>

        {/* Dashboard Interaction Guide & Information Cards */}
        <div className="viz-guide-grid">
          <div className="guide-card glass-panel">
            <div className="guide-card-header">
              <HelpCircle size={18} className="guide-icon cyan" />
              <h4>How to Interact</h4>
            </div>
            <p>
              Click directly on any data point, category bar, or geographic region in the dashboard to apply cross-sheet filtering across all visual elements in real time.
            </p>
          </div>

          <div className="guide-card glass-panel">
            <div className="guide-card-header">
              <Eye size={18} className="guide-icon purple" />
              <h4>Tooltips & Details</h4>
            </div>
            <p>
              Hover your cursor over marks to inspect precise percentages, sample sizes, and consumer segments calculated across the food consumption dataset.
            </p>
          </div>

          <div className="guide-card glass-panel">
            <div className="guide-card-header">
              <RotateCw size={18} className="guide-icon emerald" />
              <h4>Reverting & Downloading</h4>
            </div>
            <p>
              Use the native Tableau toolbar at the bottom of the embed to undo selections, revert to the initial state, or download visualization summaries.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
