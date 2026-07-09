import React from 'react'
import { Plus, Upload, Settings, Zap } from 'lucide-react'
import Card from '../UI/Card'

const QuickActions = () => {
  const actions = [
    {
      id: 1,
      icon: Plus,
      label: 'New Campaign',
      onClick: () => console.log('New campaign'),
    },
    {
      id: 2,
      icon: Upload,
      label: 'Import Leads',
      onClick: () => console.log('Import leads'),
    },
    {
      id: 3,
      icon: Zap,
      label: 'Run Automation',
      onClick: () => console.log('Run automation'),
    },
    {
      id: 4,
      icon: Settings,
      label: 'Configure',
      onClick: () => console.log('Configure'),
    },
  ]

  return (
    <Card title="Quick Actions" className="quick-actions-section">
      <div className="quick-actions">
        {actions.map((action) => {
          const Icon = action.icon
          return (
            <button
              key={action.id}
              className="action-button"
              onClick={action.onClick}
              aria-label={action.label}
            >
              <Icon size={24} />
              <span>{action.label}</span>
            </button>
          )
        })}
      </div>
    </Card>
  )
}

export default QuickActions
