import React from 'react'
import { Zap } from 'lucide-react'
import Card from '../UI/Card'

const AIInsights = () => {
  const insights = [
    {
      id: 1,
      type: 'success',
      text: 'Your email open rate is 12% above industry average. Keep using similar subject lines.',
    },
    {
      id: 2,
      type: 'warning',
      text: 'Lead conversion rate dropped 8% this week. Consider optimizing your landing page CTA.',
    },
    {
      id: 3,
      type: 'success',
      text: 'Best performing time to send emails: Tuesday 2-3 PM. 34% higher engagement rate.',
    },
  ]

  return (
    <Card className="ai-insights">
      <div className="ai-insights-title">
        <Zap size={24} style={{ color: 'var(--color-primary)' }} />
        <h3>AI Insights & Recommendations</h3>
      </div>
      <div className="ai-insights-list">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className={`ai-insight-item ${insight.type}`}
          >
            <p className="ai-insight-text">{insight.text}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default AIInsights
