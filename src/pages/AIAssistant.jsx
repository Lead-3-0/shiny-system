import React, { useState } from 'react'
import { Send, BookMarked } from 'lucide-react'

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m your AI Assistant. I can help you draft emails, analyze leads, suggest automations, and more. What can I help you with today?'
    }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }])
      setInput('')
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'I\'m processing your request. This is a placeholder response.'
        }])
      }, 1000)
    }
  }

  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: 'calc(100vh - 8rem)' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '0.5rem', fontSize: '2.25rem', fontWeight: 'bold' }}>AI Assistant</h1>
        <p style={{ color: 'var(--color-text-tertiary)' }}>Chat interface with prompt library and suggested actions</p>
      </div>

      {/* Chat Messages */}
      <div style={{ flex: 1, overflowY: 'auto', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: '1rem'
            }}
          >
            <div
              style={{
                maxWidth: '60%',
                padding: '1rem',
                borderRadius: '0.75rem',
                background: msg.role === 'user' ? 'var(--color-primary)' : 'var(--color-surface-light)',
                color: msg.role === 'user' ? 'white' : 'var(--color-text-secondary)'
              }}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <input
          type="text"
          className="form-input"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          style={{ flex: 1 }}
        />
        <button className="btn btn-primary" onClick={handleSend}>
          <Send size={18} />
        </button>
        <button className="btn btn-secondary">
          <BookMarked size={18} />
        </button>
      </div>
    </div>
  )
}

export default AIAssistant
