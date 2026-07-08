import React from 'react'
import { Handle, Position } from '@xyflow/react'
import { CreditCard } from 'lucide-react'
import '../styles/nodes.css'

const PaymentNode = ({ data, selected }) => {
  return (
    <div className={`node payment-node ${selected ? 'selected' : ''}`}>
      <div className="node-header">
        <CreditCard size={16} />
        <span className="node-title">Payment</span>
      </div>
      <div className="node-content">
        <input
          type="text"
          placeholder="Product name"
          defaultValue={data.productName || ''}
          className="node-input"
          onClick={(e) => e.stopPropagation()}
        />
        <small className="node-description">
          ${data.price || '0.00'}
        </small>
      </div>
      <Handle type="input" position={Position.Top} />
      <Handle type="output" position={Position.Bottom} />
    </div>
  )
}

export default PaymentNode
