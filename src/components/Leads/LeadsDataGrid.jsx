import React from 'react'
import { Mail, Eye, MoreHorizontal } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useLeadsStore } from '../../store/leadsStore'
import LeadActionsMenu from './LeadActionsMenu'

const LeadsDataGrid = ({ leads, selectedLeads, onSelectLead, onSelectAll }) => {
  const navigate = useNavigate()
  const { selectLead } = useLeadsStore()

  const handleViewLead = (lead) => {
    selectLead(lead)
    navigate(`/leads/${lead.id}`)
  }

  const getStatusColor = (status) => {
    const colors = {
      'New': '#0ea5e9',
      'Contacted': '#f59e0b',
      'Replied': '#8b5cf6',
      'Converted': '#10b981'
    }
    return colors[status] || '#6b7280'
  }

  const getScoreColor = (score) => {
    if (score >= 85) return '#10b981'
    if (score >= 70) return '#f59e0b'
    return '#ef4444'
  }

  if (leads.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">📋</div>
        <h2 className="empty-state-title">No leads found</h2>
        <p className="empty-state-description">Create or import your first lead to get started</p>
      </div>
    )
  }

  return (
    <div className="data-grid-wrapper">
      <table className="data-grid">
        <thead>
          <tr>
            <th width="50">
              <input
                type="checkbox"
                checked={selectedLeads.size === leads.length && leads.length > 0}
                onChange={onSelectAll}
              />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Status</th>
            <th>AI Score</th>
            <th>Tags</th>
            <th>Messages</th>
            <th>Last Activity</th>
            <th width="50"></th>
          </tr>
        </thead>
        <tbody>
          {leads.map(lead => (
            <tr key={lead.id} className={selectedLeads.has(lead.id) ? 'selected' : ''}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedLeads.has(lead.id)}
                  onChange={() => onSelectLead(lead.id)}
                />
              </td>
              <td>
                <button 
                  className="lead-name-link"
                  onClick={() => handleViewLead(lead)}
                >
                  {lead.name}
                </button>
              </td>
              <td>{lead.email}</td>
              <td>{lead.company}</td>
              <td>
                <span className="status-chip" style={{ borderColor: getStatusColor(lead.status) }}>
                  {lead.status}
                </span>
              </td>
              <td>
                <div className="score-display">
                  <span className="score-bar" style={{ 
                    width: `${lead.aiScore}%`,
                    backgroundColor: getScoreColor(lead.aiScore)
                  }}></span>
                  <span className="score-text">{lead.aiScore}%</span>
                </div>
              </td>
              <td>
                <div className="tags-cell">
                  {lead.tags.map(tag => (
                    <span key={tag} className="tag-badge">{tag}</span>
                  ))}
                </div>
              </td>
              <td>{lead.messagesSent}</td>
              <td className="text-sm text-secondary">{lead.lastActivity}</td>
              <td>
                <LeadActionsMenu lead={lead} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LeadsDataGrid
