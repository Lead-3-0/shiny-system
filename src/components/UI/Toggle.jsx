import React from 'react'
import '../styles/components/toggle.css'

const Toggle = ({ checked, onChange, label, disabled = false }) => {
  return (
    <div className="toggle-wrapper">
      <input
        type="checkbox"
        className="toggle-input"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        id={`toggle-${Math.random()}`}
      />
      <label className="toggle-label" htmlFor={`toggle-${Math.random()}`}>
        <span className="toggle-slider" />
      </label>
      {label && <span className="toggle-text">{label}</span>}
    </div>
  )
}

export default Toggle
