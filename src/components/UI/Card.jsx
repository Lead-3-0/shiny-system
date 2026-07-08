import React from 'react'
import '../styles/components/card.css'

const Card = ({ children, title, subtitle, className, onClick, hoverable = false }) => {
  return (
    <div className={`card ${hoverable ? 'card--hoverable' : ''} ${className || ''}`} onClick={onClick}>
      {title && (
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="card-content">{children}</div>
    </div>
  )
}

export default Card
