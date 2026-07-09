import React, { useState } from 'react'
import { User, Mail, Phone, MapPin, Shield, LogOut, Edit2, Save } from 'lucide-react'
import TopBar from '../components/TopBar/TopBar'
import '../styles/user-dashboard.css'

const UserDashboard = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Building awesome funnels and tracking conversions.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
  })

  const [formData, setFormData] = useState(userData)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = () => {
    setUserData(formData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setFormData(userData)
    setIsEditing(false)
  }

  return (
    <div className="user-dashboard-page">
      <TopBar />
      <div className="user-dashboard-container">
        {/* Profile Section */}
        <section className="profile-section">
          <div className="profile-header">
            <h1>My Profile</h1>
            <button
              className={`btn ${isEditing ? 'btn-secondary' : 'btn-tertiary'}`}
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? (
                <>
                  <Save size={20} />
                  Save Changes
                </>
              ) : (
                <>
                  <Edit2 size={20} />
                  Edit Profile
                </>
              )}
            </button>
          </div>

          <div className="profile-content">
            {/* Avatar Card */}
            <div className="avatar-section">
              <div className="avatar-container">
                <img src={userData.avatar} alt={userData.name} className="avatar-image" />
              </div>
              <div className="avatar-info">
                <h2 className="user-name">{userData.name}</h2>
                <p className="user-email">{userData.email}</p>
              </div>
            </div>

            {/* Info Grid */}
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">
                  <User size={24} />
                </div>
                <div className="info-content">
                  <label>Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="info-input"
                    />
                  ) : (
                    <p className="info-value">{userData.name}</p>
                  )}
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <Mail size={24} />
                </div>
                <div className="info-content">
                  <label>Email Address</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="info-input"
                    />
                  ) : (
                    <p className="info-value">{userData.email}</p>
                  )}
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <Phone size={24} />
                </div>
                <div className="info-content">
                  <label>Phone Number</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="info-input"
                    />
                  ) : (
                    <p className="info-value">{userData.phone}</p>
                  )}
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <MapPin size={24} />
                </div>
                <div className="info-content">
                  <label>Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="info-input"
                    />
                  ) : (
                    <p className="info-value">{userData.location}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="bio-section">
              <label>Bio</label>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  className="bio-input"
                  rows="4"
                />
              ) : (
                <p className="bio-text">{userData.bio}</p>
              )}
            </div>

            {/* Action Buttons */}
            {isEditing && (
              <div className="action-buttons">
                <button className="btn btn-primary" onClick={handleSave}>
                  Save Changes
                </button>
                <button className="btn btn-secondary" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Settings Section */}
        <section className="settings-section">
          <h2>Account Settings</h2>

          <div className="settings-grid">
            {/* Security */}
            <div className="setting-card">
              <div className="setting-header">
                <div className="setting-icon security-icon">
                  <Shield size={24} />
                </div>
                <div>
                  <h3>Security</h3>
                  <p>Manage your password and security settings</p>
                </div>
              </div>
              <button className="btn btn-secondary">Change Password</button>
            </div>

            {/* Notifications */}
            <div className="setting-card">
              <div className="setting-header">
                <div className="setting-icon notification-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h3>Notifications</h3>
                  <p>Control your notification preferences</p>
                </div>
              </div>
              <button className="btn btn-secondary">Manage Notifications</button>
            </div>

            {/* Billing */}
            <div className="setting-card">
              <div className="setting-header">
                <div className="setting-icon billing-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h3>Billing</h3>
                  <p>View your subscription and invoices</p>
                </div>
              </div>
              <button className="btn btn-secondary">View Billing</button>
            </div>

            {/* Logout */}
            <div className="setting-card logout-card">
              <div className="setting-header">
                <div className="setting-icon logout-icon">
                  <LogOut size={24} />
                </div>
                <div>
                  <h3>Sign Out</h3>
                  <p>End your current session</p>
                </div>
              </div>
              <button className="btn btn-danger">Sign Out</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default UserDashboard
