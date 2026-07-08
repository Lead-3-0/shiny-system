import ApiService from './ApiService'

class AnalyticsService {
  static async trackPageView(funnelId, pageData) {
    return ApiService.trackEvent(funnelId, {
      type: 'page_view',
      ...pageData,
    })
  }

  static async trackFormSubmission(funnelId, formData) {
    return ApiService.trackEvent(funnelId, {
      type: 'form_submission',
      ...formData,
    })
  }

  static async trackConversion(funnelId, conversionData) {
    return ApiService.trackEvent(funnelId, {
      type: 'conversion',
      ...conversionData,
    })
  }

  static async trackEmailOpen(funnelId, emailId) {
    return ApiService.trackEvent(funnelId, {
      type: 'email_open',
      emailId,
    })
  }

  static async trackEmailClick(funnelId, emailId, linkId) {
    return ApiService.trackEvent(funnelId, {
      type: 'email_click',
      emailId,
      linkId,
    })
  }

  static async getConversionMetrics(funnelId, timeRange = '7d') {
    return ApiService.getAnalytics(funnelId, timeRange)
  }

  static calculateConversionRate(leads, conversions) {
    if (leads === 0) return 0
    return ((conversions / leads) * 100).toFixed(2)
  }

  static calculateDropoffRate(startValue, endValue) {
    if (startValue === 0) return 0
    return (((startValue - endValue) / startValue) * 100).toFixed(2)
  }
}

export default AnalyticsService
