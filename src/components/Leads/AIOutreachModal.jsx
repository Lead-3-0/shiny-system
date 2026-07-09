import React, { useState, useEffect } from 'react'
import { X, Copy, Send, RefreshCw, Loader } from 'lucide-react'
import { useLeadsStore } from '../../store/leadsStore'

const AIOutreachModal = ({ lead, onClose }) => {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)
  const { updateLead } = useLeadsStore()

  // Simulated AI message generation
  const generateAIMessage = () => {
    setLoading(true)
    setTimeout(() => {
      const messages = [
        `Hi ${lead.name},\n\nI noticed you're at ${lead.company} and thought you might be interested in how our solution helps teams like yours streamline their workflow.\n\nWould you be open to a quick 15-minute conversation next week?\n\nBest regards`,
        `Hi ${lead.name},\n\nI was researching ${lead.company} and saw some great work you're doing. I think there might be a good opportunity to collaborate.\n\nWould you have 20 minutes for a call next Tuesday or Wednesday?\n\nLooking forward to connecting!`,
        `Hi ${lead.name},\n\nI help companies like ${lead.company} improve their processes and reduce costs. Many of your peers have already seen significant improvements.\n\nWould it make sense to chat briefly about your current setup?\n\nThanks,`,
        `Hi ${lead.name},\n\nI came across your profile and ${lead.company}'s impressive growth. I have an idea that could complement what you're building.\n\nCould we grab coffee or hop on a call this week?\n\nCheers!`
      ]
      setMessage(messages[Math.floor(Math.random() * messages.length)])
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    generateAIMessage()
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(message)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSend = () => {
    updateLead(lead.id, {
      messagesSent: lead.messagesSent + 1,
      lastActivity: new Date().toISOString().split('T')[0],
      status: 'Contacted'
    })
    alert('Message sent to ' + lead.email)
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Generate AI Outreach Message</h2>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="ai-outreach-body">
          <div className="lead-summary">
            <h3>{lead.name}</h3>
            <p>{lead.company}</p>
            <p className="email">{lead.email}</p>
            <div className="score-badge" style={{ 
              backgroundColor: lead.aiScore >= 85 ? '#10b981' : lead.aiScore >= 70 ? '#f59e0b' : '#ef4444'
            }}>
              AI Score: {lead.aiScore}%
            </div>
          </div>

          <div className="message-editor">
            <div className="message-header">
              <h4>Suggested Message</h4>
              <button 
                className="btn btn-secondary btn-sm"
                onClick={generateAIMessage}
                disabled={loading}
              >
                <RefreshCw size={16} /> Generate New
              </button>
            </div>

            {loading ? (
              <div className="loading-placeholder">
                <Loader size={32} className="spinner" />
                <p>Generating personalized message...</p>
              </div>
            ) : (
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="message-textarea"
              />
            )}
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={handleCopy}>
              <Copy size={16} /> {copied ? 'Copied!' : 'Copy'}
            </button>
            <button className="btn btn-primary" onClick={handleSend} disabled={loading}>
              <Send size={16} /> Send as Email
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIOutreachModal
