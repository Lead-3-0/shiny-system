import React from 'react'
import { Plus, Zap } from 'lucide-react'

const Automations = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '0.5rem', fontSize: '2.25rem', fontWeight: 'bold' }}>Automations</h1>
        <p style={{ color: 'var(--color-text-tertiary)' }}>Visual automation builder with workflow cards and execution history</p>
      </div>

      <button className="btn btn-primary" style={{ marginBottom: '2rem' }}>
        <Plus size={18} /> Create Automation
      </button>

      <div className="empty-state">
        <Zap size={48} style={{ color: 'var(--color-text-tertiary)', marginBottom: '1rem' }} />
        <h2 className="empty-state-title">No Automations Yet</h2>
        <p className="empty-state-description">Create your first automation to start automating lead follow-ups, emails, and more</p>
        <button className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Create Your First Automation
        </button>
      </div>
    </div>
  )
}

export default Automations
