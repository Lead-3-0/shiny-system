import React from 'react'
import { Handle, Position } from '@xyflow/react'
import { Brain } from 'lucide-react'
import '../styles/nodes.css'

const AIQualificationNode = ({ data, selected }) => {
  return (
    <div className={`node ai-qualification-node ${selected ? 'selected' : ''}`}>
      <div className="node-header">
        <Brain size={16} />
        <span className="node-title">AI Qualification</span>
      </div>
      <div className="node-content">
        <input
          type="text"
          placeholder="AI prompt"
          defaultValue={data.prompt || ''}
          className="node-input"
          onClick={(e) => e.stopPropagation()}
        />
        <small className="node-description">
          Score: {data.score || '0.5'}
        </small>
      </div>
      <Handle type="input" position={Position.Top} />
      <Handle type="output" position={Position.Bottom} />
    </div>
  )
}

export default AIQualificationNode
