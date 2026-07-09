import React from 'react'
import { Mail, Phone, MapPin, Calendar, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const LeadDetails = () => {
  const navigate = useNavigate()

  return (
    <div style={{ padding: '2rem' }}>
      <button onClick={() => navigate('/leads')} className="btn btn-ghost" style={{ marginBottom: '1.5rem' }}>
        <ArrowLeft size={18} /> Back to Leads
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {/* Customer Profile */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Customer Profile</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-text-tertiary)', marginBottom: '0.5rem' }}>Name</div>
              <div style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>John Smith</div>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                <Mail size={16} />
                <span style={{ fontSize: '0.875rem', color: 'var(--color-text-tertiary)' }}>Email</span>
              </div>
              <div style={{ fontSize: '1rem', color: 'var(--color-primary)' }}>john@acme.com</div>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                <Phone size={16} />
                <span style={{ fontSize: '0.875rem', color: 'var(--color-text-tertiary)' }}>Phone</span>
              </div>
              <div style={{ fontSize: '1rem', color: 'var(--color-text-primary)' }}>+1 (555) 123-4567</div>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="card card-elevated">
          <div className="card-header">
            <h2 className="card-title">AI-Generated Insights</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '0.5rem' }}>
              <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>AI Score: 8.5/10</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>High-value prospect with strong buying signals</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Conversation History</h2>
          </div>
          <div className="empty-state" style={{ minHeight: '200px' }}>
            <p style={{ color: 'var(--color-text-tertiary)' }}>No conversations yet</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Activity Timeline</h2>
          </div>
          <div className="empty-state" style={{ minHeight: '200px' }}>
            <p style={{ color: 'var(--color-text-tertiary)' }}>No activities yet</p>
          </div>
        </div>
      </div>

      {/* Notes & Tasks */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Notes</h2>
          </div>
          <div className="card-body">
            <textarea className="form-input" placeholder="Add notes..." style={{ height: '120px' }}></textarea>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Tasks</h2>
          </div>
          <div className="empty-state" style={{ minHeight: '180px' }}>
            <p style={{ color: 'var(--color-text-tertiary)' }}>No tasks assigned</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeadDetails
