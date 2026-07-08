import React from 'react'
import { Handle, Position } from '@xyflow/react'
import { Mail as MailIcon } from 'lucide-react'
import '../styles/nodes.css'

const EmailAutomationNode = ({ data, selected }) => {
  return (
    <div className={`node email-automation-node ${selected ? 'selected' : ''}`}>
      <div className="node-header">
        <MailIcon size={16} />
        <span className="node-title">Email Automation</span>
      </div>
      <div className="node-content">
        <input
          type="text"
          placeholder="Sequence name"
          defaultValue={data.sequenceName || ''}
          className="node-input"
          onClick={(e) => e.stopPropagation()}
        />
        <small className="node-description">
          {data.emailCount ? `${data.emailCount} emails` : '0 emails'}
        </small>
      </div>
      <Handle type="input" position={Position.Top} />
      <Handle type="output" position={Position.Bottom} />
    </div>
  )
}

export default EmailAutomationNode
