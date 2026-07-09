import React from 'react'
import Card from '../UI/Card'

const LeadPipeline = () => {
  const stages = [
    {
      label: 'Leads',
      count: 1234,
      percentage: '100%',
    },
    {
      label: 'Qualified',
      count: 892,
      percentage: '72%',
    },
    {
      label: 'Engaged',
      count: 456,
      percentage: '37%',
    },
    {
      label: 'Converted',
      count: 543,
      percentage: '44%',
    },
  ]

  return (
    <Card title="Lead Pipeline Summary" className="pipeline-section">
      <div className="pipeline-grid">
        {stages.map((stage, idx) => (
          <div key={idx} className="pipeline-stage">
            <div className="pipeline-stage-label">{stage.label}</div>
            <div className="pipeline-stage-count">{stage.count}</div>
            <div className="pipeline-stage-percentage">{stage.percentage}</div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default LeadPipeline
