import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Menu,
  X,
  LayoutDashboard,
  Users,
  Zap,
  Mail,
  BarChart3,
  Settings,
  MessageSquare,
  ChevronDown,
} from 'lucide-react'
import '../../styles/layout/sidebar.css'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [expandedMenu, setExpandedMenu] = useState(null)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const toggleMenu = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu)
  }

  const menuGroups = [
    {
      label: 'Main',
      items: [
        { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
        { label: 'Leads', path: '/leads', icon: Users },
        { label: 'Automations', path: '/automations', icon: Zap },
        { label: 'Campaigns', path: '/campaigns', icon: Mail },
      ],
    },
    {
      label: 'Analytics',
      items: [
        { label: 'Performance', path: '/analytics', icon: BarChart3 },
        { label: 'AI Assistant', path: '/ai-assistant', icon: MessageSquare },
      ],
    },
    {
      label: 'Settings',
      items: [
        { label: 'Settings', path: '/settings', icon: Settings },
      ],
    },
  ]

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        className="sidebar-mobile-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        {/* Logo */}
        <div className="sidebar-logo">
          <Link to="/" className="logo-link">
            <div className="logo-icon">
              <div className="logo-dot"></div>
            </div>
            {isOpen && <span className="logo-text">SalesPulse</span>}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {menuGroups.map((group, idx) => (
            <div key={idx} className="nav-group">
              {isOpen && <div className="nav-group-label">{group.label}</div>}
              <ul className="nav-items">
                {group.items.map((item) => {
                  const Icon = item.icon
                  const active = isActive(item.path)
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`nav-item ${active ? 'active' : ''}`}
                        title={item.label}
                      >
                        <Icon size={20} className="nav-icon" />
                        {isOpen && <span className="nav-label">{item.label}</span>}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Workspace Selector */}
        {isOpen && (
          <div className="sidebar-footer">
            <button className="workspace-selector">
              <div className="workspace-avatar">WS</div>
              <div className="workspace-info">
                <div className="workspace-name">Workspace</div>
                <div className="workspace-plan">Pro</div>
              </div>
              <ChevronDown size={16} />
            </button>
          </div>
        )}
      </aside>

      {/* Mobile Backdrop */}
      {isOpen && <div className="sidebar-backdrop" onClick={() => setIsOpen(false)} />}
    </>
  )
}

export default Sidebar
