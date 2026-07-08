import React from 'react'
import ConversionChart from '../components/Analytics/ConversionChart'
import FunnelMetrics from '../components/Analytics/FunnelMetrics'
import TopBar from '../components/TopBar/TopBar'
import '../styles/analytics.css'

const Analytics = () => {
  return (
    <div className="analytics-page">
      <TopBar />
      <div className="analytics-container">
        <FunnelMetrics />
        <ConversionChart />
      </div>
    </div>
  )
}

export default Analytics
