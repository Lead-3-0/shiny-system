import React, { useState } from 'react'
import { X } from 'lucide-react'
import { useLeadsStore } from '../../store/leadsStore'

const AddLeadModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    status: 'New',
    tags: [],
    notes: ''
  })
  const { addLead, getAllTags } = useLeadsStore()
  const allTags = getAllTags()
  const [selectedTags, setSelectedTags] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleTagToggle = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email) {
      alert('Name and email are required')
      return
    }

    addLead({
      ...formData,
      tags: selectedTags.length > 0 ? selectedTags : formData.tags,
      aiScore: Math.floor(Math.random() * 30) + 60,
      lastActivity: new Date().toISOString().split('T')[0],
      messagesSent: 0
    })
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add New Lead</h2>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label>Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name"
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1-555-0100"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Status</label>
            <select name="status" value={formData.status} onChange={handleChange}>
              <option>New</option>
              <option>Contacted</option>
              <option>Replied</option>
              <option>Converted</option>
            </select>
          </div>

          <div className="form-group">
            <label>Tags</label>
            <div className="tags-selector">
              {allTags.map(tag => (
                <button
                  key={tag}
                  type="button"
                  className={`tag-btn ${selectedTags.includes(tag) ? 'selected' : ''}`}
                  onClick={() => handleTagToggle(tag)}
                >
                  {tag}
                </button>
              ))}
              <input
                type="text"
                placeholder="Add new tag (press Enter)"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && e.target.value) {
                    e.preventDefault()
                    handleTagToggle(e.target.value)
                    e.target.value = ''
                  }
                }}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Additional notes about the lead"
              rows="4"
            />
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Add Lead
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddLeadModal
