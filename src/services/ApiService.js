const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api'

class ApiService {
  static async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      })

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error('API Request Error:', error)
      throw error
    }
  }

  // Funnel endpoints
  static getFunnels() {
    return this.request('/funnels')
  }

  static getFunnel(id) {
    return this.request(`/funnels/${id}`)
  }

  static createFunnel(data) {
    return this.request('/funnels', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  static updateFunnel(id, data) {
    return this.request(`/funnels/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  static deleteFunnel(id) {
    return this.request(`/funnels/${id}`, {
      method: 'DELETE',
    })
  }

  // Analytics endpoints
  static getAnalytics(funnelId, timeRange = '7d') {
    return this.request(`/funnels/${funnelId}/analytics?timeRange=${timeRange}`)
  }

  static trackEvent(funnelId, eventData) {
    return this.request('/analytics/events', {
      method: 'POST',
      body: JSON.stringify({
        funnelId,
        ...eventData,
      }),
    })
  }

  // Lead endpoints
  static getLeads(funnelId) {
    return this.request(`/funnels/${funnelId}/leads`)
  }

  static updateLead(leadId, data) {
    return this.request(`/leads/${leadId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }
}

export default ApiService
