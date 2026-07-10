import React, { useState } from 'react'
import { Plus, Filter, Search, Download, Trash2, Mail, ChevronDown, X } from 'lucide-react'
import { useLeadsStore } from '../store/leadsStore'
import LeadsDataGrid from '../components/Leads/LeadsDataGrid'
import AddLeadModal from '../components/Leads/AddLeadModal'
import LeadActionsMenu from '../components/Leads/LeadActionsMenu'
import '../styles/pages/leads.css'

const Leads = () => {
  const [showAddLead, setShowAddLead] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [selectedLeads, setSelectedLeads] = useState(new Set())
  const { leads, filter, setFilter, getAllTags, deleteBulk, updateBulkStatus } = useLeadsStore()

  const filteredLeads = leads.filter(lead => {
    if (filter.status && lead.status !== filter.status) return false
    if (filter.tags.length > 0 && !filter.tags.some(tag => lead.tags.includes(tag))) return false
    if (lead.aiScore < filter.aiScoreMin || lead.aiScore > filter.aiScoreMax) return false
    if (filter.searchTerm && !lead.name.toLowerCase().includes(filter.searchTerm.toLowerCase()) && 
        !lead.email.toLowerCase().includes(filter.searchTerm.toLowerCase())) return false
    return true
  })

  const handleSelectLead = (leadId) => {
    const newSelected = new Set(selectedLeads)
    if (newSelected.has(leadId)) {
      newSelected.delete(leadId)
    } else {
      newSelected.add(leadId)
    }
    setSelectedLeads(newSelected)
  }

  const handleSelectAll = () => {
    if (selectedLeads.size === filteredLeads.length) {
      setSelectedLeads(new Set())
    } else {
      setSelectedLeads(new Set(filteredLeads.map(l => l.id)))
    }
  }

  const handleDeleteSelected = () => {
    if (window.confirm(`Delete ${selectedLeads.size} leads?`)) {
      deleteBulk(Array.from(selectedLeads))
      setSelectedLeads(new Set())
    }
  }

  const handleUpdateStatus = (status) => {
    updateBulkStatus(Array.from(selectedLeads), status)
    setSelectedLeads(new Set())
  }

  const handleExport = () => {
    const headers = ['Name', 'Email', 'Company', 'Status', 'AI Score', 'Tags', 'Phone', 'Last Activity']
    const rows = filteredLeads.map(lead => [
      lead.name,
      lead.email,
      lead.company,
      lead.status,
      lead.aiScore,
      lead.tags.join('; '),
      lead.phone,
      lead.lastActivity
    ])

    let csv = headers.join(',') + '\n'
    rows.forEach(row => {
      csv += row.map(cell => `"${cell}"`).join(',') + '\n'
    })

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="leads-page">
      <div className="leads-header">
        <div>
          <h1>Leads</h1>
          <p className="leads-subtitle">Manage and track your sales leads</p>
        </div>
        <div className="leads-actions">
          <button className="btn btn-primary" onClick={() => setShowAddLead(true)}>
            <Plus size={18} /> Add Lead
          </button>
          <button className="btn btn-secondary" onClick={handleExport}>
            <Download size={18} /> Export
          </button>
        </div>
      </div>

      <div className="leads-toolbar">
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search leads by name or email..."
            value={filter.searchTerm}
            onChange={(e) => setFilter({ searchTerm: e.target.value })}
          />
        </div>
        <button className="btn btn-secondary btn-sm" onClick={() => setShowFilters(!showFilters)}>
          <Filter size={16} /> Filters
        </button>
      </div>

      {showFilters && (
        <div className="filters-panel">
          <div className="filter-group">
            <label>Status</label>
            <select value={filter.status} onChange={(e) => setFilter({ status: e.target.value })}>
              <option value="">All Statuses</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Replied">Replied</option>
              <option value="Converted">Converted</option>
            </select>
          </div>

          <div className="filter-group">
            <label>AI Score</label>
            <div className="score-range">
              <input
                type="number"
                min="0"
                max="100"
                value={filter.aiScoreMin}
                onChange={(e) => setFilter({ aiScoreMin: parseInt(e.target.value) })}
                placeholder="Min"
              />
              <span>-</span>
              <input
                type="number"
                min="0"
                max="100"
                value={filter.aiScoreMax}
                onChange={(e) => setFilter({ aiScoreMax: parseInt(e.target.value) })}
                placeholder="Max"
              />
            </div>
          </div>

          <div className="filter-group">
            <label>Tags</label>
            <div className="tags-filter">
              {getAllTags().map(tag => (
                <button
                  key={tag}
                  className={`tag-filter-btn ${filter.tags.includes(tag) ? 'active' : ''}`}
                  onClick={() => {
                    const newTags = filter.tags.includes(tag)
                      ? filter.tags.filter(t => t !== tag)
                      : [...filter.tags, tag]
                    setFilter({ tags: newTags })
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedLeads.size > 0 && (
        <div className="bulk-actions-bar">
          <div className="selection-info">
            <input
              type="checkbox"
              checked={selectedLeads.size === filteredLeads.length}
              onChange={handleSelectAll}
            />
            <span>{selectedLeads.size} selected</span>
          </div>
          <div className="bulk-actions">
            <button className="btn btn-secondary btn-sm" onClick={() => handleUpdateStatus('Contacted')}>
              Mark Contacted
            </button>
            <button className="btn btn-secondary btn-sm" onClick={() => handleUpdateStatus('Replied')}>
              Mark Replied
            </button>
            <button className="btn btn-danger btn-sm" onClick={handleDeleteSelected}>
              <Trash2 size={16} /> Delete
            </button>
          </div>
        </div>
      )}

      <LeadsDataGrid 
        leads={filteredLeads}
        selectedLeads={selectedLeads}
        onSelectLead={handleSelectLead}
        onSelectAll={handleSelectAll}
      />

      {showAddLead && (
        <AddLeadModal onClose={() => setShowAddLead(false)} />
      )}
    </div>
  )
}

export default Leads
