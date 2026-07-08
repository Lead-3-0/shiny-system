import { useCallback } from 'react'
import useFunnelStore from '../store/funnelStore'

const useFunnel = () => {
  const store = useFunnelStore()

  const addNodeToFunnel = useCallback(
    (type, position) => {
      return store.addNode(type, position)
    },
    [store]
  )

  const removeNodeFromFunnel = useCallback(
    (nodeId) => {
      store.deleteNode(nodeId)
    },
    [store]
  )

  const connectNodes = useCallback(
    (sourceId, targetId) => {
      return store.addEdge({
        source: sourceId,
        target: targetId,
      })
    },
    [store]
  )

  const updateNodeData = useCallback(
    (nodeId, data) => {
      store.updateNode(nodeId, {
        data: {
          ...store.nodes.find((n) => n.id === nodeId)?.data,
          ...data,
        },
      })
    },
    [store]
  )

  const getFunnelStructure = useCallback(() => {
    return store.getFunnelData()
  }, [store])

  return {
    nodes: store.nodes,
    edges: store.edges,
    addNodeToFunnel,
    removeNodeFromFunnel,
    connectNodes,
    updateNodeData,
    getFunnelStructure,
    setNodes: store.setNodes,
    setEdges: store.setEdges,
  }
}

export default useFunnel
