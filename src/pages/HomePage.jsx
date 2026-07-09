import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, Zap, Users, TrendingUp } from 'lucide-react'
import '../styles/home.css'

const HomePage = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track conversions, leads, and revenue with real-time insights.',
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Lightning-quick dashboards built for speed and reliability.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time updates.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Tracking',
      description: 'Monitor KPIs and optimize your funnel performance.',
    },
  ]

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Build and Optimize Your Sales Funnels
            </h1>
            <p className="hero-description">
              Create high-converting funnels with advanced analytics. Track every visitor, capture leads, and measure conversions in real-time.
            </p>
            <div className="hero-buttons">
              <Link to="/funnel/new" className="btn btn-primary">
                Create Funnel
                <ArrowRight size={20} />
              </Link>
              <Link to="/analytics" className="btn btn-secondary">
                View Analytics
              </Link>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-value">12.5K+</div>
              <div className="stat-label">Funnels Created</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">$2.3M+</div>
              <div className="stat-label">Revenue Tracked</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">98%</div>
              <div className="stat-label">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <h2 className="features-title">Powerful Features for Growth</h2>
          <p className="features-subtitle">Everything you need to build, launch, and optimize your funnels</p>
          
          <div className="features-grid">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="feature-card">
                  <div className="feature-icon">
                    <Icon size={32} />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Transform Your Sales?</h2>
          <p className="cta-description">
            Join thousands of teams using our platform to build high-converting funnels.
          </p>
          <Link to="/funnel/new" className="btn btn-primary btn-lg">
            Get Started Free
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><Link to="/analytics">Analytics</Link></li>
              <li><Link to="/funnel/new">Funnel Builder</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Account</h4>
            <ul>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><a href="#settings">Settings</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Funnel Analytics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
