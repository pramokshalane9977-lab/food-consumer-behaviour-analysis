import React, { useState } from 'react';
import { 
  BarChart2, 
  Database, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  Layers, 
  Users, 
  ShoppingBag, 
  DollarSign, 
  HeartHandshake,
  Cpu,
  MonitorCheck
} from 'lucide-react';

const ANALYSIS_PILLARS = [
  {
    icon: Users,
    color: 'cyan',
    title: 'Demographic Segmentation',
    description: 'Analyzing how consumer age cohorts, household incomes, and family sizes correlate with dining frequencies and food choice drivers.'
  },
  {
    icon: ShoppingBag,
    color: 'purple',
    title: 'Ordering Channel Dynamics',
    description: 'Evaluating channel adoption across digital delivery apps, dine-in establishments, quick-service counters, and grocery meal kits.'
  },
  {
    icon: DollarSign,
    color: 'emerald',
    title: 'Price Elasticity & Spending',
    description: 'Examining average ticket sizes, promotional discount reliance, and discretionary food expenditure trends across consumer profiles.'
  },
  {
    icon: HeartHandshake,
    color: 'amber',
    title: 'Satisfaction & Loyalty Drivers',
    description: 'Tracking factors that drive repeat orders: delivery speed, ingredient transparency, culinary variety, and value perceptions.'
  }
];

const FAQS = [
  {
    q: 'What is the primary data visualization technology used?',
    a: 'The visual analytical layer is built with Tableau Public, the premier industry standard for interactive data journalism and visual analytics. It handles all dynamic filtering, mark calculations, and aggregation queries on Tableau’s cloud servers.'
  },
  {
    q: 'Can I filter and isolate specific consumer segments?',
    a: 'Yes! The embedded visualization supports full bi-directional cross-filtering. Clicking any visual element—such as a specific age cohort or channel category—will immediately update all dependent charts in the dashboard.'
  },
  {
    q: 'How is responsive sizing handled across different screen sizes?',
    a: 'The embed container dynamically calculates viewport dimensions. On widescreen monitors it offers an expansive 880px to 1050px canvas with high DPI rendering, while gracefully scaling down to a minimum 620px touch-friendly view on mobile devices.'
  },
  {
    q: 'Is there a difference between the Dashboard and Story views?',
    a: 'Yes. The Dashboard view delivers an integrated multi-dimensional command center for self-directed exploration, while the Story view sequences insights chronologically for executive presentations and structured reporting.'
  }
];

export default function AboutSection() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx);
  };

  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <span className="status-dot"></span>
            <span>Project Scope & Background</span>
          </div>
          <h2 className="section-title">
            About the <span className="gradient-text">Analytics Project</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive analytical study investigating food consumer behavioral tendencies, 
            market dynamics, and actionable business intelligence through visual data science.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="pillars-grid">
          {ANALYSIS_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="pillar-card glass-panel">
                <div className={`pillar-icon-box ${pillar.color}`}>
                  <Icon size={22} />
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        {/* Technical Architecture & Value Proposition */}
        <div className="tech-architecture-panel glass-panel">
          <div className="tech-architecture-header">
            <div>
              <span className="badge-pill">Enterprise BI Architecture</span>
              <h3 className="tech-panel-title">Production-Ready Analytics Integration</h3>
            </div>
            <p className="tech-panel-desc">
              Designed with modern web standards, this portal delivers the computational depth of Tableau Public 
              inside a lightweight, high-performance web wrapper optimized for all devices.
            </p>
          </div>

          <div className="tech-features-row">
            <div className="tech-item">
              <div className="tech-item-icon">
                <MonitorCheck size={20} className="text-cyan" />
              </div>
              <div>
                <h4>Zero Mock Data</h4>
                <p>Authentic Tableau Public cloud data visualizations without artificial placeholders.</p>
              </div>
            </div>

            <div className="tech-item">
              <div className="tech-item-icon">
                <Cpu size={20} className="text-purple" />
              </div>
              <div>
                <h4>Optimized Client Runtime</h4>
                <p>React and Vite ensure zero latency page transitions with asynchronous iframe loading.</p>
              </div>
            </div>

            <div className="tech-item">
              <div className="tech-item-icon">
                <CheckCircle2 size={20} className="text-emerald" />
              </div>
              <div>
                <h4>Responsive Sandboxing</h4>
                <p>Fluid viewports with fullscreen capabilities and adaptive height profiles.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive FAQ Section */}
        <div className="faq-section">
          <div className="faq-header">
            <h3 className="faq-main-title">Frequently Asked Questions</h3>
            <p className="faq-subtitle">Everything you need to know about navigating and utilizing this analytics portal.</p>
          </div>

          <div className="faq-list">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`faq-item glass-panel ${isOpen ? 'open' : ''}`}
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="faq-question-row">
                    <span className="faq-q-text">{faq.q}</span>
                    <button 
                      type="button" 
                      className="faq-toggle-arrow"
                      aria-label="Toggle answer"
                      aria-expanded={isOpen}
                    >
                      <ChevronDown size={20} className={`chevron-icon ${isOpen ? 'rotate' : ''}`} />
                    </button>
                  </div>
                  {isOpen && (
                    <div className="faq-answer-row">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
