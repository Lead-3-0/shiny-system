import React from 'react'
import { Handle, Position } from '@xyflow/react'
import { Mail } from 'lucide-react'
import '../styles/nodes.css'

const LeadCaptureNode = ({ data, selected }) => {
  return (
    <div className={`node lead-capture-node ${selected ? 'selected' : ''}`}>
      <div className="node-header">
        <Mail size={16} />
        <span className="node-title">Lead Capture</span>
      </div>
      <div className="node-content">
        <input
          type="text"
          placeholder="Form name"
          defaultValue={data.formName || ''}
          className="node-input"
          onClick={(e) => e.stopPropagation()}
        />
        <small className="node-description">
          {data.fields ? `${data.fields.length} fields` : '0 fields'}
        </small>
      </div>
      <Handle type="input" position={Position.Top} />
      <Handle type="output" position={Position.Bottom} />
    </div>
  )
}

export default LeadCaptureNode
