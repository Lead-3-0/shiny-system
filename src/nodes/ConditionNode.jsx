import React from 'react'
import { Handle, Position } from '@xyflow/react'
import { GitBranch } from 'lucide-react'
import '../styles/nodes.css'

const ConditionNode = ({ data, selected }) => {
  return (
    <div className={`node condition-node ${selected ? 'selected' : ''}`}>
      <div className="node-header">
        <GitBranch size={16} />
        <span className="node-title">Condition</span>
      </div>
      <div className="node-content">
        <input
          type="text"
          placeholder="Condition name"
          defaultValue={data.conditionName || ''}
          className="node-input"
          onClick={(e) => e.stopPropagation()}
        />
        <small className="node-description">
          {data.rules ? `${data.rules.length} rules` : '0 rules'}
        </small>
      </div>
      <Handle type="input" position={Position.Top} />
      <Handle type="output" position={Position.Bottom} id="true" />
      <Handle type="output" position={Position.Bottom} id="false" />
    </div>
  )
}

export default ConditionNode
