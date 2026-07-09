import React, { useState } from 'react'
import { MoreHorizontal, Mail, Eye, Trash2, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useLeadsStore } from '../../store/leadsStore'
import AIOutreachModal from './AIOutreachModal'

const LeadActionsMenu = ({ lead }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [showAIOutreach, setShowAIOutreach] = useState(false)
  const navigate = useNavigate()
  const { selectLead, deleteLead } = useLeadsStore()

  const handleViewLead = () => {
    selectLead(lead)
    navigate(`/leads/${lead.id}`)
    setShowMenu(false)
  }

  const handleDelete = () => {
    if (window.confirm(`Delete ${lead.name}?`)) {
      deleteLead(lead.id)
      setShowMenu(false)
    }
  }

  return (
    <>
      <div className="actions-menu">
        <button 
          className="menu-trigger"
          onClick={() => setShowMenu(!showMenu)}
        >
          <MoreHorizontal size={18} />
        </button>

        {showMenu && (
          <div className="menu-dropdown">
            <button onClick={handleViewLead} className="menu-item">
              <Eye size={16} /> View
            </button>
            <button onClick={() => { setShowAIOutreach(true); setShowMenu(false); }} className="menu-item highlight">
              <Zap size={16} /> Generate AI Message
            </button>
            <button onClick={handleDelete} className="menu-item danger">
              <Trash2 size={16} /> Delete
            </button>
          </div>
        )}
      </div>

      {showAIOutreach && (
        <AIOutreachModal lead={lead} onClose={() => setShowAIOutreach(false)} />
      )}
    </>
  )
}

export default LeadActionsMenu
