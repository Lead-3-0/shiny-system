import React, { useState } from 'react'
import { Settings, Lock, Bell, CreditCard, Link2, Palette } from 'lucide-react'

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('workspace')

  const sections = [
    { id: 'workspace', label: 'Workspace', icon: Settings },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'api', label: 'API Keys', icon: Link2 },
    { id: 'integrations', label: 'Integrations', icon: Settings },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Appearance', icon: Palette },
  ]

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '0.5rem', fontSize: '2.25rem', fontWeight: 'bold' }}>Settings</h1>
        <p style={{ color: 'var(--color-text-tertiary)' }}>Manage workspace, team, integrations, and preferences</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '2rem', marginTop: '2rem' }}>
        {/* Sidebar */}
        <div>
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '0.75rem 1rem',
                marginBottom: '0.5rem',
                background: activeTab === section.id ? 'var(--color-surface-light)' : 'transparent',
                border: activeTab === section.id ? '1px solid var(--color-primary)' : '1px solid transparent',
                borderRadius: '0.5rem',
                color: activeTab === section.id ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                cursor: 'pointer',
                fontFamily: 'inherit'
              }}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div>
          {activeTab === 'workspace' && (
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Workspace Settings</h2>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label className="form-label">Workspace Name</label>
                  <input type="text" className="form-input" defaultValue="My Workspace" />
                </div>
                <div className="form-group">
                  <label className="form-label">Workspace URL</label>
                  <input type="text" className="form-input" defaultValue="my-workspace" />
                </div>
                <button className="btn btn-primary">Save Changes</button>
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Team Members</h2>
              </div>
              <div className="empty-state" style={{ minHeight: '300px' }}>
                <p>Team member management coming soon</p>
              </div>
            </div>
          )}

          {activeTab === 'api' && (
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">API Keys</h2>
              </div>
              <div className="card-body">
                <button className="btn btn-primary" style={{ marginBottom: '2rem' }}>+ Generate New Key</button>
                <div className="empty-state" style={{ minHeight: '200px' }}>
                  <p>No API keys yet</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'integrations' && (
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Integrations</h2>
              </div>
              <div className="empty-state" style={{ minHeight: '300px' }}>
                <p>Available integrations coming soon</p>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Notification Preferences</h2>
              </div>
              <div className="card-body">
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                    <input type="checkbox" defaultChecked />
                    <span>Email notifications for new leads</span>
                  </label>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                    <input type="checkbox" defaultChecked />
                    <span>Automation alerts</span>
                  </label>
                </div>
                <button className="btn btn-primary">Save Preferences</button>
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Appearance</h2>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label className="form-label">Theme</label>
                  <select className="form-select">
                    <option>Dark (Default)</option>
                    <option>Light</option>
                    <option>Auto</option>
                  </select>
                </div>
                <button className="btn btn-primary">Save Preferences</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Import Users icon if not already available
const Users = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>

export default SettingsPage
