import React from 'react'
import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react'
import Card from '../UI/Card'
import '../styles/analytics.css'

const FunnelMetrics = () => {
  const metrics = [
    {
      label: 'Total Visitors',
      value: '12,543',
      icon: Users,
      trend: '+12%',
      color: 'blue',
    },
    {
      label: 'Leads Captured',
      value: '2,341',
      icon: TrendingUp,
      trend: '+8%',
      color: 'purple',
    },
    {
      label: 'Conversions',
      value: '543',
      icon: BarChart3,
      trend: '+15%',
      color: 'green',
    },
    {
      label: 'Revenue',
      value: '$28,450',
      icon: DollarSign,
      trend: '+22%',
      color: 'emerald',
    },
  ]

  return (
    <div className="metrics-grid">
      {metrics.map((metric, idx) => {
        const Icon = metric.icon
        return (
          <Card key={idx} className={`metric-card metric-card--${metric.color}`}>
            <div className="metric-header">
              <Icon size={24} />
              <span className="metric-trend">{metric.trend}</span>
            </div>
            <p className="metric-label">{metric.label}</p>
            <p className="metric-value">{metric.value}</p>
          </Card>
        )
      })}
    </div>
  )
}

export default FunnelMetrics
