import React, { useState } from 'react'
import { Search, Bell, MessageSquare, LogOut, User } from 'lucide-react'
import '../../styles/layout/topbar.css'

const TopBar = ({ onCommandPaletteOpen }) => {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [notifications, setNotifications] = useState(3)

  const handleNotificationClick = () => {
    setNotifications(0)
  }

  const handleLogout = () => {
    console.log('Logging out...')
    setShowUserMenu(false)
  }

  return (
    <header className="topbar">
      <div className="topbar-content">
        {/* Left Section - Search */}
        <div className="topbar-left">
          <button
            className="search-button"
            onClick={onCommandPaletteOpen}
            title="Search (⌘K)"
          >
            <Search size={18} />
            <span className="search-placeholder">Search or press ⌘K</span>
            <span className="search-shortcut">⌘K</span>
          </button>
        </div>

        {/* Right Section - Actions */}
        <div className="topbar-right">
          {/* Notifications */}
          <button
            className="topbar-action"
            onClick={handleNotificationClick}
            title="Notifications"
          >
            <Bell size={20} />
            {notifications > 0 && (
              <span className="notification-badge">{notifications}</span>
            )}
          </button>

          {/* Messages */}
          <button className="topbar-action" title="Messages">
            <MessageSquare size={20} />
          </button>

          {/* User Menu */}
          <div className="user-menu">
            <button
              className="user-button"
              onClick={() => setShowUserMenu(!showUserMenu)}
              title="User menu"
            >
              <div className="user-avatar">JD</div>
            </button>

            {showUserMenu && (
              <div className="user-menu-dropdown">
                <div className="menu-header">
                  <div className="user-info">
                    <div className="user-name">John Doe</div>
                    <div className="user-email">john@example.com</div>
                  </div>
                </div>

                <div className="menu-divider"></div>

                <button className="menu-item">
                  <User size={18} />
                  Profile Settings
                </button>

                <div className="menu-divider"></div>

                <button className="menu-item danger" onClick={handleLogout}>
                  <LogOut size={18} />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default TopBar
