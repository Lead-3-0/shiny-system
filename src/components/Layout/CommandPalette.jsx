import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import '../../styles/layout/command-palette.css'

const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const commands = [
    { label: 'Dashboard', path: '/dashboard', category: 'Navigate', shortcut: 'G D' },
    { label: 'Leads', path: '/leads', category: 'Navigate', shortcut: 'G L' },
    { label: 'Automations', path: '/automations', category: 'Navigate', shortcut: 'G A' },
    { label: 'Campaigns', path: '/campaigns', category: 'Navigate', shortcut: 'G C' },
    { label: 'Analytics', path: '/analytics', category: 'Navigate', shortcut: 'G R' },
    { label: 'Settings', path: '/settings', category: 'Navigate', shortcut: 'G S' },
    { label: 'AI Assistant', path: '/ai-assistant', category: 'Navigate', shortcut: 'G I' },
    { label: 'Create New Automation', action: 'create-automation', category: 'Create', shortcut: 'Ctrl + N' },
    { label: 'Create New Campaign', action: 'create-campaign', category: 'Create', shortcut: 'Ctrl + Shift + N' },
  ]

  const filtered = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
      setQuery('')
      setSelectedIndex(0)
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex(prev => (prev + 1) % filtered.length)
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex(prev => (prev - 1 + filtered.length) % filtered.length)
          break
        case 'Enter':
          e.preventDefault()
          if (filtered[selectedIndex]) {
            handleSelect(filtered[selectedIndex])
          }
          break
        case 'Escape':
          e.preventDefault()
          onClose()
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, filtered, selectedIndex])

  // Global keyboard shortcut
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        onClose()
      }
    }

    window.addEventListener('keydown', handleGlobalKeyDown)
    return () => window.removeEventListener('keydown', handleGlobalKeyDown)
  }, [isOpen])

  const handleSelect = (command) => {
    if (command.path) {
      navigate(command.path)
    } else if (command.action) {
      console.log('Execute action:', command.action)
    }
    onClose()
  }

  if (!isOpen) return null

  // Group commands by category
  const groupedCommands = {}
  filtered.forEach(cmd => {
    if (!groupedCommands[cmd.category]) {
      groupedCommands[cmd.category] = []
    }
    groupedCommands[cmd.category].push(cmd)
  })

  return (
    <>
      {/* Backdrop */}
      <div className="command-backdrop" onClick={onClose} />

      {/* Command Palette */}
      <div className="command-palette">
        {/* Search Input */}
        <div className="command-search">
          <Search size={20} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search commands..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSelectedIndex(0)
            }}
            className="command-input"
          />
          <button onClick={onClose} className="command-close">
            <X size={18} />
          </button>
        </div>

        {/* Results */}
        <div className="command-results">
          {filtered.length === 0 ? (
            <div className="command-empty">
              <p>No commands found</p>
              <p className="command-empty-hint">Try searching for something else</p>
            </div>
          ) : (
            Object.entries(groupedCommands).map(([category, items]) => (
              <div key={category} className="command-group">
                <div className="command-group-label">{category}</div>
                {items.map((cmd, idx) => {
                  const absoluteIndex = filtered.indexOf(cmd)
                  return (
                    <button
                      key={idx}
                      className={`command-item ${selectedIndex === absoluteIndex ? 'selected' : ''}`}
                      onClick={() => handleSelect(cmd)}
                      onMouseEnter={() => setSelectedIndex(absoluteIndex)}
                    >
                      <div className="command-item-main">
                        <span className="command-item-label">{cmd.label}</span>
                        {cmd.shortcut && (
                          <span className="command-item-shortcut">{cmd.shortcut}</span>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="command-footer">
          <span className="command-hint">
            <kbd>↑</kbd>
            <kbd>↓</kbd> Navigate
          </span>
          <span className="command-hint">
            <kbd>Enter</kbd> Select
          </span>
          <span className="command-hint">
            <kbd>Esc</kbd> Close
          </span>
        </div>
      </div>
    </>
  )
}

export default CommandPalette
