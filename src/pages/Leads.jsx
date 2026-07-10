import React from 'react'
import { Plus, Filter, Search } from 'lucide-react'

const Leads = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '1rem', fontSize: '2.25rem', fontWeight: 'bold' }}>Leads</h1>
      <p style={{ marginBottom: '2rem', color: 'var(--color-text-tertiary)' }}>Modern data grid with advanced filters, tags, AI scores, status chips, and timeline.</p>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <button className="btn btn-primary"><Plus size={18} /> New Lead</button>
        <button className="btn btn-secondary"><Filter size={18} /> Filters</button>
      </div>

      <div className="empty-state">
        <div className="empty-state-icon">📋</div>
        <h2 className="empty-state-title">Leads Data Grid</h2>
        <p className="empty-state-description">Modern data grid with advanced filters, tags, AI scores, and status chips</p>
      </div>
    </div>
  )
}

export default Leads
