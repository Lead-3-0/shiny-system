import React from 'react'
import ConversionChart from '../components/Analytics/ConversionChart'
import FunnelMetrics from '../components/Analytics/FunnelMetrics'
import RecentActivity from '../components/Dashboard/RecentActivity'
import LeadPipeline from '../components/Dashboard/LeadPipeline'
import QuickActions from '../components/Dashboard/QuickActions'
import AIInsights from '../components/Dashboard/AIInsights'
import TopBar from '../components/TopBar/TopBar'
import '../styles/analytics.css'

const Analytics = () => {
  return (
    <div className="analytics-page">
      <TopBar />
      <div className="analytics-container">
        {/* KPI Cards */}
        <FunnelMetrics />

        {/* Main Grid - Conversion Chart and Lead Pipeline */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-2xl)' }}>
          <ConversionChart />
          <LeadPipeline />
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Bottom Row - Recent Activity and AI Insights */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--spacing-lg)' }}>
          <RecentActivity />
          <AIInsights />
        </div>
      </div>
    </div>
  )
}

export default Analytics
