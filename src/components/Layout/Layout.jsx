import React, { useState } from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import CommandPalette from './CommandPalette'
import '../../styles/layout/layout.css'

const Layout = ({ children }) => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)

  // Handle ⌘K globally
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setCommandPaletteOpen(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="layout-wrapper">
        <TopBar onCommandPaletteOpen={() => setCommandPaletteOpen(true)} />
        <main className="layout-main">
          {children}
        </main>
      </div>
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  )
}

export default Layout
