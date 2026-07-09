import React, { useState } from 'react'
import '../../styles/components/tabs.css'

const Tabs = ({ tabs, defaultTab = 0, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  const handleTabClick = (index) => {
    setActiveTab(index)
    onTabChange?.(index)
  }

  return (
    <div className="tabs">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.icon && <span className="tab-icon">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {tabs[activeTab] && tabs[activeTab].content}
      </div>
    </div>
  )
}

export default Tabs
