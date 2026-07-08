import React from 'react'
import { Handle, Position } from '@xyflow/react'
import { Globe } from 'lucide-react'
import '../styles/nodes.css'

const LandingPageNode = ({ data, selected }) => {
  return (
    <div className={`node landing-page-node ${selected ? 'selected' : ''}`}>
      <div className="node-header">
        <Globe size={16} />
        <span className="node-title">Landing Page</span>
      </div>
      <div className="node-content">
        <input
          type="text"
          placeholder="Page name"
          defaultValue={data.pageName || ''}
          className="node-input"
          onClick={(e) => e.stopPropagation()}
        />
        <small className="node-description">{data.url || 'No URL set'}</small>
      </div>
      <Handle type="output" position={Position.Bottom} />
    </div>
  )
}

export default LandingPageNode
