import React from 'react'
import { Handle, Position } from '@xyflow/react'
import { BarChart3 } from 'lucide-react'
import '../styles/nodes.css'

const AnalyticsNode = ({ data, selected }) => {
  return (
    <div className={`node analytics-node ${selected ? 'selected' : ''}`}>
      <div className="node-header">
        <BarChart3 size={16} />
        <span className="node-title">Analytics</span>
      </div>
      <div className="node-content">
        <input
          type="text"
          placeholder="Metric name"
          defaultValue={data.metricName || ''}
          className="node-input"
          onClick={(e) => e.stopPropagation()}
        />
        <small className="node-description">
          Track: {data.trackingType || 'conversions'}
        </small>
      </div>
      <Handle type="input" position={Position.Top} />
    </div>
  )
}

export default AnalyticsNode
