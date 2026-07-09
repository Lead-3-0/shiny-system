import React from 'react'
import { X } from 'lucide-react'
import '../../styles/components/modal.css'

const Modal = ({ isOpen, title, children, onClose, actions = [] }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <div className="modal-content">{children}</div>
        {actions.length > 0 && (
          <div className="modal-footer">
            {actions.map((action, idx) => (
              <button
                key={idx}
                className={`modal-action modal-action--${action.variant || 'primary'}`}
                onClick={action.onClick}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal
