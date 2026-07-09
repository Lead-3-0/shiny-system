import React from 'react'
import { TrendingUp, Users, Zap, DollarSign, ArrowRight, MoreVertical } from 'lucide-react'
import '../styles/pages/dashboard.css'

const Dashboard = () => {
  // KPI Data
  const kpis = [
    {
      title: 'Total Leads',
      value: '2,543',
      change: '+12.5%',
      icon: Users,
      color: 'primary',
    },
    {
      title: 'Active Automations',
      value: '18',
      change: '+3',
      icon: Zap,
      color: 'secondary',
    },
    {
      title: 'Revenue This Month',
      value: '$28,450',
      change: '+22%',
      icon: DollarSign,
      color: 'success',
    },
    {
      title: 'Conversion Rate',
      value: '12.4%',
      change: '+2.1%',
      icon: TrendingUp,
      color: 'info',
    },
  ]

  // AI Activity Feed
  const activities = [
    {
      type: 'lead_captured',
      title: 'New Lead Captured',
      description: 'John Smith from Acme Corp',
      timestamp: '2 min ago',
      avatar: 'JS',
    },
    {
      type: 'automation_triggered',
      title: 'Automation Triggered',
      description: 'Welcome Email - 142 recipients',
      timestamp: '15 min ago',
      avatar: '🤖',
    },
    {
      type: 'lead_qualified',
      title: 'Lead Qualified',
      description: 'Sarah Johnson scored 8.5/10',
      timestamp: '32 min ago',
      avatar: 'SJ',
    },
    {
      type: 'campaign_sent',
      title: 'Campaign Sent',
      description: 'Q4 Sales Campaign - 5K recipients',
      timestamp: '1 hour ago',
      avatar: '📧',
    },
  ]

  // Lead Pipeline
  const pipeline = [
    { stage: 'New', count: 234, color: 'primary' },
    { stage: 'Contacted', count: 189, color: 'info' },
    { stage: 'Qualified', count: 142, color: 'secondary' },
    { stage: 'Proposal', count: 87, color: 'warning' },
    { stage: 'Closed', count: 56, color: 'success' },
  ]

  // Recent Automations
  const automations = [
    {
      name: 'Welcome Email',
      status: 'active',
      runs: '542',
      success: '98.5%',
    },
    {
      name: 'Follow-up Sequence',
      status: 'active',
      runs: '318',
      success: '95.2%',
    },
    {
      name: 'Lead Scoring',
      status: 'paused',
      runs: '156',
      success: '92.1%',
    },
  ]

  return (
    <div className="dashboard-page">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Welcome back! Here's your performance overview.</p>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon
          return (
            <div key={idx} className={`kpi-card kpi-${kpi.color}`}>
              <div className="kpi-header">
                <Icon size={24} className="kpi-icon" />
                <span className="kpi-change">{kpi.change}</span>
              </div>
              <h3 className="kpi-title">{kpi.title}</h3>
              <p className="kpi-value">{kpi.value}</p>
            </div>
          )
        })}
      </div>

      {/* Main Grid */}
      <div className="dashboard-grid">
        {/* AI Activity Feed */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2 className="section-title">AI Activity Feed</h2>
          </div>
          <div className="activity-feed">
            {activities.map((activity, idx) => (
              <div key={idx} className={`activity-item activity-${activity.type}`}>
                <div className="activity-avatar">{activity.avatar}</div>
                <div className="activity-content">
                  <div className="activity-title">{activity.title}</div>
                  <div className="activity-description">{activity.description}</div>
                </div>
                <div className="activity-time">{activity.timestamp}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Pipeline */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2 className="section-title">Lead Pipeline</h2>
          </div>
          <div className="pipeline-container">
            {pipeline.map((stage, idx) => (
              <div key={idx} className="pipeline-stage">
                <div className={`pipeline-bar pipeline-${stage.color}`}>
                  <div className="pipeline-percentage">
                    {Math.round((stage.count / 708) * 100)}%
                  </div>
                </div>
                <div className="pipeline-label">
                  <span className="stage-name">{stage.stage}</span>
                  <span className="stage-count">{stage.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Revenue Metrics & Recent Automations */}
      <div className="dashboard-grid">
        {/* Revenue Metrics */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2 className="section-title">Revenue Metrics</h2>
          </div>
          <div className="metrics-list">
            <div className="metric-row">
              <div>
                <div className="metric-label">Monthly Recurring Revenue</div>
                <div className="metric-value">$128,450</div>
              </div>
              <div className="metric-status positive">↑ 15%</div>
            </div>
            <div className="metric-row">
              <div>
                <div className="metric-label">Average Deal Size</div>
                <div className="metric-value">$12,340</div>
              </div>
              <div className="metric-status">→ 0%</div>
            </div>
            <div className="metric-row">
              <div>
                <div className="metric-label">Pipeline Value</div>
                <div className="metric-value">$542,000</div>
              </div>
              <div className="metric-status positive">↑ 8%</div>
            </div>
          </div>
        </div>

        {/* Recent Automations */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2 className="section-title">Recent Automations</h2>
            <button className="btn btn-secondary btn-small">
              <ArrowRight size={16} />
              View All
            </button>
          </div>
          <div className="automations-list">
            {automations.map((automation, idx) => (
              <div key={idx} className="automation-item">
                <div className="automation-header">
                  <div className="automation-name">{automation.name}</div>
                  <button className="btn btn-ghost btn-icon">
                    <MoreVertical size={16} />
                  </button>
                </div>
                <div className="automation-stats">
                  <div className="stat">
                    <span className="stat-label">Runs</span>
                    <span className="stat-value">{automation.runs}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Success Rate</span>
                    <span className="stat-value">{automation.success}</span>
                  </div>
                  <div className={`status-badge status-${automation.status}`}>
                    {automation.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h2 className="section-title">Quick Actions</h2>
        <div className="actions-grid">
          <button className="btn btn-primary">
            <Users size={18} />
            Import Leads
          </button>
          <button className="btn btn-primary">
            <Zap size={18} />
            Create Automation
          </button>
          <button className="btn btn-secondary">
            <ArrowRight size={18} />
            View Reports
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
