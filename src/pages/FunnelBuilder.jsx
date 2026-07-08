import React, { useCallback } from 'react'
import { ReactFlow, Background, Controls, MiniMap, addEdge } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import useFunnelStore from '../store/funnelStore'
import NodeRegistry from '../nodes/registry'
import Sidebar from '../components/Sidebar/FunnelSidebar'
import TopBar from '../components/TopBar/TopBar'
import FunnelSettings from '../components/FunnelSettings/FunnelSettings'
import '../styles/canvas.css'

const nodeTypes = NodeRegistry.getNodeTypes()

const FunnelBuilder = () => {
  const {
    nodes,
    edges,
    addNode,
    updateNode,
    deleteNode,
    addEdge: storeAddEdge,
    deleteEdge,
    setNodes,
    setEdges,
  } = useFunnelStore()

  const [showSettings, setShowSettings] = React.useState(false)

  const onNodesChange = useCallback((changes) => {
    const newNodes = nodes
    changes.forEach((change) => {
      if (change.type === 'position' && change.dragging !== undefined) {
        const nodeIndex = newNodes.findIndex((n) => n.id === change.id)
        if (nodeIndex !== -1) {
          newNodes[nodeIndex] = {
            ...newNodes[nodeIndex],
            position: change.position,
          }
        }
      } else if (change.type === 'select') {
        const nodeIndex = newNodes.findIndex((n) => n.id === change.id)
        if (nodeIndex !== -1) {
          newNodes[nodeIndex] = {
            ...newNodes[nodeIndex],
            selected: change.selected,
          }
        }
      }
    })
    setNodes(newNodes)
  }, [nodes, setNodes])

  const onEdgesChange = useCallback((changes) => {
    let newEdges = edges
    changes.forEach((change) => {
      if (change.type === 'select') {
        newEdges = newEdges.map((e) =>
          e.id === change.id ? { ...e, selected: change.selected } : e
        )
      }
    })
    setEdges(newEdges)
  }, [edges, setEdges])

  const onConnect = useCallback(
    (connection) => {
      storeAddEdge(connection)
    },
    [storeAddEdge]
  )

  const onDrop = useCallback(
    (event) => {
      event.preventDefault()
      const type = event.dataTransfer.getData('application/reactflow')
      if (typeof type === 'undefined' || !type) {
        return
      }

      const bounds = event.currentTarget.getBoundingClientRect()
      const position = {
        x: event.clientX - bounds.left - 100,
        y: event.clientY - bounds.top - 30,
      }

      addNode(type, position)
    },
    [addNode]
  )

  const onDragOver = useCallback((event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  return (
    <div className="funnel-builder">
      <TopBar onSettingsClick={() => setShowSettings(true)} />
      <div className="builder-container">
        <Sidebar />
        <div className="canvas-wrapper" onDrop={onDrop} onDragOver={onDragOver}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
          >
            <Background />
            <Controls />
            <MiniMap />
          </ReactFlow>
        </div>
      </div>
      {showSettings && (
        <FunnelSettings onClose={() => setShowSettings(false)} />
      )}
    </div>
  )
}

export default FunnelBuilder
