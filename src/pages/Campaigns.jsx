import React from 'react'
import { Plus, Mail } from 'lucide-react'

const Campaigns = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '0.5rem', fontSize: '2.25rem', fontWeight: 'bold' }}>Campaigns</h1>
        <p style={{ color: 'var(--color-text-tertiary)' }}>Email sequences, SMS, WhatsApp with AI-generated content</p>
      </div>

      <button className="btn btn-primary" style={{ marginBottom: '2rem' }}>
        <Plus size={18} /> New Campaign
      </button>

      <div className="empty-state">
        <Mail size={48} style={{ color: 'var(--color-text-tertiary)', marginBottom: '1rem' }} />
        <h2 className="empty-state-title">No Campaigns Yet</h2>
        <p className="empty-state-description">Launch your first outreach campaign with email, SMS, or WhatsApp</p>
      </div>
    </div>
  )
}

export default Campaigns
