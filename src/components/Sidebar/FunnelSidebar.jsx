import React from 'react'
import { Menu, X } from 'lucide-react'
import NodeRegistry from '../../nodes/registry'
import useUIStore from '../../store/uiStore'
import '../styles/sidebar.css'

const FunnelSidebar = () => {
  const { sidebarOpen, toggleSidebar } = useUIStore()
  const nodeConfigs = NodeRegistry.getAllNodeConfigs()

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('application/reactflow', nodeType)
  }

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h3>Funnel Nodes</h3>
        </div>
        <div className="sidebar-content">
          {nodeConfigs.map((node) => (
            <div
              key={node.id}
              className="node-item"
              draggable
              onDragStart={(e) => onDragStart(e, node.id)}
              style={{ borderLeftColor: node.color }}
            >
              <div className="node-item-header">
                <span className="node-item-label">{node.label}</span>
              </div>
              <small className="node-item-description">{node.description}</small>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FunnelSidebar
