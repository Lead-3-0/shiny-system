import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const useFunnelStore = create(
  devtools(
    persist(
      (set, get) => ({
        // Nodes state
        nodes: [],
        setNodes: (nodes) => set({ nodes }),
        addNode: (type, position) => {
          const newNode = {
            id: `${type}-${Date.now()}`,
            type,
            position,
            data: {
              label: `${type} Node`,
            },
            selected: false,
          }
          set((state) => ({
            nodes: [...state.nodes, newNode],
          }))
          return newNode
        },
        updateNode: (nodeId, updates) =>
          set((state) => ({
            nodes: state.nodes.map((node) =>
              node.id === nodeId ? { ...node, ...updates } : node
            ),
          })),
        deleteNode: (nodeId) =>
          set((state) => ({
            nodes: state.nodes.filter((node) => node.id !== nodeId),
            edges: state.edges.filter(
              (edge) => edge.source !== nodeId && edge.target !== nodeId
            ),
          })),

        // Edges state
        edges: [],
        setEdges: (edges) => set({ edges }),
        addEdge: (edge) => {
          const newEdge = {
            id: `edge-${Date.now()}`,
            ...edge,
            selected: false,
          }
          set((state) => ({
            edges: [...state.edges, newEdge],
          }))
          return newEdge
        },
        deleteEdge: (edgeId) =>
          set((state) => ({
            edges: state.edges.filter((edge) => edge.id !== edgeId),
          })),
        updateEdge: (edgeId, updates) =>
          set((state) => ({
            edges: state.edges.map((edge) =>
              edge.id === edgeId ? { ...edge, ...updates } : edge
            ),
          })),

        // Funnel metadata
        funnelMetadata: {
          id: null,
          name: 'Untitled Funnel',
          description: '',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          status: 'draft',
        },
        setFunnelMetadata: (metadata) =>
          set({
            funnelMetadata: {
              ...get().funnelMetadata,
              ...metadata,
              updatedAt: new Date().toISOString(),
            },
          }),

        // Analytics state
        analytics: {
          visitors: 0,
          leads: 0,
          conversions: 0,
          revenue: 0,
          conversionRate: 0,
          dropOffPoints: [],
        },
        setAnalytics: (analytics) =>
          set((state) => ({
            analytics: {
              ...state.analytics,
              ...analytics,
            },
          })),
        updateAnalyticsMetric: (metric, value) =>
          set((state) => ({
            analytics: {
              ...state.analytics,
              [metric]: value,
            },
          })),

        // UI state
        uiState: {
          selectedNodeId: null,
          selectedEdgeId: null,
          isLoading: false,
          error: null,
          successMessage: null,
        },
        setSelectedNode: (nodeId) =>
          set((state) => ({
            uiState: { ...state.uiState, selectedNodeId: nodeId },
          })),
        setSelectedEdge: (edgeId) =>
          set((state) => ({
            uiState: { ...state.uiState, selectedEdgeId: edgeId },
          })),
        setLoading: (isLoading) =>
          set((state) => ({
            uiState: { ...state.uiState, isLoading },
          })),
        setError: (error) =>
          set((state) => ({
            uiState: { ...state.uiState, error },
          })),
        setSuccessMessage: (message) =>
          set((state) => ({
            uiState: { ...state.uiState, successMessage: message },
          })),

        // Bulk operations
        reset: () =>
          set({
            nodes: [],
            edges: [],
            funnelMetadata: {
              id: null,
              name: 'Untitled Funnel',
              description: '',
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              status: 'draft',
            },
            analytics: {
              visitors: 0,
              leads: 0,
              conversions: 0,
              revenue: 0,
              conversionRate: 0,
              dropOffPoints: [],
            },
            uiState: {
              selectedNodeId: null,
              selectedEdgeId: null,
              isLoading: false,
              error: null,
              successMessage: null,
            },
          }),
        loadFunnel: (funnelData) =>
          set({
            nodes: funnelData.nodes || [],
            edges: funnelData.edges || [],
            funnelMetadata: funnelData.metadata || {},
            analytics: funnelData.analytics || {},
          }),
        getFunnelData: () => {
          const state = get()
          return {
            nodes: state.nodes,
            edges: state.edges,
            metadata: state.funnelMetadata,
            analytics: state.analytics,
          }
        },
      }),
      {
        name: 'funnel-store',
        version: 1,
      }
    )
  )
)

export default useFunnelStore
