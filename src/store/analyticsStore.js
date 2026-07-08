import { create } from 'zustand'

const useAnalyticsStore = create((set, get) => ({
  // Historical data
  history: [],
  addHistoryEntry: (entry) =>
    set((state) => ({
      history: [
        ...state.history,
        {
          ...entry,
          timestamp: new Date().toISOString(),
        },
      ],
    })),
  clearHistory: () => set({ history: [] }),

  // Time range filter
  timeRange: '7d',
  setTimeRange: (range) => set({ timeRange: range }),

  // Segment data
  segments: [],
  addSegment: (segment) =>
    set((state) => ({
      segments: [...state.segments, { ...segment, id: Date.now() }],
    })),
  removeSegment: (segmentId) =>
    set((state) => ({
      segments: state.segments.filter((s) => s.id !== segmentId),
    })),

  // Real-time updates
  realTimeMetrics: {
    activeVisitors: 0,
    impressions: 0,
    clicks: 0,
  },
  updateRealTimeMetrics: (metrics) =>
    set((state) => ({
      realTimeMetrics: {
        ...state.realTimeMetrics,
        ...metrics,
      },
    })),
}))

export default useAnalyticsStore
