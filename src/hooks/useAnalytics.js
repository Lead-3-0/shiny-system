import { useCallback } from 'react'
import useAnalyticsStore from '../store/analyticsStore'

const useAnalytics = () => {
  const store = useAnalyticsStore()

  const trackMetric = useCallback(
    (metricName, value) => {
      store.addHistoryEntry({
        metric: metricName,
        value,
      })
    },
    [store]
  )

  const getMetricsForTimeRange = useCallback(
    (timeRange) => {
      store.setTimeRange(timeRange)
      // Filter history based on time range
      return store.history
    },
    [store]
  )

  const addSegment = useCallback(
    (segmentName, criteria) => {
      store.addSegment({
        name: segmentName,
        criteria,
      })
    },
    [store]
  )

  return {
    history: store.history,
    timeRange: store.timeRange,
    segments: store.segments,
    realTimeMetrics: store.realTimeMetrics,
    trackMetric,
    getMetricsForTimeRange,
    addSegment,
    removeSegment: store.removeSegment,
    updateRealTimeMetrics: store.updateRealTimeMetrics,
  }
}

export default useAnalytics
